// ============================================================
// RESTAURANT CONFIG — everything specific to THIS deployment.
// To clone this app for a different restaurant: replace this
// file, replace data.js, replace css/style.css. Nothing in
// app.js (the engine) should need to change.
// ============================================================

const BRAND = {
  fullName: "Prime 131",
  stampText: "131",
  storageKeyPrefix: "p131" // kept stable to avoid resetting any staff member's saved progress
};

// Supabase project + Edge Functions used for staff login/register.
// The anon key is safe to ship here -- it has no table access on its own;
// RLS on every table denies everything by default, and the only way in
// is through the staff-login / staff-register Edge Functions below,
// which run with elevated (service_role) rights server-side only.
const AUTH_CONFIG = {
  supabaseUrl: "https://axbdapzgfzsenvejmsax.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4YmRhcHpnZnpzZW52ZWptc2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0NzYyNTIsImV4cCI6MjEwMTA1MjI1Mn0.TvJx8_HqftIaqe_SbfTFtICJ8qwVtvTfqVKJpXH6GDQ",
  restaurantSlug: "prime131"
};

// Bumped alongside sw.js's CACHE_NAME on every deploy. Shown as a tiny
// stamp on the home screen so we can confirm, at a glance, whether a
// given device is actually serving the latest build -- useful while
// GitHub Pages' CDN edge cache may lag behind the reported build status.
const APP_VERSION = "v86";

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

// Zero-star review streak — source of truth for the home screen counter.
// There is deliberately no in-app control for this. It only ever changes
// when the owner asks Claude to update it after a real 1-star review, so
// every device shows the same numbers instead of drifting per-phone.
//
// start:         ISO date the CURRENT streak began (day count is derived from this).
// best:          longest streak ever recorded, in days. Update this when a
//                streak that just ended beat the previous record.
// lastEndedDays: the day count of the streak that just ended, set only at
//                the moment of a reset so each device can play the
//                "Streak Extinguished" animation once, then it's cleared
//                back to null until the next reset.
const REVIEW_STREAK_RECORD = {
  start: "2026-04-16T00:00:00",
  best: 100,
  lastEndedDays: null
};
