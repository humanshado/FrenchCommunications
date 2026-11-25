// Chapitre 2 · Parler des quantités (book pp. 12–15)
// Situations: 1. Au marché · 2. À l'épicerie
// Grammar: expression de la quantité (un kilo de…) · quantité indéfinie (du, de la, de l', des)
// Dialogues and activities are original, built on the book's situations, grammar and vocabulary.
LESSONS.push({
  id: "c02", rubrique: 1, num: 2,
  title: "Talking about quantities",
  titleFr: "Parler des quantités",
  pages: "Book pp. 12–15",
  goals: [
    "Buy fruit and vegetables by weight: [[un kilo de tomates]], [[une livre de fraises]]",
    "Use containers and portions: [[une bouteille d'eau]], [[un pot de crème]], [[quatre tranches de jambon]]",
    "Remember the golden rule: after a quantity, only [[de]] or [[d']], never <s>des</s>",
    "Say “some” with [[m:du pain]], [[f:de la confiture]], [[de l'eau]], [[pl:des œufs]]",
    "Say you need something: [[Il me faut…]]",
    "Name 40 everyday foods: vegetables, fruit, herbs, groceries, meat and fish"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Saying how much you want, at the market and the grocer's"],
    ["🧩", "Grammaire", "quantity + de · du / de la / de l' / des"],
    ["🗂️", "Vocabulaire", "fruit, vegetables, herbs · groceries, fresh produce, meat, fish"],
    ["⭐", "The phrase to learn first", "[[Il me faut un kilo de tomates.]] I need a kilo of tomatoes."]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "At the market", titleFr: "Au marché",
      note: "Madame Roux does her weekly shopping at the open-air market. Every quantity is followed by [[de]]: <i>un kilo <b>de</b> tomates, une livre <b>de</b> fraises, un peu <b>de</b> persil</i>.",
      scene: "marche", staff: "Le marchand", people: { "Le marchand": "m2", "Madame Roux": "f6" },
      lines: [
        ["Le marchand", "Bonjour, madame ! Qu'est-ce que je vous sers ?", "Good morning, madam! What can I get you?"],
        ["Madame Roux", "Bonjour ! Je voudrais un kilo de tomates et deux courgettes, s'il vous plaît.", "Hello! I'd like a kilo of tomatoes and two courgettes, please."],
        ["Le marchand", "Voilà. Et avec ceci ?", "Here you are. Anything else?"],
        ["Madame Roux", "Elles sont belles, vos fraises ! Je vais prendre une livre de fraises et six pommes.", "Your strawberries look lovely! I'll take a pound of strawberries and six apples."],
        ["Le marchand", "Une livre de fraises, six pommes… Ce sera tout ?", "A pound of strawberries, six apples… Will that be all?"],
        ["Madame Roux", "Non, il me faut aussi un poivron rouge et un peu de persil.", "No, I also need a red pepper and a little parsley."],
        ["Le marchand", "Et voilà. Je vous mets un bouquet de basilic en plus ? C'est cadeau !", "There you go. Shall I add a bunch of basil? It's a gift!"],
        ["Madame Roux", "Oh, merci beaucoup ! Ça fait combien ?", "Oh, thank you very much! How much is that?"],
        ["Le marchand", "Neuf euros vingt, madame.", "Nine euros twenty, madam."]
      ],
      glossary: [["Qu'est-ce que je vous sers ?", "what can I get you?"], ["une livre", "a pound (= 500 g)"], ["un peu de", "a little"], ["C'est cadeau !", "it's free / a gift"]]
    },
    {
      id: "d2", n: 2, title: "At the grocer's", titleFr: "À l'épicerie",
      note: "Julien reads his shopping list (<i>du</i> jambon, <i>de la</i> crème, <i>des</i> œufs: “some”), then orders exact amounts (<i>un morceau <b>de</b>, un pot <b>de</b>, une douzaine <b>d'</b></i>…).",
      scene: "epicerie", staff: "L'épicier", people: { "L'épicier": "m5", "Julien": "m3" },
      lines: [
        ["Julien", "Alors, il me faut… du jambon, du comté, de la crème fraîche, des œufs, de l'eau…", "Right, I need… ham, Comté cheese, crème fraîche, eggs, water…"],
        ["L'épicier", "Bonjour, monsieur. Vous désirez ?", "Hello, sir. What would you like?"],
        ["Julien", "Bonjour. Je voudrais un morceau de comté, s'il vous plaît.", "Hello. I'd like a piece of Comté, please."],
        ["L'épicier", "Un gros morceau ou un petit ?", "A big piece or a small one?"],
        ["Julien", "Un petit, environ deux cent cinquante grammes.", "A small one, about 250 grams."],
        ["L'épicier", "Voilà. Et avec ceci ?", "Here you are. Anything else?"],
        ["Julien", "Donnez-moi aussi un pot de crème fraîche et une douzaine d'œufs.", "Give me a pot of crème fraîche and a dozen eggs too."],
        ["L'épicier", "Voilà. Ce sera tout ?", "There. Will that be all?"],
        ["Julien", "Non, il me faut aussi quatre tranches de jambon. Et je vais prendre deux bouteilles d'eau gazeuse.", "No, I also need four slices of ham. And I'll take two bottles of sparkling water."],
        ["L'épicier", "Ah, désolé, je n'ai plus d'eau gazeuse. J'ai seulement de l'eau plate.", "Oh, sorry, I've no sparkling water left. I only have still water."],
        ["Julien", "Ce n'est pas grave. Deux bouteilles d'eau plate, alors.", "Never mind. Two bottles of still water, then."]
      ],
      glossary: [["un morceau de", "a piece of"], ["une douzaine d'œufs", "a dozen eggs"], ["une tranche de", "a slice of"], ["je n'ai plus de…", "I've no more…"]]
    }
  ],

  vocab: [
    { t: "une tomate", en: "a tomato", pic: "🍅", cat: "Les légumes", g: "f" },
    { t: "une courgette", en: "a courgette, a zucchini", pic: "🥒", cat: "Les légumes", g: "f" },
    { t: "une pomme de terre", en: "a potato (lit. earth apple)", pic: "🥔", cat: "Les légumes", g: "f" },
    { t: "un oignon", en: "an onion", pic: "🧅", cat: "Les légumes", g: "m", pr: "o-NYON (the i is silent)" },
    { t: "une aubergine", en: "an aubergine, an eggplant", pic: "🍆", cat: "Les légumes", g: "f" },
    { t: "un chou-fleur", en: "a cauliflower", pic: "🥦", cat: "Les légumes", g: "m" },
    { t: "une carotte", en: "a carrot", pic: "🥕", cat: "Les légumes", g: "f" },
    { t: "un poivron rouge", en: "a red pepper", pic: "🫑", cat: "Les légumes", g: "m" },
    { t: "un poireau", en: "a leek", pic: "🥬", cat: "Les légumes", g: "m" },
    { t: "un brocoli", en: "broccoli", pic: "🥦", cat: "Les légumes", g: "m" },
    { t: "une salade", en: "a lettuce; a salad", pic: "🥗", cat: "Les légumes", g: "f" },
    { t: "des haricots verts", en: "green beans", pic: "🫛", cat: "Les légumes", g: "pl", pr: "a-ree-ko VAIR (no liaison: h aspiré)" },
    { t: "des champignons", en: "mushrooms", pic: "🍄", cat: "Les légumes", g: "pl" },
    { t: "une pomme", en: "an apple", pic: "🍎", cat: "Les fruits", g: "f" },
    { t: "une orange", en: "an orange", pic: "🍊", cat: "Les fruits", g: "f" },
    { t: "un citron", en: "a lemon", pic: "🍋", cat: "Les fruits", g: "m" },
    { t: "un pamplemousse", en: "a grapefruit", pic: "🍊", cat: "Les fruits", g: "m" },
    { t: "une poire", en: "a pear", pic: "🍐", cat: "Les fruits", g: "f" },
    { t: "une pêche", en: "a peach", pic: "🍑", cat: "Les fruits", g: "f" },
    { t: "des cerises", en: "cherries", pic: "🍒", cat: "Les fruits", g: "pl" },
    { t: "des fraises", en: "strawberries", pic: "🍓", cat: "Les fruits", g: "pl" },
    { t: "un abricot", en: "an apricot", pic: "🍑", cat: "Les fruits", g: "m" },
    { t: "une banane", en: "a banana", pic: "🍌", cat: "Les fruits", g: "f" },
    { t: "du raisin", en: "grapes", pic: "🍇", cat: "Les fruits", g: "m", note: "Uncountable in French: [[du raisin]], [[une grappe de raisin]] (a bunch)." },
    { t: "le persil", en: "parsley", pic: "🌿", cat: "Les herbes", g: "m", pr: "pair-SEEL (l is heard)" },
    { t: "la menthe", en: "mint", pic: "🌱", cat: "Les herbes", g: "f" },
    { t: "le basilic", en: "basil", pic: "🌿", cat: "Les herbes", g: "m", pr: "ba-zee-LEEK" },
    { t: "les herbes de Provence", en: "Provence herbs (thyme, rosemary, bay…)", pic: "🌾", cat: "Les herbes", g: "pl" },
    { t: "le riz", en: "rice", pic: "🍚", cat: "Les produits de base", g: "m", pr: "REE (z silent)" },
    { t: "les pâtes", en: "pasta", pic: "🍝", cat: "Les produits de base", g: "pl" },
    { t: "le sucre", en: "sugar", pic: "🧂", cat: "Les produits de base", g: "m" },
    { t: "la farine", en: "flour", pic: "🌾", cat: "Les produits de base", g: "f" },
    { t: "la confiture", en: "jam", pic: "🫙", cat: "Les produits de base", g: "f" },
    { t: "le miel", en: "honey", pic: "🍯", cat: "Les produits de base", g: "m" },
    { t: "l'huile", en: "oil", pic: "🫒", cat: "Les produits de base", g: "f", note: "feminine: [[de l'huile]], [[une bouteille d'huile]]" },
    { t: "le vinaigre", en: "vinegar", pic: "🍶", cat: "Les produits de base", g: "m" },
    { t: "le sel", en: "salt", pic: "🧂", cat: "Les produits de base", g: "m" },
    { t: "le poivre", en: "pepper (spice)", pic: "🌶️", cat: "Les produits de base", g: "m" },
    { t: "l'eau minérale", en: "mineral water", pic: "💧", cat: "Les produits de base", g: "f" },
    { t: "le jambon", en: "ham", pic: "🍖", cat: "Les produits frais", g: "m" },
    { t: "le fromage", en: "cheese", pic: "🧀", cat: "Les produits frais", g: "m" },
    { t: "le lait", en: "milk", pic: "🥛", cat: "Les produits frais", g: "m" },
    { t: "le beurre", en: "butter", pic: "🧈", cat: "Les produits frais", g: "m" },
    { t: "les yaourts", en: "yoghurts", pic: "🥣", cat: "Les produits frais", g: "pl", pr: "ya-OORT" },
    { t: "la crème fraîche", en: "crème fraîche (thick cream)", pic: "🥛", cat: "Les produits frais", g: "f" },
    { t: "les œufs", en: "eggs", pic: "🥚", cat: "Les produits frais", g: "pl", pr: "lay-ZUH (f silent in the plural!)" },
    { t: "le porc", en: "pork", pic: "🐖", cat: "La viande et le poisson", g: "m", pr: "POR (c silent)" },
    { t: "le bœuf", en: "beef", pic: "🐄", cat: "La viande et le poisson", g: "m", pr: "BUF" },
    { t: "l'agneau", en: "lamb", pic: "🐑", cat: "La viande et le poisson", g: "m", pr: "la-NYO" },
    { t: "le poulet", en: "chicken", pic: "🍗", cat: "La viande et le poisson", g: "m" },
    { t: "le saumon", en: "salmon", pic: "🐟", cat: "La viande et le poisson", g: "m" },
    { t: "un kilo de", en: "a kilo of", pic: "⚖️", cat: "Les quantités" },
    { t: "une livre de", en: "a pound of (500 g)", pic: "⚖️", cat: "Les quantités" },
    { t: "un litre de", en: "a litre of", pic: "🥛", cat: "Les quantités" },
    { t: "une bouteille de", en: "a bottle of", pic: "🍾", cat: "Les quantités" },
    { t: "un paquet de", en: "a packet of", pic: "📦", cat: "Les quantités" },
    { t: "un pot de", en: "a pot, a jar of", pic: "🫙", cat: "Les quantités" },
    { t: "une tranche de", en: "a slice of", pic: "🥓", cat: "Les quantités" },
    { t: "un morceau de", en: "a piece of", pic: "🧀", cat: "Les quantités" },
    { t: "une douzaine de", en: "a dozen", pic: "🥚", cat: "Les quantités" },
    { t: "un peu de", en: "a little", pic: "🤏", cat: "Les quantités" },
    { t: "beaucoup de", en: "a lot of, many", pic: "🛒", cat: "Les quantités" },
    { t: "Il me faut…", en: "I need…", pic: "📝", cat: "Les quantités" }
  ],

  grammar: [
    {
      id: "g-quantite",
      title: "Exact quantities: [[un kilo de]] · [[une livre de]] · [[beaucoup de]]",
      body: [
        "After any word of quantity, French uses only <b>de</b> (or <b>d'</b> before a vowel). The article disappears: [[un kilo de tomates]], [[un litre d'huile]], [[beaucoup d'amis]].",
        "<b>Ne dites pas</b> <s>un kilo des tomates</s> or <s>beaucoup des amis</s>: the <i>de</i> is not the article <i>des</i>. It is fixed, whatever the gender or number of the noun.",
        "The same rule works after a negative: [[Je n'ai pas de beurre.]] · [[Je n'ai plus d'eau gazeuse.]]"
      ],
      info: [
        { type: "pattern", title: "🧺 The quantity formula", rows: [
          [{ opts: ["un kilo", "une livre", "un litre", "une bouteille", "un paquet", "un pot", "une tranche", "un morceau", "une douzaine"] }, "de / d'", { opts: ["tomates", "fraises", "lait", "huile", "biscuits", "crème", "jambon", "fromage", "œufs"] }]
        ], note: "Tap any part to hear it. Whatever you pick in the first box, the middle never changes: <b>de</b> (or <b>d'</b> before a vowel: [[une bouteille d'huile]], [[une douzaine d'œufs]])." },
        { type: "scale", title: "📏 From a little to a lot", colors: ["#dcf2ee", "#0f7b6c", "#c2402a"], ends: ["peu", "trop"], items: [
          { v: 8, fr: "pas de persil", en: "no parsley", pic: "∅" },
          { v: 22, fr: "un peu de persil", en: "a little parsley", pic: "🌿" },
          { v: 42, fr: "quelques tomates", en: "a few tomatoes", pic: "🍅🍅" },
          { v: 62, fr: "assez de fraises", en: "enough strawberries", pic: "🍓🍓🍓" },
          { v: 80, fr: "beaucoup de cerises", en: "lots of cherries", pic: "🍒🍒🍒🍒" },
          { v: 90, fr: "trop de pommes", en: "too many apples", pic: "🍎🍎🍎🍎🍎" }
        ] },
        { type: "card", style: "label", title: "⚖️ La balance du marché", sub: "How French people weigh things", rows: [["un kilo", "1 000 g", "un kilo, mille grammes"], ["une livre", "500 g", "une livre, cinq cents grammes"], ["un demi-kilo", "rarely said!", "un demi-kilo"], ["250 grammes", "¼ kg", "deux cent cinquante grammes"], ["une douzaine", "12", "une douzaine"], ["une demi-douzaine", "6", "une demi-douzaine"]], note: "The book's <i>remarque</i>: <b>un demi-kilo</b> exists but is very rarely used. People say [[une livre]] or [[cinq cents grammes]]." }
      ],
      widget: {
        type: "combo", label: "Fill the basket · pick a quantity and a product",
        rows: [{ k: "kg", label: "⚖️ un kilo" }, { k: "lv", label: "⚖️ une livre" }, { k: "pu", label: "🤏 un peu" }, { k: "bc", label: "🛒 beaucoup" }, { k: "pas", label: "🚫 je n'ai pas" }],
        cols: [{ k: "tom", label: "🍅 tomates" }, { k: "abr", label: "🍑 abricots" }, { k: "per", label: "🌿 persil" }, { k: "oig", label: "🧅 oignons" }],
        out: {
          "kg|tom": ["un kilo de tomates", "a kilo of tomatoes", "quantity + <b>de</b>"], "kg|abr": ["un kilo d'abricots", "a kilo of apricots", "<b>d'</b> before a vowel"], "kg|per": ["un kilo de persil", "a kilo of parsley (that's a lot!)", "quantity + <b>de</b>"], "kg|oig": ["un kilo d'oignons", "a kilo of onions", "<b>d'</b> before a vowel"],
          "lv|tom": ["une livre de tomates", "a pound of tomatoes", "une livre = 500 g"], "lv|abr": ["une livre d'abricots", "a pound of apricots", "<b>d'</b> before a vowel"], "lv|per": ["une livre de persil", "a pound of parsley", "quantity + <b>de</b>"], "lv|oig": ["une livre d'oignons", "a pound of onions", "<b>d'</b> before a vowel"],
          "pu|tom": ["un peu de tomates", "a few tomatoes", "un peu de + noun"], "pu|abr": ["un peu d'abricots", "a few apricots", "<b>d'</b> before a vowel"], "pu|per": ["un peu de persil", "a little parsley", "un peu de + noun"], "pu|oig": ["un peu d'oignons", "a few onions", "<b>d'</b> before a vowel"],
          "bc|tom": ["beaucoup de tomates", "lots of tomatoes", "<s>beaucoup des</s> → beaucoup <b>de</b>"], "bc|abr": ["beaucoup d'abricots", "lots of apricots", "beaucoup <b>d'</b> before a vowel"], "bc|per": ["beaucoup de persil", "a lot of parsley", "beaucoup de"], "bc|oig": ["beaucoup d'oignons", "lots of onions", "beaucoup d'"],
          "pas|tom": ["Je n'ai pas de tomates.", "I don't have any tomatoes.", "negative → <b>pas de</b>"], "pas|abr": ["Je n'ai pas d'abricots.", "I don't have any apricots.", "negative → <b>pas d'</b>"], "pas|per": ["Je n'ai pas de persil.", "I don't have any parsley.", "negative → <b>pas de</b>"], "pas|oig": ["Je n'ai pas d'oignons.", "I don't have any onions.", "negative → <b>pas d'</b>"]
        }
      }
    },
    {
      id: "g-partitif",
      title: "“Some”: [[m:du]] · [[f:de la]] · [[de l']] · [[pl:des]]",
      body: [
        "When you don't say <i>how much</i>, French still needs an article. English says <i>I need ham and eggs</i>; French says [[Il me faut du jambon et des œufs.]] (some ham, some eggs).",
        "It's <b>de + the definite article</b>, with the same fusions as in chapter 1: <b>de + le = du</b>, <b>de + les = des</b>; <b>de la</b> and <b>de l'</b> don't fuse.",
        "Use it for things you can't count or don't count (bread, water, cheese, jam). Compare: [[du fromage]] (some cheese) → [[un morceau de fromage]] (a piece of cheese) → [[le fromage]] (cheese in general: <i>J'aime le fromage</i>)."
      ],
      info: [
        { type: "merge", title: "⚗️ de + article", rows: [
          { a: "de", b: "le", g: "m", r: "du", ex: "du jambon, du fromage", en: "some ham, some cheese" },
          { a: "de", b: "la", g: "f", r: "de la", ex: "de la confiture, de la crème", en: "some jam, some cream", no: true },
          { a: "de", b: "l'", g: "x", r: "de l'", ex: "de l'eau, de l'huile", en: "some water, some oil (vowel or h)", no: true },
          { a: "de", b: "les", g: "pl", r: "des", ex: "des biscuits, des épinards", en: "some biscuits, some spinach" }
        ] },
        { type: "compare", title: "🔍 The three “de”s on the shopping list", cols: [
          { head: "du / de la / des", en: "some (no quantity)", color: "var(--accent)", pic: "🛒", lines: [["du jambon", "some ham"], ["de la crème", "some cream"], ["des œufs", "some eggs"]] },
          { head: "quantité + de", en: "an exact amount", color: "var(--bleu)", pic: "⚖️", lines: [["quatre tranches de jambon", "four slices of ham"], ["un pot de crème", "a pot of cream"], ["une douzaine d'œufs", "a dozen eggs"]] },
          { head: "pas de", en: "after a negative", color: "var(--rouge)", pic: "🚫", lines: [["pas de jambon", "no ham"], ["pas de crème", "no cream"], ["pas d'œufs", "no eggs"]] }
        ] }
      ],
      widget: {
        type: "contract", label: "Julien's shopping list · Il me faut… (pick singular or plural)",
        preps: [{ p: "de", label: "Il me faut…", frame: "Il me faut" }],
        nouns: [{ t: "jambon", g: "m", pic: "🍖" }, { t: "fromage", g: "m", pic: "🧀" }, { t: "confiture", g: "f", pic: "🫙" }, { t: "crème", g: "f", pic: "🥛" }, { t: "eau", g: "f", v: true, pic: "💧" }, { t: "huile", g: "f", v: true, pic: "🫒" }, { t: "œuf", g: "m", v: true, pic: "🥚" }, { t: "biscuit", g: "m", pic: "🍪" }, { t: "riz", g: "m", pic: "🍚" }]
      },
      after: ["⚠️ The contraction widget will happily build <i>Il me faut des riz</i> if you press plural; in real life rice, water, oil and jam stay singular (uncountable). Eggs and biscuits are counted, so they're normally plural: [[des œufs]], [[des biscuits]]."]
    },
    {
      id: "g-sort",
      title: "Fruit or vegetable? Market sorting",
      body: ["One of the book's activities asks you to sort the market stall. Remember that in French cooking a <b>tomato</b> counts as a vegetable!"],
      info: { type: "pics", title: "🧺 Le marché", from: ["Les légumes", "Les fruits", "Les herbes"] },
      widget: {
        type: "sort", label: "Sort the stall · fruit, vegetable or herb?",
        cols: [{ k: "fr", label: "🍎 fruits", color: "#c0392b" }, { k: "lg", label: "🥕 légumes", color: "#3f7a5a" }, { k: "hb", label: "🌿 herbes", color: "#7b8a2b" }],
        items: [{ t: "des fraises", k: "fr", pic: "🍓" }, { t: "une carotte", k: "lg", pic: "🥕" }, { t: "un poireau", k: "lg", pic: "🥬" }, { t: "un citron", k: "fr", pic: "🍋" }, { t: "un poivron", k: "lg", pic: "🫑" }, { t: "des cerises", k: "fr", pic: "🍒" }, { t: "un oignon", k: "lg", pic: "🧅" }, { t: "une poire", k: "fr", pic: "🍐" }, { t: "un chou-fleur", k: "lg", pic: "🥦" }, { t: "le persil", k: "hb", pic: "🌿" }, { t: "la menthe", k: "hb", pic: "🌱" }, { t: "une tomate", k: "lg", pic: "🍅" }]
      }
    }
  ],

  expressions: [
    { fn: "Saying how much", fnEn: "with a quantity", icon: "⚖️", items: [
      ["Je voudrais un kilo de tomates.", "I'd like a kilo of tomatoes.", "poli", true],
      ["Une livre de cerises, s'il vous plaît.", "A pound of cherries, please.", "std"],
      ["Quatre citrons, s'il vous plaît.", "Four lemons, please.", "std"],
      ["Une douzaine d'œufs.", "A dozen eggs.", "std"],
      ["Un litre de lait, un demi-litre de crème.", "A litre of milk, half a litre of cream.", "std"]
    ] },
    { fn: "Saying what you need", fnEn: "il me faut…", icon: "📝", items: [
      ["Il me faut un morceau de fromage.", "I need a piece of cheese.", "std", true],
      ["Il me faut aussi une tranche de jambon.", "I also need a slice of ham.", "std"],
      ["Donnez-moi un tube de mayonnaise.", "Give me a tube of mayonnaise.", "std"],
      ["Je vais prendre une bouteille d'huile.", "I'll take a bottle of oil.", "std", true],
      ["Je voudrais un paquet de biscuits.", "I'd like a packet of biscuits.", "poli"]
    ] },
    { fn: "The seller says", fnEn: "learn to recognise", icon: "🧑‍🌾", items: [
      ["Qu'est-ce que je vous sers ?", "What can I get you?", "std", true],
      ["Un gros morceau ou un petit ?", "A big piece or a small one?", "std"],
      ["Je vous mets… ?", "Shall I give you / add…?", "fam"],
      ["Désolé, je n'ai plus de…", "Sorry, I've no more…", "std", true],
      ["C'est cadeau !", "It's on the house!", "fam"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · at the market", lanes: ["Le marchand", "La cliente"], av: ["m2", "f6"], steps: [
    { s: 0, fr: "Bonjour ! Qu'est-ce que je vous sers ?", en: "Hello! What can I get you?", alt: ["Vous désirez ?"] },
    { s: 1, fr: "Je voudrais un kilo de tomates.", en: "I'd like a kilo of tomatoes.", alt: ["Il me faut…", "Donnez-moi…"] },
    { s: 0, fr: "Voilà. Et avec ceci ?", en: "There. Anything else?" },
    { s: 1, fr: "Je vais prendre aussi une livre de fraises.", en: "I'll also take a pound of strawberries." },
    { s: 0, fr: "Désolé, je n'ai plus de fraises.", en: "Sorry, I've no strawberries left." },
    { s: 1, fr: "Ce n'est pas grave. Alors, six pêches.", en: "Never mind. Six peaches, then." },
    { s: 0, fr: "Ce sera tout ?", en: "Will that be all?" },
    { s: 1, fr: "Oui, merci. Ça fait combien ?", en: "Yes, thanks. How much is it?" }
  ] },

  sounds: {
    intro: "Market French: the vowels <b>u</b> and <b>eu</b>, the <b>gn</b> sound, and an egg that changes its pronunciation in the plural.",
    letters: [
      { l: "u", name: "[y]", tip: "Say “ee” and round your lips tightly as if to whistle. It's not “oo”! [[du]], [[une]], [[le sucre]].", ex: ["du jambon", "une", "le sucre", "une courgette"] },
      { l: "eu / œu", name: "[ø] / [œ]", tip: "Lips rounded, tongue forward. Closed [ø] in [[deux]], [[des œufs]]; open [œ] in [[le beurre]], [[un œuf]].", ex: ["deux", "le beurre", "un œuf", "des œufs"] },
      { l: "gn", name: "[ɲ]", tip: "Like the <i>ny</i> in <i>canyon</i>. In [[un oignon]] the i is silent: <i>o-nyon</i>.", ex: ["un oignon", "des champignons", "l'agneau", "la campagne"] },
      { l: "œuf / œufs", name: "singular vs plural", tip: "A famous trap: [[un œuf]] = <i>un-NUF</i> (f heard) but [[des œufs]] = <i>day-ZUH</i> (f silent!). Same for [[un bœuf]] / [[des bœufs]].", ex: ["un œuf", "des œufs", "une douzaine d'œufs"] },
      { l: "de / d'", name: "elision", tip: "<b>de</b> loses its e before a vowel or silent h and joins the next word: [[d'abricots]], [[d'huile]], [[d'eau]].", ex: ["un kilo d'abricots", "une bouteille d'huile", "beaucoup d'oignons"] }
    ],
    pairs: [
      { a: ["un œuf", "an egg"], b: ["des œufs", "eggs"], note: "f heard / f silent" },
      { a: ["du vin", "some wine"], b: ["deux vins", "two wines"], note: "u [y] / eu [ø]" },
      { a: ["du poisson", "some fish"], b: ["du poison", "some poison"], note: "ss [s] / s [z]: careful!" },
      { a: ["le jambon", "the ham"], b: ["les jambons", "the hams"], note: "le [lə] / les [le]" }
    ]
  },
  classify: {
    label: "🧪 du, de la, de l' ou des ?", q: "Which “some” word did you hear?",
    options: ["du", "de la", "de l'", "des"],
    items: [
      { say: "du jambon", a: 0 }, { say: "de la confiture", a: 1 }, { say: "de l'eau", a: 2 }, { say: "des œufs", a: 3 }, { say: "du fromage", a: 0 },
      { say: "de la farine", a: 1 }, { say: "de l'huile", a: 2 }, { say: "des biscuits", a: 3 }, { say: "du riz", a: 0 }, { say: "de la crème", a: 1 },
      { say: "des épinards", a: 3 }, { say: "du sucre", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Madame Roux achète seulement des légumes.", ok: false, explain: "She also buys fruit: fraises, pommes." },
    { type: "tf", tag: "Dialogue 1", s: "Elle achète cinq cents grammes de fraises.", ok: true, explain: "une livre = 500 g." },
    { type: "tf", tag: "Dialogue 1", s: "Le persil est un fruit.", ok: false, explain: "Le persil est une herbe." },
    { type: "tf", tag: "Dialogue 1", s: "Le marchand donne du basilic gratuitement.", ok: true, explain: "C'est cadeau ! = it's free." },
    { type: "tf", tag: "Dialogue 2", s: "Julien achète un morceau de fromage.", ok: true, explain: "un morceau de comté (a cheese)." },
    { type: "tf", tag: "Dialogue 2", s: "Il achète douze œufs.", ok: true, explain: "une douzaine d'œufs = 12." },
    { type: "tf", tag: "Dialogue 2", s: "L'épicier n'a pas d'eau minérale.", ok: false, explain: "He has no sparkling water, but he has still water (de l'eau plate)." },
    { type: "fill", tag: "Quantité", sentence: "un litre ___ eau", options: ["de l'", "d'", "des"], answer: 1, explain: "quantity + <b>d'</b> before a vowel: [[un litre d'eau]]." },
    { type: "fill", tag: "Quantité", sentence: "un kilo ___ carottes", options: ["des", "de", "de la"], answer: 1, explain: "[[un kilo de carottes]]" },
    { type: "fill", tag: "Quantité", sentence: "une bouteille ___ huile", options: ["de l'", "d'", "de la"], answer: 1, explain: "[[une bouteille d'huile]]" },
    { type: "fill", tag: "Quantité", sentence: "beaucoup ___ oignons", options: ["des", "d'", "de les"], answer: 1, explain: "[[beaucoup d'oignons]]" },
    { type: "fill", tag: "Quantité", sentence: "un paquet ___ sucre", options: ["du", "de", "de le"], answer: 1, explain: "[[un paquet de sucre]]" },
    { type: "fill", tag: "du / de la / de l' / des", sentence: "Il me faut ___ jambon.", options: ["du", "de la", "de l'", "des"], answer: 0, explain: "le jambon → [[du jambon]]" },
    { type: "fill", tag: "du / de la / de l' / des", sentence: "Je voudrais ___ farine.", options: ["du", "de la", "de l'", "des"], answer: 1, explain: "la farine → [[de la farine]]" },
    { type: "fill", tag: "du / de la / de l' / des", sentence: "Vous avez ___ huile d'olive ?", options: ["du", "de la", "de l'", "des"], answer: 2, explain: "l'huile → [[de l'huile]]" },
    { type: "fill", tag: "du / de la / de l' / des", sentence: "Je vais prendre ___ biscuits.", options: ["du", "de la", "de l'", "des"], answer: 3, explain: "les biscuits → [[des biscuits]]" },
    { type: "fill", tag: "du / de la / de l' / des", sentence: "Une douzaine ___ œufs, s'il vous plaît.", options: ["des", "d'", "de l'"], answer: 1, explain: "quantity → [[une douzaine d'œufs]]" },
    { type: "fill", tag: "du / de la / de l' / des", sentence: "Désolé, je n'ai plus ___ eau gazeuse.", options: ["de l'", "d'", "des"], answer: 1, explain: "negative → <b>plus d'</b>" },
    { type: "mcq", tag: "Vocabulaire", q: "Une livre de cerises, c'est…", options: ["1 kilo", "500 grammes", "un livre sur les cerises"], answer: 1, explain: "<b>une</b> livre (feminine) = 500 g · <b>un</b> livre (masculine) = a book!" },
    { type: "mcq", tag: "Vocabulaire", q: "Which one is NOT a vegetable?", options: ["un poireau", "une aubergine", "une pêche", "un chou-fleur"], answer: 2 },
    { type: "mcq", tag: "Vocabulaire", q: "L'eau « plate », c'est…", options: ["sparkling water", "still water", "tap water only"], answer: 1, explain: "plate = without bubbles · gazeuse = sparkling." },
    { type: "type", tag: "Écrivez", q: "Ask for 2 kilos of potatoes, starting with « Je voudrais… »", answers: ["Je voudrais deux kilos de pommes de terre.", "Je voudrais 2 kilos de pommes de terre.", "Je voudrais deux kilos de pommes de terre, s'il vous plaît."] },
    { type: "type", tag: "Écrivez", q: "Say you need some butter: « Il me faut… »", answers: ["Il me faut du beurre.", "Il me faut du beurre, s'il vous plaît."] },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce que je vous sers ?", options: ["Une livre de fraises, s'il vous plaît.", "Je sers le dîner.", "Merci, c'est cadeau."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Désolé, je n'ai plus de comté.", options: ["Ce n'est pas grave. Alors, un morceau de brie.", "Oui, un gros morceau.", "Une douzaine, s'il vous plaît."], answer: 0 },
    { type: "order", tag: "Construisez", en: "I'd like four slices of ham, please.", words: ["Je", "voudrais", "quatre", "tranches", "de", "jambon,", "s'il", "vous", "plaît."] },
    { type: "order", tag: "Remettez dans l'ordre", lines: true, words: ["— Bonjour, monsieur, vous désirez ?", "— Je voudrais six pêches et une livre de cerises, s'il vous plaît.", "— Voilà, monsieur. Et avec ceci ?", "— Ce sera tout, merci."] }
  ],

  roleplays: [
    { title: "🧺 Au marché", brief: "Here's your list. Ask the stallholder for everything, using different phrases.", memo: ["poivrons (2)", "pommes (6)", "cerises (1 kg)", "haricots verts (500 g)", "tomates (12)"], partner: "m2", you: "f1",
      turns: [
        { them: "Bonjour, madame ! Qu'est-ce que je vous sers ?", hint: "Ask for two peppers and six apples.", you: "Bonjour ! Je voudrais deux poivrons et six pommes, s'il vous plaît." },
        { them: "Voilà. Et avec ceci ?", hint: "Ask for a kilo of cherries with [[Je vais prendre…]].", you: "Je vais prendre aussi un kilo de cerises." },
        { them: "Un kilo de cerises… Voilà ! Ce sera tout ?", hint: "No: you need 500 g of green beans ([[une livre de…]]) and a dozen tomatoes.", you: "Non, il me faut aussi une livre de haricots verts et une douzaine de tomates." },
        { them: "Et voilà ! Ça fait quatorze euros, madame.", hint: "Pay and say goodbye.", you: "Voilà. Merci, au revoir !" }
      ] },
    { title: "🧀 À l'épicerie", brief: "Buy Roquefort, 500 g of butter, vinegar and flour. Use four different sentences.", memo: ["roquefort", "beurre (500 g)", "vinaigre", "farine"], partner: "m5", you: "m3",
      turns: [
        { them: "Bonjour, monsieur. Vous désirez ?", hint: "Ask for a piece of Roquefort.", you: "Bonjour, je voudrais un morceau de roquefort, s'il vous plaît." },
        { them: "Un gros morceau ou un petit ?", hint: "A small one.", you: "Un petit, s'il vous plaît." },
        { them: "Voilà. Et avec ceci ?", hint: "Use [[Donnez-moi…]] for half a kilo of butter.", you: "Donnez-moi aussi une livre de beurre." },
        { them: "Ce sera tout ?", hint: "Use [[Il me faut…]] for a bottle of vinegar and [[Je vais prendre…]] for a packet of flour.", you: "Non, il me faut une bouteille de vinaigre, et je vais prendre un paquet de farine." }
      ] }
  ],

  culture: [
    { icon: "⚖️", kind: "Remarque linguistique", t: "[[une livre]] = 500 g", d: "French markets still use the old <b>livre</b> (pound), now fixed at exactly 500 g. <i>Un demi-kilo</i> exists but is rarely heard. Careful: [[f:une livre]] (a pound) ≠ [[m:un livre]] (a book)." },
    { icon: "💧", kind: "Remarque de vocabulaire", t: "[[l'eau plate]] or [[l'eau gazeuse]]?", d: "<b>Plate</b> (flat) = still, like Evian or Volvic. <b>Gazeuse</b> = sparkling, like Perrier or Badoit. In a restaurant, [[une carafe d'eau]] (tap water) is free." },
    { icon: "🧺", kind: "Culture", t: "Le marché", d: "Almost every French town has an open-air market once or twice a week. Sellers often let you taste, round prices down, or add a bunch of herbs: [[C'est cadeau !]]. At some stalls you don't touch the fruit: the seller picks it for you." },
    { icon: "🧀", kind: "Culture", t: "Comté, roquefort, brie…", d: "France has hundreds of cheeses. At the cheese counter you buy [[un morceau]] and can say how big with your hands or in grams. Comté is a hard cheese from the Jura mountains." },
    { icon: "🥚", kind: "Langue", t: "Why “some”?", d: "English often drops the article (<i>I buy bread</i>). French can't: every noun needs a little word in front. If you don't know which one, [[du]] / [[de la]] / [[des]] is the shopping default." }
  ],
  tips: [
    { icon: "🧠", t: "Quantity? Just “de”!", d: "Memory hook: <b>numbers and amounts eat the article</b>. un kilo <s>des</s> → un kilo <b>de</b>." },
    { icon: "🔤", t: "de + vowel = d'", d: "[[d'oignons]], [[d'abricots]], [[d'eau]], [[d'huile]]. The apostrophe is compulsory." },
    { icon: "🛒", t: "Make your own list", d: "Write your next real shopping list in French with du / de la / des, then turn it into exact quantities: <i>du lait → un litre de lait</i>." }
  ],
  mistakes: [
    ["un kilo des tomates", "un kilo de tomates", "quantity + de"],
    ["beaucoup des amis", "beaucoup d'amis", "beaucoup de / d'"],
    ["Je n'ai pas des œufs.", "Je n'ai pas d'œufs.", "pas de after a negative"],
    ["du eau", "de l'eau", "l'eau → de l'"],
    ["une douzaine des œufs", "une douzaine d'œufs", "quantity + d'"],
    ["un demi-kilo de cerises", "une livre de cerises", "more natural"]
  ]
});
