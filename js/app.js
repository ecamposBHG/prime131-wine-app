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
      <p class="flip-label">Flavor profile &middot; 1/3 &middot; tap to flip</p>
      <p class="flavor-tags">${wine.flavorTags.join(" &ndash; ")}</p>
      <p class="flip-label" style="margin-top:14px;">Structure</p>
      ${structureBars(wine.structure)}
      <div class="arsenal-block">
        <p class="arsenal-label">Table-side line</p>
        <p class="arsenal-text">${wine.arsenal}</p>
      </div>
    `;
  } else if (idx === 1) {
    return `
      <p class="flip-label">Producer &amp; details &middot; 2/3 &middot; tap to flip</p>
      <p class="back-line"><b>Producer:</b> ${wine.producer}</p>
      <p class="back-line"><b>Winemaker:</b> ${wine.winemaker}</p>
      <p class="back-line"><b>Fun fact 1:</b> ${wine.funFact}</p>
      <p class="back-line"><b>Fun fact 2:</b> ${wine.funFact2}</p>
      ${similar ? `<p class="back-line"><b>Similar pour:</b> ${similar.name}</p>` : ""}
    `;
  } else {
    return `
      <p class="flip-label">Short story &middot; 3/3 &middot; tap to flip</p>
      <p class="story-text">${wine.shortStory}</p>
      <p class="flip-label" style="margin-top:18px;">Great for</p>
      <p class="story-text">${guestFit(wine)}</p>
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

function structureBars(structure) {
  const rows = [
    ["SWEETNESS", structure.sweetness],
    ["ACIDITY", structure.acidity],
    ["TANNIN", structure.tannin],
    ["ALCOHOL", structure.alcohol],
    ["BODY", structure.body]
  ];
  return rows.map(([label, val]) => {
    if (label === "TANNIN" && val === 0) return "";
    const dots = "●".repeat(val) + "○".repeat(5 - val);
    return `<div class="bar-row"><span class="bar-label">${label}</span><span class="bar-dots">${dots}</span></div>`;
  }).join("");
}

function render() {
  app.innerHTML = "";
  if (current.view === "home") renderHome();
  else if (current.view === "study-list") renderStudyList();
  else if (current.view === "study-card") renderStudyCard(current.params.wineId);
  else if (current.view === "pairwf-list") renderPairWineFoodList();
  else if (current.view === "pairwf-detail") renderWineDetailWithPairing(current.params.wineId);
  else if (current.view === "pairfw-list") renderPairFoodWineList();
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
    <div class="home-option" data-go="study"><i class="ti">&#128214;</i><p>Study wines</p></div>
    <div class="home-option" data-go="pairwf"><i class="ti">&#127863;</i><p>Pair wine &#8594; food</p></div>
    <div class="home-option" data-go="pairfw"><i class="ti">&#127860;</i><p>Pair food &#8594; wine</p></div>
  `;
  options.querySelector('[data-go="study"]').onclick = () => go("study-list");
  options.querySelector('[data-go="pairwf"]').onclick = () => go("pairwf-list");
  options.querySelector('[data-go="pairfw"]').onclick = () => go("pairfw-list");
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
        row.innerHTML = `<span>${w.name}</span>`;
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

function renderPairFoodWineList() {
  header("Pair food &#8594; wine");
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = "Search a dish";
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
        row.innerHTML = `<span>${d.name}</span>`;
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

function renderWineCardBody(wine) {
  const container = document.createElement("div");

  const heroName = document.createElement("p");
  heroName.className = "hero-name";
  heroName.textContent = wine.name;
  container.appendChild(heroName);

  const meta1 = document.createElement("p");
  meta1.className = "hero-meta";
  meta1.textContent = wine.grape;
  container.appendChild(meta1);

  const meta2 = document.createElement("p");
  meta2.className = "hero-meta";
  meta2.textContent = wine.region;
  container.appendChild(meta2);

  const pairsLabel = document.createElement("p");
  pairsLabel.className = "pairs-label";
  pairsLabel.textContent = "Pairs with";
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

function pairingReason(wine, dish) {
  const reasons = [];
  if (wine.structure.acidity >= 4) reasons.push("bright acidity that cuts through richness");
  if (wine.structure.tannin >= 4) reasons.push("firm tannin that stands up to char and fat");
  if (wine.structure.body >= 4) reasons.push("a full body that won't get lost next to a bold dish");
  if (wine.structure.body <= 2) reasons.push("a lighter body that won't overpower delicate flavors");
  if (wine.style === "sparkling" || wine.style === "sake") reasons.push("clean, refreshing character built for raw and briny flavors");
  const reasonText = reasons.length ? reasons.join(" and ") : "a flavor profile that complements the dish without competing with it";
  return `${wine.name} pairs with ${dish.name} because of its ${reasonText}.`;
}

function renderWineDetailWithPairing(wineId) {
  const wine = findWine(wineId);
  if (!wine) { go("pairwf-list", {}, false); return; }
  header("Pair wine &#8594; food");

  const container = document.createElement("div");
  const heroName = document.createElement("p");
  heroName.className = "hero-name";
  heroName.textContent = wine.name;
  container.appendChild(heroName);

  const meta1 = document.createElement("p");
  meta1.className = "hero-meta";
  meta1.textContent = wine.grape;
  container.appendChild(meta1);

  const meta2 = document.createElement("p");
  meta2.className = "hero-meta";
  meta2.textContent = wine.region;
  container.appendChild(meta2);

  const pairsLabel = document.createElement("p");
  pairsLabel.className = "pairs-label";
  pairsLabel.textContent = "Pairs with";
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

function renderDishDetail(dishId) {
  const dish = findDish(dishId);
  if (!dish) { go("pairfw-list", {}, false); return; }

  header(dish.section);

  const container = document.createElement("div");
  const name = document.createElement("p");
  name.className = "hero-name";
  name.textContent = dish.name;
  container.appendChild(name);

  const desc = document.createElement("p");
  desc.className = "hero-meta";
  desc.textContent = dish.description;
  container.appendChild(desc);

  const pairsLabel = document.createElement("p");
  pairsLabel.className = "pairs-label";
  pairsLabel.textContent = "Pairs with";
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
  container.innerHTML = `
    <p class="hero-name" style="font-size:19px; margin-bottom:2px;">${wine.name}</p>
    <p class="pairs-connector">+</p>
    <p class="hero-name" style="font-size:19px; margin-top:2px;">${dish.name}</p>
    <p class="pairing-reason">${pairingReason(wine, dish)}</p>
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
