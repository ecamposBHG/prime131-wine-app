// Prime 131 — Banquet Service (data).
//
// The banquet / private-event service SOP as a live checklist:
//   Learning > Tools > Banquet Service
//
// Every step has checkable items plus a final "Standard met" checkpoint. A step
// is complete when all of its items and its standard are checked. Steps in the
// "Course loop" phase repeat for every course, so they are tracked per course.
// Progress lives on this device only (key p131-banquet-event). There are no
// tests, no unlock dates and nothing is synced.
//
// Content rules: only wording from the approved SOP. The order abbreviations
// change per event and live on paper only, never in the app.
// The render code is in app.js, under "Banquet Service".

const BANQUET_SERVICE = {
  title: "Banquet Service",
  phases: [
    { id: "A", title: "Before guests" },
    { id: "B", title: "Room ready" },
    { id: "C", title: "Guests arrive" },
    { id: "O", title: "Order taking" },
    { id: "D", title: "Course loop", repeats: true },
    { id: "E", title: "Pauses and dessert" },
    { id: "F", title: "Close out" }
  ],
  // roles: M = Manager, L = Lead, S = Servers. key: true shows a "Key step" tag.
  steps: [
    { n: 1, phase: "A", roles: "M", title: "Select the team",
      items: ["Servers arrived for the scheduled shift", "Event team selected and named"],
      standard: "Team named before the BEO review begins." },
    { n: 2, phase: "A", roles: "ML", title: "BEO review",
      items: ["Every line of the BEO read together", "BEO matches all guest-facing material: menus, place cards, printed items", "Any discrepancy fixed before the team briefing", "Rest of the team started room setup"],
      standard: "No discrepancy between BEO and guest materials." },
    { n: 3, phase: "A", roles: "L", title: "Pre-banquet meeting",
      items: ["Party name, on-site contact, date, time, room", "Guest count and F&B minimum", "Menu reviewed item by item", "Lead wrote down the order abbreviations on paper", "Lead told the team only these abbreviations may be used", "Each server wrote the abbreviations at the far left of each space on their order sheet", "Room left under each seat number and course for modifications and allergies", "Beverage rules: open bar, cash only, max $, wine selected or not", "Valet, A/V, and other items", "Special instructions and open follow-ups"],
      standard: "Every server can state the menu, beverage rules, and special instructions without looking." },
    { n: 4, phase: "A", roles: "L", title: "Assignments",
      items: ["Tables and duties assigned", "Each server has a full table or part of a table by seat numbers, e.g. seats 1-7 and seats 8-14", "Seat-numbering convention explained", "Starting position set for each table; movement is clockwise", "Correct cutlery per course confirmed", "Service and beverage responsibilities set", "Lead named as the one who gives service and clearing cues, spoken aloud"],
      standard: "Nobody enters service unsure of their table, seats, or role." },
    { n: 5, phase: "A", roles: "L", title: "Dietary map",
      items: ["Dietary meals recorded by table and seat", "Route walked: pass, dining room, tables, clearing station, dish landing", "Pickup location defined", "Planned pauses noted: speeches, presentations, A/V"],
      standard: "Dietary list posted at the pass and held by the lead." },
    { n: 6, phase: "B", roles: "S", title: "Room setup",
      items: ["Tables show-ready, aligned, clean", "Chairs, linen, glassware, flatware, plates checked", "Place cards match the seating plan; menus in place", "Water and beverage supplies ready", "Side stations stocked: spare cutlery, napkins", "Access clear for serving and clearing"],
      standard: "Each server inspects their own section before the lead's check." },
    { n: 7, phase: "B", roles: "S", title: "Cutlery trays",
      items: ["Cutlery for every course gathered", "One tray staged per table"],
      standard: "Trays match the menu course by course." },
    { n: 8, phase: "B", roles: "L", title: "Full-room check",
      items: ["Entire room checked, not just your own section"],
      standard: "Lead signs off to the manager that the room is ready." },
    { n: 9, phase: "C", roles: "L", title: "Guest arrival and host ID",
      items: ["Host(s) identified", "Team introduced to the host", "Flow confirmed: normal service or pauses for speeches", "Beverage plan confirmed: wine purchase, by the glass, or cocktails only", "Special occasions and other details noted"],
      standard: "Host expectations relayed to the whole team and manager immediately." },
    { n: 10, phase: "C", roles: "S", title: "Guest seating",
      items: ["In your section and visible, not clustered at the kitchen door", "Guests welcomed and helped with seating", "Water and planned first beverage offered", "Any removed or moved setting replaced", "Lead told the table is seated and ready"],
      standard: "Servers are in their sections as guests sit." },
    { n: 11, phase: "O", roles: "L", title: "Split order taking and service",
      items: ["Enough servers assigned to take food orders", "Remaining servers assigned to table maintenance and beverage service", "Every server has the standard order sheet"],
      standard: "Every table is covered for both orders and beverage service." },
    { n: 12, phase: "O", roles: "S", title: "Take orders",
      items: ["Orders taken for your seats, all courses at once", "Only the lead's abbreviations used", "Modifications and allergies written in the same space, under the seat number and course"],
      standard: "Every seat has every course recorded." },
    { n: 13, phase: "O", roles: "SL", title: "Tally and turn in",
      items: ["Food counts tallied", "Tally turned in to the lead", "Accommodations, replacements, and restrictions told to the lead verbally", "Anything else that needs communicating told to the lead verbally"],
      standard: "Nothing the kitchen needs to know lives only on paper." },
    { n: 14, phase: "O", roles: "L", title: "Verify orders",
      items: ["Every server's orders turned in", "Every order checked and correct"],
      standard: "All orders turned in and correct." },
    { n: 15, phase: "O", roles: "L", title: "First-course call", key: true,
      items: ["Final tally of the first course done", "First course called to the kitchen aloud, e.g. \"4 chopped salads, 2 crab cakes\""],
      standard: "Kitchen starts cooking the first course without waiting for the full tally." },
    { n: 16, phase: "O", roles: "L", title: "Tally to kitchen", key: true,
      items: ["Rest of the tally finished", "Tally turned in to the kitchen", "Copy saved: photo on your phone or a photocopy"],
      standard: "Lead holds a copy to make sure every single item hits the right position." },
    { n: 17, phase: "O", roles: "SL", title: "Dietary and seat changes",
      items: ["Dietary needs confirmed personally and discreetly with each guest", "Seat changes recorded and reported to the team", "New allergy or conflict raised to lead, manager, and kitchen", "No guessing: dish safety verified"],
      standard: "Dietary and seat-change info is always current at the pass." },
    { n: 18, phase: "D", roles: "S", title: "Readiness check",
      items: ["Guests seated", "Correct cutlery down", "Drinks not blocking plate placement", "Dietary seat info current", "No speech about to start"],
      standard: "Do not collect hot food while still needing to reset the table." },
    { n: 19, phase: "D", roles: "LS", title: "Kitchen pickup",
      items: ["Lead decided when to fire this course, based on how fast or slow guests are eating", "Servers released to the pass in set order", "Expo confirmed table, plate count, and appearance", "Each special meal and destination identified", "Carrying only what the approved method allows"],
      standard: "Food reaches the table hot. No individual demands to fire tables." },
    { n: 20, phase: "D", roles: "SL", title: "Plate drop", key: true,
      items: ["Lead standing by each seat, not running plates from the kitchen", "At assigned positions, moving clockwise", "Plates served from the right, together, on the lead's spoken cue", "Lead dictated where every plate goes, following the saved order sheets", "Protein at six o'clock", "Dietary meals to verified seats", "Brief, consistent dish description given", "Withdrew without lingering"],
      standard: "Every item hits the right position. No reaching across guests." },
    { n: 21, phase: "D", roles: "S", title: "During the course",
      items: ["Table observed", "Satisfaction checked at a natural moment", "Water and authorized beverages replenished", "Dropped utensils replaced; bread maintained if included", "Empty glassware removed quietly", "Delays, uneaten meals, concerns reported to the lead"],
      standard: "Someone always has room coverage. The whole team never leaves the room at once." },
    { n: 22, phase: "D", roles: "LS", title: "Clearing",
      items: ["Everyone at the table finished (asked politely if unclear)", "Lead's spoken clearing cue received", "Cleared as a team, from the left", "That course's used cutlery removed", "Dishes straight to the landing area, sorted out of guest view"],
      standard: "Table-level clearing, at the lead server's discretion. Never rush a guest to keep the schedule." },
    { n: 23, phase: "D", roles: "SL", title: "Between courses",
      items: ["Used or missing cutlery replaced from the table's tray", "Setting tidied", "Beverages checked", "Guest and seat changes confirmed", "Status reported to the lead, e.g. \"Table 12 cleared, reset, ready.\"", "Lead checked the whole room and decided when to fire the next course"],
      standard: "Every table's status reported clearly before the next course is fired." },
    { n: 24, phase: "E", roles: "LS", title: "Pauses",
      items: ["Host's plan from step 9 followed", "Kitchen told before the pause", "Room kept quiet", "Clearing kept out of presentation sightlines"],
      standard: "The lead tells the kitchen before any planned pause." },
    { n: 25, phase: "E", roles: "S", title: "Dessert and coffee",
      items: ["Items no longer needed removed; table tidied", "Dessert cutlery set", "Coffee timing followed", "Water and guest attention maintained", "Service continues until guests leave"],
      standard: "No visible room breakdown while guests are still using the space." },
    { n: 26, phase: "F", roles: "L", title: "Check prep",
      items: ["Checks merged if necessary", "BEO reviewed again: every point addressed", "Charges correct", "Check printed"],
      standard: "Every BEO line reconciled with what was served and charged." },
    { n: 27, phase: "F", roles: "LM", title: "Manager adjustment",
      items: ["Check taken to the manager", "Service fee and gratuity adjusted", "Invalid fees removed; deposit applied if needed", "BEO read together one final time"],
      standard: "Two-person BEO check before the check reaches the host." },
    { n: 28, phase: "F", roles: "L", title: "Payment and departure",
      items: ["Check presented to the host", "Payment taken", "Host and guests thanked", "BEO filed"],
      standard: "Payment closed out and the BEO filed." }
  ]
};
