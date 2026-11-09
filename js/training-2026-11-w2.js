// Prime 131 — Training Calendar: November 2026, Week 2 lessons.
// Loaded before training-2026-11.js, which links these to the calendar.

const TC_2026_11_W2 = (function () {
  const sec = tcSec, q = tcQ;

  /* WINE · Fortunate Son / Far Niente Chardonnay */
  const wine = {
    id: "tc-2026-11-w2-wine",
    title: "Fortunate Son & Far Niente: The Stories Behind the Bottles",
    category: "Wine",
    chapters: [
      {
        title: "Fortunate Son 'The Dreamer'",
        sections: [
          sec("Fortunate Son: From Banker to Napa",
            "Jayson Woodbridge is Canadian-born and worked in investment banking before he turned to winemaking in Napa Valley around 2000. His first big label was Hundred Acre, named for the Winnie-the-Pooh forest his children loved. Fortunate Son is the same rich, layered style at a lower price.<br><br>“The Dreamer” is a Napa Cabernet Sauvignon: black cherry, cassis, vanilla and cedar, full-bodied with big tannins, made to drink now. Same maker as Hundred Acre and our Summer Dreams Sauvignon Blanc. Pairs with the Australian Tomahawk, Ribeye and Porterhouse.<br><br><b>Say it:</b> “This is from Jayson Woodbridge, a Canadian investment banker who moved to Napa and started Hundred Acre, named after the Winnie-the-Pooh forest his kids loved. This is his more approachable label. Black cherry, cassis, vanilla. It's built for a steak.”")
        ]
      },
      {
        title: "Far Niente Chardonnay",
        sections: [
          sec("Far Niente: A Winery Brought Back",
            "John Benson built the Far Niente stone winery in Napa's Oakville in 1885. It was abandoned in 1919, during Prohibition. In 1979 Gil Nickel found it and spent years restoring it. The name is from the Italian “dolce far niente,” the sweetness of doing nothing.<br><br>The winery makes only two wines, Chardonnay and Cabernet Sauvignon, in a French style. Nickel brought Chardonnay budwood back from Burgundy's Maison Louis Latour in 1981. Far Niente skips malolactic fermentation, the step that makes most California Chardonnay soft and buttery, so the wine stays bright and built to age. Winemaker: Nicole Marchesi.<br><br><b>Say it:</b> “This winery was built in 1885, abandoned during Prohibition, and restored in 1979. The name means the sweetness of doing nothing. They skip the step that makes Chardonnay buttery, so it's ripe stone fruit and apple blossom with a mineral edge. It's the Chardonnay for the guest who says they don't like buttery.”")
        ]
      }
    ],
    test: [
      q("Who makes Fortunate Son?",
        ["Gil Nickel", "Jayson Woodbridge", "Ernst Loosen", "Nicole Marchesi"], 1),
      q("Hundred Acre, Woodbridge's first big label, is named for:",
        ["A ranch in Napa", "A hundred-acre vineyard", "The Winnie-the-Pooh forest his children loved", "His hometown in Canada"], 2),
      q("What does “Far Niente” mean?",
        ["Far from the north", "The sweetness of doing nothing", "Fine Napa vintage", "The stone winery"], 1),
      q("Which step does Far Niente skip for its Chardonnay?",
        ["Oak aging", "Fermentation", "Malolactic fermentation", "Filtering"], 2)
    ]
  };

  /* OTHER (BASIC KNOWLEDGE) · Vodkas */
  const vodkas = {
    id: "tc-2026-11-w2-vodkas",
    title: "Vodkas: How Each One Is Made and Tastes",
    category: "Bar",
    chapters: [
      {
        title: "What Makes Vodkas Different",
        sections: [
          sec("The Rule",
            "In the US, vodka must be bottled at 40% ABV (80 proof) or higher and can't be sold as aged. It used to be legally defined as having no distinctive character, aroma or taste. In 2020 the TTB removed that requirement.<br><br>So vodkas differ in three ways: the <b>base ingredient</b>, how it's <b>distilled</b>, and how it's <b>filtered</b>."),
          sec("The Base Ingredient",
            "<b>Wheat:</b> Grey Goose (French wheat): delicate floral, toffee, almond. Absolut (Swedish winter wheat): grain, dried fruit, soft sweetness. Ketel One: wet flint, white pepper, citrus zest.<br><br><b>Corn:</b> Tito's: creamy corn sweetness, round middle, a faint brine.<br><br><b>Rye:</b> Belvedere: vanilla, black pepper, toasted almond. It's a certified Polska Wódka, made only from Polish-grown grain and Polish water.<br><br><b>Rice:</b> Haku: delicate rice sweetness, soft floral, silky. Japanese white rice."),
          sec("Distilling and Filtering",
            "<b>Grey Goose</b> distills once and keeps only about 12% of each run, the “heart.”<br><b>Tito's</b> is distilled six times in copper pot stills, at Texas's first legal distillery.<br><b>Belvedere</b> is distilled four times.<br><b>Ketel One</b> redistills column-distilled wheat spirit through a pot still. “Ketel” is Dutch for pot still.<br><b>Haku</b> is filtered through bamboo charcoal for a silky texture.<br><b>Reyka</b> (Iceland) is distilled in a Carter-Head still with geothermal power, then filtered through lava rock.",
            "More distillations doesn't automatically mean better. Grey Goose distills once.", "Remember"),
          sec("Match the Guest",
            "<b>Soft and silky:</b> Haku.<br><b>Clean, a little sweet:</b> Grey Goose.<br><b>Round and creamy:</b> Tito's.<br><b>Peppery and bold:</b> Belvedere or Ketel One.<br><b>Citrus:</b> Absolut Citron (natural lemon and lime, no added sugar).")
        ]
      }
    ],
    test: [
      q("What is the minimum bottling strength of vodka in the US?",
        ["30% ABV", "35% ABV", "40% ABV", "50% ABV"], 2),
      q("What is Haku vodka made from?",
        ["Potatoes", "Japanese white rice", "French wheat", "Polish rye"], 1),
      q("How many times does Grey Goose distill?",
        ["Once", "Three times", "Six times", "Eleven times"], 0),
      q("How is Tito's distilled?",
        ["Once in a column still", "Six times in copper pot stills", "Four times", "Through lava rock"], 1),
      q("What makes Belvedere a “Polska Wódka”?",
        ["It is aged in oak", "It uses only Polish-grown grain and Polish water", "It is made from potatoes", "It is filtered through bamboo"], 1),
      q("What does “Ketel” mean in Ketel One?",
        ["Wheat", "Winter", "Pot still", "Crystal"], 2),
      q("Which vodka is filtered through lava rock?",
        ["Reyka", "Haku", "Absolut", "Tito's"], 0)
    ]
  };

  /* COCKTAILS · Cosmobelle */
  const cosmobelle = {
    id: "tc-2026-11-w2-cocktail",
    title: "Cosmobelle: Selling It With Words",
    category: "Bar",
    chapters: [
      {
        title: "Selling the Cosmobelle",
        sections: [
          sec("The Build",
            "1.5 oz Absolut Citron<br>0.5 oz Cointreau<br>1.5 oz cranberry juice<br>0.5 oz lime juice<br>0.5 oz Sweetbird Dragon Fruit &amp; Papaya Syrup<br><br>Shaken with ice, strained into a coupe. Garnished with dehydrated dragon fruit and a gold sugar half rim.<br><br>Absolut Citron is flavored with natural lemon and lime and has no added sugar. Cointreau is an orange liqueur."),
          sec("Words That Sell",
            "Use the five senses, one word each:<br><br><b>Look:</b> rosy, jewel-toned, gold-rimmed, dragon-fruit garnish<br><b>Aroma:</b> lime zest, orange peel, bright citrus<br><b>Texture:</b> crisp, cold, silky<br><b>Taste:</b> sweet-tart, tangy, citrus-bright, tropical<br><b>Finish:</b> clean, crisp, lingering tart"),
          sec("Flat vs. Painted",
            "<b>Flat:</b> “It's a Cosmo with dragon fruit. It's really good.”<br><br><b>Painted:</b> “It's a fresh take on the Cosmopolitan. Citron vodka, Cointreau and cranberry, with dragon fruit and papaya syrup so it's tangy up front and tropical underneath. Crisp and sweet-tart, with a gold-sugar rim.”",
            "For the guest who loved Cosmos in their heyday and wants a fresher take.", "Best for"),
          sec("The Cosmo Story",
            "Nobody agrees who invented the Cosmopolitan. Dale DeGroff says a woman named Cheryl Cook supposedly created it in Miami. Toby Cecchini says he made the modern version in 1988 at The Odeon in New York, using fresh lime juice, Cointreau, Absolut Citron and cranberry juice. DeGroff says he didn't invent it, but he changed the version he found in San Francisco in the early 1990s: fresh lime, Cointreau, Absolut Citron and an orange peel on top.<br><br>Ours keeps that backbone (Citron, Cointreau, lime, cranberry) and adds dragon fruit and papaya.")
        ]
      }
    ],
    test: [
      q("Which vodka is in the Cosmobelle?",
        ["Haku", "Tito's", "Absolut Citron", "Grey Goose"], 2),
      q("What ingredient updates the classic Cosmopolitan in the Cosmobelle?",
        ["Dragon fruit and papaya syrup", "Honey syrup", "Egg white", "Lychee purée"], 0),
      q("Who invented the Cosmopolitan?",
        ["Dick Bradsell, in 1983", "Nobody agrees: Cheryl Cook in Miami and Toby Cecchini in New York in 1988 are two claims", "Harry Craddock, in 1930", "Absolut's founder"], 1),
      q("Which answer paints the drink instead of calling it “good”?",
        ["“It's popular.”", "“It's a Cosmo, it's good.”", "“Crisp and sweet-tart, tangy up front and tropical underneath.”", "“It has vodka in it.”"], 2)
    ]
  };

  /* APPETIZERS · Tuna Tartare */
  const tartare = {
    id: "tc-2026-11-w2-tartare",
    title: "Tuna Tartare: A Last-Minute Substitute",
    category: "Food",
    chapters: [
      {
        title: "Where It Came From",
        sections: [
          sec("Los Angeles, 1984",
            "Tuna tartare was invented as a substitute. In 1984, Shigefumi Tachibe was a chef at Chaya Brasserie in Los Angeles, and the prix-fixe menu included steak tartare. Customers asked for something lighter during the low-fat craze. Tachibe noticed the dark red tuna in his kitchen looked like beef and used it instead.<br><br>Diners liked it so much they wanted it on the regular menu. A last-minute fix became a staple of restaurant menus.",
            "“In 1984 a chef in Los Angeles was asked for something lighter than steak tartare. He looked at the tuna in his kitchen and saw beef.”", "Say it"),
          sec("Tartare",
            "Tartare means raw and finely diced. With tuna it's about knife work: the fish is cut by hand into small, even pieces and kept cold. Ours uses yellowfin, which has the deep red color that made the original swap work.")
        ]
      },
      {
        title: "What's on Our Plate",
        sections: [
          sec("The Build",
            "<b>The tuna:</b> hand-diced yellowfin mixed with olive oil, chives, salt and pepper.<br><br><b>The base:</b> avocado purée (avocado, yuzu juice, olive oil, black pepper), piped first, with the tuna built over it in a ring mold.<br><br><b>The dressing:</b> sesame garlic soy (garlic, mirin, sesame oil, soy sauce, yuzu juice, rice vinegar).<br><br><b>The finish:</b> julienned red radish, wakamomo (young peach in syrup), and taro chips on the side.",
            "Gluten allergy: we swap the dressing for ponzu.", "Allergy"),
          sec("Say It at the Table",
            "“It's yellowfin tuna cut by hand and built over a yuzu avocado purée, with a sesame-garlic soy dressing, and young peach for a little sweetness. Crisp taro chips on the side. The first tuna tartare was made in Los Angeles in 1984 when a chef swapped it in for steak tartare.”",
            "Nicolas Feuillatte Rosé Brut: raspberry, strawberry and a chalky mineral note.", "Pairs with")
        ]
      }
    ],
    test: [
      q("Who is credited with inventing tuna tartare?",
        ["Wolfgang Puck", "Shigefumi Tachibe, at Chaya Brasserie in Los Angeles", "Nobu Matsuhisa", "Fergus Henderson"], 1),
      q("Why was tuna tartare created?",
        ["Customers asked for something lighter than steak tartare", "The restaurant had too much beef", "It was a sushi chef's competition entry", "To use up tuna scraps"], 0),
      q("In what year was it created?",
        ["1964", "1974", "1984", "1994"], 2),
      q("What tuna do we use?",
        ["Bluefin", "Albacore", "Yellowfin", "Skipjack"], 2),
      q("What do we swap the dressing for with a gluten allergy?",
        ["Ponzu", "Plain soy sauce", "Mayonnaise", "Sesame oil"], 0),
      q("Which fruit is on the plate?",
        ["Mango", "Wakamomo (young peach in syrup)", "Lychee", "Yuzu slices"], 1)
    ]
  };

  /* ENTRÉES · American Wagyu */
  const amWagyu = {
    id: "tc-2026-11-w2-amwagyu",
    title: "American Wagyu: Four Bulls and a Long Road",
    category: "Food",
    chapters: [
      {
        title: "How Wagyu Came to America",
        sections: [
          sec("1976: Four Bulls",
            "In 1976, Morris Whitney imported four Wagyu bulls to Colorado: Mazda, Mt. Fuji, Rueshaw and Judo. In 1979 they were sold to Dennis Wendt, a veterinarian in Georgetown, Texas, who crossbred them with Angus and Hereford cows. All four bulls had died by 1990.<br><br>The first live Wagyu arrived from Japan in July 1993: three females and two bulls. In 1997 Japan banned Wagyu exports. All the Wagyu genetics outside Japan trace back to about 221 animals."),
          sec("What “American Wagyu” Means",
            "Most American Wagyu is a cross between Japanese Wagyu and American cattle, usually Angus or Hereford. By USDA rules, one parent must be full-blood or purebred (at least 15/16 Wagyu). That means beef labeled “Wagyu” can be anywhere from about 47% to 100% Wagyu.",
            "This is why the grade and the farm matter.", "Why it matters")
        ]
      },
      {
        title: "Snake River Farms and Our Steaks",
        sections: [
          sec("Snake River Farms",
            "Snake River Farms began in 1968 in American Falls, Idaho, as a family business, the Rebholtz family's Agri Beef. It raises American Wagyu on family ranches and processes it in its own facilities in Washington and Idaho.<br><br>It grades its beef on the 12-point Japanese Beef Marbling Score (BMS):<br><b>Silver:</b> BMS 4 to 5, marbling similar to USDA Prime.<br><b>Black:</b> BMS 6 to 8, more marbling than Prime.<br><b>Gold:</b> BMS 9 or higher, the most marbling they offer.<br><br>Ours is <b>Gold</b>."),
          sec("What We Serve",
            "8 oz tenderloin, 12 oz NY strip and the ribeye, all Snake River Farms Gold. Cooked over a live wood fire (post oak, pecan or bourbon wood, guest's choice), brushed with rendered A5 wagyu fat, and served with garlic confit.<br><br><b>Tenderloin:</b> the most tender.<br><b>Ribeye:</b> well-marbled, rich.<br><b>NY strip:</b> a cut from the short loin.",
            "Tenderloin with Trefethen 'Eshcol'. Ribeye with Austin Hope.", "Pairs with"),
          sec("Say It at the Table",
            "“It's American Wagyu from Snake River Farms in Idaho, their Gold grade, the highest marbling they offer. The breed came to the US in 1976 with four bulls. We cook it over live post oak or pecan and finish it with rendered A5 wagyu fat.”")
        ]
      }
    ],
    test: [
      q("How many Wagyu bulls were imported to Colorado in 1976?",
        ["Two", "Four", "Ten", "Thirty"], 1),
      q("What is “American Wagyu”?",
        ["Wagyu raised in Japan and shipped here", "A cross between Japanese Wagyu and American cattle", "A type of Angus", "A grade above A5"], 1),
      q("In what year did Japan ban Wagyu exports?",
        ["1976", "1985", "1997", "2010"], 2),
      q("Where was Snake River Farms founded?",
        ["Amarillo, Texas", "American Falls, Idaho", "Billings, Montana", "Omaha, Nebraska"], 1),
      q("Which Snake River Farms grade do we serve?",
        ["Silver", "Black", "Gold", "Platinum"], 2),
      q("What is brushed on our steaks right before serving?",
        ["Butter", "Rendered A5 wagyu fat", "Beef tallow from Idaho", "Olive oil"], 1)
    ]
  };

  /* OTHER (STORYTELLING) · Omakase Platters */
  const omakase = {
    id: "tc-2026-11-w2-omakase",
    title: "Omakase Platter: “I'll Leave It Up to You”",
    category: "Food",
    chapters: [
      {
        title: "What Omakase Means",
        sections: [
          sec("Trust the Chef",
            "<i>Omakase</i> (お任せ) means “I'll leave it up to you.” It comes from the verb <i>makaseru</i>, “to entrust.” Diners don't order. The chef chooses the day's best seasonal ingredients.<br><br>A traditional omakase is usually 10 to 20 courses at a counter, moving from lighter to more complex, with the chef watching reactions and adjusting what comes next.<br><br>Ours is the platter version: <b>14 pieces of sashimi, 14 pieces of nigiri and three specialty rolls of the guest's choice</b>, the chef's highest-end selection.")
        ]
      },
      {
        title: "What's on the Platter",
        sections: [
          sec("The Pieces",
            "<b>Uni:</b> sea urchin. The part we eat is its reproductive organ, not its eggs. Rich, buttery, salty-sweet. Chefs call it “sea butter.” The top Japanese grade is gokujo.<br><br><b>Botan ebi:</b> spot prawn (<i>Pandalus nipponensis</i>), served raw. “Botan” means peony, for its pink color and premium status. Translucent, sweet and firm. Often the head is fried and served after.<br><br><b>Shima aji:</b> striped jack.<br><b>Hotate:</b> scallop.<br><b>Ebi:</b> tiger prawn.<br><b>Hamachi:</b> yellowtail.<br><b>Unagi:</b> freshwater eel.<br><b>Tobiko:</b> flying fish roe.<br><b>Tamago:</b> sweet egg.<br><b>Uzura:</b> quail egg."),
          sec("Say It at the Table",
            "“Omakase means ‘I'll leave it up to you.’ This is the chef's choice: 14 pieces of sashimi, 14 pieces of nigiri, and three rolls you pick. You'll see uni, which is rich like sea butter, and botan ebi, a sweet spot prawn named for the peony.”",
            "Yoshi No Gawa 'Winter Warrior': a junmai ginjo sake from Niigata, melon and honeydew, clean and light.", "Pairs with")
        ]
      }
    ],
    test: [
      q("What does “omakase” mean?",
        ["Chef's special", "I'll leave it up to you", "Fresh from the sea", "Taste of the season"], 1),
      q("What is on our omakase platter?",
        ["8 sashimi, 8 nigiri and 1 roll", "14 sashimi, 14 nigiri and 3 specialty rolls", "A tasting of 20 courses", "Only nigiri"], 1),
      q("What is “botan ebi”?",
        ["Tiger prawn", "Spot prawn, named for the peony", "Scallop", "Sea urchin"], 1),
      q("What part of the sea urchin is uni?",
        ["The shell", "The reproductive organ", "The spine", "The blood"], 1),
      q("What is tobiko?",
        ["Tuna belly", "Quail egg", "Flying fish roe", "Sweet egg"], 2),
      q("Who chooses the pieces on an omakase?",
        ["The guest", "The server", "The chef", "The manager"], 2)
    ]
  };

  return [wine, vodkas, cosmobelle, tartare, amWagyu, omakase];
})();
