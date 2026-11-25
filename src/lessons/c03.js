// Chapitre 3 · Demander le prix (book pp. 16–17)
// Situation: Dans une papeterie (+ a short bonus scene at the market)
// Grammar: l'utilisation de l'infinitif · « pour » + infinitif · (prices and numbers)
// Dialogues and activities are original, built on the book's situation, grammar and vocabulary.
LESSONS.push({
  id: "c03", rubrique: 1, num: 3,
  title: "Asking the price",
  titleFr: "Demander le prix",
  pages: "Book pp. 16–17",
  goals: [
    "Ask the price six different ways: [[C'est combien ?]], [[Il fait combien ?]], [[Quel est le prix de… ?]]…",
    "Understand prices up to 100 €, including the tricky [[soixante-dix]], [[quatre-vingts]], [[quatre-vingt-dix]]",
    "Use a conjugated verb + an infinitive: [[Je voudrais voir…]], [[Vous pouvez me dire… ?]]",
    "Say why with [[pour]] + infinitive: [[C'est pour offrir.]]",
    "Name what's sold in a stationery shop",
    "React to a price: [[C'est un peu cher.]], [[Vous avez moins cher ?]]"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Asking how much something costs, and reacting"],
    ["🧩", "Grammaire", "verb + infinitive · pour + infinitive · numbers 20–100"],
    ["🗂️", "Vocabulaire", "pens, pencils, paper, folders · price and payment words"],
    ["⭐", "The phrase to learn first", "[[C'est combien ?]] How much is it?"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "In a stationery shop", titleFr: "Dans une papeterie",
      note: "Paul wants to buy a fountain pen for his father. Count the infinitives: <i>Je voudrais <b>voir</b>, vous voulez <b>mettre</b>, vous pouvez me <b>dire</b>, je vais <b>prendre</b>, c'est pour <b>offrir</b></i>.",
      scene: "papeterie", staff: "La vendeuse", people: { "La vendeuse": "f5", "Paul": "m1" },
      lines: [
        ["La vendeuse", "Bonjour, monsieur. Je peux vous renseigner ?", "Hello, sir. Can I help you?"],
        ["Paul", "Oui, je voudrais voir les stylos à plume, s'il vous plaît.", "Yes, I'd like to see the fountain pens, please."],
        ["La vendeuse", "Bien sûr. Vous voulez mettre combien ?", "Of course. How much do you want to spend?"],
        ["Paul", "Je ne sais pas… entre trente et cinquante euros. Ça dépend.", "I don't know… between thirty and fifty euros. It depends."],
        ["La vendeuse", "Alors, regardez ici. Ces stylos sont tous à moins de cinquante euros.", "Then look here. These pens are all under fifty euros."],
        ["Paul", "Et le stylo vert, là, il fait combien ?", "And the green pen there, how much is it?"],
        ["La vendeuse", "Le vert ? Soixante-quinze euros.", "The green one? Seventy-five euros."],
        ["Paul", "Ah, c'est un peu cher pour moi ! Vous pouvez me dire le prix du stylo noir ?", "Oh, that's a bit expensive for me! Can you tell me the price of the black pen?"],
        ["La vendeuse", "Il fait trente-cinq euros, avec cinq cartouches.", "It's thirty-five euros, with five cartridges."],
        ["Paul", "Il est très joli. Je vais prendre le noir.", "It's very nice. I'll take the black one."],
        ["La vendeuse", "C'est pour offrir ?", "Is it a gift?"],
        ["Paul", "Oui, c'est pour mon père. Je voudrais aussi une gomme et deux crayons de couleur. Ça fait combien, en tout ?", "Yes, it's for my father. I'd also like an eraser and two coloured pencils. How much is that altogether?"],
        ["La vendeuse", "Trente-neuf euros soixante. Vous payez par carte ?", "Thirty-nine euros sixty. Are you paying by card?"],
        ["Paul", "Oui, par carte.", "Yes, by card."]
      ],
      glossary: [["Je peux vous renseigner ?", "can I help you?"], ["Vous voulez mettre combien ?", "how much do you want to spend?"], ["Ça dépend.", "it depends"], ["C'est pour offrir ?", "is it a gift?"]]
    },
    {
      id: "d2", n: "+", title: "Bonus: prices at the market", titleFr: "Les prix au marché",
      note: "A short extra scene (not in the book) to practise the book's other price questions: [[Les cerises sont à combien ?]] and prices <b>per kilo</b>.",
      scene: "marche", staff: "La marchande", people: { "La marchande": "f4", "Léo": "m5" },
      lines: [
        ["Léo", "Bonjour ! Les cerises sont à combien ?", "Hello! How much are the cherries?"],
        ["La marchande", "Six euros le kilo.", "Six euros a kilo."],
        ["Léo", "Et les abricots ?", "And the apricots?"],
        ["La marchande", "Quatre euros quatre-vingt-dix le kilo. Ils sont très bons !", "Four euros ninety a kilo. They're very good!"],
        ["Léo", "Alors, une livre d'abricots. Quel est le prix des melons ?", "Then a pound of apricots. What's the price of the melons?"],
        ["La marchande", "Deux euros cinquante pièce, ou trois pour six euros.", "Two fifty each, or three for six euros."],
        ["Léo", "Trois melons, alors ! Ça fait combien ?", "Three melons, then! How much is that?"],
        ["La marchande", "Huit euros quarante-cinq, s'il vous plaît.", "Eight forty-five, please."]
      ]
    }
  ],

  vocab: [
    { t: "une papeterie", en: "a stationery shop", pic: "🏪", cat: "La papeterie", g: "f", pr: "pa-PET-ree" },
    { t: "un stylo", en: "a pen", pic: "🖊️", cat: "La papeterie", g: "m" },
    { t: "un stylo à plume", en: "a fountain pen", pic: "🖋️", cat: "La papeterie", g: "m" },
    { t: "une cartouche", en: "an ink cartridge", pic: "🧪", cat: "La papeterie", g: "f" },
    { t: "un stylo-bille", en: "a ballpoint pen", pic: "🖊️", cat: "La papeterie", g: "m", alt: ["un stylo bille"] },
    { t: "un Bic", en: "a biro (brand used as a noun)", pic: "🖊️", cat: "La papeterie", g: "m" },
    { t: "un porte-mine", en: "a mechanical pencil", pic: "✏️", cat: "La papeterie", g: "m" },
    { t: "un crayon", en: "a pencil", pic: "✏️", cat: "La papeterie", g: "m" },
    { t: "un crayon de couleur", en: "a coloured pencil", pic: "🖍️", cat: "La papeterie", g: "m" },
    { t: "une gomme", en: "an eraser, a rubber", pic: "🧽", cat: "La papeterie", g: "f" },
    { t: "du papier à lettres", en: "writing paper", pic: "📜", cat: "La papeterie", g: "m" },
    { t: "des enveloppes", en: "envelopes", pic: "✉️", cat: "La papeterie", g: "pl" },
    { t: "un classeur", en: "a ring binder", pic: "🗂️", cat: "La papeterie", g: "m" },
    { t: "un dossier", en: "a file, a folder", pic: "📁", cat: "La papeterie", g: "m" },
    { t: "une chemise", en: "a cardboard folder (also: a shirt!)", pic: "📂", cat: "La papeterie", g: "f" },
    { t: "un cahier", en: "an exercise book", pic: "📓", cat: "La papeterie", g: "m", pr: "ka-YAY" },
    { t: "une règle", en: "a ruler", pic: "📏", cat: "La papeterie", g: "f" },
    { t: "des ciseaux", en: "scissors", pic: "✂️", cat: "La papeterie", g: "pl" },
    { t: "un agenda", en: "a diary, a planner", pic: "📔", cat: "La papeterie", g: "m", pr: "a-zhan-DA" },
    { t: "le prix", en: "the price", pic: "🏷️", cat: "Le prix", g: "m" },
    { t: "cher, chère", en: "expensive", pic: "💸", cat: "Le prix" },
    { t: "pas cher", en: "cheap, inexpensive", pic: "👍", cat: "Le prix" },
    { t: "en solde", en: "on sale, reduced", pic: "🏷️", cat: "Le prix" },
    { t: "la caisse", en: "the till, the checkout", pic: "🧾", cat: "Le prix", g: "f" },
    { t: "payer par carte", en: "to pay by card", pic: "💳", cat: "Le prix" },
    { t: "payer en espèces", en: "to pay in cash", pic: "💶", cat: "Le prix" },
    { t: "la monnaie", en: "change (coins)", pic: "🪙", cat: "Le prix", g: "f" },
    { t: "un paquet cadeau", en: "gift wrapping", pic: "🎁", cat: "Le prix", g: "m" },
    { t: "le kilo · pièce", en: "per kilo · each", pic: "⚖️", cat: "Le prix" },
    { t: "voir", en: "to see", pic: "👀", cat: "Les verbes" },
    { t: "mettre", en: "to put; to spend (on a purchase)", pic: "💶", cat: "Les verbes" },
    { t: "dépenser", en: "to spend (money)", pic: "💸", cat: "Les verbes" },
    { t: "renseigner", en: "to inform, to help with information", pic: "ℹ️", cat: "Les verbes" },
    { t: "offrir", en: "to give (as a present)", pic: "🎁", cat: "Les verbes" },
    { t: "Ça dépend.", en: "It depends.", pic: "🤷", cat: "Les verbes" },
    { t: "vingt", en: "20", pic: "2️⃣0️⃣", cat: "Les nombres", pr: "VAN (t silent)" },
    { t: "trente", en: "30", pic: "3️⃣0️⃣", cat: "Les nombres" },
    { t: "quarante", en: "40", pic: "4️⃣0️⃣", cat: "Les nombres" },
    { t: "cinquante", en: "50", pic: "5️⃣0️⃣", cat: "Les nombres" },
    { t: "soixante", en: "60", pic: "6️⃣0️⃣", cat: "Les nombres", pr: "swa-SANT" },
    { t: "soixante-dix", en: "70 (60 + 10)", pic: "7️⃣0️⃣", cat: "Les nombres" },
    { t: "quatre-vingts", en: "80 (4 × 20)", pic: "8️⃣0️⃣", cat: "Les nombres" },
    { t: "quatre-vingt-dix", en: "90 (4 × 20 + 10)", pic: "9️⃣0️⃣", cat: "Les nombres" },
    { t: "cent", en: "100", pic: "💯", cat: "Les nombres", pr: "SAN" }
  ],

  grammar: [
    {
      id: "g-inf",
      title: "Verb + infinitive: [[Je voudrais voir…]]",
      body: [
        "When two verbs follow each other, <b>only the first one is conjugated</b>. The second stays in the <b>infinitive</b> (the dictionary form ending in -er, -ir, -re, -oir): [[Je voudrais voir les stylos.]] · [[Vous pouvez me dire le prix ?]]",
        "This is the backbone of polite French. Learn the starters as blocks: <b>je voudrais</b> (I'd like to), <b>je peux</b> (I can), <b>je vais</b> (I'm going to), <b>vous voulez</b> (do you want to), <b>vous pouvez</b> (can you).",
        "Object pronouns go <b>before the infinitive</b>, not before the first verb: [[Je peux vous renseigner ?]] · [[Vous pouvez me dire… ?]]"
      ],
      info: [
        { type: "pattern", title: "🔗 Conjugated + infinitive", rows: [
          [{ opts: ["Je voudrais", "Je peux", "Je vais", "Vous voulez", "Vous pouvez"] }, { opts: ["voir les stylos", "prendre le noir", "mettre combien ?", "me dire le prix ?", "répéter, s'il vous plaît ?"] }]
        ], note: "Left box: conjugated (changes with the person). Right box: infinitive (never changes). Tap the parts to hear them." },
        { type: "conj", title: "🧩 The three starter verbs (present)", verbs: [
          { inf: "vouloir", en: "to want", forms: ["je v|eux", "tu v|eux", "il v|eut", "nous voul|ons", "vous voul|ez", "ils veul|ent"] },
          { inf: "pouvoir", en: "can, to be able to", forms: ["je p|eux", "tu p|eux", "il p|eut", "nous pouv|ons", "vous pouv|ez", "ils peuv|ent"] },
          { inf: "aller", en: "to go / going to", forms: ["je vais", "tu vas", "il va", "nous all|ons", "vous all|ez", "ils vont"] }
        ], note: "<b>Je voudrais</b> is the polite (conditional) form of <i>vouloir</i>. In a shop, always prefer it to <i>je veux</i>." }
      ],
      widget: {
        type: "sort", label: "Conjugated or infinitive? Sort the verbs from the dialogue",
        cols: [{ k: "c", label: "conjugated (changes)", color: "var(--bleu)" }, { k: "i", label: "infinitive (-er, -ir, -re, -oir)", color: "var(--accent)" }],
        items: [{ t: "voudrais", k: "c" }, { t: "voir", k: "i" }, { t: "peux", k: "c" }, { t: "renseigner", k: "i" }, { t: "voulez", k: "c" }, { t: "mettre", k: "i" }, { t: "vais", k: "c" }, { t: "prendre", k: "i" }, { t: "pouvez", k: "c" }, { t: "dire", k: "i" }, { t: "dépend", k: "c" }, { t: "offrir", k: "i" }]
      }
    },
    {
      id: "g-pour",
      title: "Why? [[pour]] + infinitive",
      body: [
        "<b>pour</b> + an infinitive gives the purpose: <i>in order to</i>. [[C'est pour offrir.]] = It's (in order) to give as a present. [[C'est pour faire un cadeau.]] [[C'est pour savoir.]] (I'm just asking, lit. it's to know).",
        "<b>pour</b> + a noun or person gives the recipient: [[C'est pour mon père.]] You'll see many more uses of <i>pour</i> in chapter 4."
      ],
      info: { type: "compare", title: "🎁 pour + …", cols: [
        { head: "pour + infinitif", en: "purpose: in order to", color: "var(--accent)", pic: "🎯", lines: [["C'est pour offrir.", "It's a gift."], ["C'est pour écrire à ma mère.", "It's for writing to my mother."], ["Je demande pour savoir.", "I'm asking just to know."]] },
        { head: "pour + nom / personne", en: "for someone or something", color: "var(--bleu)", pic: "👨", lines: [["C'est pour mon père.", "It's for my father."], ["des timbres pour l'Europe", "stamps for Europe"], ["une tarte pour six personnes", "a tart for six people"]] }
      ] }
    },
    {
      id: "g-nombres",
      title: "Prices and the numbers 20–100",
      body: [
        "From 70 French counts in twenties, like an old market: <b>70 = 60 + 10</b> [[soixante-dix]], <b>80 = 4 × 20</b> [[quatre-vingts]], <b>90 = 4 × 20 + 10</b> [[quatre-vingt-dix]].",
        "<b>et un</b> for 21, 31, 41, 51, 61 and 71: [[vingt et un]], [[soixante et onze]]. But no <i>et</i> for 81 and 91: [[quatre-vingt-un]], [[quatre-vingt-onze]].",
        "Prices: euros first, then cents, with no word for the comma: <b>39,60 €</b> = [[trente-neuf euros soixante]]. Under one euro, say cents: <b>0,50 €</b> = [[cinquante centimes]]."
      ],
      table: { head: ["Say it", "Number", "How it's built"], say: 0, rows: [
        ["soixante-dix", "70", "60 + 10"], ["soixante et onze", "71", "60 + 11"], ["soixante-quinze", "75", "60 + 15"],
        ["quatre-vingts", "80", "4 × 20 (with -s)"], ["quatre-vingt-un", "81", "4 × 20 + 1 (no s, no et)"], ["quatre-vingt-dix", "90", "4 × 20 + 10"], ["quatre-vingt-dix-neuf", "99", "4 × 20 + 19"], ["cent", "100", ""]
      ] },
      info: { type: "card", style: "label", title: "🏷️ Étiquettes de la papeterie", rows: [["stylo à plume vert", "75,00 €", "soixante-quinze euros"], ["stylo à plume noir", "35,00 €", "trente-cinq euros"], ["porte-mine", "8,90 €", "huit euros quatre-vingt-dix"], ["gomme", "1,20 €", "un euro vingt"], ["crayon de couleur", "1,70 €", "un euro soixante-dix"], ["classeur rouge", "4,50 €", "quatre euros cinquante"], ["papier à lettres", "6,95 €", "six euros quatre-vingt-quinze"]], note: "In Belgium and Switzerland you'll also hear <b>septante</b> (70) and <b>nonante</b> (90), and in parts of Switzerland <b>huitante</b> (80). Much simpler!" },
      widget: { type: "prices", label: "Price trainer · see it, hear it, then play the listening game", prices: [0.5, 1.2, 1.7, 4.5, 6.95, 8.9, 12, 16, 21, 35, 39.6, 47, 61, 71, 75, 80, 81, 91, 99] }
    }
  ],

  expressions: [
    { fn: "Asking the price", fnEn: "six ways", icon: "🏷️", items: [
      ["C'est combien ?", "How much is it?", "std", true],
      ["Il fait combien, ce stylo ?", "How much is this pen?", "std", true],
      ["Ça fait combien ?", "How much does that come to? (total)", "std", true],
      ["Les cerises sont à combien ?", "How much are the cherries?", "std"],
      ["Vous pouvez me dire le prix de ce stylo ?", "Can you tell me the price of this pen?", "poli"],
      ["Quel est le prix de ce classeur ?", "What's the price of this binder?", "sout"]
    ], reply: ["Il fait 32 €.", "C'est 8,50 €.", "Elles sont à 6 € le kilo."] },
    { fn: "The shop assistant", fnEn: "learn to recognise", icon: "🧑‍💼", items: [
      ["Je peux vous renseigner ?", "Can I help you? (with information)", "poli", true],
      ["Vous voulez mettre combien ?", "How much do you want to spend?", "std", true],
      ["C'est pour offrir ?", "Is it a gift? (shall I wrap it?)", "std", true],
      ["Vous payez par carte ?", "Are you paying by card?", "std"]
    ] },
    { fn: "Reacting to a price", fnEn: "", icon: "😮", items: [
      ["C'est un peu cher pour moi.", "That's a bit expensive for me.", "std", true],
      ["Ce n'est pas cher !", "That's cheap!", "std"],
      ["Vous avez moins cher ?", "Do you have anything cheaper?", "std", true],
      ["C'est parfait, je le prends.", "That's perfect, I'll take it.", "std"],
      ["Je peux payer par carte ?", "Can I pay by card?", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · asking the price", lanes: ["La vendeuse", "Le client"], av: ["f5", "m1"], steps: [
    { s: 0, fr: "Bonjour. Je peux vous renseigner ?", en: "Hello. Can I help you?" },
    { s: 1, fr: "Oui, je voudrais voir les stylos.", en: "Yes, I'd like to see the pens." },
    { s: 0, fr: "Vous voulez mettre combien ?", en: "How much do you want to spend?" },
    { s: 1, fr: "Entre trente et cinquante euros.", en: "Between 30 and 50 euros.", alt: ["Je ne sais pas, ça dépend."] },
    { s: 1, fr: "Il fait combien, celui-là ?", en: "How much is that one?", alt: ["C'est combien ?", "Quel est le prix de… ?"] },
    { s: 0, fr: "Trente-cinq euros.", en: "35 euros." },
    { s: 1, fr: "Je vais prendre le noir.", en: "I'll take the black one.", alt: ["C'est un peu cher. Vous avez moins cher ?"] },
    { s: 0, fr: "C'est pour offrir ?", en: "Is it a gift?" }
  ] },

  sounds: {
    intro: "Numbers change their last sound depending on what follows. Listen carefully to <b>six</b>, <b>dix</b>, <b>vingt</b>, <b>neuf</b> and the liaison with <b>euros</b>.",
    letters: [
      { l: "six / dix", name: "three pronunciations", tip: "Alone: [s] [[six]], [[dix]]. Before a consonant: silent, [[six stylos]] = <i>si stylos</i>. Before a vowel: [z], [[six euros]] = <i>si-z-euros</i>.", ex: ["six", "six stylos", "six euros", "dix euros"] },
      { l: "vingt", name: "t silent… or not", tip: "[[vingt]] = <i>van</i>. The t is heard in 21–29 ([[vingt-deux]] = <i>vant-deux</i>) and in liaison ([[vingt euros]]). Not in 80s: [[quatre-vingt-deux]].", ex: ["vingt", "vingt-deux", "vingt euros", "quatre-vingt-deux"] },
      { l: "neuf €", name: "f → v", tip: "Before <i>ans</i> and <i>heures</i> (and in everyday speech before <i>euros</i>), [[neuf]] can sound like <i>neuv</i>. Elsewhere the f is heard: [[neuf stylos]].", ex: ["neuf", "neuf euros", "neuf stylos"] },
      { l: "‿euros", name: "liaison", tip: "Numbers link to <i>euros</i>: [[deux euros]] (z), [[trois euros]] (z), [[un euro]] (n), [[cent euros]] (t).", ex: ["deux euros", "trois euros", "un euro", "cent euros"] },
      { l: "soixante", name: "x = [s]", tip: "The x in [[soixante]] sounds like s: <i>swa-SANT</i>.", ex: ["soixante", "soixante-dix", "soixante-quinze"] }
    ],
    pairs: [
      { a: ["seize euros", "16 €"], b: ["treize euros", "13 €"], note: "s- / tr-" },
      { a: ["deux euros", "2 €"], b: ["douze euros", "12 €"], note: "eu / ou" },
      { a: ["six stylos", "6 pens"], b: ["dix stylos", "10 pens"], note: "s / d" },
      { a: ["trente euros", "30 €"], b: ["treize euros", "13 €"], note: "-ente / -eize" },
      { a: ["quarante euros", "40 €"], b: ["quatorze euros", "14 €"], note: "watch the endings" }
    ]
  },
  classify: {
    label: "💶 Quel prix ?", q: "Which price did you hear?",
    options: ["moins de 20 €", "20 € à 59 €", "60 € à 79 €", "80 € et plus"],
    items: [
      { say: "soixante-quinze euros", a: 2, en: "75 €" }, { say: "trente-cinq euros", a: 1, en: "35 €" }, { say: "quatre-vingt-dix euros", a: 3, en: "90 €" },
      { say: "seize euros", a: 0, en: "16 €" }, { say: "soixante et onze euros", a: 2, en: "71 €" }, { say: "quarante-sept euros", a: 1, en: "47 €" },
      { say: "quatre-vingt-un euros", a: 3, en: "81 €" }, { say: "huit euros quatre-vingt-dix", a: 0, en: "8,90 €" }, { say: "soixante-deux euros", a: 2, en: "62 €" },
      { say: "cinquante-neuf euros", a: 1, en: "59 €" }, { say: "quatre-vingt-dix-neuf euros", a: 3, en: "99 €" }, { say: "douze euros", a: 0, en: "12 €" }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue", s: "Paul sait exactement combien il veut dépenser.", ok: false, explain: "Je ne sais pas… entre trente et cinquante euros. Ça dépend." },
    { type: "tf", tag: "Dialogue", s: "Le stylo vert est trop cher pour Paul.", ok: true, explain: "C'est un peu cher pour moi ! (75 €)" },
    { type: "tf", tag: "Dialogue", s: "Il achète un stylo bleu.", ok: false, explain: "Je vais prendre le noir." },
    { type: "tf", tag: "Dialogue", s: "Paul veut faire un cadeau.", ok: true, explain: "C'est pour mon père." },
    { type: "tf", tag: "Dialogue", s: "Paul paie en espèces.", ok: false, explain: "Oui, par carte." },
    { type: "fill", tag: "Infinitif", sentence: "Vous voulez ___ combien ?", options: ["mettre", "mettez", "met"], answer: 0, explain: "vouloir + infinitive: [[Vous voulez mettre combien ?]]" },
    { type: "fill", tag: "Infinitif", sentence: "Je vais ___ le classeur rouge.", options: ["prends", "prendre", "prenez"], answer: 1, explain: "[[Je vais prendre…]]" },
    { type: "fill", tag: "Infinitif", sentence: "Je peux vous ___ ?", options: ["renseigner", "renseigne", "renseignez"], answer: 0 },
    { type: "fill", tag: "Infinitif", sentence: "Je voudrais ___ les stylos à plume.", options: ["vois", "voir", "voyez"], answer: 1 },
    { type: "fill", tag: "Infinitif", sentence: "Vous pouvez me ___ le prix de ce porte-mine ?", options: ["dire", "dites", "dit"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "J'efface avec une ___.", options: ["gomme", "cartouche", "règle"], answer: 0, en: "I rub out with an eraser." },
    { type: "fill", tag: "Vocabulaire", sentence: "L'enfant dessine avec un ___ de couleur.", options: ["stylo", "crayon", "classeur"], answer: 1 },
    { type: "fill", tag: "Vocabulaire", sentence: "Je mets les documents dans un ___.", options: ["papier", "dossier", "porte-mine"], answer: 1 },
    { type: "fill", tag: "Vocabulaire", sentence: "Je voudrais du papier ___ lettres.", options: ["à", "de", "pour"], answer: 0, explain: "[[du papier à lettres]] = writing paper." },
    { type: "mcq", tag: "Associez", q: "Complete: « Les enveloppes sont… »", options: ["à combien ?", "combien ?", "le prix de ce stylo ?"], answer: 0, sayAnswer: true, explain: "[[Les enveloppes sont à combien ?]]" },
    { type: "mcq", tag: "Associez", q: "Complete: « Quel est… »", options: ["à combien ?", "le prix de ce classeur ?", "combien ?"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Associez", q: "« Ça fait combien ? » is used…", options: ["to ask the price of one item", "to ask for the total", "to ask for a discount"], answer: 1 },
    { type: "listen", tag: "Les nombres", say: "soixante-quinze euros", options: ["65 €", "75 €", "95 €", "57 €"], answer: 1 },
    { type: "listen", tag: "Les nombres", say: "quatre-vingt-dix-neuf euros", options: ["89 €", "4,99 €", "99 €", "90 €"], answer: 2 },
    { type: "listen", tag: "Les nombres", say: "trente-neuf euros soixante", options: ["39,60 €", "36,90 €", "39,16 €", "30,96 €"], answer: 0 },
    { type: "listen", tag: "Les nombres", say: "soixante et onze euros", options: ["61 €", "71 €", "11 €", "81 €"], answer: 1 },
    { type: "type", tag: "Les nombres", q: "Write in words: 80", answers: ["quatre-vingts"], explain: "80 takes an -s: [[quatre-vingts]]. 81 does not: [[quatre-vingt-un]]." },
    { type: "type", tag: "Les nombres", q: "Write in words: 70", answers: ["soixante-dix"] },
    { type: "type", tag: "Écrivez", q: "Ask the price of the binder, using « Il fait combien… »", answers: ["Il fait combien, ce classeur ?", "Ce classeur fait combien ?", "Il fait combien ce classeur ?"] },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous voulez mettre combien ?", options: ["Entre vingt et trente euros.", "Je mets le stylo dans mon sac.", "Je veux mettre la table."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "C'est pour offrir ?", options: ["Oui, c'est pour ma sœur.", "Non, c'est pour moi offrir.", "Oui, c'est offert."], answer: 0 },
    { type: "order", tag: "Construisez", en: "Can you tell me the price of this pen?", words: ["Vous", "pouvez", "me", "dire", "le", "prix", "de", "ce", "stylo", "?"] }
  ],

  roleplays: [
    { title: "🏷️ Five prices, five questions", brief: "You're in a papeterie. Ask the price of five items, using a <b>different</b> question each time (book activity).", memo: ["un porte-mine", "un stylo à plume", "des crayons de couleur", "des chemises", "du papier à lettres"], partner: "f5", you: "m1",
      turns: [
        { them: "Bonjour ! Je peux vous renseigner ?", hint: "Ask how much the mechanical pencil is with [[C'est combien… ?]]", you: "Oui, c'est combien, ce porte-mine ?" },
        { them: "Huit euros quatre-vingt-dix.", hint: "Now the fountain pen, with [[Il fait combien… ?]]", you: "Et ce stylo à plume, il fait combien ?" },
        { them: "Trente-cinq euros.", hint: "The coloured pencils, with [[… sont à combien ?]]", you: "Les crayons de couleur sont à combien ?" },
        { them: "Un euro soixante-dix pièce.", hint: "The folders, with [[Vous pouvez me dire le prix de… ?]]", you: "Vous pouvez me dire le prix des chemises ?" },
        { them: "Trois euros les cinq.", hint: "The writing paper, with [[Quel est le prix de… ?]]", you: "Quel est le prix du papier à lettres ?" },
        { them: "Six euros quatre-vingt-quinze.", hint: "Decide: say what you'll take.", you: "Je vais prendre le porte-mine et le papier à lettres, s'il vous plaît." }
      ] }
  ],

  culture: [
    { icon: "💶", kind: "Remarque culturelle", t: "[[Vous voulez mettre combien ?]]", d: "This is how a French shop assistant asks about your budget, literally <i>how much do you want to put?</i>. They never say <i>dépenser</i> (spend) here: it would sound too blunt." },
    { icon: "🎁", kind: "Remarque linguistique", t: "[[C'est pour offrir ?]]", d: "= <i>c'est pour faire un cadeau</i>. If you say yes, most shops gift-wrap for free (<i>un paquet cadeau</i>), and often remove the price tag." },
    { icon: "ℹ️", kind: "Remarque linguistique", t: "[[Je peux vous renseigner ?]]", d: "= <i>je peux vous donner des informations ?</i>, the standard opening of a shop assistant. If you're just browsing: [[Non merci, je regarde.]] (chapter 6)." },
    { icon: "🇧🇪", kind: "Langue", t: "Septante, nonante", d: "Belgians and Swiss count 70 and 90 as <b>septante</b> and <b>nonante</b>; in parts of Switzerland 80 is <b>huitante</b>. In France: soixante-dix, quatre-vingts, quatre-vingt-dix." },
    { icon: "🖊️", kind: "Culture", t: "Un Bic", d: "The French company Bic made the ballpoint pen so popular that <i>un Bic</i> means any biro, like a brand-name noun." },
    { icon: "🏷️", kind: "Culture", t: "Les soldes", d: "Sales in France happen on official dates, in January and in summer. Look for <i>soldes</i>, <i>-30 %</i>, <i>prix barré</i>." }
  ],
  tips: [
    { icon: "🧮", t: "Think in twenties", d: "For 70–99, do the maths out loud: 93 = 4 × 20 + 13 = [[quatre-vingt-treize]]." },
    { icon: "🔗", t: "One conjugated verb per block", d: "If two verbs are next to each other, the second is almost always an infinitive: <i>je vais <b>prendre</b></i>, <i>vous pouvez <b>répéter</b></i>." },
    { icon: "👂", t: "Ask them to repeat", d: "Prices go by fast. [[Vous pouvez répéter, s'il vous plaît ?]] is a perfect sentence for this chapter's grammar, and very useful." }
  ],
  mistakes: [
    ["Je voudrais vois les stylos.", "Je voudrais voir les stylos.", "second verb = infinitive"],
    ["Vous pouvez me dites le prix ?", "Vous pouvez me dire le prix ?", "infinitive after pouvoir"],
    ["Vous voulez dépenser combien ?", "Vous voulez mettre combien ?", "what the French actually say"],
    ["quatre-vingts-un", "quatre-vingt-un", "80 loses its -s when followed by a number"],
    ["soixante-onze", "soixante et onze", "et for 71"],
    ["C'est pour offre.", "C'est pour offrir.", "pour + infinitive"]
  ]
});
