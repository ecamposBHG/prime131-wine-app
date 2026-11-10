// Prime 131 — Service Enhancement (data).
//
// One skill per week, taught as a short audio lesson plus a slide deck:
//   Learning > Service Enhancement > a week's lesson
//
// Weeks unlock by the device's calendar date and stay unlocked afterward,
// the same rule as the Training Calendar. There are no tests and no progress
// tracking here. A week with `lesson: null` is on the calendar but its
// content hasn't been added yet, so it shows "Coming soon" once it opens.
//
// To add a week's lesson:
//   1. Put the audio in audio/ (mono AAC .m4a at 64 kbps keeps it small).
//   2. Export the deck as slide-01.jpg, slide-02.jpg... (1600px wide) into
//      images/service-enhancement/<monthId>-w<N>/.
//   3. Fill in that week's `lesson` below, with one `alt` line per slide.
// To add a month: push another object onto SERVICE_ENHANCEMENT the same way.
// The render code is in app.js, under "Service Enhancement".

const SERVICE_ENHANCEMENT = [
  {
    id: "2026-11",
    title: "November 2026",
    weeks: [
      {
        n: 1,
        unlocksOn: "2026-11-01",
        lesson: {
          title: "The Storytelling Server",
          audio: {
            src: "audio/2026-11-w1-menu-storytelling.m4a",
            seconds: 296
          },
          slides: {
            dir: "images/service-enhancement/2026-11-w1/",
            alt: [
              "Title slide: The Art of the Upsell, Storytelling in Service. A playbook for the modern conversational guide. A bartender pours a drink into a coupe glass.",
              "Business, like life, is all about how you make people feel. The era of the passive order taker is over. This playbook moves servers from reciting menus to authentic storytelling that drives revenue, lifts the guest experience and increases tips without feeling pushy.",
              "The Order Taker versus the Selling Server, compared on mindset, language and outcome. The order taker waits for requests and asks closed yes or no questions. The selling server guides the guest, uses sensory hooks and open invitations, and shapes preferences toward higher-margin items.",
              "The Neurobiology of a Story. Reciting plain facts activates one brain zone, language processing. Hearing a story engages up to seven brain regions, including image processing and emotion, so the experience stays in memory longer.",
              "Overcoming Sales Resistance, from friction to hospitality. Traditional upselling feels contrived. Storytelling frames recommendations as helpful guidance. Behind-the-scenes details give guests a story to share, turning diners into advocates.",
              "The Three Pillars of a Menu Story: Origin and Access (the where), Development and Craft (the how), and Menu Position and Heritage (the why). Pull one detail from these pillars for every signature dish or beverage.",
              "Pillar 1, Origin and Access. Move beyond labels like local or homemade. Name specific locations, single-source farms and limited availability. Example: replace we use local beef with the specific farm and marbling specification. Photo of a marbled beef cut on a wooden board.",
              "Pillar 2, Development and Craft. Describe how a dish was conceived or the technical labor behind it. Inspiration is the chef's journey or memory. Technique is methods like wood-fire grilling or slow smoking. Time is the hours spent braising, resting or fermenting.",
              "Pillar 3, Heritage and Brand. Express how an item relates to the restaurant's identity through culinary roots, exclusivity and a signature twist. The goal is to show the guest this experience cannot easily be replicated at home.",
              "Programming the Premium Mindset, the first contact. Beverage anchoring: lead with the highest-margin items, signature mocktails and premium cocktails first. The hook, line and sinker: use vivid sensory hooks that paint a picture before steering choices.",
              "Selling With the Senses. Standard menu text compared with a sensory translation, such as the velvety mouthfeel of butter-poached lobster finished with the bright pop of hand-torn basil. Engaging the senses builds anticipation.",
              "The Guided Tour and Grouping Technique. Eliminate yes or no traps by asking what is catching their eye for the table to start. The museum exhibit: walk guests through the menu, noting highlights and backstories. Grouping: bundle complementary items as a curated pair.",
              "Proactive Service as a Sales Tool. Visual cue: a glass at one quarter full is the cue to offer round two, 5 to 7 minutes before mains arrive. The 2-minute rule: check in two minutes after food is delivered and ask what else you can bring.",
              "The Dessert Seed and the Personalized Goodbye. At the plate clear, plant a by-the-way seed about dessert and walk away. At the check drop, turn the goodbye into an invitation to return, using guest notes.",
              "The Ultimate Impact of Storytelling, a 40 percent increase in tips. The guest wins a memorable, personalized experience, the restaurant wins loyalty and bigger checks, and the server wins higher earnings. Stop taking orders. Curate the experience."
            ]
          }
        }
      },
      {
        n: 2,
        unlocksOn: "2026-11-08",
        lesson: {
          title: "Sensory Dish Language",
          audio: {
            src: "audio/2026-11-w2-sensory-dish-language.m4a",
            seconds: 304
          },
          slides: {
            dir: "images/service-enhancement/2026-11-w2/",
            alt: [
              "Title slide: Sensory Dish Language, The 10-Second Masterclass. Moving beyond yes and it's amazing. Servers influence food choice. A well-crafted description helps guests picture a dish, choose with confidence, and sets accurate expectations to prevent disappointment. Treat your descriptions as hospitality.",
              "The Four Stages of Guest Connection. One, Discover: draw on your past wins, what you said when a guest loved a dish, to build the team word bank. Two, Dream: picture the ideal ten seconds that makes the guest say I'll have that. Three, Design: build descriptions rooted in truth, avoid empty hype, and let the guest feel what the dish is like in their mouth. Four, Deliver: commit to specific phrases, execute them during service, and measure the guest's response.",
              "The 10-second formula: Texture plus Preparation plus One Vivid Detail equals the 10-Second Description. Texture is mouthfeel and sets physical expectations, such as buttery-tender, crisp, silky, flaky. Preparation is the method that ties how it is cooked to the physical effect, such as seared hard over charcoal for a deep crust. Vivid Detail is the anchor, the single sensory image the guest will remember, such as miso butter melting over the top.",
              "Responding to the guest who asks what the ribeye is like. The flat answer, yes it comes with a sauce, gives the guest nothing. Reading the menu, grilled ribeye with miso butter, is redundant because the guest could have read it. The sensory approach: it's seared hard over charcoal, so the outside gets a deep crust and the inside stays buttery-tender. The miso butter melts over the top, so every bite is rich, savory, and a little sweet. Rich, accurate, and highly actionable.",
              "Guardrails and pitfalls. Do: start with the absolute truth of the dish, keep it to one or two sentences, check allergen information with the kitchen and never guess, and use your own natural words and favorite dishes. Do not: pile on adjectives, use empty hype like world's best or generic praise like amazing, sound overly rehearsed or robotic, or over-promise beyond what the kitchen delivers.",
              "The Pre-Shift Commitment. Choose one dish this week and build your precise phrase using the 10-second formula. Quick assessment checklist: does it have a specific texture word, does it include a preparation detail tied to an effect, is there one vivid memorable image, and does it completely avoid reading the menu, empty hype and a bare yes or no. Measure the guest's response and revisit at the next pre-shift."
            ]
          }
        }
      },
      { n: 3, unlocksOn: "2026-11-15", lesson: null },
      { n: 4, unlocksOn: "2026-11-22", lesson: null }
    ]
  }
];
