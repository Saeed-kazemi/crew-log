/* Crew Log programme library.
   Every programme here is written for Crew Log. They follow long-established training methods
   (linear progression, upper/lower and push/pull/legs splits, tiered strength work, monthly percentage
   waves, power + hypertrophy splits, specialisation blocks), but the programmes and wording are original.
   Exercise rows: [name, sets, reps, rest seconds, main lift 1/0, cue, wave]
   'wave' marks a lift that follows the monthly percentage wave (sets/reps/percent set per week). */
(function () {
const P = [];
const add = p => P.push(p);
const HYP8 = { phases: [{ w: [1, 3], label: 'Build', main: [3, '8-10'], acc: [3, '10-12'], note: 'Add weight or a rep each week where you can.' }, { w: [5, 8], label: 'Push', main: [4, '6-8'], acc: [3, '10-12'], note: 'Heavier main lifts, one more set.' }], deload: [4] };
const HYP6 = { phases: [{ w: [1, 3], label: 'Build', main: [3, '8-12'], acc: [3, '12-15'], note: '' }, { w: [4, 6], label: 'Push', main: [4, '8-10'], acc: [4, '10-15'], note: 'Extra set on everything for the focus area.' }], deload: [] };
const HYP12 = { phases: [{ w: [1, 3], label: 'Volume', main: [3, '10-12'], acc: [3, '12-15'], note: '' }, { w: [5, 7], label: 'Build', main: [4, '8-10'], acc: [3, '10-12'], note: '' }, { w: [9, 11], label: 'Heavy', main: [4, '6-8'], acc: [3, '10-12'], note: '' }], deload: [4, 8, 12] };
const STR12 = { phases: [{ w: [1, 3], label: 'Base', main: [4, '6'], acc: [3, '8-10'], note: 'Leave 2 reps in the tank.' }, { w: [5, 7], label: 'Strength', main: [5, '5'], acc: [3, '8-10'], note: 'Add 2.5 kg a week to main lifts if all reps are done.' }, { w: [9, 11], label: 'Peak', main: [5, '3'], acc: [2, '8'], note: 'Heaviest weights of the programme.' }], deload: [4, 8, 12] };

/* ---------------- STARTER ---------------- */
add({ id: 'kickstart4', name: 'Kickstart', level: 'Starter', goal: 'beginner', weeks: 4, perWeek: 3, equip: 'gym', mins: '40-50',
  method: 'Full-body training three times a week, the standard starting point for new lifters.',
  summary: 'Your first month back in the gym. Three short full-body sessions a week on simple machines and dumbbells, so you learn the moves and build the habit without getting sore for days.',
  tips: ['Pick a weight you could lift 3-4 more times than the target. Technique first.', 'When every set hits the top of the rep range with good form, add the smallest weight next session.', 'Walk 5 minutes before you start and do one light warm-up set of the first exercise.'],
  sched: [1, 3, 5], phases: [{ w: [1, 2], label: 'Learn', main: [2, '10-12'], acc: [2, '12-15'], note: 'Two sets each. Smooth, controlled reps.' }, { w: [3, 4], label: 'Build', main: [3, '10-12'], acc: [3, '12-15'], note: 'Three sets now.' }], deload: [],
  plan: [
    { name: 'Full body A', ex: [['Leg press', 3, '10-12', 90, 1, 'Feet shoulder-width, lower until knees are about 90 degrees.'], ['Machine chest press', 3, '10-12', 90, 1, 'Shoulder blades back, press without locking the elbows.'], ['Lat pulldown', 3, '10-12', 90, 0, 'Pull to the top of the chest.'], ['Dumbbell lateral raise', 2, '12-15', 60, 0, 'Lead with the elbows.'], ['Plank', 2, '20-30s', 45, 0, 'Squeeze glutes and brace.']] },
    { name: 'Full body B', ex: [['Goblet squat', 3, '10-12', 90, 1, 'Sit between your heels.'], ['Seated cable row', 3, '10-12', 90, 1, 'Chest tall, pull to the belly.'], ['Seated dumbbell shoulder press', 3, '10-12', 90, 0, ''], ['Lying leg curl', 2, '12-15', 60, 0, ''], ['Dead bug', 2, '8 each side', 45, 0, 'Lower back stays on the floor.']] },
    { name: 'Full body C', ex: [['Romanian deadlift', 3, '10-12', 90, 1, 'Hips back, flat back.'], ['Dumbbell bench press', 3, '10-12', 90, 1, ''], ['One-arm dumbbell row', 3, '10-12', 75, 0, ''], ['Walking lunge', 2, '10 each leg', 75, 0, ''], ['Triceps rope pushdown', 2, '12-15', 60, 0, '']] }
  ] });
add({ id: 'machines4', name: 'Machine Confidence', level: 'Starter', goal: 'beginner', weeks: 4, perWeek: 3, equip: 'gym', mins: '35-45',
  method: 'Machine-based full-body circuit, the safest way to learn movement patterns.',
  summary: 'Only machines and cables, so every exercise is guided and easy to set up. Perfect if free weights feel intimidating. Graduate to Kickstart or Foundations after.',
  tips: ['Adjust the seat so the handles line up with the middle of your chest or shoulders.', 'Move the pin up one plate when the last set feels easy.', 'Ask gym staff to show you any machine you are unsure about.'],
  sched: [1, 3, 5], phases: [{ w: [1, 2], label: 'Learn', main: [2, '12'], acc: [2, '12-15'], note: '' }, { w: [3, 4], label: 'Build', main: [3, '10-12'], acc: [3, '12-15'], note: '' }], deload: [],
  plan: [
    { name: 'Machines A', ex: [['Leg press', 3, '12', 90, 1, ''], ['Machine chest press', 3, '12', 90, 1, ''], ['Seated cable row', 3, '12', 75, 0, ''], ['Leg extension', 2, '15', 60, 0, ''], ['Machine crunch', 2, '15', 45, 0, '']] },
    { name: 'Machines B', ex: [['Smith machine squat', 3, '10-12', 90, 1, ''], ['Lat pulldown', 3, '10-12', 90, 1, ''], ['Machine shoulder press', 3, '12', 75, 0, ''], ['Seated leg curl', 2, '12-15', 60, 0, ''], ['Cable curl', 2, '12-15', 45, 0, '']] },
    { name: 'Machines C', ex: [['Hack squat', 3, '10-12', 90, 1, ''], ['Pec deck fly', 3, '12-15', 75, 0, ''], ['Reverse pec deck', 3, '15', 60, 0, ''], ['Hip abduction machine', 2, '15', 45, 0, ''], ['Triceps rope pushdown', 2, '12-15', 45, 0, ''], ['Seated calf raise', 2, '15', 45, 0, '']] }
  ] });
add({ id: 'foundations8', name: 'Full Body Foundations', level: 'Starter', goal: 'beginner', weeks: 8, perWeek: 3, equip: 'gym', mins: '50-60',
  method: 'Full-body three times a week with barbell basics and weekly load increases (linear progression).',
  summary: 'Two months that teach the big lifts (squat, bench, row, deadlift) and build a solid base of strength and muscle. Ideal after Kickstart or if you have trained a little before.',
  tips: ['Add 2.5 kg to the main lifts whenever you hit every rep of every set.', 'Week 6 is an easier week.', 'Sleep and protein matter as much as the sessions.'],
  sched: [1, 3, 5], phases: [{ w: [1, 2], label: 'Technique', main: [3, '10'], acc: [2, '12'], note: 'Moderate weights, perfect reps.' }, { w: [3, 5], label: 'Build', main: [3, '8-10'], acc: [3, '10-12'], note: '' }, { w: [7, 8], label: 'Strength', main: [4, '6-8'], acc: [3, '10-12'], note: '' }], deload: [6],
  plan: [
    { name: 'Day A: squat and press', ex: [['Barbell back squat', 3, '8-10', 150, 1, 'Brace, sit down between the hips.'], ['Barbell bench press', 3, '8-10', 120, 1, 'Bar to lower chest, 2 seconds down.'], ['Chest-supported row', 3, '10-12', 90, 0, ''], ['Dumbbell lateral raise', 2, '12-15', 60, 0, ''], ['Hanging knee raise', 2, '10-12', 60, 0, '']] },
    { name: 'Day B: hinge and pull', ex: [['Deadlift', 3, '5-6', 180, 1, 'Bar over mid-foot, push the floor away.'], ['Barbell overhead press', 3, '8-10', 120, 1, 'Squeeze glutes, press up and back.'], ['Lat pulldown', 3, '10-12', 90, 0, ''], ['Bulgarian split squat', 2, '8-10 each leg', 75, 0, ''], ['Hammer curl', 2, '10-12', 60, 0, '']] },
    { name: 'Day C: legs and push', ex: [['Leg press', 3, '10-12', 120, 1, ''], ['Incline dumbbell press', 3, '8-10', 90, 1, ''], ['Barbell row', 3, '8-10', 90, 0, ''], ['Lying leg curl', 2, '10-12', 60, 0, ''], ['Triceps rope pushdown', 2, '12-15', 60, 0, ''], ['Plank', 2, '30-45s', 45, 0, '']] }
  ] });
add({ id: 'twoday8', name: 'Two-Day Minimum', level: 'Starter', goal: 'beginner', weeks: 8, perWeek: 2, equip: 'gym', mins: '50-60',
  method: 'Two full-body sessions a week: the minimum effective dose that still builds strength and muscle.',
  summary: 'Only two sessions a week? This covers every major muscle twice with no wasted exercises. Great for busy months, shift work or alongside sport like football.',
  tips: ['Leave at least two days between the sessions.', 'Because volume is low, push each set hard: stop 1-2 reps before failure.', 'Week 4 is an easier week.'],
  sched: [2, 5], phases: HYP8.phases, deload: HYP8.deload,
  plan: [
    { name: 'Full body 1', ex: [['Barbell back squat', 3, '6-8', 150, 1, ''], ['Barbell bench press', 3, '6-8', 120, 1, ''], ['Lat pulldown', 3, '8-10', 90, 0, ''], ['Romanian deadlift', 2, '8-10', 90, 0, ''], ['Dumbbell lateral raise', 2, '12-15', 45, 0, ''], ['Hanging knee raise', 2, '10-12', 45, 0, '']] },
    { name: 'Full body 2', ex: [['Deadlift', 3, '5', 180, 1, ''], ['Seated dumbbell shoulder press', 3, '8-10', 90, 1, ''], ['Chest-supported row', 3, '8-10', 90, 0, ''], ['Leg press', 2, '10-12', 90, 0, ''], ['Incline dumbbell curl', 2, '10-12', 45, 0, ''], ['Triceps rope pushdown', 2, '10-12', 45, 0, '']] }
  ] });

/* ---------------- INTERMEDIATE ---------------- */
add({ id: 'fivebyfive12', name: 'Five by Five Strength', level: 'Intermediate', goal: 'strength', weeks: 12, perWeek: 3, equip: 'gym', mins: '45-60',
  method: 'Classic 5 sets of 5 linear progression: squat every session, add weight every session while you can.',
  summary: 'The most proven strength routine there is. Three lifts per session, five sets of five, and you add weight every single session until you cannot. Simple, brutal and effective.',
  tips: ['Start lighter than you think: about 50-60% of what you could do for 5 reps. Then add 2.5 kg every session (5 kg for deadlift).', 'If you miss 5 reps on any set, repeat the weight next time. Miss it three sessions in a row and drop 10%, then build back up.', 'Rest 3 minutes between heavy sets. Weeks 4 and 8 are lighter; week 12 is a lighter week too.'],
  sched: [1, 3, 5], phases: [{ w: [1, 3], label: 'Build', main: [5, '5'], acc: [3, '8-10'], note: 'Add weight every session.' }, { w: [5, 7], label: 'Grind', main: [5, '5'], acc: [3, '8-10'], note: 'Smaller jumps now if needed.' }, { w: [9, 11], label: 'Heavy', main: [5, '3'], acc: [2, '8'], note: 'Switch to 5×3 when 5×5 stalls.' }], deload: [4, 8, 12],
  plan: [
    { name: 'Workout A', ex: [['Barbell back squat', 5, '5', 180, 1, ''], ['Barbell bench press', 5, '5', 180, 1, ''], ['Barbell row', 5, '5', 150, 1, ''], ['Plank', 2, '45s', 45, 0, '']] },
    { name: 'Workout B', ex: [['Barbell back squat', 5, '5', 180, 1, ''], ['Barbell overhead press', 5, '5', 180, 1, ''], ['Deadlift', 1, '5', 210, 0, 'One heavy set of 5 after warm-ups.'], ['Pull-ups', 3, '6-10', 120, 0, '']] },
    { name: 'Workout A (repeat)', ex: [['Barbell back squat', 5, '5', 180, 1, ''], ['Barbell bench press', 5, '5', 180, 1, ''], ['Barbell row', 5, '5', 150, 1, ''], ['Hanging knee raise', 2, '12', 45, 0, '']] }
  ] });
add({ id: 'ul8', name: 'Upper / Lower Builder', level: 'Intermediate', goal: 'muscle', weeks: 8, perWeek: 4, equip: 'gym', mins: '60-70',
  method: 'Upper/lower split: each muscle twice a week, heavy and volume days.',
  summary: 'Four sessions a week alternating upper and lower body. Every muscle trained twice a week with heavier and lighter days, a proven way to build muscle.',
  tips: ['A days are heavier; B days use more reps.', 'Leave 1-2 reps in reserve on most sets.', 'Week 4 is an easier week.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 3], label: 'Volume', main: [3, '8-10'], acc: [3, '10-12'], note: '' }, { w: [5, 8], label: 'Intensity', main: [4, '6-8'], acc: [3, '10-12'], note: '' }], deload: [4],
  plan: [
    { name: 'Upper A (heavy)', ex: [['Barbell bench press', 4, '6-8', 150, 1, ''], ['Barbell row', 4, '6-8', 120, 1, ''], ['Seated dumbbell shoulder press', 3, '8-10', 90, 0, ''], ['Lat pulldown', 3, '10-12', 90, 0, ''], ['EZ-bar curl', 3, '10-12', 60, 0, ''], ['Skull crushers', 3, '10-12', 60, 0, '']] },
    { name: 'Lower A (heavy)', ex: [['Barbell back squat', 4, '6-8', 180, 1, ''], ['Romanian deadlift', 3, '8-10', 120, 1, ''], ['Leg press', 3, '10-12', 90, 0, ''], ['Lying leg curl', 3, '10-12', 60, 0, ''], ['Standing calf raise', 4, '10-15', 60, 0, ''], ['Hanging leg raise', 3, '10-12', 60, 0, '']] },
    { name: 'Upper B (volume)', ex: [['Incline dumbbell press', 3, '10-12', 90, 1, ''], ['Seated cable row', 3, '10-12', 90, 1, ''], ['Cable crossover', 3, '12-15', 60, 0, ''], ['Dumbbell lateral raise', 4, '12-15', 60, 0, ''], ['Face pull', 3, '15', 60, 0, ''], ['Incline dumbbell curl', 3, '12', 60, 0, ''], ['Overhead cable triceps extension', 3, '12', 60, 0, '']] },
    { name: 'Lower B (volume)', ex: [['Hack squat', 3, '10-12', 120, 1, ''], ['Hip thrust', 3, '10-12', 90, 1, ''], ['Bulgarian split squat', 3, '10 each leg', 75, 0, ''], ['Leg extension', 3, '12-15', 60, 0, ''], ['Seated leg curl', 3, '12-15', 60, 0, ''], ['Seated calf raise', 4, '15-20', 45, 0, ''], ['Machine crunch', 3, '12-15', 60, 0, '']] }
  ] });
add({ id: 'ul12', name: 'Upper / Lower Strength', level: 'Intermediate', goal: 'strength', weeks: 12, perWeek: 4, equip: 'gym', mins: '60-75',
  method: 'Upper/lower strength block: reps drop and weights rise over three phases.',
  summary: 'Twelve weeks to get stronger on squat, bench, deadlift and overhead press, with enough accessory work to keep building muscle.',
  tips: ['Rest 2-3 minutes on main lifts.', 'Weeks 4, 8 and 12 are easier weeks.', 'Log every set so the app can show your strength trend.'],
  sched: [1, 2, 4, 5], phases: STR12.phases, deload: STR12.deload,
  plan: [
    { name: 'Upper: bench focus', ex: [['Barbell bench press', 4, '6', 180, 1, ''], ['Barbell row', 4, '6', 150, 1, ''], ['Incline dumbbell press', 3, '8-10', 90, 0, ''], ['Pull-ups', 3, '6-10', 120, 0, 'Use the assisted machine if needed.'], ['Triceps rope pushdown', 3, '10-12', 60, 0, ''], ['Face pull', 3, '15', 60, 0, '']] },
    { name: 'Lower: squat focus', ex: [['Barbell back squat', 4, '6', 180, 1, ''], ['Romanian deadlift', 3, '8', 150, 0, ''], ['Walking lunge', 3, '10 each leg', 90, 0, ''], ['Lying leg curl', 3, '10-12', 60, 0, ''], ['Standing calf raise', 3, '10-12', 60, 0, ''], ['Ab wheel rollout', 3, '8-10', 60, 0, '']] },
    { name: 'Upper: press focus', ex: [['Barbell overhead press', 4, '6', 180, 1, ''], ['Close-grip bench press', 3, '8', 120, 0, ''], ['Chest-supported row', 3, '8-10', 90, 0, ''], ['Lat pulldown', 3, '10', 90, 0, ''], ['Barbell curl', 3, '10', 60, 0, ''], ['Dumbbell lateral raise', 3, '12-15', 60, 0, '']] },
    { name: 'Lower: deadlift focus', ex: [['Deadlift', 4, '5', 210, 1, ''], ['Front squat', 3, '6-8', 150, 0, ''], ['Hip thrust', 3, '8-10', 90, 0, ''], ['Leg extension', 3, '12', 60, 0, ''], ['Seated calf raise', 3, '15', 45, 0, ''], ['Hanging leg raise', 3, '10', 60, 0, '']] }
  ] });
add({ id: 'ppl3', name: 'Push Pull Legs (3 days)', level: 'Intermediate', goal: 'muscle', weeks: 8, perWeek: 3, equip: 'gym', mins: '60',
  method: 'Push/pull/legs split, once a week each.',
  summary: 'The classic split in three sessions: pushing muscles, pulling muscles and legs. Good when you can only train three times a week.',
  tips: ['Each session is fairly long, so keep rests honest.', 'Add weight or a rep each week.', 'Week 4 is an easier week.'],
  sched: [1, 3, 5], phases: HYP8.phases, deload: HYP8.deload,
  plan: [
    { name: 'Push', ex: [['Barbell bench press', 3, '8-10', 150, 1, ''], ['Seated dumbbell shoulder press', 3, '8-10', 120, 1, ''], ['Incline dumbbell press', 3, '10-12', 90, 0, ''], ['Dumbbell lateral raise', 3, '12-15', 60, 0, ''], ['Triceps rope pushdown', 3, '10-12', 60, 0, ''], ['Overhead dumbbell extension', 2, '12', 60, 0, '']] },
    { name: 'Pull', ex: [['Barbell row', 3, '8-10', 120, 1, ''], ['Lat pulldown', 3, '8-10', 90, 1, ''], ['Seated cable row', 3, '10-12', 90, 0, ''], ['Face pull', 3, '15', 60, 0, ''], ['EZ-bar curl', 3, '10-12', 60, 0, ''], ['Hammer curl', 2, '12', 60, 0, '']] },
    { name: 'Legs', ex: [['Barbell back squat', 3, '8-10', 180, 1, ''], ['Romanian deadlift', 3, '8-10', 120, 1, ''], ['Leg press', 3, '10-12', 90, 0, ''], ['Lying leg curl', 3, '10-12', 60, 0, ''], ['Standing calf raise', 4, '12-15', 60, 0, ''], ['Hanging knee raise', 3, '12', 60, 0, '']] }
  ] });
add({ id: 'ppl6', name: 'Push Pull Legs (6 days)', level: 'Intermediate', goal: 'muscle', weeks: 12, perWeek: 6, equip: 'gym', mins: '50-60',
  method: 'Push/pull/legs twice a week: high frequency and volume for muscle growth.',
  summary: 'High-volume muscle building: push, pull and legs twice a week. Best if you already train regularly and can recover from six sessions.',
  tips: ['The first round each week is heavier; the second uses more reps.', 'If you miss a day, carry on with the next one.', 'Weeks 4, 8 and 12 are easier weeks.'],
  sched: [1, 2, 3, 4, 5, 6], phases: HYP12.phases, deload: HYP12.deload,
  plan: [
    { name: 'Push 1 (heavy)', ex: [['Barbell bench press', 4, '6-8', 150, 1, ''], ['Barbell overhead press', 3, '8-10', 120, 1, ''], ['Incline dumbbell press', 3, '10-12', 90, 0, ''], ['Cable lateral raise', 3, '12-15', 45, 0, ''], ['Skull crushers', 3, '10-12', 60, 0, '']] },
    { name: 'Pull 1 (heavy)', ex: [['Deadlift', 3, '5', 180, 1, ''], ['Pull-ups', 3, '6-10', 120, 1, ''], ['Chest-supported row', 3, '10-12', 90, 0, ''], ['Face pull', 3, '15', 60, 0, ''], ['Barbell curl', 3, '10-12', 60, 0, '']] },
    { name: 'Legs 1 (heavy)', ex: [['Barbell back squat', 4, '6-8', 180, 1, ''], ['Romanian deadlift', 3, '8-10', 120, 1, ''], ['Leg press', 3, '10-12', 90, 0, ''], ['Lying leg curl', 3, '10-12', 60, 0, ''], ['Standing calf raise', 4, '10-12', 60, 0, '']] },
    { name: 'Push 2 (volume)', ex: [['Incline barbell bench press', 3, '8-10', 120, 1, ''], ['Machine shoulder press', 3, '10-12', 90, 1, ''], ['Pec deck fly', 3, '12-15', 60, 0, ''], ['Dumbbell lateral raise', 4, '15', 45, 0, ''], ['Overhead cable triceps extension', 3, '12-15', 60, 0, '']] },
    { name: 'Pull 2 (volume)', ex: [['Barbell row', 3, '8-10', 120, 1, ''], ['Lat pulldown', 3, '10-12', 90, 1, ''], ['Seated cable row', 3, '12', 75, 0, ''], ['Reverse pec deck', 3, '15', 45, 0, ''], ['Incline dumbbell curl', 3, '12', 60, 0, ''], ['Hammer curl', 2, '12', 60, 0, '']] },
    { name: 'Legs 2 (volume)', ex: [['Front squat', 3, '8-10', 150, 1, ''], ['Hip thrust', 3, '10-12', 90, 1, ''], ['Bulgarian split squat', 3, '10 each leg', 75, 0, ''], ['Leg extension', 3, '15', 60, 0, ''], ['Seated leg curl', 3, '12-15', 60, 0, ''], ['Seated calf raise', 4, '15-20', 45, 0, ''], ['Ab wheel rollout', 3, '10', 60, 0, '']] }
  ] });
add({ id: 'split5', name: 'Five-Day Split', level: 'Intermediate', goal: 'muscle', weeks: 8, perWeek: 5, equip: 'gym', mins: '50-60',
  method: 'Classic body-part split: one muscle group per day.',
  summary: 'One focus per day: chest, back, legs, shoulders and arms. Lots of variety for each muscle and a great pump.',
  tips: ['Push the last set of each exercise close to failure, safely.', 'Keep weekends for rest or a walk.', 'Week 4 is an easier week.'],
  sched: [1, 2, 3, 4, 5], phases: HYP8.phases, deload: HYP8.deload,
  plan: [
    { name: 'Chest', ex: [['Barbell bench press', 4, '6-8', 150, 1, ''], ['Incline dumbbell press', 3, '8-10', 90, 0, ''], ['Machine chest press', 3, '10-12', 75, 0, ''], ['Cable crossover', 3, '12-15', 60, 0, ''], ['Chest dips', 2, '8-12', 75, 0, '']] },
    { name: 'Back', ex: [['Deadlift', 3, '5', 180, 1, ''], ['Lat pulldown', 3, '8-10', 90, 0, ''], ['T-bar row', 3, '8-10', 90, 0, ''], ['Seated cable row', 3, '10-12', 75, 0, ''], ['Straight-arm pulldown', 3, '12-15', 60, 0, '']] },
    { name: 'Legs', ex: [['Barbell back squat', 4, '6-8', 180, 1, ''], ['Leg press', 3, '10-12', 120, 0, ''], ['Romanian deadlift', 3, '8-10', 120, 0, ''], ['Leg extension', 3, '12-15', 60, 0, ''], ['Lying leg curl', 3, '12-15', 60, 0, ''], ['Standing calf raise', 4, '12-15', 60, 0, '']] },
    { name: 'Shoulders', ex: [['Barbell overhead press', 4, '6-8', 150, 1, ''], ['Arnold press', 3, '10-12', 90, 0, ''], ['Dumbbell lateral raise', 4, '12-15', 45, 0, ''], ['Reverse pec deck', 3, '15', 45, 0, ''], ['Barbell shrug', 3, '10-12', 60, 0, ''], ['Hanging leg raise', 3, '10-12', 60, 0, '']] },
    { name: 'Arms', ex: [['Close-grip bench press', 3, '8-10', 120, 1, ''], ['EZ-bar curl', 3, '8-10', 75, 0, ''], ['Skull crushers', 3, '10-12', 60, 0, ''], ['Incline dumbbell curl', 3, '10-12', 60, 0, ''], ['Triceps rope pushdown', 3, '12-15', 45, 0, ''], ['Hammer curl', 3, '12', 45, 0, ''], ['Wrist curl', 2, '15', 45, 0, '']] }
  ] });
add({ id: 'tiers12', name: 'Three-Tier Strength', level: 'Intermediate', goal: 'strength', weeks: 12, perWeek: 4, equip: 'gym', mins: '60-70',
  method: 'Tiered training: one heavy main lift (tier 1), one moderate secondary lift (tier 2), then high-rep accessories (tier 3).',
  summary: 'Each session: one heavy lift for strength, one medium lift for size, then light pump work. A popular, very effective way to get stronger and bigger at the same time.',
  tips: ['Tier 1 (first exercise): heavy sets of 3. Add weight when all sets are done; if you fail, move to 6 sets of 2, then 10 singles, then reset 10% lighter.', 'Tier 2: sets of 10. Add weight when all reps are done.', 'Tier 3: sets of 15. Go hard on the last set.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 11], label: 'Tiers', main: [5, '3'], acc: [3, '10'], note: 'Tier 1 5×3, tier 2 3×10, tier 3 3×15.' }], deload: [12],
  plan: [
    { name: 'Squat day', ex: [['Barbell back squat', 5, '3', 180, 1, 'Tier 1'], ['Barbell bench press', 3, '10', 120, 0, 'Tier 2'], ['Lat pulldown', 3, '15', 60, 0, 'Tier 3'], ['Leg extension', 3, '15', 60, 0, 'Tier 3']] },
    { name: 'Overhead press day', ex: [['Barbell overhead press', 5, '3', 180, 1, 'Tier 1'], ['Deadlift', 3, '10', 150, 0, 'Tier 2: lighter, crisp reps.'], ['Chest-supported row', 3, '15', 60, 0, 'Tier 3'], ['Dumbbell lateral raise', 3, '15', 45, 0, 'Tier 3']] },
    { name: 'Bench day', ex: [['Barbell bench press', 5, '3', 180, 1, 'Tier 1'], ['Barbell back squat', 3, '10', 150, 0, 'Tier 2'], ['Lat pulldown', 3, '15', 60, 0, 'Tier 3'], ['Triceps rope pushdown', 3, '15', 45, 0, 'Tier 3']] },
    { name: 'Deadlift day', ex: [['Deadlift', 5, '3', 210, 1, 'Tier 1'], ['Barbell overhead press', 3, '10', 120, 0, 'Tier 2'], ['Seated cable row', 3, '15', 60, 0, 'Tier 3'], ['EZ-bar curl', 3, '15', 45, 0, 'Tier 3']] }
  ] });

/* ---------------- ADVANCED ---------------- */
add({ id: 'powersize8', name: 'Power & Size', level: 'Advanced', goal: 'muscle', weeks: 8, perWeek: 4, equip: 'gym', mins: '70-80',
  method: 'Power + hypertrophy split: two heavy power days and two high-volume bodybuilding days a week.',
  summary: 'The best of both worlds: heavy 3-5 rep power days for strength, then 8-15 rep days for muscle. Demanding, so make sure sleep and food are on point.',
  tips: ['Power days: rest 3 minutes, stop a rep short of failure.', 'Hypertrophy days: rest 60-90 seconds, chase the pump.', 'Week 4 and week 8 are easier weeks.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 3], label: 'Build', main: [4, '3-5'], acc: [3, '8-12'], note: '' }, { w: [5, 7], label: 'Push', main: [5, '3-5'], acc: [4, '8-12'], note: 'Extra set everywhere.' }], deload: [4, 8],
  plan: [
    { name: 'Upper power', ex: [['Barbell bench press', 4, '3-5', 180, 1, ''], ['Barbell row', 4, '3-5', 180, 1, ''], ['Barbell overhead press', 3, '5-8', 150, 0, ''], ['Pull-ups', 3, '6-8', 120, 0, 'Add weight if you can do 8+.'], ['EZ-bar curl', 3, '6-10', 90, 0, ''], ['Skull crushers', 3, '6-10', 90, 0, '']] },
    { name: 'Lower power', ex: [['Barbell back squat', 4, '3-5', 210, 1, ''], ['Deadlift', 3, '3-5', 210, 1, ''], ['Leg press', 3, '10-15', 120, 0, ''], ['Lying leg curl', 3, '6-10', 90, 0, ''], ['Standing calf raise', 4, '6-10', 60, 0, '']] },
    { name: 'Upper hypertrophy', ex: [['Incline dumbbell press', 4, '8-12', 90, 1, ''], ['Pec deck fly', 3, '8-12', 60, 0, ''], ['Seated cable row', 4, '8-12', 90, 1, ''], ['One-arm dumbbell row', 3, '8-12', 75, 0, ''], ['Dumbbell lateral raise', 3, '10-12', 60, 0, ''], ['Incline dumbbell curl', 3, '8-12', 60, 0, ''], ['Triceps rope pushdown', 3, '8-12', 60, 0, '']] },
    { name: 'Lower hypertrophy', ex: [['Front squat', 4, '8-12', 150, 1, ''], ['Bulgarian split squat', 3, '8-12 each leg', 90, 0, ''], ['Leg extension', 3, '10-15', 60, 0, ''], ['Seated leg curl', 3, '10-15', 60, 0, ''], ['Seated calf raise', 4, '10-15', 45, 0, ''], ['Hanging leg raise', 3, '12-15', 60, 0, '']] }
  ] });
add({ id: 'waves12', name: 'Monthly Strength Waves', level: 'Advanced', goal: 'strength', weeks: 12, perWeek: 4, equip: 'gym', mins: '60',
  method: 'Percentage waves from a training max: week 1 fives, week 2 threes, week 3 heavy 5-3-1, week 4 light. Training max rises each month.',
  summary: 'Slow, steady, long-term strength. Each main lift follows a four-week wave of percentages based on your training max, with a last "as many reps as possible" set to beat each month. The app works out your weights from your logs.',
  tips: ['Your training max is 90% of your best estimated one-rep max. The app calculates it from what you log.', 'The last set marked + is as many good reps as you can. Never grind ugly reps.', 'Each new month, the weights go up (about 2.5 kg upper body, 5 kg lower body) because your logs go up.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 11], label: 'Wave', main: [3, '5'], acc: [5, '10'], note: 'Main lift follows the wave; assistance 5×10 with moderate weight.' }], deload: [4, 8, 12],
  plan: [
    { name: 'Press day', ex: [['Barbell overhead press', 3, '5', 180, 1, '', 1], ['Close-grip bench press', 5, '10', 90, 0, 'About 50% of your bench.'], ['Pull-ups', 5, '8-10', 90, 0, ''], ['Dumbbell lateral raise', 3, '15', 45, 0, '']] },
    { name: 'Deadlift day', ex: [['Deadlift', 3, '5', 210, 1, '', 1], ['Front squat', 5, '10', 120, 0, 'Light and smooth.'], ['Hanging leg raise', 5, '10', 60, 0, '']] },
    { name: 'Bench day', ex: [['Barbell bench press', 3, '5', 180, 1, '', 1], ['Incline dumbbell press', 5, '10', 90, 0, ''], ['One-arm dumbbell row', 5, '10', 75, 0, ''], ['Triceps rope pushdown', 3, '15', 45, 0, '']] },
    { name: 'Squat day', ex: [['Barbell back squat', 3, '5', 210, 1, '', 1], ['Romanian deadlift', 5, '10', 120, 0, ''], ['Lying leg curl', 3, '12', 60, 0, ''], ['Ab wheel rollout', 3, '10', 60, 0, '']] }
  ] });
add({ id: 'golden6', name: 'Old-School Volume Six', level: 'Advanced', goal: 'muscle', weeks: 8, perWeek: 6, equip: 'gym', mins: '75-90',
  method: 'Classic high-volume double split: chest and back, shoulders and arms, legs, each twice a week.',
  summary: 'Old-school bodybuilding volume: big compound lifts, supersets of opposing muscles and lots of sets. Only for experienced lifters with time, food and sleep to recover.',
  tips: ['Superset chest with back exercises where it says A1 / A2.', 'Keep form strict: volume is the stimulus, not ego weight.', 'Week 4 is an easier week; take it.'],
  sched: [1, 2, 3, 4, 5, 6], phases: [{ w: [1, 3], label: 'Volume', main: [4, '8-10'], acc: [4, '10-12'], note: '' }, { w: [5, 8], label: 'Heavier', main: [5, '6-8'], acc: [4, '8-12'], note: '' }], deload: [4],
  plan: [
    { name: 'Chest and back 1', ex: [['Barbell bench press', 4, '8-10', 120, 1, 'A1'], ['Pull-ups', 4, '8-10', 120, 1, 'A2'], ['Incline dumbbell press', 4, '10-12', 90, 0, 'B1'], ['Barbell row', 4, '10-12', 90, 0, 'B2'], ['Dumbbell fly', 3, '12', 60, 0, ''], ['Straight-arm pulldown', 3, '12', 60, 0, '']] },
    { name: 'Shoulders and arms 1', ex: [['Barbell overhead press', 4, '8-10', 120, 1, ''], ['Dumbbell lateral raise', 4, '12', 60, 0, ''], ['Barbell curl', 4, '8-10', 75, 0, 'A1'], ['Close-grip bench press', 4, '8-10', 75, 0, 'A2'], ['Concentration curl', 3, '12', 45, 0, ''], ['Overhead dumbbell extension', 3, '12', 45, 0, '']] },
    { name: 'Legs 1', ex: [['Barbell back squat', 5, '8-10', 180, 1, ''], ['Lying leg curl', 4, '10-12', 75, 0, ''], ['Leg extension', 4, '12', 60, 0, ''], ['Stiff-leg deadlift', 4, '10', 120, 0, ''], ['Standing calf raise', 5, '12-15', 45, 0, '']] },
    { name: 'Chest and back 2', ex: [['Incline barbell bench press', 4, '8-10', 120, 1, 'A1'], ['T-bar row', 4, '8-10', 120, 1, 'A2'], ['Chest dips', 4, '10-12', 75, 0, 'B1'], ['Lat pulldown', 4, '10-12', 75, 0, 'B2'], ['Cable crossover', 3, '12-15', 60, 0, ''], ['Hanging leg raise', 4, '12', 45, 0, '']] },
    { name: 'Shoulders and arms 2', ex: [['Arnold press', 4, '8-10', 90, 1, ''], ['Upright row (wide grip)', 3, '10-12', 75, 0, ''], ['Reverse pec deck', 3, '15', 45, 0, ''], ['Preacher curl', 4, '10', 60, 0, 'A1'], ['Skull crushers', 4, '10', 60, 0, 'A2'], ['Reverse barbell curl', 3, '12', 45, 0, '']] },
    { name: 'Legs 2', ex: [['Front squat', 4, '8-10', 150, 1, ''], ['Walking lunge', 4, '12 each leg', 90, 0, ''], ['Seated leg curl', 4, '12', 60, 0, ''], ['Leg press', 4, '15', 90, 0, ''], ['Seated calf raise', 5, '15-20', 45, 0, '']] }
  ] });
add({ id: 'peak6', name: 'Strength Peak', level: 'Advanced', goal: 'strength', weeks: 6, perWeek: 4, equip: 'gym', mins: '60-75',
  method: 'Peaking block: volume falls and intensity rises towards heavy singles, then a test week.',
  summary: 'Six weeks to show off your strength. Fewer reps, heavier weights each week, then test new personal bests on squat, bench and deadlift in week 6. Run it after a strength programme.',
  tips: ['Only for lifters with solid technique on the big three.', 'Week 6: work up to a heavy single you could do with good form; no grinding.', 'Keep accessories light: everything serves the main lifts.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 2], label: 'Heavy triples', main: [5, '3'], acc: [3, '8'], note: '' }, { w: [3, 4], label: 'Doubles', main: [5, '2'], acc: [2, '8'], note: '' }, { w: [5, 5], label: 'Singles', main: [4, '1'], acc: [2, '6'], note: 'Heavy singles, plenty of rest.' }, { w: [6, 6], label: 'Test', main: [1, '1'], acc: [1, '8'], note: 'Work up to a new best single.' }], deload: [],
  plan: [
    { name: 'Squat', ex: [['Barbell back squat', 5, '3', 240, 1, ''], ['Leg press', 3, '8', 120, 0, ''], ['Plank', 3, '45s', 60, 0, '']] },
    { name: 'Bench', ex: [['Barbell bench press', 5, '3', 240, 1, ''], ['Close-grip bench press', 3, '8', 120, 0, ''], ['Chest-supported row', 3, '8', 90, 0, '']] },
    { name: 'Deadlift', ex: [['Deadlift', 5, '3', 240, 1, ''], ['Back extension', 3, '10', 90, 0, ''], ['Hanging knee raise', 3, '12', 60, 0, '']] },
    { name: 'Light upper', ex: [['Barbell overhead press', 3, '6', 150, 0, ''], ['Lat pulldown', 3, '10', 90, 0, ''], ['Face pull', 3, '15', 60, 0, ''], ['Triceps rope pushdown', 3, '12', 60, 0, '']] }
  ] });

/* ---------------- FOCUS ---------------- */
const keepBody = {
  push: [['Barbell bench press', 3, '6-8', 150, 1, ''], ['Seated dumbbell shoulder press', 3, '8-10', 90, 0, '']],
  pull: [['Lat pulldown', 3, '8-10', 90, 1, ''], ['Chest-supported row', 3, '8-10', 90, 0, '']],
  legs: [['Barbell back squat', 3, '6-8', 180, 1, ''], ['Romanian deadlift', 3, '8-10', 120, 0, ''], ['Standing calf raise', 3, '12', 45, 0, '']]
};
add({ id: 'arms6', name: 'Arms Builder', level: 'Intermediate', goal: 'focus', focus: 'arms', weeks: 6, perWeek: 4, equip: 'gym', mins: '55-65',
  method: 'Specialisation block: arms trained four times a week at different angles and rep ranges; the rest of the body on maintenance.',
  summary: 'Bigger biceps and triceps in six weeks. Arms get direct work every session with varied grips and angles, while chest, back and legs are kept ticking over with fewer sets.',
  tips: ['Biceps grow from the stretch: control the lowering on every curl.', 'Triceps are two-thirds of your arm. Overhead work hits the long head.', 'Eat in a small surplus during this block if you want size.'],
  sched: [1, 2, 4, 5], phases: HYP6.phases, deload: HYP6.deload,
  plan: [
    { name: 'Upper + heavy arms', ex: keepBody.push.concat([['Close-grip bench press', 3, '6-8', 120, 1, ''], ['Barbell curl', 3, '6-8', 90, 0, ''], ['Skull crushers', 3, '8-10', 75, 0, '']]) },
    { name: 'Lower + arm pump', ex: keepBody.legs.concat([['Incline dumbbell curl', 3, '10-12', 60, 0, ''], ['Triceps rope pushdown', 3, '12-15', 60, 0, '']]) },
    { name: 'Pull + biceps', ex: keepBody.pull.concat([['EZ-bar curl', 3, '8-10', 75, 0, ''], ['Hammer curl', 3, '10-12', 60, 0, ''], ['Overhead cable triceps extension', 3, '10-12', 60, 0, '']]) },
    { name: 'Arms day', ex: [['Preacher curl', 4, '8-12', 75, 1, ''], ['Triceps dips', 4, '8-12', 90, 1, ''], ['Spider curl', 3, '12-15', 45, 0, ''], ['Overhead dumbbell extension', 3, '12-15', 60, 0, ''], ['Reverse barbell curl', 3, '12', 45, 0, ''], ['Diamond push-ups', 2, 'max', 60, 0, 'As many good reps as you can.']] }
  ] });
add({ id: 'biceps4', name: 'Biceps Peak', level: 'Intermediate', goal: 'focus', focus: 'biceps', weeks: 4, perWeek: 4, equip: 'gym', mins: '50-60',
  method: 'Short specialisation block hitting biceps 4 times a week: long head (stretched), short head (peak) and brachialis.',
  summary: 'A four-week shock block for your biceps. Every session has a different curl type, covering the stretch, the squeeze and the thickness under the biceps. The rest of your body stays on a light maintenance plan.',
  tips: ['Do not swing: if your shoulders move, the weight is too heavy.', 'Squeeze 1 second at the top of every curl.', 'After the four weeks, go back to a normal programme to let the gains settle.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 2], label: 'Build', main: [3, '8-12'], acc: [3, '12-15'], note: '' }, { w: [3, 4], label: 'Peak', main: [4, '8-12'], acc: [4, '12-15'], note: 'One more set on every curl.' }], deload: [],
  plan: [
    { name: 'Push + long-head biceps', ex: keepBody.push.concat([['Incline dumbbell curl', 3, '8-12', 75, 1, 'Arms hang back: big stretch.'], ['Triceps rope pushdown', 2, '12', 60, 0, '']]) },
    { name: 'Legs + thickness', ex: keepBody.legs.concat([['Hammer curl', 3, '10-12', 60, 1, ''], ['Reverse barbell curl', 2, '12-15', 45, 0, '']]) },
    { name: 'Pull + heavy curls', ex: keepBody.pull.concat([['Barbell curl', 3, '6-10', 90, 1, ''], ['Cable curl', 3, '12-15', 45, 0, '']]) },
    { name: 'Biceps peak day', ex: [['Preacher curl', 4, '8-12', 75, 1, 'Squeeze at the top.'], ['Spider curl', 3, '10-12', 60, 0, ''], ['Concentration curl', 3, '12 each arm', 45, 0, ''], ['Hammer curl', 3, '12', 45, 0, ''], ['Pull-ups', 2, 'max', 90, 0, 'Palms facing you (chin-ups).']] }
  ] });
add({ id: 'chest6', name: 'Chest Builder', level: 'Intermediate', goal: 'focus', focus: 'chest', weeks: 6, perWeek: 4, equip: 'gym', mins: '55-65',
  method: 'Chest specialisation: three chest sessions a week covering upper, middle and lower chest with presses and flyes.',
  summary: 'Six weeks to build a fuller chest. Upper chest gets extra attention (it is the area most people lack), with heavy presses, deep stretches and squeezes.',
  tips: ['Keep shoulder blades pinned back on every press so the chest, not the shoulders, does the work.', 'Get a deep stretch on flyes, but stay pain-free.', 'Push-ups at the end of a session are a great finisher.'],
  sched: [1, 2, 4, 5], phases: HYP6.phases, deload: HYP6.deload,
  plan: [
    { name: 'Heavy chest', ex: [['Barbell bench press', 4, '5-8', 150, 1, ''], ['Incline dumbbell press', 3, '8-10', 90, 1, ''], ['Chest dips', 3, '8-12', 90, 0, ''], ['Triceps rope pushdown', 3, '12', 45, 0, '']] },
    { name: 'Legs', ex: keepBody.legs.concat([['Hanging knee raise', 3, '12', 45, 0, '']]) },
    { name: 'Upper chest + back', ex: [['Incline barbell bench press', 4, '8-10', 120, 1, ''], ['Low-to-high cable fly', 3, '12-15', 60, 0, ''], ['Chest-supported row', 3, '8-10', 90, 0, ''], ['Lat pulldown', 3, '10-12', 75, 0, ''], ['Dumbbell lateral raise', 3, '15', 45, 0, '']] },
    { name: 'Chest pump', ex: [['Machine chest press', 3, '10-12', 90, 1, ''], ['Dumbbell fly', 3, '12-15', 60, 0, ''], ['Cable crossover', 3, '15', 45, 0, ''], ['Push-ups', 2, 'max', 60, 0, ''], ['EZ-bar curl', 3, '10-12', 60, 0, '']] }
  ] });
add({ id: 'shoulders6', name: 'Shoulder Width', level: 'Intermediate', goal: 'focus', focus: 'shoulders', weeks: 6, perWeek: 4, equip: 'gym', mins: '50-60',
  method: 'Delt specialisation: side delts trained often with high reps for width, rear delts for balance and posture.',
  summary: 'Wider shoulders make your waist look smaller and your frame look bigger. Side delts are hit four times a week with lots of lateral raises; rear delts keep shoulders healthy.',
  tips: ['Lateral raises: light weight, lead with the elbows, no swinging.', 'Rear delts love high reps (15-20).', 'Overhead pressing builds the front delts and overall strength.'],
  sched: [1, 2, 4, 5], phases: HYP6.phases, deload: HYP6.deload,
  plan: [
    { name: 'Press + shoulders', ex: [['Barbell overhead press', 4, '6-8', 150, 1, ''], ['Incline dumbbell press', 3, '8-10', 90, 0, ''], ['Dumbbell lateral raise', 4, '12-15', 45, 1, ''], ['Reverse pec deck', 3, '15-20', 45, 0, '']] },
    { name: 'Legs + side delts', ex: keepBody.legs.concat([['Cable lateral raise', 3, '15 each arm', 45, 0, '']]) },
    { name: 'Pull + rear delts', ex: keepBody.pull.concat([['Face pull', 4, '15-20', 45, 0, ''], ['Dumbbell lateral raise', 3, '15-20', 45, 0, '']]) },
    { name: 'Shoulder day', ex: [['Seated dumbbell shoulder press', 3, '8-12', 90, 1, ''], ['Arnold press', 3, '10-12', 75, 0, ''], ['Upright row (wide grip)', 3, '12', 60, 0, ''], ['Cable lateral raise', 3, '15', 45, 0, ''], ['Reverse pec deck', 3, '20', 45, 0, ''], ['Barbell shrug', 3, '12', 60, 0, '']] }
  ] });
add({ id: 'back6', name: 'Back Width & Thickness', level: 'Intermediate', goal: 'focus', focus: 'back', weeks: 6, perWeek: 4, equip: 'gym', mins: '55-65',
  method: 'Back specialisation: vertical pulls for width (lats) and horizontal rows for thickness, three times a week.',
  summary: 'A wide, thick back: the V-shape. Pulldowns and pull-ups for width, heavy rows for thickness, and straight-arm work to feel your lats.',
  tips: ['Pull with your elbows, not your hands. Imagine your hands are hooks.', 'Pause for a second with the weight touching you on every row.', 'Use straps on heavy rows if grip gives out first.'],
  sched: [1, 2, 4, 5], phases: HYP6.phases, deload: HYP6.deload,
  plan: [
    { name: 'Width', ex: [['Pull-ups', 4, '6-10', 120, 1, 'Assisted machine if needed.'], ['Lat pulldown', 3, '10-12', 90, 0, ''], ['Straight-arm pulldown', 3, '12-15', 60, 0, ''], ['Face pull', 3, '15', 45, 0, ''], ['Hammer curl', 3, '12', 45, 0, '']] },
    { name: 'Legs + push', ex: [['Barbell back squat', 3, '6-8', 180, 1, ''], ['Barbell bench press', 3, '6-8', 150, 1, ''], ['Lying leg curl', 3, '10-12', 60, 0, ''], ['Seated dumbbell shoulder press', 3, '8-10', 90, 0, '']] },
    { name: 'Thickness', ex: [['Barbell row', 4, '6-8', 120, 1, ''], ['T-bar row', 3, '8-10', 90, 0, ''], ['One-arm dumbbell row', 3, '10-12 each arm', 75, 0, ''], ['Barbell shrug', 3, '10-12', 60, 0, ''], ['Back extension', 3, '12-15', 60, 0, '']] },
    { name: 'Deadlift + lats', ex: [['Deadlift', 3, '5', 210, 1, ''], ['Seated cable row', 3, '10-12', 90, 0, ''], ['Lat pulldown', 3, '12-15', 60, 0, 'Close grip.'], ['Incline dumbbell press', 3, '8-10', 90, 0, ''], ['Hanging leg raise', 3, '12', 45, 0, '']] }
  ] });
add({ id: 'legs6', name: 'Leg Day Specialist', level: 'Intermediate', goal: 'focus', focus: 'legs', weeks: 6, perWeek: 4, equip: 'gym', mins: '55-70',
  method: 'Leg specialisation: a heavy leg day, a high-rep leg day and a posterior-chain day each week.',
  summary: 'Never skip leg day again. Quads, hamstrings, glutes and calves trained hard three times a week, with one upper-body day to keep everything balanced.',
  tips: ['Full range of motion beats heavy half reps for growth.', 'Hamstrings need both hip hinges (Romanian deadlift) and knee curls.', 'Calves respond to a long pause in the stretched position.'],
  sched: [1, 2, 4, 5], phases: HYP6.phases, deload: HYP6.deload,
  plan: [
    { name: 'Heavy legs', ex: [['Barbell back squat', 4, '5-8', 180, 1, ''], ['Romanian deadlift', 3, '8-10', 120, 1, ''], ['Leg press', 3, '10-12', 120, 0, ''], ['Standing calf raise', 4, '8-12', 60, 0, 'Pause 2 seconds at the bottom.']] },
    { name: 'Upper body', ex: keepBody.push.concat(keepBody.pull) },
    { name: 'Quad pump', ex: [['Hack squat', 4, '10-12', 120, 1, ''], ['Bulgarian split squat', 3, '10-12 each leg', 90, 0, ''], ['Leg extension', 4, '15-20', 60, 0, ''], ['Walking lunge', 2, '20 steps', 75, 0, ''], ['Seated calf raise', 4, '15-20', 45, 0, '']] },
    { name: 'Hamstrings and glutes', ex: [['Stiff-leg deadlift', 4, '8-10', 120, 1, ''], ['Hip thrust', 3, '10-12', 90, 0, ''], ['Lying leg curl', 3, '10-12', 60, 0, ''], ['Seated leg curl', 3, '12-15', 60, 0, ''], ['Nordic curl', 3, '4-8', 90, 0, 'Lower yourself as slowly as you can.']] }
  ] });
add({ id: 'glutes6', name: 'Glutes & Legs Focus', level: 'Intermediate', goal: 'focus', focus: 'glutes', weeks: 6, perWeek: 4, equip: 'gym', mins: '50-60',
  method: 'Glute specialisation: hip thrusts, hinges and abduction twice a week, plus two lighter upper-body days.',
  summary: 'Stronger, shapelier glutes and legs. Two lower-body days built around the glutes and hamstrings, plus two lighter upper-body days to keep you balanced.',
  tips: ['Squeeze at the top of every hip thrust for a second.', 'Upper days keep the rest of the body balanced; do not skip them.', 'Add weight to hip thrusts whenever you hit the top of the range.'],
  sched: [1, 2, 4, 5], phases: HYP6.phases, deload: HYP6.deload,
  plan: [
    { name: 'Glutes and hamstrings', ex: [['Hip thrust', 4, '8-10', 120, 1, ''], ['Romanian deadlift', 3, '10', 120, 1, ''], ['Bulgarian split squat', 3, '10 each leg', 90, 0, ''], ['Lying leg curl', 3, '12', 60, 0, ''], ['Cable glute kickback', 3, '12-15 each', 45, 0, ''], ['Hip abduction machine', 3, '15-20', 45, 0, '']] },
    { name: 'Upper (light)', ex: [['Lat pulldown', 3, '10-12', 75, 1, ''], ['Dumbbell bench press', 3, '10-12', 75, 0, ''], ['Seated cable row', 3, '12', 60, 0, ''], ['Dumbbell lateral raise', 3, '15', 45, 0, ''], ['Dead bug', 3, '8 each side', 45, 0, '']] },
    { name: 'Glutes and quads', ex: [['Barbell back squat', 4, '8-10', 150, 1, ''], ['Glute bridge', 3, '12-15', 90, 1, 'Pause 2 seconds at the top.'], ['Walking lunge', 3, '12 each leg', 75, 0, ''], ['Leg press', 3, '12-15', 75, 0, 'Feet high on the platform.'], ['Cable pull-through', 3, '15', 60, 0, ''], ['Standing calf raise', 3, '15', 45, 0, '']] },
    { name: 'Upper and core', ex: [['Seated dumbbell shoulder press', 3, '10-12', 75, 1, ''], ['One-arm dumbbell row', 3, '10-12', 60, 0, ''], ['Push-ups', 3, '8-15', 60, 0, ''], ['Face pull', 3, '15', 45, 0, ''], ['Pallof press', 3, '10 each side', 45, 0, ''], ['Plank', 2, '45s', 45, 0, '']] }
  ] });
add({ id: 'abs6', name: 'Core & Abs', level: 'Starter', goal: 'focus', focus: 'abs', weeks: 6, perWeek: 3, equip: 'gym', mins: '45-55',
  method: 'Core specialisation: weighted ab work for muscle, anti-rotation and anti-extension for strength, alongside full-body training.',
  summary: 'A stronger, more visible core. Weighted ab exercises build the muscle, while planks and anti-rotation work make your midsection solid for every other lift. Visible abs also need lower body fat, so pair it with your food targets.',
  tips: ['Train abs like any other muscle: add weight or reps over time.', 'Breathe out hard at the top of every crunch.', 'Visible abs depend mostly on body fat: the Food tab is half of this programme.'],
  sched: [1, 3, 5], phases: [{ w: [1, 2], label: 'Base', main: [3, '10-12'], acc: [3, '12-15'], note: '' }, { w: [3, 4], label: 'Load', main: [3, '8-10'], acc: [3, '12-15'], note: 'Add weight to crunches and raises.' }, { w: [5, 6], label: 'Volume', main: [4, '10-12'], acc: [4, '12-15'], note: '' }], deload: [],
  plan: [
    { name: 'Full body + flexion', ex: [['Goblet squat', 3, '10', 90, 0, ''], ['Dumbbell bench press', 3, '10', 90, 0, ''], ['Machine crunch', 3, '10-12', 60, 1, ''], ['Hanging knee raise', 3, '12-15', 60, 0, ''], ['Plank', 3, '45s', 45, 0, '']] },
    { name: 'Full body + stability', ex: [['Romanian deadlift', 3, '10', 90, 0, ''], ['Lat pulldown', 3, '10', 75, 0, ''], ['Ab wheel rollout', 3, '8-10', 75, 1, ''], ['Pallof press', 3, '10 each side', 45, 0, ''], ['Side plank', 3, '30s each side', 45, 0, '']] },
    { name: 'Full body + lower abs', ex: [['Leg press', 3, '12', 90, 0, ''], ['Seated cable row', 3, '10', 75, 0, ''], ['Hanging leg raise', 3, '8-12', 75, 1, ''], ['Weighted decline sit-up', 3, '10-12', 60, 0, ''], ['Russian twist', 3, '12 each side', 45, 0, ''], ['Dead bug', 2, '10 each side', 45, 0, '']] }
  ] });

/* ---------------- FAT LOSS, HOME, BUSY ---------------- */
add({ id: 'lean6', name: 'Lean & Strong', level: 'Intermediate', goal: 'fatloss', weeks: 6, perWeek: 4, equip: 'gym', mins: '45-55',
  method: 'Fat loss while keeping muscle: heavy-ish supersets with short rests plus short interval finishers.',
  summary: 'Lose fat while keeping your muscle. Strength work in pairs with short rests to keep your heart rate up, plus a short cardio finisher. Pair it with a modest calorie deficit and high protein.',
  tips: ['Do exercises with the same letter back to back (A1 then A2), then rest.', 'Keep the weights challenging: heavy lifting keeps muscle in a deficit.', 'The finisher is hard but short. Scale it to your fitness.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 3], label: 'Base', main: [3, '10-12'], acc: [3, '12-15'], note: 'Rest 60 seconds after each pair.' }, { w: [4, 6], label: 'Burn', main: [4, '8-10'], acc: [3, '12-15'], note: '' }], deload: [],
  plan: [
    { name: 'Upper 1', ex: [['Dumbbell bench press', 3, '10-12', 45, 1, 'A1'], ['One-arm dumbbell row', 3, '10-12', 60, 1, 'A2'], ['Seated dumbbell shoulder press', 3, '10-12', 45, 0, 'B1'], ['Lat pulldown', 3, '10-12', 60, 0, 'B2'], ['Rowing machine', 1, '10 min', 0, 0, 'Finisher: 30 seconds hard, 30 easy.']] },
    { name: 'Lower 1', ex: [['Goblet squat', 3, '10-12', 45, 1, 'A1'], ['Romanian deadlift', 3, '10-12', 60, 1, 'A2'], ['Walking lunge', 3, '10 each leg', 45, 0, 'B1'], ['Glute bridge', 3, '15', 60, 0, 'B2'], ['Bike intervals', 1, '10 min', 0, 0, 'Finisher: 20 seconds hard, 40 easy.']] },
    { name: 'Upper 2', ex: [['Incline dumbbell press', 3, '10-12', 45, 1, 'A1'], ['Seated cable row', 3, '10-12', 60, 1, 'A2'], ['Push-ups', 3, '8-15', 45, 0, 'B1'], ['Face pull', 3, '15', 60, 0, 'B2'], ['Hammer curl', 2, '12', 30, 0, 'C1'], ['Triceps rope pushdown', 2, '12', 45, 0, 'C2']] },
    { name: 'Lower 2', ex: [['Leg press', 3, '10-12', 45, 1, 'A1'], ['Lying leg curl', 3, '12', 60, 1, 'A2'], ['Step-ups', 3, '10 each leg', 45, 0, 'B1'], ['Plank', 3, '30-45s', 45, 0, 'B2'], ['Incline treadmill walk', 1, '15 min', 0, 0, 'Finisher: brisk pace, steep incline.']] }
  ] });
add({ id: 'circuits4', name: 'Strength Circuits', level: 'Starter', goal: 'fatloss', weeks: 4, perWeek: 3, equip: 'gym', mins: '35-45',
  method: 'Density circuits: move from exercise to exercise with little rest for a strength-and-cardio session in one.',
  summary: 'A sweaty, time-efficient fat-loss block. Each session is a circuit of 5 exercises done back to back, 3-4 rounds. Builds fitness and keeps muscle.',
  tips: ['Move straight from one exercise to the next; rest 90 seconds after each round.', 'Pick weights you can do with good form when tired.', 'Log the rounds you complete; beat it next week.'],
  sched: [1, 3, 5], phases: [{ w: [1, 2], label: '3 rounds', main: [3, '12'], acc: [3, '12'], note: '' }, { w: [3, 4], label: '4 rounds', main: [4, '12'], acc: [4, '12'], note: '' }], deload: [],
  plan: [
    { name: 'Circuit 1', ex: [['Goblet squat', 3, '12', 15, 1, ''], ['Push-ups', 3, '10-15', 15, 0, ''], ['One-arm dumbbell row', 3, '12 each arm', 15, 0, ''], ['Walking lunge', 3, '12 each leg', 15, 0, ''], ['Plank', 3, '30s', 90, 0, 'Then rest 90 s.']] },
    { name: 'Circuit 2', ex: [['Romanian deadlift', 3, '12', 15, 1, ''], ['Seated dumbbell shoulder press', 3, '12', 15, 0, ''], ['Step-ups', 3, '10 each leg', 15, 0, ''], ['Lat pulldown', 3, '12', 15, 0, ''], ['Bicycle crunch', 3, '15 each side', 90, 0, '']] },
    { name: 'Circuit 3', ex: [['Leg press', 3, '15', 15, 1, ''], ['Dumbbell bench press', 3, '12', 15, 0, ''], ['Seated cable row', 3, '12', 15, 0, ''], ['Glute bridge', 3, '15', 15, 0, ''], ['Rowing machine', 3, '1 min hard', 90, 0, '']] }
  ] });
add({ id: 'hybrid6', name: 'Lift & Condition', level: 'Intermediate', goal: 'fatloss', weeks: 6, perWeek: 4, equip: 'gym', mins: '50-60',
  method: 'Hybrid training: two strength days and two conditioning-plus-strength days for fitness and body composition. Good alongside football.',
  summary: 'Get fitter and leaner without losing strength. Two lifting days keep you strong; two mixed days build your engine with intervals. Great if you play football or another sport.',
  tips: ['Do lifting before conditioning in the same session.', 'Intervals: hard means you could not hold a conversation.', 'On match weeks, skip the second conditioning day.'],
  sched: [1, 2, 4, 6], phases: [{ w: [1, 3], label: 'Base', main: [4, '5-6'], acc: [3, '10'], note: '' }, { w: [4, 6], label: 'Build', main: [5, '4-5'], acc: [3, '10'], note: '' }], deload: [],
  plan: [
    { name: 'Lower strength', ex: [['Barbell back squat', 4, '5-6', 180, 1, ''], ['Romanian deadlift', 3, '8', 120, 0, ''], ['Bulgarian split squat', 3, '8 each leg', 90, 0, ''], ['Nordic curl', 3, '4-6', 90, 0, 'Protects hamstrings for sprinting.'], ['Plank', 3, '45s', 45, 0, '']] },
    { name: 'Conditioning A', ex: [['Rowing machine', 1, '20 min', 0, 0, '1 min hard, 1 min easy, 10 rounds.'], ['Push-ups', 3, '15', 60, 0, ''], ['Lat pulldown', 3, '12', 60, 0, ''], ['Russian twist', 3, '15 each side', 45, 0, '']] },
    { name: 'Upper strength', ex: [['Barbell bench press', 4, '5-6', 180, 1, ''], ['Pull-ups', 4, '6-8', 120, 1, ''], ['Seated dumbbell shoulder press', 3, '8-10', 90, 0, ''], ['Chest-supported row', 3, '10', 75, 0, ''], ['Face pull', 3, '15', 45, 0, '']] },
    { name: 'Conditioning B', ex: [['Bike intervals', 1, '15 min', 0, 0, '30 s sprint, 90 s easy.'], ['Goblet squat', 3, '15', 60, 0, ''], ['Walking lunge', 3, '12 each leg', 60, 0, ''], ['Hanging knee raise', 3, '12', 45, 0, ''], ['Incline treadmill walk', 1, '15 min', 0, 0, 'Easy cool-down pace.']] }
  ] });
add({ id: 'busy30', name: 'Busy Week 30', level: 'Starter', goal: 'muscle', weeks: 6, perWeek: 3, equip: 'gym', mins: '30',
  method: 'Time-efficient full-body supersets: maximum results per minute.',
  summary: 'Thirty minutes, in and out. Every session pairs two exercises back to back so you get a full-body workout in half an hour. Perfect for lunch breaks and busy weeks.',
  tips: ['Do A1 then A2 with no rest, then rest 60-90 seconds and repeat.', 'Warm up with one light round.', 'If a station is busy, swap to a similar exercise rather than waiting.'],
  sched: [1, 3, 5], phases: [{ w: [1, 3], label: 'Build', main: [3, '8-10'], acc: [3, '10-12'], note: '' }, { w: [4, 6], label: 'Push', main: [4, '8-10'], acc: [3, '10-12'], note: '' }], deload: [],
  plan: [
    { name: 'Express A', ex: [['Leg press', 3, '8-10', 0, 1, 'A1'], ['Lat pulldown', 3, '8-10', 75, 1, 'A2'], ['Dumbbell bench press', 3, '10-12', 0, 0, 'B1'], ['Lying leg curl', 3, '10-12', 60, 0, 'B2']] },
    { name: 'Express B', ex: [['Goblet squat', 3, '8-10', 0, 1, 'A1'], ['Seated cable row', 3, '8-10', 75, 1, 'A2'], ['Seated dumbbell shoulder press', 3, '10-12', 0, 0, 'B1'], ['Hanging knee raise', 3, '12', 60, 0, 'B2']] },
    { name: 'Express C', ex: [['Romanian deadlift', 3, '8-10', 0, 1, 'A1'], ['Incline dumbbell press', 3, '8-10', 75, 1, 'A2'], ['EZ-bar curl', 3, '10-12', 0, 0, 'B1'], ['Triceps rope pushdown', 3, '10-12', 60, 0, 'B2']] }
  ] });
add({ id: 'db8', name: 'Dumbbells Only', level: 'Starter', goal: 'home', weeks: 8, perWeek: 3, equip: 'dumbbells', mins: '40-50',
  method: 'Full-body dumbbell training three times a week with double progression (more reps, then more weight).',
  summary: 'Everything done with a pair of dumbbells and a bench or sturdy chair. For training at home or a busy gym.',
  tips: ['Adjustable dumbbells are ideal. If you cannot go heavier, slow the lowering to 3 seconds and add reps.', 'Romanian deadlifts, rows and presses all work with dumbbells: use the How to photos as a guide.', 'Week 4 is an easier week.'],
  sched: [1, 3, 5], phases: [{ w: [1, 3], label: 'Build', main: [3, '10-12'], acc: [3, '12-15'], note: '' }, { w: [5, 8], label: 'Push', main: [4, '8-12'], acc: [3, '12-15'], note: 'Slow 3-second lowering.' }], deload: [4],
  plan: [
    { name: 'Full body 1', ex: [['Goblet squat', 3, '10-12', 90, 1, ''], ['Dumbbell bench press', 3, '10-12', 90, 1, 'Use the floor if you have no bench.'], ['One-arm dumbbell row', 3, '10-12', 75, 0, ''], ['Dumbbell lateral raise', 3, '12-15', 45, 0, ''], ['Dead bug', 3, '8 each side', 45, 0, '']] },
    { name: 'Full body 2', ex: [['Romanian deadlift', 3, '10-12', 90, 1, 'With dumbbells, close to the legs.'], ['Seated dumbbell shoulder press', 3, '10-12', 90, 1, ''], ['Reverse lunge', 3, '10 each leg', 75, 0, ''], ['Hammer curl', 3, '12', 45, 0, ''], ['Overhead dumbbell extension', 3, '12', 45, 0, ''], ['Side plank', 2, '30s each side', 45, 0, '']] },
    { name: 'Full body 3', ex: [['Bulgarian split squat', 3, '10 each leg', 90, 1, ''], ['Incline dumbbell press', 3, '10-12', 90, 1, ''], ['One-arm dumbbell row', 3, '12', 75, 0, ''], ['Glute bridge', 3, '15', 60, 0, 'Hold a dumbbell on the hips.'], ['Dumbbell fly', 2, '12-15', 45, 0, ''], ['Russian twist', 3, '12 each side', 45, 0, '']] }
  ] });
add({ id: 'dbsplit8', name: 'Dumbbell Upper / Lower', level: 'Intermediate', goal: 'home', weeks: 8, perWeek: 4, equip: 'dumbbells', mins: '45-55',
  method: 'Upper/lower split adapted for dumbbells only, with tempo and pauses to make light weights hard.',
  summary: 'For home trainers who want more than full body. Four sessions a week with dumbbells and a bench, using slow lowering and pauses so modest weights still build muscle.',
  tips: ['Lower every rep over 3 seconds.', 'When you hit the top of the range, add reps or a pause before adding weight.', 'Week 4 is an easier week.'],
  sched: [1, 2, 4, 5], phases: HYP8.phases, deload: HYP8.deload,
  plan: [
    { name: 'Upper 1', ex: [['Dumbbell bench press', 4, '8-12', 90, 1, ''], ['One-arm dumbbell row', 4, '8-12', 75, 1, ''], ['Arnold press', 3, '10-12', 75, 0, ''], ['Dumbbell fly', 3, '12-15', 60, 0, ''], ['Hammer curl', 3, '12', 45, 0, '']] },
    { name: 'Lower 1', ex: [['Goblet squat', 4, '10-15', 90, 1, ''], ['Romanian deadlift', 3, '10-12', 90, 1, ''], ['Reverse lunge', 3, '10 each leg', 75, 0, ''], ['Single-leg calf raise', 3, '12-15 each', 45, 0, ''], ['Dead bug', 3, '10 each side', 45, 0, '']] },
    { name: 'Upper 2', ex: [['Incline dumbbell press', 4, '8-12', 90, 1, ''], ['One-arm dumbbell row', 3, '12-15', 60, 0, 'Pause at the top.'], ['Dumbbell lateral raise', 4, '15', 45, 0, ''], ['Overhead dumbbell extension', 3, '12', 45, 0, ''], ['Concentration curl', 3, '12', 45, 0, '']] },
    { name: 'Lower 2', ex: [['Bulgarian split squat', 4, '8-12 each leg', 90, 1, ''], ['Glute bridge', 3, '15-20', 60, 0, 'Dumbbell on the hips, 2 s pause.'], ['Step-ups', 3, '10 each leg', 75, 0, ''], ['Goblet squat', 2, '20', 75, 0, 'Light, continuous.'], ['Side plank', 3, '30s each side', 45, 0, '']] }
  ] });
add({ id: 'bw4', name: 'Bodyweight at Home', level: 'Starter', goal: 'home', weeks: 4, perWeek: 3, equip: 'none', mins: '30-40',
  method: 'Bodyweight progressions: harder variations and more reps instead of more weight.',
  summary: 'No equipment, no gym. A four-week starter you can do in your living room, travelling or on a busy week.',
  tips: ['Rest about 60 seconds between sets.', 'Too easy? Slow the lowering and pause at the bottom.', 'Too hard? Do push-ups on a table or the edge of a sofa.'],
  sched: [1, 3, 5], phases: [{ w: [1, 2], label: 'Start', main: [3, '8-12'], acc: [2, '10-15'], note: '' }, { w: [3, 4], label: 'Build', main: [4, '10-15'], acc: [3, '12-15'], note: '' }], deload: [],
  plan: [
    { name: 'Circuit A', ex: [['Push-ups', 3, '8-12', 60, 1, ''], ['Reverse lunge', 3, '10 each leg', 60, 1, ''], ['Glute bridge', 3, '15', 45, 0, ''], ['Plank', 3, '30s', 45, 0, ''], ['Bicycle crunch', 2, '15 each side', 45, 0, '']] },
    { name: 'Circuit B', ex: [['Step-ups', 3, '10 each leg', 60, 1, 'Sturdy chair or stairs.'], ['Triceps dips', 3, '8-12', 60, 1, 'Hands on a chair edge.'], ['Walking lunge', 3, '10 each leg', 60, 0, ''], ['Dead bug', 3, '8 each side', 45, 0, ''], ['Single-leg calf raise', 2, '12 each leg', 45, 0, '']] },
    { name: 'Circuit C', ex: [['Diamond push-ups', 3, '6-10', 60, 1, 'Normal push-ups if needed.'], ['Bulgarian split squat', 3, '8 each leg', 60, 1, 'Back foot on the sofa.'], ['Glute bridge', 3, '15', 45, 0, 'Single leg if easy.'], ['Side plank', 3, '20-30s each side', 45, 0, ''], ['Reverse crunch', 2, '12', 45, 0, '']] }
  ] });
add({ id: 'bw8', name: 'Bodyweight Progressions', level: 'Intermediate', goal: 'home', weeks: 8, perWeek: 4, equip: 'none', mins: '40-50',
  method: 'Calisthenics-style upper/lower: harder exercise variations over time, plus pull-ups if you have a bar.',
  summary: 'Get properly strong with no gym. Upper and lower days twice a week, moving to harder variations as you improve. A pull-up bar makes it even better.',
  tips: ['If you can do the top of the range easily, use a harder variation: e.g. feet raised push-ups.', 'Pull-ups: use a door-frame bar or a sturdy branch. No bar? Swap for slow negatives off a table edge.', 'Week 4 is an easier week.'],
  sched: [1, 2, 4, 5], phases: [{ w: [1, 3], label: 'Build', main: [4, '6-12'], acc: [3, '12-20'], note: '' }, { w: [5, 8], label: 'Harder', main: [5, '6-12'], acc: [3, '15-20'], note: 'Use harder variations now.' }], deload: [4],
  plan: [
    { name: 'Upper 1', ex: [['Push-ups', 4, '8-15', 75, 1, 'Feet on a chair when 15 is easy.'], ['Pull-ups', 4, '3-8', 120, 1, ''], ['Triceps dips', 3, '8-12', 75, 0, ''], ['Plank', 3, '45-60s', 45, 0, '']] },
    { name: 'Lower 1', ex: [['Bulgarian split squat', 4, '8-12 each leg', 90, 1, ''], ['Glute bridge', 3, '15-20', 60, 0, 'Single leg.'], ['Walking lunge', 3, '12 each leg', 75, 0, ''], ['Single-leg calf raise', 3, '15 each', 45, 0, ''], ['Reverse crunch', 3, '12-15', 45, 0, '']] },
    { name: 'Upper 2', ex: [['Diamond push-ups', 4, '6-12', 75, 1, ''], ['Pull-ups', 4, '3-8', 120, 1, 'Palms facing you.'], ['Push-ups', 2, 'max', 75, 0, ''], ['Side plank', 3, '30-45s each side', 45, 0, '']] },
    { name: 'Lower 2', ex: [['Step-ups', 4, '10-12 each leg', 90, 1, 'High step.'], ['Nordic curl', 3, '3-6', 120, 0, 'Feet under a sofa; lower slowly.'], ['Reverse lunge', 3, '12 each leg', 75, 0, ''], ['Dead bug', 3, '10 each side', 45, 0, ''], ['Bicycle crunch', 3, '20 each side', 45, 0, '']] }
  ] });

window.CL_PROGRAMS = P;
/* Monthly wave: [percent of training max, reps] per set for weeks 1-4 of each cycle. */
window.CL_WAVE = { 1: [[65, 5], [75, 5], [85, '5+']], 2: [[70, 3], [80, 3], [90, '3+']], 3: [[75, 5], [85, 3], [95, '1+']], 4: [[40, 5], [50, 5], [60, 5]] };
/* Gentler swaps for areas to go easy on (general options, not medical advice). */
window.CL_SWAPS = {
  knees: { 'Barbell back squat': 'Hip thrust', 'Front squat': 'Hip thrust', 'Hack squat': 'Leg press', 'Smith machine squat': 'Leg press', 'Bulgarian split squat': 'Glute bridge', 'Walking lunge': 'Glute bridge', 'Reverse lunge': 'Glute bridge', 'Step-ups': 'Hip thrust', 'Leg extension': 'Seated leg curl', 'Goblet squat': 'Leg press', 'Nordic curl': 'Seated leg curl' },
  back: { 'Deadlift': 'Hip thrust', 'Romanian deadlift': 'Lying leg curl', 'Stiff-leg deadlift': 'Seated leg curl', 'Good morning': 'Lying leg curl', 'Barbell row': 'Chest-supported row', 'T-bar row': 'Chest-supported row', 'Barbell back squat': 'Leg press', 'Front squat': 'Leg press', 'Back extension': 'Glute bridge', 'Rack pull': 'Lat pulldown', 'Barbell shrug': 'Face pull' },
  shoulders: { 'Barbell overhead press': 'Machine shoulder press', 'Barbell bench press': 'Dumbbell bench press', 'Incline barbell bench press': 'Incline dumbbell press', 'Chest dips': 'Machine chest press', 'Triceps dips': 'Triceps rope pushdown', 'Upright row (wide grip)': 'Dumbbell lateral raise', 'Skull crushers': 'Triceps rope pushdown', 'Pull-ups': 'Lat pulldown', 'Arnold press': 'Machine shoulder press' }
};
/* Extra work added for a chosen focus area when the programme is not already a focus programme. */
window.CL_FOCUS_ADD = {
  arms: [['EZ-bar curl', 3, '10-12', 60, 0, 'Focus add-on'], ['Overhead cable triceps extension', 3, '10-12', 60, 0, 'Focus add-on']],
  chest: [['Cable crossover', 3, '12-15', 60, 0, 'Focus add-on'], ['Incline dumbbell press', 2, '10-12', 90, 0, 'Focus add-on']],
  shoulders: [['Dumbbell lateral raise', 3, '15', 45, 0, 'Focus add-on'], ['Reverse pec deck', 3, '15-20', 45, 0, 'Focus add-on']],
  back: [['Lat pulldown', 3, '10-12', 75, 0, 'Focus add-on'], ['Seated cable row', 3, '10-12', 75, 0, 'Focus add-on']],
  legs: [['Leg extension', 3, '12-15', 60, 0, 'Focus add-on'], ['Lying leg curl', 3, '12-15', 60, 0, 'Focus add-on']],
  glutes: [['Hip thrust', 3, '10-12', 90, 0, 'Focus add-on'], ['Hip abduction machine', 3, '15-20', 45, 0, 'Focus add-on']],
  abs: [['Hanging knee raise', 3, '12-15', 45, 0, 'Focus add-on'], ['Machine crunch', 3, '12-15', 45, 0, 'Focus add-on']],
  biceps: [['Incline dumbbell curl', 3, '10-12', 60, 0, 'Focus add-on'], ['Hammer curl', 2, '12', 45, 0, 'Focus add-on']]
};
})();
