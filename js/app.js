// Prime 131 Wine App — logic

const app = document.getElementById("app");
document.documentElement.setAttribute("data-build", typeof APP_VERSION !== "undefined" ? APP_VERSION : "unknown");
let current = { view: "home", params: {} };

function go(view, params = {}, pushHistory = true) {
  current = { view, params };
  if (pushHistory) {
    history.pushState({ view, params }, "", "");
  } else {
    history.replaceState({ view, params }, "", "");
  }
  render();
}

function goBack() {
  history.back();
}

window.addEventListener("popstate", (e) => {
  if (e.state) {
    current = e.state;
  } else {
    current = { view: "home", params: {} };
  }
  render();
});

history.replaceState({ view: "home", params: {} }, "", "");

// Accessibility: several interactive surfaces are <div>s (not native
// <button>s) because they carry richer internal markup (icon + title +
// subtitle, flip-card faces, etc). Give them button semantics and
// keyboard support once per render rather than repeating this in every
// render function.
const KEYBOARD_TAPPABLE_SELECTOR = ".home-option, .home-card, .list-row, .wotd-main, .flipcard, .dish-flipcard, .video-frame, .asort-placed";

function makeDivsKeyboardAccessible() {
  app.querySelectorAll(KEYBOARD_TAPPABLE_SELECTOR).forEach((el) => {
    if (el.hasAttribute("tabindex")) return;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
  });
}

app.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const el = e.target.closest(KEYBOARD_TAPPABLE_SELECTOR);
  if (!el) return;
  e.preventDefault();
  el.click();
});

function findWine(id) { return WINES.find(w => w.id === id) || OTL_WINES.find(w => w.id === id); }
function findDish(id) { return DISHES.find(d => d.id === id); }

function groupByStyle(wines) {
  const groups = {};
  STYLE_ORDER.forEach(s => groups[s] = []);
  wines.forEach(w => { if (groups[w.style]) groups[w.style].push(w); });
  return groups;
}

function groupBySection(dishes) {
  const groups = {};
  SECTION_ORDER.forEach(s => groups[s] = []);
  dishes.forEach(d => { if (groups[d.section]) groups[d.section].push(d); });
  return groups;
}

function stampSVG(currentNum, total) {
  const r = 26, circ = 2 * Math.PI * r;
  const pct = currentNum / total;
  const offset = circ - (pct * circ);
  return `<svg width="52" height="52" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="${r}" fill="none" stroke="var(--washi-300)" stroke-width="2.5"/>
    <circle cx="30" cy="30" r="${r}" fill="none" stroke="var(--bronze-500)" stroke-width="3"
      stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
      transform="rotate(-90 30 30)"/>
    <text x="30" y="36" text-anchor="middle" font-family="JetBrains Mono" font-size="14" fill="var(--shoyu-700)">${currentNum}</text>
  </svg>`;
}

function guestFit(wine) {
  const { body, tannin } = wine.structure;
  if (wine.style === "sparkling") return "Celebratory moments, or any guest who wants something festive without a full glass of still wine.";
  if (wine.style === "sake") return "Guests doing the sushi or omakase who want a pour built specifically for raw fish.";
  if (wine.style === "white") {
    if (body >= 4) return "Guests who usually drink red but want something rich enough to feel substantial.";
    return "Lighter appetites, raw bar lovers, or anyone who wants a refreshing glass before the main course.";
  }
  if (wine.style === "red") {
    if (tannin >= 4) return "Serious steak guests who want a wine that can stand up to char, fat, and bold seasoning.";
    if (body <= 2) return "Guests who want red wine but are ordering fish — this one won't overpower the plate.";
    return "A dependable crowd-pleaser for guests who want red wine without a strong opinion on style.";
  }
  return "A flexible, food-friendly pour for most of the menu.";
}

function buildFaceHTML(wine, similar, idx) {
  if (idx === 0) {
    return `
      <p class="flip-label">1/3</p>
      <p class="face-title">Sell it</p>
      <p class="face-h3"><span class="ic">&#128172;</span> Guest description</p>
      <p class="face-desc">${wine.guestDescription}</p>
      <p class="face-h3"><span class="ic">&#10003;</span> Three selling points</p>
      ${wine.sellingPoints.map(p => `<div class="point-row"><span class="ic">&#10003;</span><span>${p}</span></div>`).join("")}
      <div class="arsenal-block">
        <p class="arsenal-label">Table-side line</p>
        <p class="arsenal-text">${wine.arsenal}</p>
      </div>
    `;
  } else if (idx === 1) {
    return `
      <p class="flip-label">2/3</p>
      <p class="face-title">Understand it</p>
      <p class="face-h3"><span class="ic">&#127866;</span> Winemaking note</p>
      <p class="face-desc" style="margin-bottom:14px;">${wine.winemakingNote}</p>
      <p class="face-h3"><span class="ic">&#127815;</span> Flavor profile</p>
      <div class="flavor-grid">${wine.flavorTags.map(t => `<div class="flavor-item"><div class="icon">${getFlavorIcon(t)}</div><p>${t}</p></div>`).join("")}</div>
      <p class="face-h3"><span class="ic">&#128202;</span> Structure</p>
      ${structureBars(wine.structure)}
      ${similar ? `<p class="back-line" style="margin-top:8px;"><b>Similar pour</b>${similar.name}</p>` : ""}
    `;
  } else {
    return `
      <p class="flip-label">3/3</p>
      <p class="face-title">Sommelier knowledge</p>
      <p class="face-h3"><span class="ic">&#10024;</span> Fun facts</p>
      <div class="fact-block"><p>${wine.funFact}</p></div>
      <div class="fact-block"><p>${wine.funFact2}</p></div>
      <p class="face-h3"><span class="ic">&#128214;</span> Short story</p>
      <p class="face-desc" style="margin-bottom:14px;">${wine.shortStory}</p>
      <p class="face-h3"><span class="ic">&#128278;</span> The moment</p>
      <p class="face-desc">${wine.moment}</p>
      <p class="face-h3"><span class="ic">&#128142;</span> The memory</p>
      <p class="face-desc">${wine.memory}</p>
    `;
  }
}

function renderFlipCard(wine) {
  const similar = wine.id.startsWith("otl") ? similarOtlPour(wine) : wine.id.startsWith("bw") ? similarBottlePour(wine) : similarPour(wine);
  const flipcard = document.createElement("div");
  flipcard.className = "flipcard";
  const inner = document.createElement("div");
  inner.className = "flip-inner face-0";
  inner.innerHTML = buildFaceHTML(wine, similar, 0);
  flipcard.appendChild(inner);

  let faceIndex = 0;
  flipcard.onclick = () => {
    flipcard.classList.add("flipping");
    setTimeout(() => {
      faceIndex = (faceIndex + 1) % 3;
      inner.className = "flip-inner face-" + faceIndex;
      inner.innerHTML = buildFaceHTML(wine, similar, faceIndex);
      flipcard.classList.remove("flipping");
    }, 200);
  };

  return flipcard;
}

// "Similar pour" is scored from the real fields every wine already carries
// (grape, region, structure, flavor tags, price) rather than "first match in
// array order" -- which used to send every California Cabernet to whichever
// bottle happened to be listed first. The candidate pool stays inside the
// same list (BTG, Off The List, or bottle list) and, for bottles, the same
// category, so a Champagne never points at a Sake. Lowest score wins; ties
// break on closest price, then list order, so the answer is stable.
// SIMILAR_POUR_OVERRIDES lets a specific wine be pinned to a hand-picked
// pairing ({ "bw68": "bw71" }) when the scorer's pick isn't the one a
// sommelier would make.
const SIMILAR_POUR_OVERRIDES = {
  // BTG whites: the scorer pairs these with the rosés because the white pool is tiny.
  w4: "w5",  // Santa Margherita Pinot Grigio -> Emmolo Sauvignon Blanc (crisp, unoaked)
  w5: "w4"   // Emmolo Sauvignon Blanc -> Santa Margherita Pinot Grigio
};

function similarityScore(a, b) {
  const w = { sweetness: 1.5, acidity: 1, tannin: 1.5, alcohol: 1, body: 1.5 };
  let score = 0;
  Object.keys(w).forEach(k => {
    const d = ((a.structure && a.structure[k]) || 0) - ((b.structure && b.structure[k]) || 0);
    score += w[k] * d * d;
  });

  const tagsA = (a.flavorTags || []).map(t => t.toLowerCase());
  const tagsB = new Set((b.flavorTags || []).map(t => t.toLowerCase()));
  score -= 1.5 * tagsA.filter(t => tagsB.has(t)).length;

  const gA = (a.grape || "").toLowerCase();
  const gB = (b.grape || "").toLowerCase();
  if (gA && gA === gB) score -= 3;
  else {
    const words = s => s.split(/[^a-zà-ÿ]+/).filter(x => x.length > 3 && x !== "blend" && x !== "100");
    const wB = new Set(words(gB));
    if (words(gA).some(x => wB.has(x))) score -= 1.5;
  }

  const rA = (a.region || "").split(",").map(x => x.trim().toLowerCase());
  const rB = (b.region || "").split(",").map(x => x.trim().toLowerCase());
  if (rA.length && rB.length && rA[rA.length - 1] === rB[rB.length - 1]) score -= 1;
  if (rA.some(x => x.length > 3 && rB.includes(x) && x !== rA[rA.length - 1])) score -= 1;

  if (a.subcategory && a.subcategory === b.subcategory) score -= 2;
  if (a.price && b.price) score += 2 * Math.abs(Math.log(a.price / b.price));
  return score;
}

function pickSimilarPour(wine, pool) {
  const overrideId = SIMILAR_POUR_OVERRIDES[wine.id];
  if (overrideId) {
    const pinned = pool.find(w => w.id === overrideId);
    if (pinned) return pinned;
  }
  const candidates = pool.filter(w => w.id !== wine.id);
  if (!candidates.length) return null;
  let best = null;
  let bestScore = Infinity;
  candidates.forEach(c => {
    const sc = similarityScore(wine, c);
    if (sc < bestScore - 1e-9) { bestScore = sc; best = c; }
  });
  return best;
}

function similarPour(wine) {
  return pickSimilarPour(wine, WINES.filter(w => w.style === wine.style));
}

function similarOtlPour(wine) {
  return pickSimilarPour(wine, OTL_WINES.filter(w => w.style === wine.style));
}

function similarBottlePour(wine) {
  let pool = BOTTLE_WINES.filter(w => w.category === wine.category);
  if (pool.length < 2) pool = BOTTLE_WINES.filter(w => w.style === wine.style);
  return pickSimilarPour(wine, pool);
}

// Liquor "similar pour" is derived entirely from real menu fields --
// category, subcategory, and the five-axis structure rating every LIQUOR
// entry already carries. Nothing is invented: the candidate pool is
// narrowed to the same subcategory (falling back to the same category if
// a subcategory ever has no siblings), and among that pool the bottle
// whose structure profile is numerically closest wins. Same discipline as
// similarPour/similarBottlePour above, just with a real tie-breaker
// instead of "first match in array order" since liquor structure data is
// fully populated across the list.
function similarLiquorPour(liquor) {
  let pool = liquor.subcategory
    ? LIQUOR.filter(l => l.category === liquor.category && l.subcategory === liquor.subcategory && l.id !== liquor.id)
    : [];
  if (!pool.length) pool = LIQUOR.filter(l => l.category === liquor.category && l.id !== liquor.id);
  if (!pool.length) return null;
  if (!liquor.structure) return pool[0];

  const keys = ["sweetness", "smoke", "spice", "body", "finish"];
  let best = null;
  let bestDist = Infinity;
  pool.forEach(candidate => {
    if (!candidate.structure) return;
    let dist = 0;
    keys.forEach(k => {
      const a = liquor.structure[k] || 0;
      const b = candidate.structure[k] || 0;
      dist += (a - b) * (a - b);
    });
    if (dist < bestDist) {
      bestDist = dist;
      best = candidate;
    }
  });
  return best || pool[0];
}

const WSET_BANDS = {
  sweetness: ["Dry", "Off-Dry", "Medium-Dry", "Medium-Sweet", "Sweet"],
  acidity: ["Low", "Medium(-)", "Medium", "Medium(+)", "High"],
  tannin: ["Low", "Medium(-)", "Medium", "Medium(+)", "High"],
  alcohol: ["Low", "Medium(-)", "Medium", "Medium(+)", "High"],
  body: ["Light", "Medium(-)", "Medium", "Medium(+)", "Full"]
};

function structureBars(structure) {
  const order = ["sweetness", "acidity", "tannin", "alcohol", "body"];
  return order.map((key) => {
    const val = structure[key];
    if (key === "tannin" && val === 0) return "";
    const band = WSET_BANDS[key][val - 1] || WSET_BANDS[key][0];
    const width = val * 20;
    return `<div class="bar-block"><div class="bar-track"><div class="bar-fill" style="width:${width}%;"></div></div><p>${band} ${key === "sweetness" ? "" : key === "body" ? "Body" : key.charAt(0).toUpperCase() + key.slice(1)}</p></div>`;
  }).join("");
}

const FLAVOR_ICON_MAP = [
  [["berry", "currant", "plum", "cassis"], "\u{1F347}"],
  [["cherry", "strawberry", "raspberry", "cranberry"], "\u{1F352}"],
  [["citrus", "lemon", "lime", "zest", "yuzu", "bergamot"], "\u{1F34B}"],
  [["tropical", "pineapple", "papaya", "dragon fruit"], "\u{1F34D}"],
  [["peach", "apple"], "\u{1F34F}"],
  [["melon", "honeydew", "lychee", "pear"], "\u{1F348}"],
  [["flower", "honeysuckle", "violet", "floral", "lavender"], "\u{1F338}"],
  [["mocha", "cocoa", "chocolate", "coffee", "espresso", "roasted"], "\u2615"],
  [["oak", "cedar", "vanilla", "spice", "pepper", "whiskey", "bourbon", "malt", "bitters"], "\u{1FAB5}"],
  [["earth", "forest", "herb", "garrigue", "mineral", "stone", "flint", "tar", "savory", "basil", "mint", "matcha", "chamomile", "cucumber", "black tea", "botanical"], "\u{1F33F}"],
  [["brioche", "toast", "bread", "chalk"], "\u{1F950}"],
  [["honey"], "\u{1F36F}"],
  [["olive", "brin"], "\u{1FAD2}"],
  [["smoke"], "\u{1F525}"],
  [["agave"], "\u{1F335}"],
  [["ginger"], "\u{1FADA}"],
  [["sparkling", "bubbl"], "\u{1F942}"],
  [["sweet", "sugar"], "\u{1F36C}"],
  [["dry", "crisp", "silky", "bright"], "\u2744\uFE0F"],
  [["coconut"], "\u{1F965}"],
  [["bitter"], "\u{1F33F}"]
];
function getFlavorIcon(tag) {
  const lower = tag.toLowerCase();
  for (const [keywords, icon] of FLAVOR_ICON_MAP) {
    if (keywords.some(k => lower.includes(k))) return icon;
  }
  return "\u{1F377}";
}

// SECTION_ICON_MAP now lives in config.js (per-restaurant configuration)
function getSectionIcon(section) { return SECTION_ICON_MAP[section] || "\u{1F37D}\uFE0F"; }

let activeTimer = null;

function render() {
  if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
  app.querySelectorAll("audio").forEach(a => a.pause());   // never leave a lesson's audio playing behind another screen
  app.innerHTML = "";
  app.classList.toggle("home-view", current.view === "home");
  if (current.view === "home") renderHome();
  else if (current.view === "study-list") renderStudyList();
  else if (current.view === "study-card") renderStudyCard(current.params.wineId);
  else if (current.view === "otl-list") renderOtlList();
  else if (current.view === "otl-card") renderOtlCard(current.params.wineId);
  else if (current.view === "zp-list") renderZeroProofList();
  else if (current.view === "zp-card") renderZeroProofCard(current.params.wineId);
  else if (current.view === "pairwf-list") renderPairWineFoodList();
  else if (current.view === "pairwf-detail") renderWineDetailWithPairing(current.params.wineId);
  else if (current.view === "pairfw-list") renderPairFoodWineList();
  else if (current.view === "menu-list") renderMenuList();
  else if (current.view === "dish-detail") renderDishDetail(current.params.dishId);
  else if (current.view === "pairing-explain") renderPairingExplain(current.params.wineId, current.params.dishId);
  else if (current.view === "cocktail-type") renderCocktailTypeChooser();
  else if (current.view === "cocktail-list") renderCocktailList();
  else if (current.view === "seasonal-cocktail-list") renderSeasonalCocktailList();
  else if (current.view === "classic-cocktail-list") renderClassicCocktailList();
  else if (current.view === "na-cocktail-list") renderNaCocktailList();
  else if (current.view === "whistlepig-dinner") renderWhistlepigDinner();
  else if (current.view === "cocktail-detail") renderCocktailDetail(current.params.cocktailId);
  else if (current.view === "wine-type") renderWineTypeChooser();
  else if (current.view === "wine-bottle-list") renderByTheBottleList();
  else if (current.view === "bottle-card") renderBottleCard(current.params.wineId);
  else if (current.view === "liquor-list") renderLiquorList();
  else if (current.view === "liquor-card") renderLiquorCard(current.params.liquorId);
  else if (current.view === "learning-hub") renderLearningHub();
  else if (current.view === "learning-topic") renderLearningTopic(current.params.topicId);
  else if (current.view === "learning-course") renderLearningCourse(current.params.courseId);
  else if (current.view === "learning-intro") renderLearningIntro(current.params.moduleId);
  else if (current.view === "learning-chapter") renderLearningChapter(current.params.moduleId, current.params.chapterIndex, current.params.sectionIndex);
  else if (current.view === "learning-chapter-quiz") renderChapterQuiz(current.params.moduleId, current.params.chapterIndex, current.params.quizIndex);
  else if (current.view === "learning-pretest-video") renderLearningPreTestVideo(current.params.moduleId);
  else if (current.view === "learning-test-intro") renderLearningTestIntro(current.params.moduleId);
  else if (current.view === "learning-test") renderLearningTest(current.params.moduleId, current.params.index);
  else if (current.view === "learning-test-result") renderLearningTestResult(current.params.moduleId, current.params.correctCount, current.params.total, current.params.passed, current.params.wrongIndices);
  else if (current.view === "learning-complete") renderLearningComplete(current.params.moduleId);
  else if (current.view === "training-calendar") renderTrainingCalendar();
  else if (current.view === "training-week") renderTrainingWeek(current.params.monthId, current.params.week);
  else if (current.view === "service-enhancement") renderServiceEnhancement();
  else if (current.view === "service-enhancement-lesson") renderServiceEnhancementLesson(current.params.monthId, current.params.week);
  else if (current.view === "tools") renderTools();
  else if (current.view === "banquet-service") renderBanquetService();
  makeDivsKeyboardAccessible();
  window.scrollTo(0, 0);
}

function header(title, showBack = true, onBack = goBack) {
  const div = document.createElement("div");
  div.className = "app-header";
  div.innerHTML = `
    ${showBack ? `<button class="back-btn" aria-label="Back">&#8592;</button>` : ""}
    <p class="header-title">${title}</p>
  `;
  if (showBack) div.querySelector(".back-btn").onclick = onBack;
  app.appendChild(div);
}

/* In-app confirm modal -- used instead of the browser's native confirm(),
   which shows the raw origin URL and can't be styled to match the product. */
function showConfirm(message, confirmLabel, onConfirm) {
  const overlay = document.createElement("div");
  overlay.className = "confirm-overlay";
  overlay.innerHTML = `
    <div class="confirm-card">
      <p class="confirm-message">${message}</p>
      <div class="confirm-actions">
        <button type="button" class="confirm-cancel">Cancel</button>
        <button type="button" class="confirm-ok">${confirmLabel}</button>
      </div>
    </div>
  `;
  const close = () => overlay.remove();
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  overlay.querySelector(".confirm-cancel").onclick = close;
  overlay.querySelector(".confirm-ok").onclick = () => { close(); onConfirm(); };
  document.body.appendChild(overlay);
}

/* One-time cleanup of data left behind by the removed Game Room (Test Me,
   This or That, Match It, Imposter, Sommelier Says, Knockout, Allergy Sort).
   Nothing reads these keys any more. Learning progress, auth and the Banquet
   checklist use different keys and are never touched. Guarded by a flag so
   it runs once per device. */
const GAMES_CLEANUP_FLAG = "p131-games-removed";
const REMOVED_GAME_KEYS = [
  "p131-progress", "p131-confidence", "p131-confidence-migrated", "p131-milestones",
  "p131-tot-progress", "p131-match-progress", "p131-imposter-progress", "p131-somm-progress"
];
const REMOVED_GAME_PREFIXES = ["p131-best-", "p131-last-champ-"];
function cleanupRemovedGameData() {
  try {
    if (localStorage.getItem(GAMES_CLEANUP_FLAG)) return;
    REMOVED_GAME_KEYS.forEach(k => localStorage.removeItem(k));
    const doomed = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && REMOVED_GAME_PREFIXES.some(p => k.startsWith(p))) doomed.push(k);
    }
    doomed.forEach(k => localStorage.removeItem(k));
    localStorage.setItem(GAMES_CLEANUP_FLAG, "1");
  } catch (e) {}
}
cleanupRemovedGameData();

/* Learning modules: dedicated progress store, keyed by module id.
   Shape: { [moduleId]: { furthest: <flat content index reached>, completed: <bool>, testFurthest: <index reached in the test> }
   This is the layer that will eventually get backed by the database
   instead of localStorage -- the render functions below only ever call
   these helpers, so swapping the storage later shouldn't require
   touching the views.

   Modules are organized as chapters (blocks of text/image/video content)
   followed by a single trailing test (quiz questions). "furthest" tracks
   position across the flattened chapter content only; the test has its
   own counter so leaving mid-test resumes there instead of at chapter 1. */
const LEARNING_PROGRESS_KEY = "p131-learning-progress";
function getLearningProgress() {
  try { return JSON.parse(localStorage.getItem(LEARNING_PROGRESS_KEY)) || {}; } catch (e) { return {}; }
}
function setLearningFurthest(moduleId, sectionIndex) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  cur.furthest = Math.max(cur.furthest, sectionIndex);
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function getFinalTestAnswers(moduleId) {
  const p = getLearningProgress()[moduleId];
  return (p && p.finalTestAnswers) || {};
}
function setFinalTestAnswer(moduleId, questionIndex, chosenIndex) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  cur.finalTestAnswers = cur.finalTestAnswers || {};
  cur.finalTestAnswers[questionIndex] = chosenIndex;
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function clearFinalTestAnswers(moduleId) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  cur.finalTestAnswers = {};
  cur.testFurthest = -1;
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function setTestFurthest(moduleId, questionIndex) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  cur.testFurthest = Math.max(cur.testFurthest ?? -1, questionIndex);
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function markLearningComplete(moduleId) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  const alreadyDone = cur.completed;
  cur.completed = true;
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
  return !alreadyDone; // true the first time this module is finished
}
function isChapterQuizPassed(moduleId, chapterIndex) {
  const p = getLearningProgress()[moduleId];
  return !!(p && p.chapterQuizPassed && p.chapterQuizPassed[chapterIndex]);
}
function setChapterQuizPassed(moduleId, chapterIndex) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  cur.chapterQuizPassed = cur.chapterQuizPassed || {};
  cur.chapterQuizPassed[chapterIndex] = true;
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
/* Today's date on this device, as YYYY-MM-DD, for date-gated lessons. Plain
   string comparison is safe because the format sorts chronologically. */
function todayISO() {
  const d = new Date();
  const pad = (n) => (n < 10 ? "0" : "") + n;
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}
function isModuleUnlocked(mod) {
  // Training Calendar lessons open on their week's date and stay open.
  if (mod.unlocksOn && todayISO() < mod.unlocksOn) return false;
  if (!mod.unlockAfter) return true;
  const p = getLearningProgress();
  return !!(p[mod.unlockAfter] && p[mod.unlockAfter].completed);
}
function moduleStatus(mod) {
  if (!isModuleUnlocked(mod)) return "locked";
  const p = getLearningProgress()[mod.id];
  if (p && p.completed) return "completed";
  if (p && p.furthest > -1) return "in-progress";
  return "not-started";
}
function findLearningModule(id) { return LEARNING_MODULES.find(m => m.id === id); }

/* Final cumulative test must be passed at 100%. Two attempts allowed back to
   back; after a second failure the module locks for 10 minutes before a
   fresh pair of attempts is allowed again. State lives alongside the rest
   of the module's progress record so it resets cleanly per module. */
const FINAL_TEST_LOCKOUT_MS = 10 * 60 * 1000;
function getFinalTestState(moduleId) {
  const p = getLearningProgress()[moduleId];
  return (p && p.finalTest) || { attemptsUsed: 0, lockedUntil: null };
}
function setFinalTestState(moduleId, state) {
  const p = getLearningProgress();
  const cur = p[moduleId] || { furthest: -1, completed: false, testFurthest: -1 };
  cur.finalTest = state;
  p[moduleId] = cur;
  try { localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function finalTestLockStatus(moduleId) {
  const state = getFinalTestState(moduleId);
  const now = Date.now();
  if (state.lockedUntil && now < state.lockedUntil) {
    return { locked: true, remainingMs: state.lockedUntil - now, state };
  }
  if (state.lockedUntil && now >= state.lockedUntil) {
    // cooldown has elapsed -- reset for a fresh pair of attempts
    const fresh = { attemptsUsed: 0, lockedUntil: null };
    setFinalTestState(moduleId, fresh);
    return { locked: false, remainingMs: 0, state: fresh };
  }
  return { locked: false, remainingMs: 0, state };
}
function recordFinalTestFailure(moduleId) {
  const state = getFinalTestState(moduleId);
  const attemptsUsed = (state.attemptsUsed || 0) + 1;
  const next = attemptsUsed >= 2
    ? { attemptsUsed, lockedUntil: Date.now() + FINAL_TEST_LOCKOUT_MS }
    : { attemptsUsed, lockedUntil: null };
  setFinalTestState(moduleId, next);
  return next;
}
function recordFinalTestPass(moduleId) {
  setFinalTestState(moduleId, { attemptsUsed: 0, lockedUntil: null });
}
function formatMmSs(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

/* Chapter/block helpers: a module's content lives in mod.chapters (each a
   block with its own sections), always followed by a single trailing
   mod.test (may be empty). These helpers flatten chapters for progress
   math without the views needing to know chapter boundaries directly. */
function moduleChapters(mod) { return mod.chapters || []; }
function flattenModuleContent(mod) {
  const flat = [];
  moduleChapters(mod).forEach((ch, ci) => {
    ch.sections.forEach((s, si) => flat.push({ chapterIndex: ci, sectionIndex: si }));
  });
  return flat;
}
function moduleTotalContent(mod) { return flattenModuleContent(mod).length; }
function resumeChapterPosition(mod) {
  const flat = flattenModuleContent(mod);
  if (!flat.length) return { chapterIndex: 0, sectionIndex: 0 };
  const p = getLearningProgress()[mod.id];
  const flatIndex = p ? Math.min(p.furthest + 1, flat.length - 1) : 0;
  return flat[Math.max(0, flatIndex)];
}

const REVIEW_STREAK_SEEN_KEY = "p131-review-streak-seen";
let reviewStreakPendingAnimation = null; // set once at load if this device hasn't seen the latest reset yet

function reviewStreakDays(startStr) {
  const start = new Date(startStr);
  const now = new Date();
  return Math.max(0, Math.floor((now - start) / 86400000));
}

// Runs once when the script loads. Compares this device's last-seen streak
// start against the deployed record. If they differ, a reset happened since
// this device last checked in, so it queues the extinguish animation for the
// next home render. There is no in-app way to change REVIEW_STREAK_RECORD.start
// yourself — it only changes when the owner asks Claude to update it.
(function checkReviewStreakReset() {
  let seenStart;
  try { seenStart = localStorage.getItem(REVIEW_STREAK_SEEN_KEY); } catch (e) { seenStart = null; }
  if (seenStart === null) {
    try { localStorage.setItem(REVIEW_STREAK_SEEN_KEY, REVIEW_STREAK_RECORD.start); } catch (e) {}
    return;
  }
  if (seenStart !== REVIEW_STREAK_RECORD.start) {
    reviewStreakPendingAnimation = {
      endedDays: typeof REVIEW_STREAK_RECORD.lastEndedDays === "number" ? REVIEW_STREAK_RECORD.lastEndedDays : null
    };
    try { localStorage.setItem(REVIEW_STREAK_SEEN_KEY, REVIEW_STREAK_RECORD.start); } catch (e) {}
  }
})();

function playStreakExtinguish(stripEl, onDone) {
  stripEl.style.position = "relative";
  stripEl.style.overflow = "visible";
  const main = stripEl.querySelector(".streak-main");
  const numEl = stripEl.querySelector(".streak-num");
  const labelEl = stripEl.querySelector(".streak-label");

  stripEl.classList.add("shaking");

  setTimeout(() => {
    if (main) main.classList.add("ashen-out");
    setTimeout(() => {
      if (numEl) numEl.textContent = "Extinguished";
      if (labelEl) labelEl.textContent = "Streak reset \u2014 back to zero";
      if (main) main.classList.remove("ashen-out");
      setTimeout(onDone, 650);
    }, 150);
  }, 650);
}

function wotdPool() {
  return WINES.concat(BOTTLE_WINES);
}

function wineOfTheDay() {
  const pool = wotdPool();
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return pool[dayOfYear % pool.length];
}

function randomWine(excludeId) {
  const pool = wotdPool();
  if (pool.length <= 1) return pool[0];
  let pick;
  do {
    pick = pool[Math.floor(Math.random() * pool.length)];
  } while (pick.id === excludeId);
  return pick;
}


function renderHome() {
  const authedUser = getStoredAuth();
  const hero = document.createElement("div");
  hero.className = "home-hero";
  hero.innerHTML = `
    <div class="home-hero-plate">
      <div>
        <p class="home-title">${BRAND.fullName}</p>
        <p class="home-title-sub">Staff training</p>
      </div>
      <div class="home-account">
        ${authedUser ? `<p class="home-account-name">${authedUser.name || ""}</p>` : ""}
        <button type="button" class="home-logout-btn">Log out</button>
      </div>
    </div>
  `;
  hero.querySelector(".home-logout-btn").onclick = () => {
    showConfirm("Exit?", "Log out", () => {
      clearAuth();
      location.reload();
    });
  };
  app.appendChild(hero);

  const currentDays = reviewStreakDays(REVIEW_STREAK_RECORD.start);
  const bestDisplay = Math.max(REVIEW_STREAK_RECORD.best || 0, currentDays);
  const pending = reviewStreakPendingAnimation;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const showAnimation = pending && pending.endedDays !== null && !reduceMotion;
  const initialDays = showAnimation ? pending.endedDays : currentDays;

  const streakStrip = document.createElement("div");
  streakStrip.className = "streak-strip";
  streakStrip.innerHTML = `
    <div class="streak-num-block">
      <p class="streak-num">${initialDays}</p>
      <p class="streak-num-lbl">${initialDays === 1 ? "Day" : "Days"}</p>
    </div>
    <div class="streak-main">
      <p class="streak-label">Since last 1-star review</p>
    </div>
    <span class="streak-best-pill">Best: ${bestDisplay}</span>
  `;
  app.appendChild(streakStrip);

  if (pending) reviewStreakPendingAnimation = null; // only ever plays once

  if (showAnimation) {
    setTimeout(() => {
      playStreakExtinguish(streakStrip, () => {
        const numEl = streakStrip.querySelector(".streak-num");
        const numLblEl = streakStrip.querySelector(".streak-num-lbl");
        const labelEl = streakStrip.querySelector(".streak-label");
        if (numEl) numEl.textContent = `${currentDays}`;
        if (numLblEl) numLblEl.textContent = currentDays === 1 ? "Day" : "Days";
        if (labelEl) labelEl.textContent = "Since last 1-star review";
        streakStrip.classList.remove("shaking");
      });
    }, 500);
  }

  const wotd = wineOfTheDay();
  let currentWotd = wotd;
  let wotdSpinning = false;
  const wotdStrip = document.createElement("div");
  wotdStrip.className = "wotd-strip";
  wotdStrip.innerHTML = `
    <div class="wotd-main">
      <p class="wotd-label">Wine of the day</p>
      <p class="wotd-name">${wotd.name}</p>
    </div>
    <button class="wotd-shuffle" aria-label="Shuffle to a random wine">Shuffle</button>
  `;
  const wotdNameEl = wotdStrip.querySelector(".wotd-name");
  const wotdMainEl = wotdStrip.querySelector(".wotd-main");
  const wotdShuffleBtn = wotdStrip.querySelector(".wotd-shuffle");

  wotdMainEl.onclick = () => {
    if (wotdSpinning) return;
    const route = currentWotd.id.startsWith("bw") ? "bottle-card" : "study-card";
    go(route, { wineId: currentWotd.id });
  };

  wotdShuffleBtn.onclick = (e) => {
    e.stopPropagation();
    if (wotdSpinning) return;

    const next = randomWine(currentWotd.id);
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      currentWotd = next;
      wotdNameEl.textContent = currentWotd.name;
      return;
    }

    wotdSpinning = true;
    wotdShuffleBtn.disabled = true;
    const pool = wotdPool();
    const totalDuration = 2000;
    const startTime = performance.now();
    let lastTick = -Infinity;

    function playReelTick(durationMs) {
      wotdNameEl.classList.remove("reel-tick");
      void wotdNameEl.offsetWidth; // force reflow so the animation restarts on every tick
      wotdNameEl.style.animationDuration = durationMs + "ms";
      wotdNameEl.classList.add("reel-tick");
    }

    function tick(now) {
      const elapsed = now - startTime;
      if (elapsed >= totalDuration) {
        currentWotd = next;
        wotdNameEl.textContent = currentWotd.name;
        playReelTick(220);
        wotdShuffleBtn.disabled = false;
        wotdSpinning = false;
        return;
      }
      const progress = elapsed / totalDuration;
      const interval = 90 + Math.pow(progress, 2.4) * 340;
      if (now - lastTick >= interval) {
        lastTick = now;
        wotdNameEl.textContent = pool[Math.floor(Math.random() * pool.length)].name;
        playReelTick(Math.min(interval, 260));
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  app.appendChild(wotdStrip);

  const options = document.createElement("div");
  options.className = "home-grid";
  options.innerHTML = `
    <div class="home-card" data-go="menu">
      <span class="nav-idx">01</span>
      <p class="home-card-title">Food</p>
      <span class="home-card-sub">Full menu</span>
    </div>
    <div class="home-card" data-go="wine">
      <span class="nav-idx">02</span>
      <p class="home-card-title">Wine</p>
      <span class="home-card-sub">Glass &amp; bottle</span>
    </div>
    <div class="home-card" data-go="bar">
      <span class="nav-idx">03</span>
      <p class="home-card-title">Bar</p>
      <span class="home-card-sub">Cocktails &amp; back bar</span>
    </div>
    <div class="home-card home-card-play" data-go="learning">
      <span class="nav-idx">04</span>
      <p class="home-card-title">Learning</p>
      <span class="home-card-sub">Modules &amp; courses</span>
    </div>
  `;
  options.querySelector('[data-go="wine"]').onclick = () => go("wine-type");
  options.querySelector('[data-go="bar"]').onclick = () => go("cocktail-type");
  options.querySelector('[data-go="menu"]').onclick = () => go("menu-list");
  options.querySelector('[data-go="learning"]').onclick = () => go("learning-hub");
  app.appendChild(options);

  const toolsCard = document.createElement("div");
  toolsCard.className = "home-card wide-card";
  toolsCard.innerHTML = `
    <span class="nav-idx">05</span>
    <span class="home-card-tag">New</span>
    <p class="home-card-title">Tools</p>
    <span class="home-card-sub">Banquet checklist &amp; wine pairing</span>
  `;
  toolsCard.onclick = () => go("tools");
  app.appendChild(toolsCard);
}

function renderSearchableWineList(onSelect, placeholder, wineSource) {
  const source = wineSource || WINES;
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = placeholder || "Search wines";
  wrap.appendChild(input);

  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = source.filter(w => w.name.toLowerCase().includes(filter.toLowerCase()));
    const groups = groupByStyle(filtered);
    STYLE_ORDER.forEach(style => {
      const wines = groups[style];
      if (!wines.length) return;
      const label = document.createElement("p");
      label.className = "section-label";
      label.textContent = STYLE_LABELS[style];
      listWrap.appendChild(label);
      wines.forEach(w => {
        const row = document.createElement("div");
        row.className = "list-row";
        const priceHtml = typeof w.price === "number" ? `<span class="list-row-price">$${w.price}</span>` : "";
        row.innerHTML = `<span class="list-row-main"><span class="style-dot ${w.style}"></span>${w.name}</span>${priceHtml}`;
        row.onclick = () => onSelect(w.id);
        listWrap.appendChild(row);
      });
    });
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No wines match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  return wrap;
}

function renderWineTypeChooser() {
  header("Wine");

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = `
    <div class="home-option" data-go="otl">
      <div class="home-icon-circle">&#10024;</div>
      <div class="home-option-text"><p>Off The List Wines</p><span>Special-selection pours</span></div>
    </div>
    <div class="home-option" data-go="glass">
      <div class="home-icon-circle">&#127863;</div>
      <div class="home-option-text"><p>By The Glass</p><span>Learn the full BTG list</span></div>
    </div>
    <div class="home-option" data-go="bottle">
      <div class="home-icon-circle">&#127866;</div>
      <div class="home-option-text"><p>By The Bottle</p><span>The full bottle list</span></div>
    </div>
    <div class="home-option" data-go="zp">
      <div class="home-icon-circle">&#127807;</div>
      <div class="home-option-text"><p>Zero Proof Wines</p><span>Alcohol-removed pours</span></div>
    </div>
  `;
  options.querySelector('[data-go="otl"]').onclick = () => go("otl-list");
  options.querySelector('[data-go="glass"]').onclick = () => go("study-list");
  options.querySelector('[data-go="bottle"]').onclick = () => go("wine-bottle-list");
  options.querySelector('[data-go="zp"]').onclick = () => go("zp-list");
  app.appendChild(options);
}

function groupByBottleCategory(wines) {
  const groups = {};
  BOTTLE_CATEGORY_ORDER.forEach(c => groups[c] = []);
  wines.forEach(w => { if (groups[w.category]) groups[w.category].push(w); });
  return groups;
}

function renderByTheBottleList() {
  header("By The Bottle");
  if (!BOTTLE_WINES.length) {
    const empty = document.createElement("p");
    empty.className = "empty-note";
    empty.style.padding = "40px 0";
    empty.textContent = "The bottle list hasn't been added yet.";
    app.appendChild(empty);
    return;
  }

  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search the bottle list";
  wrap.appendChild(input);

  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  const manualExpanded = new Set();

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = BOTTLE_WINES.filter(w => w.name.toLowerCase().includes(filter.toLowerCase()));
    const hasActiveFilter = filter.trim().length > 0;
    const groups = groupByBottleCategory(filtered);

    function appendWineRow(w) {
      const row = document.createElement("div");
      row.className = "list-row";
      const priceHtml = typeof w.price === "number" ? `<span class="list-row-price">$${w.price}</span>` : "";
      row.innerHTML = `<span class="list-row-main">${w.name}</span>${priceHtml}`;
      row.onclick = () => go("bottle-card", { wineId: w.id });
      listWrap.appendChild(row);
    }

    BOTTLE_CATEGORY_ORDER.forEach(category => {
      const wines = groups[category];
      if (!wines.length) return;

      const isExpanded = hasActiveFilter || manualExpanded.has(category);

      const label = document.createElement("button");
      label.className = "section-label section-toggle";
      label.innerHTML = `<span>${category} &middot; ${wines.length}</span><span class="section-chevron">${isExpanded ? "\u25BE" : "\u25B8"}</span>`;
      label.onclick = () => {
        if (hasActiveFilter) return;
        if (manualExpanded.has(category)) manualExpanded.delete(category);
        else manualExpanded.add(category);
        draw(input.value);
      };
      listWrap.appendChild(label);

      if (!isExpanded) return;

      const subOrder = BOTTLE_SUBCATEGORY_ORDER[category];
      if (subOrder) {
        subOrder.forEach(sub => {
          const subWines = wines.filter(w => w.subcategory === sub);
          if (!subWines.length) return;
          const subLabel = document.createElement("p");
          subLabel.className = "section-label";
          subLabel.textContent = sub;
          listWrap.appendChild(subLabel);
          subWines.forEach(appendWineRow);
        });
        wines.filter(w => !subOrder.includes(w.subcategory)).forEach(appendWineRow);
      } else {
        wines.forEach(appendWineRow);
      }
    });

    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No wines match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

function renderBottleCard(wineId) {
  const wine = BOTTLE_WINES.find(w => w.id === wineId) || BOTTLE_WINES[0];
  const idx = BOTTLE_WINES.findIndex(w => w.id === wine.id);

  header("By The Bottle");
  app.appendChild(renderNavChips(wine.id, (id) => go("bottle-card", { wineId: id }, false), BOTTLE_WINES));
  app.appendChild(renderWineCardBody(wine));

  const footerNav = document.createElement("div");
  footerNav.className = "card-footer-nav";

  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "\u2190 Back";
  backBtn.disabled = idx === 0;
  backBtn.onclick = () => go("bottle-card", { wineId: BOTTLE_WINES[idx - 1].id }, false);

  const homeBtn = document.createElement("button");
  homeBtn.className = "footer-btn footer-btn-home";
  homeBtn.textContent = "Home";
  homeBtn.onclick = () => go("home", {});

  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn";
  nextBtn.textContent = "Next \u2192";
  nextBtn.disabled = idx === BOTTLE_WINES.length - 1;
  nextBtn.onclick = () => go("bottle-card", { wineId: BOTTLE_WINES[idx + 1].id }, false);

  footerNav.appendChild(backBtn);
  footerNav.appendChild(homeBtn);
  footerNav.appendChild(nextBtn);
  app.appendChild(footerNav);

  let touchStartX = null;
  app.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { once: true });
  app.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      const nextIdx = dx < 0 ? Math.min(idx + 1, BOTTLE_WINES.length - 1) : Math.max(idx - 1, 0);
      go("bottle-card", { wineId: BOTTLE_WINES[nextIdx].id }, false);
    }
  }, { once: true });
}

function renderStudyList() {
  header("By The Glass");
  app.appendChild(renderSearchableWineList(
    (wineId) => go("study-card", { wineId }),
    "Search wines"
  ));
}

function renderOtlList() {
  header("Off The List Wines");
  app.appendChild(renderSearchableWineList(
    (wineId) => go("otl-card", { wineId }),
    "Search Off The List wines",
    OTL_WINES
  ));
}

function renderOtlCard(wineId) {
  const wine = OTL_WINES.find(w => w.id === wineId) || OTL_WINES[0];
  const idx = OTL_WINES.findIndex(w => w.id === wine.id);

  header("Off The List Wines");
  app.appendChild(renderNavChips(wine.id, (id) => go("otl-card", { wineId: id }, false), OTL_WINES));
  app.appendChild(renderWineCardBody(wine));

  const footerNav = document.createElement("div");
  footerNav.className = "card-footer-nav";

  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "\u2190 Back";
  backBtn.disabled = idx === 0;
  backBtn.onclick = () => go("otl-card", { wineId: OTL_WINES[idx - 1].id }, false);

  const homeBtn = document.createElement("button");
  homeBtn.className = "footer-btn footer-btn-home";
  homeBtn.textContent = "Home";
  homeBtn.onclick = () => go("home", {});

  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn";
  nextBtn.textContent = "Next \u2192";
  nextBtn.disabled = idx === OTL_WINES.length - 1;
  nextBtn.onclick = () => go("otl-card", { wineId: OTL_WINES[idx + 1].id }, false);

  footerNav.appendChild(backBtn);
  footerNav.appendChild(homeBtn);
  footerNav.appendChild(nextBtn);
  app.appendChild(footerNav);

  let touchStartX = null;
  app.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { once: true });
  app.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      const nextIdx = dx < 0 ? Math.min(idx + 1, OTL_WINES.length - 1) : Math.max(idx - 1, 0);
      go("otl-card", { wineId: OTL_WINES[nextIdx].id }, false);
    }
  }, { once: true });
}

/* Zero Proof Wines. Separate from WINES so the pairing engines never
   see them. The card shows only sourced facts and says so when a field is missing
   (no invented structure scores, dishes or allergens). */
function renderZeroProofList() {
  header("Zero Proof Wines");
  app.appendChild(renderSearchableWineList(
    (wineId) => go("zp-card", { wineId }),
    "Search Zero Proof wines",
    ZERO_PROOF_WINES
  ));
}

function renderZeroProofCard(wineId) {
  const wine = ZERO_PROOF_WINES.find(w => w.id === wineId) || ZERO_PROOF_WINES[0];
  const idx = ZERO_PROOF_WINES.findIndex(w => w.id === wine.id);

  header("Zero Proof Wines");
  app.appendChild(renderHeroHeader(wine));

  const abv = document.createElement("p");
  abv.className = "hero-meta strong";
  abv.textContent = [wine.abv, wine.calories].filter(Boolean).join(" · ");
  app.appendChild(abv);

  const panel = document.createElement("div");
  panel.className = "zp-panel";
  let html = "";
  if (wine.flavorTags && wine.flavorTags.length) {
    html += `<p class="face-h3"><span class="ic">&#127815;</span> Flavor profile</p>
      <div class="flavor-grid">${wine.flavorTags.map(t => `<div class="flavor-item"><div class="icon">${getFlavorIcon(t)}</div><p>${t}</p></div>`).join("")}</div>`;
  }
  if (wine.pairingNotes) {
    html += `<p class="face-h3"><span class="ic">&#127860;</span> Suggested pairings</p>
      <p class="face-desc">${wine.pairingNotes}</p>`;
  }
  if (wine.winemakingNote) {
    html += `<p class="face-h3"><span class="ic">&#127866;</span> How it's made</p>
      <p class="face-desc">${wine.winemakingNote}</p>`;
  }
  if (wine.notesGap) {
    html += `<p class="empty-note" style="text-align:left;font-style:italic;">${wine.notesGap}</p>`;
  }
  panel.innerHTML = html;
  app.appendChild(panel);

  const footerNav = document.createElement("div");
  footerNav.className = "card-footer-nav";

  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "← Back";
  backBtn.disabled = idx === 0;
  backBtn.onclick = () => go("zp-card", { wineId: ZERO_PROOF_WINES[idx - 1].id }, false);

  const homeBtn = document.createElement("button");
  homeBtn.className = "footer-btn footer-btn-home";
  homeBtn.textContent = "Home";
  homeBtn.onclick = () => go("home", {});

  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn";
  nextBtn.textContent = "Next →";
  nextBtn.disabled = idx === ZERO_PROOF_WINES.length - 1;
  nextBtn.onclick = () => go("zp-card", { wineId: ZERO_PROOF_WINES[idx + 1].id }, false);

  footerNav.appendChild(backBtn);
  footerNav.appendChild(homeBtn);
  footerNav.appendChild(nextBtn);
  app.appendChild(footerNav);
}

function renderPairWineFoodList() {
  header("Pair wine &#8594; food");
  app.appendChild(renderSearchableWineList(
    (wineId) => go("pairwf-detail", { wineId }),
    "Search a wine"
  ));
}

function renderDishList(headerTitle, searchPlaceholder, showAllergenFilter) {
  header(headerTitle);
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = searchPlaceholder;
  wrap.appendChild(input);

  let excludedAllergens = [];
  if (showAllergenFilter) {
    const allAllergens = [...new Set(DISHES.flatMap(d => d.allergensInRecipe || []))].sort();
    const filterLabel = document.createElement("p");
    filterLabel.className = "allergen-group-label";
    filterLabel.style.marginTop = "4px";
    filterLabel.textContent = "Hide dishes containing:";
    wrap.appendChild(filterLabel);
    const filterRow = document.createElement("div");
    filterRow.className = "allergen-row";
    allAllergens.forEach(a => {
      const chip = document.createElement("button");
      chip.className = "chip removable allergen-filter-chip";
      chip.textContent = a.charAt(0).toUpperCase() + a.slice(1);
      chip.onclick = () => {
        if (excludedAllergens.includes(a)) {
          excludedAllergens = excludedAllergens.filter(x => x !== a);
          chip.classList.remove("filter-active");
        } else {
          excludedAllergens.push(a);
          chip.classList.add("filter-active");
        }
        draw(input.value);
      };
      filterRow.appendChild(chip);
    });
    wrap.appendChild(filterRow);
  }

  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  const manualExpanded = new Set();

  function draw(filter) {
    listWrap.innerHTML = "";
    let filtered = DISHES.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
    if (excludedAllergens.length) {
      filtered = filtered.filter(d => {
        const has = d.allergensInRecipe || [];
        return !excludedAllergens.some(a => has.includes(a));
      });
    }
    const hasActiveFilter = excludedAllergens.length > 0 || filter.trim().length > 0;
    const groups = groupBySection(filtered);
    SECTION_ORDER.forEach(section => {
      const dishes = groups[section];
      if (!dishes.length) return;

      const isExpanded = hasActiveFilter || manualExpanded.has(section);

      const label = document.createElement("button");
      label.className = "section-label section-toggle";
      label.innerHTML = `<span>${section}</span><span class="section-chevron">${isExpanded ? "\u25BE" : "\u25B8"}</span>`;
      label.onclick = () => {
        if (hasActiveFilter) return;
        if (manualExpanded.has(section)) manualExpanded.delete(section);
        else manualExpanded.add(section);
        draw(input.value);
      };
      listWrap.appendChild(label);

      if (!isExpanded) return;

      dishes.forEach(d => {
        const row = document.createElement("div");
        row.className = "list-row";
        row.innerHTML = `<span class="list-row-main"><span class="dish-icon">${getSectionIcon(d.section)}</span>${d.name}</span>`;
        row.onclick = () => go("dish-detail", { dishId: d.id });
        listWrap.appendChild(row);
      });
    });
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No dishes match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

function renderPairFoodWineList() {
  renderDishList("Pair food &#8594; wine", "Search a dish");
}

function renderMenuList() {
  renderDishList("Food menu", "Search the menu", true);
  addMondayButton();
}

/* ---------- Monday Steak Night menu ----------
   A "Monday" button in the Food menu header opens the limited Monday menu
   (MONDAY_MENU in data.js) as the same sheet the Guest Journey uses. Each item
   points at a regular DISHES entry, so tapping one opens its normal detail
   page. Opening the sheet changes no route or progress. */
function addMondayButton() {
  if (typeof MONDAY_MENU === "undefined") return;
  const hdr = app.querySelector(".app-header");
  if (!hdr) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "journey-btn monday-btn";
  btn.setAttribute("aria-haspopup", "dialog");
  btn.setAttribute("aria-label", `Show the Monday ${MONDAY_MENU.title} menu`);
  btn.textContent = "Monday";
  btn.onclick = () => showMondayMenu(btn);
  hdr.appendChild(btn);
}

function showMondayMenu(trigger) {
  if (document.querySelector(".journey-overlay")) return;
  const known = new Set(DISHES.map(d => d.id));
  const groups = MONDAY_MENU.groups;
  const dishCount = groups.filter(g => !g.board).reduce((n, g) => n + g.items.length, 0);
  const hasBoard = groups.some(g => g.board);

  const itemHTML = (it) => {
    const inner = `
      <span class="monday-item-main">
        <span class="monday-item-name">${journeyEsc(it.label)}</span>
        ${it.desc ? `<span class="monday-item-desc">${journeyEsc(it.desc)}</span>` : ""}
      </span>
      ${typeof it.price === "number" ? `<span class="monday-item-price">$${it.price}</span>` : ""}`;
    return known.has(it.dishId)
      ? `<button type="button" class="monday-item" data-dish="${journeyEsc(it.dishId)}">${inner}</button>`
      : `<div class="monday-item is-static">${inner}</div>`;
  };

  const groupsHTML = groups.map(g => `
    <section class="monday-group">
      <div class="monday-group-head">
        <h3 class="monday-group-title">${journeyEsc(g.title)}</h3>
        ${typeof g.price === "number" ? `<span class="monday-item-price">$${g.price}</span>` : ""}
      </div>
      ${g.note ? `<p class="monday-note">${journeyEsc(g.note)}</p>` : ""}
      ${g.items.map(itemHTML).join("")}
    </section>`).join("");

  const overlay = document.createElement("div");
  overlay.className = "journey-overlay";
  overlay.innerHTML = `
    <div class="journey-sheet" role="dialog" aria-modal="true" aria-labelledby="monday-title">
      <div class="journey-head">
        <div>
          <p class="journey-eyebrow">${journeyEsc(MONDAY_MENU.eyebrow)}</p>
          <h2 class="journey-title" id="monday-title">${journeyEsc(MONDAY_MENU.title)}</h2>
          <p class="journey-sub">${dishCount} dishes${hasBoard ? " &middot; Prime Board" : ""} &middot; Tap a dish for details</p>
        </div>
        <button type="button" class="journey-close" aria-label="Close the Monday menu">&#10005;</button>
      </div>
      <div class="journey-body">${groupsHTML}</div>
    </div>
  `;

  // Same fixed-height sizing as the Guest Journey sheet: fill the area below
  // the app header so the Back/Monday buttons stay uncovered.
  const appHeader = app.querySelector(".app-header");
  const headerBottom = appHeader ? Math.max(appHeader.getBoundingClientRect().bottom, 0) : 0;
  const sheetHeight = Math.max(window.innerHeight * 0.5, window.innerHeight - headerBottom);
  const sheetEl = overlay.querySelector(".journey-sheet");
  sheetEl.style.height = `${sheetHeight}px`;
  sheetEl.style.maxHeight = `${sheetHeight}px`;

  const prevOverflow = document.body.style.overflow;
  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    document.removeEventListener("keydown", onKey, true);
    window.removeEventListener("popstate", close);
    overlay.remove();
    document.body.style.overflow = prevOverflow;
    if (trigger && document.body.contains(trigger)) trigger.focus();
  };
  const onKey = (e) => {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab") return;
    const focusables = overlay.querySelectorAll("button");
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  overlay.querySelector(".journey-close").onclick = close;
  overlay.querySelectorAll(".monday-item[data-dish]").forEach(b => {
    b.onclick = () => { const id = b.dataset.dish; close(); go("dish-detail", { dishId: id }); };
  });
  document.addEventListener("keydown", onKey, true);
  window.addEventListener("popstate", close);
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  overlay.querySelector(".journey-close").focus();
}

function renderCocktailTypeChooser() {
  header("Bar");

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = `
    <div class="home-option" data-go="whistlepig">
      <div class="home-icon-circle">&#128055;</div>
      <div class="home-option-text"><p>Whistlepig Dinner</p><span>Oct 22 · Five-course pairing briefing</span></div>
    </div>
    <div class="home-option" data-go="house">
      <div class="home-icon-circle">&#127864;</div>
      <div class="home-option-text"><p>House Cocktails</p><span>Prime 131's own recipe book</span></div>
    </div>
    <div class="home-option" data-go="seasonal">
      <div class="home-icon-circle">&#127810;</div>
      <div class="home-option-text"><p>Seasonal Cocktails</p><span>Limited-time fall menu</span></div>
    </div>
    <div class="home-option" data-go="classic">
      <div class="home-icon-circle">&#127865;</div>
      <div class="home-option-text"><p>Classic Cocktails</p><span>Timeless recipes, by base spirit</span></div>
    </div>
    <div class="home-option" data-go="na">
      <div class="home-icon-circle">&#129475;</div>
      <div class="home-option-text"><p>Non-alcoholic Beverages</p><span>Zero-proof cocktails</span></div>
    </div>
    <div class="home-option" data-go="liquor">
      <div class="home-icon-circle">&#127866;</div>
      <div class="home-option-text"><p>Liquor</p><span>The back bar, by category</span></div>
    </div>
  `;
  options.querySelector('[data-go="whistlepig"]').onclick = () => go("whistlepig-dinner");
  options.querySelector('[data-go="house"]').onclick = () => go("cocktail-list");
  options.querySelector('[data-go="seasonal"]').onclick = () => go("seasonal-cocktail-list");
  options.querySelector('[data-go="classic"]').onclick = () => go("classic-cocktail-list");
  options.querySelector('[data-go="na"]').onclick = () => go("na-cocktail-list");
  options.querySelector('[data-go="liquor"]').onclick = () => go("liquor-list");
  app.appendChild(options);
}

const LIQUOR_STRUCTURE_BANDS = {
  sweetness: ["Bone Dry", "Dry", "Medium", "Sweet", "Very Sweet"],
  smoke: ["None", "Faint", "Light", "Noticeable", "Heavy"],
  spice: ["Mellow", "Light", "Medium", "Peppery", "Fiery"],
  body: ["Light", "Medium(-)", "Medium", "Medium(+)", "Full"],
  finish: ["Short", "Medium(-)", "Medium", "Medium(+)", "Long"]
};

function liquorStructureBars(structure) {
  const order = ["sweetness", "smoke", "spice", "body", "finish"];
  return order.map((key) => {
    const val = structure[key];
    if (!val) return "";
    const band = LIQUOR_STRUCTURE_BANDS[key][val - 1] || LIQUOR_STRUCTURE_BANDS[key][0];
    const width = val * 20;
    return `<div class="bar-block"><div class="bar-track"><div class="bar-fill" style="width:${width}%;"></div></div><p>${band} ${key.charAt(0).toUpperCase() + key.slice(1)}</p></div>`;
  }).join("");
}

function buildLiquorFaceHTML(l, similar, idx) {
  const hasSellContent = l.guestDescription || (l.sellingPoints && l.sellingPoints.length) || l.arsenal;
  const hasUnderstandContent = l.distillingNote || (l.flavorTags && l.flavorTags.length) || l.structure || similar;
  const hasKnowledgeContent = l.funFact || l.funFact2 || l.shortStory || l.moment || l.memory;

  if (idx === 0) {
    if (!hasSellContent) return `<p class="flip-label">1/3</p><p class="face-title">Sell it</p><p class="empty-note" style="text-align:left;font-style:italic;">Details coming soon.</p>`;
    return `
      <p class="flip-label">1/3</p>
      <p class="face-title">Sell it</p>
      ${l.guestDescription ? `<p class="face-h3"><span class="ic">&#128172;</span> Guest description</p><p class="face-desc">${l.guestDescription}</p>` : ""}
      ${l.sellingPoints && l.sellingPoints.length ? `<p class="face-h3"><span class="ic">&#10003;</span> Selling points</p>${l.sellingPoints.map(p => `<div class="point-row"><span class="ic">&#10003;</span><span>${p}</span></div>`).join("")}` : ""}
      ${l.arsenal ? `<div class="arsenal-block"><p class="arsenal-label">Table-side line</p><p class="arsenal-text">${l.arsenal}</p></div>` : ""}
    `;
  } else if (idx === 1) {
    if (!hasUnderstandContent) return `<p class="flip-label">2/3</p><p class="face-title">Understand it</p><p class="empty-note" style="text-align:left;font-style:italic;">Details coming soon.</p>`;
    return `
      <p class="flip-label">2/3</p>
      <p class="face-title">Understand it</p>
      ${l.mashBill ? `<p class="face-h3"><span class="ic">&#127806;</span> Mash bill</p><p class="face-desc" style="margin-bottom:14px;">${l.mashBill}</p>` : ""}
      ${l.distillingNote ? `<p class="face-h3"><span class="ic">&#127866;</span> Distilling note</p><p class="face-desc" style="margin-bottom:14px;">${l.distillingNote}</p>` : ""}
      ${l.flavorTags && l.flavorTags.length ? `<p class="face-h3"><span class="ic">&#127815;</span> Flavor profile</p><div class="flavor-grid">${l.flavorTags.map(t => `<div class="flavor-item"><div class="icon">${getFlavorIcon(t)}</div><p>${t}</p></div>`).join("")}</div>` : ""}
      ${l.structure ? `<p class="face-h3"><span class="ic">&#128202;</span> Structure</p>${liquorStructureBars(l.structure)}` : ""}
      ${similar ? `<p class="back-line" style="margin-top:8px;"><b>Similar pour</b>${similar.name}</p>` : ""}
    `;
  } else {
    if (!hasKnowledgeContent) return `<p class="flip-label">3/3</p><p class="face-title">Sommelier knowledge</p><p class="empty-note" style="text-align:left;font-style:italic;">Details coming soon.</p>`;
    return `
      <p class="flip-label">3/3</p>
      <p class="face-title">Sommelier knowledge</p>
      ${l.funFact || l.funFact2 ? `<p class="face-h3"><span class="ic">&#10024;</span> Fun facts</p>${l.funFact ? `<div class="fact-block"><p>${l.funFact}</p></div>` : ""}${l.funFact2 ? `<div class="fact-block"><p>${l.funFact2}</p></div>` : ""}` : ""}
      ${l.shortStory ? `<p class="face-h3"><span class="ic">&#128214;</span> Short story</p><p class="face-desc" style="margin-bottom:14px;">${l.shortStory}</p>` : ""}
      ${l.moment ? `<p class="face-h3"><span class="ic">&#128278;</span> The moment</p><p class="face-desc">${l.moment}</p>` : ""}
      ${l.memory ? `<p class="face-h3"><span class="ic">&#128142;</span> The memory</p><p class="face-desc">${l.memory}</p>` : ""}
    `;
  }
}

function renderLiquorFlipCard(l) {
  const similar = similarLiquorPour(l);
  const flipcard = document.createElement("div");
  flipcard.className = "flipcard";
  const inner = document.createElement("div");
  inner.className = "flip-inner face-0";
  inner.innerHTML = buildLiquorFaceHTML(l, similar, 0);
  flipcard.appendChild(inner);

  let faceIndex = 0;
  flipcard.onclick = () => {
    flipcard.classList.add("flipping");
    setTimeout(() => {
      faceIndex = (faceIndex + 1) % 3;
      inner.className = "flip-inner face-" + faceIndex;
      inner.innerHTML = buildLiquorFaceHTML(l, similar, faceIndex);
      flipcard.classList.remove("flipping");
    }, 200);
  };

  return flipcard;
}

function liquorPriceLabel(l) {
  if (typeof l.price === "number") return `$${l.price}`;
  if (l.priceRange) return `$${l.priceRange}`;
  return "";
}

function renderLiquorList() {
  header("Liquor");
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search the back bar";
  wrap.appendChild(input);
  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  const manualExpanded = new Set();

  function appendLiquorRow(l, category) {
    const row = document.createElement("div");
    row.className = "list-row";
    const priceHtml = liquorPriceLabel(l) ? `<span class="list-row-price">${liquorPriceLabel(l)}</span>` : "";
    const allocFlag = l.allocation ? `<span class="dish-icon" title="Rotating supplier allocation — ask your server">*</span>` : "";
    row.innerHTML = `<span class="list-row-main"><span class="dish-icon">${SPIRIT_ICON_MAP[category] || "\u{1F943}"}</span>${l.name}${allocFlag}</span>${priceHtml}`;
    row.onclick = () => go("liquor-card", { liquorId: l.id });
    listWrap.appendChild(row);
  }

  function draw(filter) {
    listWrap.innerHTML = "";
    const filterLower = filter.toLowerCase();
    const hasActiveFilter = filterLower.trim().length > 0;

    SPIRIT_ORDER.forEach(category => {
      const items = LIQUOR.filter(l => l.category === category && l.name.toLowerCase().includes(filterLower))
        .sort((a, b) => a.name.localeCompare(b.name));
      if (hasActiveFilter && !items.length) return;

      const isExpanded = hasActiveFilter || manualExpanded.has(category);

      const label = document.createElement("button");
      label.className = "section-label section-toggle";
      label.innerHTML = `<span>${category}${items.length ? " &middot; " + items.length : ""}</span><span class="section-chevron">${isExpanded ? "\u25BE" : "\u25B8"}</span>`;
      label.onclick = () => {
        if (hasActiveFilter) return;
        if (manualExpanded.has(category)) manualExpanded.delete(category);
        else manualExpanded.add(category);
        draw(input.value);
      };
      listWrap.appendChild(label);

      if (!isExpanded) return;

      if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "empty-note";
        empty.style.textAlign = "left";
        empty.style.fontStyle = "italic";
        empty.textContent = "No bottles added yet.";
        listWrap.appendChild(empty);
        return;
      }

      const subOrder = LIQUOR_SUBCATEGORY_ORDER[category];
      if (subOrder) {
        subOrder.forEach(sub => {
          const subItems = items.filter(l => l.subcategory === sub);
          if (!subItems.length) return;
          const subLabel = document.createElement("p");
          subLabel.className = "section-label";
          subLabel.textContent = sub;
          listWrap.appendChild(subLabel);
          subItems.forEach(l => appendLiquorRow(l, category));
        });
        items.filter(l => !subOrder.includes(l.subcategory)).forEach(l => appendLiquorRow(l, category));
      } else {
        items.forEach(l => appendLiquorRow(l, category));
      }
    });

    if (!listWrap.children.length) {
      listWrap.innerHTML = `<p class="empty-note">No bottles match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

function renderLiquorCard(liquorId) {
  const l = LIQUOR.find(item => item.id === liquorId) || LIQUOR[0];
  const idx = LIQUOR.findIndex(item => item.id === l.id);

  header("Liquor");

  const container = document.createElement("div");

  const heroName = document.createElement("p");
  heroName.className = "hero-name";
  heroName.textContent = l.name;
  container.appendChild(heroName);

  if (l.subcategory) {
    const meta1 = document.createElement("p");
    meta1.className = "hero-meta";
    meta1.textContent = l.subcategory;
    container.appendChild(meta1);
  }

  if (l.region) {
    const meta2 = document.createElement("p");
    meta2.className = "hero-meta";
    meta2.textContent = l.region;
    container.appendChild(meta2);
  }

  if (l.allocation) {
    const meta3 = document.createElement("p");
    meta3.className = "hero-meta strong";
    meta3.textContent = "Rotating supplier allocation — ask your server for today's availability.";
    container.appendChild(meta3);
  }

  if (l.producer) {
    const meta4 = document.createElement("p");
    meta4.className = "hero-meta strong";
    meta4.textContent = "Producer: " + l.producer;
    container.appendChild(meta4);
  }

  const priceLabel = liquorPriceLabel(l);
  if (priceLabel) {
    const priceTag = document.createElement("p");
    priceTag.className = "hero-price";
    priceTag.innerHTML = `<span class="hero-price-amount">${priceLabel}</span>`;
    container.appendChild(priceTag);
  }

  // Phase B: sourced content (facts, flavor, structure, story). Items not
  // yet enriched fall back to an honest empty state per face, same
  // discipline as Dessert Wines elsewhere in the app -- nothing invented.
  container.appendChild(renderLiquorFlipCard(l));

  app.appendChild(container);

  const footerNav = document.createElement("div");
  footerNav.className = "card-footer-nav";

  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "\u2190 Back";
  backBtn.disabled = idx === 0;
  backBtn.onclick = () => go("liquor-card", { liquorId: LIQUOR[idx - 1].id }, false);

  const homeBtn = document.createElement("button");
  homeBtn.className = "footer-btn footer-btn-home";
  homeBtn.textContent = "Home";
  homeBtn.onclick = () => go("home", {});

  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn";
  nextBtn.textContent = "Next \u2192";
  nextBtn.disabled = idx === LIQUOR.length - 1;
  nextBtn.onclick = () => go("liquor-card", { liquorId: LIQUOR[idx + 1].id }, false);

  footerNav.appendChild(backBtn);
  footerNav.appendChild(homeBtn);
  footerNav.appendChild(nextBtn);
  app.appendChild(footerNav);

  let touchStartX = null;
  app.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { once: true });
  app.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      const nextIdx = dx < 0 ? Math.min(idx + 1, LIQUOR.length - 1) : Math.max(idx - 1, 0);
      go("liquor-card", { liquorId: LIQUOR[nextIdx].id }, false);
    }
  }, { once: true });
}

// SPIRIT_ORDER and SPIRIT_ICON_MAP now live in config.js (per-restaurant configuration)

function renderClassicCocktailList() {
  header("Classic Cocktails");
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search classic cocktails";
  wrap.appendChild(input);
  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = CLASSIC_COCKTAILS.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    SPIRIT_ORDER.forEach(spirit => {
      const group = filtered.filter(c => c.spirit === spirit);
      if (!group.length) return;
      const label = document.createElement("p");
      label.className = "section-label";
      label.textContent = spirit;
      listWrap.appendChild(label);
      group.forEach(c => {
        const row = document.createElement("div");
        row.className = "list-row";
        row.innerHTML = `<span class="list-row-main"><span class="dish-icon">${SPIRIT_ICON_MAP[spirit] || "\u{1F378}"}</span>${c.name}</span>`;
        row.onclick = () => go("cocktail-detail", { cocktailId: c.id });
        listWrap.appendChild(row);
      });
    });
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No cocktails match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

function renderCocktailList() {
  header("House Cocktails");
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search cocktails";
  wrap.appendChild(input);
  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = COCKTAILS.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(c => {
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML = `<span class="list-row-main"><span class="dish-icon">&#127864;</span>${c.name}</span>`;
      row.onclick = () => go("cocktail-detail", { cocktailId: c.id });
      listWrap.appendChild(row);
    });
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No cocktails match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

function renderSeasonalCocktailList() {
  header("Seasonal Cocktails");
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search seasonal cocktails";
  wrap.appendChild(input);
  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = SEASONAL_COCKTAILS.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(c => {
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML = `<span class="list-row-main"><span class="dish-icon">&#127810;</span>${c.name}</span>`;
      row.onclick = () => go("cocktail-detail", { cocktailId: c.id });
      listWrap.appendChild(row);
    });
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No cocktails match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

function renderNaCocktailList() {
  header("Non-alcoholic Beverages");
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search non-alcoholic beverages";
  wrap.appendChild(input);
  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = NA_COCKTAILS.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(c => {
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML = `<span class="list-row-main"><span class="dish-icon">&#129475;</span>${c.name}</span>`;
      row.onclick = () => go("cocktail-detail", { cocktailId: c.id });
      listWrap.appendChild(row);
    });
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="empty-note">No beverages match that search.</p>`;
    }
  }
  draw("");
  input.oninput = () => draw(input.value);
  app.appendChild(wrap);
}

/* Whistlepig Dinner: one scrollable briefing page, no quiz, no progress tracking.
   Content lives in WHISTLEPIG_DINNER (data.js). */
function renderWhistlepigDinner() {
  header("Whistlepig Dinner");
  const d = WHISTLEPIG_DINNER;
  const wrap = document.createElement("div");
  wrap.className = "wp-wrap";

  const blendHtml = (c) => c.blend
    ? `<ul class="wp-blend">${c.blend.map(b => `<li>${b}</li>`).join("")}</ul>` : "";

  wrap.innerHTML = `
    <p class="intro-eyebrow">${d.when}</p>
    <h1 class="intro-title">${d.title}</h1>
    <p class="slide-text">${d.big}</p>
    <div class="fact-block"><b class="wp-label">Pairing logic</b><p>${d.logic}</p></div>
    ${d.courses.map(c => `
      <section class="wp-course">
        <p class="slide-kicker">${c.course} · ${c.move}</p>
        <h2 class="slide-title">${c.dish}</h2>
        <p class="wp-dish-notes">${c.dishNotes}</p>
        <p class="wp-pour">${c.pour}</p>
        ${c.pourSub ? `<p class="wp-pour-sub">${c.pourSub}</p>` : ""}
        <p class="hero-meta">${c.facts}</p>
        ${blendHtml(c)}
        <p class="wp-label">Tastes like</p>
        <p class="slide-text">${c.taste}</p>
        <p class="wp-label">Why it works</p>
        <p class="slide-text">${c.why}</p>
        <div class="fact-block"><b class="wp-label">Say to the guest</b><p>“${c.say}”</p></div>
      </section>
    `).join("")}
    <section class="wp-course">
      <p class="slide-kicker">Quick glossary</p>
      ${d.glossary.map(g => `<p class="slide-text"><b>${g[0]}:</b> ${g[1]}</p>`).join("")}
    </section>
  `;
  app.appendChild(wrap);
}

function findCocktail(id) { return COCKTAILS.find(c => c.id === id) || SEASONAL_COCKTAILS.find(c => c.id === id) || CLASSIC_COCKTAILS.find(c => c.id === id) || NA_COCKTAILS.find(c => c.id === id); }

function renderCocktailDetail(cocktailId) {
  const cocktail = findCocktail(cocktailId);
  if (!cocktail) { go("cocktail-list", {}, false); return; }

  header("Cocktails");

  const container = document.createElement("div");
  const name = document.createElement("p");
  name.className = "hero-name";
  name.textContent = cocktail.name;
  container.appendChild(name);

  const meta1 = document.createElement("p");
  meta1.className = "hero-meta";
  meta1.textContent = cocktail.glassware;
  container.appendChild(meta1);

  const meta2 = document.createElement("p");
  meta2.className = "hero-meta strong";
  meta2.textContent = cocktail.method;
  container.appendChild(meta2);

  const flavorTitle = document.createElement("p");
  flavorTitle.className = "detail-h3";
  flavorTitle.innerHTML = `<span>&#127864;</span> Flavor profile`;
  container.appendChild(flavorTitle);

  const flavorGrid = document.createElement("div");
  flavorGrid.className = "flavor-grid cocktail-flavor-grid";
  flavorGrid.innerHTML = cocktail.flavorTags.map(t =>
    `<div class="flavor-item"><div class="icon">${getFlavorIcon(t)}</div><p>${t}</p></div>`
  ).join("");
  container.appendChild(flavorGrid);

  const flipcard = document.createElement("div");
  flipcard.className = "dish-flipcard";
  const inner = document.createElement("div");
  inner.className = "dish-flip-inner";

  function faceHTML(idx) {
    if (idx === 0) {
      return `
        <p class="dish-flip-tag">1/2 &middot; tap to flip</p>
        <p class="dish-flip-title">&#129380; Ingredients</p>
        ${cocktail.followUp && cocktail.followUp.length ? `
          <p class="detail-h3" style="margin-top:0; color:var(--washi-100);"><span>&#128172;</span> Ask the guest</p>
          <div class="followup-list">${cocktail.followUp.map(q => `<div class="followup-chip">${q}</div>`).join("")}</div>
        ` : ""}
        <ul class="ingredient-list">${cocktail.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <p class="chefprep-text" style="margin-top:auto;"><b style="color:#D9B98A;">Garnish:</b> ${cocktail.garnish}</p>
      `;
    }
    return `
      <p class="dish-flip-tag">2/2 &middot; tap to flip</p>
      <p class="dish-flip-title">&#127864; Build</p>
      <p class="chefprep-text">${cocktail.directions}</p>
      ${cocktail.prep ? `<p class="chefprep-text" style="margin-top:8px;"><b style="color:#D9B98A;">House prep:</b> ${cocktail.prep}</p>` : ""}
      ${cocktail.about ? `<p class="chefprep-text" style="margin-top:8px;"><b style="color:#D9B98A;">About:</b> ${cocktail.about}</p>` : ""}
      ${cocktail.funFact ? `<p class="chefprep-text" style="margin-top:8px;"><b style="color:#D9B98A;">Fun fact:</b> ${cocktail.funFact}</p>` : ""}
      ${cocktail.bestFor ? `<p class="chefprep-text" style="margin-top:8px;"><b style="color:#D9B98A;">Great for:</b> ${cocktail.bestFor}</p>` : ""}
    `;
  }

  inner.innerHTML = faceHTML(0);
  flipcard.appendChild(inner);
  let faceIndex = 0;
  flipcard.onclick = () => {
    flipcard.classList.add("flipping");
    setTimeout(() => {
      faceIndex = (faceIndex + 1) % 2;
      inner.className = "dish-flip-inner" + (faceIndex === 1 ? " chefprep" : "");
      inner.innerHTML = faceHTML(faceIndex);
      flipcard.classList.remove("flipping");
    }, 200);
  };
  container.appendChild(flipcard);

  app.appendChild(container);
}

function renderNavChips(activeWineId, onSelect, wineSource) {
  const source = wineSource || WINES;
  const wrap = document.createElement("div");
  wrap.className = "nav-chips";
  source.forEach(w => {
    const chip = document.createElement("button");
    chip.className = "nav-chip" + (w.id === activeWineId ? " active" : "");
    chip.textContent = w.name.split(" ").slice(0, 2).join(" ");
    chip.onclick = () => onSelect(w.id);
    wrap.appendChild(chip);
  });
  return wrap;
}

function renderHeroHeader(wine) {
  const frag = document.createElement("div");

  const heroName = document.createElement("p");
  heroName.className = "hero-name";
  heroName.textContent = wine.name;
  frag.appendChild(heroName);

  const meta1 = document.createElement("p");
  meta1.className = "hero-meta";
  meta1.textContent = wine.grape;
  frag.appendChild(meta1);

  const meta2 = document.createElement("p");
  meta2.className = "hero-meta";
  meta2.textContent = wine.region;
  frag.appendChild(meta2);

  const meta3 = document.createElement("p");
  meta3.className = "hero-meta strong";
  meta3.textContent = "Producer: " + wine.producer;
  frag.appendChild(meta3);

  const meta4 = document.createElement("p");
  meta4.className = "hero-meta strong";
  meta4.textContent = "Winemaker: " + wine.winemaker;
  frag.appendChild(meta4);

  if (typeof wine.price === "number") {
    const priceTag = document.createElement("p");
    priceTag.className = "hero-price";
    const priceUnit = wine.id.startsWith("bw") ? "bottle" : "glass";
    priceTag.innerHTML = `<span class="hero-price-amount">$${wine.price}</span><span class="hero-price-label">${priceUnit}</span>`;
    frag.appendChild(priceTag);
  }

  return frag;
}

function renderWineCardBody(wine) {
  const container = document.createElement("div");
  container.appendChild(renderHeroHeader(wine));

  const pairsLabel = document.createElement("p");
  pairsLabel.className = "pairs-label";
  pairsLabel.innerHTML = `<span class="ic">&#127860;</span>Pairs with`;
  container.appendChild(pairsLabel);

  const pillRow = document.createElement("div");
  pillRow.className = "pill-row";
  wine.pairingDishIds.forEach(dishId => {
    const dish = findDish(dishId);
    if (!dish) return;
    const pill = document.createElement("button");
    pill.className = "pill";
    pill.textContent = dish.name;
    pill.onclick = () => go("dish-detail", { dishId: dish.id });
    pillRow.appendChild(pill);
  });
  container.appendChild(pillRow);
  container.appendChild(renderFlipCard(wine));

  return container;
}

function renderStudyCard(wineId) {
  const wine = findWine(wineId) || WINES[0];
  const idx = WINES.findIndex(w => w.id === wine.id);

  header("By The Glass");
  app.appendChild(renderNavChips(wine.id, (id) => go("study-card", { wineId: id }, false)));
  app.appendChild(renderWineCardBody(wine));

  const footerNav = document.createElement("div");
  footerNav.className = "card-footer-nav";

  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "\u2190 Back";
  backBtn.disabled = idx === 0;
  backBtn.onclick = () => go("study-card", { wineId: WINES[idx - 1].id }, false);

  const homeBtn = document.createElement("button");
  homeBtn.className = "footer-btn footer-btn-home";
  homeBtn.textContent = "Home";
  homeBtn.onclick = () => go("home", {});

  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn";
  nextBtn.textContent = "Next \u2192";
  nextBtn.disabled = idx === WINES.length - 1;
  nextBtn.onclick = () => go("study-card", { wineId: WINES[idx + 1].id }, false);

  footerNav.appendChild(backBtn);
  footerNav.appendChild(homeBtn);
  footerNav.appendChild(nextBtn);
  app.appendChild(footerNav);

  let touchStartX = null;
  app.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { once: true });
  app.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      const nextIdx = dx < 0 ? Math.min(idx + 1, WINES.length - 1) : Math.max(idx - 1, 0);
      go("study-card", { wineId: WINES[nextIdx].id }, false);
    }
  }, { once: true });
}

function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) >>> 0; }
  return h;
}

const PAIRING_REASONS = {
  "w1|d-oysters": "Prosecco's bubbles and light sweetness mirror the citrus in the shallot ponzu and cut straight through the brine, resetting your palate before the next shuck.",
  "w1|d-edamame": "Simple sea-salted soybeans want a wine that's just as unfussy &ndash; Prosecco's apple and pear fruit softens the salt while the bubbles clear the palate between handfuls.",
  "w1|d-shishitos": "The blistered char and furikake here carry a little heat and a lot of salt &ndash; Prosecco's off-dry edge and low alcohol keep that from ever tasting sharp, and the bubbles cut the sesame oil.",

  "w2|d-caviar": "This isn't a classic pairing by reputation alone &ndash; Telmont's own brioche and toast character (from extended lees aging) genuinely echoes the nutty, buttery pop of the sturgeon roe itself.",
  "w2|d-shellfish-tower": "Four butter-drenched proteins in one dish need real acid to keep up &ndash; Telmont's chalky, high acidity is built for exactly this much richness without disappearing under it.",

  "w3|d-tuna-tartare": "The avocado purée brings fat, the yuzu-garlic-soy dressing brings sharp acid &ndash; the rosé's red berry fruit softens that sharpness while its own acidity stays right in step with the dressing.",
  "w3|d-yellowtail-carpaccio": "The wakamomo ponzu here is sweet-tart, built from baby Japanese peach &ndash; that's a genuine flavor echo with the wine's own strawberry and red currant fruit, not just a raw-fish default.",
  "w3|d-seared-spicy-salmon-roll": "Seared salmon and spicy aioli bring char and richness &ndash; the wine's acid cuts both, while its red fruit stays out of the way of the ponzu's savory edge instead of competing with it.",

  "w4|d-grilled-romaine": "The anchovy black garlic dressing is pungent and salty &ndash; Pinot Grigio's neutral, high-acid profile refuses to get bullied by it, letting the char on the lettuce still come through.",
  "w4|d-fire-roasted-beets": "Sweet-earthy beets with tangy labneh and warm-spiced pistachio dukkah don't need a wine trying to match them note for note &ndash; the wine's crisp apple character is a clean contrast instead.",
  "w4|d-branzino": "About as textbook as pairing gets: a delicate, simply grilled fish wants a delicate wine, and both just get out of the way and let the brown butter and lemon do the talking.",

  "w5|d-oysters": "Same shallot ponzu as the Ruffino pairing, but Emmolo's fresh-cut herb character leans directly into the raw brine, while its citrus zest matches the orange and lemon already in the sauce.",
  "w5|d-yellowtail-carpaccio": "Where the rosé Champagne leans into the sweetness of the wakamomo ponzu, Emmolo comes at the same dish from its herbal, stone-fruit side &ndash; a genuinely different but equally valid angle.",
  "w5|d-crunchy-spicy-tuna-roll": "Spicy mayo, sweet eel sauce, and fermented kimchi sauce is a real flavor bomb &ndash; Emmolo's high acid and citrus don't get lost in it, they cut straight through the mayo's richness.",
  "w5|d-131-california-roll": "A gentler roll than the crunchy tuna &ndash; crab, avocado, cucumber. Emmolo's citrus and herb notes complement the natural sweetness of the crab without overwhelming a more delicate roll.",

  "w6|d-mac-cheese": "This is rich meeting rich on purpose &ndash; the sharp cheddar cream sauce and the wine's own buttery, oak-driven character come from the same place, so neither one cuts the other, they just agree.",
  "w6|d-mashed-potato": "The richest dish on the menu &ndash; braised short rib, truffle jus, raclette melted over cream and butter. Cambria's full body means it won't get bulldozed, though the truffle's umami is working against the oak a little; this is a big-wine-big-dish match more than a precise umami answer.",
  "w6|d-miso-cod": "The coconut lemongrass espuma actually gives Cambria something specific to grab onto &ndash; its own tropical fruit picks up the coconut directly. Real flavor bridge, though Benton-Lane remains the safer choice if the umami from the miso marinade reads assertive that night.",
  "w6|d-wagyu-skirt": "The chili vinaigrette brings heat, the blue cheese brings funk &ndash; Cambria's roundness takes the edge off the heat while its tropical fruit plays well against the cheese instead of clashing with it.",

  "w7|d-lobster": "Butter-on-butter, but not redundant &ndash; Stag's Leap's own brioche and toast character (from time in oak) genuinely echoes the richness of the garlic ponzu butter rather than just matching its weight.",
  "w7|d-branzino": "The same fish as the Santa Margherita pairing, but here it's about the brown butter specifically &ndash; brown butter is nuttier and richer than a simple grilled preparation, and this Chardonnay's fuller body was built for that difference.",
  "w7|d-chicken-fried-lobster": "The richest lobster preparation on the menu &ndash; fried, breaded, finished with brown butter aioli. This needs Stag's Leap's fullest body and its own toasted, brioche-like character to stand up to the fry oil.",

  "w8|d-chopped-salad": "The plum vinaigrette is sweet-tart and the feta is salty &ndash; Miraval's delicate peach fruit doesn't try to compete with the plum syrup, and its bright acid sits right alongside the vinaigrette's own tang.",
  "w8|d-naan": "Smoky babaganoush or tangy labneh are both a little heavy on their own &ndash; the rosé's floral lift keeps the whole thing feeling fresh instead of dense.",
  "w8|d-edamame": "Same simple, salted snack as the Prosecco pairing, but Miraval's more delicate peach fruit (versus Prosecco's apple-pear) makes this the quieter, more contemplative choice rather than the celebratory one.",

  "w9|d-clam-chowder": "A genuinely classic move &ndash; mineral, flinty Sancerre rosé against a cream-based seafood soup. The high acid cuts the richness while the flint in the wine echoes the chowder's own smokiness.",
  "w9|d-shishitos": "The second shishito pairing on the list, but a different angle &ndash; Sancerre rosé's higher acid and more savory, mineral edge (versus Prosecco's fruit-forward sweetness) is the drier, more serious answer for this dish.",
  "w9|d-hamachi": "Textbook raw-fish logic &ndash; high acid, light body, and just enough red berry fruit to add brightness without masking the natural fat in the yellowtail.",

  "w10|d-branzino": "The crispy skin and brown butter here don't need to be met with force &ndash; Pinot's soft tannin means there's nothing to clash with the delicate flesh, and its acid takes care of the butter.",
  "w10|d-miso-cod": "The strongest technical answer on the whole list for this dish &ndash; the miso's umami and the espuma's citrus both behave better against Pinot's soft tannin and bright acid than they do against a bigger wine.",
  "w10|d-chefs-nigiri": "The fish changes daily on a chef's selection, so the wine needs to be the constant &ndash; light body and soft tannin is the safest bet across whatever's actually on the plate that night.",

  "w11|d-wagyu-skirt": "The chili vinaigrette and blue cheese both bring real intensity &ndash; Flowers' earthy spice notes stand up to the char while its acid handles the vinaigrette's heat more gracefully than a bigger red would.",
  "w11|d-short-rib": "Braised, glazed, finished with chimichurri &ndash; the wine's dark cherry fruit and moderate tannin suit the richness of a long-braised cut without the tannin overpowering meat that's already this tender.",
  "w11|d-negi-toro-roll": "An unusual move on paper &ndash; red wine with raw fish &ndash; but fatty bluefin toro behaves more like meat than like lean sushi, and Flowers' acid cuts the fat the same way it would with duck.",
  "w11|d-marinated-chicken": "The espelette marinade and chili-spiked potatoes bring real heat, and the double-fried potatoes bring real richness &ndash; Flowers' soft tannin won't amplify the burn, and its bright acid is exactly what cuts through the fry oil. This is also the restaurant's own tested pairing for this dish.",

  "w12|d-short-rib": "Malbec's riper, jammier fruit (versus the more savory Flowers Pinot Noir also linked to this dish) makes it the bigger, more crowd-pleasing option for a guest who wants more fruit-forward richness with their short rib.",
  "w12|d-marinated-chicken": "Still a fair pairing, though Flowers is the sharper technical answer &ndash; Malbec's slightly higher tannin makes this the pick for a guest who wants more red wine presence and isn't worried about the chili heat clashing.",
  "w12|d-burger": "Char-grilled beef, a special sauce with real chili flakes in it &ndash; Malbec's ripe fruit and moderate tannin is a straightforward, crowd-pleasing burger match, no subtlety required.",

  "w13|d-marinated-chicken": "The softest tannin of any red linked to this dish &ndash; genuinely the gentlest option if a guest is heat-sensitive and doesn't want any tannic bite stacked on top of the espelette and chili.",
  "w13|d-short-rib": "The gentlest of the three short rib pairings on this list &ndash; good for a guest who wants red wine with their braise but finds big tannin off-putting against something this tender.",

  "w14|d-ribeye": "The fattiest cut on the menu wants the wine with the most grip &ndash; Austin Hope's high tannin is built specifically to cut through this much marbling.",
  "w14|d-ny-strip-14": "Leaner than the ribeye but still a well-marbled Australian wagyu cut &ndash; same tannin-to-fat logic, just slightly less fat for the wine to work against.",
  "w14|d-short-rib": "The highest-tannin option paired with short rib on the list &ndash; the right call if the guest wants real structure against the glaze's sweetness rather than a softer red.",
  "w14|d-bone-marrow": "Pure marrow fat plus braised short rib is about as rich as this menu gets &ndash; Austin Hope has the most tannin on the list, exactly what's needed to cut it, and the char on the rib picks up the wine's own dark chocolate and warm spice.",

  "w15|d-filet-8": "Filet is the leanest cut on the menu, so it doesn't want the biggest wine &ndash; Oberon's medium tannin is deliberately gentler than Caymus or Austin Hope, matched to a cut with less fat to push against.",
  "w15|d-bone-in-filet": "Slightly more richness than a standard filet thanks to the bone, but still a lean cut &ndash; same logic as the 8oz filet, it wants the softer of the two Wagner-family Cabernets.",
  "w15|d-burger": "The cassis and mocha notes echo the char on the patty directly, and the medium tannin doesn't overpower the special sauce the way a bigger wine would.",

  "w16|d-tomahawk": "The biggest, most heavily marbled cut on the menu wants the biggest wine on the list &ndash; Caymus's full body and tannin were built for exactly this scale.",
  "w16|d-porterhouse": "Two cuts in one, strip and filet &ndash; Caymus's plush tannin handles the fattier strip side without being outclassed by a dish this large.",
  "w16|d-ny-strip-16": "Well-marbled but a notch below the tomahawk in scale &ndash; still wants a big wine, and Caymus's vanilla-oak character actually echoes the char from the wood-fire grill.",
  "w16|d-bone-marrow": "Between the marrow fat and the braised short rib on top, this is one of the richest bites on the menu &ndash; Caymus has the density to match it pound for pound, and the sweet onion jam plays surprisingly well against the wine's own vanilla and mocha.",

  "w17|d-naan": "Babaganoush's smokiness and the tahini's nuttiness share a flavor world with the wine's own garrigue herb character &ndash; a real regional echo, not just a soft-tannin safety pick.",
  "w17|d-marinated-chicken": "The peppery spice already in this wine actually mirrors the espelette in the chicken's marinade &ndash; a genuine flavor-affinity match, on top of the soft tannin doing its usual job of not fighting the heat.",
  "w17|d-wild-mushrooms": "An earthy, umami-forward dish that would turn bitter against a tannic red &ndash; this Grenache-Syrah blend's soft tannin avoids that clash, and its own earthy undertone leans right into the mushrooms.",

  "w18|d-short-rib": "More restrained tannin than the Napa Cabs also linked to short rib &ndash; the right call for a guest who wants elegance over raw power with their braise.",
  "w18|d-bone-in-filet": "The bone adds a layer of richness beyond a standard filet, giving this more structured Bordeaux blend something to actually grip onto that a plain filet wouldn't offer alone.",

  "w19|d-tenderloin-8": "A blend brings more complexity to a very simple, unadorned cut than a single-varietal wine would &ndash; the cedar and dried herb notes give the dish a second layer it wouldn't otherwise have.",
  "w19|d-wagyu-skirt": "Cedar and dried herb echo the char and the savory edge of the chili vinaigrette without needing to be as big or tannic as a straight Cabernet.",
  "w19|d-short-rib": "Sits right between Markham's softness and Austin Hope's power &ndash; a genuine middle-ground option for braised richness that doesn't ask the guest to pick an extreme.",

  "w20|d-sushi-sashimi-nigiri": "Same production logic as the food itself &ndash; rice, water, minimal intervention &ndash; so it never competes with clean raw fish, it just sits alongside it.",
  "w20|d-sushi-rolls": "Rolls often add mayo or sauce richness on top of the fish &ndash; sake's gentle natural sweetness handles that better than its clean profile alone would suggest.",
  "w20|d-sashimi-platter": "A platter this varied needs one constant, umami-friendly partner &ndash; sake's total lack of tannin means it's never wrong no matter which fish shows up that day.",
  "w20|d-omakase-platter": "At the very top of the list, the chef is choosing unpredictable, extremely premium ingredients &ndash; uni, otoro &ndash; and sake is the one pour on this list that's never a poor match for any of it.",
  "w20|d-ikura": "Salmon roe is intensely briny and umami, with a burst of liquid richness &ndash; the sake's own delicate melon and lychee sweetness is a genuine bridge against the salt, not just a safe umami default.",
  "w20|d-tamagoyaki": "This is a literal ingredient echo &ndash; the tamagoyaki itself is built with dashi, mirin, and sake, so the same character shows up again in the glass as it does on the plate.",
  "w20|d-unagi": "The eel is glazed in a sweet soy-mirin sauce &ndash; the sake's own off-dry character matches that sweetness instead of the dry-versus-sweet clash a bone-dry white would create."
};

function getDominantTrait(wine) {
  const s = wine.structure;
  if (s.tannin >= 4) return { trait: "tannin", value: s.tannin };
  if (s.acidity >= 4) return { trait: "acidity", value: s.acidity };
  if (s.body >= 4) return { trait: "body", value: s.body };
  if (s.body <= 2) return { trait: "body", value: s.body };
  if (s.acidity <= 2) return { trait: "acidity", value: s.acidity };
  return { trait: "tannin", value: s.tannin || s.body };
}

function pairingReason(wine, dish) {
  const key = wine.id + "|" + dish.id;
  const trait = getDominantTrait(wine);
  const text = PAIRING_REASONS[key] || `Its ${trait.trait} profile is the reason this works &ndash; balanced against the ${dish.name.toLowerCase()} rather than fighting it.`;
  return { trait: trait.trait, value: trait.value, text };
}

function renderWineDetailWithPairing(wineId) {
  const wine = findWine(wineId);
  if (!wine) { go("pairwf-list", {}, false); return; }
  header("Pair wine &#8594; food");

  const container = document.createElement("div");
  container.appendChild(renderHeroHeader(wine));

  const pairsLabel = document.createElement("p");
  pairsLabel.className = "pairs-label";
  pairsLabel.innerHTML = `<span class="ic">&#127860;</span>Pairs with`;
  container.appendChild(pairsLabel);

  const pillRow = document.createElement("div");
  pillRow.className = "pill-row";
  wine.pairingDishIds.forEach(dishId => {
    const dish = findDish(dishId);
    if (!dish) return;
    const pill = document.createElement("button");
    pill.className = "pill";
    pill.textContent = dish.name;
    pill.onclick = () => go("pairing-explain", { wineId: wine.id, dishId: dish.id });
    pillRow.appendChild(pill);
  });
  container.appendChild(pillRow);

  app.appendChild(container);
}

function splitTopLevel(str, delim) {
  const result = [];
  let depth = 0, current = "";
  for (const ch of str) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === delim && depth === 0) {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim().length) result.push(current);
  return result;
}

function splitIngredients(text) {
  if (!text) return [];
  const components = text.split(" | ").flatMap(p => p.split(/\.\s+(?=[A-Z])/));
  const groups = [];
  components.forEach(raw => {
    const comp = raw.trim().replace(/\.$/, "");
    if (!comp) return;
    const dashMatch = comp.match(/^(.{2,60}?)\s*-\s*(.+)$/);
    let label = null, rest = comp;
    if (dashMatch && dashMatch[2].trim().length) {
      label = dashMatch[1].trim();
      rest = dashMatch[2];
    }
    const items = splitTopLevel(rest, ",").map(s => s.trim()).filter(Boolean);
    if (items.length) groups.push({ label, items });
  });
  return groups;
}

function renderIngredientGroups(groups) {
  return groups.map(g => {
    const itemsHtml = g.items.map(i => `<li>${i}</li>`).join("");
    if (g.label) {
      return `<li class="ingredient-group"><span class="ingredient-group-label">${g.label}</span><ul class="ingredient-sublist">${itemsHtml}</ul></li>`;
    }
    return itemsHtml;
  }).join("");
}

function renderDishFlipCard(dish) {
  const ingredientItems = splitIngredients(dish.ingredients);
  const flipcard = document.createElement("div");
  flipcard.className = "dish-flipcard";
  const inner = document.createElement("div");
  inner.className = "dish-flip-inner";

  function faceHTML(idx) {
    if (idx === 0) {
      return `
        <p class="dish-flip-tag">1/2 &middot; tap to flip</p>
        <p class="dish-flip-title">&#129367; Ingredients</p>
        <ul class="ingredient-list">${renderIngredientGroups(ingredientItems)}</ul>
      `;
    }
    return `
      <p class="dish-flip-tag">2/2 &middot; tap to flip</p>
      <p class="dish-flip-title">&#128293; Chef prep</p>
      <p class="chefprep-text">${dish.chefPrep}</p>
    `;
  }

  inner.innerHTML = faceHTML(0);
  flipcard.appendChild(inner);
  let faceIndex = 0;
  flipcard.onclick = () => {
    flipcard.classList.add("flipping");
    setTimeout(() => {
      faceIndex = (faceIndex + 1) % 2;
      inner.className = "dish-flip-inner" + (faceIndex === 1 ? " chefprep" : "");
      inner.innerHTML = faceHTML(faceIndex);
      flipcard.classList.remove("flipping");
    }, 200);
  };
  return flipcard;
}

function renderRawCutFlipCard(dish) {
  const flipcard = document.createElement("div");
  flipcard.className = "dish-flipcard";
  const inner = document.createElement("div");
  inner.className = "dish-flip-inner";

  function faceHTML(idx) {
    if (idx === 0) {
      return `
        <p class="dish-flip-tag">1/2 &middot; tap to flip</p>
        <p class="dish-flip-title">&#127843; What it is</p>
        <p class="chefprep-text">${dish.whatItIs}</p>
      `;
    }
    return `
      <p class="dish-flip-tag">2/2 &middot; tap to flip</p>
      <p class="dish-flip-title">&#128161; Good to know</p>
      <p class="chefprep-text">${dish.goodToKnow}</p>
    `;
  }

  inner.innerHTML = faceHTML(0);
  flipcard.appendChild(inner);
  let faceIndex = 0;
  flipcard.onclick = () => {
    flipcard.classList.add("flipping");
    setTimeout(() => {
      faceIndex = (faceIndex + 1) % 2;
      inner.className = "dish-flip-inner" + (faceIndex === 1 ? " chefprep" : "");
      inner.innerHTML = faceHTML(faceIndex);
      flipcard.classList.remove("flipping");
    }, 200);
  };
  return flipcard;
}

function renderDishDetail(dishId) {
  const dish = findDish(dishId);
  if (!dish) { go("pairfw-list", {}, false); return; }

  header(dish.section);

  const container = document.createElement("div");
  const name = document.createElement("p");
  name.className = "hero-name";
  name.textContent = dish.name;
  container.appendChild(name);

  if (dish.pronunciation || dish.translation) {
    const pronLine = document.createElement("p");
    pronLine.className = "hero-meta";
    pronLine.innerHTML = [
      dish.pronunciation ? `<i>${dish.pronunciation}</i>` : "",
      dish.translation ? dish.translation : ""
    ].filter(Boolean).join(" &middot; ");
    container.appendChild(pronLine);
  }

  if (dish.dropLine) {
    const dropLine = document.createElement("p");
    dropLine.className = "drop-line";
    dropLine.textContent = "\u201C" + dish.dropLine + "\u201D";
    container.appendChild(dropLine);
  } else {
    const desc = document.createElement("p");
    desc.className = "hero-meta";
    desc.textContent = dish.description;
    container.appendChild(desc);
  }

  if (dish.ingredients && dish.chefPrep) {
    container.appendChild(renderDishFlipCard(dish));
  } else if (dish.whatItIs && dish.goodToKnow) {
    container.appendChild(renderRawCutFlipCard(dish));
  }

  if (dish.funFact && !dish.whatItIs) {
    const factTitle = document.createElement("p");
    factTitle.className = "detail-h3";
    factTitle.innerHTML = `<span>&#10024;</span> Fun fact`;
    container.appendChild(factTitle);
    const factText = document.createElement("p");
    factText.className = "hero-meta";
    factText.style.cssText = "margin-bottom:14px; line-height:1.55; color:var(--shoyu-500);";
    factText.textContent = dish.funFact;
    container.appendChild(factText);
  }

  if (dish.allergensInRecipe && dish.allergensInRecipe.length) {
    const allergenTitle = document.createElement("p");
    allergenTitle.className = "detail-h3";
    allergenTitle.innerHTML = `<span>&#9888;&#65039;</span> Allergens`;
    container.appendChild(allergenTitle);

    const inRecipeLabel = document.createElement("p");
    inRecipeLabel.className = "allergen-group-label";
    inRecipeLabel.textContent = "In recipe";
    container.appendChild(inRecipeLabel);

    const inRecipeRow = document.createElement("div");
    inRecipeRow.className = "allergen-row";
    dish.allergensInRecipe.forEach(a => {
      const chip = document.createElement("span");
      chip.className = "chip in-recipe";
      chip.textContent = a.charAt(0).toUpperCase() + a.slice(1);
      inRecipeRow.appendChild(chip);
    });
    container.appendChild(inRecipeRow);

    if (dish.allergensRemovable && dish.allergensRemovable.length) {
      const removableLabel = document.createElement("p");
      removableLabel.className = "allergen-group-label";
      removableLabel.textContent = "Can be removed";
      container.appendChild(removableLabel);

      const removableRow = document.createElement("div");
      removableRow.className = "allergen-row";
      dish.allergensRemovable.forEach(a => {
        const chip = document.createElement("span");
        chip.className = "chip removable";
        chip.textContent = a.charAt(0).toUpperCase() + a.slice(1);
        removableRow.appendChild(chip);
      });
      container.appendChild(removableRow);
    }
  }

  const pairsLabel = document.createElement("p");
  pairsLabel.className = "pairs-label";
  pairsLabel.innerHTML = `<span class="ic">&#127863;</span>Pairs with`;
  container.appendChild(pairsLabel);

  const pillRow = document.createElement("div");
  pillRow.className = "pill-row";
  if (dish.pairedWineIds.length) {
    dish.pairedWineIds.forEach(wineId => {
      const wine = findWine(wineId);
      if (!wine) return;
      const pill = document.createElement("button");
      pill.className = "pill";
      pill.textContent = wine.name;
      pill.onclick = () => go("pairing-explain", { wineId: wine.id, dishId: dish.id });
      pillRow.appendChild(pill);
    });
  }
  container.appendChild(pillRow);

  if (!dish.pairedWineIds.length) {
    const empty = document.createElement("p");
    empty.className = "empty-note";
    empty.textContent = "No wine pairing set for this dish yet.";
    container.appendChild(empty);
  }

  app.appendChild(container);
}

function renderPairingExplain(wineId, dishId) {
  const wine = findWine(wineId);
  const dish = findDish(dishId);
  if (!wine || !dish) { go("home", {}, false); return; }

  header("Why this pairs");

  const container = document.createElement("div");
  const reason = pairingReason(wine, dish);
  const traitBand = WSET_BANDS[reason.trait][reason.value - 1];
  container.innerHTML = `
    <p class="hero-name" style="font-size:19px; margin-bottom:2px; text-align:center;">${wine.name}</p>
    <p class="pairs-connector">+</p>
    <p class="hero-name" style="font-size:19px; margin-top:2px; text-align:center;">${dish.name}</p>
    <div class="mini-bar-wrap">
      <p class="mini-bar-lbl">Driving trait &middot; ${reason.trait} (${traitBand})</p>
      <div class="mini-track"><div class="mini-fill" style="width:${reason.value * 20}%;"></div></div>
    </div>
    <p class="pairing-reason">${reason.text}</p>
    <p class="pairing-reason"><b>Table-side line:</b> ${wine.arsenal}</p>
  `;
  app.appendChild(container);

  const linksRow = document.createElement("div");
  linksRow.className = "card-footer-nav";
  const wineBtn = document.createElement("button");
  wineBtn.className = "footer-btn";
  wineBtn.textContent = "View wine";
  wineBtn.onclick = () => go("study-card", { wineId: wine.id });
  const dishBtn = document.createElement("button");
  dishBtn.className = "footer-btn";
  dishBtn.textContent = "View dish";
  dishBtn.onclick = () => go("dish-detail", { dishId: dish.id });
  linksRow.appendChild(wineBtn);
  linksRow.appendChild(dishBtn);
  app.appendChild(linksRow);
}

/* Small shared helper (used by the Learning chapter quizzes). */
function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Completion confetti, used when a Learning module is finished. */
function celebrate() {
  const overlay = document.createElement("div");
  overlay.className = "celebrate-overlay";
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = ["\u{1F37E}", "\u{1F942}", "\u{1F377}", "\u2728"][i % 4];
    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDelay = (Math.random() * 0.6) + "s";
    piece.style.fontSize = (16 + Math.random() * 14) + "px";
    overlay.appendChild(piece);
  }
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 2600);
}

/* ---------- Learning: modules/courses, same engine for every restaurant ---------- */

/* Learning is three levels deep: topics (Food, Bar, Service...) -> courses
   -> modules. LEARNING_MODULES stays the flat list the lesson engine and
   saved progress key off; LEARNING_TOPICS and LEARNING_COURSES (data.js)
   only decide how modules are grouped for browsing. */
function findLearningCourse(id) { return LEARNING_COURSES.find(c => c.id === id); }
function courseOfModule(moduleId) { return LEARNING_COURSES.find(c => c.moduleIds.includes(moduleId)); }
function courseModules(course) { return course.moduleIds.map(findLearningModule).filter(Boolean); }
function modulePercent(mod) {
  const status = moduleStatus(mod);
  if (status === "completed") return 100;
  if (status === "in-progress") {
    const p = getLearningProgress()[mod.id];
    return Math.round(((p.furthest + 1) / moduleTotalContent(mod)) * 100);
  }
  return 0;
}
function averagePercent(mods) {
  return mods.length ? Math.round(mods.reduce((n, m) => n + modulePercent(m), 0) / mods.length) : 0;
}
function completedCount(mods) { return mods.filter(m => moduleStatus(m) === "completed").length; }
function pluralize(n, one, many) { return `${n} ${n === 1 ? one : many}`; }

function learningGroupRowHTML(dataAttr, id, title, meta, pct) {
  const done = pct === 100;
  const rightHTML = done
    ? `<span class="chev">&#10003;</span>`
    : `<div class="mini-track"><div class="mini-fill" style="width:${pct}%"></div></div>`;
  return `
    <div class="list-row" ${dataAttr}="${id}">
      <div class="list-row-main">
        <span class="mod-dot ${done ? "done" : ""}"></span>
        <div class="list-row-text">
          <p>${title}</p>
          <span>${meta}</span>
        </div>
      </div>
      ${rightHTML}
    </div>
  `;
}

/* Where "back to where I was browsing" goes once a module is finished. */
function backToCourseTarget(moduleId) {
  const mod = findLearningModule(moduleId);
  if (mod && mod.calendar) {
    return { label: `Back to Week ${mod.calendar.week}`, go: () => go("training-week", { monthId: mod.calendar.monthId, week: mod.calendar.week }) };
  }
  const course = courseOfModule(moduleId);
  return course
    ? { label: "Back to Course", go: () => go("learning-course", { courseId: course.id }) }
    : { label: "Learning Hub", go: () => go("learning-hub") };
}

function learningRowHTML(mod, showCourse) {
  const status = moduleStatus(mod);
  const locked = status === "locked";
  const dotClass = status === "completed" ? "done" : (locked ? "locked" : "");
  const totalContent = moduleTotalContent(mod);
  const hasTest = mod.test && mod.test.length > 0;
  let metaText;
  if (status === "completed") metaText = "Completed \u00b7 100%";
  else if (status === "in-progress") {
    const p = getLearningProgress()[mod.id];
    const pct = Math.round(((p.furthest + 1) / totalContent) * 100);
    metaText = `${p.furthest + 1} of ${totalContent} sections \u00b7 ${pct}%`;
  } else if (locked) {
    const req = findLearningModule(mod.unlockAfter);
    metaText = `Unlocks after ${req ? req.title : "a previous module"}`;
  } else {
    metaText = `${totalContent} sections${hasTest ? " + test" : ""}`;
  }
  const pct = status === "completed" ? 100
    : status === "in-progress" ? Math.round(((getLearningProgress()[mod.id].furthest + 1) / totalContent) * 100)
    : 0;
  const rightHTML = status === "completed"
    ? `<span class="chev">&#10003;</span>`
    : locked
      ? `<span class="lock-ic">&#128274;</span>`
      : `<div class="mini-track"><div class="mini-fill" style="width:${pct}%"></div></div>`;
  const parentCourse = showCourse ? courseOfModule(mod.id) : null;
  return `
    <div class="list-row ${locked ? "locked" : ""}" data-module="${mod.id}" ${locked ? 'tabindex="-1" aria-disabled="true"' : ""}>
      <div class="list-row-main">
        <span class="mod-dot ${dotClass}"></span>
        <div class="list-row-text">
          <p>${mod.title}</p>
          <span>${parentCourse ? `${parentCourse.title} · ` : ""}${metaText}</span>
        </div>
      </div>
      ${rightHTML}
    </div>
  `;
}

/* ---------- Guest Journey overview ----------
   A course module that sets `journeyPhase` gets a "Journey" button in the
   header of its intro, lesson, and completion screens, and the course
   itself (`journey: true`) gets one on its module list. It opens the whole
   order of service (GUEST_JOURNEY in data.js) as a sheet over the current
   screen, with the module's own phase open and marked. It is deliberately
   never added to chapter quizzes, the final test, or the test result, so
   it can't be used mid-question. Opening it changes no route or progress. */

function journeyEsc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* `source` is either a module (journeyPhase: the phase it teaches, opened and
   marked "You are here") or a course (journey: true, no single phase, so
   every phase starts collapsed). */
function addJourneyButton(source) {
  if (!source || !(source.journeyPhase || source.journey) || typeof GUEST_JOURNEY === "undefined") return;
  const hdr = app.querySelector(".app-header");
  if (!hdr) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "journey-btn";
  btn.setAttribute("aria-haspopup", "dialog");
  btn.setAttribute("aria-label", "Show the full Guest Journey");
  btn.textContent = "Journey";
  btn.onclick = () => showJourneyOverview(source.journeyPhase || null, btn);
  hdr.appendChild(btn);
}

function showJourneyOverview(currentPhaseId, trigger) {
  if (document.querySelector(".journey-overlay")) return;
  const phases = GUEST_JOURNEY.phases;
  const totalSteps = phases.reduce((n, ph) => n + ph.steps.length, 0);

  const phasesHTML = phases.map(ph => {
    const here = currentPhaseId !== null && ph.id === currentPhaseId;
    const stepsHTML = ph.steps.map(st => `
      <li class="journey-step">
        <span class="journey-step-n">${journeyEsc(st.n)}</span>
        <div class="journey-step-main">
          <p class="journey-step-task">${journeyEsc(st.task)}</p>
          <p class="journey-step-meta">${journeyEsc(st.owner)}${st.timing ? ` · ${journeyEsc(st.timing)}` : ""}</p>
        </div>
      </li>`).join("");
    return `
      <details class="journey-phase${here ? " is-here" : ""}"${here ? " open" : ""}>
        <summary class="journey-phase-head">
          <span class="journey-phase-num">${ph.id}</span>
          <span class="journey-phase-text">
            <span class="journey-phase-title">${journeyEsc(ph.title)}${here ? `<span class="journey-here">You are here</span>` : ""}</span>
            <span class="journey-phase-meta">${ph.steps.length} steps · ${journeyEsc(ph.limit)}</span>
          </span>
        </summary>
        <ol class="journey-steps">${stepsHTML}</ol>
      </details>`;
  }).join("");

  const overlay = document.createElement("div");
  overlay.className = "journey-overlay";
  overlay.innerHTML = `
    <div class="journey-sheet" role="dialog" aria-modal="true" aria-labelledby="journey-title">
      <div class="journey-head">
        <div>
          <p class="journey-eyebrow">Order of service</p>
          <h2 class="journey-title" id="journey-title">${journeyEsc(GUEST_JOURNEY.title)}</h2>
          <p class="journey-sub">${phases.length} phases · ${totalSteps} steps</p>
        </div>
        <button type="button" class="journey-close" aria-label="Close the Guest Journey">&#10005;</button>
      </div>
      <div class="journey-body">${phasesHTML}</div>
    </div>
  `;

  // Size the sheet to exactly fill the lesson area below the app header
  // (the header itself, with its Back/Journey buttons, stays uncovered),
  // so the sheet's height stays fixed while phases open and close --
  // it no longer shrink-wraps to whichever content happens to be visible.
  const appHeader = app.querySelector(".app-header");
  const headerBottom = appHeader ? Math.max(appHeader.getBoundingClientRect().bottom, 0) : 0;
  const sheetHeight = Math.max(window.innerHeight * 0.5, window.innerHeight - headerBottom);
  const sheetEl = overlay.querySelector(".journey-sheet");
  sheetEl.style.height = `${sheetHeight}px`;
  sheetEl.style.maxHeight = `${sheetHeight}px`;

  const prevOverflow = document.body.style.overflow;
  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    document.removeEventListener("keydown", onKey, true);
    window.removeEventListener("popstate", close);
    overlay.remove();
    document.body.style.overflow = prevOverflow;
    if (trigger && document.body.contains(trigger)) trigger.focus();
  };
  const onKey = (e) => {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab") return;
    const focusables = overlay.querySelectorAll("button, summary");
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  overlay.querySelector(".journey-close").onclick = close;
  document.addEventListener("keydown", onKey, true);
  window.addEventListener("popstate", close);
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  overlay.querySelector(".journey-close").focus();
}

/* Level 1: topics. Only topics that have at least one course are shown, so
   adding a topic to LEARNING_TOPICS is safe before its first course exists. */
function renderLearningHub() {
  header("Learning");

  const wrap = document.createElement("div");
  let html = "";

  /* Pre-Shift: the two date-locked weekly items, stacked, in this order. */
  let preShift = "";
  if (typeof TRAINING_CALENDAR !== "undefined" && TRAINING_CALENDAR.length) preShift += trainingCalendarHubRowHTML();
  if (typeof SERVICE_ENHANCEMENT !== "undefined" && SERVICE_ENHANCEMENT.length) preShift += serviceEnhancementHubRowHTML();
  if (preShift) html += `<p class="section-label">Pre-Shift</p>` + preShift;

  /* Topics: a fixed 2x2 grid. Every topic in LEARNING_TOPICS shows, even one
     with no courses yet (Wine), so the grid keeps its shape; an empty topic
     says so honestly instead of showing placeholder content. Resume-where-
     you-left-off lives on each card's progress bar. */
  html += `<p class="section-label">Topics</p><div class="learn-grid">` + LEARNING_TOPICS.map(t => {
    const courses = LEARNING_COURSES.filter(c => c.topic === t.id);
    const mods = courses.flatMap(courseModules);
    const done = completedCount(mods);
    const pct = averagePercent(mods);
    let meta, state;
    if (!mods.length) {
      meta = "Coming soon";
      state = "";
    } else if (done === mods.length) {
      meta = `${done} of ${mods.length} complete`;
      state = `<span class="learn-topic-check" aria-hidden="true">&#10003;</span>`;
    } else {
      meta = `${done} of ${mods.length} complete`;
      state = `<span class="mini-track" aria-hidden="true"><span class="mini-fill" style="width:${pct}%"></span></span>`;
    }
    return `
      <button type="button" class="learn-topic${mods.length ? "" : " is-empty"}${mods.length && done === mods.length ? " is-done" : ""}" data-topic="${t.id}"${mods.length ? "" : " disabled"}>
        <span class="learn-topic-title">${t.title}</span>
        <span class="learn-topic-meta">${meta}</span>
        ${state}
      </button>`;
  }).join("") + `</div>`;

  /* In Progress sits under the topic cards, so the structure stays on top
     and the "pick up where you left off" row is the last thing you see. */
  const inProgress = LEARNING_MODULES.filter(m => moduleStatus(m) === "in-progress");
  if (inProgress.length) {
    html += `<p class="section-label">In Progress</p>` + inProgress.map(m => learningRowHTML(m, true)).join("");
  }

  wrap.innerHTML = html;
  wrap.querySelectorAll(".list-row, .learn-topic").forEach(row => {
    if (row.dataset.calendar) row.onclick = () => go("training-calendar");
    else if (row.dataset.se) row.onclick = () => go("service-enhancement");
    else if (row.dataset.topic) row.onclick = () => go("learning-topic", { topicId: row.dataset.topic });
    else if (row.dataset.module && !row.classList.contains("locked")) row.onclick = () => go("learning-intro", { moduleId: row.dataset.module });
  });
  app.appendChild(wrap);
}

/* Level 2: the courses inside one topic. */
function renderLearningTopic(topicId) {
  const topic = LEARNING_TOPICS.find(t => t.id === topicId);
  if (!topic) { go("learning-hub", {}, false); return; }
  header(topic.title);

  const courses = LEARNING_COURSES.filter(c => c.topic === topic.id);
  const wrap = document.createElement("div");
  if (!courses.length) {
    wrap.innerHTML = `<p class="slide-text">No courses here yet.</p>`;
    app.appendChild(wrap);
    return;
  }
  wrap.innerHTML = `<p class="section-label">Courses</p>` + courses.map(c => {
    const mods = courseModules(c);
    const done = completedCount(mods);
    const meta = `${pluralize(mods.length, "module", "modules")}${done ? ` · ${done} complete` : ""}`;
    return learningGroupRowHTML("data-course", c.id, c.title, meta, averagePercent(mods));
  }).join("");
  wrap.querySelectorAll(".list-row").forEach(row => {
    row.onclick = () => go("learning-course", { courseId: row.dataset.course });
  });
  app.appendChild(wrap);
}

/* Level 3: the modules inside one course, in the order they're meant to be
   taken. Courses that set `journey` also get the Guest Journey button. */
function renderLearningCourse(courseId) {
  const course = findLearningCourse(courseId);
  if (!course) { go("learning-hub", {}, false); return; }
  header(course.title);
  addJourneyButton(course);

  const wrap = document.createElement("div");
  wrap.innerHTML = `
    ${course.blurb ? `<p class="slide-text">${course.blurb}</p>` : ""}
    <p class="section-label">Modules</p>
    ${courseModules(course).map(m => learningRowHTML(m)).join("")}
  `;
  wrap.querySelectorAll(".list-row").forEach(row => {
    if (row.classList.contains("locked")) return;
    row.onclick = () => go("learning-intro", { moduleId: row.dataset.module });
  });
  app.appendChild(wrap);
}

function renderLearningIntro(moduleId) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }
  // A calendar lesson whose week hasn't opened yet goes back to the calendar.
  if (!isModuleUnlocked(mod)) { go("training-calendar", {}, false); return; }
  addJourneyButton(mod);

  const status = moduleStatus(mod);
  const p = getLearningProgress()[mod.id];
  const totalContent = moduleTotalContent(mod);
  const hasTest = mod.test && mod.test.length > 0;
  const pct = status === "completed" ? 100 : status === "in-progress" ? Math.round(((p.furthest + 1) / totalContent) * 100) : 0;
  const minutes = Math.max(1, Math.round((totalContent + (hasTest ? mod.test.length : 0)) * 1.5));
  const startLabel = status === "completed" ? "Review Module" : status === "in-progress" ? "Resume Module" : "Start Module";
  const eyebrow = mod.calendar ? `Week ${mod.calendar.week} \u00b7 ${mod.category}` : `${mod.category} \u00b7 Module`;

  const wrap = document.createElement("div");
  wrap.className = "intro-wrap";
  wrap.innerHTML = `
    <p class="intro-eyebrow">${eyebrow}</p>
    <h1 class="intro-title">${mod.title}</h1>
    <div class="intro-meta-row">
      <div class="intro-meta"><b>${totalContent}</b><span>Sections</span></div>
      ${hasTest ? `<div class="intro-meta"><b>${mod.test.length}</b><span>Test Qs</span></div>` : ""}
      <div class="intro-meta"><b>~${minutes}</b><span>Minutes</span></div>
      <div class="intro-meta"><b>${pct}%</b><span>Complete</span></div>
    </div>
    <button class="btn-start">${startLabel}</button>
  `;
  wrap.querySelector(".btn-start").onclick = () => {
    const pos = status === "completed" ? { chapterIndex: 0, sectionIndex: 0 } : resumeChapterPosition(mod);
    go("learning-chapter", { moduleId, chapterIndex: pos.chapterIndex, sectionIndex: pos.sectionIndex }, false);
  };
  app.appendChild(wrap);
}

function renderLearningChapter(moduleId, chapterIndex, sectionIndex) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }
  const chapters = moduleChapters(mod);
  if (!chapters.length) { go("learning-hub"); return; }
  addJourneyButton(mod);
  chapterIndex = Math.max(0, Math.min(chapterIndex, chapters.length - 1));
  const chapter = chapters[chapterIndex];
  sectionIndex = Math.max(0, Math.min(sectionIndex, chapter.sections.length - 1));
    const section = chapter.sections[sectionIndex];
  if (sectionIndex === 0) {
    ChiriusAnalytics.track('learning_chapter_start', { module_id: moduleId, chapter_index: chapterIndex });
  }

  if (chapters.length > 1) {
    const chapterKicker = document.createElement("p");
    chapterKicker.className = "chapter-kicker";
    chapterKicker.textContent = `Chapter ${chapterIndex + 1} of ${chapters.length} \u00b7 ${chapter.title}`;
    app.appendChild(chapterKicker);
  }

  const dots = document.createElement("div");
  dots.className = "dots-row";
  dots.innerHTML = chapter.sections.map((_, i) => `<div class="dot-seg ${i <= sectionIndex ? "filled" : ""}"></div>`).join("");
  app.appendChild(dots);

  const body = document.createElement("div");
  body.className = "slide-body";
  const kicker = `Section ${sectionIndex + 1} of ${chapter.sections.length}`;

  if (section.type === "text") {
    body.innerHTML = `
      <p class="slide-kicker">${kicker}</p>
      <h2 class="slide-title">${section.title}</h2>
      <p class="slide-text">${section.body}</p>
      ${section.note ? `<div class="fact-block"><b>${section.noteLabel || "Why it matters"}</b><p>${section.note}</p></div>` : ""}
    `;
  } else if (section.type === "image") {
    body.innerHTML = `
      <p class="slide-kicker">${kicker}</p>
      <h2 class="slide-title">${section.title}</h2>
      <div class="illo-frame">
        ${section.imageUrl
          ? `<img src="${section.imageUrl}" alt="${section.title}" style="width:100%; display:block;">`
          : `<p class="empty-note">Image not yet added.</p>`}
      </div>
      ${section.caption ? `<p class="slide-text">${section.caption}</p>` : ""}
    `;
  } else if (section.type === "video") {
    body.innerHTML = `
      <p class="slide-kicker">${kicker}</p>
      <h2 class="slide-title">${section.title}</h2>
      <div class="video-frame" data-role="video-slot">
        ${section.videoUrl
          ? `<div class="play-btn"></div><span class="video-caption">${section.title}</span>`
          : `<p class="empty-note">Video not yet added.</p>`}
      </div>
      ${section.duration ? `<p class="video-time">${section.duration}</p>` : ""}
    `;
    const slot = body.querySelector('[data-role="video-slot"]');
    if (section.videoUrl) {
      slot.onclick = () => {
        slot.innerHTML = `<iframe src="${section.videoUrl}" style="width:100%; height:100%; border:none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        slot.onclick = null;
      };
    }
  }
  app.appendChild(body);

  const flat = flattenModuleContent(mod);
  const flatIdx = flat.findIndex(f => f.chapterIndex === chapterIndex && f.sectionIndex === sectionIndex);
  setLearningFurthest(moduleId, flatIdx);

  const isFirstOverall = chapterIndex === 0 && sectionIndex === 0;
  const isLastSectionInChapter = sectionIndex === chapter.sections.length - 1;
  const isLastChapter = chapterIndex === chapters.length - 1;
  const isVeryLast = isLastSectionInChapter && isLastChapter;
  const hasTest = mod.test && mod.test.length > 0;

  const nav = document.createElement("div");
  nav.className = "card-footer-nav";
  const prevBtn = document.createElement("button");
  prevBtn.className = "footer-btn";
  prevBtn.textContent = "\u2039 Previous";
  if (isFirstOverall) {
    prevBtn.disabled = true;
  } else if (sectionIndex === 0) {
    const prevChapter = chapters[chapterIndex - 1];
    prevBtn.onclick = () => go("learning-chapter", { moduleId, chapterIndex: chapterIndex - 1, sectionIndex: prevChapter.sections.length - 1 }, false);
  } else {
    prevBtn.onclick = () => go("learning-chapter", { moduleId, chapterIndex, sectionIndex: sectionIndex - 1 }, false);
  }
  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn footer-btn-home";
  nextBtn.textContent = isVeryLast ? "Finish \u203a" : "Next \u203a";
    nextBtn.onclick = () => {
    if (!isLastSectionInChapter) {
      go("learning-chapter", { moduleId, chapterIndex, sectionIndex: sectionIndex + 1 }, false);
      return;
    }
    const chapterQuiz = chapter.quiz || [];
    if (chapterQuiz.length && !isChapterQuizPassed(moduleId, chapterIndex)) {
      go("learning-chapter-quiz", { moduleId, chapterIndex, quizIndex: 0 }, false);
      return;
    }
    if (!isLastChapter) {
      ChiriusAnalytics.track('learning_chapter_complete', { module_id: moduleId, chapter_index: chapterIndex });
      go("learning-chapter", { moduleId, chapterIndex: chapterIndex + 1, sectionIndex: 0 }, false);
    } else if (hasTest && mod.preTestVideo) {
      ChiriusAnalytics.track('learning_chapter_complete', { module_id: moduleId, chapter_index: chapterIndex });
      go("learning-pretest-video", { moduleId }, false);
    } else if (hasTest) {
      ChiriusAnalytics.track('learning_chapter_complete', { module_id: moduleId, chapter_index: chapterIndex });
      go("learning-test-intro", { moduleId }, false);
    } else {
      ChiriusAnalytics.track('learning_chapter_complete', { module_id: moduleId, chapter_index: chapterIndex });
      go("learning-complete", { moduleId }, false);
    }
  };
  nav.appendChild(prevBtn);
  nav.appendChild(nextBtn);
  app.appendChild(nav);
}

/* ---------- Chapter mini-quizzes: mcq / sequence / sort ----------
   Each chapter can carry its own `quiz` array (separate from the module's
   trailing `test`). Every item must be answered correctly before the
   learner can continue -- wrong answers get feedback and another try,
   never a penalty. Once every item in a chapter's quiz has been passed
   once, that chapter is marked done and future visits skip straight
   through to the next chapter. */

function advanceAfterChapterQuiz(moduleId, chapterIndex) {
  setChapterQuizPassed(moduleId, chapterIndex);
  const mod = findLearningModule(moduleId);
  const chapters = moduleChapters(mod);
  const isLastChapter = chapterIndex === chapters.length - 1;
  const hasTest = mod.test && mod.test.length > 0;
  ChiriusAnalytics.track('learning_chapter_complete', { module_id: moduleId, chapter_index: chapterIndex });
  if (!isLastChapter) {
    go("learning-chapter", { moduleId, chapterIndex: chapterIndex + 1, sectionIndex: 0 }, false);
  } else if (hasTest && mod.preTestVideo) {
    go("learning-pretest-video", { moduleId }, false);
  } else if (hasTest) {
    go("learning-test-intro", { moduleId }, false);
  } else {
    go("learning-complete", { moduleId }, false);
  }
}

function renderChapterQuiz(moduleId, chapterIndex, quizIndex) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }
  const chapters = moduleChapters(mod);
  const chapter = chapters[chapterIndex];
  if (!chapter) { go("learning-hub"); return; }
  const quiz = chapter.quiz || [];
  if (!quiz.length) { advanceAfterChapterQuiz(moduleId, chapterIndex); return; }
  quizIndex = Math.max(0, Math.min(quizIndex, quiz.length - 1));
  const item = quiz[quizIndex];

  const kicker = document.createElement("p");
  kicker.className = "chapter-kicker";
  kicker.textContent = `${chapter.title} \u00b7 Chapter Quiz \u2014 ${quizIndex + 1} of ${quiz.length}`;
  app.appendChild(kicker);

  const dots = document.createElement("div");
  dots.className = "dots-row";
  dots.innerHTML = quiz.map((_, i) => `<div class="dot-seg ${i <= quizIndex ? "filled" : ""}"></div>`).join("");
  app.appendChild(dots);

  const onPass = () => {
    if (quizIndex === quiz.length - 1) advanceAfterChapterQuiz(moduleId, chapterIndex);
    else go("learning-chapter-quiz", { moduleId, chapterIndex, quizIndex: quizIndex + 1 }, false);
  };

  if (item.type === "mcq") renderChapterQuizMCQ(item, onPass);
  else if (item.type === "sequence") renderChapterQuizSequence(item, onPass);
  else if (item.type === "sort") renderChapterQuizSort(item, onPass);
}

function renderChapterQuizMCQ(item, onPass) {
  const body = document.createElement("div");
  body.className = "slide-body";
  body.innerHTML = `
    <h2 class="slide-title">${item.question}</h2>
    <div data-role="cq-opts"></div>
    <p class="quiz-feedback" data-role="cq-feedback" style="display:none"></p>
  `;
  const optsWrap = body.querySelector('[data-role="cq-opts"]');
  const feedback = body.querySelector('[data-role="cq-feedback"]');
  let solved = false;
  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opt;
    btn.onclick = () => {
      if (solved) return;
      if (i === item.correctIndex) {
        solved = true;
        btn.classList.add("correct");
        feedback.textContent = "Correct \u2014 nice.";
        feedback.style.display = "block";
        optsWrap.querySelectorAll(".quiz-opt").forEach(b => { b.style.opacity = b === btn ? "1" : "0.5"; });
        // Optional per-question teaching note (used by scenario-style quizzes)
        if (item.explanation) {
          const explain = document.createElement("div");
          explain.className = "fact-block quiz-explain";
          explain.innerHTML = `<b>Why</b><p>${item.explanation}</p>`;
          feedback.insertAdjacentElement("afterend", explain);
        }
        showChapterQuizContinue(body, onPass);
      } else {
        btn.classList.add("picked-wrong");
        feedback.textContent = "Not quite \u2014 give it another shot.";
        feedback.style.display = "block";
        setTimeout(() => btn.classList.remove("picked-wrong"), 500);
      }
    };
    optsWrap.appendChild(btn);
  });
  app.appendChild(body);
}

function showChapterQuizContinue(container, onPass) {
  const nav = document.createElement("div");
  nav.className = "card-footer-nav";
  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn footer-btn-home";
  nextBtn.style.width = "100%";
  nextBtn.textContent = "Continue \u203a";
  nextBtn.onclick = onPass;
  nav.appendChild(nextBtn);
  container.appendChild(nav);
}

function renderChapterQuizSequence(item, onPass) {
  const body = document.createElement("div");
  body.className = "slide-body";
  body.innerHTML = `
    <h2 class="slide-title">${item.prompt}</h2>
    <p class="slide-text" style="margin-bottom:10px;">Tap each step in the correct order.</p>
    <div class="seq-slots" data-role="seq-slots"></div>
    <div class="seq-pool" data-role="seq-pool"></div>
    <p class="quiz-feedback" data-role="seq-feedback" style="display:none"></p>
  `;
  const slotsWrap = body.querySelector('[data-role="seq-slots"]');
  const poolWrap = body.querySelector('[data-role="seq-pool"]');
  const feedback = body.querySelector('[data-role="seq-feedback"]');

  const total = item.items.length;
  let placed = []; // ids in slot order

  function renderSlots() {
    slotsWrap.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const slot = document.createElement("div");
      slot.className = "seq-slot" + (placed[i] ? " filled" : "");
      if (placed[i]) {
        const label = item.items.find(it => it.id === placed[i]).label;
        slot.innerHTML = `<span class="seq-slot-num">${i + 1}</span><span>${label}</span>`;
        slot.onclick = () => { placed.splice(i, 1); renderSlots(); renderPool(); };
      } else {
        slot.innerHTML = `<span class="seq-slot-num">${i + 1}</span>`;
      }
      slotsWrap.appendChild(slot);
    }
  }
  const poolOrder = shuffleArr(item.items);
  function renderPool() {
    poolWrap.innerHTML = "";
    poolOrder.forEach(it => {
      if (placed.includes(it.id)) return;
      const chip = document.createElement("button");
      chip.className = "seq-chip";
      chip.textContent = it.label;
      chip.onclick = () => {
        if (placed.length >= total) return;
        placed.push(it.id);
        renderSlots();
        renderPool();
        if (placed.length === total) checkSequence();
      };
      poolWrap.appendChild(chip);
    });
  }
  function checkSequence() {
    const correct = placed.every((id, i) => id === item.correctOrder[i]);
    if (correct) {
      feedback.textContent = item.correctMessage || "That's the chain \u2014 correct.";
      feedback.style.display = "block";
      slotsWrap.querySelectorAll(".seq-slot").forEach(s => s.classList.add("correct"));
      showChapterQuizContinue(body, onPass);
    } else {
      feedback.textContent = "Not quite the right order \u2014 resetting, give it another go.";
      feedback.style.display = "block";
      slotsWrap.querySelectorAll(".seq-slot").forEach(s => s.classList.add("wrong"));
      setTimeout(() => { placed = []; feedback.style.display = "none"; renderSlots(); renderPool(); }, 900);
    }
  }

  renderSlots();
  renderPool();
  app.appendChild(body);
}

function renderChapterQuizSort(item, onPass) {
  const body = document.createElement("div");
  body.className = "slide-body";
  body.innerHTML = `
    <h2 class="slide-title">${item.prompt}</h2>
    <p class="testme-counter" data-role="sort-counter"></p>
    <div class="asort-bins">
      <div class="asort-bin">
        <p class="asort-bin-header">${item.groupALabel}</p>
        <div class="asort-well" data-bin="a"><div class="asort-count">0</div></div>
      </div>
      <div class="asort-bin">
        <p class="asort-bin-header">${item.groupBLabel}</p>
        <div class="asort-well" data-bin="b"><div class="asort-count">0</div></div>
      </div>
    </div>
    <div data-role="sort-deck"></div>
    <p class="quiz-feedback" data-role="sort-feedback" style="display:none"></p>
  `;
  app.appendChild(body);

  const counter = body.querySelector('[data-role="sort-counter"]');
  const binA = body.querySelector('[data-bin="a"]');
  const binB = body.querySelector('[data-bin="b"]');
  const countA = binA.querySelector(".asort-count");
  const countB = binB.querySelector(".asort-count");
  const deckZone = body.querySelector('[data-role="sort-deck"]');
  const feedback = body.querySelector('[data-role="sort-feedback"]');

  let queue = shuffleArr(item.chips);
  let deckIndex = 0;
  const results = {}; // id -> "a"|"b"

  function renderBin(bin, groupKey) {
    bin.querySelectorAll(".asort-placed").forEach(e => e.remove());
    queue.forEach(chip => {
      if (results[chip.id] !== groupKey) return;
      const el = document.createElement("div");
      el.className = "asort-placed";
      const isCorrect = chip.group === groupKey;
      el.classList.add(isCorrect ? "correct" : "wrong");
      el.innerHTML = `<span class="asort-badge">${isCorrect ? "&#10003;" : "&#10005;"}</span>${chip.label}`;
      bin.appendChild(el);
    });
  }

  function spawnCard() {
    deckZone.innerHTML = "";
    counter.textContent = (queue.length - deckIndex) + " of " + queue.length + " left";
    if (deckIndex >= queue.length) { finishPass(); return; }
    const chip = queue[deckIndex];
    const card = document.createElement("div");
    card.className = "asort-active";
    card.innerHTML = `<p class="asort-active-name">${chip.label}</p>`;
    const row = document.createElement("div");
    row.className = "asort-fallback-row";
    const btnA = document.createElement("button");
    btnA.className = "asort-fallback-btn";
    btnA.textContent = "\u2190 " + item.groupALabel;
    btnA.onclick = () => place("a");
    const btnB = document.createElement("button");
    btnB.className = "asort-fallback-btn";
    btnB.textContent = item.groupBLabel + " \u2192";
    btnB.onclick = () => place("b");
    row.appendChild(btnA);
    row.appendChild(btnB);
    deckZone.appendChild(card);
    deckZone.appendChild(row);

    function place(groupKey) {
      results[chip.id] = groupKey;
      deckIndex++;
      renderBin(binA, "a");
      renderBin(binB, "b");
      countA.textContent = Object.values(results).filter(v => v === "a").length;
      countB.textContent = Object.values(results).filter(v => v === "b").length;
      spawnCard();
    }
  }

  function finishPass() {
    const wrong = queue.filter(chip => results[chip.id] !== chip.group);
    if (!wrong.length) {
      feedback.textContent = "All sorted correctly.";
      feedback.style.display = "block";
      showChapterQuizContinue(body, onPass);
    } else {
      feedback.textContent = `${wrong.length} to fix \u2014 here they come again.`;
      feedback.style.display = "block";
      setTimeout(() => {
        queue = shuffleArr(wrong);
        deckIndex = 0;
        wrong.forEach(chip => { delete results[chip.id]; });
        renderBin(binA, "a"); renderBin(binB, "b");
        countA.textContent = "0"; countB.textContent = "0";
        feedback.style.display = "none";
        spawnCard();
      }, 1100);
    }
  }

  spawnCard();
}

function renderLearningPreTestVideo(moduleId) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod || !mod.preTestVideo) { go("learning-test-intro", { moduleId }, false); return; }
  const video = mod.preTestVideo;

  const wrap = document.createElement("div");
  wrap.className = "intro-wrap";
  wrap.innerHTML = `
    <p class="intro-eyebrow">${mod.category} \u00b7 Before the Test</p>
    <h1 class="intro-title">${video.title}</h1>
    <div class="video-embed-wrap">
      <iframe
        src="https://www.youtube.com/embed/${video.youtubeId}"
        title="${video.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    <button class="btn-start" data-role="video-continue-btn">Continue to Final Test</button>
  `;
  wrap.querySelector('[data-role="video-continue-btn"]').onclick = () => go("learning-test-intro", { moduleId }, false);
  app.appendChild(wrap);
}

function renderLearningTestIntro(moduleId) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }
  const test = mod.test || [];
  if (!test.length) { go("learning-complete", { moduleId }, false); return; }

  const lock = finalTestLockStatus(moduleId);
  const wrap = document.createElement("div");
  wrap.className = "intro-wrap";

  if (lock.locked) {
    wrap.innerHTML = `
      <p class="intro-eyebrow">${mod.category} \u00b7 Final Test</p>
      <h1 class="intro-title">Locked for a Bit</h1>
      <p class="slide-text">Two attempts didn't clear 100% on this one. Take ${formatMmSs(lock.remainingMs)} to read back through the chapters \u2014 the test unlocks again after that.</p>
      <button class="btn-start" data-role="reread-btn">Review the Lessons</button>
      <button class="footer-btn" data-role="refresh-btn" style="margin-top:8px;">Check Again</button>
    `;
    wrap.querySelector('[data-role="reread-btn"]').onclick = () => go("learning-chapter", { moduleId, chapterIndex: 0, sectionIndex: 0 }, false);
    wrap.querySelector('[data-role="refresh-btn"]').onclick = () => go("learning-test-intro", { moduleId }, false);
    app.appendChild(wrap);
    return;
  }

  const attemptsUsed = lock.state.attemptsUsed || 0;
  const attemptsLeftLine = attemptsUsed === 0
    ? `${test.length} question${test.length === 1 ? "" : "s"} \u2014 you need every one right to pass.`
    : `You need 100% to pass. This is your last attempt before a 10-minute cooldown.`;

  wrap.innerHTML = `
    <p class="intro-eyebrow">${mod.category} \u00b7 Final Test</p>
    <h1 class="intro-title">Ready for the Test?</h1>
    <p class="slide-text">You've finished every chapter of ${mod.title}. ${attemptsLeftLine}</p>
    <div class="intro-meta-row">
      <div class="intro-meta"><b>${test.length}</b><span>Questions</span></div>
      <div class="intro-meta"><b>100%</b><span>To Pass</span></div>
    </div>
    <button class="btn-start">Start Test</button>
  `;
     wrap.querySelector(".btn-start").onclick = () => {
    clearFinalTestAnswers(moduleId);
    // Analytics: any new/alternate test-flow function (different pass
    // threshold, different UI) must carry this same track() call, with
    // the matching learning_test_complete call at its own pass/fail point.
    ChiriusAnalytics.track('learning_test_start', { module_id: moduleId, attempt_number: attemptsUsed + 1 });
    go("learning-test", { moduleId, index: 0 }, false);
  };
  app.appendChild(wrap);
}

function renderLearningTest(moduleId, index) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }
  const test = mod.test || [];
  if (!test.length) { go("learning-complete", { moduleId }, false); return; }

  const lock = finalTestLockStatus(moduleId);
  if (lock.locked) { go("learning-test-intro", { moduleId }, false); return; }

  index = Math.max(0, Math.min(index, test.length - 1));
  const q = test[index];
  const answers = getFinalTestAnswers(moduleId);

  const testKicker = document.createElement("p");
  testKicker.className = "chapter-kicker";
  testKicker.textContent = "Final Test \u2014 100% required";
  app.appendChild(testKicker);

  const dots = document.createElement("div");
  dots.className = "dots-row";
  dots.innerHTML = test.map((_, i) => `<div class="dot-seg ${i <= index ? "filled" : ""} ${answers[i] !== undefined ? "answered" : ""}"></div>`).join("");
  app.appendChild(dots);

  const body = document.createElement("div");
  body.className = "slide-body";
  const kicker = `Question ${index + 1} of ${test.length}`;
  body.innerHTML = `
    <p class="slide-kicker">${kicker}</p>
    <h2 class="slide-title">${q.question}</h2>
    <div data-role="quiz-opts"></div>
  `;
  const optsWrap = body.querySelector('[data-role="quiz-opts"]');
  let chosen = answers[index] !== undefined ? answers[index] : null;
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt" + (chosen === i ? " selected" : "");
    btn.textContent = opt;
    btn.onclick = () => {
      chosen = i;
      setFinalTestAnswer(moduleId, index, i);
      optsWrap.querySelectorAll(".quiz-opt").forEach((b, bi) => b.classList.toggle("selected", bi === i));
      nextBtn.disabled = false;
    };
    optsWrap.appendChild(btn);
  });
  app.appendChild(body);

  const isLast = index === test.length - 1;
  const nav = document.createElement("div");
  nav.className = "card-footer-nav";
  const prevBtn = document.createElement("button");
  prevBtn.className = "footer-btn";
  prevBtn.textContent = "\u2039 Previous";
  if (index === 0) { prevBtn.disabled = true; }
  else prevBtn.onclick = () => go("learning-test", { moduleId, index: index - 1 }, false);
  const nextBtn = document.createElement("button");
  nextBtn.className = "footer-btn footer-btn-home";
  nextBtn.textContent = isLast ? "Submit Test" : "Next \u203a";
  nextBtn.disabled = chosen === null;
  nextBtn.onclick = () => {
    if (chosen === null) return;
    if (isLast) {
      const finalAnswers = getFinalTestAnswers(moduleId);
      const wrongIndices = [];
      test.forEach((tq, i) => { if (finalAnswers[i] !== tq.correctIndex) wrongIndices.push(i); });
      const correctCount = test.length - wrongIndices.length;
            const passed = wrongIndices.length === 0;
      if (passed) {
        recordFinalTestPass(moduleId);
      } else {
        recordFinalTestFailure(moduleId);
      }
            const stateAfter = getFinalTestState(moduleId);
      // Analytics: see note at learning_test_start above -- any alternate
      // test-flow function needs this same call at its pass/fail point.
      ChiriusAnalytics.track('learning_test_complete', {
        module_id: moduleId,
        passed,
        correct_count: correctCount,
        total: test.length,
        attempts_used: stateAfter.attemptsUsed || 0,
        locked_out: !!stateAfter.lockedUntil
      });
      go("learning-test-result", { moduleId, correctCount, total: test.length, passed, wrongIndices }, false);
    } else {
      go("learning-test", { moduleId, index: index + 1 }, false);
    }
  };
  nav.appendChild(prevBtn);
  nav.appendChild(nextBtn);
  app.appendChild(nav);
}

function renderLearningTestResult(moduleId, correctCount, total, passed, wrongIndices) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }
  wrongIndices = wrongIndices || [];

  const wrap = document.createElement("div");
  wrap.className = "complete-wrap";

  if (passed) {
    wrap.innerHTML = `
      <div class="complete-badge">&#127881;</div>
      <h2 class="complete-title">Congratulations!</h2>
      <p class="complete-sub">${correctCount} of ${total} \u2014 perfect score.</p>
    `;
    app.appendChild(wrap);

    const nav = document.createElement("div");
    nav.className = "card-footer-nav";
    const continueBtn = document.createElement("button");
    continueBtn.className = "footer-btn footer-btn-home";
    continueBtn.style.width = "100%";
    continueBtn.textContent = "Continue \u203a";
    continueBtn.onclick = () => go("learning-complete", { moduleId }, false);
    nav.appendChild(continueBtn);
    app.appendChild(nav);
    return;
  }

  const lock = finalTestLockStatus(moduleId);
  const test = mod.test || [];
  const missedList = wrongIndices.map(i => `<li>Question ${i + 1}: ${test[i] ? test[i].question : ""}</li>`).join("");

  if (lock.locked) {
    wrap.innerHTML = `
      <div class="complete-badge" style="background:var(--sumi-900); color:var(--error-500);">&#10005;</div>
      <h2 class="complete-title">${correctCount} of ${total} \u2014 Not Yet</h2>
      <p class="complete-sub">That was your second attempt without a perfect score. Take ${formatMmSs(lock.remainingMs)} to go back through the chapters before trying again.</p>
      <p class="slide-text" style="text-align:left; margin-top:10px;">You missed:</p>
      <ul class="missed-list">${missedList}</ul>
    `;
  } else {
    wrap.innerHTML = `
      <div class="complete-badge" style="background:var(--sumi-900); color:var(--error-500);">&#10005;</div>
      <h2 class="complete-title">${correctCount} of ${total} \u2014 Not Yet</h2>
      <p class="complete-sub">You need every question right to pass. Give it one more shot.</p>
      <p class="slide-text" style="text-align:left; margin-top:10px;">You missed:</p>
      <ul class="missed-list">${missedList}</ul>
    `;
  }
  app.appendChild(wrap);

  const nav = document.createElement("div");
  nav.className = "card-footer-nav";
  const backTarget = backToCourseTarget(moduleId);
  const hubBtn = document.createElement("button");
  hubBtn.className = "footer-btn";
  hubBtn.textContent = backTarget.label;
  hubBtn.onclick = backTarget.go;
  nav.appendChild(hubBtn);
  if (!lock.locked) {
    const retryBtn = document.createElement("button");
    retryBtn.className = "footer-btn footer-btn-home";
    retryBtn.textContent = "Try Again";
    retryBtn.onclick = () => go("learning-test-intro", { moduleId });
    nav.appendChild(retryBtn);
  } else {
    const reviewBtn = document.createElement("button");
    reviewBtn.className = "footer-btn footer-btn-home";
    reviewBtn.textContent = "Review the Lessons";
    reviewBtn.onclick = () => go("learning-chapter", { moduleId, chapterIndex: 0, sectionIndex: 0 });
    nav.appendChild(reviewBtn);
  }
  app.appendChild(nav);
}

function renderLearningComplete(moduleId) {
  header("Learning");
  const mod = findLearningModule(moduleId);
  if (!mod) { go("learning-hub"); return; }

  addJourneyButton(mod);
  const firstTime = markLearningComplete(moduleId);
  if (firstTime) celebrate();

  const unlocked = LEARNING_MODULES.find(m => m.unlockAfter === moduleId && isModuleUnlocked(m));

  // Training Calendar lessons: offer the next unfinished lesson in the same week.
  let nextInWeek = null;
  if (mod.calendar && typeof TRAINING_CALENDAR !== "undefined") {
    const month = trainingFindMonth(mod.calendar.monthId);
    const week = month && month.weeks.find(w => w.n === mod.calendar.week);
    if (week) {
      const lessons = trainingWeekLessons(week);
      const at = lessons.findIndex(l => l.id === moduleId);
      nextInWeek = lessons.slice(at + 1).find(l => moduleStatus(l) !== "completed") || null;
    }
  }

  const wrap = document.createElement("div");
  wrap.className = "complete-wrap";
  wrap.innerHTML = `
    <div class="complete-badge">&#10003;</div>
    <h2 class="complete-title">${mod.calendar ? "Lesson Complete" : "Module Complete"}</h2>
    <p class="complete-sub">You finished ${mod.title}.</p>
    ${unlocked ? `<div class="milestone-strip"><p class="milestone-line">${unlocked.title} unlocked</p></div>` : ""}
  `;
  app.appendChild(wrap);

  const nav = document.createElement("div");
  nav.className = "card-footer-nav";
  const backTarget = backToCourseTarget(moduleId);
  const hubBtn = document.createElement("button");
  hubBtn.className = "footer-btn";
  hubBtn.textContent = backTarget.label;
  hubBtn.onclick = backTarget.go;
  nav.appendChild(hubBtn);
  const nextTarget = unlocked || nextInWeek;
  if (nextTarget) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "footer-btn footer-btn-home";
    nextBtn.textContent = unlocked ? "Next Module \u203a" : "Next Lesson \u203a";
    nextBtn.onclick = () => go("learning-intro", { moduleId: nextTarget.id });
    nav.appendChild(nextBtn);
  }
  app.appendChild(nav);
}

/* ---------- Training Calendar ----------
   Learning > Training Calendar > Week N > a column's lesson. The calendar
   itself (months, weeks, columns, unlock dates) is TRAINING_CALENDAR, defined
   by js/training-calendar.js and one js/training-YYYY-MM.js per month. Each
   lesson is a normal learning module, so the lesson, test, lockout and
   progress code above all apply unchanged. A week opens on its date and
   stays open; nothing about it depends on earlier weeks. */

function trainingFindMonth(id) { return TRAINING_CALENDAR.find(m => m.id === id); }
function trainingWeekOpen(week) { return todayISO() >= week.unlocksOn; }
function trainingWeekLessons(week) {
  return Object.keys(week.items).map(c => week.items[c].moduleId).filter(Boolean).map(findLearningModule).filter(Boolean);
}
function trainingDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function trainingShort(date) { return date.toLocaleDateString("en-US", { month: "short", day: "numeric" }); }
/* "Nov 1\u20137": a week runs until the day before the next one opens, and the
   last week of a month runs to the end of that month. */
function trainingWeekRange(month, week) {
  const start = trainingDate(week.unlocksOn);
  const next = month.weeks.find(w => w.n === week.n + 1);
  const end = next ? trainingDate(next.unlocksOn) : new Date(start.getFullYear(), start.getMonth() + 1, 1);
  end.setDate(end.getDate() - 1);
  const endText = end.getMonth() === start.getMonth() ? String(end.getDate()) : trainingShort(end);
  return `${trainingShort(start)}\u2013${endText}`;
}

/* The row that sits at the top of the Learning hub. */
function trainingCalendarHubRowHTML() {
  const months = TRAINING_CALENDAR.slice().sort((a, b) => (a.id < b.id ? 1 : -1));
  let openWeek = null, openMonth = null;
  months.forEach(m => m.weeks.forEach(w => {
    if (trainingWeekOpen(w) && (!openWeek || w.unlocksOn > openWeek.unlocksOn)) { openWeek = w; openMonth = m; }
  }));
  const mods = [];
  TRAINING_CALENDAR.forEach(m => m.weeks.forEach(w => { if (trainingWeekOpen(w)) mods.push(...trainingWeekLessons(w)); }));
  const meta = openWeek ? `${openMonth.title} \u00b7 Week ${openWeek.n} is open` : `${months[0].title} \u00b7 Opens ${trainingShort(trainingDate(months[0].weeks[0].unlocksOn))}`;
  return learningGroupRowHTML("data-calendar", "open", "Training Calendar", meta, averagePercent(mods));
}

function renderTrainingCalendar() {
  header("Training Calendar");
  const wrap = document.createElement("div");
  let html = `<p class="slide-text">Learn each week's topics before pre-shift. Every lesson ends with a test, and you need 100% to pass. A week opens on its start date and stays open.</p>`;

  TRAINING_CALENDAR.slice().sort((a, b) => (a.id < b.id ? 1 : -1)).forEach(month => {
    html += `<p class="section-label">${month.title}</p>`;
    month.weeks.forEach(week => {
      if (!trainingWeekOpen(week)) {
        html += `
          <div class="list-row locked" tabindex="-1" aria-disabled="true">
            <div class="list-row-main">
              <span class="mod-dot locked"></span>
              <div class="list-row-text">
                <p>Week ${week.n}</p>
                <span>Opens ${trainingShort(trainingDate(week.unlocksOn))}</span>
              </div>
            </div>
            <span class="lock-ic">&#128274;</span>
          </div>`;
        return;
      }
      const lessons = trainingWeekLessons(week);
      const done = completedCount(lessons);
      const meta = lessons.length
        ? `${trainingWeekRange(month, week)} \u00b7 ${done} of ${pluralize(lessons.length, "lesson", "lessons")} complete`
        : `${trainingWeekRange(month, week)} \u00b7 Lessons coming soon`;
      html += learningGroupRowHTML("data-week", `${month.id}|${week.n}`, `Week ${week.n}`, meta, averagePercent(lessons));
    });
  });

  wrap.innerHTML = html;
  wrap.querySelectorAll("[data-week]").forEach(row => {
    row.onclick = () => {
      const [monthId, n] = row.dataset.week.split("|");
      go("training-week", { monthId, week: Number(n) });
    };
  });
  app.appendChild(wrap);
}

function renderTrainingWeek(monthId, weekN) {
  const month = trainingFindMonth(monthId);
  const week = month && month.weeks.find(w => w.n === weekN);
  // A week that hasn't opened yet (or doesn't exist) goes back to the calendar.
  if (!week || !trainingWeekOpen(week)) { go("training-calendar", {}, false); return; }
  header(`Week ${week.n}`);

  const wrap = document.createElement("div");
  let html = `<p class="slide-text">${month.title} \u00b7 ${trainingWeekRange(month, week)}</p><p class="section-label">Lessons</p>`;
  month.columns.forEach(col => {
    const item = week.items[col.id];
    if (!item) return;
    const mod = item.moduleId ? findLearningModule(item.moduleId) : null;
    const kicker = `${col.title} \u00b7 ${col.lens}`;
    if (!mod) {
      html += `
        <div class="list-row locked" tabindex="-1" aria-disabled="true">
          <div class="list-row-main">
            <span class="mod-dot locked"></span>
            <div class="list-row-text">
              <p>${item.label}</p>
              <span>${kicker} \u00b7 Coming soon</span>
            </div>
          </div>
        </div>`;
      return;
    }
    const status = moduleStatus(mod);
    const pct = modulePercent(mod);
    const right = status === "completed"
      ? `<span class="chev">&#10003;</span>`
      : `<div class="mini-track"><div class="mini-fill" style="width:${pct}%"></div></div>`;
    html += `
      <div class="list-row" data-lesson="${mod.id}">
        <div class="list-row-main">
          <span class="mod-dot ${status === "completed" ? "done" : ""}"></span>
          <div class="list-row-text">
            <p>${item.label}</p>
            <span>${kicker}</span>
          </div>
        </div>
        ${right}
      </div>`;
  });
  wrap.innerHTML = html;
  wrap.querySelectorAll("[data-lesson]").forEach(row => {
    row.onclick = () => go("learning-intro", { moduleId: row.dataset.lesson });
  });
  app.appendChild(wrap);
}

/* ---------- Service Enhancement ----------
   Learning > Service Enhancement > a week's lesson. One skill per week, taught
   as a short audio lesson plus a slide deck. The weeks live in
   SERVICE_ENHANCEMENT (js/service-enhancement.js) and open by date exactly
   like the Training Calendar: a week opens on its start date and stays open.
   One topic per week, so a week goes straight to its lesson (no week screen).
   No tests and no progress tracking. */

function seFindMonth(id) { return SERVICE_ENHANCEMENT.find(m => m.id === id); }
function seWeekOpen(week) { return todayISO() >= week.unlocksOn; }
function seClock(sec) {
  sec = Math.max(0, Math.floor(sec) || 0);
  return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
}
function seSlideSrc(slides, i) { return `${slides.dir}slide-${String(i + 1).padStart(2, "0")}.jpg`; }

/* The row on the Learning hub, directly under the Training Calendar. */
function serviceEnhancementHubRowHTML() {
  const months = SERVICE_ENHANCEMENT.slice().sort((a, b) => (a.id < b.id ? 1 : -1));
  let openWeek = null, openMonth = null;
  months.forEach(m => m.weeks.forEach(w => {
    if (seWeekOpen(w) && (!openWeek || w.unlocksOn > openWeek.unlocksOn)) { openWeek = w; openMonth = m; }
  }));
  const meta = openWeek
    ? `${openMonth.title} · Week ${openWeek.n} is open`
    : `${months[0].title} · Opens ${trainingShort(trainingDate(months[0].weeks[0].unlocksOn))}`;
  return `<div class="list-row" data-se="hub">
      <div class="list-row-main">
        <span class="mod-dot"></span>
        <div class="list-row-text">
          <p>Service Enhancement</p>
          <span>${meta}</span>
        </div>
      </div>
      <span class="chev" aria-hidden="true">&#8250;</span>
    </div>`;
}

function seLockedRowHTML(title, meta, showLock) {
  return `
    <div class="list-row locked" tabindex="-1" aria-disabled="true">
      <div class="list-row-main">
        <span class="mod-dot locked"></span>
        <div class="list-row-text">
          <p>${title}</p>
          <span>${meta}</span>
        </div>
      </div>
      ${showLock ? `<span class="lock-ic">&#128274;</span>` : ""}
    </div>`;
}

function renderServiceEnhancement() {
  header("Service Enhancement");
  const wrap = document.createElement("div");
  let html = `<p class="slide-text">One skill each week, taught with a short audio lesson and slides. A week opens on its start date and stays open.</p>`;

  SERVICE_ENHANCEMENT.slice().sort((a, b) => (a.id < b.id ? 1 : -1)).forEach(month => {
    html += `<p class="section-label">${month.title}</p>`;
    month.weeks.forEach(week => {
      const range = trainingWeekRange(month, week);
      if (!seWeekOpen(week)) {
        html += seLockedRowHTML(`Week ${week.n}`, `Opens ${trainingShort(trainingDate(week.unlocksOn))}`, true);
      } else if (!week.lesson) {
        html += seLockedRowHTML(`Week ${week.n}`, `${range} · Coming soon`, false);
      } else {
        html += `
          <div class="list-row" data-se-week="${month.id}|${week.n}">
            <div class="list-row-main">
              <span class="mod-dot"></span>
              <div class="list-row-text">
                <p>${week.lesson.title}</p>
                <span>Week ${week.n} · ${range} · Audio + slides</span>
              </div>
            </div>
            <span class="chev" aria-hidden="true">&#8250;</span>
          </div>`;
      }
    });
  });

  wrap.innerHTML = html;
  wrap.querySelectorAll("[data-se-week]").forEach(row => {
    row.onclick = () => {
      const [monthId, n] = row.dataset.seWeek.split("|");
      go("service-enhancement-lesson", { monthId, week: Number(n) });
    };
  });
  app.appendChild(wrap);
}

function renderServiceEnhancementLesson(monthId, weekN) {
  const month = seFindMonth(monthId);
  const week = month && month.weeks.find(w => w.n === weekN);
  // A week that hasn't opened yet, or has no lesson yet, goes back to the list.
  if (!week || !week.lesson || !seWeekOpen(week)) { go("service-enhancement", {}, false); return; }
  const lesson = week.lesson;
  const count = lesson.slides.alt.length;
  header(`Week ${week.n}`);

  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <p class="slide-kicker">${month.title} · ${trainingWeekRange(month, week)}</p>
    <h2 class="intro-title se-title">${lesson.title}</h2>

    <p class="section-label">Audio · ${seClock(lesson.audio.seconds)}</p>
    <div class="se-player">
      <audio preload="metadata" src="${lesson.audio.src}"></audio>
      <button type="button" class="se-play" aria-label="Play audio"></button>
      <div class="se-track">
        <input type="range" class="se-seek" min="0" max="${lesson.audio.seconds}" step="1" value="0" aria-label="Audio position">
        <div class="se-times"><span class="se-cur">0:00</span><span class="se-dur">${seClock(lesson.audio.seconds)}</span></div>
      </div>
      <button type="button" class="se-skip" aria-label="Back 15 seconds">−15s</button>
    </div>
    <p class="se-status" role="status" hidden></p>

    <p class="section-label">Slides · ${count}</p>
    <div class="dots-row se-dots">${lesson.slides.alt.map(() => `<div class="dot-seg"></div>`).join("")}</div>
    <div class="se-deck">
      <button type="button" class="se-stage" aria-label="Open slide full screen">
        <img class="se-slide" src="${seSlideSrc(lesson.slides, 0)}" alt="${lesson.slides.alt[0]}" decoding="async">
      </button>
      <div class="se-deck-bar">
        <button type="button" class="se-nav se-prev">← Previous</button>
        <span class="se-count" aria-live="polite"></span>
        <button type="button" class="se-nav se-next">Next →</button>
      </div>
    </div>
    <p class="se-hint">Tap a slide to open it full screen.</p>`;
  app.appendChild(wrap);

  seWirePlayer(wrap, lesson);
  seWireDeck(wrap, lesson);
}

function seWirePlayer(root, lesson) {
  const box = root.querySelector(".se-player");
  const audio = box.querySelector("audio");
  const playBtn = box.querySelector(".se-play");
  const skipBtn = box.querySelector(".se-skip");
  const seek = box.querySelector(".se-seek");
  const cur = box.querySelector(".se-cur");
  const dur = box.querySelector(".se-dur");
  const status = root.querySelector(".se-status");
  let dragging = false;

  const total = () => (isFinite(audio.duration) && audio.duration > 0 ? audio.duration : lesson.audio.seconds);
  const showStatus = (text, isError) => {
    status.textContent = text;
    status.classList.toggle("is-error", !!isError);
    status.hidden = false;
  };
  const hideStatus = () => { status.hidden = true; status.textContent = ""; status.classList.remove("is-error"); };
  // Label and fill follow the slider's value, so scrubbing previews live and
  // playback just moves the slider.
  const paint = () => {
    const t = total();
    seek.max = String(Math.ceil(t));
    if (!dragging) seek.value = String(Math.floor(audio.currentTime || 0));
    const v = Number(seek.value);
    box.style.setProperty("--p", (Number(seek.max) ? (v / Number(seek.max)) * 100 : 0) + "%");
    seek.setAttribute("aria-valuetext", `${seClock(v)} of ${seClock(t)}`);
    cur.textContent = seClock(v);
    dur.textContent = seClock(t);
  };
  const setPlaying = (playing) => {
    box.classList.toggle("is-playing", playing);
    playBtn.setAttribute("aria-label", playing ? "Pause audio" : "Play audio");
  };
  const showError = () => showStatus("The audio didn’t load. Check your connection and try again.", true);

  playBtn.onclick = () => {
    if (audio.paused) {
      hideStatus();
      const p = audio.play();
      if (p && p.catch) p.catch(showError);
    } else {
      audio.pause();
    }
  };
  skipBtn.onclick = () => { audio.currentTime = Math.max(0, (audio.currentTime || 0) - 15); paint(); };

  seek.addEventListener("pointerdown", () => { dragging = true; });
  seek.addEventListener("pointercancel", () => { dragging = false; paint(); });
  seek.addEventListener("input", () => { dragging = true; paint(); });
  seek.addEventListener("change", () => { audio.currentTime = Number(seek.value); dragging = false; paint(); });

  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => { audio.currentTime = 0; setPlaying(false); paint(); });
  audio.addEventListener("timeupdate", paint);
  audio.addEventListener("durationchange", paint);
  audio.addEventListener("waiting", () => showStatus("Loading audio…", false));
  audio.addEventListener("playing", hideStatus);
  audio.addEventListener("error", showError);

  paint();

  // Lock-screen / headphone controls show the lesson, not a bare URL.
  if ("mediaSession" in navigator && typeof MediaMetadata !== "undefined") {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: lesson.title,
        artist: (typeof BRAND !== "undefined" && BRAND.name) || "",
        album: "Service Enhancement"
      });
    } catch (e) {}
  }
}

function seWireDeck(root, lesson) {
  const slides = lesson.slides;
  const count = slides.alt.length;
  const stage = root.querySelector(".se-stage");
  const img = root.querySelector(".se-slide");
  const prev = root.querySelector(".se-prev");
  const next = root.querySelector(".se-next");
  const counter = root.querySelector(".se-count");
  const dots = root.querySelectorAll(".se-dots .dot-seg");
  let i = 0;
  let swiped = false;

  const show = (n) => {
    i = Math.max(0, Math.min(count - 1, n));
    img.src = seSlideSrc(slides, i);
    img.alt = slides.alt[i];
    counter.textContent = `${i + 1} / ${count}`;
    prev.disabled = i === 0;
    next.disabled = i === count - 1;
    // A button that just went disabled can't keep keyboard focus.
    if (prev.disabled && document.activeElement === prev) next.focus();
    if (next.disabled && document.activeElement === next) prev.focus();
    dots.forEach((d, k) => d.classList.toggle("filled", k <= i));
    // Warm the neighbors so the next tap shows a slide, not a blank frame.
    [i - 1, i + 1].forEach(k => { if (k >= 0 && k < count) new Image().src = seSlideSrc(slides, k); });
  };
  show(0);

  prev.onclick = () => show(i - 1);
  next.onclick = () => show(i + 1);
  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); show(i - 1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); show(i + 1); }
  });
  seAttachSwipe(stage, (dir) => { swiped = true; show(i + dir); }, () => { swiped = false; });
  stage.onclick = () => {
    if (swiped) { swiped = false; return; }     // a swipe is not a tap
    seOpenZoom(slides, i, (last) => { show(last); stage.focus({ preventScroll: true }); });
  };
}

/* Horizontal swipe on an element: calls onSwipe(+1) for left, onSwipe(-1) for right. */
function seAttachSwipe(el, onSwipe, onStart) {
  let sx = null, sy = 0;
  el.addEventListener("pointerdown", (e) => { sx = e.clientX; sy = e.clientY; if (onStart) onStart(); });
  el.addEventListener("pointercancel", () => { sx = null; });
  el.addEventListener("pointerup", (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) onSwipe(dx < 0 ? 1 : -1);
  });
}

/* Full-screen slide viewer. Slides are small on a phone held upright, so this
   gives them the whole screen (best sideways). */
function seOpenZoom(slides, start, onClose) {
  const count = slides.alt.length;
  let i = start;
  const overlay = document.createElement("div");
  overlay.className = "se-zoom";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Slides, full screen");
  overlay.innerHTML = `
    <div class="se-zoom-bar">
      <p class="se-zoom-count" aria-live="polite"></p>
      <div class="se-zoom-actions">
        <button type="button" class="se-zoom-btn se-zoom-prev" aria-label="Previous slide">&#8592;</button>
        <button type="button" class="se-zoom-btn se-zoom-next" aria-label="Next slide">&#8594;</button>
        <button type="button" class="se-zoom-btn se-zoom-close" aria-label="Close full screen">&#10005;</button>
      </div>
    </div>
    <div class="se-zoom-stage"><img class="se-zoom-img" alt=""></div>
    <p class="se-zoom-hint">Turn your phone sideways for a bigger view.</p>`;

  const img = overlay.querySelector(".se-zoom-img");
  const prev = overlay.querySelector(".se-zoom-prev");
  const next = overlay.querySelector(".se-zoom-next");
  const closeBtn = overlay.querySelector(".se-zoom-close");
  const counter = overlay.querySelector(".se-zoom-count");

  const show = (n) => {
    i = Math.max(0, Math.min(count - 1, n));
    img.src = seSlideSrc(slides, i);
    img.alt = slides.alt[i];
    counter.textContent = `${i + 1} / ${count}`;
    prev.disabled = i === 0;
    next.disabled = i === count - 1;
    if (prev.disabled && document.activeElement === prev) next.focus();
    if (next.disabled && document.activeElement === next) prev.focus();
    [i - 1, i + 1].forEach(k => { if (k >= 0 && k < count) new Image().src = seSlideSrc(slides, k); });
  };

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    document.removeEventListener("keydown", onKey, true);
    window.removeEventListener("popstate", close);
    document.body.style.overflow = "";
    overlay.remove();
    if (onClose) onClose(i);
  };
  const onKey = (e) => {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); show(i - 1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); show(i + 1); return; }
    if (e.key !== "Tab") return;
    const focusables = Array.from(overlay.querySelectorAll("button:not(:disabled)"));
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  prev.onclick = () => show(i - 1);
  next.onclick = () => show(i + 1);
  closeBtn.onclick = close;
  seAttachSwipe(overlay.querySelector(".se-zoom-stage"), (dir) => show(i + dir));
  document.addEventListener("keydown", onKey, true);
  window.addEventListener("popstate", close);
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  show(start);
  closeBtn.focus();
}

/* ---------- Tools: things used during a shift rather than courses to pass.
   Banquet Service (live checklist) and the two wine-pairing lookups. ---------- */
function renderTools() {
  header("Tools");
  const rows = [];
  if (typeof BANQUET_SERVICE !== "undefined") {
    const t = bqTotals(bqLoad());
    const meta = t.itemsDone
      ? `${t.stepsDone} of ${t.steps} steps complete`
      : `${BANQUET_SERVICE.steps.length} steps &middot; Live checklist`;
    rows.push({ go: "banquet-service", title: BANQUET_SERVICE.title, sub: meta });
  }
  rows.push({ go: "pairwf-list", title: "Pair Wine with Food", sub: "Start from the bottle" });
  rows.push({ go: "pairfw-list", title: "Pair Food with Wine", sub: "Start from the dish" });

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = rows.map((r, i) => `
    <div class="home-option" data-i="${i}">
      <div class="home-option-text"><p>${r.title}</p><span>${r.sub}</span></div>
    </div>`).join("");
  options.querySelectorAll(".home-option").forEach(el => {
    el.onclick = () => go(rows[Number(el.dataset.i)].go);
  });
  app.appendChild(options);
}

/* ---------- Banquet Service: live event checklist ----------
   Data lives in js/banquet-service.js. Progress is per device (BQ_KEY) and
   covers one event at a time; "Start a new event" clears it. Steps in the
   course-loop phase repeat per course, so their keys carry the course number.
   Checking the last box of a step collapses it and opens the next incomplete one. */
const BQ_KEY = "p131-banquet-event";
const BQ_ROLE = { M: "Manager", L: "Lead", S: "Servers" };

function bqEsc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function bqLoad() {
  const base = { done: {}, open: {}, courses: 1, course: 1 };
  try {
    const s = JSON.parse(localStorage.getItem(BQ_KEY));
    if (s && typeof s === "object") return Object.assign(base, s);
  } catch (e) {}
  return base;
}
function bqSave(st) { try { localStorage.setItem(BQ_KEY, JSON.stringify(st)); } catch (e) {} }
function bqRepeats(step) { return BANQUET_SERVICE.phases.find(p => p.id === step.phase).repeats; }
function bqKey(step, course) { return bqRepeats(step) ? `${step.n}@${course}` : String(step.n); }
function bqStat(st, step, course) {
  const k = bqKey(step, course || st.course);
  const total = step.items.length + 1;
  let done = 0;
  for (let i = 0; i < total; i++) if (st.done[`${k}:${i}`]) done++;
  return { k, total, done, ok: done === total };
}
function bqTotals(st) {
  let items = 0, itemsDone = 0, steps = 0, stepsDone = 0;
  BANQUET_SERVICE.steps.forEach(step => {
    const n = bqRepeats(step) ? st.courses : 1;
    for (let c = 1; c <= n; c++) {
      const x = bqStat(st, step, c);
      items += x.total; itemsDone += x.done; steps++;
      if (x.ok) stepsDone++;
    }
  });
  return { items, itemsDone, steps, stepsDone };
}
function bqStepByN(n) { return BANQUET_SERVICE.steps.find(s => s.n === n); }
function bqAdvance(st, step) {
  st.open[bqKey(step, st.course)] = false;
  const list = BANQUET_SERVICE.steps;
  for (let i = list.indexOf(step) + 1; i < list.length; i++) {
    if (!bqStat(st, list[i]).ok) { st.open[bqKey(list[i], st.course)] = true; break; }
  }
}

function bqStepHTML(st, step) {
  const x = bqStat(st, step);
  const open = !!st.open[x.k];
  const roles = step.roles.split("").map(r => `<span class="bq-tag">${BQ_ROLE[r]}</span>`).join("");
  let h = `<div class="bq-step${x.ok ? " is-ok" : ""}">
    <button type="button" class="bq-head" data-act="open" data-k="${x.k}" aria-expanded="${open}">
      <span class="bq-num">${step.n}</span>
      <span class="bq-head-main"><span class="bq-head-title">${bqEsc(step.title)}</span>
        <span class="bq-tags">${step.key ? `<span class="bq-tag bq-tag-key">Key step</span>` : ""}${roles}</span></span>
      <span class="bq-status">${x.ok ? "Complete" : `${x.done} of ${x.total}`}<span class="bq-mark" aria-hidden="true">${x.ok ? "&#10003;" : ""}</span></span>
    </button>`;
  if (open) {
    step.items.forEach((text, i) => {
      const d = !!st.done[`${x.k}:${i}`];
      h += `<button type="button" role="checkbox" aria-checked="${d}" class="bq-item${d ? " is-on" : ""}" data-act="chk" data-k="${x.k}:${i}" data-n="${step.n}"><span class="bq-box" aria-hidden="true">${d ? "&#10003;" : ""}</span><span class="bq-text">${bqEsc(text)}</span></button>`;
    });
    const si = step.items.length;
    const sd = !!st.done[`${x.k}:${si}`];
    h += `<button type="button" role="checkbox" aria-checked="${sd}" class="bq-item bq-std${sd ? " is-on" : ""}" data-act="chk" data-k="${x.k}:${si}" data-n="${step.n}"><span class="bq-box" aria-hidden="true">${sd ? "&#10003;" : ""}</span><span class="bq-text"><span class="bq-std-label">Goal met</span>${bqEsc(step.standard)}</span></button>
      <div class="bq-foot"><button type="button" class="bq-ghost" data-act="${x.ok ? "none" : "all"}" data-n="${step.n}">${x.ok ? "Clear this step" : "Mark all complete"}</button></div>`;
  }
  return h + `</div>`;
}

function bqBodyHTML(st) {
  const t = bqTotals(st);
  const pct = t.items ? t.itemsDone / t.items : 0;
  let h = `<div class="bq-progress">
      <div class="bq-progress-row"><span class="bq-progress-title">${t.stepsDone} of ${t.steps} steps complete</span><span class="bq-progress-pct">${Math.round(pct * 100)}%</span></div>
      <div class="bq-bar" role="progressbar" aria-label="Event progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct * 100)}"><i style="transform:scaleX(${pct})"></i></div>
    </div>`;
  BANQUET_SERVICE.phases.forEach(p => {
    h += `<p class="section-label">${p.title}${p.repeats ? ` <span class="bq-repeat">Repeats every course</span>` : ""}</p>`;
    if (p.repeats) {
      h += `<div class="bq-courses">`;
      for (let c = 1; c <= st.courses; c++) {
        const done = BANQUET_SERVICE.steps.filter(s => s.phase === p.id && bqStat(st, s, c).ok).length;
        const total = BANQUET_SERVICE.steps.filter(s => s.phase === p.id).length;
        h += `<button type="button" class="bq-chip" data-act="course" data-c="${c}" aria-pressed="${st.course === c}">Course ${c} · ${done}/${total}</button>`;
      }
      if (st.courses < 8) h += `<button type="button" class="bq-chip" data-act="addc">+ Add course</button>`;
      h += `</div>`;
    }
    BANQUET_SERVICE.steps.filter(s => s.phase === p.id).forEach(s => { h += bqStepHTML(st, s); });
  });
  h += `<button type="button" class="bq-reset" data-act="reset">Start a new event</button>`;
  return h;
}

function renderBanquetService() {
  header(BANQUET_SERVICE.title);
  const wrap = document.createElement("div");
  wrap.className = "bq";
  const st = bqLoad();
  const paint = () => {
    const y = window.scrollY;
    wrap.innerHTML = bqBodyHTML(st);
    window.scrollTo(0, y);
  };
  wrap.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const act = b.dataset.act;
    if (act === "open") {
      st.open[b.dataset.k] = !st.open[b.dataset.k];
    } else if (act === "course") {
      st.course = Number(b.dataset.c);
    } else if (act === "addc") {
      st.courses++; st.course = st.courses;
    } else if (act === "chk") {
      const step = bqStepByN(Number(b.dataset.n));
      const was = bqStat(st, step).ok;
      st.done[b.dataset.k] = !st.done[b.dataset.k];
      if (!was && bqStat(st, step).ok) bqAdvance(st, step);
    } else if (act === "all" || act === "none") {
      const step = bqStepByN(Number(b.dataset.n));
      const k = bqKey(step, st.course);
      for (let i = 0; i < step.items.length + 1; i++) st.done[`${k}:${i}`] = act === "all";
      if (act === "all") bqAdvance(st, step);
    } else if (act === "reset") {
      showConfirm("Clear this event's checklist?", "Clear", () => {
        st.done = {}; st.open = {}; st.courses = 1; st.course = 1;
        bqSave(st); paint();
      });
      return;
    }
    bqSave(st);
    paint();
  });
  app.appendChild(wrap);
  paint();
}

if (getStoredAuth()) {
  render();
} else {
  renderAuthScreen(render);
}
