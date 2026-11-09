// Prime 131 — Training Calendar: November 2026, Week 4 lessons.
// Loaded before training-2026-11.js, which links these to the calendar.

const TC_2026_11_W4 = (function () {
  const sec = tcSec, q = tcQ;

  /* WINE · Viña Ardanza / Domäne Wachau Grüner Veltliner */
  const wine = {
    id: "tc-2026-11-w4-wine",
    title: "Viña Ardanza & Domäne Wachau: The Stories Behind the Bottles",
    category: "Wine",
    chapters: [
      {
        title: "La Rioja Alta 'Viña Ardanza'",
        sections: [
          sec("Viña Ardanza: Only in the Best Years",
            "La Rioja Alta was founded in 1890 by five families from Rioja and the Basque Country, with one goal: quality over quantity. Viña Ardanza, named for one of the founding families, has been made since 1942, and only in vintages the winery considers truly excellent: roughly five or six times a decade.<br><br>It is 80% Tempranillo and 20% Garnacha, aged up to three years in American oak barrels the winery makes itself in its own cooperage. Black cherry, plum, vanilla and clove, in the traditional Rioja style. Winemaker: Julio Sáenz.<br><br><b>Say it:</b> “Five families started this winery in 1890. They only make Viña Ardanza in the best vintages, about five or six times a decade, and they make their own barrels to age it. Black cherry, plum, vanilla. It's classic Rioja.”",
            "Short Rib, Marinated Chicken, Mac & Cheese.", "Pairs with")
        ]
      },
      {
        title: "Domäne Wachau Grüner Veltliner",
        sections: [
          sec("Domäne Wachau: Terraces Above the Danube",
            "Domäne Wachau formed in the 1930s when growers across Austria's Wachau valley organized into a cooperative. About 250 growers farm steep terraced vineyards above the Danube. The terraces date back to the 11th century, and the land has documented history going back to 1137. Master of Wine Roman Horvath leads it, and winemaker Heinz Frischengruber knows every one of the roughly 250 small parcels.<br><br>It is Austria's leading organically farmed estate, with over 160 hectares certified organic, and the grapes are harvested entirely by hand. Grüner Veltliner is Austria's most planted grape. This one is white pepper over gooseberry and green apple, light-bodied, with racy acidity. It is by the bottle only.<br><br><b>Say it:</b> “This is Austria's signature grape, from steep terraces above the Danube that have been farmed since the 11th century. It's all picked by hand and organic. White pepper, gooseberry, green apple. It's what you want with anything spicy.”",
            "Shishitos, Edamame, Miso Cod.", "Pairs with")
        ]
      }
    ],
    test: [
      q("How many families founded La Rioja Alta in 1890?",
        ["Two", "Three", "Five", "Ten"], 2),
      q("Why is Viña Ardanza only made some years?",
        ["It's made only in vintages the winery considers excellent", "The barrels are scarce", "It is made on demand", "The vineyard rotates each year"], 0),
      q("What is Grüner Veltliner's signature flavor?",
        ["Butter", "White pepper", "Vanilla", "Smoke"], 1),
      q("How are the Domäne Wachau grapes harvested?",
        ["By machine", "Entirely by hand", "By drone", "At night by machine only"], 1)
    ]
  };

  /* OTHER (BASIC KNOWLEDGE) · Gins */
  const gins = {
    id: "tc-2026-11-w4-gins",
    title: "Gins: How Each One Is Made and Tastes",
    category: "Bar",
    chapters: [
      {
        title: "What Makes It Gin",
        sections: [
          sec("The Rule",
            "In the US, gin gets its main flavor from juniper berries and must be bottled at 40% ABV (80 proof) or higher. Everything else varies: the other botanicals, and how they're distilled.<br><br><b>London Dry:</b> flavored by botanicals during distillation, with nothing added afterward except water and a small amount of sweetener.<br><b>Distilled gin:</b> redistilled with botanicals, but flavorings may be added afterward.<br><b>Old Tom:</b> a recognized style of gin.<br><b>Genever:</b> the Dutch spirit gin descends from."),
          sec("Genever",
            "Bols Genever is not gin. It is a malt-wine base (more than 50% of the blend), so it is bready and richer, closer to whiskey than to modern juniper-forward gin. It predates gin by over 150 years, and in the 19th century it appeared in roughly a quarter of all published US cocktail recipes.<br><br><b>Tastes:</b> malt bread, juniper, ginger, licorice root.")
        ]
      },
      {
        title: "Gins on Our List",
        sections: [
          sec("Classic Juniper",
            "<b>Tanqueray:</b> only four botanicals, unchanged since 1830. Piney juniper, coriander spice, citrus zest, licorice.<br><br><b>Bombay Sapphire:</b> ten botanicals, extracted by vapor: alcohol vapor rises through a basket of botanicals instead of steeping in the spirit. Citrus peel, juniper, coriander, warm spice."),
          sec("Floral and Fresh",
            "<b>Hendrick's:</b> two different stills make two batches, which are blended, then cucumber and rose essences are added. Cucumber, rose petal, juniper, citrus.<br><br><b>Roku:</b> from Suntory. Six Japanese botanicals, distilled individually: cherry blossom and leaf, two green teas, sanshō pepper and yuzu. Cherry blossom, yuzu, green tea, sanshō pepper."),
          sec("Local and Wild",
            "<b>The Botanist:</b> from the Bruichladdich whisky distillery on Islay. Twenty-two botanicals foraged on the island, including heather, wild mint and meadowsweet, distilled over 17 hours in a still nicknamed “Ugly Betty.”<br><br><b>Gentle Ben:</b> a Texas gin made just outside Houston. Citrus peel, juniper, cardamom, floral."),
          sec("Match the Guest",
            "<b>Classic martini or G&amp;T:</b> Tanqueray.<br><b>Floral and fresh:</b> Hendrick's.<br><b>Citrus and light:</b> Bombay Sapphire.<br><b>Something Japanese:</b> Roku.<br><b>Herbal and adventurous:</b> The Botanist.<br><b>Malty and whiskey-lover:</b> Bols Genever.")
        ]
      }
    ],
    test: [
      q("What flavor must gin mainly taste of?",
        ["Citrus", "Coriander", "Juniper", "Cucumber"], 2),
      q("How many botanicals does Tanqueray use?",
        ["Four", "Ten", "Twenty-two", "Forty"], 0),
      q("How does Bombay Sapphire extract its botanicals?",
        ["Steeping in oak", "Vapor: alcohol vapor passes through a basket of botanicals", "Cold-brewing", "Freezing"], 1),
      q("What is added to Hendrick's after distillation?",
        ["Cucumber and rose essences", "Lemon juice", "Honey", "Green tea"], 0),
      q("Where is The Botanist made?",
        ["London", "Islay, Scotland", "Kyoto", "Houston"], 1),
      q("What is Bols Genever?",
        ["A juniper-forward London dry gin", "A malty Dutch spirit that gin descends from", "A Japanese gin", "A flavored vodka"], 1),
      q("What is distinctive about Roku?",
        ["It is aged in oak", "It uses six Japanese botanicals, including cherry blossom and yuzu", "It is made in Texas", "It uses only juniper"], 1)
    ]
  };

  /* COCKTAILS · Golden "B" */
  const goldenB = {
    id: "tc-2026-11-w4-cocktail",
    title: "Golden “B”: Selling It With Words",
    category: "Bar",
    chapters: [
      {
        title: "Selling the Golden “B”",
        sections: [
          sec("The Build",
            "1.5 oz Maker's Mark Bourbon<br>1 oz lemon juice<br>0.75 oz Gold Glitter Honeycomb Syrup<br>2 oz sparkling wine<br><br>The first three are shaken with ice and strained into a martini glass, then topped with sparkling wine. Garnished with a dehydrated lemon wheel and a gold sugar stripe.<br><br>The Gold Glitter Honeycomb Syrup is our house prep: honeycomb syrup whisked with edible gold luster dust. Maker's Mark is 70% corn, 16% red winter wheat and 14% malted barley, so it drinks soft: caramel, vanilla, honeyed bread."),
          sec("Words That Sell",
            "Use the five senses, one word each:<br><br><b>Look:</b> golden, shimmering, effervescent, gold-striped<br><b>Aroma:</b> honey, fresh lemon, vanilla<br><b>Texture:</b> bubbly, silky, light<br><b>Taste:</b> honeyed, bright, tart-sweet, smooth bourbon<br><b>Finish:</b> clean, crisp, a lingering honey note"),
          sec("Flat vs. Painted",
            "<b>Flat:</b> “It's a bourbon sour with champagne. It's really good.”<br><br><b>Painted:</b> “It's a bourbon sour with a celebration on top. Maker's Mark, lemon and a house honeycomb syrup with real gold in it, shaken and topped with sparkling wine, so it's honeyed, bright and bubbly with a smooth finish.”",
            "For a celebratory, bourbon-curious guest who wants something festive.", "Best for"),
          sec("The Sour Story",
            "A sour is a spirit, citrus and sugar, shaken. A whiskey sour uses bourbon or rye, lemon and sugar. Jerry Thomas described the sour family in his 1862 book <i>How to Mix Drinks</i>. Add egg white and it's a Boston sour. Float red wine on it and it's a New York sour.<br><br>Most whiskey sours use egg white for texture. The Golden “B” skips it and lightens the drink with sparkling wine instead.")
        ]
      }
    ],
    test: [
      q("Which bourbon is in the Golden “B”?",
        ["Bulleit", "Maker's Mark", "Woodford Reserve", "Jack Daniel's"], 1),
      q("What goes on top of the Golden “B”?",
        ["Egg white foam", "Sparkling wine", "Club soda", "Cream"], 1),
      q("What replaces the egg white used in most whiskey sours?",
        ["Nothing: we use sparkling wine to lighten it", "Heavy cream", "Aquafaba", "Coconut milk"], 0),
      q("Which answer paints the drink instead of calling it “good”?",
        ["“It's a sour. It's good.”", "“It's popular.”", "“Honeyed, bright and bubbly, with a smooth bourbon finish.”", "“It has bourbon in it.”"], 2)
    ]
  };

  /* APPETIZERS · Chicken Fried Lobster */
  const lobster = {
    id: "tc-2026-11-w4-lobster",
    title: "Chicken Fried Lobster: From Prison Food to Luxury",
    category: "Food",
    chapters: [
      {
        title: "Two Stories on One Plate",
        sections: [
          sec("Chicken-Fried",
            "Chicken-fried steak is a steak pounded thin, breaded and fried like fried chicken, served with cream gravy. Its exact origin is unclear. German and Austrian immigrants to 19th-century Texas are often credited with bringing the schnitzel method it resembles. The earliest known use of “chicken-fried steak” is a restaurant ad in the <i>Colorado Springs Gazette</i> on June 19, 1914. The town of Lamesa, Texas, claims to be its birthplace.<br><br>Our dish takes that Texas comfort-food idea and applies it to lobster."),
          sec("Lobster",
            "In colonial New England lobster was so plentiful it was cheap, and it was reportedly fed to prisoners, apprentices and children. Maine's live-lobster boats appeared in the late 1700s, trapping became popular in the mid-1800s, and the first lobster pound was set up in Vinalhaven, Maine, in 1875. By the 1880s diners in Boston and New York were paying for it, and by World War II it was a delicacy.",
            "“Lobster went from a food reportedly given to prisoners to a luxury on the menu.”", "Say it")
        ]
      },
      {
        title: "How We Make It",
        sections: [
          sec("The Lobster",
            "We start with a live Maine lobster, poached for 30 seconds to take the meat out of the shell. The tail is cut into medallions, then breaded: dry mix, egg and half-and-half wash, dry mix again.<br><br>The coating is gluten-free: gluten-free flour, rice flour, cornstarch, xanthan gum and baking powder. The medallions are fried to order until deep golden.<br><br>Contains shellfish, eggs and dairy."),
          sec("The Sauces",
            "<b>Brown butter aioli:</b> Dijon, egg, garlic confit and brown butter, blended while the butter is slowly added until it emulsifies.<br><br><b>Preserved lemon gel:</b> Meyer lemons scored and cured with salt and spices (peppercorn, coriander, bay leaf, star anise, cinnamon) for 15 to 30 days. The skins are boiled with sugar and agar, then blended smooth. Salty, floral, very lemony.",
            "Stag's Leap Chardonnay: baked pear, honeysuckle, toasted brioche.", "Pairs with"),
          sec("Say It at the Table",
            "“It's a live Maine lobster, poached for thirty seconds and then fried like a chicken-fried steak: crisp and golden. It comes with brown butter aioli and a gel made from lemons we cure for a few weeks.”")
        ]
      }
    ],
    test: [
      q("What kind of lobster do we use?",
        ["Frozen langostino", "Live Maine lobster", "Spiny lobster tails", "Canned lobster"], 1),
      q("How long is the lobster poached?",
        ["30 seconds", "5 minutes", "10 minutes", "It isn't poached"], 0),
      q("What is the coating on our lobster?",
        ["Panko", "A gluten-free coating", "A beer batter", "Tempura batter"], 1),
      q("Which allergens are in the dish?",
        ["Shellfish, eggs and dairy", "Peanuts and soy", "Fish only", "No allergens"], 0),
      q("What is the preserved lemon gel made from?",
        ["Lemons cured with salt and spices for 15 to 30 days", "Fresh lemon juice only", "Lemon candy", "Lemon curd"], 0),
      q("Which immigrants are often credited with bringing the schnitzel method to Texas?",
        ["German and Austrian immigrants", "Italian immigrants", "Spanish settlers", "Scottish settlers"], 0)
    ]
  };

  /* ENTRÉES · USDA Prime */
  const prime = {
    id: "tc-2026-11-w4-prime",
    title: "USDA Prime: The Top of the Scale",
    category: "Food",
    chapters: [
      {
        title: "What Prime Means",
        sections: [
          sec("The Three Grades",
            "USDA grades beef Prime, Choice and Select. Prime is the top grade. The main factor separating them is <b>marbling</b>, the flecks of fat within the meat, which adds flavor. Prime must also come from young, healthy cattle.<br><br>USDA grading reports show about 10% of graded beef earned Prime in 2024 and 10.8% in 2025. Some steakhouses cite lower figures, 2% to 5%.",
            "“Prime is the top USDA grade, picked for marbling. Only about one in ten graded cuts earns it.”", "Say it"),
          sec("Prime and Wagyu",
            "Marbling is the line between grades, and Wagyu goes further. Snake River Farms Silver (BMS 4 to 5) has marbling similar to USDA Prime. Its Black (BMS 6 to 8) and Gold (BMS 9 or higher) have more marbling than Prime.")
        ]
      },
      {
        title: "Our Prime Steaks",
        sections: [
          sec("What We Serve",
            "<b>16 oz USDA Prime NY Strip</b> and <b>USDA Prime Porterhouse for Two, 40 oz</b>, both from the Classics section. The Porterhouse includes both the strip and the tenderloin.<br><br>Both are seasoned with salt and pepper and cooked over a live wood fire (post oak, pecan or bourbon wood, guest's choice), then brushed with rendered A5 wagyu fat and served with garlic confit.",
            "Caymus.", "Pairs with"),
          sec("Say It at the Table",
            "“This is USDA Prime, the top grade of American beef, picked for its marbling. We cook it over live post oak or pecan and brush it with rendered A5 wagyu fat right before it comes out.”")
        ]
      }
    ],
    test: [
      q("What is the top USDA beef grade?",
        ["Choice", "Select", "Prime", "Gold"], 2),
      q("What is the main factor that separates Prime from Choice and Select?",
        ["Marbling", "Color of the bone", "Weight of the cut", "The breed of the cow"], 0),
      q("Roughly what share of graded beef earns Prime?",
        ["About 1%", "About 10%", "About 50%", "About 90%"], 1),
      q("How does Snake River Farms Gold compare to USDA Prime?",
        ["Gold has more marbling than Prime", "Gold has less marbling", "They are the same", "Gold isn't graded"], 0),
      q("What does the Porterhouse for Two include?",
        ["Only strip", "Both the strip and the tenderloin", "Only ribeye", "A bone-in filet only"], 1),
      q("What do we brush on our Prime steaks before serving?",
        ["Butter", "Rendered A5 wagyu fat", "Olive oil", "Soy glaze"], 1)
    ]
  };

  /* OTHER (STORYTELLING) · Dragon Roll */
  const dragon = {
    id: "tc-2026-11-w4-dragon",
    title: "Dragon Roll: Four Stories in One Roll",
    category: "Food",
    chapters: [
      {
        title: "The Roll",
        sections: [
          sec("What's in It",
            "Seasoned sushi rice spread on nori, filled with hot shrimp tempura, jumbo lump crab salad and mango, rolled, then topped with avocado. Cut into 8 pieces and finished with spicy mayo, sriracha and sesame seeds.<br><br><b>Crab salad:</b> Maryland blue crab with lemon juice, lemon zest and spicy mayo. Jumbo lump is the largest, most prized grade of blue crab: whole pieces of white meat from the two largest muscles connected to the swimming legs. Mildly sweet and delicate.<br><br>Contains shellfish, eggs, gluten, sesame, soy."),
          sec("Inside-Out",
            "The roll has rice on the outside. This style traces to the California roll, which first appeared in print in 1979. American customers often peeled the seaweed off the traditional roll, so chefs rolled it inside-out. Who invented the California roll is disputed: Ichiro Mashita in Los Angeles and Hidekazu Tojo in Vancouver are both credited.")
        ]
      },
      {
        title: "The Ingredients' Stories",
        sections: [
          sec("Tempura",
            "Tempura isn't originally Japanese. Toward the end of the 16th century, cooks in Nagasaki learned to fry in a flour-and-egg batter from Portuguese missionaries. The word likely comes from the Latin <i>tempora</i>, the Lent and Ember Days when Catholics avoided meat. A similar Portuguese dish, <i>peixinhos da horta</i>, is still eaten today.<br><br>The batter is made with iced water, eggs and soft wheat flour, mixed briefly with chopsticks and left lumpy. Cold and minimal mixing keep it light and crisp. Overmixing makes it doughy."),
          sec("Sriracha",
            "Sriracha is named for Si Racha, a town in Chonburi Province, Thailand. A Si Racha native, La-Orr Suwanprasop, began producing her chili sauce in Bangkok in 1932. The sauce is chili peppers, distilled vinegar, garlic, sugar and salt. The version with the rooster on the bottle is from Huy Fong Foods."),
          sec("Say It at the Table",
            "“It's a roll with shrimp tempura and jumbo lump Maryland blue crab, with mango inside and avocado on top. Tempura was brought to Japan by Portuguese missionaries in the 1500s. The crab is jumbo lump, the biggest, most prized pieces of the blue crab. A little sriracha and spicy mayo on top.”")
        ]
      }
    ],
    test: [
      q("What's inside our Dragon Roll?",
        ["Shrimp tempura, jumbo lump crab salad and mango", "Raw tuna and cucumber", "Eel and cream cheese", "Salmon and avocado"], 0),
      q("What tops the roll?",
        ["Avocado", "Tobiko", "Eel sauce only", "Mango"], 0),
      q("Where does tempura come from?",
        ["Portuguese missionaries brought the frying method to Nagasaki in the late 16th century", "A Tokyo street cart in 1990", "China in the 1200s", "A French chef in 1800"], 0),
      q("What is jumbo lump crab?",
        ["Claw meat", "The largest whole pieces of white meat from the swimming-leg muscles", "Shredded crab", "Imitation crab"], 1),
      q("Where is sriracha named after?",
        ["Si Racha, Thailand", "San Rafael, California", "Siracusa, Italy", "Saigon, Vietnam"], 0),
      q("Why is the roll rolled inside-out?",
        ["It was developed for American customers who peeled the seaweed off", "It is traditional in Osaka", "To make it spicier", "To hide the filling"], 0)
    ]
  };

  return [wine, gins, goldenB, lobster, prime, dragon];
})();
