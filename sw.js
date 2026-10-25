// Offline support. Bump VERSION whenever any file changes so phones pick up the new version.
const VERSION = 'tc-2026-10-25-12';
const CORE = [
  './', 'index.html', 'firebase-config.js', 'vendor.js', 'zxing_reader.wasm', 'exdb.json',
  'programs.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== 'tc-images' && k !== 'tc-fonts').map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });

// Try the network first so updates arrive, but fall back to the saved copy after 3.5 seconds
// (slow gym signal) or straight away when offline.
function networkFirst(req) {
  const fromCache = () => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html'));
  // If the host returns an error page (404, or 503 during a GitHub outage), keep using the saved app.
  const net = fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; }
    return fromCache().then(r => r || res);
  });
  const timer = new Promise(resolve => setTimeout(resolve, 3500)).then(fromCache);
  return Promise.race([net.catch(fromCache), timer.then(r => r || net)]);
}

function cacheFirst(req, cacheName) {
  return caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(cacheName).then(c => c.put(req, copy)); }
    return res;
  }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Fonts: keep a copy so the app looks the same offline.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(cacheFirst(req, 'tc-fonts'));
    return;
  }
  // Everything else on other sites (sign-in, database, food lookups) goes straight to the network.
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/firebase-config.js')) {
    e.respondWith(networkFirst(req));
    return;
  }
  if (url.pathname.includes('/ex/')) {
    e.respondWith(cacheFirst(req, 'tc-images'));
    return;
  }
  e.respondWith(cacheFirst(req, VERSION));
});
