// Prime 131 — Training Calendar (data plumbing).
//
// The monthly pre-shift training calendar, taught through Learning:
//   Learning > Training Calendar > Week N > a column (Wine, Cocktails...) > lesson
//
// Each lesson is an ordinary LEARNING_MODULES entry (chapters + a 100%-to-pass
// final test), so it reuses the same lesson engine, progress store and test
// rules as every other module. What this file adds is the calendar around
// them: which month, which week, which column, and the date a week opens.
//
// Weeks unlock by the device's calendar date and stay unlocked afterward.
// Passing (or skipping) an earlier week never affects a later one.
//
// To add a month: create js/training-YYYY-MM.js that calls
// defineTrainingMonth({...}, [ ...lessons ]), then add its <script> tag in
// index.html (after this file, before app.js) and its path to ASSETS in sw.js.

const TRAINING_CALENDAR = [];

/* month: {
     id: "2026-11", title: "November 2026",
     columns: [ { id, title, lens } ... ]          // in display order
     weeks: [ { n, unlocksOn: "YYYY-MM-DD",
                items: { [columnId]: { label, moduleId|null } } } ... ]
   }
   lessons: LEARNING_MODULES-shaped objects ({ id, title, category, chapters, test }).
   A lesson is attached to a week by being named as an item's moduleId. */
function defineTrainingMonth(month, lessons) {
  const byId = {};
  lessons.forEach(l => { byId[l.id] = l; });

  month.weeks.forEach(week => {
    Object.keys(week.items).forEach(colId => {
      const item = week.items[colId];
      if (!item.moduleId) return;
      const lesson = byId[item.moduleId];
      if (!lesson) {
        console.warn("Training Calendar: no lesson found for", item.moduleId);
        item.moduleId = null;
        return;
      }
      lesson.unlockAfter = null;
      lesson.unlocksOn = week.unlocksOn;                       // date gate, checked by isModuleUnlocked
      lesson.calendar = { monthId: month.id, week: week.n, column: colId };
      LEARNING_MODULES.push(lesson);
    });
  });

  TRAINING_CALENDAR.push(month);
}

// Small builders shared by every month's lesson files.
const tcSec = (title, body, note, noteLabel) => ({ type: "text", title, body, note: note || null, noteLabel: noteLabel || null });
// tcQ shuffles the options in a fixed, repeatable order (seeded from the
// question text) so the right answer isn't always in the same slot, and it
// never changes between page loads.
const tcQ = (question, options, correctIndex) => {
  let seed = 0;
  for (let i = 0; i < question.length; i++) seed = (seed * 31 + question.charCodeAt(i)) >>> 0;
  const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return { question, options: order.map(i => options[i]), correctIndex: order.indexOf(correctIndex) };
};
