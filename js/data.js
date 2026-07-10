// Prime 131 Wine App — data
// Structure scale: 1 (lowest) to 5 (highest) for sweetness, acidity, tannin, alcohol, body

const WINES = [
  {
    id: "w1", name: "Ruffino Prosecco", style: "sparkling",
    grape: "100% Glera", producer: "Ruffino", region: "Veneto DOC, Italy",
    winemaker: "Ruffino's technical winemaking team",
    flavorTags: ["Green Apple", "Pear", "Citrus", "White Flower"],
    structure: { sweetness: 2, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    pairingDishIds: ["d-oysters", "d-edamame", "d-shishitos"],
    arsenal: "This is the one that makes the first five minutes of the meal feel like a celebration.",
    funFact: "Ruffino has been making wine in Tuscany since 1877 — this Prosecco is a newer addition, since the estate is historically known for Chianti, not sparkling wine.",
    funFact2: "Ruffino is one of the most recognized Italian wine names in the US, largely thanks to their iconic straw-covered Chianti flask from decades past.",
    shortStory: "Ruffino started as a small Tuscan producer in the 1870s and grew into one of Italy's most exported wine names. Their Prosecco line is a newer chapter, built to bring that same reliability to the sparkling category."
  },
  {
    id: "w2", name: "Telmont Réserve Brut", style: "sparkling",
    grape: "Chardonnay, Pinot Meunier, Pinot Noir", producer: "Champagne Telmont", region: "Champagne, France",
    winemaker: "Bertrand Lhôpital, Cellar Master",
    flavorTags: ["Honeysuckle", "Baked Apple", "Brioche", "Chalky Mineral"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    pairingDishIds: ["d-caviar", "d-shellfish-tower"],
    arsenal: "If they're ordering the caviar, this is the wine that was built for it.",
    funFact: "Telmont is backed by Leonardo DiCaprio, who's an investor and sustainability partner in the house — they're racing to be fully organic by 2031.",
    funFact2: "Telmont was founded in 1912 and is one of the few Champagne houses farming nearly all of its own vineyards with low-intervention, near-organic methods.",
    shortStory: "Founded in a small Marne village in 1912, Telmont stayed under the radar for decades. Recent investment and a sustainability-first mission have turned it into one of Champagne's most talked-about small houses."
  },
  {
    id: "w3", name: "Nicolas Feuillatte Rosé Brut", style: "sparkling",
    grape: "Pinot Noir, Pinot Meunier, Chardonnay", producer: "Champagne Nicolas Feuillatte", region: "Chouilly, Champagne, France",
    winemaker: "Cellar Master & blending team, Centre Vinicole",
    flavorTags: ["Raspberry", "Strawberry", "Red Currant", "Chalk"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    pairingDishIds: ["d-tuna-tartare", "d-yellowtail-carpaccio", "d-seared-spicy-salmon-roll"],
    arsenal: "It's the one wine that looks as good as it tastes — a great answer for someone who orders with their eyes first.",
    funFact: "Nicolas Feuillatte is the best-selling Champagne in France — it's a cooperative of over 5,000 growers, not a single royal estate.",
    funFact2: "The house is named after Nicolas Feuillatte, a champagne negociant who founded it in 1976, making it one of the youngest major Champagne names.",
    shortStory: "Built as a cooperative representing thousands of small grower families rather than one aristocratic estate, Nicolas Feuillatte proves Champagne doesn't need centuries of noble history to be excellent — just excellent fruit and blending."
  },
  {
    id: "w4", name: "Santa Margherita Pinot Grigio", style: "white",
    grape: "100% Pinot Grigio", producer: "Santa Margherita", region: "Alto Adige DOC, Italy",
    winemaker: "Santa Margherita winemaking team",
    flavorTags: ["Green Apple", "Citrus", "White Flowers", "Mineral"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    pairingDishIds: ["d-grilled-romaine", "d-fire-roasted-beets", "d-branzino"],
    arsenal: "It's the wine equivalent of a good handshake — reliable, clean, nobody's ever disappointed.",
    funFact: "Santa Margherita is largely credited with making Pinot Grigio popular in America in the first place.",
    funFact2: "Santa Margherita was founded in 1935 by Count Gaetano Marzotto, named in honor of his late wife, Margherita.",
    shortStory: "Before Santa Margherita, most American drinkers had never heard of Pinot Grigio. Their clean, crisp house style became the template most people now picture when they think of the grape."
  },
  {
    id: "w5", name: "Emmolo Sauvignon Blanc", style: "white",
    grape: "100% Sauvignon Blanc", producer: "Emmolo", region: "Napa Valley, California",
    winemaker: "Jenny Wagner",
    flavorTags: ["Citrus Zest", "White Peach", "Fresh Herb", "Wet Stone"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    pairingDishIds: ["d-oysters", "d-yellowtail-carpaccio", "d-crunchy-spicy-tuna-roll", "d-131-california-roll"],
    arsenal: "This is the one that makes the raw bar taste like it just came off the boat.",
    funFact: "Emmolo is made by the same family behind Caymus — Emmolo is the maiden name of Charlie Wagner Sr.'s wife.",
    funFact2: "Jenny Wagner is part of the fourth generation of the Wagner family in Napa Valley, and also oversees experimental plantings at the family's Suisun Valley property.",
    shortStory: "Emmolo is Jenny Wagner's own label within the larger Wagner family of wines — named for her mother's side, Sicilian immigrants who ran a grapevine nursery in Napa for decades."
  },
  {
    id: "w6", name: "Cambria 'Katherine's Vineyard' Chardonnay", style: "white",
    grape: "100% Chardonnay", producer: "Cambria", region: "Santa Maria Valley, California",
    winemaker: "Cambria estate winemaking team",
    flavorTags: ["Toasted Oak", "Tropical Fruit", "Baked Apple", "Vanilla"],
    structure: { sweetness: 1, acidity: 2, tannin: 0, alcohol: 4, body: 4 },
    pairingDishIds: ["d-mac-cheese", "d-mashed-potato", "d-miso-cod", "d-wagyu-skirt"],
    arsenal: "Built for anything that comes off the robata with butter on it.",
    funFact: "The vineyard is named for Katherine Jackson, wife of Kendall-Jackson founder Jess Jackson.",
    funFact2: "Cambria was one of several estates founded by Jess and Barbara Banke Jackson as part of building out the Jackson Family Wines portfolio.",
    shortStory: "Katherine's Vineyard sits in the Santa Maria Valley, one of the few California AVAs that runs east-west, funneling cool Pacific air straight through the vines — part of why this Chardonnay keeps its richness without losing freshness."
  },
  {
    id: "w7", name: "Stag's Leap Chardonnay", style: "white",
    grape: "100% Chardonnay", producer: "Stag's Leap Wine Cellars", region: "Napa Valley, California",
    winemaker: "Marcus Notaro, Head Winemaker",
    flavorTags: ["Baked Pear", "Honeysuckle", "Toasted Brioche", "Vanilla Oak"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 4, body: 4 },
    pairingDishIds: ["d-lobster", "d-branzino", "d-chicken-fried-lobster"],
    arsenal: "This is the step-up Chardonnay — order it when the dish is the star and deserves a wine that doesn't hide.",
    funFact: "Stag's Leap Wine Cellars beat top French Bordeaux in the famous 1976 'Judgment of Paris' blind tasting — the event that put Napa on the map.",
    funFact2: "Marcus Notaro joined Stag's Leap Wine Cellars in 2013 after working at Col Solare, and now leads winemaking across the entire estate portfolio.",
    shortStory: "Stag's Leap built its reputation on Cabernet after the 1976 Judgment of Paris, but the estate's Chardonnay carries the same philosophy — richness balanced by restraint, an approach the winery calls 'an iron fist in a velvet glove.'"
  },
  {
    id: "w8", name: "Miraval Rosé", style: "white",
    grape: "Grenache, Cinsault, Syrah", producer: "Château Miraval", region: "Côtes de Provence, France",
    winemaker: "Estate winemaking team, Château Miraval",
    flavorTags: ["White Peach", "Citrus", "Floral"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 2 },
    pairingDishIds: ["d-chopped-salad", "d-naan", "d-edamame"],
    arsenal: "It drinks like summer in a glass — the easiest 'yes' on the whole list.",
    funFact: "Château Miraval is the property once owned by Brad Pitt and Angelina Jolie — decades earlier, Pink Floyd recorded parts of 'The Wall' in the estate's studio.",
    funFact2: "Miraval has been producing wine since the 16th century, long before its Hollywood ownership — the estate's recording studio has also hosted AC/DC and Sting.",
    shortStory: "Long before it was a celebrity property, Miraval was a working wine estate in the hills of Correns, Provence. Today it's one of the region's most recognized rosé labels, made in a classic pale, dry Provençal style."
  },
  {
    id: "w9", name: "Domaine de la Chezatte Sancerre Rosé", style: "white",
    grape: "100% Pinot Noir", producer: "Domaine de la Chézatte", region: "Sancerre, Loire Valley, France",
    winemaker: "Estate winemaking team",
    flavorTags: ["Red Berry", "Citrus", "Flint"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 2 },
    pairingDishIds: ["d-clam-chowder", "d-shishitos", "d-hamachi"],
    arsenal: "It's a rosé for people who think they don't like rosé — more mineral, less candy.",
    funFact: "Sancerre rosé is made from Pinot Noir, not a rosé-specific grape — same grape as red Burgundy, just barely kissed by the skins.",
    funFact2: "The estate has been family-run across four generations, farming the same Sancerre limestone hillsides the whole time.",
    shortStory: "Sancerre is famous for white wine, but a small amount of Pinot Noir grown on the same limestone slopes goes into pale, mineral-driven rosé like this one — a style locals drink far more than tourists ever hear about."
  },
  {
    id: "w10", name: "Benton-Lane Pinot Noir", style: "red",
    grape: "100% Pinot Noir", producer: "Benton-Lane", region: "Willamette Valley, Oregon",
    winemaker: "Estate winemaking team",
    flavorTags: ["Red Cherry", "Cranberry", "Forest Floor", "Herbal"],
    structure: { sweetness: 1, acidity: 4, tannin: 2, alcohol: 3, body: 2 },
    pairingDishIds: ["d-branzino", "d-miso-cod", "d-chefs-nigiri"],
    arsenal: "This is the red that drinks like a white — perfect if they want red wine but are eating fish.",
    funFact: "The winery's named for the two Oregon counties its vineyard straddles — Benton and Lane.",
    funFact2: "Benton-Lane dry-farms its estate vineyard, meaning the vines get no irrigation — forcing deeper roots and, the winery argues, more concentrated fruit.",
    shortStory: "Founded in the early 1980s in the Willamette Valley, Benton-Lane was one of the earlier wineries to bet on Oregon Pinot Noir before the region became internationally famous for it."
  },
  {
    id: "w11", name: "Flowers Pinot Noir", style: "red",
    grape: "100% Pinot Noir", producer: "Flowers Vineyard & Winery", region: "Sonoma Coast, California",
    winemaker: "Chantal Forthun, Director of Winemaking",
    flavorTags: ["Wild Strawberry", "Dark Cherry", "Baking Spice", "Earthy Mineral"],
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 3, body: 3 },
    pairingDishIds: ["d-wagyu-skirt", "d-short-rib", "d-negi-toro-roll"],
    arsenal: "This is the Pinot for people who think Pinot can't stand up to a steak — this one can.",
    funFact: "Flowers' vineyards sit on an exposed, foggy Sonoma Coast ridge so remote that most winemakers thought it was too extreme to grow anything.",
    funFact2: "Chantal Forthun has led winemaking at Flowers since 2012, working from vineyards remote enough that the team can sometimes hear sea lions barking on the coastal breeze.",
    shortStory: "Founded by Walt and Joan Flowers in 1989 on land most winemakers considered too extreme to farm, Flowers helped prove the far Sonoma Coast could produce some of California's most elegant Pinot Noir."
  },
  {
    id: "w12", name: "Corazon del Sol Malbec", style: "red",
    grape: "100% Malbec", producer: "Corazón del Sol", region: "Uco Valley, Mendoza, Argentina",
    winemaker: "Estate winemaking team, Uco Valley",
    flavorTags: ["Black Plum", "Blackberry", "Violet", "Tar & Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 4 },
    pairingDishIds: ["d-short-rib", "d-marinated-chicken", "d-burger"],
    arsenal: "High-altitude Malbec — the fruit is riper and the tannins softer than what people expect.",
    funFact: "The vineyards sit over 3,600 feet up in the Andes foothills — that altitude is what gives the wine its brighter acidity.",
    funFact2: "Corazón del Sol translates to 'heart of the sun,' a nod to the intense high-altitude sunlight the Uco Valley gets year-round.",
    shortStory: "Malbec followed French immigrants to Argentina in the 1800s and nearly disappeared after a hard frost in the 1950s. High-altitude sites like this one in the Uco Valley are part of why the grape came roaring back as Argentina's signature red."
  },
  {
    id: "w13", name: "Markham Merlot", style: "red",
    grape: "Merlot-dominant blend", producer: "Markham Vineyards", region: "Napa Valley, California",
    winemaker: "Estate winemaking team",
    flavorTags: ["Black Cherry", "Plum", "Cocoa", "Baking Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    pairingDishIds: ["d-marinated-chicken", "d-bone-marrow", "d-short-rib"],
    arsenal: "This is the wine for the guest who says 'I don't do big reds' — full flavor, none of the grip.",
    funFact: "Markham is one of Napa's older wineries, dating to the 1870s — the stone building on the property is original.",
    funFact2: "Markham was one of the first Napa wineries to release a varietal Merlot as its own standalone wine, back when most Merlot was only used for blending.",
    shortStory: "The winery's stone building dates to the 1870s, making Markham one of the physically oldest working wine properties in Napa Valley, even though the Markham name itself came later."
  },
  {
    id: "w14", name: "Austin Hope Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Austin Hope", region: "Paso Robles, California",
    winemaker: "Austin Hope",
    flavorTags: ["Blackberry", "Dark Chocolate", "Vanilla Oak", "Warm Spice"],
    structure: { sweetness: 1, acidity: 2, tannin: 4, alcohol: 5, body: 4 },
    pairingDishIds: ["d-ribeye", "d-ny-strip-14", "d-short-rib"],
    arsenal: "Paso Cab runs riper and rounder than Napa — order it for the guest who wants power without sharp edges.",
    funFact: "Austin Hope is named after the winemaker himself — his family were early pioneers who helped put Paso Robles on the map as a serious Cabernet region.",
    funFact2: "Austin Hope's father, Chuck Hope, was one of the first to plant Cabernet Sauvignon on Paso Robles' west side, helping establish the region as serious Cabernet country.",
    shortStory: "Built on ripe, generous Paso Robles Cabernet at a time when most collectors only took Napa seriously, Austin Hope's namesake wine helped change that conversation."
  },
  {
    id: "w15", name: "Oberon Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Oberon", region: "Napa Valley, California",
    winemaker: "Chuck Wagner",
    flavorTags: ["Dark Berry", "Cassis", "Oak Spice", "Mocha"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 3 },
    pairingDishIds: ["d-filet-8", "d-bone-in-filet", "d-burger"],
    arsenal: "Same family as Caymus, built to drink younger and lighter on the wallet — great everyday steak Cab.",
    funFact: "Oberon is named after the King of the Fairies from Shakespeare's 'A Midsummer Night's Dream.'",
    funFact2: "Oberon is made by the same Wagner family and winemaking team behind Caymus, built as a more approachable, earlier-drinking Cabernet at a lower price point.",
    shortStory: "Named after Shakespeare's fairy king, Oberon was built to be Caymus's more playful, easy-drinking little sibling — same winemaking hand, lighter price tag."
  },
  {
    id: "w16", name: "Caymus Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Caymus Vineyards", region: "California",
    winemaker: "Chuck Wagner",
    flavorTags: ["Black Currant", "Mocha", "Vanilla", "Toasted Oak"],
    structure: { sweetness: 1, acidity: 2, tannin: 3, alcohol: 5, body: 5 },
    pairingDishIds: ["d-tomahawk", "d-porterhouse", "d-ny-strip-16"],
    arsenal: "This is the name guests ask for by default — lean into it, it sells itself.",
    funFact: "Caymus takes its name from 'Rancho Caymus,' the original Spanish land grant covering part of Napa Valley — founded by Charlie Wagner Sr. in 1972, still family-run today.",
    funFact2: "Chuck Wagner was only 19 when he started Caymus with his parents in 1972 — the winery is still entirely family-run over 50 years later, with his own children Charlie and Jenny now involved.",
    shortStory: "Caymus's 1984 and 1990 Special Selection Cabernets were both named Wine Spectator's 'Wine of the Year' — the only producer ever to win that honor twice — cementing Caymus as one of the most recognized Cabernet names in the world."
  },
  {
    id: "w17", name: "Domaine de Cabasse 'Cuvée Marguerite'", style: "red",
    grape: "Grenache, Syrah", producer: "Domaine de Cabasse", region: "Côtes-du-Rhône, France",
    winemaker: "Estate winemaking team",
    flavorTags: ["Cranberry", "Wild Strawberry", "Garrigue Herbs", "Pepper"],
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    pairingDishIds: ["d-naan", "d-marinated-chicken", "d-wild-mushrooms"],
    arsenal: "It's the wine that tastes like the south of France smells — herby, sun-warmed, easy to fall for.",
    funFact: "The estate's roots trace back to the 14th century, when the Popes lived in nearby Avignon.",
    funFact2: "The estate grows its Grenache and Syrah on rocky, sun-baked hillsides typical of the southern Rhône, where the region's fierce Mistral wind helps keep the vines naturally healthy.",
    shortStory: "'Cabasse' is believed to come from an old term for 'the house below the village,' referring to its position just beneath the hilltop town — a name that's stuck since the days the Popes lived down the road in Avignon."
  },
  {
    id: "w18", name: "Madame de Beaucaillou", style: "red",
    grape: "Merlot, Cabernet Sauvignon, Petit Verdot, Cabernet Franc", producer: "Second wine of Château Ducru-Beaucaillou", region: "Haut-Médoc, Bordeaux, France",
    winemaker: "Winemaking team, Château Ducru-Beaucaillou",
    flavorTags: ["Blackcurrant", "Violet", "Morello Cherry", "Oak Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 3, body: 4 },
    pairingDishIds: ["d-short-rib", "d-bone-in-filet", "d-bone-marrow"],
    arsenal: "This is a real Bordeaux château pedigree at a by-the-glass price — worth saying that part out loud.",
    funFact: "'Madame' is the second wine of a famous St-Julien château — made from younger vines and declassified lots from a much more expensive estate wine.",
    funFact2: "Château Ducru-Beaucaillou is a classified Second Growth (Deuxième Cru) in the famous 1855 Bordeaux Classification, one of the most prestigious rankings in all of wine.",
    shortStory: "'Madame' gives guests a taste of real, classified Bordeaux château pedigree — made from younger vines and lots that don't quite make the cut for the flagship wine — without the flagship price tag."
  },
  {
    id: "w19", name: "Trefethen 'Eshcol' Meritage", style: "red",
    grape: "Cabernet Sauvignon-led Bordeaux blend", producer: "Trefethen Family Vineyards", region: "Oak Knoll District, Napa Valley, California",
    winemaker: "Estate winemaking team",
    flavorTags: ["Black Cherry", "Dried Herb", "Cedar", "Baking Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 3 },
    pairingDishIds: ["d-tenderloin-8", "d-wagyu-skirt", "d-short-rib"],
    arsenal: "It's a blend, not a single grape — more complexity in the glass than a straight Cab at the same price.",
    funFact: "'Eshcol' is a biblical name for a valley famous for its grapes — also the name of the historic wooden winery building on Trefethen's property, built in 1886.",
    funFact2: "Trefethen is one of the few wineries in Napa Valley within the cooler Oak Knoll District, which sits at the valley's southern end and gets more fog influence than areas further north.",
    shortStory: "The winery's original wooden building, called Eshcol, was built in 1886 and is one of the oldest wooden wine structures still in use in Napa Valley — the wine takes its name directly from it."
  },
  {
    id: "w20", name: "Yoshi No Gawa 'Winter Warrior' Junmai Ginjo", style: "sake",
    grape: "Gohyakumangoku rice, 60% polish", producer: "Yoshinogawa", region: "Niigata Prefecture, Japan",
    winemaker: "Toji (master brewer), Yoshinogawa Brewery",
    flavorTags: ["Melon", "Honeydew", "Lychee", "Floral"],
    structure: { sweetness: 2, acidity: 1, tannin: 0, alcohol: 3, body: 3 },
    pairingDishIds: ["d-sushi-sashimi-nigiri", "d-sushi-rolls", "d-sashimi-platter", "d-omakase-platter"],
    arsenal: "For a table doing the omakase or the platter, this is the pour that actually matches the fish instead of fighting it.",
    funFact: "Yoshinogawa was founded in 1548 — it's the oldest sake brewery in Niigata Prefecture and the eighth oldest in all of Japan.",
    funFact2: "Niigata is famous for heavy winter snowfall, which filters into extremely pure water used in brewing — part of why the region is known for clean, crisp sake styles.",
    shortStory: "Yoshinogawa has been brewing sake in the same Niigata region since 1548 — meaning this bottle carries nearly 500 years of continuous brewing tradition behind it."
  }
];

const DISHES = [
  { id: "d-oysters", name: "East Coast Oysters", section: "Raw Bar", description: "Chilled: fresh wasabi, shallots, ponzu. Roasted: coconut, chili, cilantro, lime.", pairedWineIds: ["w1", "w5"] },
  { id: "d-tuna-tartare", name: "Tuna Tartare", section: "Raw Bar", description: "Avocado purée, wakamomo, chives, taro chips, sesame garlic soy dressing", pairedWineIds: ["w3"] },
  { id: "d-yellowtail-carpaccio", name: "Yellowtail Carpaccio", section: "Raw Bar", description: "Orange supreme, shishito, wakamomo citrus ponzu, ichimi togarashi", pairedWineIds: ["w3", "w5"] },
  { id: "d-caviar", name: "Prime 131 Reserve Caviar", section: "Raw Bar", description: "House reserve caviar service", pairedWineIds: ["w2"] },
  { id: "d-shellfish-tower", name: "Fire Grilled Shellfish Tower", section: "Raw Bar", description: "1lb stone crab, 6 prawns, 12 roasted oysters, whole roasted lobster", pairedWineIds: ["w2"] },

  { id: "d-sourdough", name: "Grilled Sourdough Bread", section: "Starters", description: "Beurre d'Isigny, Maldon salt", pairedWineIds: [] },
  { id: "d-naan", name: "Grilled Naan", section: "Starters", description: "Choice of baba ganoush, labneh, or whipped ricotta", pairedWineIds: ["w8", "w17"] },
  { id: "d-shishitos", name: "Fried Shishitos", section: "Starters", description: "Ponzu, sesame seeds", pairedWineIds: ["w1", "w9"] },
  { id: "d-chicken-fried-lobster", name: "Chicken Fried Lobster", section: "Starters", description: "Brown butter aioli, preserved lemon gel, micro greens", pairedWineIds: ["w7"] },
  { id: "d-bone-marrow", name: "Dinosaur Bone Marrow", section: "Starters", description: "Onion jam, braised short ribs, grilled sourdough", pairedWineIds: ["w13", "w18"] },
  { id: "d-crab-cakes", name: "Jumbo Lump Mini Crab Cakes", section: "Starters", description: "Spicy aioli, frisée, honey-lime vinaigrette", pairedWineIds: [] },
  { id: "d-edamame", name: "Edamame", section: "Starters", description: "Choice of sea salt, lemon, or spiced", pairedWineIds: ["w1", "w8"] },

  { id: "d-clam-chowder", name: "Smoked Clam Chowder", section: "Soups & Salads", description: "Bacon bits, crispy potato, celery leaves, chili oil", pairedWineIds: ["w9"] },
  { id: "d-grilled-romaine", name: "Grilled Romaine Salad", section: "Soups & Salads", description: "Lemon candy, parmesan breadcrumbs, anchovy black garlic sauce", pairedWineIds: ["w4"] },
  { id: "d-chopped-salad", name: "Prime 131 Chopped Salad", section: "Soups & Salads", description: "House mixed baby greens, shaved red onion, cherry tomato, feta, shaved radish, plum vinaigrette", pairedWineIds: ["w8"] },
  { id: "d-fire-roasted-beets", name: "Fire-Roasted Beets", section: "Soups & Salads", description: "Labneh, pistachio dukkah, scallions", pairedWineIds: ["w4"] },

  { id: "d-lobster", name: "Whole Roasted Lobster", section: "Entrées", description: "Grilled lemon, garlic ponzu butter", pairedWineIds: ["w7"] },
  { id: "d-miso-cod", name: "Miso Marinated Cod", section: "Entrées", description: "Grilled bok choy, coconut lemongrass espuma", pairedWineIds: ["w6", "w10"] },
  { id: "d-burger", name: "Prime 131 Burger", section: "Entrées", description: "American cheese, veal bacon, brioche bun, special sauce, french fries", pairedWineIds: ["w12", "w15"] },
  { id: "d-branzino", name: "Salt-Grilled Branzino", section: "Entrées", description: "Fresh herb salad, brown butter, lemon", pairedWineIds: ["w4", "w7", "w10"] },
  { id: "d-wagyu-skirt", name: "Wagyu Skirt Steak", section: "Entrées", description: "Fourme d'Ambert cheese, compressed peppers, chili vinaigrette", pairedWineIds: ["w6", "w11", "w19"] },
  { id: "d-short-rib", name: "Grilled Bone-in Short Rib", section: "Entrées", description: "Chimichurri, garlic breadcrumbs", pairedWineIds: ["w11", "w12", "w13", "w14", "w18", "w19"] },
  { id: "d-marinated-chicken", name: "Marinated Chicken", section: "Entrées", description: "Espelette, crispy baby potatoes, spicy aioli", pairedWineIds: ["w12", "w13", "w17"] },

  { id: "d-tuna-sushi", name: "Tuna (Maguro / Akami / Chutoro / Otoro)", section: "Sushi", description: "Sashimi and nigiri, 2 pieces per order", pairedWineIds: ["w20"] },
  { id: "d-hamachi", name: "Hamachi", section: "Sushi", description: "Other fish, sashimi and nigiri", pairedWineIds: ["w9", "w20"] },
  { id: "d-chefs-nigiri", name: "Chef's Selection of Nigiri", section: "Sushi", description: "Chef's choice, 3/6/9/12 pieces", pairedWineIds: ["w10", "w20"] },
  { id: "d-sashimi-platter", name: "Premium Sashimi Platter", section: "Sushi", description: "Chef's choice variations", pairedWineIds: ["w20"] },
  { id: "d-omakase-platter", name: "Prime 131 Omakase Platter", section: "Sushi", description: "14 pcs sashimi, 14 pcs nigiri, choice of 3 specialty rolls", pairedWineIds: ["w20"] },
  { id: "d-sushi-sashimi-nigiri", name: "Sashimi & Nigiri (general)", section: "Sushi", description: "Full sashimi and nigiri program", pairedWineIds: ["w20"] },

  { id: "d-prime131-roll", name: "Prime 131 Roll", section: "Sushi Rolls", description: "A5 wagyu, foie gras, shrimp tempura, avocado, shiso, yuzu aioli, eel sauce", pairedWineIds: [] },
  { id: "d-crunchy-spicy-tuna-roll", name: "Crunchy Spicy Tuna Roll", section: "Sushi Rolls", description: "Avocado, tama arare, kaiware, sweet soy sauce", pairedWineIds: ["w5"] },
  { id: "d-dragon-roll", name: "Dragon Roll", section: "Sushi Rolls", description: "Shrimp tempura, jumbo lump crab salad, mango, avocado, sriracha", pairedWineIds: [] },
  { id: "d-yellowtail-serrano-roll", name: "Yellowtail Serrano Roll", section: "Sushi Rolls", description: "Cucumber, kizami wasabi, scallions, wasabi mayo", pairedWineIds: [] },
  { id: "d-seared-spicy-salmon-roll", name: "Seared Spicy Salmon Tartare Roll", section: "Sushi Rolls", description: "Spiced salmon mix, seared salmon, spicy aioli, ponzu, arare", pairedWineIds: ["w3"] },
  { id: "d-negi-toro-roll", name: "Negi Toro Roll", section: "Sushi Rolls", description: "Fatty tuna, finely diced scallions", pairedWineIds: ["w11"] },
  { id: "d-131-california-roll", name: "131 California Roll", section: "Sushi Rolls", description: "Lump crab, cucumber, avocado, tobiko, spicy mayo", pairedWineIds: ["w5"] },
  { id: "d-miso-salmon-roll", name: "Miso Salmon Roll", section: "Sushi Rolls", description: "Kanpyo, asparagus tempura, avocado, truffle oil, ponzu", pairedWineIds: [] },
  { id: "d-sushi-rolls", name: "Sushi Rolls (general)", section: "Sushi Rolls", description: "Full sushi roll program", pairedWineIds: ["w20"] },

  { id: "d-mashed-potato", name: "Loaded Mashed Potato", section: "Sides", description: "Short ribs, raclette, truffle jus", pairedWineIds: ["w6"] },
  { id: "d-wild-mushrooms", name: "Exotic Wild Mushrooms", section: "Sides", description: "Pickled shallot, herbs, breadcrumbs", pairedWineIds: ["w17"] },
  { id: "d-mac-cheese", name: "Ricotta Stuffed Mac & Cheese", section: "Sides", description: "Toasted bread crumbs, parsley", pairedWineIds: ["w6"] },
  { id: "d-asparagus", name: "Grilled Asparagus", section: "Sides", description: "Ricotta, mojo rojo", pairedWineIds: [] },
  { id: "d-fries", name: "French Fries", section: "Sides", description: "Parsley, spicy aioli", pairedWineIds: [] },
  { id: "d-broccolini", name: "Grilled Broccolini", section: "Sides", description: "Lemon-chili vinaigrette", pairedWineIds: [] },
  { id: "d-spinach-gratin", name: "Spinach Gratin", section: "Sides", description: "Parmesan, garlic herb bread crumbs", pairedWineIds: [] },

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
