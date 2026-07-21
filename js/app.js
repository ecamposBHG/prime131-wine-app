// Prime 131 Wine App — logic

const app = document.getElementById("app");
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

function findWine(id) { return WINES.find(w => w.id === id); }
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
  const similar = similarPour(wine);
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

function similarPour(wine) {
  const sameStyle = WINES.filter(w => w.style === wine.style && w.id !== wine.id);
  if (!sameStyle.length) return null;
  return sameStyle[0];
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
  [["peach", "apple"], "\u{1F34F}"],
  [["tropical", "pineapple", "papaya", "dragon fruit"], "\u{1F34D}"],
  [["melon", "honeydew", "lychee", "pear"], "\u{1F348}"],
  [["flower", "honeysuckle", "violet", "floral", "lavender"], "\u{1F338}"],
  [["mocha", "cocoa", "chocolate", "coffee", "espresso", "roasted"], "\u2615"],
  [["oak", "cedar", "vanilla", "spice", "pepper", "whiskey", "bourbon", "malt", "bitters"], "\u{1FAB5}"],
  [["earth", "forest", "herb", "garrigue", "mineral", "stone", "flint", "tar", "savory", "basil", "mint", "matcha"], "\u{1F33F}"],
  [["brioche", "toast", "bread", "chalk"], "\u{1F950}"],
  [["honey"], "\u{1F36F}"],
  [["olive", "brin"], "\u{1FAD2}"],
  [["smoke"], "\u{1F525}"],
  [["agave"], "\u{1F335}"],
  [["ginger"], "\u{1FADA}"],
  [["sparkling", "bubbl"], "\u{1F942}"],
  [["sweet", "sugar"], "\u{1F36C}"],
  [["dry", "crisp", "silky", "bright"], "\u2744\uFE0F"]
];
function getFlavorIcon(tag) {
  const lower = tag.toLowerCase();
  for (const [keywords, icon] of FLAVOR_ICON_MAP) {
    if (keywords.some(k => lower.includes(k))) return icon;
  }
  return "\u{1F377}";
}

const SECTION_ICON_MAP = {
  "Raw Bar": "\u{1F9AA}", "Starters": "\u{1F961}", "Soups & Salads": "\u{1F957}",
  "Entr\u00E9es": "\u{1F37D}\uFE0F", "Sushi": "\u{1F363}", "Sushi Rolls": "\u{1F363}",
  "Sides": "\u{1F35F}", "Steaks": "\u{1F969}", "Sauces": "\u{1F958}"
};
function getSectionIcon(section) { return SECTION_ICON_MAP[section] || "\u{1F37D}\uFE0F"; }

let activeTimer = null;

function render() {
  if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
  app.innerHTML = "";
  if (current.view === "home") renderHome();
  else if (current.view === "study-list") renderStudyList();
  else if (current.view === "study-card") renderStudyCard(current.params.wineId);
  else if (current.view === "pairwf-list") renderPairWineFoodList();
  else if (current.view === "pairwf-detail") renderWineDetailWithPairing(current.params.wineId);
  else if (current.view === "pairfw-list") renderPairFoodWineList();
  else if (current.view === "menu-list") renderMenuList();
  else if (current.view === "dish-detail") renderDishDetail(current.params.dishId);
  else if (current.view === "pairing-explain") renderPairingExplain(current.params.wineId, current.params.dishId);
  else if (current.view === "test-me") renderTestMe();
  else if (current.view === "test-me-focus") renderTestMeFocus(current.params.mode);
  else if (current.view === "test-me-run") renderTestMeRun(current.params.mode);
  else if (current.view === "game-room") renderGameRoom();
  else if (current.view === "this-or-that") renderThisOrThat();
  else if (current.view === "this-or-that-focus") renderThisOrThatFocus();
  else if (current.view === "this-or-that-run") renderThisOrThatRun();
  else if (current.view === "imposter") renderImposterSetup();
  else if (current.view === "imposter-run") renderImposter();
  else if (current.view === "somm-says") renderSommSays();
  else if (current.view === "somm-says-run") renderSommSaysRun(current.params.seconds);
  else if (current.view === "match-it") renderMatchIt(current.params.matchType);
  else if (current.view === "match-it-picker") renderMatchItPicker();
  else if (current.view === "cocktail-list") renderCocktailList();
  else if (current.view === "cocktail-detail") renderCocktailDetail(current.params.cocktailId);
  window.scrollTo(0, 0);
}

function header(title, showBack = true) {
  const div = document.createElement("div");
  div.className = "app-header";
  div.innerHTML = `
    ${showBack ? `<button class="back-btn" aria-label="Back">&#8592;</button>` : ""}
    <p class="header-title">${title}</p>
  `;
  if (showBack) div.querySelector(".back-btn").onclick = goBack;
  app.appendChild(div);
}

/* Device-local storage helpers (per-device, no accounts) */
const THEME_KEY = "p131-theme";
const PROGRESS_KEY = "p131-progress";

function getTheme() {
  try { return localStorage.getItem(THEME_KEY) || "light"; } catch (e) { return "light"; }
}
function setTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  document.body.classList.toggle("dark", theme === "dark");
}
function initTheme() { setTheme(getTheme()); }

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch (e) { return {}; }
}
function setWineProgress(wineId, status) {
  const p = getProgress();
  p[wineId] = status;
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function resetProgress() {
  try { localStorage.removeItem(PROGRESS_KEY); } catch (e) {}
}

function wineOfTheDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return WINES[dayOfYear % WINES.length];
}

function randomWine() {
  return WINES[Math.floor(Math.random() * WINES.length)];
}

function renderHome() {
  const hero = document.createElement("div");
  hero.className = "home-hero";
  hero.innerHTML = `
    <button class="theme-toggle" aria-label="Toggle dark mode">${getTheme() === "dark" ? "\u2600\uFE0F" : "\u{1F319}"}</button>
    <svg width="48" height="48" viewBox="0 0 56 56" class="home-stamp">
      <circle cx="28" cy="28" r="24" fill="none" stroke="var(--washi-300)" stroke-width="2"/>
      <circle cx="28" cy="28" r="24" fill="none" stroke="var(--bronze-500)" stroke-width="2.5"/>
      <text x="28" y="34" text-anchor="middle" font-family="Shippori Mincho, serif" font-size="16" fill="var(--shoyu-700)">131</text>
    </svg>
    <p class="home-title">Prime 131 Wines</p>
  `;
  hero.querySelector(".theme-toggle").onclick = () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
    render();
  };
  app.appendChild(hero);

  const wotd = wineOfTheDay();
  const wotdStrip = document.createElement("div");
  wotdStrip.className = "wotd-strip";
  wotdStrip.innerHTML = `
    <div class="wotd-main">
      <p class="wotd-label">&#127863; Wine of the day</p>
      <p class="wotd-name">${wotd.name}</p>
    </div>
    <button class="wotd-shuffle" aria-label="Surprise me with a random wine">&#127922;</button>
  `;
  wotdStrip.querySelector(".wotd-main").onclick = () => go("study-card", { wineId: wotd.id });
  wotdStrip.querySelector(".wotd-shuffle").onclick = (e) => {
    e.stopPropagation();
    go("study-card", { wineId: randomWine().id });
  };
  app.appendChild(wotdStrip);

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = `
    <div class="home-option" data-go="menu">
      <div class="home-icon-circle">&#128220;</div>
      <div class="home-option-text"><p>Food Menu</p><span>Browse the full food menu</span></div>
    </div>
    <div class="home-option" data-go="study">
      <div class="home-icon-circle">&#127863;</div>
      <div class="home-option-text"><p>Wine BTG</p><span>Learn the by-the-glass list</span></div>
    </div>
    <div class="home-option" data-go="cocktails">
      <div class="home-icon-circle">&#127864;</div>
      <div class="home-option-text"><p>Cocktails</p><span>Recipes, builds, and flavor profiles</span></div>
    </div>
    <div class="home-option" data-go="pairwf">
      <div class="home-icon-circle">&#127815;</div>
      <div class="home-option-text"><p>Pair Wine with Food</p><span>Start from the bottle</span></div>
    </div>
    <div class="home-option" data-go="pairfw">
      <div class="home-icon-circle">&#127860;</div>
      <div class="home-option-text"><p>Pair Food with Wine</p><span>Start from the dish</span></div>
    </div>
    <div class="home-option" data-go="gameroom">
      <div class="home-icon-circle">&#127918;</div>
      <div class="home-option-text"><p>Game Room</p><span>Micro-learning games: quiz, match, judgment calls</span></div>
    </div>
  `;
  options.querySelector('[data-go="study"]').onclick = () => go("study-list");
  options.querySelector('[data-go="cocktails"]').onclick = () => go("cocktail-list");
  options.querySelector('[data-go="pairwf"]').onclick = () => go("pairwf-list");
  options.querySelector('[data-go="pairfw"]').onclick = () => go("pairfw-list");
  options.querySelector('[data-go="menu"]').onclick = () => go("menu-list");
  options.querySelector('[data-go="gameroom"]').onclick = () => go("game-room");
  app.appendChild(options);
}

function renderSearchableWineList(onSelect, placeholder) {
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = placeholder || "Search wines";
  wrap.appendChild(input);

  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = WINES.filter(w => w.name.toLowerCase().includes(filter.toLowerCase()));
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
        row.innerHTML = `<span class="list-row-main"><span class="style-dot ${w.style}"></span>${w.name}</span>`;
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

function renderStudyList() {
  header("Wine BTG");
  app.appendChild(renderSearchableWineList(
    (wineId) => go("study-card", { wineId }),
    "Search wines"
  ));
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

  function draw(filter) {
    listWrap.innerHTML = "";
    let filtered = DISHES.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
    if (excludedAllergens.length) {
      filtered = filtered.filter(d => {
        const has = d.allergensInRecipe || [];
        return !excludedAllergens.some(a => has.includes(a));
      });
    }
    const groups = groupBySection(filtered);
    SECTION_ORDER.forEach(section => {
      const dishes = groups[section];
      if (!dishes.length) return;
      const label = document.createElement("p");
      label.className = "section-label";
      label.textContent = section;
      listWrap.appendChild(label);
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
}

function renderCocktailList() {
  header("Cocktails");
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

function findCocktail(id) { return COCKTAILS.find(c => c.id === id); }

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
        <ul class="ingredient-list">${cocktail.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <p class="chefprep-text" style="margin-top:auto;"><b style="color:#D9B98A;">Garnish:</b> ${cocktail.garnish}</p>
      `;
    }
    return `
      <p class="dish-flip-tag">2/2 &middot; tap to flip</p>
      <p class="dish-flip-title">&#127864; Build</p>
      <p class="chefprep-text">${cocktail.directions}</p>
      ${cocktail.prep ? `<p class="chefprep-text" style="margin-top:8px;"><b style="color:#D9B98A;">House prep:</b> ${cocktail.prep}</p>` : ""}
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

function renderNavChips(activeWineId, onSelect) {
  const wrap = document.createElement("div");
  wrap.className = "nav-chips";
  WINES.forEach(w => {
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

  header("Wine BTG");
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

function splitIngredients(text) {
  if (!text) return [];
  const parts = text.split(" | ").flatMap(p => p.split(/\.\s+(?=[A-Z])/));
  return parts.map(p => p.trim().replace(/\.$/, "")).filter(p => p.length > 0);
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
        <ul class="ingredient-list">${ingredientItems.map(i => `<li>${i}</li>`).join("")}</ul>
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

function renderDishDetail(dishId) {
  const dish = findDish(dishId);
  if (!dish) { go("pairfw-list", {}, false); return; }

  header(dish.section);

  const container = document.createElement("div");
  const name = document.createElement("p");
  name.className = "hero-name";
  name.textContent = dish.name;
  container.appendChild(name);

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

/* Test Me — flashcard drill with device-local progress */
function quizPool(mode, focus) {
  if (mode === "food") {
    let pool = DISHES.filter(d => d.quizClue);
    if (focus && focus !== "all") pool = pool.filter(d => d.section === focus);
    return pool;
  }
  if (mode === "mixed") {
    return [...WINES, ...DISHES.filter(d => d.quizClue)];
  }
  let pool = WINES;
  if (focus && focus !== "all") pool = pool.filter(w => w.style === focus);
  return pool;
}

function isWineItem(item) { return item.id.charAt(0) === "w" && /^\d+$/.test(item.id.slice(1)); }

let testQueues = {};
function queueKey(mode, focus) { return mode === "mixed" ? "mixed" : mode + ":" + (focus || "all"); }

function buildTestQueue(mode, focus) {
  const progress = getProgress();
  const learning = [], unseen = [], known = [];
  quizPool(mode, focus).forEach(item => {
    const status = progress[item.id];
    if (status === "learning") learning.push(item.id);
    else if (status === "known") known.push(item.id);
    else unseen.push(item.id);
  });
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  return [...shuffle(learning), ...shuffle(unseen), ...shuffle(known)];
}

let speedPref = { testme: false, match: false };

function speedToggleRow(prefKey, label) {
  const row = document.createElement("div");
  row.className = "speed-toggle" + (speedPref[prefKey] ? " active" : "");
  row.innerHTML = `<span class="speed-icon">&#9889;</span><span class="speed-text">${label}</span><span class="speed-state">${speedPref[prefKey] ? "ON" : "OFF"}</span>`;
  row.onclick = () => {
    speedPref[prefKey] = !speedPref[prefKey];
    render();
  };
  return row;
}

function renderTestMe() {
  header("Quiz tool");

  const intro = document.createElement("p");
  intro.className = "testme-counter";
  intro.textContent = "What do you want to be tested on?";
  app.appendChild(intro);

  app.appendChild(speedToggleRow("testme", "Speed round \u00b7 60 seconds, score as many as you can"));

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = `
    <div class="home-option" data-go="wine">
      <div class="home-icon-circle">&#127863;</div>
      <div class="home-option-text"><p>Wine</p><span>Guess the wine from its profile</span></div>
    </div>
    <div class="home-option" data-go="food">
      <div class="home-icon-circle">&#127860;</div>
      <div class="home-option-text"><p>Food</p><span>Guess the dish from its description</span></div>
    </div>
    <div class="home-option" data-go="mixed">
      <div class="home-icon-circle">&#128260;</div>
      <div class="home-option-text"><p>Mixed</p><span>Wine and food shuffled together</span></div>
    </div>
  `;
  options.querySelector('[data-go="wine"]').onclick = () => go("test-me-focus", { mode: "wine" });
  options.querySelector('[data-go="food"]').onclick = () => go("test-me-focus", { mode: "food" });
  options.querySelector('[data-go="mixed"]').onclick = () => go("test-me-run", { mode: "mixed" });
  app.appendChild(options);
}

function renderTestMeFocus(mode) {
  header("Quiz tool");

  const intro = document.createElement("p");
  intro.className = "testme-counter";
  intro.textContent = mode === "food" ? "Focus on one section, or test the whole menu" : "Focus on one style, or test the whole list";
  app.appendChild(intro);

  const options = document.createElement("div");
  options.className = "home-options";

  const allOpt = document.createElement("div");
  allOpt.className = "home-option";
  allOpt.innerHTML = `
    <div class="home-icon-circle">&#127760;</div>
    <div class="home-option-text"><p>${mode === "food" ? "All dishes" : "All wines"}</p><span>Everything in the pool</span></div>
  `;
  allOpt.onclick = () => go("test-me-run", { mode, focus: "all" });
  options.appendChild(allOpt);

  const categories = mode === "food"
    ? SECTION_ORDER.filter(s => DISHES.some(d => d.section === s && d.quizClue))
    : STYLE_ORDER.filter(s => WINES.some(w => w.style === s));

  categories.forEach(cat => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    const label = mode === "food" ? cat : STYLE_LABELS[cat];
    const icon = mode === "food" ? getSectionIcon(cat) : "\u{1F377}";
    opt.innerHTML = `
      <div class="home-icon-circle">${icon}</div>
      <div class="home-option-text"><p>${label}</p><span>Just this ${mode === "food" ? "section" : "style"}</span></div>
    `;
    opt.onclick = () => go("test-me-run", { mode, focus: cat });
    options.appendChild(opt);
  });

  app.appendChild(options);
}

function renderTestMeRun(mode) {
  mode = ["food", "mixed"].includes(mode) ? mode : "wine";
  const focus = current.params.focus || "all";
  header("Quiz tool");

  const isSpeed = speedPref.testme;
  const qKey = queueKey(mode, focus);

  if (!testQueues[qKey] || !testQueues[qKey].length) testQueues[qKey] = buildTestQueue(mode, focus);
  const itemId = testQueues[qKey][0];
  const isFood = mode === "mixed" ? itemId.startsWith("d-") : mode === "food";
  const item = isFood ? findDish(itemId) : findWine(itemId);
  if (!item) { testQueues[qKey] = []; go("test-me", {}, false); return; }
  const pool = quizPool(mode, focus);
  const progress = getProgress();
  const knownCount = pool.filter(x => progress[x.id] === "known").length;

  if (isSpeed) {
    if (typeof current.params.score !== "number") {
      current.params.score = 0;
      current.params.endsAt = Date.now() + 60000;
    }
    const remaining = Math.max(0, current.params.endsAt - Date.now());
    if (remaining <= 0) {
      renderSpeedEnd(mode, current.params.score);
      return;
    }
    const timerWrap = document.createElement("div");
    timerWrap.className = "timer-wrap";
    timerWrap.innerHTML = `
      <div class="timer-row"><span class="timer-score">&#9889; Score: ${current.params.score}</span><span class="timer-count">${Math.ceil(remaining / 1000)}s</span></div>
      <div class="timer-track"><div class="timer-fill" style="width:${(remaining / 60000) * 100}%;"></div></div>
    `;
    app.appendChild(timerWrap);
    activeTimer = setInterval(() => {
      const left = Math.max(0, current.params.endsAt - Date.now());
      const countEl = timerWrap.querySelector(".timer-count");
      const fillEl = timerWrap.querySelector(".timer-fill");
      if (countEl) countEl.textContent = Math.ceil(left / 1000) + "s";
      if (fillEl) fillEl.style.width = (left / 60000) * 100 + "%";
      if (left <= 0) {
        clearInterval(activeTimer); activeTimer = null;
        renderSpeedEnd(mode, current.params.score);
      }
    }, 250);
  } else {
    const counter = document.createElement("p");
    counter.className = "testme-counter";
    counter.textContent = `${knownCount} of ${pool.length} marked as known`;
    app.appendChild(counter);
  }

  const card = document.createElement("div");
  card.className = "testme-card";
  let phase = "clue"; // clue -> predicting -> revealed (predicting skipped in speed mode)
  let predicted = null;

  function clueBlockHTML() {
    if (isFood) {
      return `
        <p class="dish-flip-tag">Guess the dish &middot; tap to ${isSpeed ? "reveal" : "continue"}</p>
        <p class="face-h3" style="margin-top:8px;"><span class="ic">&#128269;</span> Clues</p>
        <p class="face-desc" style="margin-bottom:10px;">${getSectionIcon(item.section)} ${item.section}</p>
        <p class="chefprep-text">${item.quizClue}</p>
      `;
    }
    return `
      <p class="dish-flip-tag">Guess the wine &middot; tap to ${isSpeed ? "reveal" : "continue"}</p>
      <p class="face-h3" style="margin-top:8px;"><span class="ic">&#128269;</span> Clues</p>
      <p class="face-desc" style="margin-bottom:10px;">${STYLE_LABELS[item.style]} &middot; ${item.region}</p>
      <div class="flavor-grid">${item.flavorTags.map(t => `<div class="flavor-item"><div class="icon">${getFlavorIcon(t)}</div><p>${t}</p></div>`).join("")}</div>
      ${structureBars(item.structure)}
    `;
  }

  function answerBlockHTML() {
    const connector = `<div class="answer-connector"><span>&#8595;</span></div>`;
    if (isFood) {
      return `
        ${connector}
        <p class="dish-flip-tag">That's&hellip;</p>
        <p class="testme-answer-name">${item.name}</p>
        <p class="face-desc">${item.section}</p>
        <p class="face-desc" style="margin-top:12px; color:var(--bronze-500);">Swipe right if you knew it, left if you're still learning &mdash; or use the buttons below.</p>
      `;
    }
    return `
      ${connector}
      <p class="dish-flip-tag">That's&hellip;</p>
      <p class="testme-answer-name">${item.name}</p>
      <p class="face-desc">${item.grape}</p>
      <p class="face-desc">Producer: ${item.producer}</p>
      <p class="face-desc" style="margin-top:12px; color:var(--bronze-500);">Swipe right if you knew it, left if you're still learning &mdash; or use the buttons below.</p>
    `;
  }

  const inner = document.createElement("div");
  inner.className = "dish-flip-inner";
  const clueBlock = document.createElement("div");
  clueBlock.className = "clue-block";
  clueBlock.innerHTML = clueBlockHTML();
  const answerBlock = document.createElement("div");
  answerBlock.className = "answer-block";
  answerBlock.style.display = "none";
  inner.appendChild(clueBlock);
  inner.appendChild(answerBlock);
  card.appendChild(inner);

  function reveal() {
    phase = "revealed";
    answerBlock.innerHTML = answerBlockHTML();
    answerBlock.style.display = "block";
    btnRow.style.display = "flex";
  }

  const predictRow = document.createElement("div");
  predictRow.className = "predict-row";
  predictRow.style.display = "none";
  predictRow.innerHTML = `
    <button class="predict-btn predict-unsure">Not sure</button>
    <button class="predict-btn predict-know">I know this</button>
  `;
  predictRow.querySelector(".predict-unsure").onclick = (e) => { e.stopPropagation(); predicted = false; predictRow.style.display = "none"; reveal(); };
  predictRow.querySelector(".predict-know").onclick = (e) => { e.stopPropagation(); predicted = true; predictRow.style.display = "none"; reveal(); };

  card.onclick = () => {
    if (phase === "clue") {
      if (isSpeed) { reveal(); return; }
      phase = "predicting";
      predictRow.style.display = "flex";
      return;
    }
  };

  function calibrationMessage(pred, status) {
    if (pred === true && status === "known") return { cls: "cal-good", text: "&#10003; Nailed it \u2014 you called that." };
    if (pred === true && status === "learning") return { cls: "cal-warn", text: "Worth another look \u2014 you were more sure than it turned out." };
    if (pred === false && status === "known") return { cls: "cal-good", text: "You knew more than you gave yourself credit for." };
    return { cls: "cal-neutral", text: "Fair call \u2014 flagged for review." };
  }

  function advance(status) {
    setWineProgress(item.id, status);
    const doFinalize = () => {
      testQueues[qKey].shift();
      if (status === "learning") testQueues[qKey].push(item.id);
      if (!testQueues[qKey].length) testQueues[qKey] = buildTestQueue(mode, focus);
      if (isSpeed) {
        if (status === "known") current.params.score++;
        render();
        return;
      }
      const updated = getProgress();
      const allKnown = pool.every(x => updated[x.id] === "known");
      if (allKnown && markMilestone("testme-" + mode + "-" + focus + "-complete")) {
        celebrate();
        setTimeout(() => render(), 1200);
        return;
      }
      render();
    };
    if (!isSpeed && predicted !== null) {
      const msg = calibrationMessage(predicted, status);
      const toast = document.createElement("div");
      toast.className = "calibration-toast " + msg.cls;
      toast.textContent = msg.text;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1400);
      setTimeout(doFinalize, 500);
    } else {
      doFinalize();
    }
  }

  /* Swipe with live drag feedback: card follows the finger, tilts, and hints
     the direction; snaps back if released before the threshold. */
  let touchStartX = null;
  let dragging = false;
  card.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    dragging = false;
  }, { passive: true });
  card.addEventListener("touchmove", (e) => {
    if (phase !== "revealed" || touchStartX === null) return;
    const dx = e.touches[0].clientX - touchStartX;
    if (Math.abs(dx) > 8) dragging = true;
    if (!dragging) return;
    inner.style.transition = "none";
    inner.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
    inner.classList.toggle("drag-right", dx > 40);
    inner.classList.toggle("drag-left", dx < -40);
  }, { passive: true });
  card.addEventListener("touchend", (e) => {
    if (phase !== "revealed" || touchStartX === null) { touchStartX = null; return; }
    const dx = e.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (dx > 60) {
      inner.style.transition = "transform 0.25s ease";
      inner.style.transform = `translateX(120%) rotate(12deg)`;
      setTimeout(() => advance("known"), 220);
    } else if (dx < -60) {
      inner.style.transition = "transform 0.25s ease";
      inner.style.transform = `translateX(-120%) rotate(-12deg)`;
      setTimeout(() => advance("learning"), 220);
    } else {
      inner.style.transition = "transform 0.25s ease";
      inner.style.transform = "translateX(0) rotate(0)";
      inner.classList.remove("drag-right", "drag-left");
    }
  });

  app.appendChild(card);
  app.appendChild(predictRow);

  const btnRow = document.createElement("div");
  btnRow.className = "card-footer-nav";
  btnRow.style.display = "none";
  const learningBtn = document.createElement("button");
  learningBtn.className = "footer-btn";
  learningBtn.textContent = "\u2190 Still learning";
  learningBtn.onclick = () => advance("learning");
  const knownBtn = document.createElement("button");
  knownBtn.className = "footer-btn footer-btn-home";
  knownBtn.textContent = "Got it \u2192";
  knownBtn.onclick = () => advance("known");
  btnRow.appendChild(learningBtn);
  btnRow.appendChild(knownBtn);
  app.appendChild(btnRow);

  const resetLink = document.createElement("p");
  resetLink.className = "testme-reset";
  resetLink.textContent = "Reset my progress";
  resetLink.onclick = () => {
    resetProgress();
    testQueues = {};
    render();
  };
  app.appendChild(resetLink);
}

/* ---------- Game Room ---------- */

const MILESTONE_KEY = "p131-milestones";
function getMilestones() {
  try { return JSON.parse(localStorage.getItem(MILESTONE_KEY)) || {}; } catch (e) { return {}; }
}
function markMilestone(key) {
  const m = getMilestones();
  if (m[key]) return false;
  m[key] = true;
  try { localStorage.setItem(MILESTONE_KEY, JSON.stringify(m)); } catch (e) {}
  return true;
}

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

function renderGameRoom() {
  header("Game Room");

  const progress = getProgress();
  const wineKnown = WINES.filter(w => progress[w.id] === "known").length;
  const foodPool = quizPool("food");
  const foodKnown = foodPool.filter(d => progress[d.id] === "known").length;

  const status = document.createElement("div");
  status.className = "milestone-strip";
  status.innerHTML = `
    <p class="milestone-line">&#127942; Wines known: ${wineKnown}/${WINES.length} &middot; Dishes known: ${foodKnown}/${foodPool.length}</p>
  `;
  app.appendChild(status);

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = `
    <div class="home-option" data-go="testme">
      <div class="home-icon-circle">&#127919;</div>
      <div class="home-option-text"><p>Test Me</p><span>Guess the wine or dish, track what you know</span></div>
    </div>
    <div class="home-option" data-go="thisorthat">
      <div class="home-icon-circle">&#9878;&#65039;</div>
      <div class="home-option-text"><p>This or That</p><span>Two real options, one call &mdash; train your judgment</span></div>
    </div>
    <div class="home-option" data-go="matchit">
      <div class="home-icon-circle">&#127183;</div>
      <div class="home-option-text"><p>Match It</p><span>Flip and match wines to regions, flavors, and pairings</span></div>
    </div>
    <div class="home-option" data-go="imposter">
      <div class="home-icon-circle">&#128373;&#65039;</div>
      <div class="home-option-text"><p>Imposter</p><span>Three belong together &mdash; one doesn't. Find it.</span></div>
    </div>
    <div class="home-option" data-go="sommsays">
      <div class="home-icon-circle">&#9889;</div>
      <div class="home-option-text"><p>Sommelier Says</p><span>Rapid-fire true or false, against the clock</span></div>
    </div>
  `;
  options.querySelector('[data-go="testme"]').onclick = () => go("test-me");
  options.querySelector('[data-go="thisorthat"]').onclick = () => go("this-or-that");
  options.querySelector('[data-go="matchit"]').onclick = () => go("match-it-picker");
  options.querySelector('[data-go="imposter"]').onclick = () => go("imposter");
  options.querySelector('[data-go="sommsays"]').onclick = () => go("somm-says");
  app.appendChild(options);
}

/* ---------- This or That: judgment calls from real pairings ---------- */

/* This or That: dedicated progress store (a different skill than Test Me's recall) */
const TOT_PROGRESS_KEY = "p131-tot-progress";
function getTotProgress() {
  try { return JSON.parse(localStorage.getItem(TOT_PROGRESS_KEY)) || {}; } catch (e) { return {}; }
}
function setTotProgress(dishId, status) {
  const p = getTotProgress();
  p[dishId] = status;
  try { localStorage.setItem(TOT_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}

let totPref = { difficulty: "easy", rounds: 10 };
let totQueues = {};

function totPool(focus) {
  let pool = DISHES.filter(d => d.pairedWineIds && d.pairedWineIds.length >= 2);
  if (focus && focus !== "all") pool = pool.filter(d => d.section === focus);
  return pool;
}

function structDist(a, b) {
  const s1 = a.structure, s2 = b.structure;
  return Math.abs(s1.tannin - s2.tannin) + Math.abs(s1.acidity - s2.acidity) + Math.abs(s1.body - s2.body) + Math.abs(s1.alcohol - s2.alcohol);
}

function buildTotQueue(focus) {
  const progress = getTotProgress();
  const learning = [], unseen = [], known = [];
  totPool(focus).forEach(d => {
    const status = progress[d.id];
    if (status === "learning") learning.push(d.id);
    else if (status === "known") known.push(d.id);
    else unseen.push(d.id);
  });
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  return [...shuffle(learning), ...shuffle(unseen), ...shuffle(known)];
}

function buildThisOrThatRound(dish, difficulty) {
  const correctWine = findWine(dish.pairedWineIds[0]);
  const sameStyle = WINES.filter(w => !dish.pairedWineIds.includes(w.id) && w.style === correctWine.style);
  const pool = sameStyle.length ? sameStyle : WINES.filter(w => !dish.pairedWineIds.includes(w.id));
  const sorted = [...pool].sort((a, b) =>
    difficulty === "hard"
      ? structDist(a, correctWine) - structDist(b, correctWine)
      : structDist(b, correctWine) - structDist(a, correctWine)
  );
  const distractor = sorted[0] || pool[Math.floor(Math.random() * pool.length)];
  return { dish, correctWine, distractor };
}

function contrastReason(correctWine, distractorWine) {
  const trait = getDominantTrait(correctWine);
  const dVal = distractorWine.structure[trait.trait];
  const cVal = correctWine.structure[trait.trait];
  const lack = {
    tannin: `${distractorWine.name} doesn't have enough tannin to cut through the richness here the way ${correctWine.name} does.`,
    acidity: `${distractorWine.name}'s acidity isn't bright enough to keep up with this dish the way ${correctWine.name}'s does.`,
    body: `${distractorWine.name} is too light on its own to stand up to this dish the way ${correctWine.name} does.`
  };
  const excess = {
    tannin: `${distractorWine.name}'s tannin would actually overpower this dish rather than complement it &mdash; more grip than this needs.`,
    acidity: `${distractorWine.name} is sharper than this dish calls for, cutting against flavors that don't need cutting.`,
    body: `${distractorWine.name} is heavier than this dish can support &mdash; it would bury the more delicate parts of the plate.`
  };
  if (dVal < cVal) return lack[trait.trait] || `${distractorWine.name} doesn't have quite the structure this dish is asking for.`;
  if (dVal > cVal) return excess[trait.trait] || `${distractorWine.name} brings more structure than this dish is actually asking for.`;
  return `${distractorWine.name} is close in style, but ${correctWine.name} still has the edge on real flavor affinity with this dish.`;
}

function totToggleRow() {
  const row = document.createElement("div");
  row.className = "speed-toggle" + (totPref.difficulty === "hard" ? " active" : "");
  row.innerHTML = `<span class="speed-icon">&#9878;&#65039;</span><span class="speed-text">Difficulty: ${totPref.difficulty === "hard" ? "Hard \u2014 closest structural match" : "Easy \u2014 obvious mismatch"}</span><span class="speed-state">${totPref.difficulty === "hard" ? "HARD" : "EASY"}</span>`;
  row.onclick = () => {
    totPref.difficulty = totPref.difficulty === "hard" ? "easy" : "hard";
    render();
  };
  return row;
}

function renderThisOrThat() {
  header("This or That");

  const progress = getTotProgress();
  const allPool = totPool("all");
  const knownCount = allPool.filter(d => progress[d.id] === "known").length;
  const status = document.createElement("p");
  status.className = "testme-counter";
  status.textContent = `${knownCount} of ${allPool.length} judgment calls mastered`;
  app.appendChild(status);

  app.appendChild(totToggleRow());

  const roundsLabel = document.createElement("p");
  roundsLabel.className = "testme-counter";
  roundsLabel.textContent = "How many rounds?";
  app.appendChild(roundsLabel);

  const options = document.createElement("div");
  options.className = "home-options";
  [5, 10, 15].forEach(n => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    opt.innerHTML = `
      <div class="home-icon-circle">&#9878;&#65039;</div>
      <div class="home-option-text"><p>${n} rounds</p><span>${n <= 5 ? "Quick session" : n <= 10 ? "The standard" : "Full focus session"}</span></div>
    `;
    opt.onclick = () => { totPref.rounds = n; go("this-or-that-focus"); };
    options.appendChild(opt);
  });
  app.appendChild(options);
}

function renderThisOrThatFocus() {
  header("This or That");

  const intro = document.createElement("p");
  intro.className = "testme-counter";
  intro.textContent = "Focus on one section, or test the whole menu";
  app.appendChild(intro);

  const options = document.createElement("div");
  options.className = "home-options";

  const allOpt = document.createElement("div");
  allOpt.className = "home-option";
  allOpt.innerHTML = `<div class="home-icon-circle">&#127760;</div><div class="home-option-text"><p>All dishes</p><span>Everything in the pool</span></div>`;
  allOpt.onclick = () => go("this-or-that-run", { focus: "all" });
  options.appendChild(allOpt);

  const categories = SECTION_ORDER.filter(s => totPool(s).length >= 1);
  categories.forEach(cat => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    opt.innerHTML = `<div class="home-icon-circle">${getSectionIcon(cat)}</div><div class="home-option-text"><p>${cat}</p><span>Just this section</span></div>`;
    opt.onclick = () => go("this-or-that-run", { focus: cat });
    options.appendChild(opt);
  });
  app.appendChild(options);
}

function renderThisOrThatRun() {
  const focus = current.params.focus || "all";
  const qKey = focus;
  header("This or That");

  if (typeof current.params.roundNum !== "number") {
    current.params.roundNum = 1;
    current.params.correct = 0;
  }
  if (!totQueues[qKey] || !totQueues[qKey].length) totQueues[qKey] = buildTotQueue(focus);

  if (current.params.roundNum > totPref.rounds) {
    renderTotEnd(focus, current.params.correct, totPref.rounds);
    return;
  }

  const dishId = totQueues[qKey][0];
  const dish = findDish(dishId);
  if (!dish) { totQueues[qKey] = []; go("game-room", {}, false); return; }
  const round = buildThisOrThatRound(dish, totPref.difficulty);
  const { correctWine, distractor } = round;
  const options = Math.random() < 0.5 ? [correctWine, distractor] : [distractor, correctWine];

  const progressLine = document.createElement("p");
  progressLine.className = "testme-counter";
  progressLine.textContent = `Round ${current.params.roundNum} of ${totPref.rounds} \u00b7 ${current.params.correct} correct so far`;
  app.appendChild(progressLine);

  const prompt = document.createElement("div");
  prompt.innerHTML = `
    <p class="testme-counter">A guest orders the&hellip;</p>
    <p class="hero-name" style="text-align:center; margin-bottom:4px;">${dish.name}</p>
    <p class="hero-meta" style="text-align:center; margin-bottom:16px;">${dish.dropLine || dish.description || ""}</p>
    <p class="testme-counter">Which pour do you reach for?</p>
  `;
  app.appendChild(prompt);

  const optWrap = document.createElement("div");
  optWrap.className = "home-options";

  const explain = document.createElement("div");
  explain.className = "tot-explain";
  explain.style.display = "none";

  options.forEach(wine => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    opt.innerHTML = `
      <div class="home-icon-circle">${wine.style === "sake" ? "\u{1F376}" : wine.style === "sparkling" ? "\u{1F942}" : "\u{1F377}"}</div>
      <div class="home-option-text"><p>${wine.name}</p><span>${wine.grape}</span></div>
    `;
    opt.onclick = () => {
      if (explain.style.display !== "none") return;
      const isCorrect = wine.id === correctWine.id;
      opt.classList.add(isCorrect ? "tot-correct" : "tot-wrong");
      setTotProgress(dish.id, isCorrect ? "known" : "learning");
      if (isCorrect) current.params.correct++;
      const reason = pairingReason(correctWine, dish);
      explain.innerHTML = `
        <p class="tot-verdict">${isCorrect ? "&#9989; That's the one." : `&#10060; The stronger call is <b>${correctWine.name}</b>.`}</p>
        <p class="pairing-reason">${reason.text}</p>
        <p class="tot-contrast-label">Why not the ${distractor.name}?</p>
        <p class="pairing-reason tot-contrast">${contrastReason(correctWine, distractor)}</p>
        <button class="footer-btn footer-btn-home tot-next">Next round &rarr;</button>
      `;
      explain.style.display = "block";
      explain.querySelector(".tot-next").onclick = () => {
        totQueues[qKey].shift();
        if (!isCorrect) totQueues[qKey].push(dish.id);
        if (!totQueues[qKey].length) totQueues[qKey] = buildTotQueue(focus);
        current.params.roundNum++;
        render();
      };
    };
    optWrap.appendChild(opt);
  });

  app.appendChild(optWrap);
  app.appendChild(explain);
}

function renderTotEnd(focus, correct, total) {
  app.innerHTML = "";
  header("This or That");
  const bestKey = "p131-best-tot-" + totPref.difficulty + "-" + total;
  let best = 0;
  try { best = parseInt(localStorage.getItem(bestKey)) || 0; } catch (e) {}
  const isRecord = correct > best;
  if (isRecord) {
    try { localStorage.setItem(bestKey, String(correct)); } catch (e) {}
    celebrate();
  }
  const progress = getTotProgress();
  const pool = totPool(focus);
  if (pool.length && pool.every(d => progress[d.id] === "known")) {
    markMilestone("tot-" + focus + "-complete");
  }

  const wrap = document.createElement("div");
  wrap.className = "speed-end";
  wrap.innerHTML = `
    <p class="speed-end-icon">&#9878;&#65039;</p>
    <p class="speed-end-score">${correct}<span class="speed-end-total">/${total}</span></p>
    <p class="speed-end-label">correct calls &middot; ${totPref.difficulty} difficulty</p>
    <p class="speed-end-best">${isRecord ? "&#127942; New personal best!" : `Personal best (${totPref.difficulty}, ${total} rounds): ${best}`}</p>
  `;
  app.appendChild(wrap);

  const btnRow = document.createElement("div");
  btnRow.className = "card-footer-nav";
  const againBtn = document.createElement("button");
  againBtn.className = "footer-btn footer-btn-home";
  againBtn.textContent = "Run it back \u2696\ufe0f";
  againBtn.onclick = () => go("this-or-that-run", { focus });
  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "Game Room";
  backBtn.onclick = () => go("game-room");
  btnRow.appendChild(backBtn);
  btnRow.appendChild(againBtn);
  app.appendChild(btnRow);
}

/* ---------- Match It: memory matching with rotating or chosen types ---------- */

const MATCH_TYPES = [
  { id: "region", label: "Wine \u2194 Region", icon: "\u{1F5FA}\uFE0F" },
  { id: "flavor", label: "Wine \u2194 Flavor", icon: "\u{1F347}" },
  { id: "pairing", label: "Wine \u2194 Dish", icon: "\u{1F37D}\uFE0F" },
  { id: "food", label: "Dish \u2194 Allergen", icon: "\u26A0\uFE0F" }
];
const MATCH_DIFFICULTIES = [
  { pairs: 3, label: "3 pairs", sub: "Warm-up" },
  { pairs: 4, label: "4 pairs", sub: "Standard" },
  { pairs: 6, label: "6 pairs", sub: "Full board" }
];

/* Dedicated progress store: matching is a recognition/association skill, distinct from recall (Test Me) or judgment (This or That) */
const MATCH_PROGRESS_KEY = "p131-match-progress";
function getMatchProgress() {
  try { return JSON.parse(localStorage.getItem(MATCH_PROGRESS_KEY)) || {}; } catch (e) { return {}; }
}
function setMatchProgress(itemId, status) {
  const p = getMatchProgress();
  p[itemId] = status;
  try { localStorage.setItem(MATCH_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}

let matchPref = { pairs: 4 };

function matchEligiblePool(typeId) {
  if (typeId === "pairing") return WINES.filter(w => w.pairingDishIds.length);
  if (typeId === "food") return DISHES.filter(d => d.quizClue && d.allergensInRecipe && d.allergensInRecipe.length);
  return WINES;
}

function renderMatchItPicker() {
  header("Match It");

  const progress = getMatchProgress();
  const allWines = WINES.filter(w => progress[w.id] === "known").length;
  const status = document.createElement("p");
  status.className = "testme-counter";
  status.textContent = `${allWines} of ${WINES.length} wines matched clean (no mistakes)`;
  app.appendChild(status);

  const diffLabel = document.createElement("p");
  diffLabel.className = "testme-counter";
  diffLabel.textContent = "Board size";
  app.appendChild(diffLabel);

  const diffRow = document.createElement("div");
  diffRow.className = "home-options";
  MATCH_DIFFICULTIES.forEach(d => {
    const opt = document.createElement("div");
    opt.className = "home-option" + (matchPref.pairs === d.pairs ? " tot-correct" : "");
    opt.innerHTML = `<div class="home-icon-circle">&#127183;</div><div class="home-option-text"><p>${d.label}</p><span>${d.sub}</span></div>`;
    opt.onclick = () => { matchPref.pairs = d.pairs; render(); };
    diffRow.appendChild(opt);
  });
  app.appendChild(diffRow);

  const intro = document.createElement("p");
  intro.className = "testme-counter";
  intro.textContent = "Pick a match type, or let it rotate";
  app.appendChild(intro);

  const options = document.createElement("div");
  options.className = "home-options";
  const rotate = document.createElement("div");
  rotate.className = "home-option";
  rotate.innerHTML = `
    <div class="home-icon-circle">&#128256;</div>
    <div class="home-option-text"><p>Rotate</p><span>A different match type every round</span></div>
  `;
  rotate.onclick = () => go("match-it", { matchType: "rotate" });
  options.appendChild(rotate);

  MATCH_TYPES.forEach(t => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    opt.innerHTML = `
      <div class="home-icon-circle">${t.icon}</div>
      <div class="home-option-text"><p>${t.label}</p><span>Match only this type</span></div>
    `;
    opt.onclick = () => go("match-it", { matchType: t.id });
    options.appendChild(opt);
  });
  app.appendChild(options);
}

function buildMatchPairs(typeId, count) {
  const progress = getMatchProgress();
  const pool = matchEligiblePool(typeId);
  const learning = [], unseen = [], known = [];
  pool.forEach(item => {
    const status = progress[item.id];
    if (status === "learning") learning.push(item);
    else if (status === "known") known.push(item);
    else unseen.push(item);
  });
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const ordered = [...shuffle(learning), ...shuffle(unseen), ...shuffle(known)];

  const pairs = [];
  for (const item of ordered) {
    if (pairs.length >= count) break;
    if (typeId === "region") {
      pairs.push({ a: item.name, b: item.region, key: item.id });
    } else if (typeId === "flavor") {
      pairs.push({ a: item.name, b: item.flavorTags[0], key: item.id });
    } else if (typeId === "food") {
      const allergen = item.allergensInRecipe[0];
      pairs.push({ a: item.name, b: allergen.charAt(0).toUpperCase() + allergen.slice(1), key: item.id });
    } else {
      const dish = findDish(item.pairingDishIds[Math.floor(Math.random() * item.pairingDishIds.length)]);
      if (!dish) continue;
      pairs.push({ a: item.name, b: dish.name, key: item.id });
    }
  }
  return pairs;
}

function renderMatchIt(matchType) {
  const typeId = (matchType === "rotate" || !matchType)
    ? MATCH_TYPES[Math.floor(Math.random() * MATCH_TYPES.length)].id
    : matchType;
  const typeDef = MATCH_TYPES.find(t => t.id === typeId);
  const pairCount = matchPref.pairs;

  header("Match It");

  const label = document.createElement("p");
  label.className = "testme-counter";
  label.innerHTML = `${typeDef.icon} ${typeDef.label} &middot; ${pairCount} pairs`;
  app.appendChild(label);

  const moveCounter = document.createElement("p");
  moveCounter.className = "testme-counter";
  let moves = 0;
  let mistakes = 0;
  moveCounter.textContent = "0 moves";
  app.appendChild(moveCounter);

  const pairs = buildMatchPairs(typeId, pairCount);
  const mistakenKeys = new Set();
  let tiles = [];
  pairs.forEach(p => {
    tiles.push({ text: p.a, key: p.key, side: "a" });
    tiles.push({ text: p.b, key: p.key, side: "b" });
  });
  tiles.sort(() => Math.random() - 0.5);

  const grid = document.createElement("div");
  grid.className = "match-grid";
  let firstPick = null;
  let lock = false;
  let matchedCount = 0;

  tiles.forEach(t => {
    const tile = document.createElement("button");
    tile.className = "match-tile";
    tile.textContent = t.text;
    tile.dataset.key = t.key;
    tile.onclick = () => {
      if (lock || tile.classList.contains("matched") || tile === firstPick) return;
      tile.classList.add("picked");
      if (!firstPick) {
        firstPick = tile;
        return;
      }
      lock = true;
      moves++;
      moveCounter.textContent = moves + (moves === 1 ? " move" : " moves");
      if (firstPick.dataset.key === tile.dataset.key) {
        firstPick.classList.remove("picked");
        tile.classList.remove("picked");
        firstPick.classList.add("matched");
        tile.classList.add("matched");
        setMatchProgress(tile.dataset.key, mistakenKeys.has(tile.dataset.key) ? "learning" : "known");
        matchedCount++;
        firstPick = null;
        lock = false;
        if (matchedCount === pairs.length) {
          setTimeout(() => renderMatchEnd(typeId, pairCount, moves, mistakes), 500);
        }
      } else {
        mistakes++;
        mistakenKeys.add(firstPick.dataset.key);
        mistakenKeys.add(tile.dataset.key);
        setTimeout(() => {
          firstPick.classList.remove("picked");
          tile.classList.remove("picked");
          firstPick = null;
          lock = false;
        }, 650);
      }
    };
    grid.appendChild(tile);
  });

  app.appendChild(grid);
}

function renderMatchEnd(typeId, pairCount, moves, mistakes) {
  app.innerHTML = "";
  header("Match It");
  const bestKey = "p131-best-match-" + typeId + "-" + pairCount;
  let best = null;
  try { const v = localStorage.getItem(bestKey); best = v ? parseInt(v) : null; } catch (e) {}
  const isRecord = best === null || moves < best;
  if (isRecord) {
    try { localStorage.setItem(bestKey, String(moves)); } catch (e) {}
    celebrate();
  }
  markMilestone("match-" + typeId + "-" + pairCount + "-cleared");

  const wrap = document.createElement("div");
  wrap.className = "speed-end";
  wrap.innerHTML = `
    <p class="speed-end-icon">&#127183;</p>
    <p class="speed-end-score">${moves}</p>
    <p class="speed-end-label">moves \u00b7 ${mistakes} mismatch${mistakes === 1 ? "" : "es"}</p>
    <p class="speed-end-best">${isRecord ? "&#127942; New personal best!" : `Personal best: ${best} moves`}</p>
  `;
  app.appendChild(wrap);

  const btnRow = document.createElement("div");
  btnRow.className = "card-footer-nav";
  const againBtn = document.createElement("button");
  againBtn.className = "footer-btn footer-btn-home";
  againBtn.textContent = "Play again \u2192";
  againBtn.onclick = () => go("match-it", { matchType: typeId });
  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "Game Room";
  backBtn.onclick = () => go("game-room");
  btnRow.appendChild(backBtn);
  btnRow.appendChild(againBtn);
  app.appendChild(btnRow);
}

/* ---------- Speed round end screen ---------- */

function renderSpeedEnd(mode, score) {
  app.innerHTML = "";
  header("Quiz tool");
  const bestKey = "p131-best-speed-" + mode;
  let best = 0;
  try { best = parseInt(localStorage.getItem(bestKey)) || 0; } catch (e) {}
  const isRecord = score > best;
  if (isRecord) {
    try { localStorage.setItem(bestKey, String(score)); } catch (e) {}
    celebrate();
  }

  const wrap = document.createElement("div");
  wrap.className = "speed-end";
  wrap.innerHTML = `
    <p class="speed-end-icon">&#9889;</p>
    <p class="speed-end-score">${score}</p>
    <p class="speed-end-label">${mode === "food" ? "dishes" : mode === "mixed" ? "items" : "wines"} nailed in 60 seconds</p>
    <p class="speed-end-best">${isRecord ? "&#127942; New personal best!" : `Personal best: ${best}`}</p>
  `;
  app.appendChild(wrap);

  const btnRow = document.createElement("div");
  btnRow.className = "card-footer-nav";
  const againBtn = document.createElement("button");
  againBtn.className = "footer-btn footer-btn-home";
  againBtn.textContent = "Run it back \u26A1";
  againBtn.onclick = () => go("test-me-run", { mode });
  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "Game Room";
  backBtn.onclick = () => go("game-room");
  btnRow.appendChild(backBtn);
  btnRow.appendChild(againBtn);
  app.appendChild(btnRow);
}

/* ---------- Imposter: three share a trait, one doesn't ---------- */

/* Dedicated per-rule-type progress store: the skill here is spotting a category of pattern, not memorizing one item */
const IMPOSTER_PROGRESS_KEY = "p131-imposter-progress";
function getImposterProgress() {
  try { return JSON.parse(localStorage.getItem(IMPOSTER_PROGRESS_KEY)) || {}; } catch (e) { return {}; }
}
function setImposterProgress(ruleType, status) {
  const p = getImposterProgress();
  p[ruleType] = status;
  try { localStorage.setItem(IMPOSTER_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}

let imposterPref = { difficulty: "easy", rounds: 10 };

function buildImposterRules(difficulty) {
  const rules = [];

  rules.push({ type: "region", pick: WINES.filter(w => w.region.includes("Napa")),
    exclude: WINES.filter(w => !w.region.includes("Napa")),
    why: "The other three are all from Napa Valley." });

  if (difficulty === "hard") {
    rules.push({ type: "tannin", pick: WINES.filter(w => w.structure.tannin === 3), exclude: WINES.filter(w => w.structure.tannin === 2),
      why: "The other three all sit right at medium(+) tannin &mdash; the imposter is a notch softer, at medium." });
    rules.push({ type: "acidity", pick: WINES.filter(w => w.structure.acidity === 3), exclude: WINES.filter(w => w.structure.acidity === 2),
      why: "The other three all sit right at medium acidity &mdash; the imposter is a notch softer." });
    rules.push({ type: "body", pick: WINES.filter(w => w.structure.body === 3), exclude: WINES.filter(w => w.structure.body === 2),
      why: "The other three are all medium body &mdash; the imposter is a notch lighter." });
  } else {
    rules.push({ type: "tannin", pick: WINES.filter(w => w.structure.tannin >= 3), exclude: WINES.filter(w => w.structure.tannin <= 1),
      why: "The other three are structured, tannic reds &mdash; the imposter barely has any grip." });
    rules.push({ type: "acidity", pick: WINES.filter(w => w.structure.acidity >= 4), exclude: WINES.filter(w => w.structure.acidity <= 2),
      why: "The other three are all high-acid, fresh-style pours &mdash; the imposter is soft and round." });
    rules.push({ type: "body", pick: WINES.filter(w => w.structure.body >= 4), exclude: WINES.filter(w => w.structure.body <= 2),
      why: "The other three are all full-bodied &mdash; the imposter is noticeably lighter on the palate." });
    rules.push({ type: "body", pick: WINES.filter(w => w.structure.body <= 2), exclude: WINES.filter(w => w.structure.body >= 4),
      why: "The other three are all light-bodied &mdash; the imposter is much fuller and richer." });
  }

  DISHES.filter(d => d.pairedWineIds && d.pairedWineIds.length >= 3).forEach(dish => {
    rules.push({ type: "pairing", pick: dish.pairedWineIds.map(findWine).filter(Boolean),
      exclude: WINES.filter(w => !dish.pairedWineIds.includes(w.id)),
      why: `The other three are all listed pairings for the ${dish.name}.` });
  });

  const foodPool = DISHES.filter(d => d.quizClue);
  const allergenSet = [...new Set(foodPool.flatMap(d => d.allergensInRecipe || []))];
  allergenSet.forEach(a => {
    const has = foodPool.filter(d => (d.allergensInRecipe || []).includes(a));
    const notHave = foodPool.filter(d => !(d.allergensInRecipe || []).includes(a));
    if (has.length >= 3 && notHave.length >= 1) {
      rules.push({ type: "allergen", pick: has, exclude: notHave, itemType: "food",
        why: `The other three all contain ${a} &mdash; the imposter doesn't.` });
    }
  });

  ["sparkling", "white", "red", "sake"].forEach(style => {
    const has = foodPool.filter(d => d.pairedWineIds.length && findWine(d.pairedWineIds[0])?.style === style);
    const notHave = foodPool.filter(d => d.pairedWineIds.length && findWine(d.pairedWineIds[0])?.style !== style);
    if (has.length >= 3 && notHave.length >= 1) {
      rules.push({ type: "wine-style", pick: has, exclude: notHave, itemType: "food",
        why: `The other three are all primarily paired with a ${STYLE_LABELS[style].toLowerCase()} &mdash; the imposter's primary pairing is a different style.` });
    }
  });

  return rules.filter(r => r.pick.length >= 3 && r.exclude.length >= 1);
}

function buildImposterRound(difficulty) {
  const rules = buildImposterRules(difficulty);
  const progress = getImposterProgress();
  const types = [...new Set(rules.map(r => r.type))];
  const learning = types.filter(t => progress[t] === "learning");
  const other = types.filter(t => progress[t] !== "learning");
  const orderedTypes = Math.random() < 0.6 && learning.length ? learning : (learning.length && Math.random() < 0.35 ? learning : other.length ? other : types);
  const chosenType = orderedTypes[Math.floor(Math.random() * orderedTypes.length)];
  const candidates = rules.filter(r => r.type === chosenType);
  const rule = candidates[Math.floor(Math.random() * candidates.length)];
  const trio = [...rule.pick].sort(() => Math.random() - 0.5).slice(0, 3);
  const imposter = rule.exclude[Math.floor(Math.random() * rule.exclude.length)];
  return { trio, imposter, why: rule.why, type: rule.type, itemType: rule.itemType || "wine" };
}

function imposterToggleRow() {
  const row = document.createElement("div");
  row.className = "speed-toggle" + (imposterPref.difficulty === "hard" ? " active" : "");
  row.innerHTML = `<span class="speed-icon">&#128373;&#65039;</span><span class="speed-text">Difficulty: ${imposterPref.difficulty === "hard" ? "Hard \u2014 tight structural gaps" : "Easy \u2014 obvious mismatches"}</span><span class="speed-state">${imposterPref.difficulty === "hard" ? "HARD" : "EASY"}</span>`;
  row.onclick = () => { imposterPref.difficulty = imposterPref.difficulty === "hard" ? "easy" : "hard"; render(); };
  return row;
}

function renderImposterSetup() {
  header("Imposter");
  app.appendChild(imposterToggleRow());

  const roundsLabel = document.createElement("p");
  roundsLabel.className = "testme-counter";
  roundsLabel.textContent = "How many rounds?";
  app.appendChild(roundsLabel);

  const options = document.createElement("div");
  options.className = "home-options";
  [5, 10, 15].forEach(n => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    opt.innerHTML = `<div class="home-icon-circle">&#128373;&#65039;</div><div class="home-option-text"><p>${n} rounds</p><span>${n <= 5 ? "Quick session" : n <= 10 ? "The standard" : "Full session"}</span></div>`;
    opt.onclick = () => { imposterPref.rounds = n; go("imposter-run"); };
    options.appendChild(opt);
  });
  app.appendChild(options);
}

function renderImposter() {
  if (typeof current.params.roundNum !== "number") {
    current.params.roundNum = 1;
    current.params.correct = 0;
  }
  header("Imposter");

  if (current.params.roundNum > imposterPref.rounds) {
    renderImposterEnd(current.params.correct, imposterPref.rounds);
    return;
  }

  const round = buildImposterRound(imposterPref.difficulty);
  if (!round) { go("game-room", {}, false); return; }
  const tiles = [...round.trio, round.imposter].sort(() => Math.random() - 0.5);

  const progressLine = document.createElement("p");
  progressLine.className = "testme-counter";
  progressLine.textContent = `Round ${current.params.roundNum} of ${imposterPref.rounds} \u00b7 ${current.params.correct} correct so far`;
  app.appendChild(progressLine);

  const intro = document.createElement("p");
  intro.className = "testme-counter";
  intro.textContent = "Three of these belong together. Tap the imposter.";
  app.appendChild(intro);

  const grid = document.createElement("div");
  grid.className = "match-grid";
  let done = false;

  const explain = document.createElement("div");
  explain.className = "tot-explain";
  explain.style.display = "none";

  tiles.forEach(item => {
    const tile = document.createElement("button");
    tile.className = "match-tile imposter-tile";
    const displayName = round.itemType === "food" ? item.name : item.producer;
    tile.innerHTML = `<b>${displayName}</b>`;
    tile.onclick = () => {
      if (done) return;
      done = true;
      const correct = item.id === round.imposter.id;
      setImposterProgress(round.type, correct ? "known" : "learning");
      if (correct) current.params.correct++;
      grid.querySelectorAll(".imposter-tile").forEach((t, i) => {
        t.classList.add("revealed");
        const full = tiles[i];
        t.innerHTML = round.itemType === "food"
          ? `<b>${full.name}</b>`
          : `<b>${full.producer}</b><br><span class="imposter-sub">${full.name}</span>`;
      });
      tile.classList.add(correct ? "matched" : "tot-wrong-tile");
      if (!correct) {
        [...grid.children].forEach((t, i) => {
          if (tiles[i].id === round.imposter.id) t.classList.add("matched");
        });
      }
      explain.innerHTML = `
        <p class="tot-verdict">${correct ? "&#9989; Found it." : `&#10060; The imposter was <b>${round.imposter.name}</b>.`}</p>
        <p class="pairing-reason">${round.why}</p>
        <button class="footer-btn footer-btn-home tot-next">Next round &rarr;</button>
      `;
      explain.style.display = "block";
      explain.querySelector(".tot-next").onclick = () => {
        current.params.roundNum++;
        render();
      };
    };
    grid.appendChild(tile);
  });

  app.appendChild(grid);
  app.appendChild(explain);
}

function renderImposterEnd(correct, total) {
  app.innerHTML = "";
  header("Imposter");
  const bestKey = "p131-best-imposter-" + imposterPref.difficulty + "-" + total;
  let best = 0;
  try { best = parseInt(localStorage.getItem(bestKey)) || 0; } catch (e) {}
  const isRecord = correct > best;
  if (isRecord) {
    try { localStorage.setItem(bestKey, String(correct)); } catch (e) {}
    celebrate();
  }

  const wrap = document.createElement("div");
  wrap.className = "speed-end";
  wrap.innerHTML = `
    <p class="speed-end-icon">&#128373;&#65039;</p>
    <p class="speed-end-score">${correct}<span class="speed-end-total">/${total}</span></p>
    <p class="speed-end-label">imposters found \u00b7 ${imposterPref.difficulty} difficulty</p>
    <p class="speed-end-best">${isRecord ? "&#127942; New personal best!" : `Personal best (${imposterPref.difficulty}, ${total} rounds): ${best}`}</p>
  `;
  app.appendChild(wrap);

  const btnRow = document.createElement("div");
  btnRow.className = "card-footer-nav";
  const againBtn = document.createElement("button");
  againBtn.className = "footer-btn footer-btn-home";
  againBtn.textContent = "Run it back \u{1F575}\uFE0F";
  againBtn.onclick = () => go("imposter-run");
  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "Game Room";
  backBtn.onclick = () => go("game-room");
  btnRow.appendChild(backBtn);
  btnRow.appendChild(againBtn);
  app.appendChild(btnRow);
}

/* ---------- Sommelier Says: rapid-fire true/false against the clock ---------- */

/* Dedicated per-statement-type progress store: the skill is discriminating fact categories, not memorizing one wine */
const SOMM_PROGRESS_KEY = "p131-somm-progress";
function getSommProgress() {
  try { return JSON.parse(localStorage.getItem(SOMM_PROGRESS_KEY)) || {}; } catch (e) { return {}; }
}
function setSommProgress(type, status) {
  const p = getSommProgress();
  p[type] = status;
  try { localStorage.setItem(SOMM_PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
let sommPref = { difficulty: "easy" };

function buildSommStatement(difficulty) {
  const wine = WINES[Math.floor(Math.random() * WINES.length)];
  const isTrue = Math.random() < 0.5;
  const types = ["region", "grape", "pairing"];
  if (!wine.winemaker.toLowerCase().includes("team") && !wine.winemaker.toLowerCase().includes("toji")) types.push("winemaker");

  const progress = getSommProgress();
  const learningTypes = types.filter(t => progress[t] === "learning");
  const pickFrom = learningTypes.length && Math.random() < 0.6 ? learningTypes : types;
  const type = pickFrom[Math.floor(Math.random() * pickFrom.length)];

  function otherWine(fieldFn) {
    let candidates = WINES.filter(w => w.id !== wine.id && fieldFn(w) !== fieldFn(wine));
    if (difficulty === "hard") {
      const sameStyle = candidates.filter(w => w.style === wine.style);
      if (sameStyle.length) candidates = sameStyle;
    }
    if (!candidates.length) return wine;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  if (type === "region") {
    const shown = isTrue ? wine.region : otherWine(w => w.region).region;
    return { type, text: `${wine.name} comes from ${shown}.`, isTrue, correctText: `${wine.name} comes from ${wine.region}.` };
  }
  if (type === "grape") {
    const shown = isTrue ? wine.grape : otherWine(w => w.grape).grape;
    return { type, text: `${wine.name} is made from ${shown}.`, isTrue, correctText: `${wine.name} is made from ${wine.grape}.` };
  }
  if (type === "winemaker") {
    let namedOthers = WINES.filter(w => w.id !== wine.id && !w.winemaker.toLowerCase().includes("team") && !w.winemaker.toLowerCase().includes("toji") && w.winemaker !== wine.winemaker);
    if (difficulty === "hard") {
      const sameStyle = namedOthers.filter(w => w.style === wine.style);
      if (sameStyle.length) namedOthers = sameStyle;
    }
    if (isTrue || !namedOthers.length) {
      return { type, text: `${wine.name} is made by ${wine.winemaker}.`, isTrue: true, correctText: `${wine.name} is made by ${wine.winemaker}.` };
    }
    const other = namedOthers[Math.floor(Math.random() * namedOthers.length)];
    return { type, text: `${wine.name} is made by ${other.winemaker}.`, isTrue: false, correctText: `${wine.name} is made by ${wine.winemaker}.` };
  }
  // pairing
  const correctDish = wine.pairingDishIds.length ? findDish(wine.pairingDishIds[Math.floor(Math.random() * wine.pairingDishIds.length)]) : null;
  const correctPairingText = correctDish ? `${wine.name} is a listed pairing for the ${correctDish.name}.` : `${wine.name} has no listed pairings yet.`;
  if (isTrue && correctDish) {
    return { type, text: correctPairingText, isTrue: true, correctText: correctPairingText };
  }
  let nonPaired = DISHES.filter(d => d.pairedWineIds && d.pairedWineIds.length && !wine.pairingDishIds.includes(d.id));
  if (difficulty === "hard") {
    const sameStylePool = nonPaired.filter(d => findWine(d.pairedWineIds[0])?.style === wine.style);
    if (sameStylePool.length) nonPaired = sameStylePool;
  }
  const dish = nonPaired[Math.floor(Math.random() * nonPaired.length)];
  return { type, text: `${wine.name} is a listed pairing for the ${dish.name}.`, isTrue: false, correctText: correctPairingText };
}

function sommToggleRow() {
  const row = document.createElement("div");
  row.className = "speed-toggle" + (sommPref.difficulty === "hard" ? " active" : "");
  row.innerHTML = `<span class="speed-icon">&#9889;</span><span class="speed-text">Difficulty: ${sommPref.difficulty === "hard" ? "Hard \u2014 false swaps stay same style" : "Easy \u2014 false swaps from anywhere"}</span><span class="speed-state">${sommPref.difficulty === "hard" ? "HARD" : "EASY"}</span>`;
  row.onclick = () => { sommPref.difficulty = sommPref.difficulty === "hard" ? "easy" : "hard"; render(); };
  return row;
}

function renderSommSays() {
  header("Sommelier Says");

  const intro = document.createElement("p");
  intro.className = "testme-counter";
  intro.textContent = "True or false, as fast as you can.";
  app.appendChild(intro);

  app.appendChild(sommToggleRow());

  const durLabel = document.createElement("p");
  durLabel.className = "testme-counter";
  durLabel.textContent = "How long do you want?";
  app.appendChild(durLabel);

  const options = document.createElement("div");
  options.className = "home-options";
  [15, 30, 60, 90].forEach(s => {
    const opt = document.createElement("div");
    opt.className = "home-option";
    opt.innerHTML = `
      <div class="home-icon-circle">&#9200;</div>
      <div class="home-option-text"><p>${s} seconds</p><span>${s <= 15 ? "Lightning round" : s <= 30 ? "Quick hit" : s <= 60 ? "The standard" : "The marathon"}</span></div>
    `;
    opt.onclick = () => go("somm-says-run", { seconds: s });
    options.appendChild(opt);
  });
  app.appendChild(options);
}

function renderSommSaysRun(seconds) {
  seconds = [15, 30, 60, 90].includes(seconds) ? seconds : 30;
  header("Sommelier Says");

  if (typeof current.params.score !== "number") {
    current.params.score = 0;
    current.params.total = 0;
    current.params.streak = 0;
    current.params.bestStreak = 0;
    current.params.missed = [];
    current.params.endsAt = Date.now() + seconds * 1000;
  }
  const remaining = Math.max(0, current.params.endsAt - Date.now());
  if (remaining <= 0) { renderSommEnd(seconds, current.params); return; }

  const timerWrap = document.createElement("div");
  timerWrap.className = "timer-wrap";
  timerWrap.innerHTML = `
    <div class="timer-row"><span class="timer-score">&#9889; ${current.params.score}/${current.params.total}</span><span class="timer-count">${Math.ceil(remaining / 1000)}s</span></div>
    <div class="timer-track"><div class="timer-fill" style="width:${(remaining / (seconds * 1000)) * 100}%;"></div></div>
  `;
  app.appendChild(timerWrap);
  activeTimer = setInterval(() => {
    const left = Math.max(0, current.params.endsAt - Date.now());
    const countEl = timerWrap.querySelector(".timer-count");
    const fillEl = timerWrap.querySelector(".timer-fill");
    if (countEl) countEl.textContent = Math.ceil(left / 1000) + "s";
    if (fillEl) fillEl.style.width = (left / (seconds * 1000)) * 100 + "%";
    if (left <= 0) {
      clearInterval(activeTimer); activeTimer = null;
      renderSommEnd(seconds, current.params);
    }
  }, 250);

  if (current.params.streak >= 2) {
    const streakLine = document.createElement("p");
    streakLine.className = "somm-streak";
    streakLine.textContent = `\u{1F525} ${current.params.streak} in a row`;
    app.appendChild(streakLine);
  }

  const statement = buildSommStatement(sommPref.difficulty);
  const card = document.createElement("div");
  card.className = "somm-card";
  card.innerHTML = `<p class="somm-statement">${statement.text}</p>`;
  app.appendChild(card);

  const btnRow = document.createElement("div");
  btnRow.className = "somm-btn-row";
  const falseBtn = document.createElement("button");
  falseBtn.className = "somm-btn somm-false";
  falseBtn.textContent = "FALSE";
  const trueBtn = document.createElement("button");
  trueBtn.className = "somm-btn somm-true";
  trueBtn.textContent = "TRUE";

  function answer(saidTrue) {
    current.params.total++;
    const right = saidTrue === statement.isTrue;
    setSommProgress(statement.type, right ? "known" : "learning");
    if (right) {
      current.params.score++;
      current.params.streak++;
      if (current.params.streak > current.params.bestStreak) current.params.bestStreak = current.params.streak;
    } else {
      current.params.streak = 0;
      current.params.missed.push({ shown: statement.text, correct: statement.correctText });
    }
    card.classList.add(right ? "somm-flash-right" : "somm-flash-wrong");
    setTimeout(() => render(), 260);
  }
  falseBtn.onclick = () => answer(false);
  trueBtn.onclick = () => answer(true);
  btnRow.appendChild(falseBtn);
  btnRow.appendChild(trueBtn);
  app.appendChild(btnRow);
}

function renderSommEnd(seconds, params) {
  const { score, total, missed, bestStreak } = params;
  app.innerHTML = "";
  header("Sommelier Says");
  const bestKey = "p131-best-somm-" + sommPref.difficulty + "-" + seconds;
  let best = 0;
  try { best = parseInt(localStorage.getItem(bestKey)) || 0; } catch (e) {}
  const isRecord = score > best;
  if (isRecord) {
    try { localStorage.setItem(bestKey, String(score)); } catch (e) {}
    celebrate();
  }

  const wrap = document.createElement("div");
  wrap.className = "speed-end";
  wrap.innerHTML = `
    <p class="speed-end-icon">&#9889;</p>
    <p class="speed-end-score">${score}<span class="speed-end-total">/${total}</span></p>
    <p class="speed-end-label">correct in ${seconds} seconds &middot; best streak ${bestStreak || 0}</p>
    <p class="speed-end-best">${isRecord ? "&#127942; New personal best!" : `Personal best (${sommPref.difficulty}, ${seconds}s): ${best}`}</p>
  `;
  app.appendChild(wrap);

  if (missed && missed.length) {
    const reviewTitle = document.createElement("p");
    reviewTitle.className = "detail-h3";
    reviewTitle.innerHTML = `<span>&#128269;</span> What you missed`;
    app.appendChild(reviewTitle);
    missed.forEach(m => {
      const block = document.createElement("div");
      block.className = "somm-review-block";
      block.innerHTML = `
        <p class="somm-review-shown">${m.shown}</p>
        <p class="somm-review-correct">&#10003; ${m.correct}</p>
      `;
      app.appendChild(block);
    });
  }

  const btnRow = document.createElement("div");
  btnRow.className = "card-footer-nav";
  const againBtn = document.createElement("button");
  againBtn.className = "footer-btn footer-btn-home";
  againBtn.textContent = "Run it back \u26A1";
  againBtn.onclick = () => go("somm-says-run", { seconds });
  const backBtn = document.createElement("button");
  backBtn.className = "footer-btn";
  backBtn.textContent = "Game Room";
  backBtn.onclick = () => go("game-room");
  btnRow.appendChild(backBtn);
  btnRow.appendChild(againBtn);
  app.appendChild(btnRow);
}

initTheme();
render();
