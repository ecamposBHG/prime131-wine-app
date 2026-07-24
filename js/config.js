// ============================================================
// RESTAURANT CONFIG — everything specific to THIS deployment.
// To clone this app for a different restaurant: replace this
// file, replace data.js, replace css/style.css. Nothing in
// app.js (the engine) should need to change.
// ============================================================

const BRAND = {
  fullName: "Prime 131 Wines",
  stampText: "131",
  storageKeyPrefix: "p131" // kept stable to avoid resetting any staff member's saved progress
};

// Which home cards this restaurant's deployment shows, and in what order.
// (Currently informational — app.js still renders all five directly.
// A future pass can make the home screen read this list instead.)
const FEATURES = {
  foodMenu: true,
  wineBTG: true,
  cocktails: true,
  classicCocktails: true,
  gameRoom: true
};

// Base-spirit categories for the Classic Cocktails library.
const SPIRIT_ORDER = ["Whiskey", "Gin", "Rum", "Tequila", "Vodka", "Brandy/Cognac"];
const SPIRIT_ICON_MAP = {
  "Whiskey": "\u{1F943}", "Gin": "\u{1F378}", "Rum": "\u{1F379}",
  "Tequila": "\u{1FAD1}", "Vodka": "\u2744\uFE0F", "Brandy/Cognac": "\u{1F942}"
};

// Icon shown next to each food menu section (must match data.js's SECTION_ORDER).
const SECTION_ICON_MAP = {
  "Raw Bar": "\u{1F9AA}", "Starters": "\u{1F961}", "Soups & Salads": "\u{1F957}",
  "Entr\u00E9es": "\u{1F37D}\uFE0F", "Sushi": "\u{1F363}", "Sushi Rolls": "\u{1F363}",
  "Sides": "\u{1F35F}", "Steaks": "\u{1F969}", "Sauces": "\u{1F958}", "Desserts": "\u{1F370}"
};
