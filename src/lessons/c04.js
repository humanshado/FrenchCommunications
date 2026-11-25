// Chapitre 4 · Passer une commande (book pp. 18–21)
// Situations: 1. Chez le poissonnier · 2. Au café
// Grammar: utilisation de « pour » · avoir, prendre, aller au présent
// Dialogues and activities are original, built on the book's situations, grammar and vocabulary.
LESSONS.push({
  id: "c04", rubrique: 1, num: 4,
  title: "Placing an order",
  titleFr: "Passer une commande",
  pages: "Book pp. 18–21",
  goals: [
    "Order something in advance: [[Je voudrais commander…]], [[C'est à quel nom ?]]",
    "Answer the key questions with [[pour]]: for whom, for when, for how many people, for how long",
    "Spell your name in French: [[P-E-R-R-I-N]]",
    "Order a meal in a café: [[Vous avez choisi ?]] → [[Je vais prendre…]]",
    "Say how you want your meat cooked: [[saignant]], [[à point]]",
    "Conjugate [[avoir]], [[prendre]] and [[aller]] in the present"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Placing an order at a shop and in a café"],
    ["🧩", "Grammaire", "pour + who / when / how many · avoir, prendre, aller"],
    ["🗂️", "Vocabulaire", "fish and seafood · café drinks, dishes, the menu"],
    ["⭐", "The phrase to learn first", "[[L'addition, s'il vous plaît.]] The bill, please."]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "At the fishmonger's", titleFr: "Chez le poissonnier",
      note: "Madame Perrin orders a seafood platter for a family lunch. Listen to all the questions with [[pour]].",
      scene: "poissonnerie", staff: "Le poissonnier", people: { "Le poissonnier": "m2", "Madame Perrin": "f3" },
      lines: [
        ["Le poissonnier", "Bonjour, madame. Qu'est-ce que je vous sers ?", "Hello, madam. What can I get you?"],
        ["Madame Perrin", "Bonjour. Je voudrais commander un plateau de fruits de mer, s'il vous plaît.", "Hello. I'd like to order a seafood platter, please."],
        ["Le poissonnier", "Bien sûr. C'est pour combien de personnes ?", "Of course. For how many people?"],
        ["Madame Perrin", "Pour huit personnes.", "For eight people."],
        ["Le poissonnier", "Et pour quel jour ?", "And for which day?"],
        ["Madame Perrin", "Pour dimanche midi. C'est pour l'anniversaire de mon mari.", "For Sunday lunchtime. It's for my husband's birthday."],
        ["Le poissonnier", "Nous avons deux plateaux : le classique, à vingt-deux euros par personne, et le royal, à trente-cinq euros.", "We have two platters: the classic, at 22 euros per person, and the royal, at 35 euros."],
        ["Madame Perrin", "Quelle est la différence ?", "What's the difference?"],
        ["Le poissonnier", "Dans le classique, il y a des huîtres, des moules et des crevettes. Dans le royal, vous avez aussi du homard et des langoustines.", "In the classic there are oysters, mussels and prawns. In the royal you also get lobster and langoustines."],
        ["Madame Perrin", "Le classique, ça me semble très bien.", "The classic one seems fine to me."],
        ["Le poissonnier", "C'est à quel nom ?", "What name is it under?"],
        ["Madame Perrin", "Perrin. P-E-R-R-I-N.", "Perrin. P-E-R-R-I-N."],
        ["Le poissonnier", "Parfait. Vous pouvez passer dimanche à partir de dix heures.", "Perfect. You can come by on Sunday from ten o'clock."]
      ],
      glossary: [["commander", "to order"], ["Pour combien de personnes ?", "for how many people?"], ["C'est à quel nom ?", "what name is it under?"], ["à partir de", "from"]]
    },
    {
      id: "d2", n: 2, title: "At the café", titleFr: "Au café",
      note: "Sophie has lunch in a café-brasserie. Notice the verbs [[avoir]], [[prendre]] and [[aller]] everywhere: <i>vous <b>avez</b> choisi, je <b>vais</b> prendre, vous <b>prenez</b> un dessert</i>.",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m4", "Sophie": "f1" },
      lines: [
        ["Le serveur", "Madame, vous avez choisi ?", "Madam, have you decided?"],
        ["Sophie", "Oui, je vais prendre le menu à quinze euros, avec une salade de chèvre chaud en entrée et le steak-frites.", "Yes, I'll have the 15-euro set menu, with a warm goat's cheese salad as a starter and the steak and chips."],
        ["Le serveur", "Votre steak, vous le voulez comment ?", "How would you like your steak?"],
        ["Sophie", "Saignant, s'il vous plaît.", "Rare, please."],
        ["Le serveur", "Et comme boisson ?", "And to drink?"],
        ["Sophie", "Une carafe d'eau et un verre de vin rouge.", "A jug of water and a glass of red wine."],
        ["", "(Plus tard.)", "(Later.)"],
        ["Le serveur", "Ça a été ?", "Was everything all right?"],
        ["Sophie", "Oui, c'était délicieux.", "Yes, it was delicious."],
        ["Le serveur", "Vous prenez un dessert ? Nous avons une tarte Tatin, une crème brûlée, des glaces…", "Will you have a dessert? We have tarte Tatin, crème brûlée, ice creams…"],
        ["Sophie", "Qu'est-ce que vous avez comme glaces ?", "What ice creams do you have?"],
        ["Le serveur", "Vanille, chocolat, fraise, pistache.", "Vanilla, chocolate, strawberry, pistachio."],
        ["Sophie", "Une glace à la pistache, alors. Et un café, s'il vous plaît.", "A pistachio ice cream, then. And a coffee, please."],
        ["Le serveur", "Très bien. Un café pour madame.", "Very good. One coffee for madam."],
        ["Sophie", "Et l'addition, s'il vous plaît.", "And the bill, please."]
      ],
      glossary: [["Vous avez choisi ?", "have you decided?"], ["en entrée", "as a starter"], ["Et comme boisson ?", "and to drink?"], ["Ça a été ?", "was everything OK?"], ["l'addition", "the bill"]]
    }
  ],

  vocab: [
    { t: "le poissonnier", en: "the fishmonger", pic: "🧑‍🍳", cat: "Le poisson", g: "m" },
    { t: "le poisson", en: "fish", pic: "🐟", cat: "Le poisson", g: "m" },
    { t: "la sole", en: "sole", pic: "🐟", cat: "Le poisson", g: "f" },
    { t: "la truite", en: "trout", pic: "🐟", cat: "Le poisson", g: "f" },
    { t: "le saumon", en: "salmon", pic: "🍣", cat: "Le poisson", g: "m" },
    { t: "le thon", en: "tuna", pic: "🐟", cat: "Le poisson", g: "m", pr: "TON (h silent)" },
    { t: "la sardine", en: "sardine", pic: "🐟", cat: "Le poisson", g: "f" },
    { t: "un filet de saumon", en: "a salmon fillet", pic: "🍣", cat: "Le poisson", g: "m" },
    { t: "les coquillages", en: "shellfish (with shells)", pic: "🐚", cat: "Les fruits de mer", g: "pl" },
    { t: "les huîtres", en: "oysters", pic: "🦪", cat: "Les fruits de mer", g: "pl", pr: "lay-ZWEETR" },
    { t: "les moules", en: "mussels", pic: "🦪", cat: "Les fruits de mer", g: "pl" },
    { t: "les crustacés", en: "crustaceans", pic: "🦐", cat: "Les fruits de mer", g: "pl" },
    { t: "les crevettes", en: "prawns, shrimps", pic: "🦐", cat: "Les fruits de mer", g: "pl" },
    { t: "les langoustines", en: "langoustines, scampi", pic: "🦞", cat: "Les fruits de mer", g: "pl" },
    { t: "le crabe", en: "crab", pic: "🦀", cat: "Les fruits de mer", g: "m" },
    { t: "le homard", en: "lobster", pic: "🦞", cat: "Les fruits de mer", g: "m", pr: "o-MAR (h aspiré: le homard, not l')" },
    { t: "un plateau de fruits de mer", en: "a seafood platter", pic: "🍽️", cat: "Les fruits de mer", g: "m" },
    { t: "préparer le poisson", en: "to clean and prepare the fish", pic: "🔪", cat: "Les fruits de mer", note: "= le vider, enlever les arêtes (bones) et parfois couper la tête" },
    { t: "commander", en: "to order", pic: "📝", cat: "Commander" },
    { t: "C'est à quel nom ?", en: "What name is it under?", pic: "🏷️", cat: "Commander" },
    { t: "au nom de…", en: "in the name of…", pic: "🏷️", cat: "Commander" },
    { t: "un café", en: "a coffee (espresso); a café", pic: "☕", cat: "Les boissons", g: "m" },
    { t: "un déca", en: "a decaf", pic: "☕", cat: "Les boissons", g: "m" },
    { t: "un café crème", en: "a white coffee", pic: "☕", cat: "Les boissons", g: "m" },
    { t: "un demi", en: "a small draught beer (25 cl)", pic: "🍺", cat: "Les boissons", g: "m" },
    { t: "une limonade", en: "a lemonade (fizzy)", pic: "🥤", cat: "Les boissons", g: "f" },
    { t: "un jus de fruit", en: "a fruit juice", pic: "🧃", cat: "Les boissons", g: "m" },
    { t: "un verre de vin", en: "a glass of wine", pic: "🍷", cat: "Les boissons", g: "m" },
    { t: "une carafe d'eau", en: "a jug of (free) tap water", pic: "🫗", cat: "Les boissons", g: "f" },
    { t: "un croque-monsieur", en: "a toasted ham and cheese sandwich", pic: "🥪", cat: "Les plats", g: "m" },
    { t: "une omelette au fromage", en: "a cheese omelette", pic: "🍳", cat: "Les plats", g: "f" },
    { t: "une assiette de crudités", en: "a plate of raw vegetables", pic: "🥗", cat: "Les plats", g: "f" },
    { t: "une entrecôte", en: "a rib steak", pic: "🥩", cat: "Les plats", g: "f" },
    { t: "un steak-frites", en: "steak and chips", pic: "🍟", cat: "Les plats", g: "m" },
    { t: "une soupe à l'oignon", en: "an onion soup", pic: "🥣", cat: "Les plats", g: "f" },
    { t: "la carte", en: "the menu (full list)", pic: "📜", cat: "Au restaurant", g: "f" },
    { t: "le menu", en: "the set menu (fixed price)", pic: "📋", cat: "Au restaurant", g: "m" },
    { t: "la carte des vins", en: "the wine list", pic: "🍷", cat: "Au restaurant", g: "f" },
    { t: "une entrée", en: "a starter", pic: "🥗", cat: "Au restaurant", g: "f" },
    { t: "le plat du jour", en: "today's special", pic: "🍲", cat: "Au restaurant", g: "m" },
    { t: "un dessert", en: "a dessert", pic: "🍮", cat: "Au restaurant", g: "m" },
    { t: "l'addition", en: "the bill, the check", pic: "🧾", cat: "Au restaurant", g: "f" },
    { t: "le serveur, la serveuse", en: "the waiter, the waitress", pic: "🤵", cat: "Au restaurant" },
    { t: "saignant", en: "rare (meat)", pic: "🟥", cat: "La cuisson" },
    { t: "à point", en: "medium", pic: "🟫", cat: "La cuisson" },
    { t: "bien cuit", en: "well done", pic: "⬛", cat: "La cuisson" }
  ],

  grammar: [
    {
      id: "g-pour",
      title: "Ordering with [[pour]]: who, when, how many, how long",
      body: [
        "When you order, the shopkeeper asks a series of questions with <b>pour</b>. You answer with <b>pour</b> too, so the question gives you half of the answer.",
        "[[Pour qui ?]] → [[Pour moi.]] · [[Pour quand ?]] → [[Pour jeudi.]] · [[Pour combien de personnes ?]] → [[Pour six personnes.]] · [[Pour combien de temps ?]] → [[Pour quatre jours.]]",
        "<b>pour</b> + infinitive gives a purpose (chapter 3): [[C'est pour quoi faire ?]] → [[C'est pour ouvrir les huîtres.]] And <b>être pour / contre</b> means to be for / against: [[Vous êtes pour ce projet ?]] → [[Non, je suis contre.]]"
      ],
      info: { type: "compare", title: "❓ Question → answer, both with pour", cols: [
        { head: "Pour qui ?", en: "for whom?", color: "#2b59c3", pic: "👨‍👩‍👧", lines: [["Pour moi.", "For me."], ["Pour Michel.", "For Michel."]] },
        { head: "Pour quand ?", en: "for when?", color: "#0f7b6c", pic: "📅", lines: [["Pour jeudi.", "For Thursday."], ["Pour la semaine prochaine.", "For next week."]] },
        { head: "Pour combien… ?", en: "how many / how long?", color: "#b5652b", pic: "🔢", lines: [["Pour six personnes.", "For six people."], ["Pour quatre jours.", "For four days."]] },
        { head: "Pour quoi faire ?", en: "what for?", color: "#a3407e", pic: "🔧", lines: [["Pour jouer.", "To play."], ["Pour ouvrir les huîtres.", "To open the oysters."]] }
      ] },
      widget: {
        type: "combo", label: "The fishmonger's order form · pick a question and an answer type",
        rows: [{ k: "qui", label: "Pour qui ?" }, { k: "quand", label: "Pour quel jour ?" }, { k: "pers", label: "Pour combien de personnes ?" }, { k: "temps", label: "Pour combien de temps ?" }],
        cols: [{ k: "a", label: "🅰️ example 1" }, { k: "b", label: "🅱️ example 2" }],
        out: {
          "qui|a": ["Pour qui ? — Pour ma mère.", "For whom? — For my mother.", "pour + person"], "qui|b": ["C'est pour qui ? — C'est pour nous.", "Who is it for? — It's for us.", "pour + stressed pronoun: moi, toi, lui, elle, nous, vous, eux"],
          "quand|a": ["Pour quel jour ? — Pour samedi.", "For which day? — For Saturday.", "no article before a day"], "quand|b": ["Pour quand ? — Pour la semaine prochaine.", "For when? — For next week.", ""],
          "pers|a": ["Pour combien de personnes ? — Pour huit personnes.", "For how many people? — For eight.", "combien de + noun"], "pers|b": ["Pour combien de personnes ? — Pour deux.", "For how many? — For two.", "you can drop the noun"],
          "temps|a": ["Pour combien de temps ? — Pour quatre jours.", "For how long? — For four days.", ""], "temps|b": ["Pour combien de temps ? — Pour trois semaines.", "For how long? — For three weeks.", ""]
        }
      }
    },
    {
      id: "g-verbes",
      title: "Three essential verbs: [[avoir]], [[prendre]], [[aller]]",
      body: [
        "All three are <b>irregular</b>, and you'll use them in every café, shop and station. Learn them as songs: <i>j'ai, tu as, il a, nous avons, vous avez, ils ont</i>.",
        "<b>avoir</b> (to have): [[Qu'est-ce que vous avez comme glaces ?]] · <b>prendre</b> (to take; to have food or drink): [[Vous prenez un dessert ?]] · <b>aller</b> (to go) + infinitive = what you're about to do: [[Je vais prendre le menu.]]",
        "Watch <b>prendre</b>: one n in <i>prenons, prenez</i>, but <b>two</b> in <i>ils prennent</i>. The verbs <i>apprendre</i> and <i>comprendre</i> follow the same pattern."
      ],
      info: { type: "conj", title: "🧩 Present tense · the red part changes", verbs: [
        { inf: "avoir", en: "to have", forms: ["j'ai", "tu as", "il a", "nous av|ons", "vous av|ez", "ils ont"] },
        { inf: "prendre", en: "to take, to have (food)", forms: ["je prend|s", "tu prend|s", "il prend", "nous pren|ons", "vous pren|ez", "ils prenn|ent"] },
        { inf: "aller", en: "to go", forms: ["je vais", "tu vas", "il va", "nous all|ons", "vous all|ez", "ils vont"] }
      ], note: "In <i>prend</i>, <i>prends</i>, <i>prennent</i> the endings are silent: [[il prend]] and [[ils prennent]] differ only by the <i>n</i> sound at the end." }
    },
    {
      id: "g-menu",
      title: "Reading the menu and ordering your meat",
      body: [
        "A <b>menu</b> in France is a <b>fixed-price set meal</b> (<i>entrée + plat + dessert</i>, or two of the three). The full list of dishes is <b>la carte</b>. [[Je vais prendre le menu à quinze euros.]]",
        "Red meat is served rare by default. The waiter asks [[Vous le voulez comment ?]]: most French people answer [[saignant]] or [[à point]]."
      ],
      info: [
        { type: "card", style: "chalk", title: "Menu à 15 €", sub: "entrée + plat + dessert", rows: [["Entrée", "salade de chèvre chaud", "en entrée : une salade de chèvre chaud"], ["", "ou soupe à l'oignon", "ou une soupe à l'oignon"], ["Plat", "steak-frites", "en plat : un steak-frites"], ["", "ou filet de saumon", "ou un filet de saumon"], ["Dessert", "tarte Tatin", "en dessert : une tarte Tatin"], ["", "ou crème brûlée · glace", "ou une crème brûlée, ou une glace"]], foot: "Café ou déca : 2 € · carafe d'eau offerte" },
        { type: "scale", title: "🥩 La cuisson · how would you like it?", colors: ["#7a0d1c", "#c0392b", "#c97c5d", "#6b4a2b"], ends: ["red inside", "brown inside"], items: [
          { v: 6, fr: "bleu", en: "very rare", pic: "🟥" }, { v: 34, fr: "saignant", en: "rare", pic: "🟥" }, { v: 64, fr: "à point", en: "medium", pic: "🟫" }, { v: 90, fr: "bien cuit", en: "well done", pic: "⬛" }
        ] }
      ]
    },
    {
      id: "g-epeler",
      title: "Spelling your name: [[C'est à quel nom ?]]",
      body: ["To order or book, you'll spell your name. These French letter names surprise English speakers most: tap to hear them."],
      table: { head: ["Lettre", "Name (tap)", "Watch out"], say: 1, rows: [
        ["E", "e", "sounds like “uh”, not “ee”"], ["I", "i", "sounds like English “ee”"], ["G", "gé", "like “zhay”"], ["J", "ji", "like “zhee” (G and J are swapped vs English!)"],
        ["H", "hache", "“ash”"], ["R", "erre", "French throaty r"], ["U", "u", "lips rounded “ü”"], ["W", "double vé", "“double v”"], ["Y", "i grec", "“Greek i”"], ["Q", "ku", "like “kü”"]
      ] },
      after: ["Double letters: <b>RR</b> = [[deux R]] (or <i>R, R</i>). Accents: <b>É</b> = [[E accent aigu]], <b>È</b> = [[E accent grave]]. Try spelling your own name aloud, then: [[Perrin : P, E, deux R, I, N.]]"]
    },
    {
      id: "g-sort",
      title: "Fish, shellfish or crustacean?",
      body: ["One of the book's activities sorts the fishmonger's counter into three families."],
      widget: {
        type: "sort", label: "Sort the fishmonger's counter",
        cols: [{ k: "p", label: "🐟 un poisson", color: "#1f5f8b" }, { k: "c", label: "🐚 des coquillages", color: "#7a6d4b" }, { k: "k", label: "🦀 des crustacés", color: "#c0392b" }],
        items: [{ t: "une sole", k: "p", pic: "🐟" }, { t: "des moules", k: "c", pic: "🦪" }, { t: "du crabe", k: "k", pic: "🦀" }, { t: "une truite", k: "p", pic: "🐟" }, { t: "du thon", k: "p", pic: "🐟" }, { t: "des huîtres", k: "c", pic: "🦪" }, { t: "des crevettes", k: "k", pic: "🦐" }, { t: "du saumon", k: "p", pic: "🍣" }, { t: "un homard", k: "k", pic: "🦞" }, { t: "des langoustines", k: "k", pic: "🦞" }]
      }
    }
  ],

  expressions: [
    { fn: "Placing an order", fnEn: "in a shop", icon: "📝", items: [
      ["Je voudrais commander un gâteau.", "I'd like to order a cake.", "poli", true],
      ["Est-ce que je peux commander pour samedi ?", "Can I order for Saturday?", "std"],
      ["C'est pour huit personnes.", "It's for eight people.", "std"],
      ["Au nom de Perrin.", "Under the name Perrin.", "std", true]
    ] },
    { fn: "The shopkeeper asks", fnEn: "", icon: "🧑‍🍳", items: [
      ["C'est à quel nom ?", "What name is it under?", "std", true],
      ["Pour quel jour ? À quelle heure ?", "For which day? At what time?", "std"],
      ["Pour combien de personnes ?", "For how many people?", "std", true]
    ] },
    { fn: "In a café or restaurant", fnEn: "the waiter", icon: "🤵", items: [
      ["Vous avez choisi ?", "Have you decided?", "std", true],
      ["Et comme boisson ?", "And to drink?", "std", true],
      ["Vous le voulez comment ?", "How would you like it (cooked)?", "std"],
      ["Ça a été ?", "Was everything all right?", "fam"],
      ["Vous prenez un dessert ? un café ?", "Will you have a dessert? a coffee?", "std"]
    ] },
    { fn: "Ordering a meal", fnEn: "the customer", icon: "🍽️", items: [
      ["Je vais prendre le menu à quinze euros.", "I'll have the 15-euro menu.", "std", true],
      ["Je voudrais le plat du jour.", "I'd like today's special.", "poli"],
      ["Qu'est-ce que vous avez comme desserts ?", "What desserts do you have?", "std", true],
      ["Une carafe d'eau, s'il vous plaît.", "A jug of water, please.", "std"],
      ["Oui, c'était très bon.", "Yes, it was very good.", "std"],
      ["L'addition, s'il vous plaît.", "The bill, please.", "std", true]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · a meal in a café", lanes: ["Le serveur", "La cliente"], av: ["m4", "f1"], steps: [
    { s: 0, fr: "Vous avez choisi ?", en: "Have you decided?" },
    { s: 1, fr: "Oui, je vais prendre le menu.", en: "Yes, I'll have the set menu.", alt: ["Je voudrais le plat du jour."] },
    { s: 0, fr: "Votre viande, vous la voulez comment ?", en: "How would you like your meat?" },
    { s: 1, fr: "À point, s'il vous plaît.", en: "Medium, please.", alt: ["Saignant.", "Bien cuit."] },
    { s: 0, fr: "Et comme boisson ?", en: "And to drink?" },
    { s: 1, fr: "Une carafe d'eau, s'il vous plaît.", en: "A jug of water, please." },
    { s: 0, fr: "Ça a été ? Vous prenez un dessert ?", en: "Was it OK? A dessert?" },
    { s: 1, fr: "Non merci. Un café et l'addition, s'il vous plaît.", en: "No thanks. A coffee and the bill, please." }
  ] },

  sounds: {
    intro: "Café French: the <b>h</b> you never hear, the difference between <b>prend</b> and <b>prennent</b>, and the letter names for spelling.",
    letters: [
      { l: "h", name: "always silent", tip: "French h is never pronounced: [[huître]] = <i>weetr</i>, [[homard]] = <i>omar</i>. But some h's (<i>h aspiré</i>) block the link: [[le homard]], not <s>l'homard</s>; [[les homards]] with no z.", ex: ["les huîtres", "le homard", "l'heure", "les haricots"] },
      { l: "-ent", name: "silent verb ending", tip: "In verbs, <b>-ent</b> is completely silent: [[ils prennent]] = <i>eel PREN</i>. Don't say “prenn-ENT”!", ex: ["ils prennent", "elles commandent", "ils mangent"] },
      { l: "prend / prennent", name: "[ɑ̃] vs [ɛn]", tip: "Singular is nasal: [[il prend]] (<i>pran</i>). Plural has a real n and an open e: [[ils prennent]] (<i>prenn</i>).", ex: ["il prend", "ils prennent", "vous prenez"] },
      { l: "ui", name: "[ɥi]", tip: "A quick glide of “ü” into “ee”: [[huit]], [[huître]], [[je suis]], [[cuit]].", ex: ["huit", "les huîtres", "bien cuit", "la truite"] },
      { l: "ill", name: "[j]", tip: "Usually “y”: [[une bouteille]], [[les coquillages]], [[la vanille]] (<i>va-NEE-y</i>). Exceptions: <i>ville, mille</i> (l).", ex: ["les coquillages", "la vanille", "une bouteille"] }
    ],
    pairs: [
      { a: ["il prend", "he takes"], b: ["ils prennent", "they take"], note: "nasal / n heard" },
      { a: ["il a", "he has"], b: ["ils ont", "they have"], note: "a / on (+ liaison z)" },
      { a: ["saignant", "rare"], b: ["cinquante", "fifty"], note: "don't mix them up!" },
      { a: ["le thon", "tuna"], b: ["le temps", "time"], note: "on [ɔ̃] / en [ɑ̃]" }
    ]
  },
  classify: {
    label: "🤵 Le serveur ou le client ?", q: "Who says this in a café?",
    options: ["le serveur", "le client"],
    items: [
      { say: "Ça a été ?", a: 0 }, { say: "Non merci. L'addition, simplement.", a: 1 }, { say: "Vous avez choisi ?", a: 0 }, { say: "Et comme boisson ?", a: 0 },
      { say: "Oui, je vais prendre un steak au poivre.", a: 1 }, { say: "Vous prenez un café ?", a: 0 }, { say: "Oui, très bien.", a: 1 }, { say: "Une carafe d'eau.", a: 1 },
      { say: "Qu'est-ce que vous avez comme glaces ?", a: 1 }, { say: "Votre steak, vous le voulez comment ?", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Madame Perrin achète du poisson.", ok: false, explain: "She orders seafood: un plateau de fruits de mer." },
    { type: "tf", tag: "Dialogue 1", s: "La commande est pour dimanche midi.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Madame Perrin choisit le plateau le moins cher.", ok: true, explain: "le classique (22 €) < le royal (35 €)." },
    { type: "tf", tag: "Dialogue 1", s: "Dans le plateau classique, il y a du homard.", ok: false, explain: "Le homard est dans le plateau royal." },
    { type: "tf", tag: "Dialogue 2", s: "Sophie ne prend pas d'entrée.", ok: false, explain: "une salade de chèvre chaud en entrée." },
    { type: "tf", tag: "Dialogue 2", s: "Elle prend un morceau de bœuf.", ok: true, explain: "un steak = beef." },
    { type: "tf", tag: "Dialogue 2", s: "Elle boit de l'eau minérale.", ok: false, explain: "une carafe d'eau = tap water." },
    { type: "mcq", tag: "Trouvez la question", q: "« — Pour deux personnes. » What was the question?", options: ["Pour quand ?", "Pour combien de personnes ?", "Pour qui ?"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Trouvez la question", q: "« — Pour la semaine prochaine. » What was the question?", options: ["Pour quand ?", "Pour combien de temps ?", "Pour quoi faire ?"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Trouvez la question", q: "« — Pour ouvrir les huîtres. » What was the question?", options: ["C'est pour qui ?", "C'est pour quoi faire ?", "C'est à quel nom ?"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Trouvez la question", q: "« — Pour trois semaines. » What was the question?", options: ["Pour quel jour ?", "Pour combien de temps ?", "Pour combien de personnes ?"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Trouvez la question", q: "« — Au nom de Moreau. » What was the question?", options: ["Vous êtes qui ?", "C'est à quel nom ?", "Comment ça va ?"], answer: 1, sayAnswer: true },
    { type: "fill", tag: "Présent", sentence: "Qu'est-ce que vous ___ comme tartes ?", options: ["avez", "avons", "ont"], answer: 0, explain: "avoir: vous [[avez]]" },
    { type: "fill", tag: "Présent", sentence: "Nous ___ un dessert.", options: ["prenez", "prenons", "prennent"], answer: 1, explain: "prendre: nous [[prenons]]" },
    { type: "fill", tag: "Présent", sentence: "Je ___ prendre du vin.", options: ["va", "vais", "vas"], answer: 1, explain: "aller: je [[vais]]" },
    { type: "fill", tag: "Présent", sentence: "Vous ___ une entrée ?", options: ["prenez", "prends", "prenons"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Ils ___ un plateau royal.", options: ["prend", "prenent", "prennent"], answer: 2, explain: "two n's: [[ils prennent]]" },
    { type: "fill", tag: "Présent", sentence: "Vous ___ au restaurant ce soir ?", options: ["allez", "allons", "vont"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "Stéphane boit de la bière, un ___.", options: ["demi", "déca", "verre de vin"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "Félix mange son steak à ___.", options: ["point", "cuit", "saignant"], answer: 0, explain: "[[à point]] = medium." },
    { type: "type", tag: "Écrivez", q: "Conjugate: nous (avoir)", answers: ["nous avons", "avons"] },
    { type: "type", tag: "Écrivez", q: "Ask for the bill politely.", answers: ["L'addition, s'il vous plaît.", "L'addition s'il vous plaît", "Je voudrais l'addition, s'il vous plaît."] },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous avez choisi ?", options: ["Oui, je vais prendre le plat du jour.", "Oui, j'ai choisi hier.", "Non, l'addition."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "C'est à quel nom ?", options: ["Au nom de Martin.", "C'est pour samedi.", "Pour six personnes."], answer: 0 },
    { type: "order", tag: "Remettez dans l'ordre", lines: true, words: ["— Vous avez choisi ?", "— Oui, je vais prendre un steak au poivre.", "— Et comme boisson ?", "— Une carafe d'eau.", "— Ça a été ?", "— Oui, très bien.", "— Vous prenez un café ?", "— Non merci. L'addition, simplement."] },
    { type: "order", tag: "Construisez", en: "I'd like to order a birthday cake.", words: ["Je", "voudrais", "commander", "un", "gâteau", "d'anniversaire."] }
  ],

  roleplays: [
    { title: "🎂 Ordering a birthday cake", brief: "Order a beautiful birthday cake from the pâtissier: 6 people, Sunday morning. Spell your name.", memo: ["gâteau d'anniversaire", "6 personnes", "dimanche matin", "votre nom"], partner: "f2", you: "m1",
      turns: [
        { them: "Bonjour, monsieur, vous désirez ?", hint: "Say you'd like to order a birthday cake.", you: "Bonjour, je voudrais commander un gâteau d'anniversaire, s'il vous plaît." },
        { them: "Oui, bien sûr. Pour combien de personnes ?", hint: "For six people.", you: "Pour six personnes." },
        { them: "Pour quel jour ?", hint: "For Sunday morning.", you: "Pour dimanche matin." },
        { them: "Au chocolat ou aux fruits ?", hint: "Choose a flavour (chapter 1!).", you: "Au chocolat, s'il vous plaît." },
        { them: "C'est à quel nom ?", hint: "Give your name and spell it.", you: "Au nom de Durand. D-U-R-A-N-D." }
      ] },
    { title: "☕ Lunch in a café", brief: "Order the set menu, a medium steak, water, then a dessert and the bill.", memo: ["menu à 15 €", "steak à point", "carafe d'eau", "dessert ?", "l'addition"], partner: "m4", you: "f1",
      turns: [
        { them: "Bonjour, madame. Vous avez choisi ?", hint: "Order the 15-euro menu with onion soup and steak-frites.", you: "Oui, je vais prendre le menu à quinze euros : une soupe à l'oignon et un steak-frites." },
        { them: "Votre steak, vous le voulez comment ?", hint: "Medium.", you: "À point, s'il vous plaît." },
        { them: "Et comme boisson ?", hint: "Tap water.", you: "Une carafe d'eau, s'il vous plaît." },
        { them: "Ça a été ? Vous prenez un dessert ?", hint: "It was very good. Ask what desserts they have.", you: "Oui, c'était très bon. Qu'est-ce que vous avez comme desserts ?" },
        { them: "Une tarte Tatin, une crème brûlée ou des glaces.", hint: "Choose one, and ask for the bill.", you: "Une crème brûlée, s'il vous plaît. Et l'addition." }
      ] }
  ],

  culture: [
    { icon: "🥩", kind: "Remarque gastronomique", t: "[[saignant]] ou [[à point]] ?", d: "To <i>Vous la voulez comment, votre viande ?</i> French people almost always answer <b>saignant</b> (rare) or <b>à point</b> (medium). Ordering red meat <b>bien cuit</b> (well done) is rare, and the waiter may double-check!" },
    { icon: "🍺", kind: "Langue", t: "[[un demi]]", d: "In a café, <i>un demi</i> is a 25 cl glass of draught beer, not half a litre. <i>Une demi-Bordeaux</i> is a half-bottle of Bordeaux wine." },
    { icon: "🫗", kind: "Culture", t: "[[une carafe d'eau]]", d: "Tap water is free in French restaurants by law. Just ask for <i>une carafe d'eau</i>." },
    { icon: "📋", kind: "Langue", t: "False friend: [[le menu]]", d: "<b>le menu</b> = a fixed-price set meal; <b>la carte</b> = the full menu. <i>Je voudrais voir la carte</i> = I'd like to see the menu." },
    { icon: "🦪", kind: "Culture", t: "Le plateau de fruits de mer", d: "A seafood platter on crushed ice is a classic for celebrations, especially at Christmas and New Year, when fishmongers take orders days in advance." },
    { icon: "🧾", kind: "Culture", t: "Paying and tipping", d: "The waiter won't bring the bill until you ask: [[L'addition, s'il vous plaît.]] Service is included (<i>service compris</i>); leaving a few coins is a kind extra, not an obligation." }
  ],
  tips: [
    { icon: "🎵", t: "Sing the verbs", d: "Repeat <i>j'ai, tu as, il a, nous avons, vous avez, ils ont</i> to a rhythm until it's automatic. Then do the same for <i>prendre</i> and <i>aller</i>." },
    { icon: "🔁", t: "Echo the pour question", d: "<i>Pour combien de personnes ?</i> → <i><b>Pour</b> six personnes.</i> The question gives you the start of your answer." },
    { icon: "🔤", t: "Practise spelling your name", d: "Say your name, email and street out loud letter by letter. G and J are the classic traps." }
  ],
  mistakes: [
    ["Je vais prends le menu.", "Je vais prendre le menu.", "aller + infinitive"],
    ["Ils prenent un café.", "Ils prennent un café.", "two n's"],
    ["Je voudrais voir le menu.", "Je voudrais voir la carte.", "the full list is la carte"],
    ["C'est pour combien personnes ?", "C'est pour combien de personnes ?", "combien de + noun"],
    ["Un verre de l'eau.", "Une carafe d'eau.", "quantity + d' / ask for a carafe"],
    ["Je veux l'addition !", "L'addition, s'il vous plaît.", "polite"]
  ]
});
