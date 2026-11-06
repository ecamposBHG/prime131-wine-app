// Prime 131 — Banquet Service (data).
//
// The banquet / private-event service SOP as a live checklist:
//   Tools > Banquet Service
//
// Every step has checkable items plus a final "Goal met" checkpoint. A step
// is complete when all of its items and its goal are checked. Steps in the
// "Each course" phase repeat for every course, so they are tracked per course.
// Progress lives on this device only (key p131-banquet-event). There are no
// tests, no unlock dates and nothing is synced.
//
// Content rules: plain, everyday wording a new server can follow on the first
// read. Only rules from the approved SOP. The order abbreviations change per
// event and live on paper only, never in the app.
// The render code is in app.js, under "Banquet Service".
//
// Saved checks are stored by position (step number + item number), so keep the
// number of items in a step the same when you reword it.

const BANQUET_SERVICE = {
  title: "Banquet Service",
  phases: [
    { id: "A", title: "Before guests" },
    { id: "B", title: "Room ready" },
    { id: "C", title: "Guests arrive" },
    { id: "O", title: "Order taking" },
    { id: "D", title: "Each course", repeats: true },
    { id: "E", title: "Dessert" },
    { id: "F", title: "Wrap up" }
  ],
  // roles: M = Manager, L = Lead, S = Servers. key: true shows a "Key step" tag.
  steps: [
    { n: 1, phase: "A", roles: "M", title: "Pick the team",
      items: ["Servers have arrived for their shift", "Manager picks the team for this event"],
      standard: "The team is chosen before the BEO review starts." },
    { n: 2, phase: "A", roles: "ML", title: "Review the BEO (event order)",
      items: ["Manager and lead read every line of the BEO together", "Menus, place cards, and other printed items match the BEO exactly", "Anything that doesn't match is fixed before the team meeting", "The rest of the team starts setting up the room"],
      standard: "The BEO and the printed items say the same thing." },
    { n: 3, phase: "A", roles: "L", title: "Team meeting before the event",
      items: ["Share the basics: party name, contact on site, date, time, and room", "Share the guest count and the minimum the party must spend on food and drink", "Go over the menu one item at a time", "Lead writes the order abbreviations on paper", "Lead tells the team to use only these abbreviations", "Each server writes the abbreviations at the far left of each space on their order sheet", "Each server leaves room under every seat number and course for changes and allergies", "Go over the drink rules: open bar, cash only, spending limit, and whether the wine is already chosen", "Go over valet parking, audio and video, and anything else for the event", "Share special instructions and anything still to follow up on"],
      standard: "Every server can say the menu, drink rules, and special instructions without looking." },
    { n: 4, phase: "A", roles: "L", title: "Give out tables and jobs",
      items: ["Give out tables and jobs", "Each server gets a full table or part of one by seat number, like seats 1-7 and seats 8-14", "Explain how the seats are numbered", "Pick where each server starts at the table. Everyone moves clockwise", "Confirm which silverware goes with each course", "Decide who handles food service and who handles drinks", "The lead is the one who gives the signal to serve and to clear, spoken out loud"],
      standard: "Everyone knows their table, their seats, and their job before service starts." },
    { n: 5, phase: "A", roles: "L", title: "Map out dietary needs",
      items: ["Write down every special meal by table and seat", "Walk the route: kitchen pass, dining room, tables, dish drop-off", "Decide where food gets picked up", "Note any planned breaks in service, like speeches or presentations"],
      standard: "The dietary list is posted at the kitchen pass and the lead has a copy." },
    { n: 6, phase: "B", roles: "S", title: "Set up the room",
      items: ["Tables are neat, lined up, and ready for guests", "Check the chairs, linens, glasses, silverware, and plates", "Place cards match the seating plan and menus are on the tables", "Water and drink supplies are ready", "Side stations are stocked with extra silverware and napkins", "Walkways are clear for serving and clearing"],
      standard: "Each server checks their own section before the lead checks the room." },
    { n: 7, phase: "B", roles: "S", title: "Silverware trays",
      items: ["Gather the right silverware for every course", "Set up one tray for each table"],
      standard: "The trays match the menu, course by course." },
    { n: 8, phase: "B", roles: "L", title: "Check the whole room",
      items: ["Check the entire room, not just your own section"],
      standard: "The lead tells the manager the room is ready." },
    { n: 9, phase: "C", roles: "L", title: "Meet the host",
      items: ["Find out who the host is (the person making the decisions)", "Introduce the team to the host", "Ask how the evening should go: normal service, or breaks for speeches or presentations. Lead tells the kitchen and management", "Ask about drinks: buying wine, wine by the glass, or cocktails only", "Write down any special occasions and anything else the host mentions"],
      standard: "Everything the host wants goes to the whole team and the manager right away." },
    { n: 10, phase: "C", roles: "S", title: "Seat the guests",
      items: ["Stay in your own section where guests can see you, not bunched up near the kitchen door", "Welcome guests and help them to their seats", "Offer water and the first drink that was planned", "Put back any place setting that was moved or taken away", "Tell the lead when your table is seated and ready"],
      standard: "Servers are in their sections as guests sit down." },
    { n: 11, phase: "O", roles: "L", title: "Split up the work",
      items: ["Enough servers are taking food orders", "The other servers keep the tables tidy and handle drinks", "Every server has the standard order sheet"],
      standard: "Every table is covered for both orders and drinks." },
    { n: 12, phase: "O", roles: "S", title: "Take orders",
      items: ["Take orders for your seats, for all courses at once", "Use only the abbreviations the lead gave you", "Write changes and allergies in the same space, under the seat number and course"],
      standard: "Every seat has every course written down." },
    { n: 13, phase: "O", roles: "SL", title: "Count and hand in orders",
      items: ["Count how many of each dish you ordered", "Hand your count to the lead", "Tell the lead out loud about special requests, swaps, and dietary limits", "Tell the lead out loud anything else the kitchen or team needs to know"],
      standard: "Nothing the kitchen needs to know is only on paper." },
    { n: 14, phase: "O", roles: "L", title: "Check the orders",
      items: ["Every server has handed in their orders", "Every order is checked and correct"],
      standard: "All orders are in and correct." },
    { n: 15, phase: "O", roles: "L", title: "Call the first course", key: true,
      items: ["Finish the count for the first course", "Call the first course out loud to the kitchen, like \"4 chopped salads, 2 crab cakes\""],
      standard: "The kitchen starts cooking the first course without waiting for the full count." },
    { n: 16, phase: "O", roles: "L", title: "Give the kitchen the full count", key: true,
      items: ["Finish the rest of the count", "Hand the full count to the kitchen", "Keep a copy: a photo on your phone or a photocopy"],
      standard: "The lead has a copy to make sure every single item goes to the right seat." },
    { n: 17, phase: "O", roles: "SL", title: "Dietary needs and seat changes",
      items: ["Check each dietary need with the guest yourself, quietly", "Write down seat changes and tell the team", "Tell the lead, manager, and kitchen about any new allergy or problem", "Never guess. Make sure a dish is safe before serving it"],
      standard: "The dietary list and seat changes are always up to date at the kitchen pass." },
    { n: 18, phase: "D", roles: "S", title: "Get ready for the course",
      items: ["Guests are seated", "The right silverware is on the table", "Drinks are not in the way of where the plates will go", "Dietary seat information is up to date", "No speech is about to start"],
      standard: "Don't pick up hot food until the table is ready for it." },
    { n: 19, phase: "D", roles: "LS", title: "Pick up the food",
      items: ["Lead decides when to start this course, based on how fast or slow guests are eating", "Servers go to the kitchen pass in the set order", "The expo confirms the table, the number of plates, and how the plates look", "Know which plates are special meals and where each one goes", "Carry plates only the approved way"],
      standard: "Food reaches the table hot. No server asks the kitchen to start their own table." },
    { n: 20, phase: "D", roles: "SL", title: "Serve the plates", key: true,
      items: ["Lead stands by each seat and does not run plates from the kitchen", "Servers go to their spots and move clockwise", "Serve from the right, all together, when the lead says go", "Lead says where every plate goes, using the saved order sheets", "Protein at six o'clock", "Dietary meals go to the seats you confirmed", "Give a short, matching description of each dish", "Step away without hanging around"],
      standard: "Every item lands in the right spot. Never reach across a guest." },
    { n: 21, phase: "D", roles: "S", title: "While guests eat",
      items: ["Watch your table", "Check in with guests at a good moment", "Refill water and any drinks that are allowed", "Replace any silverware that gets dropped, and keep bread stocked if it's part of the meal", "Quietly take away empty glasses", "Tell the lead about delays, uneaten food, or any concerns"],
      standard: "Someone is always watching the room. The whole team never leaves at the same time." },
    { n: 22, phase: "D", roles: "LS", title: "Clear the plates",
      items: ["Make sure everyone at the table is finished (ask politely if you're not sure)", "Wait for the lead to say go, out loud", "Clear together as a team, from the left", "Take away the silverware used for that course", "Take dishes straight to the dish drop-off, out of the guests' sight"],
      standard: "Clear the whole table at once. The lead server makes the final call. Never rush a guest to stay on schedule." },
    { n: 23, phase: "D", roles: "SL", title: "Between courses",
      items: ["Replace any used or missing silverware from the table's tray", "Tidy the place settings", "Check everyone's drinks", "Check for guest or seat changes", "Tell the lead how your table is doing, like \"Table 12 cleared, reset, ready.\"", "Lead checks the whole room and decides when to start the next course"],
      standard: "Every table reports to the lead before the next course starts." },
    { n: 24, phase: "E", roles: "S", title: "Dessert and coffee",
      items: ["Take away what's no longer needed and tidy the table", "Set out dessert silverware", "Serve coffee at the time that was agreed", "Keep water filled and keep an eye on your guests", "Keep serving until the last guest leaves"],
      standard: "Don't take down the room while guests are still using it." },
    { n: 25, phase: "F", roles: "L", title: "Get the check ready",
      items: ["Combine checks if needed", "Look at the BEO again to make sure everything was done", "Make sure the charges are right", "Print the check"],
      standard: "Every line of the BEO matches what was served and charged." },
    { n: 26, phase: "F", roles: "LM", title: "Manager reviews the check",
      items: ["Take the check to the manager", "Manager adjusts the service fee and tip (gratuity)", "Manager removes any charges that shouldn't be there and applies the deposit if there is one", "Manager and lead read the BEO together one last time"],
      standard: "Two people check the BEO before the check goes to the host." },
    { n: 27, phase: "F", roles: "L", title: "Payment and goodbye",
      items: ["Give the check to the host", "Take payment", "Thank the host and the guests", "File the BEO"],
      standard: "Payment is finished and the BEO is filed." }
  ]
};
