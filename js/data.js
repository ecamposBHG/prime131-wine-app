// Prime 131 Wine App — data
// Structure scale: 1 (lowest) to 5 (highest) for sweetness, acidity, tannin, alcohol, body

const WINES = [
  {
    id: "w1", name: "Ruffino Prosecco", style: "sparkling",
    grape: "100% Glera", producer: "Ruffino", region: "Veneto DOC, Italy",
    tastingNotes: "Green apple, pear, citrus, a whisper of white flowers",
    structure: { sweetness: 2, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    pairingDishIds: ["d-oysters", "d-edamame", "d-shishitos"],
    arsenal: "This is the one that makes the first five minutes of the meal feel like a celebration.",
    funFact: "Ruffino has been making wine in Tuscany since 1877 — this Prosecco is a newer addition, since the estate is historically known for Chianti, not sparkling wine."
  },
  {
    id: "w2", name: "Telmont Réserve Brut", style: "sparkling",
    grape: "Chardonnay, Pinot Meunier, Pinot Noir", producer: "Champagne Telmont", region: "Champagne, France",
    tastingNotes: "Honeysuckle, baked apple, brioche, a chalky mineral edge",
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    pairingDishIds: ["d-caviar", "d-shellfish-tower"],
    arsenal: "If they're ordering the caviar, this is the wine that was built for it.",
    funFact: "Telmont is backed by Leonardo DiCaprio, who's an investor and sustainability partner in the house — they're racing to be fully organic by 2031."
  },
  {
    id: "w3", name: "Nicolas Feuillatte Rosé Brut", style: "sparkling",
    grape: "Pinot Noir, Pinot Meunier, Chardonnay", producer: "Champagne Nicolas Feuillatte", region: "Chouilly, Champagne, France",
    tastingNotes: "Raspberry, strawberry, red currant, a touch of chalk",
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    pairingDishIds: ["d-tuna-tartare", "d-yellowtail-carpaccio", "d-seared-spicy-salmon-roll"],
    arsenal: "It's the one wine that looks as good as it tastes — a great answer for someone who orders with their eyes first.",
    funFact: "Nicolas Feuillatte is the best-selling Champagne in France — it's a cooperative of over 5,000 growers, not a single royal estate."
  },
  {
    id: "w4", name: "Santa Margherita Pinot Grigio", style: "white",
    grape: "100% Pinot Grigio", producer: "Santa Margherita", region: "Alto Adige DOC, Italy",
    tastingNotes: "Green apple, citrus, white flowers, a mineral streak",
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    pairingDishIds: ["d-grilled-romaine", "d-fire-roasted-beets", "d-branzino"],
    arsenal: "It's the wine equivalent of a good handshake — reliable, clean, nobody's ever disappointed.",
    funFact: "Santa Margherita is largely credited with making Pinot Grigio popular in America in the first place."
  },
  {
    id: "w5", name: "Emmolo Sauvignon Blanc", style: "white",
    grape: "100% Sauvignon Blanc", producer: "Emmolo", region: "Napa Valley, California",
    tastingNotes: "Citrus zest, white peach, fresh-cut herb, a touch of wet stone",
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    pairingDishIds: ["d-oysters", "d-yellowtail-carpaccio", "d-crunchy-spicy-tuna-roll", "d-131-california-roll"],
    arsenal: "This is the one that makes the raw bar taste like it just came off the boat.",
    funFact: "Emmolo is made by the same family behind Caymus — Emmolo is the maiden name of Charlie Wagner Sr.'s wife."
  },
  {
    id: "w6", name: "Cambria 'Katherine's Vineyard' Chardonnay", style: "white",
    grape: "100% Chardonnay", producer: "Cambria", region: "Santa Maria Valley, California",
    tastingNotes: "Toasted oak, tropical fruit, baked apple, a creamy vanilla note",
    structure: { sweetness: 1, acidity: 2, tannin: 0, alcohol: 4, body: 4 },
    pairingDishIds: ["d-mac-cheese", "d-mashed-potato", "d-miso-cod", "d-wagyu-skirt"],
    arsenal: "Built for anything that comes off the robata with butter on it.",
    funFact: "The vineyard is named for Katherine Jackson, wife of Kendall-Jackson founder Jess Jackson."
  },
  {
    id: "w7", name: "Stag's Leap Chardonnay", style: "white",
    grape: "100% Chardonnay", producer: "Stag's Leap Wine Cellars", region: "Napa Valley, California",
    tastingNotes: "Baked pear, honeysuckle, toasted brioche, subtle vanilla oak",
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 4, body: 4 },
    pairingDishIds: ["d-lobster", "d-branzino", "d-chicken-fried-lobster"],
    arsenal: "This is the step-up Chardonnay — order it when the dish is the star and deserves a wine that doesn't hide.",
    funFact: "Stag's Leap Wine Cellars beat top French Bordeaux in the famous 1976 'Judgment of Paris' blind tasting — the event that put Napa on the map."
  },
  {
    id: "w8", name: "Miraval Rosé", style: "white",
    grape: "Grenache, Cinsault, Syrah", producer: "Château Miraval", region: "Côtes de Provence, France",
    tastingNotes: "Pale pink, white peach, citrus, a delicate floral lift",
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 2 },
    pairingDishIds: ["d-chopped-salad", "d-naan", "d-edamame"],
    arsenal: "It drinks like summer in a glass — the easiest 'yes' on the whole list.",
    funFact: "Château Miraval is the property once owned by Brad Pitt and Angelina Jolie — decades earlier, Pink Floyd recorded parts of 'The Wall' in the estate's studio."
  },
  {
    id: "w9", name: "Domaine de la Chezatte Sancerre Rosé", style: "white",
    grape: "100% Pinot Noir", producer: "Domaine de la Chézatte", region: "Sancerre, Loire Valley, France",
    tastingNotes: "Salmon-pink hue, red berry, citrus, flinty mineral edge",
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 2 },
    pairingDishIds: ["d-clam-chowder", "d-shishitos", "d-hamachi"],
    arsenal: "It's a rosé for people who think they don't like rosé — more mineral, less candy.",
    funFact: "Sancerre rosé is made from Pinot Noir, not a rosé-specific grape — same grape as red Burgundy, just barely kissed by the skins."
  },
  {
    id: "w10", name: "Benton-Lane Pinot Noir", style: "red",
    grape: "100% Pinot Noir", producer: "Benton-Lane", region: "Willamette Valley, Oregon",
    tastingNotes: "Bright red cherry, cranberry, forest floor, a savory herbal edge",
    structure: { sweetness: 1, acidity: 4, tannin: 2, alcohol: 3, body: 2 },
    pairingDishIds: ["d-branzino", "d-miso-cod", "d-chefs-nigiri"],
    arsenal: "This is the red that drinks like a white — perfect if they want red wine but are eating fish.",
    funFact: "The winery's named for the two Oregon counties its vineyard straddles — Benton and Lane."
  },
  {
    id: "w11", name: "Flowers Pinot Noir", style: "red",
    grape: "100% Pinot Noir", producer: "Flowers Vineyard & Winery", region: "Sonoma Coast, California",
    tastingNotes: "Wild strawberry, dark cherry, baking spice, earthy minerality",
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 3, body: 3 },
    pairingDishIds: ["d-wagyu-skirt", "d-short-rib", "d-negi-toro-roll"],
    arsenal: "This is the Pinot for people who think Pinot can't stand up to a steak — this one can.",
    funFact: "Flowers' vineyards sit on an exposed, foggy Sonoma Coast ridge so remote that most winemakers thought it was too extreme to grow anything."
  },
  {
    id: "w12", name: "Corazon del Sol Malbec", style: "red",
    grape: "100% Malbec", producer: "Corazón del Sol", region: "Uco Valley, Mendoza, Argentina",
    tastingNotes: "Black plum, blackberry, violet, a touch of tar and spice",
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 4 },
    pairingDishIds: ["d-short-rib", "d-marinated-chicken", "d-burger"],
    arsenal: "High-altitude Malbec — the fruit is riper and the tannins softer than what people expect.",
    funFact: "The vineyards sit over 3,600 feet up in the Andes foothills — that altitude is what gives the wine its brighter acidity."
  },
  {
    id: "w13", name: "Markham Merlot", style: "red",
    grape: "Merlot-dominant blend", producer: "Markham Vineyards", region: "Napa Valley, California",
    tastingNotes: "Black cherry, plum, cocoa, soft baking spice",
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    pairingDishIds: ["d-marinated-chicken", "d-bone-marrow", "d-short-rib"],
    arsenal: "This is the wine for the guest who says 'I don't do big reds' — full flavor, none of the grip.",
    funFact: "Markham is one of Napa's older wineries, dating to the 1870s — the stone building on the property is original."
  },
  {
    id: "w14", name: "Austin Hope Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Austin Hope", region: "Paso Robles, California",
    tastingNotes: "Blackberry, dark chocolate, vanilla oak, warm spice",
    structure: { sweetness: 1, acidity: 2, tannin: 4, alcohol: 5, body: 4 },
    pairingDishIds: ["d-ribeye", "d-ny-strip-14", "d-short-rib"],
    arsenal: "Paso Cab runs riper and rounder than Napa — order it for the guest who wants power without sharp edges.",
    funFact: "Austin Hope is named after the winemaker himself — his family were early pioneers who helped put Paso Robles on the map as a serious Cabernet region."
  },
  {
    id: "w15", name: "Oberon Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Oberon", region: "Napa Valley, California",
    tastingNotes: "Dark berry, cassis, soft oak spice, a touch of mocha",
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 3 },
    pairingDishIds: ["d-filet-8", "d-bone-in-filet", "d-burger"],
    arsenal: "Same family as Caymus, built to drink younger and lighter on the wallet — great everyday steak Cab.",
    funFact: "Oberon is named after the King of the Fairies from Shakespeare's 'A Midsummer Night's Dream.'"
  },
  {
    id: "w16", name: "Caymus Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Caymus Vineyards", region: "California",
    tastingNotes: "Rich black currant, mocha, vanilla, toasted oak",
    structure: { sweetness: 1, acidity: 2, tannin: 3, alcohol: 5, body: 5 },
    pairingDishIds: ["d-tomahawk", "d-porterhouse", "d-ny-strip-16"],
    arsenal: "This is the name guests ask for by default — lean into it, it sells itself.",
    funFact: "Caymus takes its name from 'Rancho Caymus,' the original Spanish land grant covering part of Napa Valley — founded by Charlie Wagner Sr. in 1972, still family-run today."
  },
  {
    id: "w17", name: "Domaine de Cabasse 'Cuvée Marguerite'", style: "red",
    grape: "Grenache, Syrah", producer: "Domaine de Cabasse", region: "Côtes-du-Rhône, France",
    tastingNotes: "Cranberry, wild strawberry, garrigue herbs, a peppery spice note",
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    pairingDishIds: ["d-naan", "d-marinated-chicken", "d-wild-mushrooms"],
    arsenal: "It's the wine that tastes like the south of France smells — herby, sun-warmed, easy to fall for.",
    funFact: "The estate's roots trace back to the 14th century, when the Popes lived in nearby Avignon."
  },
  {
    id: "w18", name: "Madame de Beaucaillou", style: "red",
    grape: "Merlot, Cabernet Sauvignon, Petit Verdot, Cabernet Franc", producer: "Second wine of Château Ducru-Beaucaillou", region: "Haut-Médoc, Bordeaux, France",
    tastingNotes: "Blackcurrant, violet, morello cherry, subtle French oak spice",
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 3, body: 4 },
    pairingDishIds: ["d-short-rib", "d-bone-in-filet", "d-bone-marrow"],
    arsenal: "This is a real Bordeaux château pedigree at a by-the-glass price — worth saying that part out loud.",
    funFact: "'Madame' is the second wine of a famous St-Julien château — made from younger vines and declassified lots from a much more expensive estate wine."
  },
  {
    id: "w19", name: "Trefethen 'Eshcol' Meritage", style: "red",
    grape: "Cabernet Sauvignon-led Bordeaux blend", producer: "Trefethen Family Vineyards", region: "Oak Knoll District, Napa Valley, California",
    tastingNotes: "Black cherry, dried herb, cedar, soft baking spice",
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 3 },
    pairingDishIds: ["d-tenderloin-8", "d-wagyu-skirt", "d-short-rib"],
    arsenal: "It's a blend, not a single grape — more complexity in the glass than a straight Cab at the same price.",
    funFact: "'Eshcol' is a biblical name for a valley famous for its grapes — also the name of the historic wooden winery building on Trefethen's property, built in 1886."
  },
  {
    id: "w20", name: "Yoshi No Gawa 'Winter Warrior' Junmai Ginjo", style: "sake",
    grape: "Gohyakumangoku rice, 60% polish", producer: "Yoshinogawa", region: "Niigata Prefecture, Japan",
    tastingNotes: "Melon, honeydew, lychee, light floral aromatics",
    structure: { sweetness: 2, acidity: 1, tannin: 0, alcohol: 3, body: 3 },
    pairingDishIds: ["d-sushi-sashimi-nigiri", "d-sushi-rolls", "d-sashimi-platter", "d-omakase-platter"],
    arsenal: "For a table doing the omakase or the platter, this is the pour that actually matches the fish instead of fighting it.",
    funFact: "Yoshinogawa was founded in 1548 — it's the oldest sake brewery in Niigata Prefecture and the eighth oldest in all of Japan."
  }
];

const DISHES = [
  // Raw Bar
  { id: "d-oysters", name: "East Coast Oysters", section: "Raw Bar", description: "Chilled: fresh wasabi, shallots, ponzu. Roasted: coconut, chili, cilantro, lime.", pairedWineIds: ["w1", "w5"] },
  { id: "d-tuna-tartare", name: "Tuna Tartare", section: "Raw Bar", description: "Avocado purée, wakamomo, chives, taro chips, sesame garlic soy dressing", pairedWineIds: ["w3"] },
  { id: "d-yellowtail-carpaccio", name: "Yellowtail Carpaccio", section: "Raw Bar", description: "Orange supreme, shishito, wakamomo citrus ponzu, ichimi togarashi", pairedWineIds: ["w3", "w5"] },
  { id: "d-caviar", name: "Prime 131 Reserve Caviar", section: "Raw Bar", description: "House reserve caviar service", pairedWineIds: ["w2"] },
  { id: "d-shellfish-tower", name: "Fire Grilled Shellfish Tower", section: "Raw Bar", description: "1lb stone crab, 6 prawns, 12 roasted oysters, whole roasted lobster", pairedWineIds: ["w2"] },

  // Starters
  { id: "d-sourdough", name: "Grilled Sourdough Bread", section: "Starters", description: "Beurre d'Isigny, Maldon salt", pairedWineIds: [] },
  { id: "d-naan", name: "Grilled Naan", section: "Starters", description: "Choice of baba ganoush, labneh, or whipped ricotta", pairedWineIds: ["w8", "w17"] },
  { id: "d-shishitos", name: "Fried Shishitos", section: "Starters", description: "Ponzu, sesame seeds", pairedWineIds: ["w1", "w9"] },
  { id: "d-chicken-fried-lobster", name: "Chicken Fried Lobster", section: "Starters", description: "Brown butter aioli, preserved lemon gel, micro greens", pairedWineIds: ["w7"] },
  { id: "d-bone-marrow", name: "Dinosaur Bone Marrow", section: "Starters", description: "Onion jam, braised short ribs, grilled sourdough", pairedWineIds: ["w13", "w18"] },
  { id: "d-crab-cakes", name: "Jumbo Lump Mini Crab Cakes", section: "Starters", description: "Spicy aioli, frisée, honey-lime vinaigrette", pairedWineIds: [] },
  { id: "d-edamame", name: "Edamame", section: "Starters", description: "Choice of sea salt, lemon, or spiced", pairedWineIds: ["w1", "w8"] },

  // Soups & Salads
  { id: "d-clam-chowder", name: "Smoked Clam Chowder", section: "Soups & Salads", description: "Bacon bits, crispy potato, celery leaves, chili oil", pairedWineIds: ["w9"] },
  { id: "d-grilled-romaine", name: "Grilled Romaine Salad", section: "Soups & Salads", description: "Lemon candy, parmesan breadcrumbs, anchovy black garlic sauce", pairedWineIds: ["w4"] },
  { id: "d-chopped-salad", name: "Prime 131 Chopped Salad", section: "Soups & Salads", description: "House mixed baby greens, shaved red onion, cherry tomato, feta, shaved radish, plum vinaigrette", pairedWineIds: ["w8"] },
  { id: "d-fire-roasted-beets", name: "Fire-Roasted Beets", section: "Soups & Salads", description: "Labneh, pistachio dukkah, scallions", pairedWineIds: ["w4"] },

  // Entrées
  { id: "d-lobster", name: "Whole Roasted Lobster", section: "Entrées", description: "Grilled lemon, garlic ponzu butter", pairedWineIds: ["w7"] },
  { id: "d-miso-cod", name: "Miso Marinated Cod", section: "Entrées", description: "Grilled bok choy, coconut lemongrass espuma", pairedWineIds: ["w6", "w10"] },
  { id: "d-burger", name: "Prime 131 Burger", section: "Entrées", description: "American cheese, veal bacon, brioche bun, special sauce, french fries", pairedWineIds: ["w12", "w15"] },
  { id: "d-branzino", name: "Salt-Grilled Branzino", section: "Entrées", description: "Fresh herb salad, brown butter, lemon", pairedWineIds: ["w4", "w7", "w10"] },
  { id: "d-wagyu-skirt", name: "Wagyu Skirt Steak", section: "Entrées", description: "Fourme d'Ambert cheese, compressed peppers, chili vinaigrette", pairedWineIds: ["w6", "w11", "w19"] },
  { id: "d-short-rib", name: "Grilled Bone-in Short Rib", section: "Entrées", description: "Chimichurri, garlic breadcrumbs", pairedWineIds: ["w11", "w12", "w13", "w14", "w18", "w19"] },
  { id: "d-marinated-chicken", name: "Marinated Chicken", section: "Entrées", description: "Espelette, crispy baby potatoes, spicy aioli", pairedWineIds: ["w12", "w13", "w17"] },

  // Sushi (Sashimi & Nigiri)
  { id: "d-tuna-sushi", name: "Tuna (Maguro / Akami / Chutoro / Otoro)", section: "Sushi", description: "Sashimi and nigiri, 2 pieces per order", pairedWineIds: ["w20"] },
  { id: "d-hamachi", name: "Hamachi", section: "Sushi", description: "Other fish, sashimi and nigiri", pairedWineIds: ["w9", "w20"] },
  { id: "d-chefs-nigiri", name: "Chef's Selection of Nigiri", section: "Sushi", description: "Chef's choice, 3/6/9/12 pieces", pairedWineIds: ["w10", "w20"] },
  { id: "d-sashimi-platter", name: "Premium Sashimi Platter", section: "Sushi", description: "Chef's choice variations", pairedWineIds: ["w20"] },
  { id: "d-omakase-platter", name: "Prime 131 Omakase Platter", section: "Sushi", description: "14 pcs sashimi, 14 pcs nigiri, choice of 3 specialty rolls", pairedWineIds: ["w20"] },
  { id: "d-sushi-sashimi-nigiri", name: "Sashimi & Nigiri (general)", section: "Sushi", description: "Full sashimi and nigiri program", pairedWineIds: ["w20"] },

  // Sushi Rolls
  { id: "d-prime131-roll", name: "Prime 131 Roll", section: "Sushi Rolls", description: "A5 wagyu, foie gras, shrimp tempura, avocado, shiso, yuzu aioli, eel sauce", pairedWineIds: [] },
  { id: "d-crunchy-spicy-tuna-roll", name: "Crunchy Spicy Tuna Roll", section: "Sushi Rolls", description: "Avocado, tama arare, kaiware, sweet soy sauce", pairedWineIds: ["w5"] },
  { id: "d-dragon-roll", name: "Dragon Roll", section: "Sushi Rolls", description: "Shrimp tempura, jumbo lump crab salad, mango, avocado, sriracha", pairedWineIds: [] },
  { id: "d-yellowtail-serrano-roll", name: "Yellowtail Serrano Roll", section: "Sushi Rolls", description: "Cucumber, kizami wasabi, scallions, wasabi mayo", pairedWineIds: [] },
  { id: "d-seared-spicy-salmon-roll", name: "Seared Spicy Salmon Tartare Roll", section: "Sushi Rolls", description: "Spiced salmon mix, seared salmon, spicy aioli, ponzu, arare", pairedWineIds: ["w3"] },
  { id: "d-negi-toro-roll", name: "Negi Toro Roll", section: "Sushi Rolls", description: "Fatty tuna, finely diced scallions", pairedWineIds: ["w11"] },
  { id: "d-131-california-roll", name: "131 California Roll", section: "Sushi Rolls", description: "Lump crab, cucumber, avocado, tobiko, spicy mayo", pairedWineIds: ["w5"] },
  { id: "d-miso-salmon-roll", name: "Miso Salmon Roll", section: "Sushi Rolls", description: "Kanpyo, asparagus tempura, avocado, truffle oil, ponzu", pairedWineIds: [] },
  { id: "d-sushi-rolls", name: "Sushi Rolls (general)", section: "Sushi Rolls", description: "Full sushi roll program", pairedWineIds: ["w20"] },

  // Sides
  { id: "d-mashed-potato", name: "Loaded Mashed Potato", section: "Sides", description: "Short ribs, raclette, truffle jus", pairedWineIds: ["w6"] },
  { id: "d-wild-mushrooms", name: "Exotic Wild Mushrooms", section: "Sides", description: "Pickled shallot, herbs, breadcrumbs", pairedWineIds: ["w17"] },
  { id: "d-mac-cheese", name: "Ricotta Stuffed Mac & Cheese", section: "Sides", description: "Toasted bread crumbs, parsley", pairedWineIds: ["w6"] },
  { id: "d-asparagus", name: "Grilled Asparagus", section: "Sides", description: "Ricotta, mojo rojo", pairedWineIds: [] },
  { id: "d-fries", name: "French Fries", section: "Sides", description: "Parsley, spicy aioli", pairedWineIds: [] },
  { id: "d-broccolini", name: "Grilled Broccolini", section: "Sides", description: "Lemon-chili vinaigrette", pairedWineIds: [] },
  { id: "d-spinach-gratin", name: "Spinach Gratin", section: "Sides", description: "Parmesan, garlic herb bread crumbs", pairedWineIds: [] },

  // Steaks
  { id: "d-tenderloin-8", name: "8oz American Tenderloin (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w19"] },
  { id: "d-ny-strip-12", name: "12oz American NY Strip (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: [] },
  { id: "d-ribeye", name: "18oz American Ribeye (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w14"] },
  { id: "d-ny-strip-14", name: "14oz Australian NY Strip (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w14"] },
  { id: "d-tomahawk", name: "32oz Australian Tomahawk (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w16"] },
  { id: "d-kagawa-a5", name: "4oz Japanese A5 Wagyu Kagawa Olive Beef Tenderloin", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: [] },
  { id: "d-filet-8", name: "8oz Filet (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w15"] },
  { id: "d-bone-in-filet", name: "12oz Bone-In Filet (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w15", "w18"] },
  { id: "d-ny-strip-16", name: "16oz USDA Prime NY Strip (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w16"] },
  { id: "d-porterhouse", name: "USDA Prime Porterhouse for Two (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w16"] }
];

const STYLE_LABELS = {
  sparkling: "Sparkling",
  white: "Whites & Rosés",
  red: "Reds",
  dessert: "Dessert",
  sake: "Sake"
};

const STYLE_ORDER = ["sparkling", "white", "red", "dessert", "sake"];
const SECTION_ORDER = ["Raw Bar", "Starters", "Soups & Salads", "Entrées", "Sushi", "Sushi Rolls", "Sides", "Steaks"];
