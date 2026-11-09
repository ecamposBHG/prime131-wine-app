// Prime 131 — Training Calendar: November 2026, Week 3 lessons.
// Loaded before training-2026-11.js, which links these to the calendar.

const TC_2026_11_W3 = (function () {
  const sec = tcSec, q = tcQ;

  /* WINE · Penner-Ash Pinot Noir / Dr. Loosen Riesling */
  const wine = {
    id: "tc-2026-11-w3-wine",
    title: "Penner-Ash & Dr. Loosen: The Stories Behind the Bottles",
    category: "Wine",
    chapters: [
      {
        title: "Penner-Ash Pinot Noir",
        sections: [
          sec("Penner-Ash: One of Oregon's First",
            "Lynn Penner-Ash joined Rex Hill Vineyards in Oregon in 1988, one of the state's first female winemakers, and rose to president and COO. In 1998 she and her husband Ron started their own winery. Their first vintage was 125 cases. Jackson Family Wines acquired it in 2016, and Kate Ayres now leads day-to-day winemaking.<br><br>This Pinot Noir blends fruit from six Willamette Valley sub-regions in one wine: strawberry jam, ripe cherry, brown sugar and peppercorn. The 2022 vintage ranked #19 on Wine Spectator's Top 100 Wines of the Year.<br><br><b>Say it:</b> “Lynn Penner-Ash was one of the first female winemakers in Oregon, starting in 1988. She started her own winery in 1998 with 125 cases. This blends six different parts of the Willamette Valley. Strawberry jam, ripe cherry, a little brown sugar. Lush and rich for a Pinot.”")
        ]
      },
      {
        title: "Dr. Loosen Riesling",
        sections: [
          sec("Dr. Loosen: 200 Years of Slate",
            "The Loosen family has owned this estate in Germany's Mosel for over 200 years. Ernst Loosen took over in 1988 and made it a world-class name. The vineyard, Ürziger Würzgarten, means “spice garden,” named for its iron-rich red slate soil. Many of the vines are over 120 years old and ungrafted, because phylloxera can't survive in the Mosel's slate soils.<br><br>The wine ferments spontaneously in old wooden casks and rests on its full lees for at least 12 months. This is a Spätlese: off-dry, with apricot, ginger and citrus zest. The sugar is there to balance heat, not to be dessert.<br><br><b>Say it:</b> “This comes from a German family that's made wine for over 200 years, from a vineyard whose name means ‘spice garden.’ Some of the vines are over 120 years old. It's a touch sweet, with apricot and ginger. It's made for spicy food.”",
            "Miso Cod, Spicy Salmon Roll, Crunchy Spicy Tuna Roll.", "Pairs with")
        ]
      }
    ],
    test: [
      q("How many Willamette Valley sub-regions does the Penner-Ash Pinot Noir blend?",
        ["Two", "Four", "Six", "Twelve"], 2),
      q("How many cases was Penner-Ash's first vintage?",
        ["25", "125", "1,250", "12,500"], 1),
      q("What does “Würzgarten” mean?",
        ["Wine garden", "Spice garden", "Slate garden", "Old garden"], 1),
      q("Why are many of Dr. Loosen's vines ungrafted?",
        ["Phylloxera can't survive in the Mosel's slate soils", "They are too young to graft", "Grafting is illegal in Germany", "They were imported from France"], 0)
    ]
  };

  /* OTHER (BASIC KNOWLEDGE) · Tequilas */
  const tequilas = {
    id: "tc-2026-11-w3-tequilas",
    title: "Tequilas: How Each One Is Made and Tastes",
    category: "Bar",
    chapters: [
      {
        title: "The Rules",
        sections: [
          sec("What Makes It Tequila",
            "Tequila must be made from blue Weber agave in a protected region: all of Jalisco and parts of Guanajuato, Michoacán, Nayarit and Tamaulipas. The rules are set by the NOM and enforced by the Consejo Regulador del Tequila (CRT).<br><br><b>100% agave:</b> only blue agave sugars.<br><b>Mixto:</b> at least 51% agave sugars, and up to 49% can come from other sources.<br><br>Always look for “100% agave.”")
        ]
      },
      {
        title: "Aging and Flavor",
        sections: [
          sec("The Aging Ladder",
            "<b>Blanco:</b> unaged or up to 60 days in oak. Fresh agave, citrus, white pepper. <i>Don Julio Blanco is rested 30 days.</i><br><br><b>Reposado:</b> at least 2 months in oak. Vanilla, caramel, a little oak. <i>Patrón Reposado: at least 4 months in American whiskey barrels. Don Julio Reposado: 8 months.</i><br><br><b>Añejo:</b> at least 1 year in oak barrels of 600 liters or less. Dried fruit, toasted oak, baking spice. <i>Código Añejo: 18 months in French oak that held Napa Cabernet.</i><br><br><b>Extra añejo:</b> at least 3 years. <i>José Cuervo Reserva de la Familia (1995) was the first extra añejo.</i>"),
          sec("Cristalino",
            "A cristalino is an aged tequila, such as an añejo, run through charcoal filtration to remove the color. It looks like a blanco and tastes like an aged tequila. <i>Patrón Cristalino.</i>"),
          sec("How Makers Differ",
            "<b>Crushing:</b> El Tesoro still uses the tahona, a stone wheel, a centuries-old method most producers dropped for roller mills.<br><b>Distilling:</b> Patrón El Cielo is distilled four times. Most silvers stop at two.<br><b>Cooking and fermenting:</b> Casamigos slow-roasts its agave and ferments it longer.<br><b>Terroir:</b> Ocho names each blanco for one field and one harvest year.<br><b>Barrels:</b> Clase Azul Reposado ages in whiskey, Cognac and sherry barrels."),
          sec("Match the Guest",
            "<b>Fresh and peppery:</b> a blanco (Don Julio Blanco, Código Blanco).<br><b>Soft and sweet:</b> a reposado (Patrón, Don Julio, Casamigos).<br><b>Rich and sippable:</b> an añejo (El Tesoro, Código, Patrón).<br><b>Collector's pour:</b> Reserva de la Familia.")
        ]
      }
    ],
    test: [
      q("What agave is tequila made from?",
        ["Espadín", "Blue Weber", "Tobalá", "Maguey"], 1),
      q("What is a mixto?",
        ["A tequila blended with mezcal", "A tequila with at least 51% agave sugars, and up to 49% from other sources", "A tequila aged in sherry casks", "A flavored tequila"], 1),
      q("What is the minimum age of a reposado?",
        ["No aging", "2 months", "1 year", "3 years"], 1),
      q("What is the minimum age of an añejo?",
        ["2 months", "6 months", "1 year", "3 years"], 2),
      q("What is a cristalino?",
        ["A tequila made with crystal water", "An aged tequila filtered to remove its color", "A double-distilled blanco", "A tequila aged in glass"], 1),
      q("What is the tahona?",
        ["A copper still", "A stone wheel used to crush cooked agave", "A type of oak barrel", "A blue agave variety"], 1),
      q("Which was the first extra añejo?",
        ["Don Julio 1942", "Patrón El Alto", "José Cuervo Reserva de la Familia", "Clase Azul"], 2)
    ]
  };

  /* COCKTAILS · Lycheetini */
  const lycheetini = {
    id: "tc-2026-11-w3-cocktail",
    title: "Lycheetini: Selling It With Words",
    category: "Bar",
    chapters: [
      {
        title: "Selling the Lycheetini",
        sections: [
          sec("The Build",
            "2 oz Haku Vodka<br>1 oz Reàl Lychee<br>1 oz lemon juice<br><br>Shaken with ice, strained into a martini glass, garnished with popping boba pearls.<br><br>Haku is made from Japanese white rice and filtered through bamboo charcoal, so it's silky for a vodka."),
          sec("Words That Sell",
            "Use the five senses, one word each:<br><br><b>Look:</b> pale, clear, pearl-topped<br><b>Aroma:</b> floral, perfumed, fresh<br><b>Texture:</b> silky, light, a pop from the pearls<br><b>Taste:</b> lychee-sweet, citrus-bright, delicate, juicy<br><b>Finish:</b> clean, crisp, a lingering floral note"),
          sec("Flat vs. Painted",
            "<b>Flat:</b> “It's a lychee martini. It's really good.”<br><br><b>Painted:</b> “Haku is a Japanese rice vodka filtered through bamboo charcoal, so it's silky. We shake it with lychee and lemon, so it's floral and juicy with a bright citrus finish. It comes with popping boba pearls on top.”",
            "For the guest who wants something playful that doesn't taste boozy.", "Best for"),
          sec("The Story",
            "Lychee has been cultivated in southern China for thousands of years, with records dating to the second century BC. During the Tang dynasty, fast horse relays carried fresh lychees to the imperial court. The part we eat is an aril, a fleshy layer around the seed. It tastes floral and sweet.<br><br>Popping boba is made by spherification: a thin gel skin around fruit juice that bursts when you bite it. It started in Taiwan, believed to be in the 1980s.")
        ]
      }
    ],
    test: [
      q("What is Haku vodka made from?",
        ["Wheat", "Corn", "Japanese white rice", "Potatoes"], 2),
      q("What is Haku filtered through?",
        ["Lava rock", "Bamboo charcoal", "Sand", "Maple charcoal"], 1),
      q("Where did popping boba originate?",
        ["Taiwan", "Thailand", "Italy", "Mexico"], 0),
      q("Which answer paints the drink instead of calling it “good”?",
        ["“It's a martini with lychee.”", "“It's really good.”", "“Silky and floral, juicy lychee with a bright citrus finish and pearls that pop.”", "“It's our most colorful drink.”"], 2)
    ]
  };

  /* APPETIZERS · Dinosaur Bone Marrow */
  const marrow = {
    id: "tc-2026-11-w3-marrow",
    title: "Dinosaur Bone Marrow: The Oldest Fat on the Menu",
    category: "Food",
    chapters: [
      {
        title: "A Very Old Food",
        sections: [
          sec("Why Marrow",
            "Bone marrow is mostly fat. Researchers argue that our early ancestors began acquiring a taste for fat about 4 million years ago, and that the marrow in the long bones of carcasses was a huge calorie package on a calorie-poor landscape. The bone sealed it in like a container, so only a hyena's jaws or a toolmaking ancestor could open it.<br><br>The human brain uses about 20 percent of the body's energy at rest, roughly twice that of other primates. Lean meat alone doesn't supply that. Fat does.",
            "“People have been cracking bones for marrow for a very long time.”", "Say it"),
          sec("London, 1994",
            "St. John opened in October 1994 in a former bacon smokehouse in Smithfield, London. Fergus Henderson was head chef, with Trevor Gulliver and Jon Spiteri. Its philosophy is nose-to-tail eating: using the whole animal, including cuts rarely seen in restaurants.<br><br>Henderson's roast bone marrow and parsley salad, from his book <i>Nose to Tail Eating</i> (1999), is marrow roasted until loose, scraped onto toast with coarse salt and a sharp parsley, shallot and caper salad. It has stayed on the menu unchanged.")
        ]
      },
      {
        title: "Our Plate",
        sections: [
          sec("How We Make It",
            "<b>The marrow:</b> brined in salt water overnight to draw out the blood, then roasted in a hot oven.<br><br><b>The topping:</b> braised, shredded short rib heated in a fermented black garlic sauce, plated on the marrow.<br><br><b>The finish:</b> onion jam, sliced serrano, puffed sorghum, Maldon salt, chervil, with grilled sourdough.<br><br><b>Black garlic</b> is garlic aged for weeks (15 to 90 days) at 140 to 190°F in high humidity. A long, low-temperature browning reaction turns it black and soft, like a date. The sharpness fades, and it picks up notes of licorice, tamarind and molasses."),
          sec("Say It at the Table",
            "“It's a big beef bone, brined overnight and roasted until the marrow is loose. We top it with braised short rib in a black garlic sauce, onion jam and serrano. Scoop it onto the grilled sourdough. Roast marrow with toast and a parsley salad has been a London classic at St. John since 1994.”",
            "Austin Hope or Caymus.", "Pairs with")
        ]
      }
    ],
    test: [
      q("What is bone marrow mostly made of?",
        ["Protein", "Fat", "Water", "Collagen"], 1),
      q("Which London restaurant, opened in 1994, serves a roast bone marrow and parsley salad that never changes on the menu?",
        ["Le Bernardin, New York", "St. John, London", "Noma, Copenhagen", "Chez Panisse, California"], 1),
      q("Why do we brine the marrow overnight?",
        ["To draw out the blood", "To add smoke", "To make it sweeter", "To soften the bone"], 0),
      q("What is on top of our marrow?",
        ["Crab", "Braised short rib", "Foie gras", "Roasted shallots only"], 1),
      q("What is black garlic?",
        ["Garlic soaked in soy sauce", "Garlic aged for weeks at low heat and high humidity", "Burnt garlic", "A wild garlic variety"], 1),
      q("What do we serve with it?",
        ["Grilled sourdough", "Taro chips", "Blinis", "Crackers"], 0)
    ]
  };

  /* ENTRÉES · Australian Wagyu */
  const auWagyu = {
    id: "tc-2026-11-w3-auwagyu",
    title: "Australian Wagyu: Sher Wagyu, Ballan",
    category: "Food",
    chapters: [
      {
        title: "The Farm",
        sections: [
          sec("Ballan, Victoria",
            "Our Australian Wagyu is from Sher Wagyu, run by Nick and Vicki Sher. They bought some of the first Wagyu embryos imported into Australia, and calved the first purebred Wagyu embryo calf in Australia on February 11, 1992. The fullblood herd is based at Ballan, in central Victoria.<br><br>Every Sher Wagyu Fullblood animal is traceable to its Japanese ancestors, DNA-registered, with pedigrees kept on the Australian Wagyu Association database. The herd is based on three main Japanese bloodlines: Tajima, Fujiyoshi and Kedaka."),
          sec("How They're Raised",
            "Cattle are fed on pasture until 18 months, then grain-fed for 400+ days. It is all natural, hormone- and antibiotic-free, and Halal accredited.",
            "Grain-finishing for more than a year is what builds the marbling.", "Why it matters")
        ]
      },
      {
        title: "The Grade and the Plate",
        sections: [
          sec("The Scale",
            "Australia's Ausmeat system scores marbling from 0 to 9. Sher Wagyu cattle above marbling score 9 are graded <b>9+</b>. The Japanese scale goes up to 12.<br><br>That's why a 9+ Australian is the top of its scale, but is not the same thing as A5. Don't compare the numbers across the two systems.",
            "Say: “9+ is the highest grade in Australia's system.”", "Say it"),
          sec("What We Serve",
            "<b>14 oz NY strip:</b> a cut from the short loin, graded 9+.<br><b>32 oz Tomahawk:</b> a bone-in cut from the rib with the full rib bone left on, graded 9+.<br><br>Both are cooked over a live wood fire (post oak, pecan or bourbon wood), brushed with rendered A5 wagyu fat, and served with garlic confit.",
            "NY strip with Austin Hope. Tomahawk with Caymus.", "Pairs with"),
          sec("Say It at the Table",
            "“It's Australian Wagyu from Sher Wagyu in Victoria, graded 9+, the top of Australia's scale. The Shers calved the first purebred Wagyu embryo calf in Australia in 1992, and every animal traces back to its Japanese ancestors. They're on pasture until 18 months, then grain-fed over a year.”")
        ]
      }
    ],
    test: [
      q("Who runs Sher Wagyu?",
        ["Nick and Vicki Sher", "Dennis Wendt", "The Rebholtz family", "Morris Whitney"], 0),
      q("When did the Shers calve the first purebred Wagyu embryo calf in Australia?",
        ["1976", "1992", "2001", "2015"], 1),
      q("Which three Japanese bloodlines is the Sher Wagyu Fullblood herd based on?",
        ["Tajima, Fujiyoshi and Kedaka", "Kobe, Matsusaka and Omi", "Mishima, Hida and Ohmi", "Angus, Hereford and Brahman"], 0),
      q("How long are the cattle grain-fed?",
        ["30 days", "100 days", "400+ days", "Never"], 2),
      q("What does a “9+” mean?",
        ["It is the same as A5", "It is above 9 on Australia's 0 to 9 Ausmeat scale", "It is the highest grade in Japan", "It is a USDA Prime grade"], 1),
      q("Which of our steaks is a bone-in cut with the full rib bone left on?",
        ["14 oz NY strip", "8 oz tenderloin", "32 oz Tomahawk", "12 oz NY strip"], 2)
    ]
  };

  /* OTHER (STORYTELLING) · Basque Cheesecake */
  const cheesecake = {
    id: "tc-2026-11-w3-cheesecake",
    title: "Basque Cheesecake: Burnt on Purpose",
    category: "Food",
    chapters: [
      {
        title: "La Viña",
        sections: [
          sec("San Sebastián",
            "Basque cheesecake comes from La Viña, a family-run bar on Calle 31 de Agosto in the old town of San Sebastián, Spain. It opened in 1959. Santiago “Santi” Rivera took it over in the late 1980s and developed the cheesecake while experimenting with a New York-style recipe. It was sold by the slice by the 1990s.<br><br>It stayed largely a San Sebastián specialty until the 2010s, when social media and visitors made it famous worldwide. Rivera has announced his retirement.",
            "“It started in a family bar in San Sebastián in northern Spain.”", "Say it"),
          sec("Burnt on Purpose",
            "The recipe is five ingredients: cream cheese, eggs, sugar, cream and flour. No crust. It's baked at a high temperature in a parchment-lined pan, which burnishes the top and sides almost like a crust, while the center stays gooey.")
        ]
      },
      {
        title: "Our Plate",
        sections: [
          sec("How It's Plated",
            "The cheesecake goes down first. Three small scoops of olive oil snow and raspberry croustillant go around it, then three dollops of strawberry coulis. It's finished with fresh blueberries, raspberries and blackberries, chocolate curls and a touch of gold powder.",
            "Contains dairy and eggs.", "Allergens"),
          sec("Say It at the Table",
            "“This is a Basque cheesecake. It came from a bar in San Sebastián, Spain, and it's baked at a high heat until it's dark on top and still soft in the middle. There's no crust. Ours comes with strawberry coulis, raspberry crunch and olive oil snow.”")
        ]
      }
    ],
    test: [
      q("Where did Basque cheesecake come from?",
        ["La Viña in San Sebastián, Spain", "A Paris patisserie", "A New York deli", "A Tokyo café"], 0),
      q("Who developed it?",
        ["Santiago “Santi” Rivera", "Fergus Henderson", "Shigefumi Tachibe", "Gil Nickel"], 0),
      q("What is different about a Basque cheesecake?",
        ["It has a graham cracker crust", "It has no crust and is baked at high heat until the top is dark", "It is served frozen", "It is made without eggs"], 1),
      q("What goes on our plate with the cheesecake?",
        ["Olive oil snow and raspberry croustillant", "Whipped cream and caramel", "Vanilla ice cream", "Candied nuts"], 0),
      q("What allergens are in our Basque cheesecake?",
        ["Shellfish and soy", "Dairy and eggs", "Peanuts", "Sesame"], 1),
      q("When did Basque cheesecake become famous worldwide?",
        ["1959", "1970s", "The 2010s", "Last year"], 2)
    ]
  };

  return [wine, tequilas, lycheetini, marrow, auWagyu, cheesecake];
})();
