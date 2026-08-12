// Prime 131 Wine App — data
// Structure scale: 1 (lowest) to 5 (highest) for sweetness, acidity, tannin, alcohol, body

const WINES = [
  {
    id: "w1", name: "Ruffino", style: "sparkling", price: 18,
    grape: "100% Glera", producer: "Ruffino", region: "Veneto DOC, Italy",
    winemaker: "Ruffino's technical winemaking team",
    flavorTags: ["Green Apple", "Pear", "Citrus", "White Flower"],
    structure: { sweetness: 2, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is a Prosecco &mdash; light, crisp, a little green apple and pear. Great way to kick off the meal, goes perfect with the oysters.",
    sellingPoints: ["Light and easy to start with", "Built for the raw bar", "Affordable way to go bubbles"],
    winemakingNote: "Made using the Charmat method, where the second fermentation happens in a pressurized tank rather than the bottle &mdash; it keeps the fruit bright and the bubbles softer than Champagne's.",
    moment: "The opening pour, or any guest who wants bubbles without committing to Champagne.",
    memory: "Light, crisp, and the easiest way to start a celebration.",
    pairingDishIds: ["d-oysters", "d-edamame", "d-shishitos"],
    arsenal: "This is the one that makes the first five minutes of the meal feel like a celebration.",
    funFact: "Ruffino has been making wine in Tuscany since 1877 — this Prosecco is a newer addition, since the estate is historically known for Chianti, not sparkling wine.",
    funFact2: "Ruffino is one of the most recognized Italian wine names in the US, largely thanks to their iconic straw-covered Chianti flask from decades past.",
    shortStory: "Ruffino started as a small Tuscan producer in the 1870s and grew into one of Italy's most exported wine names. Their Prosecco line is a newer chapter, built to bring that same reliability to the sparkling category."
  },
  {
    id: "w2", name: "Telmont Réserve Brut", style: "sparkling", price: 28,
    grape: "Chardonnay, Pinot Meunier, Pinot Noir", producer: "Champagne Telmont", region: "Champagne, France",
    winemaker: "Bertrand Lhôpital, Cellar Master",
    flavorTags: ["Honeysuckle", "Baked Apple", "Brioche", "Chalky Mineral"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    guestDescription: "This is real Champagne, from a small house in France &mdash; honeysuckle, baked apple, a little brioche. Beautiful with the caviar.",
    sellingPoints: ["Real Champagne, not just sparkling wine", "Rich enough for caviar service", "Backed by a major sustainability push in Champagne"],
    winemakingNote: "Traditional method &mdash; the second fermentation happens right in the bottle, which is what builds the fine, persistent bubbles and the toasty brioche character.",
    moment: "Anniversary dinners, or whenever the table orders the caviar.",
    memory: "Real Champagne pedigree with a toasty, honeyed finish.",
    pairingDishIds: ["d-caviar", "d-shellfish-tower"],
    arsenal: "If they're ordering the caviar, this is the wine that was built for it.",
    funFact: "Telmont is backed by Leonardo DiCaprio, who's an investor and sustainability partner in the house — they're racing to be fully organic by 2031.",
    funFact2: "Telmont was founded in 1912 and is one of the few Champagne houses farming nearly all of its own vineyards with low-intervention, near-organic methods.",
    shortStory: "Founded in a small Marne village in 1912, Telmont stayed under the radar for decades. Recent investment and a sustainability-first mission have turned it into one of Champagne's most talked-about small houses."
  },
  {
    id: "w3", name: "Nicolas Feuillatte Rosé Brut", style: "sparkling", price: 26,
    grape: "Pinot Noir, Pinot Meunier, Chardonnay", producer: "Champagne Nicolas Feuillatte", region: "Chouilly, Champagne, France",
    winemaker: "Cellar Master & blending team, Centre Vinicole",
    flavorTags: ["Raspberry", "Strawberry", "Red Currant", "Chalk"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    guestDescription: "This is a ros&eacute; Champagne &mdash; raspberry, strawberry, a little chalky mineral note. Beautiful with the tuna tartare.",
    sellingPoints: ["Prettiest pour on the list", "Pairs with almost anything on the raw bar", "Best-selling Champagne in France"],
    winemakingNote: "Color comes from brief skin contact with Pinot Noir grapes before pressing, plus a small addition of still red wine &mdash; the classic method for ros&eacute; Champagne.",
    moment: "Celebrations, birthdays, or a guest who orders with their eyes first.",
    memory: "A pink Champagne that tastes as good as it looks.",
    pairingDishIds: ["d-tuna-tartare", "d-yellowtail-carpaccio", "d-seared-spicy-salmon-roll"],
    arsenal: "It's the one wine that looks as good as it tastes — a great answer for someone who orders with their eyes first.",
    funFact: "Nicolas Feuillatte is the best-selling Champagne in France — it's a cooperative of over 5,000 growers, not a single royal estate.",
    funFact2: "The house is named after Nicolas Feuillatte, a champagne negociant who founded it in 1976, making it one of the youngest major Champagne names.",
    shortStory: "Built as a cooperative representing thousands of small grower families rather than one aristocratic estate, Nicolas Feuillatte proves Champagne doesn't need centuries of noble history to be excellent — just excellent fruit and blending."
  },
  {
    id: "w4", name: "Santa Margherita", style: "white", price: 17,
    grape: "100% Pinot Grigio", producer: "Santa Margherita", region: "Alto Adige DOC, Italy",
    winemaker: "Santa Margherita winemaking team",
    flavorTags: ["Green Apple", "Citrus", "White Flowers", "Mineral"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "Clean, crisp Pinot Grigio from northern Italy &mdash; green apple, citrus. Simple, reliable, goes with just about anything light.",
    sellingPoints: ["The name everyone already trusts", "Crisp and food-friendly", "Never a wrong answer for the table"],
    winemakingNote: "Fermented and aged in stainless steel with no oak contact, keeping the fruit and acidity front and center.",
    moment: "The guest who just wants 'a nice Pinot Grigio' and isn't looking to explore.",
    memory: "Clean, crisp, and exactly what it promises to be.",
    pairingDishIds: ["d-grilled-romaine", "d-fire-roasted-beets", "d-branzino"],
    arsenal: "It's the wine equivalent of a good handshake — reliable, clean, nobody's ever disappointed.",
    funFact: "Santa Margherita is largely credited with making Pinot Grigio popular in America in the first place.",
    funFact2: "Santa Margherita was founded in 1935 by Count Gaetano Marzotto, named in honor of his late wife, Margherita.",
    shortStory: "Before Santa Margherita, most American drinkers had never heard of Pinot Grigio. Their clean, crisp house style became the template most people now picture when they think of the grape."
  },
  {
    id: "w5", name: "Emmolo", style: "white", price: 16,
    grape: "100% Sauvignon Blanc", producer: "Emmolo", region: "Napa Valley, California",
    winemaker: "Jenny Wagner",
    flavorTags: ["Citrus Zest", "White Peach", "Fresh Herb", "Wet Stone"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "Sauvignon Blanc from the same family as Caymus &mdash; citrus, white peach, fresh herbs. Really bright, great with the raw bar.",
    sellingPoints: ["Same family pedigree as Caymus", "Built for oysters and raw fish", "Bright acidity, zero heaviness"],
    winemakingNote: "Fermented mostly in stainless steel to preserve freshness, with a small portion in neutral oak for texture &mdash; no new oak, so nothing masks the fruit.",
    moment: "Raw bar orders, or a guest who wants a serious white without heaviness.",
    memory: "Crisp, citrusy Sauvignon Blanc with real Napa pedigree.",
    pairingDishIds: ["d-oysters", "d-yellowtail-carpaccio", "d-crunchy-spicy-tuna-roll", "d-131-california-roll"],
    arsenal: "This is the one that makes the raw bar taste like it just came off the boat.",
    funFact: "Emmolo is made by the same family behind Caymus — Emmolo is the maiden name of Charlie Wagner Sr.'s wife.",
    funFact2: "Jenny Wagner is part of the fourth generation of the Wagner family in Napa Valley, and also oversees experimental plantings at the family's Suisun Valley property.",
    shortStory: "Emmolo is Jenny Wagner's own label within the larger Wagner family of wines — named for her mother's side, Sicilian immigrants who ran a grapevine nursery in Napa for decades."
  },
  {
    id: "w6", name: "Cambria 'Katherine's Vineyard'", style: "white", price: 15,
    grape: "100% Chardonnay", producer: "Cambria", region: "Santa Maria Valley, California",
    winemaker: "Cambria estate winemaking team",
    flavorTags: ["Toasted Oak", "Tropical Fruit", "Baked Apple", "Vanilla"],
    structure: { sweetness: 1, acidity: 2, tannin: 0, alcohol: 4, body: 4 },
    guestDescription: "A rich, buttery Chardonnay &mdash; tropical fruit, toasted oak, a little vanilla. Great with the mac and cheese or the miso cod.",
    sellingPoints: ["Big, rich style for red-wine drinkers", "Pairs with anything buttery", "Reliable Central Coast Chardonnay"],
    winemakingNote: "Barrel-fermented and aged in oak with malolactic conversion, which is what gives it that creamy, buttery texture rather than a crisp, steely one.",
    moment: "Guests who say they don't like white wine but love butter and richness.",
    memory: "A big, buttery Chardonnay that eats like a red.",
    pairingDishIds: ["d-mac-cheese", "d-mashed-potato", "d-miso-cod", "d-wagyu-skirt"],
    arsenal: "Built for anything that comes off the robata with butter on it.",
    funFact: "The vineyard is named for Katherine Jackson, wife of Kendall-Jackson founder Jess Jackson.",
    funFact2: "Cambria was one of several estates founded by Jess and Barbara Banke Jackson as part of building out the Jackson Family Wines portfolio.",
    shortStory: "Katherine's Vineyard sits in the Santa Maria Valley, one of the few California AVAs that runs east-west, funneling cool Pacific air straight through the vines — part of why this Chardonnay keeps its richness without losing freshness."
  },
  {
    id: "w7", name: "Stag's Leap", style: "white", price: 18,
    grape: "100% Chardonnay", producer: "Stag's Leap Wine Cellars", region: "Napa Valley, California",
    winemaker: "Marcus Notaro, Head Winemaker",
    flavorTags: ["Baked Pear", "Honeysuckle", "Toasted Brioche", "Vanilla Oak"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 4, body: 4 },
    guestDescription: "This is the step-up Chardonnay &mdash; baked pear, honeysuckle, toasted brioche. From the winery that put Napa on the map. Great with the lobster.",
    sellingPoints: ["From the winery that won the Judgment of Paris", "Rich enough to stand up to lobster", "A real occasion bottle"],
    winemakingNote: "Barrel-fermented in French oak with partial malolactic fermentation, balancing richness with enough acidity to stay lifted.",
    moment: "When the dish is the star &mdash; lobster, or a special-occasion table.",
    memory: "Iron fist in a velvet glove &mdash; rich but never heavy.",
    pairingDishIds: ["d-lobster", "d-branzino", "d-chicken-fried-lobster"],
    arsenal: "This is the step-up Chardonnay — order it when the dish is the star and deserves a wine that doesn't hide.",
    funFact: "Stag's Leap Wine Cellars beat top French Bordeaux in the famous 1976 'Judgment of Paris' blind tasting — the event that put Napa on the map.",
    funFact2: "Marcus Notaro joined Stag's Leap Wine Cellars in 2013 after working at Col Solare, and now leads winemaking across the entire estate portfolio.",
    shortStory: "Stag's Leap built its reputation on Cabernet after the 1976 Judgment of Paris, but the estate's Chardonnay carries the same philosophy — richness balanced by restraint, an approach the winery calls 'an iron fist in a velvet glove.'"
  },
  {
    id: "w8", name: "Miraval", style: "white", price: 16,
    grape: "Grenache, Cinsault, Syrah", producer: "Château Miraval", region: "Côtes de Provence, France",
    winemaker: "Estate winemaking team, Château Miraval",
    flavorTags: ["White Peach", "Citrus", "Floral"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 2 },
    guestDescription: "A pale, dry ros&eacute; from Provence &mdash; white peach, citrus, real light and refreshing. Great porch-sipper, easy with the salad.",
    sellingPoints: ["From a famous Provence estate", "Bone dry, not the sweet stuff", "The easiest yes on the list"],
    winemakingNote: "Grapes are pressed gently with minimal skin contact, which is what keeps the color this pale and the style this dry.",
    moment: "Summer patio energy, or a guest who wants something light before the meal.",
    memory: "Pale, dry, and effortlessly easy to drink.",
    pairingDishIds: ["d-chopped-salad", "d-naan", "d-edamame"],
    arsenal: "It drinks like summer in a glass — the easiest 'yes' on the whole list.",
    funFact: "Château Miraval is the property once owned by Brad Pitt and Angelina Jolie — decades earlier, Pink Floyd recorded parts of 'The Wall' in the estate's studio.",
    funFact2: "Miraval has been producing wine since the 16th century, long before its Hollywood ownership — the estate's recording studio has also hosted AC/DC and Sting.",
    shortStory: "Long before it was a celebrity property, Miraval was a working wine estate in the hills of Correns, Provence. Today it's one of the region's most recognized rosé labels, made in a classic pale, dry Provençal style."
  },
  {
    id: "w9", name: "Domaine de la Chezatte Sancerre", style: "white", price: 18,
    grape: "100% Pinot Noir", producer: "Domaine de la Chézatte", region: "Sancerre, Loire Valley, France",
    winemaker: "Estate winemaking team",
    flavorTags: ["Red Berry", "Citrus", "Flint"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 2 },
    guestDescription: "A Sancerre ros&eacute; &mdash; made from Pinot Noir, believe it or not. Red berry, citrus, real minerally. Great with the raw bar or the chowder.",
    sellingPoints: ["Made from Pinot Noir, not a rosé grape", "More mineral, less candy than most rosé", "A conversation starter"],
    winemakingNote: "The Pinot Noir grapes see just a few hours of skin contact before pressing &mdash; barely enough to pick up color, which keeps the wine dry and mineral-driven.",
    moment: "A guest who says they don't usually like ros&eacute;.",
    memory: "Ros&eacute; for people who think they don't like ros&eacute;.",
    pairingDishIds: ["d-clam-chowder", "d-shishitos", "d-hamachi"],
    arsenal: "It's a rosé for people who think they don't like rosé — more mineral, less candy.",
    funFact: "Sancerre rosé is made from Pinot Noir, not a rosé-specific grape — same grape as red Burgundy, just barely kissed by the skins.",
    funFact2: "The estate has been family-run across four generations, farming the same Sancerre limestone hillsides the whole time.",
    shortStory: "Sancerre is famous for white wine, but a small amount of Pinot Noir grown on the same limestone slopes goes into pale, mineral-driven rosé like this one — a style locals drink far more than tourists ever hear about."
  },
  {
    id: "w10", name: "Benton-Lane", style: "red", price: 16,
    grape: "100% Pinot Noir", producer: "Benton-Lane", region: "Willamette Valley, Oregon",
    winemaker: "Estate winemaking team",
    flavorTags: ["Red Cherry", "Cranberry", "Forest Floor", "Herbal"],
    structure: { sweetness: 1, acidity: 4, tannin: 2, alcohol: 3, body: 2 },
    guestDescription: "A light, bright Pinot Noir from Oregon &mdash; red cherry, cranberry, a little earthy. Drinks almost like a red version of a white wine. Great with the branzino.",
    sellingPoints: ["Red wine that works with fish", "Light-bodied, easy to drink", "Oregon Pinot before it got trendy"],
    winemakingNote: "Estate fruit is dry-farmed, meaning no irrigation &mdash; that stress pushes the vines to root deeper, concentrating flavor in a naturally lighter-bodied wine.",
    moment: "A guest who wants red wine but is ordering fish.",
    memory: "A red that drinks like a white.",
    pairingDishIds: ["d-branzino", "d-miso-cod", "d-chefs-nigiri"],
    arsenal: "This is the red that drinks like a white — perfect if they want red wine but are eating fish.",
    funFact: "The winery's named for the two Oregon counties its vineyard straddles — Benton and Lane.",
    funFact2: "Benton-Lane dry-farms its estate vineyard, meaning the vines get no irrigation — forcing deeper roots and, the winery argues, more concentrated fruit.",
    shortStory: "Founded in the early 1980s in the Willamette Valley, Benton-Lane was one of the earlier wineries to bet on Oregon Pinot Noir before the region became internationally famous for it."
  },
  {
    id: "w11", name: "Flowers", style: "red", price: 24,
    grape: "100% Pinot Noir", producer: "Flowers Vineyard & Winery", region: "Sonoma Coast, California",
    winemaker: "Chantal Forthun, Director of Winemaking",
    flavorTags: ["Wild Strawberry", "Dark Cherry", "Baking Spice", "Earthy Mineral"],
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    guestDescription: "Pinot Noir from the wildest part of the Sonoma Coast &mdash; wild strawberry, dark cherry, real earthy. Structured enough to handle the skirt steak.",
    sellingPoints: ["Grown on the most extreme coastline in Sonoma", "Elegant but has real backbone", "Stands up to steak, unlike most Pinot"],
    winemakingNote: "Uses native yeast fermentation and minimal intervention, letting the cool, foggy vineyard site speak for itself rather than winemaking technique.",
    moment: "A Pinot lover who wants something with real structure, or pairing with the skirt steak.",
    memory: "The Pinot that can actually handle a steak.",
    pairingDishIds: ["d-wagyu-skirt", "d-short-rib", "d-negi-toro-roll", "d-marinated-chicken"],
    arsenal: "This is the Pinot for people who think Pinot can't stand up to a steak — this one can.",
    funFact: "Flowers' vineyards sit on an exposed, foggy Sonoma Coast ridge so remote that most winemakers thought it was too extreme to grow anything.",
    funFact2: "Chantal Forthun has led winemaking at Flowers since 2012, working from vineyards remote enough that the team can sometimes hear sea lions barking on the coastal breeze.",
    shortStory: "Founded by Walt and Joan Flowers in 1989 on land most winemakers considered too extreme to farm, Flowers helped prove the far Sonoma Coast could produce some of California's most elegant Pinot Noir."
  },
  {
    id: "w12", name: "Corazon del Sol", style: "red", price: 16,
    grape: "100% Malbec", producer: "Corazón del Sol", region: "Uco Valley, Mendoza, Argentina",
    winemaker: "Estate winemaking team, Uco Valley",
    flavorTags: ["Black Plum", "Blackberry", "Violet", "Tar & Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 4 },
    guestDescription: "A Malbec from high up in the Andes &mdash; black plum, blackberry, a little violet. Rich but the tannins are soft. Great with the short rib.",
    sellingPoints: ["Classic Argentine Malbec", "High-altitude fruit, riper and softer", "A crowd-pleaser for red drinkers"],
    winemakingNote: "Fruit is grown over 3,600 feet up, where intense sunlight and cool nights build deep color and ripe tannin without losing acidity.",
    moment: "A guest who wants a big, easy red without sharp edges.",
    memory: "Rich, ripe Malbec from way up in the mountains.",
    pairingDishIds: ["d-short-rib", "d-marinated-chicken", "d-burger"],
    arsenal: "High-altitude Malbec — the fruit is riper and the tannins softer than what people expect.",
    funFact: "The vineyards sit over 3,600 feet up in the Andes foothills — that altitude is what gives the wine its brighter acidity.",
    funFact2: "Corazón del Sol translates to 'heart of the sun,' a nod to the intense high-altitude sunlight the Uco Valley gets year-round.",
    shortStory: "Malbec followed French immigrants to Argentina in the 1800s and nearly disappeared after a hard frost in the 1950s. High-altitude sites like this one in the Uco Valley are part of why the grape came roaring back as Argentina's signature red."
  },
  {
    id: "w13", name: "Markham", style: "red", price: 16,
    grape: "Merlot-dominant blend", producer: "Markham Vineyards", region: "Napa Valley, California",
    winemaker: "Estate winemaking team",
    flavorTags: ["Black Cherry", "Plum", "Cocoa", "Baking Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    guestDescription: "A soft, approachable Merlot &mdash; black cherry, plum, a little cocoa. No hard edges at all. Great for someone who says they don't like big reds.",
    sellingPoints: ["The easiest red on the list", "Full flavor, no harsh tannin", "One of Napa's older properties"],
    winemakingNote: "Aged in a mix of French and American oak with gentle extraction during fermentation, keeping the tannins soft rather than gripping.",
    moment: "The guest who says 'I don't do big reds.'",
    memory: "Full-flavored red with absolutely no bite.",
    pairingDishIds: ["d-marinated-chicken", "d-short-rib"],
    arsenal: "This is the wine for the guest who says 'I don't do big reds' — full flavor, none of the grip.",
    funFact: "Markham is one of Napa's older wineries, dating to the 1870s — the stone building on the property is original.",
    funFact2: "Markham was one of the first Napa wineries to release a varietal Merlot as its own standalone wine, back when most Merlot was only used for blending.",
    shortStory: "The winery's stone building dates to the 1870s, making Markham one of the physically oldest working wine properties in Napa Valley, even though the Markham name itself came later."
  },
  {
    id: "w14", name: "Austin Hope", style: "red", price: 23,
    grape: "Cabernet Sauvignon", producer: "Austin Hope", region: "Paso Robles, California",
    winemaker: "Austin Hope",
    flavorTags: ["Blackberry", "Dark Chocolate", "Vanilla Oak", "Warm Spice"],
    structure: { sweetness: 1, acidity: 2, tannin: 4, alcohol: 5, body: 4 },
    guestDescription: "A big, ripe Cabernet from Paso Robles &mdash; blackberry, dark chocolate, warm spice. Rounder than a Napa Cab. Great with the ribeye.",
    sellingPoints: ["Riper, rounder style than Napa Cab", "Built for a big steak", "Named after the winemaker himself"],
    winemakingNote: "Aged extensively in new French oak, which is where a lot of that dark chocolate and vanilla character comes from rather than the fruit alone.",
    moment: "A guest who wants power without sharp tannin &mdash; order it with the ribeye.",
    memory: "Big, ripe Cabernet built for a big cut of steak.",
    pairingDishIds: ["d-ribeye", "d-ny-strip-14", "d-short-rib", "d-bone-marrow"],
    arsenal: "Paso Cab runs riper and rounder than Napa — order it for the guest who wants power without sharp edges.",
    funFact: "Austin Hope is named after the winemaker himself — his family were early pioneers who helped put Paso Robles on the map as a serious Cabernet region.",
    funFact2: "Austin Hope's father, Chuck Hope, was one of the first to plant Cabernet Sauvignon on Paso Robles' west side, helping establish the region as serious Cabernet country.",
    shortStory: "Built on ripe, generous Paso Robles Cabernet at a time when most collectors only took Napa seriously, Austin Hope's namesake wine helped change that conversation."
  },
  {
    id: "w15", name: "Oberon", style: "red", price: 18,
    grape: "Cabernet Sauvignon", producer: "Oberon", region: "Napa Valley, California",
    winemaker: "Chuck Wagner",
    flavorTags: ["Dark Berry", "Cassis", "Oak Spice", "Mocha"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 3 },
    guestDescription: "Same family as Caymus &mdash; dark berry, cassis, a little mocha. Real smooth. Goes great with the filet.",
    sellingPoints: ["Same family pedigree as Caymus", "Smooth and approachable", "A friendlier price than the big name"],
    winemakingNote: "Aged in a mix of French and American oak with a moderate new-oak percentage &mdash; enough to round the tannin without covering up the fruit.",
    moment: "A weeknight steak dinner, or a first-time Napa Cab guest.",
    memory: "Easy, approachable Napa Cabernet with real pedigree behind it.",
    pairingDishIds: ["d-filet-8", "d-bone-in-filet", "d-burger"],
    arsenal: "Same family as Caymus, built to drink younger and lighter on the wallet — great everyday steak Cab.",
    funFact: "Oberon is named after the King of the Fairies from Shakespeare's 'A Midsummer Night's Dream.'",
    funFact2: "Oberon is made by the same Wagner family and winemaking team behind Caymus, built as a more approachable, earlier-drinking Cabernet at a lower price point.",
    shortStory: "Named after Shakespeare's fairy king, Oberon was built to be Caymus's more playful, easy-drinking little sibling — same winemaking hand, lighter price tag."
  },
  {
    id: "w16", name: "Caymus", style: "red", price: 25,
    grape: "Cabernet Sauvignon", producer: "Caymus Vineyards", region: "California",
    winemaker: "Chuck Wagner",
    flavorTags: ["Black Currant", "Mocha", "Vanilla", "Toasted Oak"],
    structure: { sweetness: 1, acidity: 2, tannin: 3, alcohol: 5, body: 5 },
    guestDescription: "This is Caymus &mdash; rich black currant, mocha, vanilla. Big, plush, the name everyone already knows. Perfect with the tomahawk.",
    sellingPoints: ["The name guests already ask for", "Rich enough for the biggest cuts", "Two-time Wine Spectator Wine of the Year producer"],
    winemakingNote: "Aged in a high percentage of new French and American oak for an extended period, building the deep vanilla and mocha character the label is known for.",
    moment: "Any big-format steak &mdash; tomahawk, porterhouse &mdash; or a guest who already knows the name.",
    memory: "The Cabernet everyone already trusts.",
    pairingDishIds: ["d-tomahawk", "d-porterhouse", "d-ny-strip-16", "d-bone-marrow"],
    arsenal: "This is the name guests ask for by default — lean into it, it sells itself.",
    funFact: "Caymus takes its name from 'Rancho Caymus,' the original Spanish land grant covering part of Napa Valley — founded by Charlie Wagner Sr. in 1972, still family-run today.",
    funFact2: "Chuck Wagner was only 19 when he started Caymus with his parents in 1972 — the winery is still entirely family-run over 50 years later, with his own children Charlie and Jenny now involved.",
    shortStory: "Caymus's 1984 and 1990 Special Selection Cabernets were both named Wine Spectator's 'Wine of the Year' — the only producer ever to win that honor twice — cementing Caymus as one of the most recognized Cabernet names in the world."
  },
  {
    id: "w17", name: "Domaine de Cabasse 'Cuvée Marguerite'", style: "red", price: 16,
    grape: "Grenache, Syrah", producer: "Domaine de Cabasse", region: "Côtes-du-Rhône, France",
    winemaker: "Estate winemaking team",
    flavorTags: ["Cranberry", "Wild Strawberry", "Garrigue Herbs", "Pepper"],
    structure: { sweetness: 1, acidity: 3, tannin: 2, alcohol: 4, body: 3 },
    guestDescription: "A Southern Rh&ocirc;ne blend &mdash; cranberry, wild strawberry, herby. Tastes like the south of France. Great with the naan or the chicken.",
    sellingPoints: ["Tastes like Provence in a glass", "Food-friendly, not heavy", "A change of pace from the usual reds"],
    winemakingNote: "Grenache and Syrah are blended after fermentation, with the Grenache giving juicy fruit and the Syrah adding structure and pepper.",
    moment: "A guest who wants something different from the usual Cab or Merlot.",
    memory: "Herby, sun-warmed red that tastes like southern France.",
    pairingDishIds: ["d-naan", "d-marinated-chicken", "d-wild-mushrooms"],
    arsenal: "It's the wine that tastes like the south of France smells — herby, sun-warmed, easy to fall for.",
    funFact: "The estate's roots trace back to the 14th century, when the Popes lived in nearby Avignon.",
    funFact2: "The estate grows its Grenache and Syrah on rocky, sun-baked hillsides typical of the southern Rhône, where the region's fierce Mistral wind helps keep the vines naturally healthy.",
    shortStory: "'Cabasse' is believed to come from an old term for 'the house below the village,' referring to its position just beneath the hilltop town — a name that's stuck since the days the Popes lived down the road in Avignon."
  },
  {
    id: "w18", name: "Madame de Beaucaillou", style: "red", price: 24,
    grape: "Merlot, Cabernet Sauvignon, Petit Verdot, Cabernet Franc", producer: "Château Ducru-Beaucaillou", region: "Haut-Médoc, Bordeaux, France",
    winemaker: "Winemaking team, Château Ducru-Beaucaillou",
    flavorTags: ["Blackcurrant", "Violet", "Morello Cherry", "Oak Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 3, body: 4 },
    guestDescription: "This is a real Bordeaux ch&acirc;teau pour, just the second label &mdash; blackcurrant, violet, a little cherry. Elegant, not heavy. Great with the short rib.",
    sellingPoints: ["Real classified-Bordeaux pedigree", "Elegant, refined tannin", "A special bottle at a by-the-glass price"],
    winemakingNote: "Blended from younger vines and lots declassified from the estate's flagship wine, aged in French oak in the same cellar as the grand vin.",
    moment: "A guest who wants to say they had real Bordeaux tonight.",
    memory: "Real ch&acirc;teau Bordeaux, without the ch&acirc;teau price tag.",
    pairingDishIds: ["d-short-rib", "d-bone-in-filet"],
    arsenal: "This is a real Bordeaux château pedigree at a by-the-glass price — worth saying that part out loud.",
    funFact: "'Madame' is the second wine of a famous St-Julien château — made from younger vines and declassified lots from a much more expensive estate wine.",
    funFact2: "Château Ducru-Beaucaillou is a classified Second Growth (Deuxième Cru) in the famous 1855 Bordeaux Classification, one of the most prestigious rankings in all of wine.",
    shortStory: "'Madame' gives guests a taste of real, classified Bordeaux château pedigree — made from younger vines and lots that don't quite make the cut for the flagship wine — without the flagship price tag."
  },
  {
    id: "w19", name: "Trefethen 'Eshcol'", style: "red", price: 18,
    grape: "Cabernet Sauvignon-led Bordeaux blend", producer: "Trefethen Family Vineyards", region: "Oak Knoll District, Napa Valley, California",
    winemaker: "Estate winemaking team",
    flavorTags: ["Black Cherry", "Dried Herb", "Cedar", "Baking Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 3, alcohol: 4, body: 3 },
    guestDescription: "A Bordeaux-style blend from Napa &mdash; black cherry, cedar, dried herb. More complexity than a straight Cab. Great with the tenderloin.",
    sellingPoints: ["A blend, more layers than a single grape", "Same price as a straight Cab, more complexity", "From one of Napa's oldest wooden wineries"],
    winemakingNote: "Blended from multiple Bordeaux varieties aged separately in French oak before final blending, which builds layered complexity a single varietal can't achieve alone.",
    moment: "A guest who wants something more interesting than a straight Cabernet.",
    memory: "More complexity in the glass than a straight Cab at the same price.",
    pairingDishIds: ["d-tenderloin-8", "d-wagyu-skirt", "d-short-rib"],
    arsenal: "It's a blend, not a single grape — more complexity in the glass than a straight Cab at the same price.",
    funFact: "'Eshcol' is a biblical name for a valley famous for its grapes — also the name of the historic wooden winery building on Trefethen's property, built in 1886.",
    funFact2: "Trefethen is one of the few wineries in Napa Valley within the cooler Oak Knoll District, which sits at the valley's southern end and gets more fog influence than areas further north.",
    shortStory: "The winery's original wooden building, called Eshcol, was built in 1886 and is one of the oldest wooden wine structures still in use in Napa Valley — the wine takes its name directly from it."
  },
  {
    id: "w20", name: "Yoshi No Gawa 'Winter Warrior'", style: "sake", price: 16,
    grape: "Gohyakumangoku rice, 60% polish", producer: "Yoshinogawa", region: "Niigata Prefecture, Japan",
    winemaker: "Toji (master brewer), Yoshinogawa Brewery",
    flavorTags: ["Melon", "Honeydew", "Lychee", "Floral"],
    structure: { sweetness: 2, acidity: 1, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "A junmai ginjo sake from Niigata &mdash; melon, honeydew, a little lychee. Clean and light. Perfect if you're doing the sushi or the omakase.",
    sellingPoints: ["Built specifically for raw fish", "Clean, light, refreshing", "Brewed by a house going on 500 years"],
    winemakingNote: "Milled to 60% of the original rice grain size before brewing &mdash; the more the rice is polished, the cleaner and more fragrant the sake becomes.",
    moment: "Any table doing sushi, sashimi, or the omakase.",
    memory: "The pour that actually matches the fish instead of fighting it.",
    pairingDishIds: ["d-sushi-sashimi-nigiri", "d-sushi-rolls", "d-sashimi-platter", "d-omakase-platter", "d-ikura", "d-tamagoyaki", "d-unagi"],
    arsenal: "For a table doing the omakase or the platter, this is the pour that actually matches the fish instead of fighting it.",
    funFact: "Yoshinogawa was founded in 1548 — it's the oldest sake brewery in Niigata Prefecture and the eighth oldest in all of Japan.",
    funFact2: "Niigata is famous for heavy winter snowfall, which filters into extremely pure water used in brewing — part of why the region is known for clean, crisp sake styles.",
    shortStory: "Yoshinogawa has been brewing sake in the same Niigata region since 1548 — meaning this bottle carries nearly 500 years of continuous brewing tradition behind it."
  },
  {
    id: "w21", name: "Kracher 'Beerenauslese Cuvée'", style: "dessert", price: 18,
    grape: "Chardonnay, Welschriesling", producer: "Weinlaubenhof Kracher", region: "Burgenland, Austria",
    winemaker: "Gerhard Kracher",
    flavorTags: ["Dried Apricot", "Honey", "Orange Peel", "Botrytis Spice"],
    structure: { sweetness: 5, acidity: 4, tannin: 0, alcohol: 2, body: 5 },
    guestDescription: "This is a rich Austrian dessert wine, made from grapes affected by noble rot &mdash; think dried apricot, honey, and orange peel. Gorgeous on its own or with the citrus dessert.",
    sellingPoints: ["Real botrytized dessert wine, not just a sweet pour", "Pairs beautifully with the citrus dessert", "One of the most respected names in sweet wine worldwide"],
    winemakingNote: "Made from grapes affected by noble rot (botrytis cinerea), which shrivels the berries and concentrates sugar and flavor before pressing &mdash; the same process behind Sauternes, applied here to Chardonnay and Welschriesling in Austria's Burgenland.",
    moment: "The table that wants a real dessert wine instead of (or alongside) dessert, or a pairing for the citrus dessert.",
    memory: "Austria's answer to Sauternes — dried apricot and honey from noble rot.",
    pairingDishIds: [],
    arsenal: "This is real botrytized Austrian dessert wine — the same noble-rot process behind Sauternes, just from a different country.",
    funFact: "Kracher's dessert wines come from Burgenland, Austria, where fog off nearby Lake Neusiedl encourages the same noble rot that makes Sauternes possible in France.",
    funFact2: "Founder Alois Kracher built the estate's international reputation before passing away in 2007; his son Gerhard has run the winemaking ever since.",
    shortStory: "Kracher built its reputation in Austria's Burgenland region, where a shallow lake and warm inland climate create ideal conditions for noble rot. The Beerenauslese Cuvée is many guests' first taste of a sweet-wine style they've likely only heard of through Sauternes."
  },
  {
    id: "w23", name: "Sandeman '20-Year-Old Tawny'", style: "dessert", price: 18,
    grape: "Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca", producer: "Sandeman", region: "Douro Valley / Vila Nova de Gaia, Portugal",
    winemaker: "Sandeman winemaking team, Sogrape",
    flavorTags: ["Dried Fig", "Toasted Almond", "Caramel", "Toffee"],
    structure: { sweetness: 4, acidity: 3, tannin: 1, alcohol: 5, body: 4 },
    guestDescription: "This is a 20-year Tawny Port &mdash; dried fig, toasted almond, caramel. Silky and rich, the classic way to close the meal.",
    sellingPoints: ["Classic aged Tawny Port, 20 years average in barrel", "Silky and nutty, not heavy or cloying", "Tastes great served slightly chilled"],
    winemakingNote: "A blend of Tawny Ports aged in oak casks for an average of 20 years, mellowing from a deep ruby into an amber-gold color as the wine slowly oxidizes and picks up nutty, dried-fruit character.",
    moment: "The classic after-dinner pour, especially alongside cheese or dried-fruit forward desserts.",
    memory: "20 years in oak, silky and nutty — the classic after-dinner Port.",
    pairingDishIds: [],
    arsenal: "Twenty years in oak is a long time — that oxidative aging is the whole reason it tastes the way it does, versus a young ruby Port.",
    funFact: "Sandeman's 20 Year Old is a blend of Tawny Ports actually aged between 15 and 40 years, balanced to hit a consistent 20-year-old character every bottling.",
    funFact2: "Sandeman is known for 'The Don' — its iconic silhouette logo of a figure in a wide-brimmed hat and cape, one of the oldest branded trademarks in the wine industry.",
    shortStory: "Founded in 1790, Sandeman is one of the oldest Port houses in the Douro, built around its cellars in Vila Nova de Gaia. This 20-year Tawny sits at the classic mid-point of the aged-Tawny category — old enough to be serious, fresh enough to stay lively."
  },
  {
    id: "w24", name: "Warre's 'Warrior Reserve'", style: "dessert", price: 12,
    grape: "Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca", producer: "Warre's", region: "Douro Valley, Portugal",
    winemaker: "Charles Symington, Head Winemaker",
    flavorTags: ["Blackberry", "Plum", "Dark Chocolate", "Baking Spice"],
    structure: { sweetness: 4, acidity: 3, tannin: 3, alcohol: 5, body: 4 },
    guestDescription: "This is a Reserve Ruby-style Port &mdash; blackberry, plum, dark chocolate. Bigger and more fruit-forward than the Tawny on the list.",
    sellingPoints: ["Bigger, fruitier style than the Tawny on the list", "From the oldest Port brand in the world, shipping since the 1750s", "Great match for the chocolate desserts"],
    winemakingNote: "A Reserve Ruby, meaning it's aged briefly in oak casks rather than for decades like a Tawny &mdash; that keeps more of the dark fruit character while still adding some barrel complexity.",
    moment: "A guest who wants Port but with more fruit and less of the nutty, oxidized character of a Tawny.",
    memory: "The fruitier, less oxidized Port on the list — from the oldest Port brand there is.",
    pairingDishIds: [],
    arsenal: "The oldest Port brand in the world, shipping continuously since the 1750s — that's a fun one to drop tableside.",
    funFact: "Warre's is generally considered the oldest Port house still operating today, with records tracing its trade back to the 1670s.",
    funFact2: "The 'Warrior' name has been branded onto Warre's finest Reserve Port casks since the company's earliest days in the 1750s, making it one of the longest-running names in wine.",
    shortStory: "Warre's has been shipping Port continuously since the 1670s, making it the oldest Port house still in business. The Warrior name has marked its finest reserve casks since the 1750s, giving this bottling one of the longest-running brand identities in wine."
  }
];

// Houston Restaurant Weeks — a separate, smaller wine list shown above the
// regular By The Glass list during HRW only. Kept as its own array (not
// merged into WINES) so repeat bottles like the Telmont and Caymus stay
// distinct entries here rather than duplicating/overwriting the year-round
// BTG cards, per the brief this was built from.
const HRW_WINES = [
  {
    id: "hrw1", name: "Telmont \"Réserve Brut\" NV", style: "sparkling",
    grape: "53% Pinot Meunier, 31% Chardonnay, 16% Pinot Noir", producer: "Champagne Telmont", region: "Épernay, Champagne, France",
    winemaker: "Bertrand Lhôpital, Cellar Master",
    flavorTags: ["White Peach", "Green Apple", "Brioche", "Toasted Almond"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    guestDescription: "This is real Champagne &mdash; white peach, green apple, a little brioche and toasted almond from full malolactic. Beautiful for the raw bar or the caviar.",
    sellingPoints: ["Real Champagne, full malolactic for a creamy, toasty edge", "Family-run since 1912, led today by fourth-generation cellar master Bertrand Lh&ocirc;pital", "Comprises the bulk of the house's production &mdash; their flagship pour, not an entry-level bottle"],
    winemakingNote: "A Pinot Meunier-led blend that goes through full malolactic fermentation, which is what builds the creamy, brioche-and-honeysuckle character alongside the core apple and quince fruit.",
    moment: "The opening pour for an HRW table, or anyone ordering oysters or caviar.",
    memory: "Toasty, chalky, elegant real Champagne to open the meal.",
    pairingDishIds: ["d-oysters", "d-caviar"],
    arsenal: "This is real Champagne from a small French house — a great way to kick off an HRW table.",
    funFact: "Telmont is racing toward a fully organic estate and grower-vineyard base by 2031, one of the stronger sustainability pushes in Champagne.",
    funFact2: "The house was founded in 1912 by Henri Lh\u00f4pital in Damery, near \u00c9pernay, and is still family-run four generations later.",
    shortStory: "Founded in a small village near \u00c9pernay in 1912, Telmont has stayed a family house for four generations \u2014 today led by cellar master Bertrand Lh\u00f4pital, with sustainability as a defining focus of the current era."
  },
  {
    id: "hrw2", name: "Domaine de la Ch\u00e9zatte Sancerre Ros\u00e9", style: "white",
    grape: "100% Pinot Noir, direct-press", producer: "Domaine de la Ch\u00e9zatte", region: "Cr\u00e9zancy, Sancerre, Loire Valley, France",
    winemaker: "Estate winemaking team",
    flavorTags: ["Strawberry", "Red Currant", "Red Cherry", "Citrus Zest"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 1 },
    guestDescription: "A Sancerre ros\u00e9, direct-pressed from Pinot Noir \u2014 strawberry, red currant, citrus zest, no oak. Pure, precise fruit, not a fruity poolside pour.",
    sellingPoints: ["Made from Pinot Noir, direct-pressed for pure fruit with no oak", "Their smallest cuvée \u2014 just 5% of production, genuinely a rarity", "Frame it as a serious, food-friendly Loire ros\u00e9, not a sweet summer pour"],
    winemakingNote: "The Pinot Noir is direct-pressed rather than macerated, which keeps the wine dry, precise, and true to its Sancerre terroir instead of leaning sweet or jammy.",
    moment: "A guest who wants a serious, mineral-driven ros\u00e9 rather than a sweet poolside style.",
    memory: "Precise, food-friendly Loire ros\u00e9 \u2014 not a fruity default.",
    pairingDishIds: [],
    arsenal: "Steer this away from 'fruity poolside' and toward 'serious, food-friendly Loire rosé.'",
    funFact: "This rosé is just 5% of the estate's total production \u2014 their smallest cuvée, and a bit of a rarity next to their Sauvignon Blanc.",
    funFact2: "The estate farms sustainably on south-facing flint and limestone soils in Cr\u00e9zancy, the most northerly village in Sancerre.",
    shortStory: "A family-owned Sancerre estate best known for Sauvignon Blanc, Domaine de la Ch\u00e9zatte also direct-presses a small amount of Pinot Noir into this pale, precise ros\u00e9 \u2014 sustainably farmed on the region's flint and limestone slopes."
  },
  {
    id: "hrw3", name: "Neal Family \"Rutherford Dust Vineyards\" White Wine Blend 2025", style: "white",
    grape: "White wine blend (exact varietal composition not listed on the label)", producer: "Neal Family Vineyards", region: "Rutherford Dust Vineyards, Napa Valley, California",
    winemaker: "Mark Neal & family",
    flavorTags: ["Lemon Flower", "Tangerine Rind", "Bay Leaf", "Lychee"],
    structure: { sweetness: 1, acidity: 5, tannin: 0, alcohol: 4, body: 3 },
    guestDescription: "A Napa white blend off the Rutherford Dust vineyard \u2014 lemon flower, tangerine rind, a little lychee and fresh herb, partly aged in French oak.",
    sellingPoints: ["A genuine Napa white curiosity \u2014 most guests only know this vineyard for Cabernet", "From a 54-year organic Napa grower, now certified biodynamic on this site", "Good pitch for 'only drink red' guests who still want something local"],
    winemakingNote: "Partly aged in a mix of new and neutral French oak, and grown using Mark Neal's own 'stacked' vine-training system \u2014 white grapes trained low to catch reflected heat while red grapes shield them from above.",
    moment: "A red-only drinker who wants something local and interesting to start the meal.",
    memory: "A Napa white curiosity from a vineyard famous for Cabernet.",
    pairingDishIds: [],
    arsenal: "Rutherford Dust is famous as a Cabernet vineyard \u2014 this is the white curiosity from the same site.",
    funFact: "Mark Neal has farmed organic Napa vineyards for over 54 years, building Neal Family Vineyards in 1998 with his children.",
    funFact2: "Neal invented a proprietary 'stacked' vine-training system that grows white grapes low to the ground to catch reflected heat, with red grapes trained above to shield them.",
    shortStory: "Mark Neal spent decades farming organic Napa fruit for other producers before founding his own family label in 1998 \u2014 today it's a biodynamic, certified-organic operation across Howell Mountain and Rutherford, run with his children."
  },
  {
    id: "hrw4", name: "Alexana \"Mosaic\" Pinot Noir", style: "red",
    grape: "Pinot Noir, multiple clones", producer: "Alexana Winery", region: "Dundee Hills, Willamette Valley, Oregon",
    winemaker: "Estate winemaking team",
    flavorTags: ["Black Cherry", "Raspberry", "Violet", "Sage"],
    structure: { sweetness: 1, acidity: 4, tannin: 2, alcohol: 4, body: 3 },
    guestDescription: "An Oregon Pinot from Alexana and Kinney Ranch fruit \u2014 black cherry, raspberry, violet, a little sage. Bright, food-forward, velvety tannin.",
    sellingPoints: ["Blended from multiple Pinot clones, fermented and aged separately", "Estate Vineyard has been a two-time Wine Spectator Top 100 pick", "Grown in Dundee Hills \u2014 the birthplace of Willamette Valley Pinot"],
    winemakingNote: "Fruit from the Alexana Estate and Kinney Ranch vineyards is fermented and aged separately by clone, then blended \u2014 building layered fruit and spice rather than a single-note wine.",
    moment: "A Burgundy lover, or a steak guest who wants red without heavy tannin.",
    memory: "Lively, food-forward Oregon Pinot with velvety tannin.",
    pairingDishIds: [],
    arsenal: "Good crossover pour for Burgundy lovers and steak guests who don't want heavy tannin.",
    funFact: "Dundee Hills is the birthplace of Willamette Valley Pinot Noir \u2014 David Lett planted the valley's first Pinot vineyard there in 1966.",
    funFact2: "Alexana's Estate Vineyard sits across 32 distinct blocks on a rare mix of volcanic and marine sedimentary soils.",
    shortStory: "Planted on a patchwork of volcanic and marine soils across 32 blocks in Dundee Hills \u2014 the same ground where Willamette Valley Pinot Noir got its start in 1966 \u2014 Alexana's Estate Vineyard has twice been named to Wine Spectator's Top 100."
  },
  {
    id: "hrw5", name: "Caymus Cabernet Sauvignon", style: "red",
    grape: "Cabernet Sauvignon", producer: "Caymus Vineyards", region: "Napa Valley, California",
    winemaker: "Chuck Wagner",
    flavorTags: ["Blackcurrant", "Black Cherry", "Cocoa", "Cedar"],
    structure: { sweetness: 1, acidity: 2, tannin: 3, alcohol: 5, body: 5 },
    guestDescription: "This is Caymus \u2014 blackcurrant, black cherry, cocoa and cedar, soft velvety tannin. The steakhouse benchmark bottle most guests already know.",
    sellingPoints: ["The name guests already ask for by default", "Blended across Napa's best sub-AVAs \u2014 Coombsville, Calistoga, Rutherford, Oakville", "Built for immediate drinkability, not austerity \u2014 an easy 'safe splurge' recommendation"],
    winemakingNote: "Blended across fruit from several Napa sub-AVAs and aged extensively in oak, built for soft, velvety tannin and plush drinkability right out of the gate.",
    moment: "A guest unsure what to order who wants a safe, plush splurge.",
    memory: "The Cabernet everyone already trusts.",
    pairingDishIds: [],
    arsenal: "This one sells itself \u2014 plush, rich, crowd-pleasing.",
    funFact: "Chuck Wagner and his parents opened Caymus in 1972 with 240 cases \u2014 it remains 100% family-owned today.",
    funFact2: "Caymus takes its name from 'Rancho Caymus,' the original Spanish land grant covering part of Napa Valley.",
    shortStory: "Founded with just 240 cases in 1972, Caymus is still entirely family-run over 50 years later \u2014 and remains one of the most recognized Cabernet names in America."
  },
  {
    id: "hrw6", name: "Altamura Cabernet Sauvignon", style: "red",
    grape: "100% Cabernet Sauvignon", producer: "Altamura Vineyards & Winery", region: "Wooden Valley, Napa Valley, California",
    winemaker: "Frank Altamura",
    flavorTags: ["Blackcurrant", "Black Olive", "Tobacco Leaf", "Cedar"],
    structure: { sweetness: 1, acidity: 4, tannin: 4, alcohol: 5, body: 5 },
    guestDescription: "100% estate-grown Cabernet from Wooden Valley, Napa's most secluded sub-AVA \u2014 blackcurrant, black olive, tobacco leaf, cedar. Velvety but firm, built to age.",
    sellingPoints: ["The only winery located in Wooden Valley within the Napa Valley appellation", "Up to half the crop dropped each year, free-run juice only, for concentration and purity", "The 'insider's Napa Cab' \u2014 same lineage as Caymus, more structured, built for 10-12+ years"],
    winemakingNote: "Aged roughly 70% in new French oak for two-plus years before release, from fruit that's deliberately thinned \u2014 up to half the crop dropped each year \u2014 using only free-run juice.",
    moment: "A guest who wants something less ubiquitous than Caymus at a similar price tier.",
    memory: "The insider's Napa Cab \u2014 same pedigree, more structure.",
    pairingDishIds: [],
    arsenal: "Same Napa Cab pedigree lineage as Caymus, but more structured and age-worthy — the insider's pick.",
    funFact: "Founder Frank Altamura trained under Ric Forman at Sterling and worked alongside Chuck Wagner and Randy Dunn at Caymus before founding Altamura in 1985.",
    funFact2: "Altamura is the only winery located in Wooden Valley, Napa's most secluded sub-AVA, within the Napa Valley appellation.",
    shortStory: "Frank Altamura learned the craft at Sterling and later worked alongside the Caymus and Dunn families before striking out on his own in 1985 \u2014 building the only winery in Napa's secluded Wooden Valley, dropping up to half the crop each year for concentration."
  }
];

const DISHES = [
  { id: "d-oysters", name: "East Coast Oysters", section: "Raw Bar", description: "Chilled: fresh wasabi, shallots, ponzu. Roasted: coconut, chili, cilantro, lime.", pairedWineIds: ["w1", "w5"], quizClue: "Served two ways: raw on the half shell with shallot ponzu and fresh wasabi, or shocked and finished with a charred fresno-coconut vinaigrette and toasted panko.", dropLine: "eastern oysters with shallot ponzu and fresh wasabi / roasted oysters with charred fresno and coconut vinaigrette", ingredients: "house made shallot ponzu - gluten free soy sauce, mirin, rice vinegar, sake, konbu, bonito flakes, minced shallots, orange peel and orange juice. | charred fresno and coconut vinaigrette- red bell pepper, shiro dashi (bonito flakes, konbu, soy sauce, mirin, sake, salt, sugar), fresno pepper, fish sauce, rice vinegar, coconu milk, lime juice, lime zest, sugar", chefPrep: "6 each freshly shucked eastern oyster served with housemade shallot ponzu sauce, fresh grated wasabi root and lemon wedge | for charred fresno vinaigrette all ingredients blended well until smooth and strained. For oysters shocked fresh and dresed with charred fresno vin, toasted panko and roasted in the oven until done. Plated with plating salt underneath and garnished with lemon wedge", allergensInRecipe: ["alcohol", "fish", "soy", "vinegar", "citrus", "chili", "shellfish", "onion"], allergensRemovable: ["onion", "mustard"] },
  { id: "d-tuna-tartare", name: "Tuna Tartare", section: "Raw Bar", description: "Avocado purée, wakamomo, chives, taro chips, sesame garlic soy dressing", pairedWineIds: ["w3"], quizClue: "Diced yellowfin mixed with olive oil and chives, built in a ring mold over a piped avocado-yuzu puree.", dropLine: "yellowfin tuna tartar with avocado puree and taro chips", ingredients: "tartar build- diced yellowfin tuna, chives, avocado puree, yuzu garlic soy dressing,  olive oil.  avocado puree- yuzu juice, evoo, olive oil, black pepper, avocado. Sesame garlic soy dressing- garlic, mirin, sesame oil, soy sauce, yuzu juice, rice vinegar. Garnish- taro chips, wakamomo(young peach in syrup), radish", chefPrep: "finely diced yellowfin tuna mixed with olive oil, chives, salt and pepper. Then ring mold placed on the bowl and avocado puree piped nicely. Follow by tuna mix. Garnished with julienne red radish, wakamomo, sesame garlic soy dressing. Served with taro chips on the side. if guest has glutten Allergy sub for Ponzu Sauce", allergensInRecipe: ["fish", "soy", "sesame", "garlic", "alcohol", "vinegar", "citrus", "onion", "gluten"], allergensRemovable: ["onion", "garlic", "gluten", "sesame"] },
  { id: "d-yellowtail-carpaccio", name: "Yellowtail Carpaccio", section: "Raw Bar", description: "Orange supreme, shishito, wakamomo citrus ponzu, ichimi togarashi", pairedWineIds: ["w3", "w5"], quizClue: "Five thin slices of hamachi dressed in a sweet-tart ponzu made with baby Japanese peach, orange segments, and togarashi.", dropLine: "yellowtail carpaccio with cripsy rice, Wakamomo Ponzu", ingredients: "Wakamomo Ponzu Sauce- House ponzu, orange juice, togarashi shimi, sesame oil, chanpagne vinegar, baby japanese peach, sugar, glucose syrup", chefPrep: "One cold plate, 5 slices Hamachi, orange segments, sliced shitshitos,Wakamomo Ponzu, Ichimi Togarashi, cracker arare, micro cilantro", allergensInRecipe: ["fish", "sesame", "vinegar", "citrus", "chili", "alcohol", "soy"], allergensRemovable: ["chili"] },
  { id: "d-caviar", name: "Prime 131 Reserve Caviar", section: "Raw Bar", description: "House reserve caviar service", pairedWineIds: ["w2"], quizClue: "Royal white sturgeon roe, farmed for large jet-black pearls with a creamy, buttery pop, served with blinis and a mascarpone dressing.", dropLine: "(choice of caviar) with traditional accoutrements", ingredients: "choice of caviar- mini blinis, shallots, egg yolk, egg white, mascarpone dressing, chives", chefPrep: "Royal White sturgeon Caviar. Farmed large pearls  jet black color with a creamy buttery flavor and smooth pop", allergensInRecipe: ["dairy", "eggs", "fish", "gluten", "onion"], allergensRemovable: ["dairy", "eggs", "gluten", "onion"] },
  { id: "d-shellfish-tower", name: "Fire Grilled Shellfish Tower", section: "Raw Bar", description: "1lb stone crab, 6 prawns, 12 roasted oysters, whole roasted lobster", pairedWineIds: ["w2"], quizClue: "A whole Maine lobster, a stone crab claw, a dozen oysters, and six head-on shrimp, all cooked hot over an open flame and stacked together for the table.", dropLine: "Prime 131 grilled shellfish tower", ingredients: "grilled shellfish tower- 1.5 lbs whole maine lobster, 1 lb Stone Crab Claw, 12 pcs roasted oysters, 6 each grilled head on shrimp. Garnish- lemon wedge.", chefPrep: "oysters are not gluten free but can be gluten free. Losbter, king crab, oyster and shrimp all grilled and served hot. We recommed guest enjoy the dish right away to avoid butter get solidified.", allergensInRecipe: ["shellfish", "dairy", "citrus", "gluten"], allergensRemovable: ["citrus", "gluten"] },

  { id: "d-sourdough", name: "Grilled Sourdough Bread", section: "Starters", description: "Beurre d'Isigny, Maldon salt", pairedWineIds: [], quizClue: "Sliced and brushed with olive oil, cooked crisp on the outside and fluffy within over the wood fire, served with French cultured butter and Maldon salt.", dropLine: "grilled local sourdough bread with beurre d'Isigny", ingredients: "sourdough bread - beurre d'Isigny cows milk butter from France, olive oil, Maldon sea salt", chefPrep: "sliced sourdough bread brushed with olive oil and grilled on the wood fire grill until crispy outside and fluffy inside. Served with butter and salt on the side", allergensInRecipe: ["gluten", "dairy"], allergensRemovable: ["dairy"] },
  { id: "d-naan", name: "Grilled Naan", section: "Starters", description: "Choice of baba ganoush, labneh, or whipped ricotta", pairedWineIds: ["w8", "w17"], quizClue: "A warm flatbread served with a trio of dips: smoky charred-eggplant baba ganoush, tangy garlic-lemon labneh, and whipped ricotta.", dropLine: "grilled pita with, babaganoush, lebaneh, whipped ricotta", ingredients: "Babaganoush base- eggplant, tahini (ground sesame paste) lemon juice, garlic, cumin, Garnish- sumac, parsley, capers, olive oil. Lebaneh- garlic, lemon juice, olive oil, Garnish- sheeps milk feta zatar, parsley, moroccan dry cured olives, olive oil. Whipped ricotta - heavy cream. Garnish-  honey, chives, olive oil, grilled pita bread", chefPrep: "babaganoush- eggplant charred over open flame and all meat separated from skin, chopped and cooled. Next day mixed with tahini, lemon juice, garlic, cumin and kept cold for service. Lebaneh- high quality lebaneh mixed well with garlic, lemon juice and olive oil. and keept cold for service. Whipped ricotta- whipped with heacy cream to achieve fluffy consistency and kept cold service. Trio of dips offered together with grilled fresh pita bread", allergensInRecipe: ["sesame", "citrus", "garlic", "gluten", "dairy", "onion"], allergensRemovable: ["gluten", "onion"] },
  { id: "d-shishitos", name: "Fried Shishitos", section: "Starters", description: "Ponzu, sesame seeds", pairedWineIds: ["w1", "w9"], quizClue: "Japanese blistering peppers, quick-cooked until the skin lightly chars, then tossed with furikake seasoning and house ponzu.", dropLine: "fried shishitos with furikake and ponzu", ingredients: "shishitos- house made ponzu, salt, black pepper,  toasted sesame seeds and Furikake seasoning. House made Ponzu- gluten free soy sauce, mirin, rice vinegar, sake, konbu, bonito flakes, orange peel and orange juice. Served Ponzu Emulsion", chefPrep: "japanese shishito peppers fried until skin is slightly cooked. Then transferred to bowl and seasoned with furikake seasoning and ponzu sauce. Plated in a small plate and garnished with sesame seeds. Gluten free", allergensInRecipe: ["fish", "alcohol", "vinegar", "citrus", "sesame", "soy"], allergensRemovable: [] },
  { id: "d-chicken-fried-lobster", name: "Chicken Fried Lobster", section: "Starters", description: "Brown butter aioli, preserved lemon gel, micro greens", pairedWineIds: ["w7"], quizClue: "Live tail meat, poached then double-breaded in a gluten-free coating and cooked to a deep golden crust, served with a brown butter aioli.", dropLine: "chicken fried lobster with preserved lemon gel and brown butter aioli", ingredients: "brown butter aioli- dijon mustard, egg, salt, brown butter, garlic confit. Breading for lobster- gluten free flour, rice flour, corn starch, xantan gum, baking powder, egg, half & half. Preserved lemon gel- lemon, water, sugar, agar agar, mayer lemons, salt, black peppercorn, coriander, bay leaf, star anise, cinnamon.", chefPrep: "for brown butter all ingredients blended together while slowly adding brown butter until fully imulsifies. Breading for lobster- live maine lobster poached for 30 seconds to take out of the meat from shell. Then cut into medallions. Then egg and half and half mixed well and set a side. in other bowl all dry ingredients mixed. lobster medallions breaded with dry mix, egg wash and back to dry mix. and set a side for service. for preserved lemon gell- lemons are scored and cured with al ingredients for 15-30 days. then washed well skin is separated for a gell. then skin is boiled  with all ingredients and blended until smooth after cooled dowm. during pick up medallions fried until golden brown and ganished with preserved lemon gel, micro greens, lemon gel and brown butter aioli on the side", allergensInRecipe: ["mustard", "eggs", "dairy", "garlic", "citrus", "shellfish"], allergensRemovable: ["citrus", "garlic", "mustard"] },
  { id: "d-bone-marrow", name: "Dinosaur Bone Marrow", section: "Starters", description: "Onion jam, braised short ribs, grilled sourdough", pairedWineIds: ["w14", "w16"], quizClue: "A beef center-cut roasted over open flame and topped with braised short rib, finished with onion jam, serrano, and puffed sorghum, served with grilled sourdough.", dropLine: "grilled dinosaur bone marrow with braised short rib and onion jam", ingredients: "fermented garlic sauce- onion, garlic, pasilla chili powder, cumin, coriander, bay leaf, sherry vinegar, sugar, salt, black pepper, black garlic, olive oil. Shallot jam- oil, onion, sugar, brown sugar, water, salt, black pepper. Braised shredded short rib- same as short rib entree", chefPrep: "for fermented black garlic sauce, onions grilled nicely until charred. Then all ingredients blended together until smooth and seasoned nicely. For shllots jam- all ingredients cooked until soft and blended until smooth. Bone marrow is brined with salt and water overnight to take out all blood from them. during service it cooked in the hot oven. same time short rib is heat up with black garlic sauce and plated on the bonemarrow once it ready. garnished with sliced serrano, onion jam, puffed sorghum, Maldon salt, chervil,, grilled sourdough", allergensInRecipe: ["chili", "garlic", "onion", "vinegar", "gluten", "dairy", "alcohol"], allergensRemovable: ["gluten", "dairy"] },
  { id: "d-crab-cakes", name: "Jumbo Lump Mini Crab Cakes", section: "Starters", description: "Spicy aioli, frisée, honey-lime vinaigrette", pairedWineIds: [], quizClue: "Maryland-style seafood fritters bound with mayo, old bay, and panko, fried golden and served over a lime-honey friseé salad.", dropLine: "jumbo lump maryland mini crab cakes with", ingredients: "Crab cake mix- maryland crab, mayo, old bay, lemon juice and zest, egg, panko, chives. frisee salad- lime honey dressing, chives. Lime honey dressing - lime juice, honey, salt, blended oil. Spicy  mayo - mayo, schimi togarashi (japanese 7 spice), sesame oil, chili oil, ponzu, yuzu juice, salt.", chefPrep: "5 each (4 oz total) crab fritters fried until golden brown and plated with spicy mayo and frisee salad.", allergensInRecipe: ["shellfish", "eggs", "citrus", "gluten", "onion", "chili", "sesame", "soy"], allergensRemovable: [] },
  { id: "d-edamame", name: "Edamame", section: "Starters", description: "Choice of sea salt, lemon, or spiced", pairedWineIds: ["w1", "w8"], quizClue: "Steamed Japanese soybeans finished with Maldon salt and lemon, or sauteed in a chili-garlic sauce as a spicier option.", dropLine: "steamed edamame with maldon sea salt and lemon or fried edamame with chili garlic sauce", ingredients: "edamame (soy beans)- Maldon sea salt and lemon. Chili garlic sauce- chili pepper, salt, sugar, water, rice vinegar, garlic, corn starch, sesame oil, pickled ginger juice, soy sauce, mushroom extract.", chefPrep: "Japanese soy beans steam until hot and seasoned with Maldon sea salt and garnished with lemon wedge. Gluten free. 2nd option  steamed soy beans sautéed with sesame oil and chili garlic sauce. Not gluten free", allergensInRecipe: ["citrus"], allergensRemovable: ["soy", "gluten", "sesame", "garlic", "vinegar", "chili"] },

  { id: "d-clam-chowder", name: "Smoked Clam Chowder", section: "Soups & Salads", description: "Bacon bits, crispy potato, celery leaves, chili oil", pairedWineIds: ["w9"], quizClue: "A cream-based bivalve soup built on leeks, celery, and cured pork hock, finished with a touch of chili oil.", dropLine: "smoked clam chowder with crispy potato and bacon", ingredients: "clam chowder base- leeks, celery, onion, garlic, ap flour, white wine, bay leaf, aleppo pepper, olive oil, butter, smoked pork hocks, heavy cream, clams, salt, clam juice. Garnish- chili oil, crispy potatoes, celery leaves, bacon bits", chefPrep: "all vegetables cooked with olive oil until soft. Then butter added follow by sifted flour. Once flour  is fully cooked heavy cream, clam juice, pork hock, bay leaf and aleppo pepper. Seasoned with salt at the end and ready to serve. Garnished with chili oil, crispy potato, celery leaves and bacon. Do not split the soup when taking order from guest", allergensInRecipe: ["onion", "garlic", "gluten", "alcohol", "dairy", "shellfish", "pork", "chili"], allergensRemovable: ["chili"] },
  { id: "d-grilled-romaine", name: "Grilled Romaine Salad", section: "Soups & Salads", description: "Lemon candy, parmesan breadcrumbs, anchovy black garlic sauce", pairedWineIds: ["w4"], quizClue: "Charred lettuce halved and topped with anchovies, a black garlic caesar dressing, and herb breadcrumbs.", dropLine: "grilled romaine with black garlic dressing and anchovies", ingredients: "Herb de province bread crumbs- sourdough bread,thyme, basil, rosemary, tarragon, marjoram, oregano, bay leaf. Black garlic caesar dressing- garlic, anchovies, dijon mustard, eggs, lemon zest, black garlic, canola oil, white vinegar, salt, pepper, parmesan cheese. candied lemon peel- water, sugar, lemon peel.", chefPrep: "romaine lettuce  split in half, grilled and placed on the place. Garnished with anchovies, herb de province bread crumbs, black garlic caesar dressing, candied lemon peel, parmesan cheese, chervil and fresh lemon juice", allergensInRecipe: ["gluten", "garlic", "fish", "mustard", "eggs", "citrus", "vinegar", "dairy"], allergensRemovable: ["gluten"] },
  { id: "d-chopped-salad", name: "Prime 131 Chopped Salad", section: "Soups & Salads", description: "House mixed baby greens, shaved red onion, cherry tomato, feta, shaved radish, plum vinaigrette", pairedWineIds: ["w8"], quizClue: "A mix of greens, romaine, and friseé tossed with cherry tomatoes, watermelon radish, feta, and a creamy plum vinaigrette.", dropLine: "House Salad", ingredients: "Creamy Plum Vin. olive oil, Wakamomo, Apple cider vinegar, Plum Syrup, Champange Vinegar, dijon, mayo, honey.", chefPrep: "Mix Green MIx, Romaine, Frissee, Cherry Tomatoes, Red onion, watermelon radish,cucumber, Feta Cheese", allergensInRecipe: ["vinegar", "mustard", "eggs", "onion", "dairy"], allergensRemovable: ["onion", "dairy"] },
  { id: "d-fire-roasted-beets", name: "Fire-Roasted Beets", section: "Soups & Salads", description: "Labneh, pistachio dukkah, scallions", pairedWineIds: ["w4"], quizClue: "Gold and red root vegetables cooked whole over an open flame, marinated, and topped with a pistachio dukkah and tangy labneh.", dropLine: "fire roasted beets with lebaneh and pistachio dukka", ingredients: "beet marinade- red wine vinegar, honey, sugar, salt, black pepper, thyme, shallots. Pistachio dukka- pistachios, toasted white sesame seeds, salt, pepper, cumin, coriander. Lebaneh- same and dip recipe", chefPrep: "gold and red beets roasted on wood fire until soft. Then cooled down and peeled. Cut into bite size pcs and marinated right before service. During pickup lebaneh spread on the botto, of the plate. Follow by marinated beet, pistachio dukka and scallions.", allergensInRecipe: ["vinegar", "onion", "nuts", "sesame", "dairy", "garlic"], allergensRemovable: [] },

  { id: "d-lobster", name: "Whole Roasted Lobster", section: "Entrées", description: "Grilled lemon, garlic ponzu butter", pairedWineIds: ["w7"], quizClue: "A live Maine catch, poached and cooled to separate the meat, then rewarmed in a garlic-ponzu butter with togarashi and shiso.", dropLine: "Whole roasted lobster 1.5# with garlic ponzu butter", ingredients: "Garlic ponzu butter - jalapenos, garlic, togarashi (japanese 7 spice) salt, shiso leaves (japanese mint), house ponzu.", chefPrep: "Live maine lobsters 1.5lbs lightly poachaed and cooled in ice water to separate meat from the shell. Then diced into bite size pcs and put back into shell. During service topped with garlic ponzu butter and roasted in the high heat oven until medium well. Served with grilled lemon", allergensInRecipe: ["shellfish", "garlic", "chili", "soy", "alcohol", "dairy", "citrus"], allergensRemovable: ["citrus"] },
  { id: "d-miso-cod", name: "Miso Marinated Cod", section: "Entrées", description: "Grilled bok choy, coconut lemongrass espuma", pairedWineIds: ["w6", "w10"], quizClue: "Alaskan wild sablefish, cured for 24 hours in a fermented soybean paste, finished with a coconut-lemongrass espuma.", dropLine: "miso marinated black cod with grilled bok choy and coconut lemongrass espuma", ingredients: "coconut lemongrass espuma- coconut milk, lime juice and zest, kaffir lime leaf, ginger, lemongrass, cilantro, bay leaf, thai chili, basil, mint, agar agar. Gluten free miso marinade- sake, mirin, sugar, white miso.  For regular black cod marinade- all ingredients above plus soy sauce, garlic, ginger, corn starch. Garnish- dried chive powder.", chefPrep: "Alaskan wild balck cod portioned into 8 oz pcs and marinated in miso marinade for at least 24 hours. Then during service it cooked in the jasper until caramelized and bones taken out and served with no skin. Bok choy blanched before service", allergensInRecipe: ["fish", "alcohol", "chili", "citrus", "soy", "garlic", "gluten"], allergensRemovable: ["chili", "citrus", "garlic", "gluten"] },
  { id: "d-burger", name: "Prime 131 Burger", section: "Entrées", description: "American cheese, veal bacon, brioche bun, special sauce, french fries", pairedWineIds: ["w12", "w15"], quizClue: "A grilled house-blend beef patty on a brioche bun with veal bacon, American cheese, and a special sauce built from pickles and dijon.", dropLine: "woodfire grilled burger with veal bacon and special sauce", ingredients: "special sauce- pickles, chili flakes, olive oil, ketchup, dijon mustard, mayo.  Garnish- french fries, ketchup. Veal bacon- same as app.", chefPrep: "burger build- grilled brioche bun, grilled veal bacon, special sauce, grilled house blend prime beed patty, bib lettuce, american cheese, tomato, olive oil.", allergensInRecipe: ["chili", "mustard", "eggs", "gluten", "dairy", "vinegar"], allergensRemovable: ["eggs", "vinegar", "mustard"] },
  { id: "d-branzino", name: "Salt-Grilled Branzino", section: "Entrées", description: "Fresh herb salad, brown butter, lemon", pairedWineIds: ["w4", "w7", "w10"], quizClue: "A whole Mediterranean sea bass, deboned and cooked until the skin turns crackling crisp, finished with charred lemon and an herb salad.", dropLine: "crispy skin branzino with grilled lemon and herb salad", ingredients: "branzino- salt, pepper, grilled lemon. Herb salad- chives, parsley, basil, black radish, red radish, lemon agrumato olive oil, salt, pepper", chefPrep: "fresh whole branzino fully deboned, seasoned with salt, pepper and grilled until crispy skin and moist flesh. Garnished with grilled lemon and herb salad.", allergensInRecipe: ["fish", "citrus"], allergensRemovable: ["citrus"] },
  { id: "d-wagyu-skirt", name: "Wagyu Skirt Steak", section: "Entrées", description: "Fourme d'Ambert cheese, compressed peppers, chili vinaigrette", pairedWineIds: ["w6", "w11", "w19"], quizClue: "A marinated cut of beef finished with star anise and ginger, grilled and sliced, plated over a chili-pepper vinaigrette with poblano and red bell pepper.", dropLine: "Grilled wagyu skirt steak with chili pepper vinaigrette", ingredients: "skirt steak marinade- star anise, black pepper, chili flakes, garlic, ginger, rice vinegar, mirin, gluten free soy sauce, olive oil. Chili pepper vinaigrette- pequillo peppers, guajillo peppers, apple cider vinegar, sugar, salt, shallots, garlic, cayenne, olive oil. marinated peppers- poblanos, red bell peppers, sherry vinegar.  Garnish- cilantro, Fourme d'Ambert blue cheese, saba vinegar, Maldon salt, olive oil", chefPrep: "marinated skirt steak grilled until desired temp and cut into bite size pcs. On a plate chili pepper vinaigrette, poblano and red belle pepper placed. Follow by sliced steak, blue cheese, cilantro, saba vinegar, salt and olive oil.", allergensInRecipe: ["chili", "garlic", "onion", "vinegar", "alcohol", "soy", "dairy"], allergensRemovable: ["dairy"] },
  { id: "d-short-rib", name: "Grilled Bone-in Short Rib", section: "Entrées", description: "Chimichurri, garlic breadcrumbs", pairedWineIds: ["w11", "w12", "w13", "w14", "w18", "w19"], quizClue: "A slow-braised cut of beef, seared first then cooked for hours with red wine, root vegetables, and tomato paste until fall-apart tender.", dropLine: "", ingredients: "short rib glaze- shallots, garlic, bay leaf, thyme, olive oil, red wine vinegar, red wine, water, carrots, celery, onion, salt, pepper, tomato paste. Chimichurri- same as side chimichurri.", chefPrep: "short ribs seasoned with salt, pepper and seared hard. Then all vegetables added with tomato paste and cooked until soft. Covered with foil and braised for 3 hours. Then grilled until caramalized , glazed with short rib glaze and garnished with chimichurri.", allergensInRecipe: ["garlic", "onion", "vinegar", "alcohol", "chili"], allergensRemovable: ["chili"] },
  { id: "d-marinated-chicken", name: "Marinated Chicken", section: "Entrées", description: "Espelette, crispy baby potatoes, spicy aioli", pairedWineIds: ["w11", "w13", "w12", "w17"], quizClue: "A whole young bird cured overnight in lemon, espelette pepper, and oregano, grilled skin-side down and finished over cedar, served with double-fried potatoes and a spicy aioli.", dropLine: "grilled baby chicken with double fried potatoes and spicy aioli", ingredients: "baby chicken marinade- lemon juice, olive oil, espelette pepper, oregano, garlic, salt, pepper. Potato cooking liquid- water, thyme, garlic, bay leaf, chili flakes, salt. Garnish- spicy mayo, chervil, chives", chefPrep: "marinated chicken grilled first skin side down on the grill then placed in cedar wood and cooked in Jasper until fully cooked and juice. Potatoes are smashed after first cook and deep fried until cripsy on the pick up. Seasoned with salt. Served with spicy mayo on the side with chives", allergensInRecipe: ["citrus", "chili", "garlic", "onion", "eggs"], allergensRemovable: ["eggs", "onion"] },
  { id: "d-hamachi", name: "Hamachi", section: "Sushi", description: "Other fish, sashimi and nigiri", pairedWineIds: ["w9", "w20"], pronunciation: "hah-MAH-chee", translation: "Young Pacific Yellowtail", funFact: "“Hamachi” specifically refers to young, farm-raised yellowtail at its peak fat content — the Japanese name for the fish changes as it grows larger.", quizClue: "Young, farm-raised yellowtail at peak fat content — high oil, velvety, rich, with a smooth, mild finish.", dropLine: "young pacific yellowtail, sashimi and nigiri", whatItIs: "Young, farm-raised Pacific yellowtail at its peak fat content — high oil, velvety, rich, with a smooth, mild finish. The Japanese name for yellowtail actually changes as the fish grows; this is specifically the younger stage.", goodToKnow: "Sliced to order and served two ways: raw as sashimi, or pressed nigiri-style over seasoned rice with a touch of wasabi. No cooking, no marinade — the prep is entirely in the cut.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-maguro", name: "Maguro", section: "Sushi", description: "Lean tuna, sashimi and nigiri", pairedWineIds: ["w20"], pronunciation: "mah-GOO-roh", translation: "Tuna (house, yellowfin, or bigeye)", funFact: "“Maguro” is the general Japanese word for tuna, but on menus it typically denotes lean yellowfin or bigeye rather than premium bluefin cuts.", quizClue: "Lean, deep red tuna with a firm texture and clean, mild flavor — the everyday grade you'll see most often on a nigiri board.", dropLine: "lean tuna, sashimi and nigiri", whatItIs: "Lean tuna — house, yellowfin, or bigeye. Deep red, clean, mild flavor with a firm texture. “Maguro” is the general Japanese word for tuna, but on menus it usually points to this leaner grade rather than the fattier belly cuts.", goodToKnow: "Sliced to order and served raw, either as sashimi or pressed nigiri-style over seasoned rice with a touch of wasabi.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-akami", name: "Akami", section: "Sushi", description: "Lean bluefin tuna, sashimi and nigiri", pairedWineIds: [], pronunciation: "ah-KAH-mee", translation: "Red Meat (Lean Bluefin Tuna)", funFact: "Akami comes from the upper spine area of the tuna, where the muscle works hardest, giving it a rich color and pure tuna flavor with almost no fat.", quizClue: "The leanest cut of bluefin, taken from where the muscle works hardest — deep red, iron-rich, with almost no fat and a subtle sweetness.", dropLine: "lean bluefin tuna, sashimi and nigiri", whatItIs: "The leanest cut of bluefin tuna, taken from the upper spine where the muscle works hardest. Deep red, iron-rich, clean, with a subtle sweetness and almost no fat.", goodToKnow: "Sliced to order and served raw, either as sashimi or pressed nigiri-style over seasoned rice with a touch of wasabi.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-chutoro", name: "Chutoro", section: "Sushi", description: "Medium fatty tuna, sashimi and nigiri", pairedWineIds: [], pronunciation: "choo-TOH-roh", translation: "Medium Fatty Tuna", funFact: "Chutoro is harvested from the side of the fish between the lean back and the ultra-fatty belly, offering the best of both worlds.", quizClue: "Balanced fat and lean tuna meat, velvety with a slightly buttery character and a subtle acidity that keeps it from feeling heavy.", dropLine: "medium fatty tuna, sashimi and nigiri", whatItIs: "Medium fatty tuna, cut from between the lean back and the ultra-fatty belly — balancing richness and leanness. Velvety texture with a slightly buttery character and a subtle acidity.", goodToKnow: "Sliced to order and served raw, either as sashimi or pressed nigiri-style over seasoned rice with a touch of wasabi.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-otoro", name: "Otoro", section: "Sushi", description: "Grand fatty tuna, sashimi and nigiri", pairedWineIds: [], pronunciation: "oh-TOH-roh", translation: "Grand Fatty Tuna", funFact: "Cut exclusively from the lowest part of the tuna belly near the head, otoro was once discarded by traditional Japanese chefs before refrigeration made fatty fish popular.", quizClue: "Extremely rich, heavily marbled tuna belly that melts on contact — the most intensely buttery cut of the fish, once considered scrap.", dropLine: "grand fatty tuna, sashimi and nigiri", whatItIs: "The grand fatty cut of tuna, taken exclusively from the lowest part of the belly near the head. Extremely rich, heavily marbled, and melts on contact — the most intensely buttery cut of the fish.", goodToKnow: "Sliced to order and served raw as sashimi or pressed nigiri-style over rice — occasionally finished with a light sear (aburi-style) to render some of the fat and add a smoky edge.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-tobiko", name: "Tobiko", section: "Sushi", description: "Flying fish roe, nigiri and garnish", pairedWineIds: [], pronunciation: "toh-BEE-koh", translation: "Flying Fish Roe", funFact: "Naturally pale yellow, tobiko is traditionally dyed with natural ingredients — squid ink for black, wasabi for green, or citrus for bright red.", quizClue: "Tiny, vibrant eggs with an exceptionally crunchy pop and a light, savory-sweet finish — often dyed with natural ingredients for color.", dropLine: "flying fish roe, nigiri and garnish", whatItIs: "Flying fish roe — tiny, vibrant eggs with an exceptionally crunchy pop and a light, savory-sweet flavor. Naturally pale yellow, it's traditionally dyed with natural ingredients for color: squid ink for black, wasabi for green, citrus for bright red.", goodToKnow: "Cured and served cold, spooned over pressed nigiri rice or used as a garnish for its crunch and color on rolls.", allergensInRecipe: ["fish"], allergensRemovable: [] },
  { id: "d-uni-usa", name: "Uni (U.S.A.)", section: "Sushi", description: "Domestic sea urchin, sashimi and nigiri", pairedWineIds: [], pronunciation: "OO-nee", translation: "Domestic Sea Urchin (Santa Barbara or Maine)", funFact: "California uni feeds on kelp forests, giving it large lobes with a bright, sweet, ocean-fresh creaminess.", quizClue: "Large golden-orange lobes with a thick, custard-like texture — clean and sweet, from cold-water kelp forests off the American coast.", dropLine: "domestic sea urchin, sashimi and nigiri", whatItIs: "Domestic sea urchin, typically from Santa Barbara or Maine. Large golden-orange lobes with a thick, custard-like texture — clean and sweet from feeding on cold-water kelp forests.", goodToKnow: "Delivered fresh and served raw, straight over rice or on its own — no cooking, minimal handling to preserve the custard texture.", allergensInRecipe: ["shellfish"], allergensRemovable: [] },
  { id: "d-uni-japan", name: "Uni (Japan)", section: "Sushi", description: "Japanese sea urchin, sashimi and nigiri", pairedWineIds: [], pronunciation: "OO-nee", translation: "Japanese Sea Urchin (Hokkaido Bafun or Murasaki)", funFact: "Hokkaido uni is prized worldwide because the urchins feed on mineral-dense kombu kelp, creating unmatched depth of flavor.", quizClue: "Smaller, firm, deep-orange lobes with intense richness and heavy umami — the import version of the same delicacy, prized for its depth.", dropLine: "japanese sea urchin, sashimi and nigiri", whatItIs: "Japanese sea urchin, typically Hokkaido Bafun or Murasaki. Smaller, firmer lobes than the domestic version, deep orange, with intense richness and heavy umami from feeding on mineral-dense kombu kelp.", goodToKnow: "Imported fresh and served raw, straight over rice or on its own — no cooking, minimal handling to preserve the texture.", allergensInRecipe: ["shellfish"], allergensRemovable: [] },
  { id: "d-botan-ebi", name: "Botan Ebi", section: "Sushi", description: "Spot prawn, sashimi and nigiri", pairedWineIds: [], pronunciation: "boh-TAHN EH-bee", translation: "Spot Prawn", funFact: "Botan ebi are often served with their heads fried separately so guests can enjoy the crunchy, flavorful shell as a bonus bite.", quizClue: "A large, raw prawn with a firm bite and natural sweetness — sometimes the head is fried separately for an extra crunchy course.", dropLine: "spot prawn, sashimi and nigiri", whatItIs: "Spot prawn, served raw. Large, firm bite with natural sweetness.", goodToKnow: "Served raw and whole or as nigiri. The head can be fried separately on request — a crunchy, flavorful bonus bite alongside the raw tail.", allergensInRecipe: ["shellfish"], allergensRemovable: [] },
  { id: "d-ebi", name: "Ebi", section: "Sushi", description: "Cooked shrimp, nigiri", pairedWineIds: [], pronunciation: "EH-bee", translation: "Cooked Shrimp", funFact: "Standard menu ebi is butterflied and cooked briefly in a light brine, turning the exterior bright red while keeping the meat juicy.", quizClue: "Butterflied and briefly cooked in a light brine until the exterior turns bright red, staying firm, snappy, and mildly sweet.", dropLine: "cooked shrimp, nigiri", whatItIs: "Cooked shrimp. Butterflied, firm, snappy texture, mild and slightly sweet flavor — the one item in this section that isn't served raw.", goodToKnow: "Butterflied and briefly cooked in a light brine, turning the exterior bright red while the meat stays juicy, then chilled and pressed over seasoned nigiri rice.", allergensInRecipe: ["shellfish", "vinegar"], allergensRemovable: [] },
  { id: "d-hotate", name: "Hotate", section: "Sushi", description: "Sea scallop, sashimi and nigiri", pairedWineIds: [], pronunciation: "hoh-TAH-teh", translation: "Sea Scallop", funFact: "The name “Hotate” comes from Japanese words meaning “raise a sail,” inspired by an old belief that scallops sailed across the ocean floor with one valve open.", quizClue: "Plump and ultra-soft, with a tender bite and clean ocean sweetness — named after an old belief that the shellfish could sail the seafloor.", dropLine: "sea scallop, sashimi and nigiri", whatItIs: "Sea scallop. Plump, ultra-soft, tender bite with clean ocean sweetness. The name comes from Japanese words meaning “raise a sail,” from an old belief that scallops sailed the ocean floor with one valve open.", goodToKnow: "Sliced to order and served raw as sashimi or pressed nigiri-style over rice — occasionally finished with a light sear.", allergensInRecipe: ["shellfish", "vinegar"], allergensRemovable: [] },
  { id: "d-madai", name: "Madai", section: "Sushi", description: "Red sea bream, sashimi and nigiri", pairedWineIds: [], pronunciation: "mah-DYE", translation: "Red Sea Bream (Japanese Snapper)", funFact: "Madai is considered the king of fish in Japan and a symbol of good fortune, traditionally served at celebrations and New Year's festivals.", quizClue: "A translucent white fish, firm and extremely clean-tasting with subtle sweetness — considered a symbol of good fortune in Japan.", dropLine: "red sea bream, sashimi and nigiri", whatItIs: "Red sea bream, also called Japanese snapper. Translucent white fish, firm texture, extremely clean flavor with subtle sweetness. Considered the king of fish in Japan and a symbol of good fortune, traditionally served at celebrations.", goodToKnow: "Often skin-scalded before slicing (a technique called yubiki), which softens the skin and adds a light smoky note. Served raw as sashimi or pressed nigiri-style over rice.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-kanpachi", name: "Kanpachi", section: "Sushi", description: "Greater amberjack, sashimi and nigiri", pairedWineIds: [], pronunciation: "kahn-PAH-chee", translation: "Greater Amberjack", funFact: "Kanpachi means “8-mark” in Japanese, because the dark stripes over its eyes resemble the kanji character for the number eight.", quizClue: "A leaner, crisper cousin of yellowtail, with a firm bite and clean, subtle flavor — named for markings that resemble a number.", dropLine: "greater amberjack, sashimi and nigiri", whatItIs: "Greater amberjack — a leaner, crisper cousin of yellowtail. Firm bite, clean and subtle flavor. The name means “8-mark” in Japanese, from dark stripes over its eyes that resemble the character for the number eight.", goodToKnow: "Sliced to order and served raw, either as sashimi or pressed nigiri-style over seasoned rice with a touch of wasabi.", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-scottish-salmon", name: "Scottish Salmon", section: "Sushi", description: "Atlantic salmon, sashimi and nigiri", pairedWineIds: [], pronunciation: "SKAH-tish SAH-mun", translation: "Atlantic Salmon (Sourced from Scotland)", funFact: "Raised in the strong ocean currents of Scottish fjords, this fish develops ideal muscle-to-fat marbling that keeps it firm yet meltingly tender.", quizClue: "A cold-water Atlantic fish raised in strong fjord currents, with high oil content, a soft silky texture, and a buttery finish.", dropLine: "atlantic salmon, sashimi and nigiri", whatItIs: "Atlantic salmon raised in the strong currents of Scottish fjords. High oil content, distinctly marbled, soft and silky with a buttery finish.", goodToKnow: "Sliced to order and served raw as sashimi or pressed nigiri-style over rice — occasionally finished with a light sear (aburi-style).", allergensInRecipe: ["fish", "vinegar", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-chefs-nigiri", name: "Chef's Selection of Nigiri", section: "Sushi", description: "Chef's choice, 3/6/9/12 pieces", pairedWineIds: ["w10", "w20"], quizClue: "Five, seven, or ten pieces of the freshest hand-pressed fish of the day, served with fresh grated wasabi.", dropLine: "chefs choice of nigiri selection", ingredients: "seasoned sushi rice, fresh grated wasabi, seasonal garnishes", chefPrep: "chefs choice of 5,7 and 10 pcs of freshest daily nigiri selection served with, fres grated wasabi.", allergensInRecipe: ["fish", "vinegar", "shellfish", "mustard"], allergensRemovable: ["shellfish", "mustard"] },
  { id: "d-sashimi-platter", name: "Premium Sashimi Platter", section: "Sushi", description: "Chef's choice variations", pairedWineIds: ["w20"], quizClue: "A choice of 5, 9, or 12 kinds of the day's freshest raw cuts, served over crushed ice with daikon and shiso.", dropLine: "sashimi platter with traditional garnishes", ingredients: "fish might include in the platter- maguro (yellowfin tuna, akami (lean bluefin tuna), chutoro (medium fatty bluefin tuna), otoro (fattiest part of bluefin tuna) scottish salmon, fresh oysters with ponzu,  ikura (marinated salmon eggs), madai (red sea bream), continued on omasake platter discription", chefPrep: "chefs choice of 5,9 and 12 kinds of freshest daily sashimi selection served with, daikon, shiso leaves and other garnished over crushed ice and light underneath. Served 2 pc fish per kind.", allergensInRecipe: ["fish", "shellfish", "soy", "gluten"], allergensRemovable: ["soy", "gluten", "shellfish"] },
  { id: "d-omakase-platter", name: "Prime 131 Omakase Platter", section: "Sushi", description: "14 pcs sashimi, 14 pcs nigiri, choice of 3 specialty rolls", pairedWineIds: ["w20"], quizClue: "The kitchen's highest-end tasting experience: 14 pieces of raw fish, 14 hand-pressed pieces, and three specialty maki of your choosing.", dropLine: "Prime 131 premium omakase platter", ingredients: "shima aji (stripped jack), uni (sea urchin roe), botan ebi (peony sweet shrimp), hotate (scallop), ebi (tiger prawn),  tobiko (flying fish roe), tamago (egg), uzura (quail egg), hamachi (yellowtail), unagi (fresh water eel)", chefPrep: "chef’s selection of highest end 14 pcs sashimi, 14 pcs nigiri, 3 specialty rolls (guests choice)", allergensInRecipe: ["shellfish", "fish", "eggs", "soy", "gluten", "sesame"], allergensRemovable: ["eggs", "gluten", "sesame", "soy", "shellfish"] },
  { id: "d-sushi-sashimi-nigiri", name: "Sashimi & Nigiri (general)", section: "Sushi", description: "Full sashimi and nigiri program", pairedWineIds: ["w20"] },
  { id: "d-ikura", name: "Ikura", section: "Sushi", description: "House marinated ikura with fresh wasabi and nori", pairedWineIds: ["w20"], pronunciation: "ee-KOO-rah", translation: "Salmon Roe", funFact: "The word “Ikura” actually comes from the Russian word “ikra,” which simply means caviar or fish eggs.", quizClue: "Premium Japanese salmon roe marinated in sake, mirin, and soy until the fishy edge mellows, served over warm rice with nori.", dropLine: "house marinated ikura with fresh wasabi and nori", ingredients: "marinated ikura- sake, mirin, soy sauce, premium japanese salmon eggs. Ikura nigiri- fresh grated wasabi, seasoned sushi rice, nori seaweed, marinated ikura", chefPrep: "for marinated ikura, alcohol is burned off from the sake and mirin, then soy sauce is added and cooled down. Salted salmon eggs are washed well under cold water and marinated until the fishy, salty flavor mellows. Nigiri must be consumed right away for the warm rice and crispy nori experience.", allergensInRecipe: ["alcohol", "fish", "soy", "gluten", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-tamagoyaki", name: "Tamagoyaki", section: "Sushi", description: "Housemade tamagoyaki (Japanese sweet omelette)", pairedWineIds: ["w20"], pronunciation: "tah-MAH-goh", translation: "Japanese Rolled Omelet", funFact: "Mastering tamago is historically considered the ultimate test of a sushi apprentice — executing paper-thin, unburned layers requires precise heat control built up over years.", quizClue: "A Japanese rolled omelette layered slowly in a rectangular pan, sweetened with dashi and mirin, served warm over rice.", dropLine: "housemade tamagoyaki (japanese sweet omelette)", ingredients: "tamagoyaki mix- dashi, mirin, sake, soy sauce, salt, sugar, oil. Dashi- water, bonito flakes, konbu. Tamago nigiri- fresh wasabi, nori, seasoned sushi rice", chefPrep: "all ingredients are mixed well and strained through a fine chinois, then cooked in a Japanese omelette pan layer by layer. Cooled completely before serving.", allergensInRecipe: ["fish", "alcohol", "soy", "gluten", "eggs", "mustard"], allergensRemovable: ["mustard"] },
  { id: "d-unagi", name: "Unagi", section: "Sushi", description: "Grilled fresh water eel with sweet soy sauce", pairedWineIds: ["w20"], pronunciation: "oo-NAH-gee", translation: "Freshwater Eel", funFact: "Unagi is never served raw — natural toxins in eel blood are completely neutralized by cooking. It’s traditionally eaten in Japan during summer for stamina.", quizClue: "Fresh water eel roasted and caramelized in a sweet soy glaze, served warm over rice.", dropLine: "grilled fresh water eel with sweet soy sauce", ingredients: "cooked unagi- japanese fresh water eel roasted with soy sauce, mirin, sugar. Unagi nigiri- fresh wasabi, nori, seasoned sushi rice", chefPrep: "fresh water eel is roasted with eel sauce until fully cooked and caramelized. For nigiri service it's heated until warm and served on top of the rice with fresh wasabi, wrapped with nori, and garnished with more eel sauce.", allergensInRecipe: ["fish", "soy", "alcohol", "gluten", "mustard"], allergensRemovable: ["mustard"] },

  { id: "d-prime131-roll", name: "Prime 131 Roll", section: "Sushi Rolls", description: "A5 wagyu, foie gras, shrimp tempura, avocado, shiso, yuzu aioli, eel sauce", pairedWineIds: [], quizClue: "A specialty maki packed with shrimp tempura, seared foie gras, and sliced A5 wagyu, finished with a yuzu aioli and eel sauce.", dropLine: "Prime 131 roll with A5 wagyu and foie gras", ingredients: "Prime 131 roll- shrimp tempura, foie gras, A5 japanese wagyu, avocado, shiso, yuzu aioli, eel sauce. Yuzu aioli- mayo, ponzu, rice vinegar, salt, lemon juice, yuzu kosho, garlic confit.", chefPrep: "seasoned sushi rice spread on nori and filled with shrimp tempura,seared foie gras, avocado, shiso and  rolled. Then topped with sliced A5 wagyu and cut into 8 equal pcs. Seated until medium rare. Garnished with yuzu kosho aioli and eel sauce.", allergensInRecipe: ["shellfish", "fish", "eggs", "garlic", "gluten", "soy", "citrus", "alcohol", "vinegar"], allergensRemovable: [] },
  { id: "d-crunchy-spicy-tuna-roll", name: "Crunchy Spicy Tuna Roll", section: "Sushi Rolls", description: "Avocado, tama arare, kaiware, sweet soy sauce", pairedWineIds: ["w5"], quizClue: "A maki built on a chopped yellowfin mix, avocado, and crispy rice puffs, dressed with a fiery mayo and sweet eel sauce.", dropLine: "crunchy spicy tuna roll with avocado and eel sauce", ingredients: "crunchy spicy tuna roll- sushi rice, nori, tuna mix, avocado, tama arare, kaiware (radish sprouts), spicy mayo, eel sauce, sesame seeds. Tuna mix- tuna, scallions, shallots, kimchi sauce,  yuzu juice, eel sauce, ponzu, sriracha. Spicy mayo- japanese mayo, togarashi, sesame oil, chili oil, ponzu, yuzu juice, salt. Eel sauce- soy sauce, sugar, mirin, starch.", chefPrep: "sushi rice spreaded evenly on the nori and sprinkled sesame seeds. Then inside the roll placed tuna mix, tama arare, avocado, kaiware and closed. Then cut 8 equal garnished with, spicy mayo and eel sauce", allergensInRecipe: ["fish", "onion", "chili", "citrus", "soy", "sesame", "alcohol", "eggs", "gluten", "vinegar"], allergensRemovable: ["eggs"] },
  { id: "d-dragon-roll", name: "Dragon Roll", section: "Sushi Rolls", description: "Shrimp tempura, jumbo lump crab salad, mango, avocado, sriracha", pairedWineIds: [], quizClue: "A maki filled with shrimp tempura, lump crab salad, and mango, topped with avocado and a spicy mayo drizzle.", dropLine: "dragon roll with shrimp tempura and crab salad", ingredients: "dragon roll- shrimp tempura, jumbo lump crab salad, mango, spicy mayo, avocado, sriracha, seasoned sushi rice, nori,sesame seeds. Shrimp tempura- salt, whole eggs, flour, tiger shrimp, soda water. Crab salad- Maryland blue crab, lemon juice, lemon zest, spicy mayo, salt.", chefPrep: "seasoned sushi rice spread on nori and filled with hot shrimp tempura, crab salad, mango,  rolled. Then topped with avocado and cut into 8 equal pcs. Garnished with spicy mayo, sriracha", allergensInRecipe: ["shellfish", "eggs", "gluten", "sesame", "chili", "citrus", "soy", "alcohol"], allergensRemovable: [] },
  { id: "d-yellowtail-serrano-roll", name: "Yellowtail Serrano Roll", section: "Sushi Rolls", description: "Cucumber, kizami wasabi, scallions, wasabi mayo", pairedWineIds: [], quizClue: "A maki of hamachi, cucumber, and pickled wasabi, topped with a thin sliced chili pepper and wasabi mayo.", dropLine: "yellowtail serrano roll with cucumber and wasabi mayo", ingredients: "yellowtail serrrano roll- seasoned sushi rice, nori, sesame seeds, hamachi, cucumber, kizami wasabi, scallions. Garnish- serrano pepper, wasabi mayo, micro greens. Kizami wasabi- wasabi, horseradish, soy sauce, sugar, oil. Wasabi mayo- wasabi, mayo, lemon juice, salt", chefPrep: "seasoned sushi rice spread on nori and filled with hamachi, cucumber, kizami wasabi, scallions and  rolled. Then  cut into 8 equal pcs. Garnished with serrano pepper, wasabi mayo and micro greens", allergensInRecipe: ["fish", "onion", "mustard", "soy", "chili", "eggs", "citrus", "sesame", "gluten"], allergensRemovable: ["chili", "citrus", "eggs", "gluten", "onion", "sesame", "soy", "mustard"] },
  { id: "d-seared-spicy-salmon-roll", name: "Seared Spicy Salmon Tartare Roll", section: "Sushi Rolls", description: "Spiced salmon mix, seared salmon, spicy aioli, ponzu, arare", pairedWineIds: ["w3"] },
  { id: "d-negi-toro-roll", name: "Negi Toro Roll", section: "Sushi Rolls", description: "Fatty tuna, finely diced scallions", pairedWineIds: ["w11"], quizClue: "A maki of fatty bluefin belly and scallions, wrapped seaweed-side out and served simply, with optional roe on top.", dropLine: "Toro and scallions roll", ingredients: "negi toro roll- bluefin otoro, scallions, sesame seeds, nori, seasoned sushi rice, optional caviar can be added for additional charge. Seasoned sushi rice- rice vinegar, salt, sugar, konbu seaweed, highest quality koshikiharu rice", chefPrep: "seasoned sushi rice spread on nori and filled with bluefin toro, scallions and  rolled into 8 equal pcs. Served seaweed outside", allergensInRecipe: ["fish", "onion", "sesame", "vinegar"], allergensRemovable: ["onion", "sesame"] },
  { id: "d-131-california-roll", name: "131 California Roll", section: "Sushi Rolls", description: "Lump crab, cucumber, avocado, tobiko, spicy mayo", pairedWineIds: ["w5"], quizClue: "A classic maki of king crab, avocado, and cucumber under a spicy mayo, finished with orange tobiko and fresh lemon.", dropLine: "Premium california roll with fresh blue crab.", ingredients: "premium california roll- seasoned sushi rice, nori, avocado, ble crab meat, cucumber, spicy mayo.Garnish- orange tobiko, fresh lemon juice.", chefPrep: "seasoned sushi rice spread on nori and filled with avocado, king crab, cucumber, spicy mayo. Rolled and cut into 8 equal pcs.", allergensInRecipe: ["shellfish", "eggs", "citrus", "fish", "chili", "soy"], allergensRemovable: ["chili", "citrus", "eggs", "fish", "soy"] },
  { id: "d-miso-salmon-roll", name: "Miso Salmon Roll", section: "Sushi Rolls", description: "Kanpyo, asparagus tempura, avocado, truffle oil, ponzu", pairedWineIds: [], quizClue: "A maki of sweet gourd shavings, tempura asparagus, and avocado, topped with a Scottish-raised fish, truffle oil, and a sweet glaze.", dropLine: "miso salmon roll with asparagus tempura and ponzu", ingredients: "miso salmon roll- kanpyo (sweet gourd shavings), tempura asparagus, avocado, seasoned sushi rice, nori. Garnish- scottish salmon, truffle oil, teriyaki miso (same as black cod marinade), ponzu, micro greens", chefPrep: "seasoned sushi rice spread on nori and filled with avocado, kanpyo, tempura asparagus and  rolled into 8 equal pcs. Then sliced salmon placed on top of the roll, brushed with truffle oil and torched. Garnished with teriyaki miso sauce, micro greens and ponzu", allergensInRecipe: ["fish", "garlic", "gluten", "sesame", "soy", "alcohol", "citrus", "vinegar"], allergensRemovable: ["sesame"] },
  { id: "d-sushi-rolls", name: "Sushi Rolls (general)", section: "Sushi Rolls", description: "Full sushi roll program", pairedWineIds: ["w20"] },

  { id: "d-mashed-potato", name: "Loaded Mashed Potato", section: "Sides", description: "Short ribs, raclette, truffle jus", pairedWineIds: ["w6"], quizClue: "A creamy Idaho root vegetable, warmed with braised short rib and heavy cream, topped with melted raclette.", dropLine: "mash potatoes with reclette cheese and truffle jus", ingredients: "mash potato- idaho potato, heavy cream, butter, salt. Truffle jus- veal demi, red vine, shallots, garlic, salt, pepper, olive oil, black truffles. Garnished with reclette cheese, braised short ribs, chives", chefPrep: "mash potatoes heat up with braised short ribs and heavy cream. Then transferred into serving dish, topped with reclette cheese and melted in the salamander. Garnished with chives and truffe jus served tableside like souffle.", allergensInRecipe: ["dairy", "garlic", "onion", "alcohol"], allergensRemovable: ["alcohol", "garlic", "onion"] },
  { id: "d-wild-mushrooms", name: "Exotic Wild Mushrooms", section: "Sides", description: "Pickled shallot, herbs, breadcrumbs", pairedWineIds: ["w17"] },
  { id: "d-mac-cheese", name: "Ricotta Stuffed Mac & Cheese", section: "Sides", description: "Toasted bread crumbs, parsley", pairedWineIds: ["w6"], quizClue: "Large pasta shells filled with a soft Italian curd, bathed in a sharp cheddar cream sauce and topped with toasted breadcrumbs.", dropLine: "", ingredients: "cheese sauce- garlic, shallots, heavy cream, ap flour, butter, white sharp cheddar, salt. Pasta- big shell pasta, ricotta, salt. Garnish- toasted breadcrumbs, parsley", chefPrep: "big shell pasta blanched in salt water untill cooked and cooled down, then stuffed with ricotta and set a side for service. During service when order comes in paste covered with warm cheese sauce and heat up in the oven until hot. Garnished with breadcrumbs and parsley", allergensInRecipe: ["dairy", "garlic", "onion", "gluten"], allergensRemovable: [] },
  { id: "d-asparagus", name: "Grilled Asparagus", section: "Sides", description: "Ricotta, mojo rojo", pairedWineIds: [], quizClue: "Green spears cooked over the wood fire, plated with whipped ricotta and a red-pepper mojo rojo vinaigrette.", dropLine: "grilled asparagus with whipped ricotta and mojo rojo", ingredients: "mojo rojo vinaigrette- bell pepper, fresno pepper, cilantro, red onion, garlic, cumin caraway seeds, olive oil, red wine vinegar, salt, pepper, honey. Garnish- mint, micro basil, olive oil. Whipped ricotta- same as dip", chefPrep: "asparagus grilled on wood fire until nice color. Plated with whipped ricotta, mojo rojo vinaigrette, garnishes. Gluten free great sharing item.", allergensInRecipe: ["chili", "dairy", "garlic", "onion", "vinegar"], allergensRemovable: [] },
  { id: "d-fries", name: "French Fries", section: "Sides", description: "Parsley, spicy aioli", pairedWineIds: [], quizClue: "Thick-cut potatoes cooked in hot oil until crispy, seasoned simply, and served with a jalapeño aioli.", dropLine: "french fries with parsley and jalapeno aioli", ingredients: "jalapeno aioli- mayo, cilantro, jalapeno, garlic, lime juice, cumin, salt. Garnish- parsley, salt, pepper.", chefPrep: "thick cut french fries fried until crispy and seasoned with salt, peppper. Served with Jalapeno aioli on the side", allergensInRecipe: ["chili", "citrus", "eggs", "garlic"], allergensRemovable: ["chili", "citrus", "eggs", "garlic"] },
  { id: "d-broccolini", name: "Grilled Broccolini", section: "Sides", description: "Lemon-chili vinaigrette", pairedWineIds: [], quizClue: "A slender green vegetable blanched, then finished on the wood fire with a chili-lemon vinaigrette and crispy rice puffs.", dropLine: "grilled broccolini with lemon chili vinaigrette", ingredients: "broccolini- chili lemon vinaigrette, crispy rice puffs, olive oil, salt, pepper. Chili lemon vinaigrette- japanese chili flakes, shallots, lemon juice + zest, lime juice + zest, water, olive oil, sugar, salt, apple cider vinegar.", chefPrep: "broccolini cleaned, blanched and set a side for service. During service its seasoned with olive oil, salt, pepper and grilled on woodfire. Then dressed with chili lemon vinaigrette and garnished with puffed rice crakers.", allergensInRecipe: ["chili", "citrus", "onion", "vinegar"], allergensRemovable: [] },
  { id: "d-spinach-gratin", name: "Spinach Gratin", section: "Sides", description: "Parmesan, garlic herb bread crumbs", pairedWineIds: [] },

  { id: "d-tenderloin-8", name: "8oz American Tenderloin (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w19"], quizClue: "An 8-ounce, most-tender cut from a domestic gold-grade beef program, finished with rendered fat and garlic confit.", dropLine: "8 oz SRF gold tenderloin with garlic confit", ingredients: "8 oz Snake river farms gold grade tenderloin- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil)", chefPrep: "hightest grade american wagyu steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-ny-strip-12", name: "12oz American NY Strip (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: [], quizClue: "A 12-ounce cut from the short loin, domestic gold-grade beef, finished with rendered fat and garlic confit.", dropLine: "12 oz SRF gold NY strip with garlic confit", ingredients: "12 oz Snake river farms gold grade NY strip- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). Snake River Farms American Wagyu is a cross between purebred Japanese Wagyu and high-quality American cattle.", chefPrep: "SRF Black Label™ and SRF Gold Label™ both score above USDA Prime: SRF Silver Label™ has a BMS of 4 to 5 with similar marbling to USDA Prime grade beef. SRF Black Label™ has a BMS of 6 to 8 with significantly more marbling than USDA Prime grade beef.  SRF Gold Label™ registers a BMS of 9 or higher and contains the highest level of marbling we offer.", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-ribeye", name: "18oz American Ribeye (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w14"], quizClue: "A well-marbled cut from the rib section, domestic gold-grade beef, finished with rendered fat and garlic confit.", dropLine: "10 oz SRF gold ribeye with garlic confit", ingredients: "10 oz Snake river farms gold grade ribeye- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil)", chefPrep: "hightest grade american wagyu steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-ny-strip-14", name: "14oz Australian NY Strip (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w14"], quizClue: "A 14-ounce cut from the short loin, graded 9+ from a Southern Hemisphere high-marbling program, finished with rendered fat and garlic confit.", dropLine: "14 oz Australian NY strip with garlic confit", ingredients: "14 oz 9+ highest grade Australian wagyu NY strip- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). Marbling is graded on a scale of 0-9 in the Ausmeat grading system. The Japanese grading system goes up to 12.   Sher Wagyu bodies well above MS 9 are graded as MS 9+.", chefPrep: "hightest grade australian wagyu Sher Farms steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving. The Sher Wagyu Fullblood cattle are based on the three main Japanese bloodlines of Tajima, Fujiyoshi and Kedaka. The Tajima bloodline is based on the Yasumi doi and Kikunori doi lines.", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-tomahawk", name: "32oz Australian Tomahawk (Wagyu)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w16"], quizClue: "A 32-ounce, bone-in cut from the rib section with the full rib bone left on for presentation, graded 9+ from a Southern Hemisphere high-marbling program.", dropLine: "32 oz Australian wagyu tomahawk with garlic confit", ingredients: "32 oz 9+ highest grade Australian wagyu tomahawk- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). Cattle are pasture fed until 18 months of age , then grainfed for 400+ days to create a delicious and consistent Wagyu product for you to enjoy.", chefPrep: "Sher Wagyu beef is all natural, hormone and antibiotic free and Halal accredited. All Sher Wagyu Fullblood cattle are traceable back to their Japanese ancestors and are DNA registered with pedigrees of sires & dams kept on the AWA data base.Nick and Vicki Sher calved the first Purebred Wagyu embryo calf in Australia on February 11, 1992. Sher Wagyu’s Fullblood herd is based at Ballan, central Victoria.", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-kagawa-a5", name: "4oz Japanese A5 Wagyu Kagawa Olive Beef Tenderloin", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: [], quizClue: "A 4-ounce, ultra-rare cut from cattle fed a special island diet that includes a fruit byproduct, giving the fat an unusually nutty character.", dropLine: "Premium Kagawa olive beef with garlic confit", ingredients: "Sanuki olive beef - salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). There are only 1,700 Sanuki cattle on the island, all of which are fed a special type of feed featuring a dehydrated and roasted mulch of olives. This produces the rich, tender texture of Olive Wagyu beef, which has higher levels of oleic acid and yellowed fat, creating a slightly nutty taste.", chefPrep: "Sanuki Live Wagyu originated in the Kagawa Prefecture of Japan. More specifically, Shodoshima Island, which is known for producing 99% of Japan's olive oil. While raising wagyu cattle for meat production started back in 1882, in the early 20th century, Shodoshima began its mass production of olive oil. Local cattle rancher, Masaki Ishii, was tired of seeing all the olive waste simply thrown out. So, instead, he started feeding this pulp to his heard of black wagyu cattle – resulting in the first olive-fed wagyu in 2011.", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },

  { id: "d-steak-sauce", name: "Prime 131 Steak Sauce", section: "Sauces", description: "House made steak sauce", pairedWineIds: [], quizClue: "A house-made condiment built on ketchup, sherry vinegar, molasses, and Worcestershire, finished with black garlic and yuzu juice.", dropLine: "house made steak sauce", ingredients: "steak sauce- ketchup, sherry vinegar, worcestershire sauce, molasses, black pepper, salt, saba vinegar, ancho powder, black garlic, yuzu juice. worcestershire sauce- vinegar, water, molasses, sugar, salt, anchovy, celery seed, garlic, tamarind. saba vinegar- grapes, red wine vinegar", chefPrep: "All ingredients mixed well and set aside for service. Served room temperature.", allergensInRecipe: ["vinegar", "chili", "garlic", "citrus", "fish"], allergensRemovable: [] },
  { id: "d-chimichurri", name: "Chimichurri Sauce", section: "Sauces", description: "House made chimichurri sauce", pairedWineIds: [], quizClue: "A bright, herbaceous condiment of parsley, cilantro, capers, and red wine vinegar with a touch of chili flake, the classic partner for steak and chicken.", dropLine: "house made chimichurri sauce", ingredients: "chimichurri- parsley, cilantro, capers, red wine vinegar, salt, toasted chili flakes, black pepper, sunflower oil", chefPrep: "All ingredients mixed well in the bowl and kept at room temperature for service. A great condiment for steaks and chicken.", allergensInRecipe: ["vinegar", "chili"], allergensRemovable: [] },
  { id: "d-truffle-butter", name: "Truffle Butter", section: "Sauces", description: "House made fresh truffle butter", pairedWineIds: [], quizClue: "Whipped until airy, then finished with a rare black fungus and its own fragrant oil, rolled into a log and chilled.", dropLine: "House made fresh truffle butter", ingredients: "truffle butter- fresh black truffles, butter, white truffle oil, salt", chefPrep: "Room temperature butter whipped until airy, then salt, microplaned fresh black truffles, and truffle oil are added. Rolled into a torchon and kept cold for service.", allergensInRecipe: ["dairy"], allergensRemovable: [] },
  { id: "d-basque-cheesecake", name: "Basque Cheesecake", section: "Desserts", description: "Strawberry coulis, raspberry croustillant, olive oil snow, fresh berries", pairedWineIds: [], quizClue: "A deeply caramelized, crustless baked custard finished tableside with a trio of powdered snow and croustillant, a few dollops of strawberry coulis, fresh berries, chocolate curls, and a dusting of gold powder.", dropLine: "basque-style baked cheesecake with strawberry coulis and fresh berries", ingredients: "Cheesecake, Strawberry Coulis, Raspberry Croustillant, Olive Oil Snow, fresh blueberries, raspberries and blackberries, Chocolate Curls, gold powder", chefPrep: "Cheesecake plated first, then three small scoops of olive oil snow and croustillant placed around it, followed by three dollups of strawberry coulis. Finished with fresh mixed berries, chocolate curls, and a touch of gold powder.", allergensInRecipe: ["dairy", "eggs"], allergensRemovable: [] },
  { id: "d-skillet-fudge", name: "Skillet Fudge", section: "Desserts", description: "Brown butter ice cream, frosted pecans, soft caramel", pairedWineIds: [], quizClue: "A warm chocolate brownie and cookie dough duet baked together in the pan it's served in, topped with a scoop of brown butter ice cream, frosted pecans, and a caramel drizzle.", dropLine: "warm skillet-baked brownie and cookie dough with brown butter ice cream", ingredients: "Fudge Brownie Batter, Cookie Dough, Frosted Pecans, Soft Caramel, Brown Butter Ice Cream", chefPrep: "Brownie batter and cookie dough baked together in the skillet, then topped with brown butter ice cream, frosted pecans, and a caramel drizzle right before serving.", allergensInRecipe: ["gluten", "dairy", "eggs", "nuts"], allergensRemovable: [] },
  { id: "d-sorbet-flight", name: "Sorbet Flight", section: "Desserts", description: "", pairedWineIds: [] },
  { id: "d-lemon-and-lime", name: "Lemon and Lime", section: "Desserts", description: "Citrus curd shells, toasted meringue, citrus streusel, cocoa cake", pairedWineIds: [], quizClue: "A dual-citrus dessert built from two curd-filled chocolate shells set over toasted meringue and citrus streusel, with pieces of cocoa cake tucked between and fresh zest finished on top.", dropLine: "citrus curd shells with toasted meringue and citrus streusel", ingredients: "Lemon Curd, Lime Curd, Citrus Streusel, Swiss Meringue (toasted), Cocoa Mud Cake, lemon and lime zest, white chocolate lemon and lime half-shells, Chocolate Corals", chefPrep: "Citrus shells filled with curd and chocolate corals. Toasted meringue spread on one side of the plate with two scoops of streusel at its edge, topped with a dollop each of lemon and lime curd. Shells placed on the streusel with pieces of cocoa cake tucked between them, then the meringue is torched and fresh zest finished on top.", allergensInRecipe: ["dairy", "eggs", "gluten", "citrus"], allergensRemovable: [] },
  { id: "d-black-forest", name: "Black Forest", section: "Desserts", description: "Kirsch-soaked cocoa cake, cherry vanilla chantilly, white chocolate mousse", pairedWineIds: [], quizClue: "A cherry-and-chocolate composed dessert built from kirsch-soaked cocoa cake layered with cherry vanilla chantilly, wrapped around a white chocolate mousse core, and coated in a chocolate shell.", dropLine: "kirsch-soaked cocoa cake with cherry vanilla chantilly and white chocolate mousse", ingredients: "Cocoa Mud Cake, Cherry Vanilla Chantilly, White Chocolate Mousse, Kirsch Syrup, amarena cherries in syrup, Chocolate Corals", chefPrep: "Cocoa cake soaked in kirsch syrup, layered with vanilla chantilly and cherries, frozen and cut into blocks, then wrapped in white chocolate mousse. Frozen again, coated in chocolate bark and velvet spray, and garnished with fresh cherries, chocolate corals, and powdered sugar.", allergensInRecipe: ["dairy", "eggs", "gluten", "alcohol"], allergensRemovable: [] },
  { id: "d-filet-8", name: "8oz Filet (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w15"], quizClue: "An 8-ounce cut from the most tender part of the animal, seasoned simply and finished with garlic confit.", dropLine: "8 oz Prime filet with garlic confit", ingredients: "8 oz fliet- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil).Less than 2% of all beef produced in the United States will earn the top prime designation.", chefPrep: "steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-bone-in-filet", name: "12oz Bone-In Filet (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w15", "w18"], quizClue: "A 12-ounce tender cut left attached to part of the rib for extra flavor, seasoned simply and finished with garlic confit.", dropLine: "12 oz Prime bone in filet with garlic confit", ingredients: "12 oz bone in fliet- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). The word \\\"prime\\\" is a quality grade assigned by the U.S. Department of Agriculture to describe the highest quality beef and other meats, including veal and lamb, in terms of tenderness, juiciness, and flavor.", chefPrep: "steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-ny-strip-16", name: "16oz USDA Prime NY Strip (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w16"], quizClue: "A 16-ounce cut from the short loin, graded top-tier by the federal beef grading system, seasoned simply and finished with garlic confit.", dropLine: "16 oz prime NY strip with garlic confit", ingredients: "16 oz NY strip- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). Marbling- the term used to describe flecks of fat within the meat, adds flavor, and younger beef produces the most tender meat.", chefPrep: "steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] },
  { id: "d-porterhouse", name: "USDA Prime Porterhouse for Two (Classics)", section: "Steaks", description: "Choice of live post oak, pecan, or bourbon wood", pairedWineIds: ["w16"], quizClue: "A 40-ounce cut combining two different muscles on either side of a T-shaped bone, graded top-tier by the federal beef grading system, built to share.", dropLine: "40 oz Prime porterhouse for 2 with garlic confit", ingredients: "40 oz Porterhouse- salt, pepper, rendered A5 wagyu fat, garlic confit (garlic, oil). anything receiving a prime designation is deemed to be the best of the best.", chefPrep: "steak seasoned with salt and pepper and cooked on wood fire grill with choice of wood to desired temperature. Served with garlic confit on the side and brushed with rendered A5 wagyu fat right before serving", allergensInRecipe: ["garlic"], allergensRemovable: ["garlic"] }
];

const STYLE_LABELS = {
  sparkling: "Sparkling",
  white: "Whites & Rosés",
  red: "Reds",
  dessert: "Dessert",
  sake: "Sake"
};

const STYLE_ORDER = ["sparkling", "white", "red", "dessert", "sake"];

// By The Bottle browse structure. Categories match the physical menu's own
// grape-variety sections. Categories listed in BOTTLE_SUBCATEGORY_ORDER get
// static sub-headers within their (single) expanded accordion panel once
// they're large enough that a flat scroll stops being useful -- these are
// NOT nested accordions, just dividers inside one already-open section.
const BOTTLE_CATEGORY_ORDER = [
  "Sauvignon Blanc",
  "Chardonnay",
  "Aromatic Whites",
  "Rosé",
  "Pinot Noir & Gamay",
  "Merlot & Merlot Blends",
  "Cabernet Sauvignon & Meritage",
  "Nebbiolo / Nebbiolo Blends",
  "Barbera / Sangiovese / Corvina / Blends",
  "Tempranillo / Blends",
  "Syrah & Grenache Blends / Malbec / Zinfandel",
  "Dessert",
  "Sake",
  "Champagne & Sparkling"
];

const BOTTLE_SUBCATEGORY_ORDER = {
  "Chardonnay": ["Old World", "New World"],
  "Pinot Noir & Gamay": ["Old World", "New World"],
  "Champagne & Sparkling": ["Champagne", "Other Sparkling"],
  "Cabernet Sauvignon & Meritage": ["Bordeaux", "California", "International", "Meritage & Blends"]
};
const SECTION_ORDER = ["Raw Bar", "Starters", "Soups & Salads", "Entrées", "Sushi", "Sushi Rolls", "Sides", "Steaks", "Sauces", "Desserts"];

const COCKTAILS = [
  {
    id: "c1", name: "Lycheetini", glassware: "Martini", method: "Shake & Strain", category: "house",
    flavorTags: ["Lychee", "Citrus", "Floral", "Sweet"],
    ingredients: ["2 oz Haku Vodka", "1 oz Re\u00e0l Lychee", "1 oz Finest Call Single Pressed Lemon Juice"],
    garnish: "Popping Boba Pearls",
    directions: "Combine all ingredients in a cocktail shaker with ice. Shake and strain into martini glass. Garnish and serve.",
    prep: "", funFact: "Haku Vodka is filtered through bamboo charcoal, a Japanese technique that gives it an unusually silky, soft texture for a vodka.", bestFor: "A guest who wants something playful and not too boozy-tasting to open the night."
  },
  {
    id: "c2", name: "Tequila Twilight", glassware: "Double Rocks", method: "Shake & Strain", category: "house",
    flavorTags: ["Dragon Fruit", "Papaya", "Lime", "Agave"],
    ingredients: ["1.5 oz Casamigos Blanco", "0.5 oz Cointreau Orange Liqueur", "1 oz Finest Call Single Pressed Lime Juice", "1 oz Sweetbird Dragon Fruit & Papaya Syrup"],
    garnish: "Dehydrated Dragon Fruit, Mint Sprig",
    directions: "Combine all ingredients in a cocktail shaker with ice. Shake and strain over fresh ice into Rocks Glass. Garnish and serve.",
    prep: "", funFact: "Casamigos was founded in 2013 by George Clooney and two friends — the name translates to &ldquo;house of friends.&rdquo;", bestFor: "A tequila drinker who wants something bright and tropical, not smoky or agave-forward."
  },
  {
    id: "c3", name: "Yuzu Basil Martini", glassware: "Martini", method: "Shake & Strain", category: "house",
    flavorTags: ["Yuzu", "Ginger", "Basil", "Bright Citrus"],
    ingredients: ["2 oz Ketel One Vodka", "0.5 oz Finest Call Single Pressed Lemon Juice", "0.5 oz Finest Call Single Pressed Lime Juice", "0.75 oz Yuzu & Ginger Puree (house prep)", "4 Basil Leaves (torn in half)"],
    garnish: "Basil Leaf, Fresh or Dehydrated Lemon Wheel",
    directions: "Combine all ingredients in a cocktail shaker with ice. Shake and strain into martini glass. Garnish and serve.",
    prep: "Yuzu Ginger Puree: whisk or blend 1 bottle (16.9 oz) Re\u00e0l Yuzu with 1 bottle (16.9 oz) Re\u00e0l Ginger for 3-5 minutes until fully emulsified. Label, date, refrigerate. Shake well before use. Yields 33.8 oz.", funFact: "Yuzu is a Japanese citrus prized more for its fragrance than its tartness — it shows up as often in high-end cocktails as it does in Japanese kitchens.", bestFor: "A guest who finds a classic martini too austere and wants something more aromatic."
  },
  {
    id: "c4", name: "Negroni Bianco", glassware: "Rocks Glass", method: "Stir & Strain", category: "house",
    flavorTags: ["Bergamot", "Floral", "Herbal", "Bittersweet"],
    ingredients: ["1 oz Bombay Dry Gin", "1 oz Italicus", "1 oz Cinzano Bianco Vermouth"],
    garnish: "Large Format Ice, Lemon Peel, Rosemary Sprig",
    directions: "Stir all ingredients in a mixing glass with ice. Strain over large format ice cube. Garnish and serve.",
    prep: "", funFact: "Italicus is a modern bergamot liqueur, launched in 2016 and credited with reviving interest in Italian aperitivo culture outside Italy.", bestFor: "A Negroni drinker who wants something lighter and more floral than the classic red version."
  },
  {
    id: "c5", name: "Mystic Garden", glassware: "Martini, Jewelry Box", method: "Shake & Strain", category: "house",
    flavorTags: ["Herbal", "Honey", "Yuzu", "Smoke"],
    ingredients: ["1.5 oz The Botanist Gin", "0.5 oz Cointreau Orange Liqueur", "0.5 oz Finest Call Single Pressed Lemon Juice", "0.5 oz Sweetbird Honeycomb Syrup", "2 oz Fever Tree Lime Yuzu Soda", "4 Basil Leaves (torn in half)"],
    garnish: "Basil and/or Mint Sprig, Dehydrated Lavender, Lemon Wheel, Flavored Smoke",
    directions: "Combine all ingredients (except Fever Tree) in a cocktail shaker with ice. Shake and strain into martini glass. Top with Fever Tree Lime Yuzu Soda. Garnish and fill bottom drawer with flavored smoke. Open tableside to release smoke and inform guest of interactive self garnish.",
    prep: "", funFact: "The Botanist Gin is distilled on Islay — an island better known for smoky whisky — using a large number of hand-foraged local botanicals alongside the classic nine.", bestFor: "The guest who wants a show: the smoke-filled drawer is a genuine tableside moment."
  },
  {
    id: "c6", name: "Scottish Manhattan", glassware: "Martini", method: "Stir & Strain", category: "house",
    flavorTags: ["Malt", "Dried Fruit", "Baking Spice", "Bitters"],
    ingredients: ["2 oz Glenfiddich 12yr Single Malt", "1 oz Martini & Rossi Sweet Vermouth", "2 Dashes Angostura Bitters"],
    garnish: "Cherry",
    directions: "Combine all ingredients into mixing glass with ice. Stir and strain into martini glass. Garnish and serve.",
    prep: "", funFact: "Glenfiddich means &ldquo;Valley of the Deer&rdquo; in Gaelic, and it's been one of the world's best-selling single malts for decades.", bestFor: "A Manhattan drinker who wants something smoky and malty instead of the usual bourbon or rye base.", followUp: ["Up or on the rocks?"]
  },
  {
    id: "c7", name: "Jade in the Shade", glassware: "Coupe", method: "Shake & Strain", category: "house",
    flavorTags: ["Matcha", "Mint", "Lime", "Silky"],
    ingredients: ["2 oz Roku Gin", "1.5 oz Mint Matcha Syrup (house prep)", "1 oz Finest Call Single Pressed Lime Juice", "1 oz Egg White"],
    garnish: "Mint Leaf, Matcha Chocolate Shavings",
    directions: "Combine all ingredients in a cocktail shaker with ice. Shake and strain into coupe glass. Garnish and serve.",
    prep: "Mint Matcha Syrup: whisk 1 bottle (33 oz) Sweetbird Mojito Mint Syrup with 2 tbsp high grade matcha powder until fully suspended. Label, date, refrigerate.", funFact: "Matcha has been central to Japanese tea ceremony for centuries — prized as much for the ritual as the flavor.", bestFor: "A guest who wants something visually striking and less sweet than a typical shaken cocktail.", followUp: ["With or without egg white?"]
  },
  {
    id: "c8", name: "Gilded Goose", glassware: "Martini, Martini Tray Set (optional)", method: "Shake & Strain", category: "house",
    flavorTags: ["Briny", "Olive", "Dry", "Crisp"],
    ingredients: ["2.5 oz Grey Goose Vodka", "0.5 oz Martini & Rossi Dry Vermouth", "0.5 oz Olive Brine"],
    garnish: "3 Skewered Olives, Fries (optional)",
    directions: "Combine vodka, vermouth, and olive brine into a shaker tin. Shake with ice and double strain into a chilled martini glass. Garnish and serve.",
    prep: "", funFact: "The dirty martini's olive brine has been used to cut vodka's neutrality since the drink's classic era.", bestFor: "A savory-forward guest who finds sweeter cocktails uninteresting."
  },
  {
    id: "c9", name: "Cosmobelle", glassware: "Coupe", method: "Shake & Strain", category: "house",
    flavorTags: ["Cranberry", "Citrus", "Dragon Fruit", "Sweet-Tart"],
    ingredients: ["1.5 oz Absolut Citron", "0.5 oz Cointreau Orange Liqueur", "1.5 oz Cranberry Juice", "0.5 oz Finest Call Single Pressed Lime Juice", "0.5 oz Sweetbird Dragon Fruit & Papaya Syrup"],
    garnish: "Dehydrated Dragon Fruit, Gold Sugar Half Rim",
    directions: "Combine all ingredients in a cocktail shaker with ice. Shake and strain into coupe glass. Garnish and serve.",
    prep: "", funFact: "A modern riff on the 1990s Cosmopolitan — dragon fruit and papaya syrup update the classic citrus-cranberry formula.", bestFor: "A guest who loved Cosmos in their heyday and wants a fresher take."
  },
  {
    id: "c10", name: "Gold Fashioned", glassware: "Single Rocks Glass", method: "Stir & Strain", category: "house",
    flavorTags: ["Whiskey", "Cabernet", "Oak Spice", "Bitters"],
    ingredients: ["1.5 oz Jameson Irish Whiskey", "0.5 oz WhistlePig PiggyBack 6yr Rye", "0.25 oz Cabernet Simple Syrup (house prep)", "2 Dashes Angostura Bitters"],
    garnish: "Manicured Orange Peel, Luxardo Cherry, 24k Large Gold Flakes",
    directions: "Combine all ingredients into a mixing glass with ice. Stir and strain into single rocks glass over large format ice. Garnish and serve.",
    prep: "Cabernet Simple Syrup: blend 1 bottle (25 oz) house Cabernet with 40 oz white sugar on medium for 5 minutes until fully dissolved and smooth. Label, date, store chilled. Yields ~66 oz.", funFact: "Pairing Irish whiskey with rye is unusual — Jameson's smoothness balances the spice WhistlePig's rye brings to the blend.", bestFor: "An Old Fashioned drinker who wants something a touch sweeter and more layered."
  },
  {
    id: "c11", name: "Golden 'B'", glassware: "Martini", method: "Shake & Strain", category: "house",
    flavorTags: ["Honey", "Lemon", "Bourbon", "Sparkling"],
    ingredients: ["1.5 oz Maker's Mark Bourbon", "1 oz Finest Call Single Pressed Lemon Juice", "0.75 oz Gold Glitter Honeycomb Syrup (house prep)", "2 oz Sparkling Wine"],
    garnish: "Dehydrated Lemon Wheel, Gold Sugar Stripe",
    directions: "Combine all ingredients (minus sparkling wine) into a shaker tin. Shake with ice and strain into a martini glass. Top with sparkling wine. Garnish and serve.",
    prep: "Gold Glitter Honeycomb Syrup: whisk 1 bottle (33 oz) Sweetbird Honeycomb Syrup with 2.5 g edible gold luster dust until fully suspended. Label, date. Yields 33 oz.", funFact: "Most whiskey sours lean on egg white for texture; this one skips it and lightens things with sparkling wine instead.", bestFor: "A celebratory, bourbon-curious guest who wants something festive rather than a standard sour."
  },
  {
    id: "c12", name: "Opulent Espresso Martini", glassware: "Coupe", method: "Shake & Strain", category: "house",
    flavorTags: ["Espresso", "Vanilla", "Agave", "Roasted"],
    ingredients: ["1.5 oz Vanilla Bean Infused Patr\u00f3n Reposado (house prep)", "0.5 oz Mr. Black Cold Brew Liqueur", "2.5 oz Berg House Espresso Martini Mix (house prep)"],
    garnish: "Three Gold Dusted Espresso Beans",
    directions: "Combine all ingredients into a shaker tin. Shake with ice and strain into a coupe glass. Garnish and serve.",
    prep: "Vanilla Bean Patr\u00f3n: drop 2 split vanilla pods into a Patr\u00f3n Reposado bottle to infuse on the backbar; keep at least 2 infused bottles on hand. Espresso Martini Mix: dissolve 1 can (94g) Illy Instant Classico into 40 oz warm water, add 24 oz Maven Cold Brew and 1 bottle (33.8 oz) Sweetbird Vanilla Syrup, stir. Label, date, chill. Yields 64 oz.", funFact: "Patrón Reposado rests in oak for several months before bottling, giving it a rounder character than blanco tequila — an unusual espresso martini base in place of vodka.", bestFor: "Dessert-course energy — a coffee lover who wants their after-dinner drink to double as dessert."
  }
];

const CLASSIC_COCKTAILS = [
  {
    id: "cc1", name: "Whiskey Sour", category: "classic", spirit: "Whiskey", glassware: "Rocks", method: "Shake & Strain",
    flavorTags: ["Citrus", "Oak", "Sweet-Tart", "Silky"],
    ingredients: ["2 oz Bourbon", "3/4 oz Fresh Lemon Juice", "3/4 oz Simple Syrup", "1/2 oz Egg White (optional)"],
    garnish: "Brandied Cherry, Lemon Twist",
    directions: "Dry shake all ingredients without ice (if using egg white), then shake again with ice. Strain over fresh ice into a rocks glass. Garnish and serve.",
    prep: "",
    funFact: "One of the oldest documented cocktail families — \"sours\" date to the mid-1800s and follow the same base-plus-sour-plus-sweet formula that still defines the category today.",
    bestFor: "A guest who wants something classic and balanced, not too boozy-forward.", followUp: ["With or without egg white?", "Bourbon or rye?"]
  },
  {
    id: "cc2", name: "Sazerac", category: "classic", spirit: "Whiskey", glassware: "Rocks (no ice)", method: "Stir & Strain",
    flavorTags: ["Anise", "Spice", "Herbal", "Rye"],
    ingredients: ["2 oz Rye Whiskey", "1/4 oz Simple Syrup", "3 dashes Peychaud's Bitters", "Absinthe Rinse"],
    garnish: "Expressed Lemon Peel (discarded, not left in glass)",
    directions: "Rinse a chilled rocks glass with absinthe, discard excess. Stir rye, simple syrup, and bitters with ice, then strain into the prepared glass. Express lemon peel over the top and discard.",
    prep: "",
    funFact: "Widely regarded as one of the oldest American cocktails, born in 19th-century New Orleans. It was originally made with cognac, but switched to rye whiskey after a phylloxera outbreak devastated French vineyards and cognac became scarce.",
    bestFor: "A guest who wants a serious, old-school, spirit-forward drink.", followUp: ["Rye or Cognac?"]
  },
  {
    id: "cc3", name: "Mint Julep", category: "classic", spirit: "Whiskey", glassware: "Julep Tin", method: "Muddle & Build",
    flavorTags: ["Mint", "Bourbon", "Sweet", "Herbal"],
    ingredients: ["2.5 oz Bourbon", "1/2 oz Simple Syrup", "8-10 Fresh Mint Leaves"],
    garnish: "Mint Bouquet, Powdered Sugar (optional)",
    directions: "Gently muddle mint with simple syrup in the tin. Add bourbon and pack tightly with crushed ice. Swizzle until the tin frosts over. Top with more crushed ice and garnish with a full mint bouquet.",
    prep: "",
    funFact: "The official drink of the Kentucky Derby — over 120,000 are served at Churchill Downs across Derby weekend alone.",
    bestFor: "Warm-weather sipping, a guest who wants something refreshing but still whiskey-forward."
  },
  {
    id: "cc4", name: "Vieux Carr\u00e9", category: "classic", spirit: "Whiskey", glassware: "Rocks", method: "Stir & Strain",
    flavorTags: ["Herbal", "Spice", "Dried Fruit", "Rich"],
    ingredients: ["3/4 oz Rye Whiskey", "3/4 oz Cognac", "3/4 oz Sweet Vermouth", "1 tsp B\u00e9n\u00e9dictine", "2 dashes Peychaud's Bitters", "2 dashes Angostura Bitters"],
    garnish: "Lemon Twist or Cherry",
    directions: "Stir all ingredients with ice until well chilled. Strain over a large ice cube into a rocks glass. Garnish and serve.",
    prep: "",
    funFact: "Created in the 1930s at the Hotel Monteleone in New Orleans' French Quarter — \"Vieux Carr\u00e9\" is French for \"old square,\" the historic name for that neighborhood. It's one of the few classics to blend two full base spirits, rye and cognac, in equal measure.",
    bestFor: "A guest who wants something complex and boozy, layered rather than simple."
  },
  {
    id: "cc5", name: "Martini (Gin)", category: "classic", spirit: "Gin", glassware: "Martini", method: "Stir & Strain",
    flavorTags: ["Juniper", "Botanical", "Dry", "Crisp"],
    ingredients: ["2.5 oz Gin", "1/2 oz Dry Vermouth"],
    garnish: "Olive or Lemon Twist",
    directions: "Stir gin and vermouth with ice until well chilled. Strain into a chilled martini glass. Garnish and serve.",
    prep: "",
    funFact: "One of the most iconic cocktails ever made, with an origin story disputed for over a century. The modern bone-dry style didn't become the default until well into the 20th century.",
    bestFor: "A purist gin drinker who wants nothing but spirit and a whisper of vermouth.", followUp: ["Dry or dirty?", "Up or on the rocks?", "Olive or twist?", "Shaken or stirred?"]
  },
  {
    id: "cc6", name: "Negroni", category: "classic", spirit: "Gin", glassware: "Rocks", method: "Stir & Strain",
    flavorTags: ["Bitter", "Herbal", "Citrus", "Bittersweet"],
    ingredients: ["1 oz Gin", "1 oz Campari", "1 oz Sweet Vermouth"],
    garnish: "Orange Peel",
    directions: "Stir all ingredients with ice until well chilled. Strain over a large ice cube into a rocks glass. Garnish and serve.",
    prep: "",
    funFact: "Said to have been invented in Florence in 1919, when Count Camillo Negroni asked a bartender to strengthen his Americano by swapping the soda water for gin.",
    bestFor: "A guest who genuinely likes bitter, aperitivo-style drinks — not a sweet-drink crowd-pleaser.", followUp: ["On the rocks (traditional) or strained up?"]
  },
  {
    id: "cc7", name: "Tom Collins", category: "classic", spirit: "Gin", glassware: "Collins", method: "Shake & Strain, Top",
    flavorTags: ["Citrus", "Effervescent", "Crisp", "Light"],
    ingredients: ["2 oz Gin", "3/4 oz Fresh Lemon Juice", "1/2 oz Simple Syrup", "Soda Water, to top"],
    garnish: "Lemon Wheel, Cherry",
    directions: "Shake gin, lemon juice, and simple syrup with ice. Strain over fresh ice into a Collins glass and top with soda water. Garnish and serve.",
    prep: "",
    funFact: "Named after the \"Tom Collins hoax,\" a bar prank that swept America in 1874, where people were told a man named Tom Collins was badmouthing them at a nearby bar.",
    bestFor: "A refreshing, tall, low-intensity option for a guest who wants something long and easy."
  },
  {
    id: "cc8", name: "French 75", category: "classic", spirit: "Gin", glassware: "Champagne Flute", method: "Shake & Strain, Top",
    flavorTags: ["Citrus", "Sparkling", "Bright", "Floral"],
    ingredients: ["1 oz Gin", "1/2 oz Fresh Lemon Juice", "1/2 oz Simple Syrup", "Champagne, to top"],
    garnish: "Lemon Twist",
    directions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a champagne flute and top with champagne. Garnish and serve.",
    prep: "",
    funFact: "Named after the powerful French 75mm field gun from World War I, supposedly for how hard the drink was said to hit.",
    bestFor: "A celebratory, elegant option — similar energy to the Golden 'B' on the house list.", followUp: ["Gin or Cognac base?"]
  },
  {
    id: "cc9", name: "Daiquiri", category: "classic", spirit: "Rum", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Lime", "Rum", "Bright", "Clean"],
    ingredients: ["2 oz White Rum", "1 oz Fresh Lime Juice", "3/4 oz Simple Syrup"],
    garnish: "Lime Wheel (optional)",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass. Garnish and serve.",
    prep: "",
    funFact: "Named after a Cuban mining town, the Daiquiri became famous stateside partly because Ernest Hemingway was known to drink them by the pitcher at El Floridita in Havana.",
    bestFor: "A guest who wants the simplest, most classic possible sour — no frills.", followUp: ["White or aged rum?"]
  },
  {
    id: "cc10", name: "Mojito", category: "classic", spirit: "Rum", glassware: "Highball", method: "Muddle & Build, Top",
    flavorTags: ["Mint", "Lime", "Effervescent", "Herbal"],
    ingredients: ["2 oz White Rum", "3/4 oz Fresh Lime Juice", "3/4 oz Simple Syrup", "8-10 Fresh Mint Leaves", "Soda Water, to top"],
    garnish: "Mint Sprig, Lime Wheel",
    directions: "Gently muddle mint with lime juice and simple syrup in the glass. Add rum and fill with ice. Top with soda water and stir gently. Garnish and serve.",
    prep: "",
    funFact: "Believed to trace back to 16th-century Cuba, evolving from an earlier drink called \"El Draque,\" reputedly linked to Sir Francis Drake.",
    bestFor: "A warm-weather, low-intensity refresher."
  },
  {
    id: "cc11", name: "Dark 'n' Stormy", category: "classic", spirit: "Rum", glassware: "Highball", method: "Build",
    flavorTags: ["Ginger", "Molasses", "Spice", "Effervescent"],
    ingredients: ["2 oz Dark Rum", "Ginger Beer, to top"],
    garnish: "Lime Wedge",
    directions: "Add rum to a highball glass filled with ice. Top with ginger beer. Garnish with a lime wedge and serve.",
    prep: "",
    funFact: "Gosling's Rum trademarked the name \"Dark 'n' Stormy\" itself — one of the only cocktail names ever protected as a registered trademark.",
    bestFor: "A guest who likes ginger beer and wants something bold but easy-drinking."
  },
  {
    id: "cc12", name: "Mai Tai", category: "classic", spirit: "Rum", glassware: "Rocks", method: "Shake & Strain",
    flavorTags: ["Almond", "Orange", "Tropical", "Rum-Forward"],
    ingredients: ["1 oz Aged Rum", "1 oz Overproof Rum", "1/2 oz Orange Cura\u00e7ao", "1/4 oz Orgeat", "3/4 oz Fresh Lime Juice"],
    garnish: "Mint Sprig, Spent Lime Shell",
    directions: "Shake all ingredients with ice until well chilled. Strain over crushed ice into a rocks glass. Garnish and serve.",
    prep: "",
    funFact: "Created by Trader Vic in 1944. The name comes from the Tahitian exclamation \"Maita'i roa a'e!\" — \"out of this world, the best\" — reportedly said by a guest tasting the very first one.",
    bestFor: "A guest who wants a real tiki classic, rich and layered, not artificially sweet."
  },
  {
    id: "cc13", name: "Paloma", category: "classic", spirit: "Tequila", glassware: "Highball", method: "Build",
    flavorTags: ["Grapefruit", "Citrus", "Effervescent", "Crisp"],
    ingredients: ["2 oz Tequila Blanco", "1/2 oz Fresh Lime Juice", "Grapefruit Soda, to top", "Salt, for rim"],
    garnish: "Grapefruit Wedge, Salt Rim",
    directions: "Salt half the rim of a highball glass. Fill with ice, add tequila and lime juice, then top with grapefruit soda. Stir gently, garnish, and serve.",
    prep: "",
    funFact: "More popular in Mexico by volume than the Margarita, though far less famous internationally.",
    bestFor: "A refreshing, lower-intensity tequila option for someone who doesn't want a full Margarita.", followUp: ["Grapefruit soda, or fresh juice + soda water?"]
  },
  {
    id: "cc14", name: "Margarita", category: "classic", spirit: "Tequila", glassware: "Rocks", method: "Shake & Strain",
    flavorTags: ["Lime", "Orange", "Agave", "Bright"],
    ingredients: ["2 oz Tequila Blanco", "1 oz Fresh Lime Juice", "3/4 oz Orange Liqueur", "Salt, for rim"],
    garnish: "Lime Wheel, Salt Rim",
    directions: "Salt half the rim of a rocks glass. Shake all ingredients with ice until well chilled. Strain over fresh ice into the glass. Garnish and serve.",
    prep: "",
    funFact: "Its exact origin is one of the most disputed in cocktail history, with at least four separate people credited across Mexico and the US in the 1930s and '40s.",
    bestFor: "The most universally requested tequila cocktail — a safe, crowd-pleasing default.", followUp: ["Salt or no salt?", "On the rocks or blended?", "Blanco, reposado, or añejo tequila?"]
  },
  {
    id: "cc15", name: "Oaxacan Old Fashioned", category: "classic", spirit: "Tequila", glassware: "Rocks", method: "Stir & Strain",
    flavorTags: ["Smoke", "Agave", "Spice", "Bold"],
    ingredients: ["1.5 oz Reposado Tequila", "1/2 oz Mezcal", "1 barspoon Agave Syrup", "2 dashes Angostura Bitters"],
    garnish: "Orange Peel",
    directions: "Stir all ingredients with ice until well chilled. Strain over a large ice cube into a rocks glass. Express orange peel over the top and drop in.",
    prep: "",
    funFact: "A modern riff on the classic Old Fashioned that swaps whiskey for tequila and mezcal, popularized during the 2000s craft cocktail movement.",
    bestFor: "A guest who normally drinks Old Fashioneds and wants to try something smokier."
  },
  {
    id: "cc16", name: "Martini (Vodka)", category: "classic", spirit: "Vodka", glassware: "Martini", method: "Stir & Strain",
    flavorTags: ["Clean", "Crisp", "Neutral", "Dry"],
    ingredients: ["2.5 oz Vodka", "1/2 oz Dry Vermouth"],
    garnish: "Olive or Lemon Twist",
    directions: "Stir vodka and vermouth with ice until well chilled (or shake, if the guest prefers it \"Bond-style\"). Strain into a chilled martini glass. Garnish and serve.",
    prep: "",
    funFact: "The vodka martini overtook the gin martini in American popularity by the mid-20th century, a shift partly credited to James Bond's \"shaken, not stirred\" order.",
    bestFor: "A guest who wants the Martini ritual without gin's botanical intensity.", followUp: ["Dry or dirty?", "Up or on the rocks?", "Olive or twist?", "Shaken or stirred?"]
  },
  {
    id: "cc17", name: "Moscow Mule", category: "classic", spirit: "Vodka", glassware: "Copper Mug", method: "Build",
    flavorTags: ["Ginger", "Lime", "Effervescent", "Crisp"],
    ingredients: ["2 oz Vodka", "1/2 oz Fresh Lime Juice", "Ginger Beer, to top"],
    garnish: "Lime Wheel, Candied Ginger",
    directions: "Add vodka and lime juice to a copper mug filled with ice. Top with ginger beer and stir gently. Garnish and serve.",
    prep: "",
    funFact: "Invented in the 1940s partly as a marketing push to sell surplus ginger beer and unfamiliar vodka in the US — the copper mug itself was part of the original promotional gimmick.",
    bestFor: "A guest who wants something zippy and easy, especially if they already like ginger beer drinks."
  },
  {
    id: "cc18", name: "Cosmopolitan", category: "classic", spirit: "Vodka", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Cranberry", "Citrus", "Tart", "Pink"],
    ingredients: ["1.5 oz Citrus Vodka", "1/2 oz Orange Liqueur", "1/2 oz Fresh Lime Juice", "1/4 oz Cranberry Juice"],
    garnish: "Lime Wheel or Orange Twist",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass. Garnish and serve.",
    prep: "",
    funFact: "Became a defining pop-culture cocktail in the late 1990s largely through Sex and the City, though earlier versions of the drink existed at least a decade prior.",
    bestFor: "A guest who wants something classic, pink, and nostalgic."
  },
  {
    id: "cc19", name: "White Russian", category: "classic", spirit: "Vodka", glassware: "Rocks", method: "Build",
    flavorTags: ["Coffee", "Cream", "Sweet", "Rich"],
    ingredients: ["2 oz Vodka", "1 oz Coffee Liqueur", "1 oz Heavy Cream (floated)"],
    garnish: "None",
    directions: "Add vodka and coffee liqueur to a rocks glass filled with ice. Float heavy cream on top by pouring gently over the back of a spoon. Serve without stirring.",
    prep: "",
    funFact: "Gained lasting pop-culture fame decades after its creation thanks to The Big Lebowski, where The Dude drinks one in nearly every scene.",
    bestFor: "A dessert-course drinker — similar energy to the Opulent Espresso Martini on the house list."
  },
  {
    id: "cc20", name: "Sidecar", category: "classic", spirit: "Brandy/Cognac", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Orange", "Citrus", "Oak", "Balanced"],
    ingredients: ["2 oz Cognac", "3/4 oz Orange Liqueur", "3/4 oz Fresh Lemon Juice"],
    garnish: "Orange Twist, Sugar Rim (optional)",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass (sugar-rimmed if desired). Garnish and serve.",
    prep: "",
    funFact: "Believed to have been created around World War I, possibly named after the motorcycle sidecar a regular customer arrived in.",
    bestFor: "A guest who wants a classic, brandy-forward sour.", followUp: ["Sugar rim or no rim?"]
  },
  {
    id: "cc21", name: "Between the Sheets", category: "classic", spirit: "Brandy/Cognac", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Citrus", "Rum", "Oak", "Bright"],
    ingredients: ["3/4 oz Cognac", "3/4 oz White Rum", "3/4 oz Orange Liqueur", "3/4 oz Fresh Lemon Juice"],
    garnish: "Lemon Twist",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass. Garnish and serve.",
    prep: "",
    funFact: "A close cousin of the Sidecar, essentially splitting the base spirit between cognac and rum. Its suggestive name dates back to the 1930s.",
    bestFor: "A Sidecar fan who wants something a little lighter and more playful."
  },
  {
    id: "cc22", name: "Paper Plane", category: "classic", spirit: "Whiskey", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Bitter", "Citrus", "Herbal", "Balanced"],
    ingredients: ["3/4 oz Bourbon", "3/4 oz Aperol", "3/4 oz Amaro Nonino", "3/4 oz Fresh Lemon Juice"],
    garnish: "None",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass and serve.",
    prep: "",
    funFact: "Created in 2008 by bartender Sam Ross for the opening menu at The Violet Hour in Chicago, and named after the M.I.A. song \"Paper Planes.\" The 1:1:1:1 ratio is exactly why it spread so fast among bartenders — easy to remember, easy to scale.",
    bestFor: "A guest who wants something bitter, citrusy, and modern rather than a straightforward Old Fashioned."
  },
  {
    id: "cc23", name: "Last Word", category: "classic", spirit: "Gin", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Herbal", "Citrus", "Bittersweet", "Complex"],
    ingredients: ["3/4 oz Gin", "3/4 oz Green Chartreuse", "3/4 oz Maraschino Liqueur", "3/4 oz Fresh Lime Juice"],
    garnish: "None (Brandied Cherry optional)",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass and serve.",
    prep: "",
    funFact: "Created at the Detroit Athletic Club sometime in the 1910s or '20s, then fell into obscurity for decades until a Seattle bartender rediscovered and popularized it in the mid-2000s.",
    bestFor: "A guest who wants something herbal and complex rather than another straightforward Martini."
  },
  {
    id: "cc24", name: "Closing Argument", category: "classic", spirit: "Tequila", glassware: "Coupe", method: "Shake & Strain",
    flavorTags: ["Smoke", "Herbal", "Cherry", "Tart"],
    ingredients: ["3/4 oz Mezcal", "3/4 oz Green Chartreuse", "3/4 oz Maraschino Liqueur", "3/4 oz Fresh Lime Juice"],
    garnish: "Lime Twist or Maraschino Cherry",
    directions: "Shake all ingredients with ice until well chilled. Strain into a chilled coupe glass. Garnish and serve.",
    prep: "",
    funFact: "A mezcal-based riff on the Last Word, swapping in smoke for gin's botanicals while keeping the same equal-parts herbal-citrus structure.",
    bestFor: "A guest who likes the Last Word but wants something smokier and more agave-forward."
  }
];

// Wine By The Bottle — full bottle list, built out in phases by grape
// variety. Kept as its own array (not merged into WINES) so it gets its
// own browse/search flow, mirroring the HRW_WINES pattern above.
const BOTTLE_WINES = [
  {
    id: "bw1", name: "Ladoucette Pouilly-Fumé", style: "white", price: 118, category: "Sauvignon Blanc",
    grape: "100% Sauvignon Blanc", producer: "Château du Nozet — Baron Patrick de Ladoucette", region: "Pouilly-Fumé, Loire Valley, France",
    winemaker: "Baron Patrick de Ladoucette",
    flavorTags: ["Flint", "Citrus", "Green Apple", "White Flower"],
    structure: { sweetness: 1, acidity: 5, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is textbook Pouilly-Fumé &mdash; citrus and green apple wrapped around that smoky, flinty minerality the appellation is famous for. Gorgeous with the oysters or the tuna tartare.",
    sellingPoints: ["From one of the two families who have owned the region's most famous vineyards since 1787", "The benchmark, old-world sibling to Sancerre &mdash; same river, opposite bank", "Real gunflint minerality, not an oaky or fruity style"],
    winemakingNote: "Grown on Pouilly-Fumé's marl and limestone soils, with veins of silex (flint) running through them &mdash; that's where the appellation's name and its smoky, gunflint character actually come from, not from oak or smoke treatment.",
    moment: "A guest who loves Sancerre and is ready to try its historic neighbor across the river, or anyone ordering the raw bar.",
    memory: "Classic flinty, citrus-driven Loire Sauvignon Blanc from one of Pouilly-Fumé's oldest estates.",
    pairingDishIds: ["d-oysters", "d-tuna-tartare", "d-yellowtail-carpaccio"],
    arsenal: "If a guest already knows and loves Sancerre, this is the move &mdash; same grape, same river, the appellation right across the water.",
    funFact: "The Comte Lafond and Ladoucette families have owned Pouilly-Fumé's largest, most famous vineyards since 1787, when the estate was purchased from the illegitimate daughter of King Louis XV.",
    funFact2: "\"Fumé\" means \"smoked\" in French &mdash; but it refers to the wine's natural flinty, gunflint aroma from the soil, not to any smoke or oak treatment in the cellar.",
    shortStory: "Baron Patrick de Ladoucette took over his family's Loire estate in 1972 and spent the following decades pushing Pouilly-Fumé's reputation onto the world stage, expanding the family's reach into Sancerre, Chablis, Vouvray and Chinon along the way."
  },
  {
    id: "bw2", name: "Saget 'La Petite Perriere'", style: "white", price: 56, category: "Sauvignon Blanc",
    grape: "100% Sauvignon Blanc", producer: "Saget La Perrière", region: "Loire Valley (Vin de France), France",
    winemaker: "Laurent Saget",
    flavorTags: ["Ripe Melon", "Citrus", "Tropical Fruit", "Fresh-Cut Grass"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is an easy-drinking French Sauvignon Blanc &mdash; ripe melon, citrus, a little tropical fruit. A great way to introduce a guest to Loire Sauvignon without the Sancerre price tag.",
    sellingPoints: ["Nine generations of the same family making wine in the Loire since 1790", "The #1 imported French Sauvignon Blanc in the U.S.", "An approachable, versatile everyday pour"],
    winemakingNote: "Released under the Vin de France designation, which let the Saget family blend fruit from the Loire with fruit from the South of France to balance the north's freshness against the south's ripeness.",
    moment: "A guest who wants something French and food-friendly without committing to a pricier Sancerre or Pouilly-Fumé.",
    memory: "An accessible, nine-generations-deep Loire Sauvignon Blanc built for everyday drinking.",
    pairingDishIds: ["d-edamame", "d-shishitos", "d-chopped-salad"],
    arsenal: "The easy French pour for a guest who wants Sauvignon Blanc but doesn't want to spend Sancerre money.",
    funFact: "The Saget family has been making wine in the Loire Valley since 1790 &mdash; nine straight generations, making them one of just a handful of French estates in their third consecutive century of business.",
    funFact2: "Today it's the best-selling imported French Sauvignon Blanc in the United States.",
    shortStory: "Brothers Arnaud and Laurent Saget now lead the family business their ancestors started in 1790 in Pouilly-sur-Loire &mdash; Arnaud runs the business side, Laurent oversees the winemaking, and together they built La Petite Perrière into one of the first wines released under France's new Vin de France category."
  },
  {
    id: "bw3", name: "Mount Fishtail 'Sur Lie'", style: "white", price: 64, category: "Sauvignon Blanc",
    grape: "100% Sauvignon Blanc", producer: "Mount Fishtail", region: "Marlborough, New Zealand",
    winemaker: "Emmanuel Bolliger & Nicky Parish",
    flavorTags: ["Passionfruit", "Guava", "Gooseberry", "Lime"],
    structure: { sweetness: 1, acidity: 5, tannin: 0, alcohol: 2, body: 3 },
    guestDescription: "This is a Marlborough Sauvignon Blanc with extra texture &mdash; passionfruit and guava up front, but a creamier mid-palate than most New Zealand Sauvignon thanks to time spent aging on the lees.",
    sellingPoints: ["Made entirely from estate-grown fruit &mdash; unusual in Marlborough, where most producers buy grapes on contract", "Aged 'sur lie' for six months, a French technique that's rare for this category", "Family-owned, Sustainable Winegrowing New Zealand certified"],
    winemakingNote: "'Sur lie' means the wine rests on its spent yeast cells for six months after fermentation &mdash; the same technique used in Sancerre and white Bordeaux &mdash; which builds real mid-palate weight against Marlborough Sauvignon's usual sharp acidity.",
    moment: "A guest who loves the classic punchy, tropical style of New Zealand Sauvignon Blanc but wants something with more texture behind it.",
    memory: "Estate-grown Marlborough Sauvignon Blanc, given extra weight and creaminess from six months on the lees.",
    pairingDishIds: ["d-oysters", "d-crab-cakes", "d-yellowtail-carpaccio"],
    arsenal: "For a guest who says they 'always get a New Zealand Sauvignon' &mdash; same energy, more texture.",
    funFact: "The winery is named for Mount Fishtail, a distinctive double-peaked mountain in the Richmond Ranges that overlooks the vineyards below.",
    funFact2: "Most Marlborough Sauvignon Blanc is made from purchased, contract-grown fruit &mdash; Mount Fishtail is an outlier, using only grapes grown on its own estate vineyards in the Waihopai and Wairau valleys.",
    shortStory: "A family-run producer in the heart of Marlborough, Mount Fishtail set out to make something different from the flood of similar-tasting Sauvignon Blanc coming out of the region &mdash; borrowing the sur lie aging tradition of Sancerre to build texture without losing the variety's signature energy."
  },
  {
    id: "bw4", name: "Duckhorn North Coast", style: "white", price: 80, category: "Sauvignon Blanc",
    grape: "Sauvignon Blanc, Sémillon", producer: "Duckhorn Vineyards", region: "North Coast, California",
    winemaker: "Duckhorn Vineyards winemaking team",
    flavorTags: ["Pineapple", "Guava", "Lemon Verbena", "Melon"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is a rich, tropical Sauvignon Blanc &mdash; pineapple, guava, lemon verbena, with a silky texture from a splash of Sémillon and time in French oak.",
    sellingPoints: ["From one of Napa's most storied family wine names, making Sauvignon Blanc since 1982", "Blended with Sémillon and partly aged in French oak for real texture", "Sourced from top sites across Napa, Sonoma and Mendocino"],
    winemakingNote: "Fermented and aged in both stainless steel and French oak, with a portion of Sémillon blended in &mdash; the Sémillon is what gives it that silky, slightly richer texture instead of the usual lean, all-citrus Sauvignon profile.",
    moment: "A guest ordering something rich off the raw bar or fish menu who still wants to stay in white wine.",
    memory: "A rich, silky Sauvignon Blanc built for guests who want more texture than a typical lean, citrusy style.",
    pairingDishIds: ["d-crab-cakes", "d-miso-cod", "d-scottish-salmon"],
    arsenal: "The move for a guest who says Sauvignon Blanc is usually 'too sharp' for them &mdash; this one has real weight to it.",
    funFact: "Duckhorn was founded in 1976 by Dan and Margaret Duckhorn, and remains one of the defining family names in modern Napa Valley wine history.",
    funFact2: "The winery has been making Sauvignon Blanc continuously since 1982 &mdash; over four decades with the varietal.",
    shortStory: "What started as a single Napa Cabernet-focused winery in 1976 has grown into one of California's most recognized wine names, with this North Coast Sauvignon Blanc sourced from estate and elite grower sites across three counties."
  },
  {
    id: "bw5", name: "Emmolo", style: "white", price: 64, category: "Sauvignon Blanc",
    grape: "Sauvignon Blanc", producer: "Emmolo", region: "Napa Valley (Rutherford), California",
    winemaker: "Jenny Wagner",
    flavorTags: ["White Peach", "Guava", "Honeydew", "Fresh Herbs"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is a subtle, elegant Napa Sauvignon Blanc &mdash; white peach, guava, honeydew, with bright natural acidity and real minerality instead of an over-the-top tropical style.",
    sellingPoints: ["Made by Jenny Wagner &mdash; daughter of Chuck Wagner, who founded Caymus (also on this list)", "Named for her mother's Sicilian immigrant family, who've farmed this same Napa property since 1923", "A 'less is more' style built for balance over power"],
    winemakingNote: "Jenny Wagner farms with a minimalist, hands-off philosophy she calls 'less is more' &mdash; prioritizing bright acidity and subtlety over the riper, more tropical style many California Sauvignon Blancs lean into.",
    moment: "A great follow-up pour if a guest is drinking Caymus off the red list &mdash; same family, different generation.",
    memory: "An elegant, minimalist Napa Sauvignon Blanc from the next generation of the Caymus family.",
    pairingDishIds: ["d-branzino", "d-asparagus", "d-tuna-tartare"],
    arsenal: "If someone's drinking Caymus tonight, mention this is literally made by the winemaker's daughter &mdash; it's a fun full-circle moment on the same wine list.",
    funFact: "Emmolo is named for winemaker Jenny Wagner's maternal family, who immigrated from Palermo, Sicily in 1923 and ran a grapevine rootstock nursery in St. Helena for decades.",
    funFact2: "Jenny is the daughter of Chuck Wagner, who founded Caymus Vineyards with his parents &mdash; Caymus Cabernet Sauvignon is also on this bottle list.",
    shortStory: "Jenny's mother, Cheryl Emmolo, launched this label in 1994 to carry her own family's name forward. Jenny grew up working alongside her father Chuck at Caymus before taking over Emmolo, building her own distinct, more restrained style with Sauvignon Blanc and Merlot."
  },
  {
    id: "bw6", name: "Freemark Abbey", style: "white", price: 68, category: "Sauvignon Blanc",
    grape: "Sauvignon Blanc", producer: "Freemark Abbey", region: "Napa Valley, California",
    winemaker: "Kristy Melton",
    flavorTags: ["Citrus", "Honeydew Melon", "Peach", "Lemongrass"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is a bright, clean Napa Sauvignon Blanc &mdash; citrus, honeydew, peach, with a long refreshing finish. From one of Napa's true historic estates.",
    sellingPoints: ["One of Napa Valley's original 'Cabernet houses,' with roots to 1886", "Founded by Josephine Tychson, the first female vintner in California", "One of only 12 wineries chosen to represent the U.S. in the famous 1976 Judgment of Paris"],
    winemakingNote: "Fermented in stainless steel and neutral French oak &mdash; neutral, meaning oak that no longer imparts much flavor, so the focus stays on the fruit's natural acidity and brightness rather than any oak character.",
    moment: "A history-minded guest, or anyone who recognizes the name from Freemark Abbey's famous Cabernet program.",
    memory: "A bright, historic Napa Sauvignon Blanc from one of the valley's original wineries.",
    pairingDishIds: ["d-grilled-romaine", "d-fire-roasted-beets", "d-chopped-salad"],
    arsenal: "Great story to lead with for anyone who loves Napa Valley history &mdash; this estate predates almost every other Napa producer on the list.",
    funFact: "Freemark Abbey traces back to 1886, when it was founded by Josephine Tychson, the first female vintner in California.",
    funFact2: "The winery was one of only twelve American producers chosen to represent the U.S. at the legendary 1976 Judgment of Paris blind tasting.",
    shortStory: "The name 'Freemark Abbey' dates to 1939, when three new owners &mdash; Charles Freeman, Mark Foster and Albert 'Abbey' Ahern &mdash; combined pieces of their names for the estate. Today's winemaker, Kristy Melton, took over in 2020 from 40-year veteran Ted Edwards, continuing one of Napa's longest unbroken winemaking legacies."
  },
  {
    id: "bw7", name: "Mason", style: "white", price: 64, category: "Sauvignon Blanc",
    grape: "Sauvignon Blanc", producer: "Mason Cellars", region: "Napa Valley (Oakville), California",
    winemaker: "Randy Mason",
    flavorTags: ["Grapefruit", "Gooseberry", "Fig", "Pear"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is a round, juicy Napa Sauvignon Blanc &mdash; grapefruit, gooseberry, fig, pear &mdash; from a winemaker who's spent his whole career specializing in this one grape.",
    sellingPoints: ["Made by Randy Mason, a genuine pioneer of Napa Valley Sauvignon Blanc", "40-plus years focused almost entirely on this one varietal", "Landed at #57 on Wine Spectator's Top 100 of the Year"],
    winemakingNote: "A minimalist cellar approach and long-term grower relationships, built around the Yount Mill Vineyard in Yountville, let the fruit itself do most of the talking rather than heavy winemaking technique.",
    moment: "A guest who wants a 'textbook' Napa Sauvignon Blanc from someone who's made a career out of just this grape.",
    memory: "A round, classically styled Napa Sauvignon Blanc from one of the region's true varietal specialists.",
    pairingDishIds: ["d-shishitos", "d-edamame", "d-asparagus"],
    arsenal: "Worth mentioning that Randy Mason has spent over 40 years focused on Sauvignon Blanc specifically &mdash; this isn't a side project for him.",
    funFact: "Randy Mason has long been recognized as one of the best Sauvignon Blanc producers in the country, with a resume that includes managing vineyards for Chappellet and 14 years as head winemaker at Lakespring Winery before starting his own label in 1993.",
    funFact2: "This wine has landed on Wine Spectator's Top 100 Wines of the Year list.",
    shortStory: "Randy and his wife Megan launched Mason Cellars in Oakville in 1993, built entirely around Randy's decades-long fascination with Sauvignon Blanc &mdash; a grape he fell for during his early years working at Chappellet in the late 1970s."
  },
  {
    id: "bw8", name: "Simi", style: "white", price: 52, category: "Sauvignon Blanc",
    grape: "Sauvignon Blanc", producer: "Simi Winery", region: "Sonoma County, California",
    winemaker: "Simi winemaking team",
    flavorTags: ["Fresh-Cut Grass", "Citrus", "Green Apple", "Melon"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is a bright, crisp Sonoma Sauvignon Blanc &mdash; fresh-cut grass, citrus, green apple. Simple, classic, and from one of California's oldest wineries.",
    sellingPoints: ["One of California's longest continuously operating wineries, dating to 1876", "Led for 66 years by Isabelle Simi, who took over the winery at just 18 years old", "A legacy of pioneering female winemakers that continues today"],
    winemakingNote: "Sourced from Sonoma County fruit across several appellations, kept in a clean, classic style that leans on the grape's natural grassy, citrus character rather than oak or heavy lees work.",
    moment: "A guest who wants an easy, well-priced, classic California Sauvignon Blanc with a great story behind it.",
    memory: "A crisp, no-frills Sonoma Sauvignon Blanc from one of California's oldest family wine estates.",
    pairingDishIds: ["d-oysters", "d-chopped-salad", "d-fire-roasted-beets"],
    arsenal: "One of the great underdog stories on the list &mdash; an 18-year-old girl took over this winery in 1904 after both her father and uncle died, and ran it successfully for the next 66 years.",
    funFact: "Simi was founded in 1876 by Tuscan immigrant brothers Giuseppe and Pietro Simi. When both died suddenly in 1904, Giuseppe's 18-year-old daughter Isabelle took over and ran the winery for the next 66 years.",
    funFact2: "Simi survived Prohibition by legally selling wine for sacramental and medicinal purposes, and later became one of the first major American wineries led by a female winemaker.",
    shortStory: "Isabelle Simi Haigh ran the winery until she retired in 1970 at age 84. Her legacy of female leadership continued through winemakers like Mary Ann Graf &mdash; the first woman to graduate from UC Davis with a viticulture and enology degree &mdash; and Zelma Long, who built Simi's national reputation through the 1980s and 90s."
  },
  {
    id: "bw9", name: "Summer Dreams 'Walking on Venice Beach'", style: "white", price: 175, category: "Sauvignon Blanc",
    grape: "Sauvignon Blanc, Sauvignon Musqué", producer: "Summer Dreams — Jayson Woodbridge", region: "Sonoma Coast, California",
    winemaker: "Ashley Holland & Jayson Woodbridge",
    flavorTags: ["White Peach", "Candied Ginger", "White Flowers", "Lemongrass"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 4 },
    guestDescription: "This is a rich, layered Sonoma Coast Sauvignon Blanc &mdash; white peach, candied ginger, white flowers &mdash; from old vines planted in 1980, aged in French oak and acacia wood for real depth.",
    sellingPoints: ["Made by the same team behind Hundred Acre and Fortunate Son &mdash; both also on this list", "Sourced from one of the oldest Sauvignon Blanc vineyards in California, planted in 1980", "The most expensive, most textured Sauvignon Blanc on the list, and it shows"],
    winemakingNote: "Aged across a mix of high-grade stainless steel, new French oak barriques and acacia wood, with a portion of the aromatic Sauvignon Musqué clone blended in for extra lift &mdash; the combination is what gives it far more richness and texture than a typical Sauvignon Blanc.",
    moment: "A guest who ordered Hundred Acre or Fortunate Son off the Cabernet list &mdash; a great 'did you know' moment that it's the same winemaker.",
    memory: "A rich, old-vine Sonoma Coast Sauvignon Blanc from the same hands behind two of the list's biggest Cabernets.",
    pairingDishIds: ["d-lobster", "d-miso-cod", "d-scottish-salmon"],
    arsenal: "The single best story-driven upsell on the white list &mdash; if a guest is excited about Hundred Acre or Fortunate Son, tell them the same winemaker makes this.",
    funFact: "Summer Dreams is a side project from Jayson Woodbridge, the winemaker behind cult Napa Cabernet brands Hundred Acre and Fortunate Son &mdash; both also poured here.",
    funFact2: "The fruit comes from a Sonoma Coast vineyard planted in 1980, making it one of the oldest Sauvignon Blanc plantings anywhere in California.",
    shortStory: "In 2019, after decades building Hundred Acre into one of Napa's most celebrated Cabernet names, Jayson Woodbridge turned toward the cool, Pacific-influenced Sonoma Coast with winemaker Ashley Holland. The wine's name comes from Woodbridge's own description of his first walk on a California beach: 'cool and wild at the same time.'"
  },
  {
    id: "bw10", name: "Louis Michel & Fils 'Vaillons'", style: "white", price: 155, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Louis Michel & Fils", region: "Chablis (1er Cru), Burgundy, France",
    winemaker: "Guillaume Michel",
    flavorTags: ["White Peach", "Orange Zest", "Oyster Shell", "Flint"],
    structure: { sweetness: 1, acidity: 5, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is razor-sharp Chablis &mdash; white peach and orange zest riding pure, flinty minerality, with zero oak in the way. About as far from a buttery Chardonnay as this grape gets.",
    sellingPoints: ["Made entirely in stainless steel &mdash; no oak, ever &mdash; a house philosophy since the 1970s", "Widely considered one of the most underrated large domaines in all of Chablis", "The Michel family has farmed here since 1850"],
    winemakingNote: "Louis Michel switched entirely from old oak barrels to stainless steel by 1980, a deliberate move to let Chablis's Kimmeridgian limestone soil speak for itself instead of oak spice &mdash; today they're seen as Chablis's leading unoaked specialists.",
    moment: "The move for a guest who says they 'don't like oaky Chardonnay' &mdash; this is proof the grape doesn't have to taste that way.",
    memory: "Bone-dry, unoaked Chablis built entirely around minerality and precision.",
    pairingDishIds: ["d-oysters", "d-hotate", "d-shellfish-tower"],
    arsenal: "If a guest insists they hate Chardonnay, ask if it's really Chardonnay they dislike or just the oaky, buttery style &mdash; this wine settles the question fast.",
    funFact: "The Michel family has been growing grapes in Chablis since 1850, and the estate today farms 21 hectares, mostly Premier and Grand Cru sites.",
    funFact2: "Chablis shares a rare soil type called Kimmeridgian limestone with Champagne, found almost nowhere else on Earth outside of a small pocket of southern England.",
    shortStory: "Prior to 1970, this domaine aged everything in old oak barrels like most of Burgundy. By 1980 they'd thrown it all out for stainless steel, becoming the region's clearest voice for a pure, unoaked style of Chablis &mdash; a stance the estate, now run by Guillaume Michel, still holds today."
  },
  {
    id: "bw11", name: "Domaine Billaud-Simon 'Les Vaillons'", style: "white", price: 180, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Domaine Billaud-Simon (Maison Faiveley)", region: "Chablis (1er Cru), Burgundy, France",
    winemaker: "Olivier Bailly",
    flavorTags: ["Lemon", "Pear", "Melon", "Wet Stone"],
    structure: { sweetness: 1, acidity: 5, tannin: 0, alcohol: 2, body: 3 },
    guestDescription: "This is Chablis from the same famous Vaillons vineyard as the Louis Michel on this list, just a different house's hand on it &mdash; lemon and pear over a stony, mineral backbone.",
    sellingPoints: ["Founded in 1815 &mdash; one of Chablis's true historic names, now owned by the respected Burgundy house Faiveley", "Known for picking later than most of its neighbors, which builds extra richness without losing precision", "The exact same Premier Cru vineyard as the Louis Michel 'Vaillons' also on this list &mdash; a real side-by-side comparison"],
    winemakingNote: "Billaud-Simon is known in Chablis for picking later than most producers &mdash; a house style the new ownership found unusual at first but chose to preserve, since it's exactly what gives these wines their extra layer of ripeness against the region's usual austerity.",
    moment: "Pour this next to the Louis Michel Vaillons for a guest who wants to taste how two producers handle the very same vineyard differently.",
    memory: "A historic Chablis house's take on the Vaillons vineyard &mdash; a little riper and rounder than the neighboring Louis Michel bottling.",
    pairingDishIds: ["d-oysters", "d-crab-cakes", "d-scottish-salmon"],
    arsenal: "The single best 'same vineyard, different hands' comparison on the whole list &mdash; Louis Michel and Billaud-Simon both bottle Vaillons.",
    funFact: "Domaine Billaud-Simon was founded in 1815, and its vineyards border those of Raveneau and Dauvissat, two of the most legendary and hard-to-find names in all of Chablis.",
    funFact2: "The estate was purchased in 2014 by Maison Faiveley, a major Burgundy producer, but Faiveley deliberately kept Billaud-Simon's winemaking and philosophy completely separate from its own.",
    shortStory: "Founded by Charles-Louis-Noël Billaud in 1815 and expanded a century later when Jean Billaud married Renée Simon, the domaine passed out of family hands in 2014 after an internal dispute. Winemaker Olivier Bailly has run the cellar since 2015, preserving the estate's unusually late-picking house style."
  },
  {
    id: "bw12", name: "Cambria 'Katherine's Vineyard'", style: "white", price: 60, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Cambria Estate Winery", region: "Santa Maria Valley, Santa Barbara County, California",
    winemaker: "Jill Russell",
    flavorTags: ["Tropical Fruit", "Red Apple", "Tangerine", "Vanilla"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 4 },
    guestDescription: "This is a rich, sunny California Chardonnay &mdash; tropical fruit, red apple, tangerine &mdash; from old vines planted in 1971 on a coastal bench the winery calls 'refrigerated sunshine.'",
    sellingPoints: ["From vines planted in 1971, some of the oldest Chardonnay vines in California", "Named after proprietor Katie Jackson &mdash; her sister Julia's Pinot Noir vineyard is also on this list", "The winery's flagship wine, selected as a Wine Spectator Top 100 Chardonnay"],
    winemakingNote: "The Santa Maria Valley runs east-west, funneling cool Pacific air straight into the vineyard for one of the longest hang times in California &mdash; roughly 200 days &mdash; which lets the fruit ripen slowly without losing its acidity.",
    moment: "A guest who wants a classic, rich California Chardonnay with real vine-age pedigree behind it.",
    memory: "A lush, sun-and-fog-driven California Chardonnay from some of the state's oldest vines.",
    pairingDishIds: ["d-crab-cakes", "d-scottish-salmon", "d-marinated-chicken"],
    arsenal: "Fun connection for a guest drinking both whites and reds tonight: Cambria's Pinot Noir 'Julia's Vineyard' is also on this list, named for Katie's sister.",
    funFact: "Katherine's Vineyard is named for Katie Jackson, one of the estate's proprietors, whose family also owns Kendall-Jackson &mdash; making this wine a distant cousin of two other bottles on this very list, Capensis and Hartford Court.",
    funFact2: "About 80% of the fruit in this wine comes from vines planted in 1971, among the oldest Chardonnay plantings anywhere in California.",
    shortStory: "Cambria was one of the first wineries planted in the Santa Maria Valley, on land that's been home to the Jackson family for generations. Winemaker Jill Russell took over the cellar in 2017, and her very first vintage of this wine landed on Wine Spectator's Top 100 list two years later."
  },
  {
    id: "bw13", name: "Stag's Leap Wine Cellars 'Karia'", style: "white", price: 72, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Stag's Leap Wine Cellars", region: "Napa Valley, California",
    winemaker: "Nicki Pruss",
    flavorTags: ["White Peach", "Orange Blossom", "Crème Brûlée", "Honeydew"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is a graceful, balanced Napa Chardonnay &mdash; white peach, orange blossom, a touch of crème brûlée &mdash; from the same winery whose Cabernet famously beat the French in 1976.",
    sellingPoints: ["From Stag's Leap Wine Cellars, considered one of Napa's 'first growths'", "KARIA means 'graceful' in Greek &mdash; the literal goal of the wine's style", "Blended from four cool, southern Napa vineyard sites for balance and restraint"],
    winemakingNote: "Grapes are picked in the cool early morning and whole-cluster pressed, then aged partly in new French oak and partly in neutral barrels &mdash; a light touch meant to add texture without turning the wine into an 'oak bomb.'",
    moment: "A guest who knows Stag's Leap for its legendary Cabernet and is curious what the same winery does with white wine.",
    memory: "An elegant, restrained Napa Chardonnay from one of the valley's most historically significant producers.",
    pairingDishIds: ["d-crab-cakes", "d-marinated-chicken", "d-asparagus"],
    arsenal: "Worth mentioning Stag's Leap's 1973 Cabernet is the wine that beat top French Bordeaux at the 1976 Judgment of Paris &mdash; the same winery makes this Chardonnay.",
    funFact: "KARIA comes from the Greek word for 'graceful' &mdash; exactly the light, elegant style the winery is going for with this wine.",
    funFact2: "Stag's Leap Wine Cellars is widely considered one of Napa Valley's 'first growths,' largely thanks to its 1973 Cabernet Sauvignon beating top Bordeaux in the legendary 1976 Judgment of Paris blind tasting.",
    shortStory: "Founded in 1970 on a 40-acre property in what's now the famed Stags Leap District, the winery built its reputation on Cabernet Sauvignon before developing KARIA as a graceful, food-friendly Chardonnay counterpart, sourced from cooler sites across southern Napa Valley."
  },
  {
    id: "bw14", name: "Château Pouilly-Fuissé 'Tête de Cuvée'", style: "white", price: 140, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Château Fuissé — Famille Vincent", region: "Pouilly-Fuissé, Mâconnais, Burgundy, France",
    winemaker: "Antoine Vincent",
    flavorTags: ["Grapefruit", "White Peach", "Green Apple", "Vanilla"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is a rich, creamy Mâconnais Chardonnay &mdash; grapefruit and white peach with a touch of vanilla and coconut from the oak &mdash; from the estate widely seen as the benchmark of the entire appellation.",
    sellingPoints: ["From Château Fuissé, considered the benchmark estate of the whole Pouilly-Fuissé appellation", "A blend of over 40 different parcels, built to show what the appellation can do as a whole", "Run by the fifth generation of the same family, dating back to 1862"],
    winemakingNote: "Unlike the single-vineyard wines elsewhere on this list, Tête de Cuvée is deliberately the opposite &mdash; a blend of over 40 of the estate's best parcels, aged on its lees in oak barrels for the creamy texture and subtle smokiness.",
    moment: "A guest who loves white Burgundy but wants something a step below Puligny-Montrachet pricing.",
    memory: "A rich, benchmark Mâconnais Chardonnay built from over 40 parcels across the appellation's best sites.",
    pairingDishIds: ["d-scottish-salmon", "d-branzino", "d-marinated-chicken"],
    arsenal: "A great 'trade up' pour from a simpler Mâcon-Villages or Saint-Véran for a guest ready to spend a bit more on white Burgundy.",
    funFact: "The domaine itself dates back to 1368, though the Vincent family has run the château specifically since 1862 &mdash; Antoine Vincent is the fifth generation to manage it.",
    funFact2: "Tête de Cuvée is assembled from over 40 separate parcels across the villages of Pouilly and Fuissé, each vinified separately before the final blend is chosen.",
    shortStory: "Antoine Vincent took over winemaking from his father, Jean-Jacques, continuing a family tenure at the château that stretches back to 1862. Today his sister Bénédicte and her husband run the commercial side, keeping Château Fuissé a genuinely family-run operation despite its stature as the region's benchmark producer."
  },
  {
    id: "bw15", name: "Joseph Drouhin 'Clos de la Garenne'", style: "white", price: 295, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Maison Joseph Drouhin", region: "Puligny-Montrachet (1er Cru), Côte de Beaune, France",
    winemaker: "Véronique Boss-Drouhin",
    flavorTags: ["White Flowers", "Lemon", "Hazelnut", "Wet Stone"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is real Puligny-Montrachet &mdash; white flowers, lemon, a nutty richness underneath &mdash; from one of Burgundy's most respected family houses, farmed entirely organically and biodynamically.",
    sellingPoints: ["From Maison Joseph Drouhin, one of Burgundy's most respected family houses since 1880", "Farmed organically and biodynamically across all of Drouhin's Burgundy vineyards", "Made by Véronique Boss-Drouhin, who also makes the family's acclaimed Oregon wines and holds France's Légion d'Honneur"],
    winemakingNote: "All of Drouhin's Burgundy vineyards have been certified organic and biodynamic since a conversion that began in the 1980s and 90s &mdash; the family was also one of the first in Burgundy to eliminate pesticide use entirely, decades before it became common practice.",
    moment: "A serious white Burgundy guest who wants the real thing from Puligny-Montrachet, one of the grape's most famous villages.",
    memory: "A textbook, biodynamically farmed Puligny-Montrachet from one of Burgundy's great family houses.",
    pairingDishIds: ["d-scottish-salmon", "d-branzino", "d-hotate"],
    arsenal: "Worth mentioning that Véronique Drouhin also makes Domaine Drouhin's celebrated Oregon Pinot Noir &mdash; she splits her year between two continents.",
    funFact: "Maison Joseph Drouhin was founded in 1880 by a 22-year-old Joseph Drouhin who arrived in Beaune from Chablis to start the business.",
    funFact2: "Winemaker Véronique Boss-Drouhin was awarded France's Légion d'Honneur, the country's highest civic honor, in 2019.",
    shortStory: "Now in its fourth generation, the Drouhin family splits responsibilities among four siblings: Frédéric leads the house, Philippe manages the vineyards, Laurent handles sales, and Véronique &mdash; the only woman in her 1985 enology class at Dijon &mdash; oversees winemaking for both this wine and the family's Oregon estate."
  },
  {
    id: "bw16", name: "Joseph Drouhin 'Les Folatières'", style: "white", price: 285, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Maison Joseph Drouhin", region: "Puligny-Montrachet (1er Cru), Côte de Beaune, France",
    winemaker: "Véronique Boss-Drouhin",
    flavorTags: ["White Peach", "Honeysuckle", "Almond", "Citrus"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is another face of Puligny-Montrachet from the same historic house &mdash; white peach and honeysuckle over a nutty, almond-tinged richness, from a different premier cru plot than the Clos de la Garenne.",
    sellingPoints: ["A second, distinct Puligny-Montrachet premier cru from Maison Joseph Drouhin", "Farmed organically and biodynamically like the rest of Drouhin's Burgundy vineyards", "A chance to compare two different premier cru sites from the same producer, back to back"],
    winemakingNote: "Les Folatières sits on a different slope and soil profile than Clos de la Garenne, even though both are Puligny-Montrachet premier crus from the same house &mdash; a good example of how much a single Burgundy village can vary parcel to parcel.",
    moment: "Pour alongside the Clos de la Garenne for a guest curious how much two neighboring premier cru vineyards can differ.",
    memory: "A second, distinctly different premier cru expression of Puligny-Montrachet from Maison Joseph Drouhin.",
    pairingDishIds: ["d-scottish-salmon", "d-lobster", "d-hotate"],
    arsenal: "The two Drouhin Pulignys on this list are a built-in tasting flight &mdash; same producer, same village, two different premier cru vineyards.",
    funFact: "Puligny-Montrachet is home to some of the most famous Chardonnay vineyards on Earth, and its premier cru sites like Les Folatières sit just below the legendary Grand Cru Montrachet vineyard on the same slope.",
    funFact2: "Drouhin farms roughly 90 hectares across Chablis, the Côte de Nuits, the Côte de Beaune and the Côte Chalonnaise, giving the house one of the broadest vineyard footprints of any family estate in Burgundy.",
    shortStory: "Robert Drouhin, the third generation to lead the house, significantly expanded its Grand and Premier Cru holdings after taking over in 1957. Today those vineyards, including this one, are farmed under the same organic and biodynamic principles his children introduced decades later."
  },
  {
    id: "bw17", name: "Joseph Drouhin Saint-Véran", style: "white", price: 76, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Maison Joseph Drouhin", region: "Saint-Véran, Mâconnais, Burgundy, France",
    winemaker: "Véronique Boss-Drouhin",
    flavorTags: ["Green Apple", "Citrus", "White Blossom", "Mineral"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is a lighter, more affordable taste of white Burgundy &mdash; green apple, citrus, white blossom &mdash; from the same respected house behind two premier cru Pulignys also on this list.",
    sellingPoints: ["The most accessible entry point into Maison Joseph Drouhin's Burgundy portfolio on this list", "Same organic, biodynamic farming as the house's grander premier cru wines", "A great by-the-bottle option for a guest who wants real Burgundy without a premier cru price tag"],
    winemakingNote: "Made in the Mâconnais, south of the Côte de Beaune, in a lighter, fresher style than Drouhin's Puligny-Montrachet wines &mdash; same producer philosophy, considerably gentler price and weight.",
    moment: "A guest who wants a genuine Burgundy Chardonnay without stepping up to premier cru pricing.",
    memory: "An easy-drinking, correctly made Mâconnais Chardonnay from a top-tier Burgundy house.",
    pairingDishIds: ["d-shishitos", "d-edamame", "d-chopped-salad"],
    arsenal: "The value play in the Drouhin lineup on this list &mdash; same producer standards, a fraction of the premier cru price.",
    funFact: "Saint-Véran sits in the Mâconnais, the southernmost part of Burgundy, and was only granted its own appellation status in 1971 &mdash; making it one of Burgundy's newer official wine regions.",
    funFact2: "This is one of three Joseph Drouhin wines on this list, all made under the same organic and biodynamic farming standards regardless of price point.",
    shortStory: "While Drouhin is best known for grand names like Clos des Mouches and Montrachet, this Saint-Véran reflects the same family philosophy applied to a more everyday Burgundy village &mdash; proof the house's standards don't change just because the price does."
  },
  {
    id: "bw18", name: "Vincent Girardin 'Vieilles Vignes' Meursault", style: "white", price: 225, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Maison Vincent Girardin", region: "Meursault, Côte de Beaune, France",
    winemaker: "Eric Germain",
    flavorTags: ["White Peach", "Pineapple", "Hazelnut", "Spice"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 4 },
    guestDescription: "This is classic Meursault &mdash; white peach and pineapple over a rich, nutty, spiced backbone. Full-bodied white Burgundy at its most seductive.",
    sellingPoints: ["From old vines averaging 50 years old across five prized Meursault climats", "Meursault is one of the richest, most sought-after white wine villages in Burgundy", "Founded by a 19-year-old with five inherited acres who built one of Burgundy's most respected houses"],
    winemakingNote: "Aged 15 months on its fine lees in French oak barrels, with fermentation happening naturally via indigenous yeast &mdash; the extended lees aging is what builds Meursault's signature rich, nutty texture.",
    moment: "A guest who wants the richest, most decadent style of white Burgundy on the list.",
    memory: "A rich, nutty, full-bodied Meursault from old vines across five of the village's best-known sites.",
    pairingDishIds: ["d-lobster", "d-chicken-fried-lobster", "d-wild-mushrooms"],
    arsenal: "For a guest who says they want 'a big white' &mdash; Meursault is Burgundy's answer to that request.",
    funFact: "Vincent Girardin started this house in 1980 at just 19 years old, working with five acres of vines he'd inherited from his family &mdash; who had been growing grapes in Santenay since the 17th century.",
    funFact2: "Girardin pioneered a then-unusual approach in Burgundy: buying grapes from outside growers who shared his winemaking philosophy, rather than only using estate fruit.",
    shortStory: "Vincent Girardin sold the house in 2012 to Jean-Pierre Nié, who kept the same small winemaking team in place. Eric Germain, who joined in 2003 and helped shape the estate's minimal-intervention style, continues to make the wines today."
  },
  {
    id: "bw19", name: "Vincent Girardin 'Vieilles Vignes' Rully", style: "white", price: 110, category: "Chardonnay", subcategory: "Old World",
    grape: "100% Chardonnay", producer: "Maison Vincent Girardin", region: "Rully, Côte Chalonnaise, France",
    winemaker: "Eric Germain",
    flavorTags: ["Green Apple", "Citrus", "Almond", "Mineral"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 2, body: 3 },
    guestDescription: "This is a lighter, more affordable old-vine white Burgundy from just south of the Côte de Beaune &mdash; green apple and citrus over a mineral, almond-tinged finish.",
    sellingPoints: ["Old-vine Chardonnay from the Côte Chalonnaise, Burgundy's under-the-radar value zone", "Same winemaking team and standards as the Meursault also on this list, at less than half the price", "A great entry point for a guest curious about real Burgundy"],
    winemakingNote: "Rully sits in the Côte Chalonnaise, just south of the famous Côte de Beaune villages, where similar limestone soils produce excellent Chardonnay at a fraction of Meursault or Puligny prices.",
    moment: "A guest who wants real Burgundy character without Meursault or Puligny-level spending.",
    memory: "An excellent-value, old-vine Burgundy Chardonnay from an often-overlooked appellation just south of the Côte de Beaune.",
    pairingDishIds: ["d-scottish-salmon", "d-crab-cakes", "d-asparagus"],
    arsenal: "The value story here: same house, same old-vine standards as their Meursault, at less than half the price because of where the appellation sits.",
    funFact: "Rully and the rest of the Côte Chalonnaise sit just south of the famous Côte de Beaune, sharing similar soils but carrying far less name recognition &mdash; and far friendlier prices.",
    funFact2: "This bottling comes from the same 'Vieilles Vignes' (old vines) philosophy as the house's pricier Meursault, just from a different, less famous corner of Burgundy.",
    shortStory: "As demand for Vincent Girardin's Côte de Beaune wines grew, the house expanded into lesser-known appellations like Rully to keep offering genuine old-vine Burgundy character at accessible prices &mdash; a strategy that's kept this bottling a reliable value pour."
  },
  {
    id: "bw20", name: "Capensis", style: "white", price: 148, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Capensis", region: "Western Cape, South Africa",
    winemaker: "Graham Weerts",
    flavorTags: ["Stone Fruit", "Pear", "Hay", "Saline Minerality"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 4 },
    guestDescription: "This is world-class South African Chardonnay &mdash; stone fruit and pear over a long, saline mineral finish &mdash; from a project built specifically to prove the Cape could make Chardonnay at the highest level.",
    sellingPoints: ["A joint project between top South African growers and California's Jackson Family Wines", "Sourced from some of the highest-elevation vineyards in the Western Cape", "Rated 98 points by critic Tim Atkin, among the highest scores ever given to a South African white"],
    winemakingNote: "Winemaker Graham Weerts spent months 'prospecting' remote, high-elevation vineyard blocks across Stellenbosch, Overberg and Robertson before selecting the specific sites used in this wine, applying California's technical Chardonnay expertise to South African fruit.",
    moment: "A guest who's open to something outside the usual French-or-California binary &mdash; a genuine conversation-starter pour.",
    memory: "An internationally acclaimed, high-elevation South African Chardonnay built to rival the world's best.",
    pairingDishIds: ["d-lobster", "d-scottish-salmon", "d-wild-mushrooms"],
    arsenal: "A great 'have you ever had South African Chardonnay?' pour &mdash; most guests haven't, and this is a genuinely serious example.",
    funFact: "Capensis is majority owned by Barbara Banke, the same family behind Kendall-Jackson &mdash; making it a distant relative of both the Cambria and Hartford Court Chardonnays also on this list.",
    funFact2: "Capensis Chardonnay has been rated 98 points by critic Tim Atkin, one of the highest scores ever awarded to a white wine from South Africa.",
    shortStory: "Winemaker Graham Weerts, a Cape Town native who spent much of his career making wine in California, returned home to lead Capensis &mdash; a project built from scratch specifically to show the world that the Western Cape could produce Chardonnay on par with Burgundy or California's best."
  },
  {
    id: "bw21", name: "Hudson 'Estate'", style: "white", price: 165, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Hudson Vineyards", region: "Carneros, Napa Valley, California",
    winemaker: "Clayton Kirchhoff",
    flavorTags: ["Stone Fruit", "Citrus", "Minerality", "Toasted Brioche"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 4 },
    guestDescription: "This is Chardonnay from one of the single most sought-after vineyards in California &mdash; stone fruit and citrus over a rich, brioche-tinged texture from extended aging on the lees.",
    sellingPoints: ["From the legendary Hudson Ranch, a grower whose fruit built the reputations of Kistler, Kongsgaard and other cult Chardonnay names", "The same vineyard that supplies fruit to Cakebread, also on this list", "Estate-grown on a working 2,000-acre farm, not just a vineyard"],
    winemakingNote: "Picked by hand at night to preserve freshness, then barrel-fermented with native yeast and aged sur lie &mdash; unfiltered and unfined &mdash; for a 22-month élevage that builds real depth and texture.",
    moment: "A guest who's had Hudson Vineyard-designated Chardonnay from other producers and wants to try the estate's own bottling.",
    memory: "Chardonnay from arguably the most influential single vineyard source in modern California wine.",
    pairingDishIds: ["d-lobster", "d-scottish-salmon", "d-chicken-fried-lobster"],
    arsenal: "Worth noting: this is the exact vineyard whose fruit built the reputations of cult names like Kistler and Kongsgaard &mdash; and it also supplies the Cakebread Chardonnay on this list.",
    funFact: "Hudson Ranch is a working 2,000-acre farm, not just a vineyard &mdash; it also raises heritage livestock, grows olives, and sells produce through its own grocery store, Hudson Greens & Goods.",
    funFact2: "Owner Lee Hudson trained at Burgundy's Domaine Dujac before planting his first vines in 1981, and the ranch has since become one of the most name-checked vineyard sources on premium California Chardonnay labels.",
    shortStory: "Lee and Cristina Hudson bought this 2,000-acre Carneros property in 1981 and spent decades building it into one of California's most respected Chardonnay sources &mdash; sought after by top producers statewide long before most wine drinkers ever saw the Hudson name on a label of its own."
  },
  {
    id: "bw22", name: "Calera", style: "white", price: 132, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Calera Wine Company", region: "Mt. Harlan, San Benito County, California",
    winemaker: "Mike Waller",
    flavorTags: ["Citrus", "Stone Fruit", "Mineral", "Spice"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is limestone-driven, Burgundian-style Chardonnay from a remote mountain vineyard planted by one of California wine's true pioneers.",
    sellingPoints: ["From Mt. Harlan, one of only two AVAs in North America created essentially around a single winery", "Founded by Josh Jensen, a pioneer of terroir-driven, Burgundy-inspired winemaking in California", "Grown on rare limestone soil Jensen spent two years searching California to find"],
    winemakingNote: "Founder Josh Jensen trained at Burgundy's Domaine Dujac and Château-Grillet before spending two years combing California for limestone soil &mdash; rare in this state but essential to the Burgundian wines he wanted to make &mdash; finally finding it on Mt. Harlan in 1974.",
    moment: "A guest who loves white Burgundy and is curious what an American winery built specifically to chase that style tastes like.",
    memory: "A pioneering, limestone-grown California Chardonnay from a remote, one-of-a-kind mountain vineyard.",
    pairingDishIds: ["d-scottish-salmon", "d-branzino", "d-wild-mushrooms"],
    arsenal: "Great story for a Burgundy-curious guest: the founder trained in Burgundy and spent two years just searching for the right soil before planting a single vine.",
    funFact: "Calera is one of only two wineries in North America with its own dedicated AVA (Mt. Harlan) &mdash; a distinction it shares with a similarly singular approach to Domaine Romanée-Conti in Burgundy.",
    funFact2: "Founder Josh Jensen named the winery Calera, Spanish for 'limekiln,' after an old limestone kiln still standing on the property from the late 1800s.",
    shortStory: "Josh Jensen planted his first vines on Mt. Harlan in 1975 after two years spent searching California for limestone soil like the kind he'd studied in Burgundy. He led the winery for over 40 years until selling to Duckhorn Wine Company in 2017; winemaker Mike Waller, who joined in 2007, continues his style today."
  },
  {
    id: "bw23", name: "Cakebread Cellars", style: "white", price: 115, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Cakebread Cellars", region: "Napa Valley, California",
    winemaker: "Niki Williams",
    flavorTags: ["Citrus", "Pear", "Tropical Fruit", "Vanilla"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is the wine that started it all for Cakebread &mdash; citrus, pear, tropical fruit with a touch of vanilla &mdash; from the family estate's very first release back in 1973.",
    sellingPoints: ["Chardonnay is literally the wine that launched Cakebread Cellars in 1973", "Family-owned and run for over 50 years, now by the founders' sons", "Sourced partly from the legendary Hudson Vineyard, also poured on this list"],
    winemakingNote: "The winemaking team ages the Chardonnay on its lees to build creamy texture, using whole-cluster pressing and carefully managed malolactic fermentation to keep the wine balanced rather than heavy.",
    moment: "A guest who wants a dependable, classically styled Napa Chardonnay with real family history behind it.",
    memory: "A classic, food-friendly Napa Chardonnay from the varietal that built the entire winery.",
    pairingDishIds: ["d-marinated-chicken", "d-crab-cakes", "d-mac-cheese"],
    arsenal: "Fun fact for the table: Cakebread's very first wine, back in 1973, was this exact varietal &mdash; Chardonnay is the whole reason the winery exists.",
    funFact: "Jack Cakebread was an auto garage owner and photographer on assignment to shoot Napa Valley winemakers when he fell in love with a small Rutherford property and bought it on the spot in 1972.",
    funFact2: "Cakebread's very first wine, released in 1973, was a Chardonnay &mdash; the same varietal that remains a cornerstone of the winery over 50 years later.",
    shortStory: "Jack and Dolores Cakebread built their winery from a 22-acre former pasture into one of Napa's most recognized family names. Their sons Bruce and Dennis now run the winery, with winemaker Niki Williams &mdash; only the fifth in the company's history &mdash; continuing the Chardonnay program that started it all."
  },
  {
    id: "bw24", name: "Far Niente", style: "white", price: 135, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Far Niente", region: "Napa Valley (Oakville), California",
    winemaker: "Nicole Marchesi",
    flavorTags: ["Ripe Stone Fruit", "Apple Blossom", "Pencil Shavings", "Crushed Stone"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is a structured, age-worthy Napa Chardonnay &mdash; ripe stone fruit and apple blossom over a mineral edge &mdash; made in a deliberately restrained, French-influenced style.",
    sellingPoints: ["Far Niente means 'without a care' in Italian &mdash; a name that fits the estate's relaxed, historic setting", "One of only two varietals the winery makes, focused on since 1979", "Made without malolactic fermentation, an Old World technique choice that keeps the wine bright and age-worthy rather than soft and buttery"],
    winemakingNote: "Founder Gil Nickel made a deliberate choice to skip malolactic fermentation on the Chardonnay &mdash; the softening process most California Chardonnays go through &mdash; keeping this wine brighter, crisper and built to age longer than the typical rich, buttery Napa style.",
    moment: "A guest who wants a more restrained, age-worthy style of Napa Chardonnay rather than a rich, buttery one.",
    memory: "A structured, French-influenced Napa Chardonnay built to age rather than to be soft and buttery.",
    pairingDishIds: ["d-scottish-salmon", "d-branzino", "d-marinated-chicken"],
    arsenal: "Good to know for a guest who says they don't like 'buttery' Chardonnay &mdash; this one skips the winemaking step that causes that specifically.",
    funFact: "Far Niente means 'without a care' in Italian, and the historic winery building itself dates to 1885, making it one of Napa Valley's oldest standing wineries.",
    funFact2: "Founder Gil Nickel brought Chardonnay budwood back from Burgundy's Maison Louis Latour in 1981, propagating it at UC Davis before eventually planting it in the winery's Coombsville vineyards.",
    shortStory: "Gil Nickel discovered the abandoned, historic Far Niente property in 1979 and spent years restoring it, focusing the winery exclusively on Chardonnay and Cabernet Sauvignon made with French winemaking principles &mdash; a philosophy current winemaker Nicole Marchesi continues today."
  },
  {
    id: "bw25", name: "Diatom 'Bar-M'", style: "white", price: 68, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Diatom (Greg Brewer)", region: "Santa Barbara County (Los Alamos Valley), California",
    winemaker: "Greg Brewer",
    flavorTags: ["Meyer Lemon", "Citrus Pith", "Wet Sand", "White Peach"],
    structure: { sweetness: 1, acidity: 5, tannin: 0, alcohol: 2, body: 2 },
    guestDescription: "This is Chardonnay with almost nothing done to it &mdash; Meyer lemon, citrus pith, a saline, wet-sand minerality &mdash; from a winemaker obsessed with getting out of the fruit's way entirely.",
    sellingPoints: ["Made by Greg Brewer, named 2020 Winemaker of the Year by Wine Enthusiast", "A single-varietal label built around one idea: total purity and transparency of site", "From a single old-vine block planted in 1996, on ancient seabed soils"],
    winemakingNote: "Fermented at very low temperatures in small stainless-steel tanks with inhibited or no malolactic fermentation, then moved through the cellar as quickly as possible &mdash; every step designed to remove 'noise' and let the vineyard itself be the only voice in the glass.",
    moment: "A guest who loved the Louis Michel or Billaud-Simon Chablis and wants to see an American winemaker chase that same purity.",
    memory: "A minimal-intervention, single-vineyard California Chardonnay built entirely around purity and transparency.",
    pairingDishIds: ["d-oysters", "d-hotate", "d-shellfish-tower"],
    arsenal: "A great next step for a Chablis lover &mdash; this is arguably the most Chablis-like Chardonnay California makes, by design.",
    funFact: "'Diatom' is named for diatomaceous earth, a fossilized plankton material found in the ancient seabed soils where this vineyard's grapes are grown.",
    funFact2: "Winemaker Greg Brewer was named 2020 Winemaker of the Year by Wine Enthusiast, and has spent his entire career focused on the Sta. Rita Hills region, which he helped officially define as an appellation in 1997.",
    shortStory: "Greg Brewer started as a French instructor before training in wine production in 1991. He later co-founded Brewer-Clifton and led Melville Winery before launching Diatom in 2005 as a laboratory for exploring Chardonnay stripped down to its purest, most transparent form."
  },
  {
    id: "bw26", name: "Hartford Court", style: "white", price: 72, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Hartford Family Winery", region: "Russian River Valley, Sonoma County, California",
    winemaker: "Jeff Stewart",
    flavorTags: ["White Flowers", "Citrus Oil", "Nectarine", "Crystallized Ginger"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is a fruit-forward Russian River Chardonnay &mdash; white flowers, citrus oil, nectarine &mdash; blended from several small, high-quality vineyards across the appellation.",
    sellingPoints: ["Founded in 1994 by Jenny Jackson Hartford, another branch of the family behind Kendall-Jackson", "Built from single small vineyards across five distinct micro-regions of the Russian River Valley", "Grapes harvested entirely at night to preserve freshness"],
    winemakingNote: "Sourced from five distinct sub-areas of the Russian River Valley &mdash; each contributing a different note, from Green Valley's citrus to Sebastopol Hills' bright acidity &mdash; then barrel-fermented in French oak with weekly lees stirring for texture.",
    moment: "A guest who wants a bright, fruit-driven Russian River Chardonnay without an oaky or heavy style.",
    memory: "A vibrant, multi-vineyard Russian River Valley Chardonnay built for freshness over weight.",
    pairingDishIds: ["d-crab-cakes", "d-scottish-salmon", "d-clam-chowder"],
    arsenal: "Another Jackson family connection on this list &mdash; Hartford Court, Cambria, and Capensis are all run by different branches of the same family.",
    funFact: "Founder Jenny Jackson Hartford is the daughter of Jess Jackson, who founded Kendall-Jackson &mdash; making this the third wine on this list with ties to the same family, alongside Cambria and Capensis.",
    funFact2: "All the fruit for this wine is picked at night to keep it cool and preserve freshness before it ever reaches the winery.",
    shortStory: "Jenny Jackson and Don Hartford met in law school and started this winery together in 1994, focused on small-lot, single-vineyard Pinot Noir, Zinfandel and Chardonnay from the cool Russian River Valley &mdash; a more intimate counterpoint to her father's much larger Kendall-Jackson brand."
  },
  {
    id: "bw27", name: "Patz & Hall", style: "white", price: 92, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Patz & Hall", region: "Sonoma Coast, California",
    winemaker: "James Hall",
    flavorTags: ["Lemon Curd", "Wet Stone", "Honeysuckle", "Apricot"],
    structure: { sweetness: 1, acidity: 3, tannin: 0, alcohol: 3, body: 4 },
    guestDescription: "This is a textured, generous Sonoma Coast Chardonnay &mdash; lemon curd, wet stone, honeysuckle &mdash; built by blending over 20 small single vineyards into one wine.",
    sellingPoints: ["Founded in 1988 by two couples whose surnames literally form the winery's name", "Draws from 23 different single-vineyard sites across the Sonoma Coast", "Winemaker James Hall bought the winery back in 2024 after eight years of corporate ownership, returning it to independent hands"],
    winemakingNote: "Fermentation happens slowly, often stretching into early winter, with weekly stirring of the lees to pull toasty, roasted character out of the grape solids &mdash; a deliberately unhurried process built for depth over speed.",
    moment: "A guest who wants a richer, more textured Sonoma Coast Chardonnay with real vineyard diversity behind it.",
    memory: "A generous, multi-vineyard Sonoma Coast Chardonnay built through slow, deliberate barrel fermentation.",
    pairingDishIds: ["d-lobster", "d-scottish-salmon", "d-chicken-fried-lobster"],
    arsenal: "Also sources fruit from the legendary Hudson Vineyard &mdash; same source as the Hudson Estate Chardonnay elsewhere on this list.",
    funFact: "The winery's name literally combines its two founding couples: winemaker James Hall and enologist Anne Moses, plus Donald and Heather Patz, who handled sales and marketing.",
    funFact2: "James Hall bought Patz & Hall back from its corporate owner in 2024, returning the winery to independent, founder-led hands after eight years.",
    shortStory: "James Hall and Donald Patz became close friends while working together at Flora Springs Winery in the 1980s. In 1988 they teamed up with Anne Moses and Heather Patz to launch their own label, building long-term relationships with elite growers like Larry Hyde and Lee Hudson along the way."
  },
  {
    id: "bw28", name: "Sonoma-Cutrer 'Les Pierres Vineyard'", style: "white", price: 85, category: "Chardonnay", subcategory: "New World",
    grape: "100% Chardonnay", producer: "Sonoma-Cutrer", region: "Sonoma Coast, California",
    winemaker: "Cara Morrison",
    flavorTags: ["Lemon Zest", "Wet Stone", "Key Lime", "Toasted Oak"],
    structure: { sweetness: 1, acidity: 4, tannin: 0, alcohol: 3, body: 3 },
    guestDescription: "This is a structured, mineral-driven Sonoma Chardonnay &mdash; lemon zest, wet stone, key lime &mdash; grown in an old quarry vineyard literally named 'the stones' in French.",
    sellingPoints: ["From Les Pierres, an old quarry site where stones make up over half the soil", "One of Sonoma-Cutrer's three original vineyard-designated wines, a program dating to 1981", "Founded by a former fighter pilot who treated California Chardonnay as a serious art form"],
    winemakingNote: "The vineyard sits on an old quarry, where rocky, stone-heavy soil forces the vines to dig deep for water &mdash; the same stones absorb daytime heat and slowly release it at night, which is where the wine's name, 'Les Pierres' ('the stones'), comes from.",
    moment: "A guest who wants a structured, food-friendly California Chardonnay with genuine mineral character.",
    memory: "A stony, structured Sonoma Coast Chardonnay from a former quarry vineyard built for precision over power.",
    pairingDishIds: ["d-scottish-salmon", "d-crab-cakes", "d-branzino"],
    arsenal: "Now under the same ownership as the Duckhorn Sauvignon Blanc also on this list, following a 2024 acquisition &mdash; two wines, same corporate family.",
    funFact: "Founder Brice Cutrer Jones was a former fighter pilot and West Point graduate who became fascinated with wine while still in the Air Force, later planting Sonoma-Cutrer's first vineyards in 1973.",
    funFact2: "'Les Pierres' means 'the stones' in French &mdash; a literal description of the old quarry vineyard, where rocks make up over half the soil composition.",
    shortStory: "Jones spent nearly a decade farming before releasing his first wine in 1981, immediately splitting his best fruit into three separate vineyard-designated bottlings &mdash; Les Pierres, Cutrer Vineyard, and Russian River Ranches &mdash; a level of site-specific detail that was rare for California Chardonnay at the time."
  }
];

// Liquor / back bar list -- empty until real bottle data is provided.
// Each item will follow: { id: "l1", name: "...", category: "Whiskey" | "Gin" | "Rum" | "Tequila" | "Vodka" | "Brandy/Cognac", ... }
const LIQUOR = [];

// ============================================================
// LEARNING MODULES -- standard schema, same shape for every
// restaurant clone. app.js's Learning views read only this shape:
// { id, title, category, unlockAfter (module id or null),
//   chapters: [
//     { title, sections: [
//         { type: "text",  title, body, note? }
//         { type: "image", title, imageUrl?, caption }
//         { type: "video", title, videoUrl?, duration }
//       ]
//     },
//     ... one or more chapters/blocks of content ...
//   ],
//   test: [
//     { question, options: [...], correctIndex },
//     ... trailing knowledge-check questions, may be an empty array ...
//   ]
// }
// Every module always finishes a chapter, then (if test.length) goes
// through the same "Ready for the Test?" screen before completion —
// a one-chapter module and a multi-chapter module both end the same way.
// PLACEHOLDER CONTENT: the modules below are sample/demo content only,
// used to verify the Learning engine end-to-end. Replace with real,
// owner-provided material before treating this as live training copy.
// ============================================================
const LEARNING_MODULES = [
  {
    id: "olive-wagyu-service",
    title: "Olive Wagyu: Selling the Rarest Steak",
    category: "Food",
    unlockAfter: null,
    chapters: [
      {
        title: "Selling the Rarest Steak",
        sections: [
          {
            type: "text",
            title: "The Rarest Steak You'll Sell",
            body: "Olive Wagyu isn't just another premium cut — it's a genuine rarity, and it deserves to be sold like one. This module covers where it comes from, why it eats differently than any other Wagyu, and exactly what to say and do when it hits your table.",
            note: "Fewer than 2,200 of these cattle exist globally, and only a small fraction are harvested each month."
          },
          {
            type: "text",
            title: "The Story: Once-in-a-Lifetime",
            body: "Olive Wagyu comes from Shodoshima Island, the heart of Japan's Seto Inland Sea, which produces 99% of Japan's domestic olive oil. In 2006, farmer Masaki Ishii began toasting the discarded olive pulp left over from oil production to remove its bitterness and caramelize its natural sugars — then fed it to the cattle. The result is a Wagyu unlike any other on the market.",
            note: "That feed innovation, not just the breed, is what makes Olive Wagyu genuinely different from standard A5."
          },
          {
            type: "image",
            title: "The Science of the Melt",
            imageUrl: "images/learning/wagyu-melt.jpg",
            caption: "Olive Wagyu runs 62–68% oleic acid (a heart-healthy monounsaturated fat), compared to roughly 50% in standard A5. That's why it melts at about 72°F (22°C) versus 77°F (25°C) — the fat literally begins to soften at room temperature."
          },
          {
            type: "text",
            title: "Why This Changes Service",
            body: "The low melting point isn't just a talking point — it changes how the kitchen and the table both need to move. Because the fat renders so fast, the chef cooks it fast and precise, and it needs to reach the guest immediately to preserve that velvet texture.",
            note: "Stating this proactively — \"due to the extremely low melting point, the chef cooks this fast and precise\" — elegantly deflects medium-well requests before they happen."
          },
          {
            type: "image",
            title: "Words to Use at the Table",
            imageUrl: "images/learning/wagyu-plate.jpg",
            caption: "Velvety — a liquid-silk sensation where the fat dissolves instantly on contact. Weightless — an impossibly clean finish, without the heavy, lingering richness that causes palate fatigue. Buttery — a nutty, sweet umami profile driven by the olive diet."
          },
          {
            type: "image",
            title: "Know the Tier: Olive vs. the Menu",
            imageUrl: "images/learning/wagyu-marbling.jpg",
            caption: "American/Aussie Wagyu is the excellent baseline — beefy and approachable. Standard A5 Wagyu is the luxury standard — deep umami, intensely rich, pure white fat. Olive Wagyu is the pinnacle — sweeter, cleaner, impossibly light, with ivory-tinted fat, at extreme rarity."
          },
          {
            type: "text",
            title: "The Pitch & Objection Handling",
            body: "\"Is it really worth the price?\" and \"That's too expensive/rich for me\" are the two objections you'll hear most. Contrast, don't defend: frame the existing Wagyu on your menu as an excellent choice, and position Olive Wagyu as the rare step above it — not a knock on what they'd otherwise order. Sell the share: a 4oz cut works well as a split starter for the table, for up to four guests, which dramatically lowers the per-person buy-in.",
            note: "Frame it as an event, not a menu item."
          },
          {
            type: "image",
            title: "At the Table",
            imageUrl: "images/learning/wagyu-table.jpg",
            caption: "The Raw Reveal: if presenting tableside, highlight the BMS 8-12 marbling and the subtle golden/ivory tint of the fat — build anticipation before it hits the pan. Set the Rules: proactively explain the fast, precise cook. The Delivery: serve immediately, since the fat renders rapidly and timing is everything for the texture."
          },
          {
            type: "text",
            title: "What to Pour",
            body: "A high-acid red — a Barolo or a high-elevation Cabernet — cuts through the rich fat and cleanses the palate between bites. A premium, clean sake, like a Junmai Daiginjo, mirrors and elevates the meat's pure umami profile instead of cutting against it.",
            note: "Pick one of each to memorize before your shift, so you can recommend with total confidence."
          }
        ]
      }
    ],
    test: []
  },
  {
    id: "restaurant-week-floor-management",
    title: "Restaurant Week: Managing the Floor at Peak Volume",
    category: "Service",
    unlockAfter: null,
    chapters: [
      {
        title: "Turnover Without the Guest Ever Feeling It",
        sections: [
          {
            type: "text",
            title: "The Balance We're Managing",
            body: "During Restaurant Week, our focus is managing the dining room efficiently at peak volume — without ever making a guest feel rushed or compromised on service. Every technique in this module exists to protect both sides of that balance: high turnover and exceptional hospitality, at the same time.",
            note: "If a technique speeds up the floor but makes the guest feel it, it's not the right technique."
          },
          {
            type: "text",
            title: "Rule 1: Complete Parties Only",
            body: "Do not host or seat any party until all guests have arrived. Seating an incomplete group that's holding a table for late arrivals bogs down table pacing, delays the first round of drink orders, and directly reduces our seating capacity during our highest-demand hours.",
            note: "A held table isn't neutral — it's actively costing us capacity every minute it sits partially full."
          },
          {
            type: "text",
            title: "Rule 2: Professional Language & Non-Verbal Cues",
            body: "Never ask a guest \"Are you done?\" or \"Are you still working on that?\" Instead, use non-verbal hospitality cues to signal the meal's natural transition: clear unused glassware, remove empty bread baskets, and offer dessert or coffee menus. When you do need to check on plates, reframe it as \"May I clear this space for you?\"",
            note: "The cue should read as attentiveness, not a hint that we need the table back."
          },
          {
            type: "text",
            title: "Rule 3: Strategic Check Drops",
            body: "Anticipate the end of the meal. Pre-clear dessert plates promptly and drop the check before the guest has to ask for it. The key is framing: pair the check drop with warm, reassuring language so it reads as attentive service, not a push out the door.",
            note: "Try: \"I'll leave this right here for your convenience — there's absolutely no rush, please take your time,\" or \"I want to make sure you have everything you need to wrap up today. Can I offer any coffee or digestifs, or may I process this whenever you're ready?\""
          },
          {
            type: "text",
            title: "Rule 4: \"Liquid Hospitality\" — The Bar Transition",
            body: "If a table is lingering and needs to be cleared for an incoming reservation, transition them to the bar with a generous offer. Inviting guests to finish their evening at the bar — often paired with a quick post-dinner pour or espresso — turns a tight operational turnaround into a warm, VIP experience instead of a squeeze.",
            note: "This is the move for a table that's genuinely happy but just needs to move — never a substitute for rushing them at the table itself."
          }
        ]
      }
    ],
    test: []
  },
  {
    id: "hrw-service-excellence",
    title: "Houston Restaurant Weeks: Volume & Hospitality",
    category: "Service",
    unlockAfter: null,
    chapters: [
      {
        title: "Unconditional Hospitality at Volume",
        sections: [
          {
            type: "text",
            title: "Why HRW Is Different",
            body: "Houston Restaurant Weeks brings immense volume, elevated energy, and a significant influx of first-time guests. Menu prices dip during HRW, but our standard of service never does.",
            note: "Every HRW table is a first impression for someone who has never eaten here before."
          },
          {
            type: "text",
            title: "Unconditional Hospitality",
            body: "Unconditional hospitality means treating every guest with warmth, respect, and attentive generosity — regardless of check size, dining speed, or whether they're ordering strictly from the promotional menu. Approach HRW diners with the exact same prestige and presence as a high-roller regular. Every table is an opportunity to create a lifelong regular.",
            note: "Neutralize bias: check size during HRW says nothing about who that guest becomes as a regular."
          },
          {
            type: "text",
            title: "Micro-Dosing Touchpoints",
            body: "Small, intentional moments of care make guests feel truly valued amid high-volume hustle: a sincere welcome, eye contact, prompt water refills, and clean table clears. Frame the HRW menu itself as a celebration and guided tour of our culinary philosophy, not a discount menu.",
            note: "These are fast to do — they don't cost you pace, they cost you attention."
          }
        ]
      },
      {
        title: "Course Timing & Open-Fire Expectations",
        sections: [
          {
            type: "text",
            title: "The Fire-on-Drop Standard",
            body: "To keep kitchen tick times structured and prevent bottlenecks, fire the next course in the POS as soon as the current course drops at the table — or immediately after verifying the guest is enjoying it. Do not wait for plates to be cleared before sending the next ticket to the open-fire line.",
            note: "Fire-on-drop is the operational benchmark — the default you fire to unless the table tells you otherwise."
          },
          {
            type: "text",
            title: "Critical Rule: One Size Does Not Fit All",
            body: "Read your table's unique tempo. Is the table dining fast before a show, or celebrating an anniversary over relaxed conversation? If a guest is pacing slowly, adjust your firing interval accordingly. Firing on drop is the benchmark, but guest comfort always dictates the final tempo.",
            note: "Efficiency must never compromise individual guest comfort — pacing is diagnostic, not fixed."
          },
          {
            type: "text",
            title: "Setting Expectations: Open-Fire, Open-Kitchen",
            body: "Our culinary program centers on live open-fire cooking over raw wood embers — precise sear, temperature control, and coursing require deliberate time over heat. During peak HRW volume, timing between courses may naturally extend. Set this expectation upfront with warmth and enthusiasm, framing wait times as part of the authentic live-fire dining experience.",
            note: "Try: \"Tonight you'll be experiencing our open-fire kitchen, where everything is prepared live over natural wood embers. Because cooking over live fire is an artisanal, temperature-sensitive process, courses are paced thoughtfully so every dish comes off the hearth at its peak. Lean back, enjoy the ambiance, and we'll bring out each course as it reaches perfection!\""
          }
        ]
      },
      {
        title: "Pairings & Enhancements, Light Touch",
        sections: [
          {
            type: "text",
            title: "Keep It Organic and Low-Pressure",
            body: "Keep beverage and enhancement offerings organic, natural, and low-pressure. Rather than pushy upselling, offer thoughtful additions that elevate the multi-course experience.",
            note: "The tone is guide, not salesperson."
          },
          {
            type: "text",
            title: "Targeted Glass Pairings",
            body: "Suggest a single, specific glass pairing during the initial order consult — for example: \"If you're selecting the short rib, our bold wood-aged Cabernet pairs exceptionally well with that live-fire char.\"",
            note: "One specific, confident suggestion beats a list of options."
          },
          {
            type: "text",
            title: "Subtle Enhancements",
            body: "Mention signature additions or side enhancements casually while walking through the HRW menu options. Keep it informative, helpful, and brief.",
            note: null
          }
        ]
      }
    ],
    test: []
  },
  {
    id: "eh-taylor-cured-oak",
    title: "Colonel E.H. Taylor Cured Oak: Selling a Unicorn Pour",
    category: "Bar",
    unlockAfter: null,
    chapters: [
      {
        title: "The Story & The Pour",
        sections: [
          {
            type: "text",
            title: "A Genuine Unicorn",
            body: "Cured Oak is one of the most chased bottles in the whole E.H. Taylor lineup. The original 2015 release built a cult following, disappeared from production for over a decade, and only came back in 2026. Knowing that story is what turns this from just another bourbon on the back bar into a moment for the guest.",
            note: "This isn't a bottle you'll pour every night — treat it like the rarity it is. It's also the only Colonel E.H. Taylor bottle on our list — we carry other Buffalo Trace whiskeys, but not the rest of the Taylor line."
          },
          {
            type: "text",
            title: "Who Was Colonel E.H. Taylor",
            body: "Colonel E.H. Taylor Jr. shaped how bourbon gets made and regulated. In the late 1800s he pushed the legislation that became the Bottled-in-Bond Act, and brought techniques like copper fermentation tanks and steam-heated warehouses into Buffalo Trace that are still used today.",
            note: null
          },
          {
            type: "text",
            title: "What Makes It Different: The Wood, Not the Age",
            body: "The staves for these barrels air-dry for 13 months — more than double Buffalo Trace's standard six-month cure. That extra time lets the wood shed its harsher tannins and mellow out before the whiskey ever touches it, so a lot of the flavor work happens before fermentation even starts.",
            note: "This is the single fact that makes Cured Oak worth explaining to a guest — the barrel prep is the whole story."
          },
          {
            type: "text",
            title: "The Specs",
            body: "100 proof, Bottled-in-Bond, aged 10 years for this 2026 release (the original 2015 bottling carried a 17-year statement — different release, don't mix them up). Aged in Warehouse C, built by the Colonel himself in 1885. Mash Bill #1, Buffalo Trace's standard bourbon mash.",
            note: "Guests who know Bottled-in-Bond will ask — 100 proof, government-regulated production standard, single distillery and distilling season."
          },
          {
            type: "image",
            title: "On the Back Bar",
            imageUrl: "images/learning/taylor-cured-oak-bottle.jpg",
            caption: "Tasting notes to give guests: tobacco, dried fruit, vanilla, toffee, seasoned oak, long dry finish. Also worth mentioning if a guest wants something brighter: apricot, lemon oil, and honey on the nose, moving into stone fruit, toasted cedar spice, and orange blossom on the palate."
          },
          {
            type: "text",
            title: "The Pitch",
            body: "Lead with \"the barrel is the star, not the age.\" Cured Oak is the only Colonel E.H. Taylor bottle we carry — if a guest asks how it compares to Small Batch or Single Barrel, be upfront that we only pour Cured Oak from that line. For a side-by-side, pour it next to one of our other Buffalo Trace whiskeys so the guest can taste directly what the extra barrel curing time does.",
            note: "A side-by-side pour against a standard Buffalo Trace is a tasting-menu moment, not just a pour — treat it that way with the guest."
          }
        ]
      }
    ],
    test: []
  }
];

