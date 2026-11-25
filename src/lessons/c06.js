// Chapitre 6 · Faire des achats (book pp. 26–29)
// Situations: 1. Dans une boutique de vêtements · 2. Dans un magasin de chaussures
// Grammar: « trop » / « assez » · « dans » / « sur »
// Dialogues and activities are original, built on the book's situations, grammar and vocabulary.
LESSONS.push({
  id: "c06", rubrique: 1, num: 6,
  title: "Buying clothes and shoes",
  titleFr: "Faire des achats",
  pages: "Book pp. 26–29",
  goals: [
    "Say you're just looking: [[Non merci, je regarde.]]",
    "Ask to try something on: [[Est-ce que je peux essayer… ?]]",
    "Give your size: [[Je fais du 38.]], [[Quelle pointure faites-vous ?]]",
    "Say what's wrong: [[C'est trop court.]], [[Ce n'est pas assez grand.]]",
    "Use [[dans]] and [[sur]] correctly: [[dans la vitrine]], [[sur la photo]]",
    "Leave politely without buying: [[Je vais réfléchir.]]"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Trying on and buying clothes and shoes"],
    ["🧩", "Grammaire", "trop / assez (+ de) · dans / sur"],
    ["🗂️", "Vocabulaire", "clothes · shoes · sizes · the fitting room"],
    ["⭐", "The phrase to learn first", "[[Est-ce que je peux essayer… ?]] Can I try… on?"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "In a clothes shop", titleFr: "Dans une boutique de vêtements",
      note: "Claire tries on a pair of trousers. Listen for [[trop]] (too much) and [[assez]] (enough).",
      scene: "vetements", staff: "La vendeuse", people: { "La vendeuse": "f5", "Claire": "f3" },
      lines: [
        ["La vendeuse", "Bonjour, madame. Je peux vous aider ?", "Hello, madam. Can I help you?"],
        ["Claire", "Non merci, je regarde.", "No thanks, I'm just looking."],
        ["", "(Un peu plus tard.)", "(A little later.)"],
        ["Claire", "Excusez-moi, est-ce que je peux essayer ce pantalon, s'il vous plaît ?", "Excuse me, can I try on these trousers, please?"],
        ["La vendeuse", "Bien sûr. Les cabines d'essayage sont au fond, à droite.", "Of course. The fitting rooms are at the back, on the right."],
        ["", "(Quelques minutes après.)", "(A few minutes later.)"],
        ["La vendeuse", "Alors, ça va ?", "So, how is it?"],
        ["Claire", "Non, pas vraiment. Il est trop long et un peu trop large.", "No, not really. They're too long and a bit too loose."],
        ["La vendeuse", "Vous faites quelle taille ?", "What size are you?"],
        ["Claire", "Normalement, je fais du 40.", "Normally I'm a 40."],
        ["La vendeuse", "Vous voulez essayer la taille au-dessous ? Je vous apporte un 38.", "Do you want to try the size below? I'll bring you a 38."],
        ["", "(Un peu plus tard.)", "(A little later.)"],
        ["La vendeuse", "Alors, c'est mieux ?", "So, is it better?"],
        ["Claire", "Oui, je pense que ça va. Il est assez long, maintenant.", "Yes, I think it's fine. They're long enough now."],
        ["La vendeuse", "Il vous va très bien, et la couleur aussi. Vous voulez essayer un haut pour aller avec ?", "They suit you very well, and the colour too. Would you like to try a top to go with them?"],
        ["Claire", "Non merci, j'ai assez de hauts ! Je prends juste le pantalon.", "No thanks, I've got enough tops! I'll just take the trousers."]
      ],
      glossary: [["je regarde", "I'm just looking"], ["la cabine d'essayage", "the fitting room"], ["la taille au-dessous", "the size below"], ["Il vous va bien.", "it suits you"]]
    },
    {
      id: "d2", n: 2, title: "In a shoe shop", titleFr: "Dans un magasin de chaussures",
      note: "Hugo sees some trainers in the window. Listen for [[dans]]: <i><b>dans</b> la vitrine, <b>dans</b> ce modèle, <b>dans</b> le même style</i>.",
      scene: "chaussures", staff: "La vendeuse", people: { "La vendeuse": "f1", "Hugo": "m5" },
      lines: [
        ["Hugo", "Bonjour. Est-ce que je peux essayer les baskets blanches qui sont dans la vitrine ?", "Hello. Can I try on the white trainers in the window?"],
        ["La vendeuse", "Oui, monsieur. Quelle pointure faites-vous ?", "Yes, sir. What shoe size are you?"],
        ["Hugo", "Je fais du 43.", "I'm a 43."],
        ["La vendeuse", "Voilà. Asseyez-vous ici.", "Here you are. Have a seat here."],
        ["", "(Quelques minutes plus tard.)", "(A few minutes later.)"],
        ["La vendeuse", "Alors, ça va ?", "So, are they OK?"],
        ["Hugo", "Non, elles sont trop petites. Est-ce que vous avez le même modèle en 44 ?", "No, they're too small. Do you have the same model in a 44?"],
        ["La vendeuse", "Ah non, désolée, il n'y a plus de 44 dans ce modèle. Mais j'ai un autre modèle dans le même style. Vous voulez l'essayer ?", "Oh no, sorry, there are no 44s left in that model. But I have another model in the same style. Would you like to try it?"],
        ["Hugo", "Oui, pourquoi pas !", "Yes, why not!"],
        ["La vendeuse", "Alors, elles vous plaisent ?", "So, do you like them?"],
        ["Hugo", "Elles sont confortables, mais je n'aime pas trop la couleur. Je vous remercie, je vais réfléchir.", "They're comfortable, but I don't really like the colour. Thank you, I'll think about it."]
      ],
      glossary: [["la vitrine", "the shop window"], ["la pointure", "shoe size"], ["le même modèle", "the same model"], ["Je vais réfléchir.", "I'll think about it (= no)"]]
    }
  ],

  vocab: [
    { t: "une jupe", en: "a skirt", pic: "👗", cat: "Les vêtements", g: "f" },
    { t: "un pantalon", en: "(a pair of) trousers", pic: "👖", cat: "Les vêtements", g: "m", note: "singular in French: [[un pantalon]], [[ce pantalon]]" },
    { t: "un jean", en: "jeans", pic: "👖", cat: "Les vêtements", g: "m", pr: "DJEEN" },
    { t: "une chemise", en: "a shirt", pic: "👔", cat: "Les vêtements", g: "f" },
    { t: "un haut", en: "a top", pic: "👚", cat: "Les vêtements", g: "m", pr: "un O (h aspiré, no liaison)" },
    { t: "un tee-shirt", en: "a T-shirt", pic: "👕", cat: "Les vêtements", g: "m" },
    { t: "une robe", en: "a dress", pic: "👗", cat: "Les vêtements", g: "f" },
    { t: "une veste", en: "a jacket", pic: "🧥", cat: "Les vêtements", g: "f" },
    { t: "un manteau", en: "a coat", pic: "🧥", cat: "Les vêtements", g: "m" },
    { t: "un pull", en: "a jumper, a sweater", pic: "🧶", cat: "Les vêtements", g: "m", pr: "PUL (u!)" },
    { t: "un costume", en: "a suit (for men)", pic: "🤵", cat: "Les vêtements", g: "m" },
    { t: "un ensemble", en: "a matching outfit (for women)", pic: "👚", cat: "Les vêtements", g: "m" },
    { t: "une boutique de vêtements", en: "a clothes shop", pic: "🏬", cat: "La boutique", g: "f" },
    { t: "la vendeuse, le vendeur", en: "the shop assistant", pic: "🧑‍💼", cat: "La boutique" },
    { t: "une cabine d'essayage", en: "a fitting room", pic: "🚪", cat: "La boutique", g: "f" },
    { t: "essayer", en: "to try (on)", pic: "🪞", cat: "La boutique" },
    { t: "la taille", en: "the (clothes) size", pic: "📏", cat: "La boutique", g: "f" },
    { t: "la taille au-dessus", en: "the next size up", pic: "⬆️", cat: "La boutique", g: "f" },
    { t: "la taille au-dessous", en: "the next size down", pic: "⬇️", cat: "La boutique", g: "f" },
    { t: "Ça vous va bien.", en: "It suits you. / It fits you.", pic: "😍", cat: "La boutique" },
    { t: "Je regarde.", en: "I'm just looking.", pic: "👀", cat: "La boutique" },
    { t: "un magasin de chaussures", en: "a shoe shop", pic: "🏪", cat: "Les chaussures", g: "m" },
    { t: "une paire de chaussures", en: "a pair of shoes", pic: "👞", cat: "Les chaussures", g: "f" },
    { t: "des chaussures à talons hauts", en: "high-heeled shoes", pic: "👠", cat: "Les chaussures", g: "pl" },
    { t: "des chaussures à talons plats", en: "flat shoes", pic: "🥿", cat: "Les chaussures", g: "pl" },
    { t: "des sandales", en: "sandals", pic: "👡", cat: "Les chaussures", g: "pl" },
    { t: "des bottes", en: "boots", pic: "👢", cat: "Les chaussures", g: "pl" },
    { t: "des mocassins", en: "loafers", pic: "👞", cat: "Les chaussures", g: "pl" },
    { t: "des baskets", en: "trainers, sneakers", pic: "👟", cat: "Les chaussures", g: "pl", pr: "bas-KET" },
    { t: "des tennis", en: "tennis shoes, plimsolls", pic: "👟", cat: "Les chaussures", g: "pl" },
    { t: "un modèle", en: "a model, a style", pic: "🏷️", cat: "Les chaussures", g: "m" },
    { t: "la pointure", en: "the shoe size", pic: "📐", cat: "Les chaussures", g: "f" },
    { t: "la vitrine", en: "the shop window", pic: "🪟", cat: "Les chaussures", g: "f" },
    { t: "trop court", en: "too short", pic: "↕️", cat: "Trop, assez" },
    { t: "trop long", en: "too long", pic: "📏", cat: "Trop, assez" },
    { t: "trop large", en: "too loose, too wide", pic: "↔️", cat: "Trop, assez" },
    { t: "trop serré", en: "too tight", pic: "🫸", cat: "Trop, assez" },
    { t: "assez grand", en: "big enough; quite big", pic: "👍", cat: "Trop, assez" },
    { t: "confortable", en: "comfortable", pic: "☁️", cat: "Trop, assez" },
    { t: "Je vais réfléchir.", en: "I'll think about it.", pic: "🤔", cat: "Trop, assez" }
  ],

  grammar: [
    {
      id: "g-trop",
      title: "Too much or enough? [[trop]] · [[assez]]",
      body: [
        "<b>trop</b> = too / too much; <b>assez</b> = enough. Before an <b>adjective</b> they stand alone: [[trop petit]], [[assez grand]]. Before a <b>noun</b> add <b>de</b> (like every quantity in chapter 2): [[trop de travail]], [[assez de hauts]].",
        "<b>pas assez</b> = not enough: [[Ce n'est pas assez grand.]] = it's too small.",
        "⚠️ <b>assez</b> has two meanings. [[La maison est assez grande pour nous.]] = big <b>enough</b> (suffisamment). [[La maison est assez jolie.]] = <b>quite</b> pretty, i.e. not very pretty. The tone of voice tells you which."
      ],
      info: [
        { type: "compare", title: "👖 Trop or assez?", cols: [
          { head: "trop", en: "too (a problem)", color: "#c2402a", mini: "trop", lines: [["C'est trop court.", "It's too short."], ["trop cher", "too expensive"], ["trop de voitures", "too many cars"]] },
          { head: "assez", en: "enough (OK)", color: "#2f8a4f", mini: "assez", lines: [["C'est assez long.", "It's long enough."], ["assez grand", "big enough"], ["assez de papiers", "enough papers"]] },
          { head: "pas assez", en: "not enough (a problem)", color: "#b5652b", pic: "📉", lines: [["Ce n'est pas assez grand.", "It isn't big enough."], ["pas assez de temps", "not enough time"]] }
        ] },
        { type: "scale", title: "📏 The fitting-room scale", colors: ["#b5652b", "#2f8a4f", "#2f8a4f", "#c2402a"], ends: ["too little", "too much"], items: [
          { v: 8, fr: "pas assez grand", en: "not big enough", pic: "😣" }, { v: 36, fr: "assez grand", en: "big enough", pic: "🙂" }, { v: 62, fr: "parfait !", en: "perfect", pic: "😍" }, { v: 92, fr: "trop grand", en: "too big", pic: "😩" }
        ] }
      ],
      widget: {
        type: "combo", label: "In the fitting room · pick trop / assez and a word",
        rows: [{ k: "t", label: "😩 trop" }, { k: "a", label: "🙂 assez" }, { k: "p", label: "😣 pas assez" }],
        cols: [{ k: "court", label: "court (adj.)" }, { k: "cher", label: "cher (adj.)" }, { k: "trav", label: "travail (noun)" }, { k: "vet", label: "vêtements (noun)" }],
        out: {
          "t|court": ["C'est trop court.", "It's too short.", "trop + adjective"], "a|court": ["C'est assez court.", "It's short enough / quite short.", "assez + adjective (two meanings!)"], "p|court": ["Ce n'est pas assez court.", "It isn't short enough.", "ne… pas assez + adjective"],
          "t|cher": ["C'est trop cher.", "It's too expensive.", "trop + adjective"], "a|cher": ["C'est assez cher.", "It's quite expensive.", "here assez = quite, rather"], "p|cher": ["Ce n'est pas assez cher.", "It isn't expensive enough (ironic!).", ""],
          "t|trav": ["J'ai trop de travail.", "I have too much work.", "trop <b>de</b> + noun"], "a|trav": ["J'ai assez de travail.", "I have enough work.", "assez <b>de</b> + noun"], "p|trav": ["Je n'ai pas assez de travail.", "I don't have enough work.", "pas assez <b>de</b> + noun"],
          "t|vet": ["Elle a trop de vêtements.", "She has too many clothes.", "trop <b>de</b> + noun (never <s>trop des</s>)"], "a|vet": ["Elle a assez de vêtements.", "She has enough clothes.", "assez <b>de</b> + noun"], "p|vet": ["Elle n'a pas assez de vêtements.", "She doesn't have enough clothes.", "pas assez de"]
        }
      }
    },
    {
      id: "g-dans",
      title: "Inside or on top? [[dans]] · [[sur]]",
      body: [
        "<b>dans</b> = in, inside (a space with limits): [[dans la boutique]], [[dans le sac]], [[dans la vitrine]], [[dans la rue]]. Also figuratively: [[dans ma taille]], [[dans ma pointure]], [[dans le même style]].",
        "<b>sur</b> = on, on top of (a surface): [[sur la table]], [[sur la chaise]]. And for roads and pictures: [[sur la route]], [[sur l'autoroute]], [[sur le plan]], [[sur la photo]]."
      ],
      info: [
        { type: "minis", title: "📦 Where's the red ball?", items: [{ mini: "dans", fr: "dans la boîte", en: "in the box" }, { mini: "sur", fr: "sur la table", en: "on the table" }, { mini: "sous", fr: "sous la table", en: "under the table (chapter 15)" }] },
        { type: "compare", title: "🗺️ Fixed expressions", cols: [
          { head: "dans", en: "inside a space · in a category", color: "var(--bleu)", lines: [["dans la boutique", "in the shop"], ["dans la vitrine", "in the window"], ["dans ma pointure", "in my size"], ["dans le même style", "in the same style"], ["dans la rue", "in the street"]] },
          { head: "sur", en: "on a surface · roads · images", color: "var(--rouge)", lines: [["sur la table", "on the table"], ["sur la route", "on the road"], ["sur l'autoroute A4", "on the A4 motorway"], ["sur le plan", "on the map"], ["sur la photo", "in the photo (!)"]] }
        ], note: "Careful: English says <i>in the photo</i> but French says [[sur la photo]]; English says <i>in the street</i> and French agrees: [[dans la rue]]." }
      ],
      widget: {
        type: "sort", label: "dans or sur? Sort the expressions",
        cols: [{ k: "d", label: "dans", color: "var(--bleu)" }, { k: "s", label: "sur", color: "var(--rouge)" }],
        items: [{ t: "… la vitrine", k: "d", say: "dans la vitrine" }, { t: "… la table", k: "s", say: "sur la table" }, { t: "… ma pointure", k: "d", say: "dans ma pointure" }, { t: "… la photo", k: "s", say: "sur la photo" }, { t: "… le sac", k: "d", say: "dans le sac" }, { t: "… l'autoroute", k: "s", say: "sur l'autoroute" }, { t: "… le même style", k: "d", say: "dans le même style" }, { t: "… le plan", k: "s", say: "sur le plan" }, { t: "… une petite boutique", k: "d", say: "dans une petite boutique" }, { t: "… la chaise", k: "s", say: "sur la chaise" }]
      }
    },
    {
      id: "g-taille",
      title: "Sizes: [[Je fais du 38.]]",
      body: [
        "For clothes ask [[Quelle taille faites-vous ?]]; for shoes, [[Quelle pointure faites-vous ?]]. Answer with <b>faire du</b> + number: [[Je fais du 38.]] · [[Je fais du 43.]]",
        "French sizes differ from British and American ones. Here's an approximate conversion; always try on!"
      ],
      info: [
        { type: "card", style: "label", title: "👗 Tailles femmes (vêtements)", sub: "approximate", rows: [["FR 36", "UK 8 · US 4", "du trente-six"], ["FR 38", "UK 10 · US 6", "du trente-huit"], ["FR 40", "UK 12 · US 8", "du quarante"], ["FR 42", "UK 14 · US 10", "du quarante-deux"]] },
        { type: "card", style: "label", title: "👟 Pointures (chaussures)", sub: "approximate", rows: [["38", "UK 5 · US 7½ (women)", "du trente-huit"], ["39", "UK 6 · US 8½ (women)", "du trente-neuf"], ["43", "UK 9 · US 10 (men)", "du quarante-trois"], ["44", "UK 9½ · US 10½ (men)", "du quarante-quatre"]] }
      ]
    }
  ],

  expressions: [
    { fn: "Browsing and trying on", fnEn: "", icon: "🪞", items: [
      ["Non merci, je regarde.", "No thanks, I'm just looking.", "std", true],
      ["Est-ce que je peux essayer cette jupe ?", "Can I try on this skirt?", "std", true],
      ["Je voudrais essayer les sandales de la vitrine.", "I'd like to try the sandals in the window.", "poli"],
      ["Où sont les cabines d'essayage ?", "Where are the fitting rooms?", "std"]
    ] },
    { fn: "Sizes and models", fnEn: "", icon: "📏", items: [
      ["Quelle taille faites-vous ? — Je fais du 38.", "What size are you? — I'm a 38.", "std", true],
      ["Quelle pointure faites-vous ? — Je fais du 43.", "What shoe size? — 43.", "std", true],
      ["Est-ce que vous avez ce modèle en 39 ?", "Do you have this model in a 39?", "std", true],
      ["Est-ce que ce modèle existe dans ma pointure ?", "Does this model come in my size?", "poli"],
      ["Vous avez un autre modèle dans le même style ?", "Do you have another model in the same style?", "std"]
    ] },
    { fn: "Giving your opinion", fnEn: "", icon: "💬", items: [
      ["Ça va ? — Oui, je pense que ça va.", "Is it OK? — Yes, I think it's fine.", "std", true],
      ["Cette couleur vous va bien.", "That colour suits you.", "std"],
      ["Non, ça ne me va pas.", "No, it doesn't suit / fit me.", "std"],
      ["C'est trop court. / Ce n'est pas assez grand.", "It's too short. / It's not big enough.", "std", true],
      ["Je cherche une chemise pour aller avec ce pantalon.", "I'm looking for a shirt to go with these trousers.", "std"]
    ] },
    { fn: "Leaving without buying", fnEn: "", icon: "🚪", items: [
      ["Je vous remercie, je vais réfléchir.", "Thank you, I'll think about it.", "poli", true],
      ["Ça suffit pour aujourd'hui !", "That's enough for today!", "fam"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · trying something on", lanes: ["La vendeuse", "Le client"], av: ["f5", "m5"], steps: [
    { s: 0, fr: "Bonjour. Je peux vous aider ?", en: "Hello. Can I help you?" },
    { s: 1, fr: "Non merci, je regarde.", en: "No thanks, I'm looking.", alt: ["Oui, je cherche un pantalon."] },
    { s: 1, fr: "Est-ce que je peux essayer cette veste ?", en: "Can I try this jacket on?" },
    { s: 0, fr: "Bien sûr. Quelle taille faites-vous ?", en: "Of course. What size are you?" },
    { s: 1, fr: "Je fais du 42.", en: "I'm a 42." },
    { s: 0, fr: "Alors, ça va ?", en: "So, is it OK?" },
    { s: 1, fr: "Non, c'est trop petit. Vous avez la taille au-dessus ?", en: "No, it's too small. Do you have the next size up?" },
    { s: 1, fr: "C'est parfait, je la prends !", en: "It's perfect, I'll take it!", alt: ["Je vais réfléchir."] }
  ] },

  sounds: {
    intro: "Clothes vocabulary is full of <b>ch</b> and <b>j</b> sounds, and the classic French challenge: <b>u</b> versus <b>ou</b>.",
    letters: [
      { l: "ch", name: "[ʃ]", tip: "Always “sh”, never “tch”: [[une chemise]], [[des chaussures]], [[cher]].", ex: ["une chemise", "des chaussures", "c'est cher", "un chausson"] },
      { l: "j / ge", name: "[ʒ]", tip: "Like the <i>s</i> in <i>pleasure</i>: [[une jupe]], [[rouge]], [[je regarde]]. Not “dj”!", ex: ["une jupe", "rouge", "je regarde", "un gilet"] },
      { l: "u / ou", name: "[y] / [u]", tip: "<b>u</b>: say “ee” with very round lips. <b>ou</b>: English “oo”. [[sur]] (on) vs [[sous]] (under): one sound makes the difference!", ex: ["sur", "sous", "une jupe", "court"] },
      { l: "s between vowels", name: "[z]", tip: "One s between two vowels = z: [[une chemise]], [[réfléchir]]… Double ss = s: [[essayer]], [[au-dessus]].", ex: ["une chemise", "essayer", "au-dessus", "une vitrine"] },
      { l: "ay", name: "essayer", tip: "[[essayer]] = <i>es-say-YAY</i>; [[j'essaie]] = <i>jé-SAY</i>.", ex: ["essayer", "j'essaie", "vous essayez"] }
    ],
    pairs: [
      { a: ["sur la table", "on the table"], b: ["sous la table", "under the table"], note: "u [y] / ou [u]" },
      { a: ["au-dessus", "above, size up"], b: ["au-dessous", "below, size down"], note: "u [y] / ou [u]" },
      { a: ["trop court", "too short (m)"], b: ["trop courte", "too short (f)"], note: "t silent / t heard" },
      { a: ["la taille", "the size"], b: ["la paille", "the straw"], note: "t / p" }
    ]
  },
  classify: {
    label: "📏 Problème de taille ?", q: "Is it too small, too big, or fine?",
    options: ["trop petit 😣", "trop grand 😩", "ça va 🙂"],
    items: [
      { say: "C'est trop court.", a: 0 }, { say: "Il est trop large.", a: 1 }, { say: "Oui, je pense que ça va.", a: 2 }, { say: "Ce n'est pas assez grand.", a: 0 },
      { say: "Elles sont trop serrées.", a: 0 }, { say: "C'est trop long.", a: 1 }, { say: "C'est assez long comme ça.", a: 2 }, { say: "Vous avez la taille au-dessous ?", a: 1 },
      { say: "Vous avez la taille au-dessus ?", a: 0 }, { say: "C'est parfait, je le prends.", a: 2 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Claire veut essayer un ensemble.", ok: false, explain: "un pantalon." },
    { type: "tf", tag: "Dialogue 1", s: "Le premier pantalon est trop grand.", ok: true, explain: "trop long et trop large." },
    { type: "tf", tag: "Dialogue 1", s: "Claire achète aussi un haut.", ok: false, explain: "J'ai assez de hauts ! Je prends juste le pantalon." },
    { type: "tf", tag: "Dialogue 2", s: "Hugo voudrait essayer des chaussures de sport.", ok: true, explain: "des baskets." },
    { type: "tf", tag: "Dialogue 2", s: "La première paire ne va pas.", ok: true, explain: "trop petites." },
    { type: "tf", tag: "Dialogue 2", s: "Hugo achète l'autre modèle.", ok: false, explain: "Je vais réfléchir = he doesn't buy (for now)." },
    { type: "fill", tag: "trop / assez", sentence: "Tu as du travail ? — Oh oui, j'ai vraiment ___ travail, c'est fatigant !", options: ["trop de", "trop", "assez"], answer: 0 },
    { type: "fill", tag: "trop / assez", sentence: "Le pantalon te va ? — Non, il est ___ petit.", options: ["trop", "trop de", "assez de"], answer: 0 },
    { type: "fill", tag: "trop / assez", sentence: "La veste vous va ? — Oui, elle est ___ longue.", options: ["assez", "assez de", "trop de"], answer: 0 },
    { type: "fill", tag: "trop / assez", sentence: "Tu vas acheter des vêtements à ta fille ? — Non, elle a ___ vêtements.", options: ["assez", "assez de", "assez des"], answer: 1 },
    { type: "fill", tag: "trop / assez", sentence: "Il va acheter ce costume ? — Non, c'est vraiment ___ cher.", options: ["trop", "trop de", "assez de"], answer: 0 },
    { type: "fill", tag: "dans / sur", sentence: "Les chaussures sont ___ la vitrine.", options: ["dans", "sur"], answer: 0 },
    { type: "fill", tag: "dans / sur", sentence: "Il a posé le livre ___ la table.", options: ["dans", "sur"], answer: 1 },
    { type: "fill", tag: "dans / sur", sentence: "Est-ce que vous avez ce modèle ___ ma pointure ?", options: ["dans", "sur"], answer: 0 },
    { type: "fill", tag: "dans / sur", sentence: "Elle aime bien les chaussures qui sont ___ la photo.", options: ["dans", "sur"], answer: 1 },
    { type: "fill", tag: "dans / sur", sentence: "Nous sommes ___ l'autoroute A4.", options: ["dans", "sur"], answer: 1 },
    { type: "fill", tag: "dans / sur", sentence: "Le restaurant est ___ la rue Mermoz.", options: ["dans", "sur"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "Guillaume va courir, il met des ___.", options: ["baskets", "mocassins", "sandales"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "Il pleut, il fait froid : Colette met des ___.", options: ["sandales", "bottes", "tennis"], answer: 1 },
    { type: "fill", tag: "Vocabulaire", sentence: "Il fait froid, Agathe met son ___.", options: ["manteau", "vêtement", "haut"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "For shoes, « size » is…", options: ["la taille", "la pointure", "le modèle"], answer: 1 },
    { type: "mcq", tag: "Manières de dire", q: "« Je vais réfléchir » in a shop really means…", options: ["I'll buy it later today", "I'm not buying it (politely)", "I need a mirror"], answer: 1 },
    { type: "type", tag: "Écrivez", q: "Ask if you can try these trousers on (« Est-ce que je peux… »).", answers: ["Est-ce que je peux essayer ce pantalon ?", "Est-ce que je peux essayer ce pantalon, s'il vous plaît ?"] },
    { type: "type", tag: "Écrivez", q: "Say you're a size 40 (clothes).", answers: ["Je fais du 40.", "Je fais du quarante."] },
    { type: "reply", tag: "Que répondre ?", prompt: "Je peux vous aider ?", options: ["Non merci, je regarde.", "Oui, je regarde.", "Non, je vais réfléchir."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Quelle pointure faites-vous ?", options: ["Je fais du 39.", "Je fais une pointure.", "Je fais du sport."], answer: 0 },
    { type: "order", tag: "Construisez", en: "Do you have the same model in 39?", words: ["Est-ce", "que", "vous", "avez", "le", "même", "modèle", "en", "39", "?"] }
  ],

  roleplays: [
    { title: "👖 Trousers too big", brief: "You want to try trousers. The assistant asks your size. You try them: they're too big. Ask for the size below. It fits.", memo: ["pantalon", "taille ?", "trop grand", "taille au-dessous", "ça va !"], partner: "f5", you: "m6",
      turns: [
        { them: "Bonjour, monsieur. Je peux vous aider ?", hint: "Ask to try on these trousers.", you: "Oui, est-ce que je peux essayer ce pantalon, s'il vous plaît ?" },
        { them: "Bien sûr. Quelle taille faites-vous ?", hint: "Give your size (e.g. 42).", you: "Je fais du 42." },
        { them: "Voilà. Les cabines sont au fond. … Alors, ça va ?", hint: "No: too big. Ask for the size below.", you: "Non, c'est trop grand. Vous avez la taille au-dessous ?" },
        { them: "Voilà un 40. Alors, c'est mieux ?", hint: "Yes, it fits. You'll take it.", you: "Oui, ça va très bien. Je le prends !" }
      ] },
    { title: "👞 Not buying today", brief: "Try on some shoes from the window. Give your size. Try them on, but don't buy them, politely.", memo: ["chaussures de la vitrine", "pointure ?", "essayer", "je vais réfléchir"], partner: "f1", you: "f3",
      turns: [
        { them: "Bonjour, madame. Vous désirez ?", hint: "Ask to try the brown shoes in the window.", you: "Bonjour. Est-ce que je peux essayer les chaussures marron qui sont dans la vitrine ?" },
        { them: "Oui. Quelle pointure faites-vous ?", hint: "Give your shoe size.", you: "Je fais du 38." },
        { them: "Voilà. Elles vous plaisent ?", hint: "They're comfortable but you're not sure. Leave politely.", you: "Elles sont confortables, mais je ne suis pas sûre. Je vous remercie, je vais réfléchir." }
      ] }
  ],

  culture: [
    { icon: "🤔", kind: "Remarque de vocabulaire", t: "[[Je vais réfléchir.]]", d: "Literally <i>I'm going to think about it</i>, this is the polite French way of saying you don't want to buy now. The assistant understands perfectly, and it's not rude." },
    { icon: "👀", kind: "Savoir-vivre", t: "[[Non merci, je regarde.]]", d: "When the assistant offers help and you want to browse, this is the standard answer. You can ask for help later: [[Excusez-moi…]]" },
    { icon: "⚖️", kind: "Remarque de vocabulaire", t: "Two meanings of [[assez]]", d: "<i>La maison est assez grande pour nous</i> = big <b>enough</b>. <i>La maison est assez jolie</i> = <b>fairly</b> pretty (so: not very). Context and intonation decide." },
    { icon: "👖", kind: "Langue", t: "[[un pantalon]] is singular", d: "English says <i>a pair of trousers / these trousers are</i>; French says <i>un pantalon / ce pantalon est</i>. Same for <i>un jean</i>, <i>un short</i>." },
    { icon: "🛍️", kind: "Culture", t: "Les soldes", d: "Clothes shops have official sales twice a year (January and summer). Outside the sales you can't usually bargain in a boutique, but you can ask: [[Vous avez moins cher ?]]" }
  ],
  tips: [
    { icon: "🧮", t: "trop + de, just like a quantity", d: "trop, assez, beaucoup, un peu… are all quantities, so before a noun: <b>de</b>. <i>trop de voitures, assez de temps</i>." },
    { icon: "📦", t: "dans = box, sur = table", d: "Picture a box (dans) and a table (sur). Then learn the surprises as a pair: <i>dans la rue</i> but <i>sur la photo</i>." },
    { icon: "🗣️", t: "Faire du + size", d: "<i>Je fais du 38</i>, never <s>je suis 38</s>. The same verb gives <i>je fais du sport</i>, <i>je fais du piano</i>." }
  ],
  mistakes: [
    ["Je suis 38.", "Je fais du 38.", "faire du + size"],
    ["trop des vêtements", "trop de vêtements", "trop de + noun"],
    ["C'est trop de cher.", "C'est trop cher.", "no de before an adjective"],
    ["dans la photo", "sur la photo", "fixed expression"],
    ["sur la rue", "dans la rue", "fixed expression"],
    ["Ces pantalons sont trop longs.", "Ce pantalon est trop long.", "one pair = un pantalon"]
  ]
});
