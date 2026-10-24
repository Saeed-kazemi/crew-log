# Training Companion

A workout, food and progress tracker that installs on iPhone and Android and works offline.

- Sign-in: Firebase Authentication (email and password, verified email required).
- Data: Cloud Firestore, private to each account (see `firestore.rules`).
- Hosting: GitHub Pages (static files only).
- Barcode lookups: Open Food Facts (data under the Open Database Licence).
- Exercise images and data: free-exercise-db (public domain).

`firebase-config.js` holds the Firebase web settings. They are not secret: access to data is
controlled by the security rules, which must be published in the Firebase console.

When you change any file, bump `VERSION` in `sw.js` so installed copies update.
