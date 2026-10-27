// Prime 131 — Training Calendar: November 2026.
// Source: "11.26 TrainingCal". Lens this month: By-the-bottle stories (wine),
// basics (spirits), descriptive language (cocktails), storytelling (food).
//
// Week 1 lessons are written. Weeks 2-4 are on the calendar (they unlock by
// date) but have no lessons yet, so they show an honest "coming soon" until
// the lessons are added. To add one: write the lesson below and set the
// item's moduleId to its id.

(function () {
  const sec = (title, body, note, noteLabel) => ({ type: "text", title, body, note: note || null, noteLabel: noteLabel || null });
  const q = (question, options, correctIndex) => ({ question, options, correctIndex });

  /* ============================================================
     WEEK 1 · WINE · Faust / Mount Fishtail Sauvignon Blanc
     ============================================================ */
  const wine = {
    id: "tc-2026-11-w1-wine",
    title: "Faust & Mount Fishtail: The Stories Behind the Bottles",
    category: "Wine",
    chapters: [
      {
        title: "Faust Cabernet Sauvignon",
        sections: [
          sec("Faust: A Deal With Passion",
            "Agustín Huneeus was 26, from Santiago, Chile, with no wine experience, when he joined the group that took over Concha y Toro. He pushed for higher standards, and the winery grew into Chile's largest. In 1971 he left Chile, ran Seagram's wine companies worldwide, and in 1977 moved to California to build his own.<br><br>His wife Valeria found the Rutherford land that became Quintessa in 1990. Faust began in 2002 as a spin-off from it. The vineyard sits in Napa's cool Coombsville corner, on land that was the Lewis Dairy before the family bought it in 1998. The name comes from Goethe's German legend of a man who sells his soul to the devil for youth and passion.<br><br><b>Say it:</b> “Agustín Huneeus took Concha y Toro in Chile from run-down to the biggest winery in the country, then started over in Napa. This is his Cabernet. It's named for the legend of a man who trades his soul for passion, and it's grown on an old dairy farm. Black currant, blackberry, a little toast. It's made for a steak.”")
        ]
      },
      {
        title: "Mount Fishtail Sauvignon Blanc",
        sections: [
          sec("Mount Fishtail: Not the Usual Sauvignon Blanc",
            "The Hengstler family (Konrad and Sigrun, and their sons Conrad and Carlo) planted their first vines in Marlborough, New Zealand, in 1996. They named the winery for Mount Fishtail, the double-peaked mountain in the Richmond Ranges that they can see from the vineyards.<br><br>Most Kiwi Sauvignon Blanc is sharp and tropical. The Hengstlers let theirs rest <b>sur lie</b>, on its spent yeast, for six months. It's the same idea behind Sancerre and white Bordeaux, and it adds a creamy middle.<br><br><b>Say it:</b> “If you usually order a New Zealand Sauvignon Blanc, try this one next. The Hengstler family planted their first vines in 1996 and named the winery after a double-peaked mountain. Same passionfruit and lime you love, but it rests on its yeast for six months, so it's creamy in the middle.”")
        ]
      }
    ],
    test: [
      q("Where does the name “Faust” come from?",
        ["A Napa Valley pioneer", "A German legend about a man who trades his soul for passion", "The street the winery sits on", "The founder's family name"], 1),
      q("Agustín Huneeus helped turn which Chilean winery into the country's largest?",
        ["Montes", "Concha y Toro", "Undurraga", "Santa Rita"], 1),
      q("Mount Fishtail is named after:",
        ["A river in Marlborough", "The founder's boat", "A double-peaked mountain in the Richmond Ranges", "A fish that lives in the Wairau"], 2),
      q("What does “sur lie” mean for Mount Fishtail?",
        ["The wine rests on its spent yeast for six months", "The grapes are dried before pressing", "The wine is aged in new French oak", "The wine is blended with Chardonnay"], 0)
    ]
  };

  /* ============================================================
     WEEK 1 · OTHER (BASIC KNOWLEDGE) · Whiskeys
     ============================================================ */
  const whiskeys = {
    id: "tc-2026-11-w1-whiskeys",
    title: "Whiskeys: How Each One Is Made and Tastes",
    category: "Bar",
    chapters: [
      {
        title: "American Whiskey",
        sections: [
          sec("Bourbon",
            "<b>Made:</b> in the USA from at least 51% corn, aged in new charred oak, with nothing added but water.<br><br><b>Tastes:</b> sweet. Corn gives sweetness, and the new charred oak gives vanilla and caramel."),
          sec("Rye",
            "<b>Made:</b> the same rules as bourbon, but at least 51% of the grain is rye.<br><br><b>Tastes:</b> spicier, peppery and drier than bourbon."),
          sec("Tennessee",
            "<b>Made:</b> follows bourbon's rules, plus one more step: the Lincoln County Process, filtering the whiskey through sugar maple charcoal.<br><br><b>Tastes:</b> in bourbon territory (sweet, vanilla, caramel). The charcoal step is what sets it apart.")
        ]
      },
      {
        title: "Whisky Around the World",
        sections: [
          sec("Scotch",
            "<b>Made:</b> in Scotland, aged at least three years in oak. Single malt is 100% malted barley from one distillery. Blended Scotch mixes single malt and single grain whiskies.<br><br><b>Tastes:</b> depends on peat. Some barley is dried over peat fires, which adds smoke. Islay is famous for the smokiest whiskies (peat smoke, brine, seaweed). Sherry-oak casks push toward dried fruit and ginger."),
          sec("Irish",
            "<b>Made:</b> on the island of Ireland, aged at least three years. Its own style is single pot still: a mash of at least 30% malted and 30% unmalted barley, distilled in copper pot stills at one distillery.<br><br><b>Tastes:</b> usually not smoky. Pot still whiskey is spicy and creamy. Blends like Jameson run to butterscotch and vanilla."),
          sec("Japanese",
            "<b>Made:</b> since 2021, it must be mashed, fermented, distilled and aged in Japan, at least three years in wooden casks. Before that, a bottle could carry the label without being made there.<br><br><b>Tastes:</b> light and fresh. Suntory Toki, built for highballs, is green apple, honeydew, basil and white pepper."),
          sec("Canadian",
            "<b>Made:</b> each grain is distilled and aged separately, then blended: a base whisky (mostly corn or wheat) with a flavoring whisky (rye, barley or corn). Aged at least three years.<br><br><b>Tastes:</b> usually lighter-bodied, because the base whisky dominates. “Rye” on a Canadian label doesn't always mean mostly rye.")
        ]
      }
    ],
    test: [
      q("What is the minimum amount of corn in a bourbon?",
        ["30%", "51%", "75%", "There is no minimum"], 1),
      q("What sets Tennessee whiskey apart from bourbon?",
        ["Aging in sherry casks", "Distilling three times", "Filtering through sugar maple charcoal", "Drying barley over peat"], 2),
      q("What makes rye whiskey taste different from bourbon?",
        ["It's spicier, peppery and drier, because at least 51% of the grain is rye", "It's sweeter, because it uses more corn", "It's smokier, because the grain is dried over peat", "It's lighter, because it's blended from separate grains"], 0),
      q("Which Scotch region is famous for smoky, peaty whiskies?",
        ["Speyside", "Lowland", "Islay", "Highland"], 2),
      q("What makes an Irish whiskey “single pot still”?",
        ["It is distilled five times", "It uses both malted and unmalted barley, distilled in pot stills at one distillery", "It is aged in new charred oak", "It is made only from rye"], 1),
      q("What changed for Japanese whisky in 2021?",
        ["Japan banned exports", "Mizunara oak became mandatory", "Rules were introduced: it must be made and aged in Japan for at least three years", "The minimum age became twelve years"], 2),
      q("Why is Canadian whisky usually lighter-bodied?",
        ["It is aged for under a year", "Each grain is distilled separately and the lighter base whisky dominates the blend", "It is filtered through charcoal", "It is bottled at lower proof than every other whisky"], 1)
    ]
  };

  /* ============================================================
     WEEK 1 · COCKTAILS (DESCRIPTIVE LANGUAGE) · Opulent Espresso Martini
     ============================================================ */
  const cocktail = {
    id: "tc-2026-11-w1-cocktail",
    title: "Opulent Espresso Martini: Selling It With Words",
    category: "Bar",
    chapters: [
      {
        title: "Selling the Opulent Espresso Martini",
        sections: [
          sec("The Build",
            "1.5 oz Vanilla Bean Infused Patrón Reposado<br>0.5 oz Mr. Black Cold Brew Liqueur<br>2.5 oz Berg House Espresso Martini Mix<br><br>Shaken with ice, strained into a coupe, finished with three gold-dusted espresso beans.<br><br>We infuse the Patrón Reposado with vanilla pods on the back bar. Reposado rests in oak, so it's rounder than a blanco. Shaking whips in air, which becomes the velvety foam on top.",
            "Carry it level. The foam is the first thing the guest sees.", "Service tip"),
          sec("Words That Sell",
            "“It's really good” tells a guest nothing. Use the five senses, one word each:<br><br><b>Look:</b> glossy, espresso-dark, velvety foam, gold-dusted<br><b>Aroma:</b> fresh-roasted, dark-roast, vanilla bean, honeyed<br><b>Texture:</b> silky, velvety, creamy, plush, ice cold<br><b>Taste:</b> bittersweet, roasted, rich, smooth, vanilla-sweet<br><b>Finish:</b> lingering, warm, round, clean"),
          sec("Flat vs. Painted",
            "<b>Flat:</b> “It's an espresso martini made with tequila. It's really good.”<br><br><b>Painted:</b> “Our take on the espresso martini. We infuse Patrón Reposado with vanilla beans right on the bar, then shake it hard with cold brew and espresso until it's silky under a velvety foam. Roasted, bittersweet, with vanilla and honey underneath. It's dessert in a glass.”",
            "If a guest hesitates at tequila, lead with the vanilla and the warmth: round and honeyed, not sharp.", "Try this"),
          sec("The Story",
            "Bartender Dick Bradsell created the Espresso Martini around 1983 at the Soho Brasserie in London. A woman asked for a drink that would wake her up and then take her the rest of the way. It started as the Vodka Espresso. Ours swaps the vodka for vanilla-infused Patrón Reposado.<br><br>The three beans come from an Italian tradition and stand for health, wealth and happiness.")
        ]
      }
    ],
    test: [
      q("Where was the Espresso Martini created, and by whom?",
        ["Soho Brasserie in London, by Dick Bradsell", "A Milan café, by Harry Craddock", "A New York hotel bar, by Jerry Thomas", "A Sydney club, by Tom Baker"], 0),
      q("What spirit is the base of our Opulent Espresso Martini?",
        ["Vodka", "Rum", "Vanilla-infused Patrón Reposado", "Bourbon"], 2),
      q("What do the three coffee beans represent?",
        ["Health, wealth and happiness", "Love, luck and life", "Past, present and future", "Strong, sweet and smooth"], 0),
      q("Which answer paints the drink instead of calling it “good”?",
        ["“It's our most popular cocktail.”", "“It's really good, you'll love it.”", "“Silky and bittersweet under a velvety foam, with roasted coffee and vanilla.”", "“It has tequila and coffee in it.”"], 2)
    ]
  };

  /* ============================================================
     WEEK 1 · APPETIZERS (STORYTELLING) · Prime 131 Caviar
     ============================================================ */
  const caviar = {
    id: "tc-2026-11-w1-caviar",
    title: "Prime 131 Caviar: Royal White Sturgeon Roe",
    category: "Food",
    chapters: [
      {
        title: "The Fish and the Pearl",
        sections: [
          sec("The Story in Twenty Seconds",
            "Before a single pearl touches a plate, a sturgeon has spent close to a decade growing it. Caviar is patience you can taste.<br><br><b>Say it:</b> “This is our caviar: one ounce of Royal White sturgeon roe, packed by California Caviar Company. Sturgeon is a giant fish that can reach twenty feet, and a female takes close to a decade to produce her first eggs. We serve it the traditional way, with a mother-of-pearl spoon so nothing touches the pearls but you.”"),
          sec("What's on the Plate",
            "<b>The caviar:</b> 1 oz of Royal White sturgeon roe, packed by California Caviar Company. Salt-cured, with a creamy, buttery flavor and a smooth pop.<br><br><b>The accompaniments:</b> mini blinis, shallots, egg yolk, egg white, mascarpone dressing, chives.<br><br>Blinis and cream are the classic partners for caviar. The point of every one of them is to frame the pearls, not hide them."),
          sec("A Decade in the Making",
            "White sturgeon is native to the Pacific coast of North America, from the Gulf of Alaska down to Monterey. It is enormous: the longest recorded was about 20 feet, and the heaviest authenticated weight is 1,390 pounds.<br><br>Only females carry roe, and they mature slowly. Estimates run from about 7 to 12 years.",
            "Every tin of caviar is years of a fish's life.", "Why it matters")
        ]
      },
      {
        title: "A Story Older Than America",
        sections: [
          sec("From the Tsar's Table to Yours",
            "Caviar reached the aristocratic tables of Greece in the 10th century, after trade between the Byzantine Empire and Kievan Rus' began. For centuries, the center of the world's caviar was the Caspian Sea, with Iran and Russia producing most of it. In Russia the industry grew around the city of Astrakhan, on the Volga.<br><br>The English word comes from the Turkish <i>khāvyār</i>. In Russian, caviar is <i>ikra</i>. The eggs of the small sterlet sturgeon were once reserved for Russian, Iranian and Austrian royalty.",
            "Medieval Russians often ate caviar hot.", "A surprising detail"),
          sec("The Fish That Almost Disappeared",
            "Overfishing brought the white sturgeon to near extinction by the early 1900s. In 2005 the US banned imports of Caspian beluga caviar, and in January 2006 CITES, the international wildlife-trade treaty, backed an embargo on caviar exports.<br><br>That crisis pushed the world toward farming. Today, selling wild white sturgeon or their eggs is prohibited in California. Caviar from farms is legal.",
            "Farmed caviar is how guests can enjoy it without touching wild fish.", "Say it"),
          sec("The Lab That Started It",
            "American caviar farming began in a university lab. Starting in 1979, researchers at UC Davis collected wild white sturgeon from the Sacramento River and worked out how to spawn them reliably.<br><br>In 1993, a farm in Wilton, California, now called Sterling Caviar, produced the first cultured North American sturgeon caviar.")
        ]
      },
      {
        title: "Salt, Spoon and Pop",
        sections: [
          sec("Salt, Time and Touch",
            "<b>Malossol</b> is Russian for “lightly salted”: <i>malo</i> (little) plus <i>sol</i> (salt). Modern caviar is typically cured at about 2.8% to 4% salt. The roe is washed, a fine salt solution is added, and it's briefly chilled so it absorbs only a little. Before refrigeration, heavy salting was the only way to keep it.<br><br>How the roe is harvested matters too. Traditionally the female was killed. Newer methods use a small incision so she keeps producing roe, ultrasound to time the harvest, or gentle massage.",
            "Lightly salted keeps the flavor mild and the texture soft.", "Why it matters"),
          sec("Why Mother-of-Pearl",
            "Caviar is traditionally served with spoons made of inert materials: mother-of-pearl, bone, horn, gold or wood. Metal spoons can give caviar an unwelcome flavor, and silver is especially reactive.<br><br>The spoon is small and shallow, only a few inches long.",
            "Never press the pearls. Let the guest take a spoonful and let them roll.", "Service tip"),
          sec("The Science of the Pop",
            "Each pearl is an egg inside a thin membrane. Good caviar has eggs firm enough to stay intact and delicate enough to melt. The pop is that membrane giving way and releasing the creamy liquid inside.<br><br>Caviar should smell of the ocean, clean brine, and never fishy. White sturgeon is mild: buttery and nutty with a clean mineral finish. Its color runs from golden to black."),
          sec("Words and Pairings",
            "<b>Words:</b> pearls, brine, ocean, buttery, nutty, mineral, silky, pop.<br><br><b>Pour:</b> Brut Champagne is a natural partner. On our list, <b>Telmont Réserve Brut</b> is real Champagne from a small house in France, with honeysuckle, baked apple and a little brioche. Beautiful with the caviar."),
          sec("Questions Guests Ask",
            "<b>“Is it fishy?”</b> Good caviar tastes of the ocean, clean and briny. Not fishy.<br><br><b>“Is it wild?”</b> Wild white sturgeon is protected, and farming is how guests can enjoy caviar today.<br><br><b>“Why the price?”</b> A female spends close to a decade growing her first eggs, and it's cured by hand with very little salt.<br><br><b>“How do I eat it?”</b> Build a bite on a blini, or take it on the spoon alone.")
        ]
      }
    ],
    test: [
      q("About how long does it take a female white sturgeon to produce roe?",
        ["Six months", "Two years", "Close to a decade", "Fifty years"], 2),
      q("What does “malossol” mean?",
        ["Smoked", "Lightly salted", "Aged in oak", "Pressed"], 1),
      q("Why is caviar served with a mother-of-pearl spoon?",
        ["It keeps the caviar cold", "Metal spoons can give caviar an unwelcome flavor", "It is cheaper than silver", "It makes the pearls pop"], 1),
      q("Where did American caviar farming begin?",
        ["A UC Davis lab, starting in 1979", "A Caspian Sea fishery", "A Texas ranch", "A Japanese fish market"], 0),
      q("Which body of water was the center of the world's caviar for centuries?",
        ["The Black Sea", "The Caspian Sea", "The North Sea", "The Baltic Sea"], 1),
      q("What does the pop of good caviar tell you?",
        ["The eggs are firm yet delicate", "The caviar is frozen", "The caviar is very salty", "The caviar is old"], 0),
      q("Which describes our caviar?",
        ["Wild beluga with small silver pearls", "A 1 oz serving of Royal White sturgeon roe, packed by California Caviar Company", "Salmon roe", "Smoked whitefish roe"], 1)
    ]
  };

  /* ============================================================
     WEEK 1 · ENTRÉES (STORYTELLING) · A5 Wagyu
     ============================================================ */
  const a5 = {
    id: "tc-2026-11-w1-a5",
    title: "A5 Wagyu: The Island, the Farmer and the Olive",
    category: "Food",
    chapters: [
      {
        title: "The Cattle and the Grade",
        sections: [
          sec("The Story in Twenty Seconds",
            "A farmer on a small island in Japan refuses to throw away what's left after the olive oil is pressed. He toasts it, feeds it to his cattle, and the beef changes.<br><br><b>Say it:</b> “This is A5 Wagyu from Shodoshima, a small island in Japan's Seto Inland Sea, the first place in Japan to grow olives. A farmer there didn't want to waste the pressed olives left after making oil. He toasted them and fed them to his cattle, and the fat turned lighter and a little nutty. We cook it over live wood. It's the rarest steak on our menu.”"),
          sec("What Wagyu Means",
            "<i>Wa</i> means Japanese and <i>gyu</i> means cattle. There are four Japanese breeds: Japanese Black, Japanese Brown, Japanese Shorthorn and Japanese Polled. Japanese Black accounts for about 98% of the wagyu raised in Japan.<br><br>The beef is known for <i>shimofuri</i>: marbling, often translated “frost falling.” Fine ivory veins of fat run through the muscle."),
          sec("From the Rice Paddy to the Plate",
            "Cattle came to Japan from China around the 2nd century, alongside rice farming. For well over a thousand years they were working animals, plowing fields and providing fertilizer. Eating beef was unthinkable.<br><br>That changed in the Meiji era, after 1868. Native cattle were crossed with foreign breeds, and the crossbreeding stopped in 1910. The four wagyu breeds were officially recognized in 1944, and from the 1950s farmers bred for meat alone. After beef imports opened up in 1991, ranchers pushed marbling to stand apart.",
            "An animal that pulled plows for centuries became the most prized beef in the world.", "Why it matters"),
          sec("One Bull",
            "In 1939, a bull named Tajiri-gō was born on a farm in Hyōgo Prefecture. He sired 1,463 calves in a 15-year life. A 2012 survey found that 99.9% of female Japanese Black cattle in Japan descend from him.<br><br>He is the founding ancestor of Matsusaka, Ōmi and Yonezawa beef. He belonged to the Tajima strain, the line Kobe beef comes from."),
          sec("Decoding A5",
            "<b>The letter is yield</b>: how much usable meat the carcass gives. A is above standard, B is standard, C is below.<br><br><b>The number is quality</b>, from 1 to 5. It's set by four scores: marbling, meat color and brightness, firmness and texture, and fat color and quality. The final grade is the <b>lowest</b> of the four. One weak score caps the whole carcass.<br><br>Marbling is scored on the Beef Marbling Standard (BMS) from 1 to 12. A5 is BMS 8 to 12. Carcasses are graded one by one by the Japan Meat Grading Association.",
            "A5 is a grade. Kobe is a place and a strict set of rules. Not every A5 steak is Kobe.", "Common question")
        ]
      },
      {
        title: "The Island and the Farmer",
        sections: [
          sec("The Island of Olives",
            "Shodoshima sits in the Seto Inland Sea, in Kagawa Prefecture, Japan's smallest prefecture by area. The island covers about 153 square kilometers and is the second largest in the sea.<br><br>It was the first place in Japan to successfully grow olives, a story that began in the early 1900s. It's still called “Olive Island.”"),
          sec("The Farmer Who Hated Waste",
            "Local rancher Masaki Ishii was tired of seeing the island's olive waste thrown out. After oil is pressed from the olives, a pulp is left behind. So he tried feeding it to his black wagyu cattle.<br><br>At first they refused it. The pulp was too astringent. The fix came from drying and toasting it, much like drying a persimmon, which took away the bitterness and caramelized the natural sugars. After years of trial and error, the cattle ate it eagerly. The first olive-fed wagyu reached the market in the early 2010s.",
            "That feed, not just the breed, is what makes this beef different from standard A5.", "Why it matters"),
          sec("What the Olive Does",
            "Olives are rich in oleic acid, the same fat that makes olive oil what it is. The cattle's fat carries more of it, which gives the beef a yellowish, ivory-tinted fat and a slightly nutty taste. Fat rich in oleic acid also melts at a lower temperature, which is why this beef feels like it dissolves.<br><br>The herd is tiny: our kitchen's sheet puts it at about 1,700 cattle on the island."),
          sec("The Fire",
            "We serve a 4oz tenderloin, cooked over the wood of the guest's choice: live post oak, pecan or bourbon wood. It's seasoned with salt, pepper, rendered A5 wagyu fat and garlic confit. Nothing else.<br><br>Because the fat melts so easily, the chef cooks it fast and precisely, and it has to reach the table right away.",
            "Tell the guest why it's coming fast. It sets the expectation for temperature and texture.", "Say it"),
          sec("Words and Objections",
            "<b>Words:</b> velvety, buttery, nutty, clean, sweet, ivory, melts.<br><br><b>“It's expensive.”</b> Sell the share: four ounces is meant to be split. <b>“It's too rich.”</b> The portion is small for a reason: a few bites are the whole experience. <b>“Is it Kobe?”</b> No. Kobe is a specific Tajima strain from Hyōgo with strict rules. This is Sanuki olive beef from Kagawa.")
        ]
      }
    ],
    test: [
      q("In “A5,” what does the 5 stand for?",
        ["The top quality grade", "The weight in pounds", "The number of years of age", "The yield percentage"], 0),
      q("What does the letter in the grade measure?",
        ["Marbling", "Yield: how much usable meat the carcass gives", "Flavor", "The farm it came from"], 1),
      q("Which island does our olive-fed beef come from?",
        ["Okinawa", "Hokkaido", "Shodoshima", "Sado"], 2),
      q("What are the cattle fed?",
        ["Toasted pulp left over from pressing olive oil", "Fresh olives picked from the tree", "Rice straw only", "Tea leaves"], 0),
      q("Which breed is about 98% of wagyu raised in Japan?",
        ["Japanese Brown", "Japanese Shorthorn", "Japanese Black", "Japanese Polled"], 2),
      q("Is A5 the same as Kobe?",
        ["Yes, they are the same", "No, Kobe is a specific place and set of rules", "Only in Texas", "Only for tenderloin"], 1),
      q("Why does the chef cook this beef fast and serve it right away?",
        ["The fat melts at a low temperature", "The beef is very lean", "It cooks slowly", "It must be eaten cold"], 0)
    ]
  };

  /* ============================================================
     WEEK 1 · OTHER (STORYTELLING) · Tuna: Bluefin & Yellowfin
     ============================================================ */
  const tuna = {
    id: "tc-2026-11-w1-tuna",
    title: "Tuna: From Cat Food to Crown Jewel",
    category: "Food",
    chapters: [
      {
        title: "Two Fish",
        sections: [
          sec("The Story in Twenty Seconds",
            "Tuna was once so unloved in Japan it was called an “inferior fish,” and its fattiest belly went to the cats. In January 2026 a single bluefin sold for $3.2 million. Same fish. What changed is us.<br><br><b>Say it:</b> “Our tuna has a wild history. In Japan, the fatty belly was once cat food. Today it's the most prized bite at the sushi counter, and one bluefin just sold for $3.2 million. We serve two kinds: yellowfin, which is lean and clean, and bluefin, which is rich and buttery.”"),
          sec("Two Fish on Our Menu",
            "<b>Yellowfin</b> (<i>Thunnus albacares</i>): named for its yellow fins and finlets. It reaches about 7 feet 10 inches and 440 pounds, and swims up to 47 mph. Often sold as <i>ahi</i>. Lean, with a clean flavor. On our menu: the <b>Tuna Tartare</b>, and the lean <b>Maguro</b> (house, yellowfin or bigeye).<br><br><b>Bluefin:</b> far bigger, over 990 pounds. In Japan it's called <i>hon-maguro</i>, “true tuna.” Its belly is where the fat is. On our menu: <b>Akami</b>, <b>Chutoro</b>, <b>Otoro</b> and the <b>Negi Toro Roll</b>.",
            "Maguro is the general Japanese word for tuna.", "Good to know"),
          sec("The Fish That Crosses an Ocean",
            "Pacific bluefin hatch near Japan. Around their first birthday, many swim more than 5,000 miles across the Pacific to the coast of California, and spend years along the shore from Mexico to Washington. By about age seven they swim home to Japan to spawn.<br><br>Bluefin are warm-blooded, one of the few fish that are. A heat-exchange system in their blood vessels keeps their muscles warm, even in cold water.",
            "Say it: “This fish may have swum to California and back before it got to your plate.”", "Try this")
        ]
      },
      {
        title: "The Rise of Toro",
        sections: [
          sec("From Cat Food to Crown Jewel",
            "Before the 1920s, tuna was called <i>gezakana</i>, “inferior fish.” People buried it for days to mask its bloody, metallic taste. The fatty belly, <i>toro</i>, was eaten only by the poor. It spoiled fast and was nicknamed <i>neko-matagi</i>: even the cat steps over it.<br><br>In the 1830s, a huge catch near Edo, now Tokyo, flooded the market with cheap tuna, and street vendors began selling it as sushi, marinated in soy sauce.<br><br>After World War II, Japan's diet turned Western, with more red meat and richer flavors. Refrigeration and freezing arrived. Demand for bluefin rose in the 1960s.",
            "In 1972, the Harvard Club in New York opened a sushi bar that helped make toro a luxury. In 1983, New York food critic Mimi Sheraton praised the fatty tuna at Takezushi, and America took notice.", "The American chapter"),
          sec("Anatomy of a Bite",
            "<b>Akami</b> (“red”): the leanest cut, from the upper spine where the muscle works hardest. Deep red, iron-rich, a subtle sweetness, almost no fat.<br><br><b>Chutoro</b> (“medium toro”): from the side between the lean back and the fatty belly. Balanced and velvety, slightly buttery.<br><br><b>Otoro</b> (“big toro”): from the lowest part of the belly near the head. About 40% fat. Heavily marbled, it melts on contact.",
            "Generally, the more fat a cut has, the more it's worth.", "Why it matters"),
          sec("Patience on the Cutting Board",
            "Tuna isn't eaten fresh from the water. It's aged for a few days or more so the meat can develop its best flavor, including umami. Winter bluefin is considered the best.<br><br>The most prized comes from the Tsugaru Strait, off the town of Oma in northern Japan. Toro is almost always served raw, though sometimes it's lightly seared, <i>aburi</i>-style, to render some of the fat."),
          sec("The $3.2 Million Fish",
            "In January 2026, at Tokyo's Toyosu fish market, a 535-pound bluefin caught off Oma sold for 510 million yen, about $3.2 million. The buyer was Kiyoshi Kimura, owner of the Sushi Zanmai chain. It broke the 2019 record of 334 million yen, about $2.1 million.<br><br>In 2013, Kimura paid $1.76 million for a 488-pound bluefin at the old Tsukiji market."),
          sec("The Hard Truth About Bluefin",
            "Pacific bluefin has been fished hard. A 2016 estimate said only about 2.6% of the original, pre-fishing population remains. NOAA puts it at about a quarter of its 1950s level. In 2017, fishing nations agreed to rebuild it to 20% of the historic population by 2034.<br><br>Guests ask. Answer honestly: it's prized, and it needs protecting.",
            "If a guest asks where ours comes from, check with the chef. Don't guess.", "Say it")
        ]
      },
      {
        title: "On Our Menu",
        sections: [
          sec("The Tartare Story",
            "Our Tuna Tartare is built like architecture. Yellowfin is finely diced and mixed with olive oil, chives, salt and pepper. A ring mold is set on the bowl, avocado purée with yuzu is piped in, and the tuna goes on top. It's finished with julienne red radish, wakamomo (young peach in syrup) and a sesame garlic soy dressing, with taro chips on the side.<br><br>Gluten allergy? The kitchen swaps the dressing for ponzu.",
            "Describe the build as you set it down: “Avocado at the base, tuna on top, a sesame garlic soy dressing, and young peach for a little sweetness.”", "Say it"),
          sec("Words for the Table",
            "<b>Yellowfin:</b> clean, lean, bright, silky, delicate.<br><b>Akami:</b> deep red, iron-rich, clean, firm.<br><b>Chutoro:</b> velvety, balanced, buttery.<br><b>Otoro:</b> rich, marbled, melts, indulgent.",
            "Match the cut to the guest: lean and clean, or rich and melting.", "Try this")
        ]
      }
    ],
    test: [
      q("Which tuna is used in our Tuna Tartare?",
        ["Bluefin", "Albacore", "Yellowfin", "Skipjack"], 2),
      q("Where does otoro come from on the fish?",
        ["The tail", "The lowest part of the belly near the head", "The upper spine", "The cheek"], 1),
      q("What does “akami” mean?",
        ["Red", "Fatty", "Sweet", "Raw"], 0),
      q("What did Japanese diners historically think of toro, the fatty belly?",
        ["A royal delicacy", "A food for the poor, so unpopular it was nicknamed for cats", "Only for festivals", "A medicine"], 1),
      q("What is unusual about bluefin tuna?",
        ["They are warm-blooded", "They live in rivers", "They have no bones", "They can fly short distances"], 0),
      q("About how far do many young Pacific bluefin swim to reach California?",
        ["500 miles", "5,000 miles", "50 miles", "50,000 miles"], 1),
      q("About how much did the record bluefin sell for in January 2026?",
        ["$3.2 million", "$320,000", "$32,000", "$320 million"], 0)
    ]
  };

  /* ============================================================
     CALENDAR
     ============================================================ */
  defineTrainingMonth({
    id: "2026-11",
    title: "November 2026",
    columns: [
      { id: "wine",       title: "Wine",      lens: "By The Bottle" },
      { id: "spirits",    title: "Other",     lens: "Basic Knowledge" },
      { id: "cocktails",  title: "Cocktails", lens: "Descriptive Language" },
      { id: "appetizers", title: "Appetizers", lens: "Storytelling" },
      { id: "entrees",    title: "Entrées",   lens: "Storytelling" },
      { id: "other",      title: "Other",     lens: "Storytelling" }
    ],
    weeks: [
      { n: 1, unlocksOn: "2026-10-26", items: {
        wine:       { label: "Faust / Mount Fishtail Sauvignon Blanc", moduleId: "tc-2026-11-w1-wine" },
        spirits:    { label: "Whiskeys",                               moduleId: "tc-2026-11-w1-whiskeys" },
        cocktails:  { label: "Opulent Espresso Martini",               moduleId: "tc-2026-11-w1-cocktail" },
        appetizers: { label: "Prime 131 Caviar",                       moduleId: "tc-2026-11-w1-caviar" },
        entrees:    { label: "A5 Wagyu",                               moduleId: "tc-2026-11-w1-a5" },
        other:      { label: "Tuna &ndash; Bluefin &amp; Yellowfin",   moduleId: "tc-2026-11-w1-tuna" }
      } },
      { n: 2, unlocksOn: "2026-11-08", items: {
        wine:       { label: "Fortunate Son / Far Niente Chardonnay",  moduleId: null },
        spirits:    { label: "Vodkas",                                 moduleId: null },
        cocktails:  { label: "Cosmobelle",                             moduleId: null },
        appetizers: { label: "Tuna Tartare",                           moduleId: null },
        entrees:    { label: "American Wagyu",                         moduleId: null },
        other:      { label: "Omakase Platters",                       moduleId: null }
      } },
      { n: 3, unlocksOn: "2026-11-15", items: {
        wine:       { label: "Penner-Ash Pinot Noir / Dr. Loosen Riesling", moduleId: null },
        spirits:    { label: "Tequilas",                               moduleId: null },
        cocktails:  { label: "Lycheetini",                             moduleId: null },
        appetizers: { label: "Dinosaur Bone Marrow",                   moduleId: null },
        entrees:    { label: "Australian Wagyu",                       moduleId: null },
        other:      { label: "Basque Cheesecake",                      moduleId: null }
      } },
      { n: 4, unlocksOn: "2026-11-22", items: {
        wine:       { label: "Viña Ardanza Tempranillo / Domäne Wachau Grüner Veltliner", moduleId: null },
        spirits:    { label: "Gins",                                   moduleId: null },
        cocktails:  { label: "Golden “B”",                             moduleId: null },
        appetizers: { label: "Chicken Fried Lobster",                  moduleId: null },
        entrees:    { label: "USDA Prime",                             moduleId: null },
        other:      { label: "Dragon Roll",                            moduleId: null }
      } }
    ]
  }, [wine, whiskeys, cocktail, caviar, a5, tuna]);
})();
