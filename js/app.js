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
  [["citrus", "lemon", "lime", "zest"], "\u{1F34B}"],
  [["peach", "apple"], "\u{1F34F}"],
  [["tropical", "pineapple"], "\u{1F34D}"],
  [["melon", "honeydew", "lychee", "pear"], "\u{1F348}"],
  [["flower", "honeysuckle", "violet", "floral"], "\u{1F338}"],
  [["mocha", "cocoa", "chocolate", "coffee"], "\u2615"],
  [["oak", "cedar", "vanilla", "spice", "pepper"], "\u{1FAB5}"],
  [["earth", "forest", "herb", "garrigue", "mineral", "stone", "flint", "tar", "savory"], "\u{1F33F}"],
  [["brioche", "toast", "bread", "chalk"], "\u{1F950}"]
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
  "Sides": "\u{1F35F}", "Steaks": "\u{1F969}"
};
function getSectionIcon(section) { return SECTION_ICON_MAP[section] || "\u{1F37D}\uFE0F"; }

function render() {
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

function renderHome() {
  const hero = document.createElement("div");
  hero.className = "home-hero";
  hero.innerHTML = `
    <svg width="48" height="48" viewBox="0 0 56 56" class="home-stamp">
      <circle cx="28" cy="28" r="24" fill="none" stroke="var(--washi-300)" stroke-width="2"/>
      <circle cx="28" cy="28" r="24" fill="none" stroke="var(--bronze-500)" stroke-width="2.5"/>
      <text x="28" y="34" text-anchor="middle" font-family="Shippori Mincho, serif" font-size="16" fill="var(--shoyu-700)">131</text>
    </svg>
    <p class="home-title">Prime 131 Wines</p>
  `;
  app.appendChild(hero);

  const options = document.createElement("div");
  options.className = "home-options";
  options.innerHTML = `
    <div class="home-option" data-go="study">
      <div class="home-icon-circle">&#128214;</div>
      <div class="home-option-text"><p>Study wines</p><span>Learn the full list, one at a time</span></div>
    </div>
    <div class="home-option" data-go="pairwf">
      <div class="home-icon-circle">&#127863;</div>
      <div class="home-option-text"><p>Pair wine &#8594; food</p><span>Start from the bottle</span></div>
    </div>
    <div class="home-option" data-go="pairfw">
      <div class="home-icon-circle">&#127860;</div>
      <div class="home-option-text"><p>Pair food &#8594; wine</p><span>Start from the dish</span></div>
    </div>
    <div class="home-option" data-go="menu">
      <div class="home-icon-circle">&#128220;</div>
      <div class="home-option-text"><p>Menu</p><span>Browse the full food menu</span></div>
    </div>
  `;
  options.querySelector('[data-go="study"]').onclick = () => go("study-list");
  options.querySelector('[data-go="pairwf"]').onclick = () => go("pairwf-list");
  options.querySelector('[data-go="pairfw"]').onclick = () => go("pairfw-list");
  options.querySelector('[data-go="menu"]').onclick = () => go("menu-list");
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
  header("Study wines");
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

function renderDishList(headerTitle, searchPlaceholder) {
  header(headerTitle);
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = searchPlaceholder;
  wrap.appendChild(input);
  const listWrap = document.createElement("div");
  wrap.appendChild(listWrap);

  function draw(filter) {
    listWrap.innerHTML = "";
    const filtered = DISHES.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
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
  renderDishList("Menu", "Search the menu");
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

  header("Study wines");
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

function pairingReason(wine, dish) {
  const s = wine.structure;
  const pick = (arr) => arr[simpleHash(wine.id + dish.id) % arr.length];

  if (s.tannin >= 4) {
    return { trait: "tannin", value: s.tannin, text: pick([
      `The tannin here is built for this &ndash; it grabs onto the richness of the ${dish.name.toLowerCase()} while the char pulls out the wine's own smoky oak notes. Neither one has to compete.`,
      `This is a wine that wants fat and char. Order it with the ${dish.name} and the tannin softens right up against the crust, instead of feeling sharp on its own.`,
      `Big tannin needs something to grip onto &ndash; the ${dish.name} gives it exactly that, and the wine returns the favor by cutting straight through the richness.`
    ])};
  }
  if (s.acidity >= 4 && (dish.section === "Raw Bar" || dish.section === "Sushi" || dish.section === "Sushi Rolls")) {
    return { trait: "acidity", value: s.acidity, text: pick([
      `Bright acidity is the whole point here &ndash; it mirrors the citrus and salinity already on the plate instead of fighting it.`,
      `This wine doesn't try to outshine the ${dish.name}, it just sharpens it. The acid lifts the dish rather than sitting heavy next to it.`,
      `Raw fish wants a wine that gets out of the way and adds lift &ndash; that's exactly what this acidity does here.`
    ])};
  }
  if (s.acidity >= 4 && s.body <= 2) {
    return { trait: "acidity", value: s.acidity, text: pick([
      `Light and taut, this wine refreshes the palate between bites rather than trying to compete with the dish.`,
      `Nothing about this pour is trying to dominate the plate &ndash; it's here to cleanse and reset, bite after bite.`
    ])};
  }
  if (s.body >= 4) {
    return { trait: "body", value: s.body, text: pick([
      `This has the weight to match the ${dish.name} pound for pound &ndash; neither the dish nor the wine gets lost next to the other.`,
      `A lighter wine would disappear next to this dish. This one has the density to hold its ground.`,
      `Richness meets richness here &ndash; the wine's full body matches the dish instead of getting overwhelmed by it.`
    ])};
  }
  if (s.body <= 2) {
    return { trait: "body", value: s.body, text: pick([
      `This stays out of the way. It's light enough that the dish leads and the wine just supports it.`,
      `A heavier wine would bury this dish &ndash; this one lets the food do the talking.`
    ])};
  }
  if (wine.style === "sparkling" || wine.style === "sake") {
    return { trait: "acidity", value: s.acidity, text: pick([
      `The bubbles do the work here, resetting the palate between bites instead of layering more richness onto the plate.`,
      `Clean and refreshing by design &ndash; built to sit alongside delicate flavors, not cover them up.`
    ])};
  }
  return { trait: "body", value: s.body, text: pick([
    `Nothing about this pairing fights for attention &ndash; the wine's flavor profile sits comfortably alongside the dish rather than competing with it.`,
    `This is a quiet, easy match &ndash; complementary flavors, no sharp edges on either side.`
  ])};
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

render();
