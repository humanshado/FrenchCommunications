// Chapitre 1 · Demander des articles (book pp. 8–11)
// Situations: 1. À la boulangerie-pâtisserie · 2. À la poste
// Grammar: masculin / féminin / pluriel des noms · structure de la question simple
// Dialogues and activities are original, built on the book's situations, grammar and vocabulary.
LESSONS.push({
  id: "c01", rubrique: 1, num: 1,
  title: "Asking for items",
  titleFr: "Demander des articles",
  pages: "Book pp. 8–11",
  goals: [
    "Ask for things politely in a shop: [[Je voudrais…]], [[Je vais prendre…]], [[Donnez-moi…]]",
    "Understand what the shop assistant says: [[Madame ?]], [[Et avec ceci ?]], [[Ce sera tout ?]]",
    "Use [[m:un]] / [[f:une]] / [[pl:des]] and know whether a noun is masculine or feminine",
    "Name flavours with [[m:au chocolat]], [[f:à la fraise]], [[pl:aux pommes]]",
    "Ask a yes/no question three ways: [[Avez-vous… ?]] · [[Est-ce que vous avez… ?]] · [[Vous avez… ?]]",
    "Send a parcel and buy stamps at the post office"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Asking for items in a shop and at the post office"],
    ["🧩", "Grammaire", "masculine / feminine / plural nouns · à + le = au · the simple question"],
    ["🗂️", "Vocabulaire", "bread, pastries, cakes, flavours · parcels, stamps, letters"],
    ["⭐", "The phrase to learn first", "[[Je voudrais…, s'il vous plaît.]] It works in every shop in France."]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "At the baker's and pastry shop", titleFr: "À la boulangerie-pâtisserie",
      note: "Monsieur Lambert buys breakfast and a dessert for four. Notice how the baker leads the conversation: [[Et avec ceci ?]] … [[Ce sera tout ?]]",
      scene: "boulangerie", staff: "La boulangère", people: { "La boulangère": "f2", "Le client": "m6" },
      lines: [
        ["La boulangère", "Bonjour, monsieur !", "Good morning, sir!"],
        ["Le client", "Bonjour, madame. Je voudrais une baguette et deux croissants au beurre, s'il vous plaît.", "Good morning. I'd like a baguette and two butter croissants, please."],
        ["La boulangère", "Voilà, monsieur. Et avec ceci ?", "Here you are, sir. Anything else? (lit. and with this?)"],
        ["Le client", "Je vais prendre aussi un éclair au café et une tarte pour quatre personnes.", "I'll also take a coffee éclair and a tart for four people."],
        ["La boulangère", "Qu'est-ce que vous préférez, comme tarte ? Nous avons des tartes aux pommes, aux abricots, au citron…", "What kind of tart would you like? We have apple, apricot, lemon tarts…"],
        ["Le client", "Une tarte au citron, c'est parfait.", "A lemon tart, that's perfect."],
        ["La boulangère", "Très bien. Ce sera tout ?", "Very good. Will that be all?"],
        ["Le client", "Oui, merci. Ça fait combien ?", "Yes, thank you. How much is that?"],
        ["La boulangère", "Dix-neuf euros quarante, s'il vous plaît.", "Nineteen euros forty, please."],
        ["Le client", "Voilà. Merci, bonne journée !", "Here you are. Thank you, have a nice day!"],
        ["La boulangère", "Merci, à vous aussi. Au revoir, monsieur !", "Thank you, you too. Goodbye, sir!"]
      ],
      glossary: [["Et avec ceci ?", "anything else?"], ["Ce sera tout ?", "will that be all?"], ["Ça fait combien ?", "how much is it?"], ["bonne journée", "have a nice day"]]
    },
    {
      id: "d2", n: 2, title: "At the post office", titleFr: "À la poste",
      note: "Aïcha sends a parcel to her sister in Canada and buys stamps. Listen for the three ways of asking a question.",
      scene: "poste", staff: "Le postier", people: { "Le postier": "m4", "Aïcha": "f4" },
      lines: [
        ["Le postier", "Bonjour, madame. Je vous écoute.", "Hello, madam. How can I help? (lit. I'm listening to you)"],
        ["Aïcha", "Bonjour, monsieur. Je voudrais envoyer ce colis au Canada, s'il vous plaît.", "Hello. I'd like to send this parcel to Canada, please."],
        ["Le postier", "En tarif normal ou en prioritaire ?", "Standard rate or priority?"],
        ["Aïcha", "C'est combien, en prioritaire ?", "How much is it by priority?"],
        ["Le postier", "Vingt-quatre euros. En tarif normal, dix-sept euros.", "Twenty-four euros. At the standard rate, seventeen euros."],
        ["Aïcha", "En tarif normal, alors. Ce n'est pas urgent.", "Standard, then. It's not urgent."],
        ["Le postier", "D'accord. Vous devez remplir cette fiche de douane. Qu'est-ce qu'il y a dans le colis ?", "All right. You need to fill in this customs form. What's in the parcel?"],
        ["Aïcha", "Des vêtements pour ma sœur et deux livres de cuisine.", "Clothes for my sister and two cookbooks."],
        ["Le postier", "Merci. Il vous faut autre chose ?", "Thank you. Do you need anything else?"],
        ["Aïcha", "Oui. Est-ce que vous avez des timbres pour l'Europe ?", "Yes. Do you have stamps for Europe?"],
        ["Le postier", "Bien sûr. À l'unité ou en carnet ?", "Of course. Single stamps or a book of stamps?"],
        ["Aïcha", "Donnez-moi un carnet de dix timbres, s'il vous plaît. Vous avez aussi des enveloppes ?", "Give me a book of ten stamps, please. Do you have envelopes too?"],
        ["Le postier", "Oui, voilà. Au total, ça fait trente et un euros cinquante.", "Yes, here you are. Altogether that's thirty-one euros fifty."]
      ],
      glossary: [["un colis", "a parcel"], ["en prioritaire", "by priority mail"], ["une fiche de douane", "a customs form"], ["un carnet de timbres", "a book of stamps"]]
    }
  ],

  vocab: [
    { t: "du pain", en: "bread", pic: "🍞", cat: "Le pain", g: "m", pr: "dü PIN (nasal)" },
    { t: "une baguette", en: "a baguette (French stick)", pic: "🥖", cat: "Le pain", g: "f", pr: "ba-GET" },
    { t: "un pain complet", en: "a wholemeal loaf", pic: "🍞", cat: "Le pain", g: "m" },
    { t: "un pain de mie", en: "a soft sandwich loaf", pic: "🍞", cat: "Le pain", g: "m" },
    { t: "un pain de campagne", en: "a country loaf", pic: "🥯", cat: "Le pain", g: "m" },
    { t: "un croissant", en: "a croissant", pic: "🥐", cat: "Les viennoiseries", g: "m", pr: "krwa-SAN (final t silent)" },
    { t: "un pain au chocolat", en: "a chocolate croissant", pic: "🍫", cat: "Les viennoiseries", g: "m" },
    { t: "une brioche", en: "a brioche (sweet bun)", pic: "🧁", cat: "Les viennoiseries", g: "f", pr: "bree-OSH" },
    { t: "un chausson aux pommes", en: "an apple turnover", pic: "🥟", cat: "Les viennoiseries", g: "m", pr: "sho-SON o POM" },
    { t: "des viennoiseries", en: "pastries made with dough (croissants etc.)", pic: "🥐", cat: "Les viennoiseries", g: "pl", pr: "vyen-waz-REE" },
    { t: "un gâteau", en: "a cake", pic: "🎂", cat: "Les gâteaux", g: "m", pr: "ga-TOH" },
    { t: "des gâteaux", en: "cakes", pic: "🍰", cat: "Les gâteaux", g: "pl", note: "-eau → -eaux in the plural" },
    { t: "un éclair au café", en: "a coffee éclair", pic: "☕", cat: "Les gâteaux", g: "m" },
    { t: "un millefeuille", en: "a mille-feuille (custard slice)", pic: "🍰", cat: "Les gâteaux", g: "m", pr: "meel-FUH-y" },
    { t: "un chou à la crème", en: "a cream puff", pic: "🧁", cat: "Les gâteaux", g: "m", pr: "SHOO a la KREM" },
    { t: "une tarte", en: "a tart", pic: "🥧", cat: "Les gâteaux", g: "f" },
    { t: "une tarte aux pommes", en: "an apple tart", pic: "🍎", cat: "Les gâteaux", g: "f" },
    { t: "une tarte aux fraises", en: "a strawberry tart", pic: "🍓", cat: "Les gâteaux", g: "f" },
    { t: "une tarte au citron", en: "a lemon tart", pic: "🍋", cat: "Les gâteaux", g: "f" },
    { t: "une tarte aux abricots", en: "an apricot tart", pic: "🍑", cat: "Les gâteaux", g: "f", pr: "o-z-abree-KOH (liaison)" },
    { t: "des bonbons", en: "sweets, candy", pic: "🍬", cat: "Les douceurs", g: "pl" },
    { t: "du chocolat", en: "chocolate", pic: "🍫", cat: "Les douceurs", g: "m", pr: "sho-ko-LA" },
    { t: "une glace", en: "an ice cream", pic: "🍦", cat: "Les douceurs", g: "f" },
    { t: "une glace à la vanille", en: "a vanilla ice cream", pic: "🍨", cat: "Les douceurs", g: "f" },
    { t: "un sorbet au citron", en: "a lemon sorbet", pic: "🍧", cat: "Les douceurs", g: "m" },
    { t: "une boulangerie", en: "a bakery", pic: "🏪", cat: "Les commerces", g: "f" },
    { t: "une pâtisserie", en: "a cake shop; a pastry", pic: "🍰", cat: "Les commerces", g: "f" },
    { t: "le boulanger, la boulangère", en: "the baker (man / woman)", pic: "👩‍🍳", cat: "Les commerces" },
    { t: "la poste", en: "the post office", pic: "📮", cat: "À la poste", g: "f" },
    { t: "un colis", en: "a parcel (= un paquet)", pic: "📦", cat: "À la poste", g: "m", pr: "ko-LEE" },
    { t: "un paquet", en: "a parcel, a packet", pic: "📦", cat: "À la poste", g: "m", pr: "pa-KAY" },
    { t: "une lettre", en: "a letter", pic: "✉️", cat: "À la poste", g: "f" },
    { t: "une carte postale", en: "a postcard", pic: "🖼️", cat: "À la poste", g: "f" },
    { t: "une enveloppe", en: "an envelope", pic: "✉️", cat: "À la poste", g: "f" },
    { t: "un timbre", en: "a stamp", pic: "🖼️", cat: "À la poste", g: "m", pr: "TAN-br" },
    { t: "un carnet de timbres", en: "a book of 10 stamps", pic: "📒", cat: "À la poste", g: "m" },
    { t: "le tarif", en: "the rate, the price (= le prix)", pic: "🏷️", cat: "À la poste", g: "m" },
    { t: "en tarif normal", en: "at the standard rate", pic: "🐢", cat: "À la poste" },
    { t: "en prioritaire", en: "by priority mail", pic: "🚀", cat: "À la poste" },
    { t: "une fiche de douane", en: "a customs form", pic: "📝", cat: "À la poste", g: "f" },
    { t: "le code postal", en: "the postcode", pic: "🔢", cat: "À la poste", g: "m" },
    { t: "l'expéditeur", en: "the sender", pic: "📤", cat: "À la poste", g: "m" },
    { t: "le destinataire", en: "the addressee", pic: "📥", cat: "À la poste", g: "m" },
    { t: "envoyer", en: "to send", pic: "📤", cat: "Les verbes" },
    { t: "recevoir", en: "to receive", pic: "📥", cat: "Les verbes" },
    { t: "prendre", en: "to take (= to buy, in a shop)", pic: "🤲", cat: "Les verbes" },
    { t: "s'il vous plaît", en: "please (polite)", pic: "🙏", cat: "La politesse" },
    { t: "merci", en: "thank you", pic: "😊", cat: "La politesse" },
    { t: "Bonne journée !", en: "Have a nice day!", pic: "☀️", cat: "La politesse" },
    { t: "Voilà.", en: "Here you are. / There you go.", pic: "🤲", cat: "La politesse" }
  ],

  grammar: [
    {
      id: "g-genre",
      title: "Masculine, feminine, plural: [[m:un]] · [[f:une]] · [[pl:des]]",
      body: [
        "Every French noun is <b>masculine</b> or <b>feminine</b>, even bread and stamps. The little word in front tells you which: [[m:un croissant]] (masculine), [[f:une baguette]] (feminine). In the plural both become [[pl:des]]: [[pl:des croissants]], [[pl:des baguettes]].",
        "So <b>always learn a noun with its article</b>. Don't learn <i>tarte</i>; learn [[f:une tarte]]. In this course the colours help: <span class='g-m'>blue = masculine</span>, <span class='g-f'>pink = feminine</span>, <span class='g-pl'>purple = plural</span>.",
        "The definite article (<i>the</i>) works the same way: [[m:le pain]], [[f:la poste]], [[pl:les timbres]]. Before a vowel or a silent h, <b>le</b> and <b>la</b> both shorten to <b>l'</b>: [[l'expéditeur]], [[l'enveloppe]]."
      ],
      info: [
        { type: "gender", title: "🎨 One noun, one gender", cols: [
          { g: "m", badge: "un · le", head: "Masculin", items: ["un croissant", "un bonbon", "un gâteau au chocolat", "un timbre", "un colis"], note: "Often masculine: words ending in <b>-eau</b>, <b>-ment</b>, <b>-age</b>, <b>-isme</b>." },
          { g: "f", badge: "une · la", head: "Féminin", items: ["une tarte", "une brioche", "une glace à la fraise", "une lettre", "une enveloppe"], note: "Often feminine: words ending in <b>-tte</b>, <b>-che</b>, <b>-tion</b>, <b>-ie</b>, <b>-ure</b>." },
          { g: "pl", badge: "des · les", head: "Pluriel", items: ["des fruits", "des gâteaux", "des tartes aux pommes", "des timbres", "des colis"], note: "Add <b>-s</b> (silent!). <b>-eau → -eaux</b>. Nouns ending in <b>-s, -x, -z</b> don't change: <i>un colis → des colis</i>." }
        ] },
        { type: "pics", title: "🖼️ Picture dictionary · in the shop window", from: ["Le pain", "Les viennoiseries", "Les gâteaux"] }
      ],
      widget: {
        type: "sort", label: "Sort the shop · masculine, feminine or plural?",
        cols: [{ k: "m", label: "un (masculin)", color: "var(--m)" }, { k: "f", label: "une (féminin)", color: "var(--f)" }, { k: "pl", label: "des (pluriel)", color: "var(--pl)" }],
        items: [
          { t: "baguette", k: "f", pic: "🥖", say: "une baguette" }, { t: "croissant", k: "m", pic: "🥐", say: "un croissant" }, { t: "bonbons", k: "pl", pic: "🍬", say: "des bonbons" },
          { t: "brioche", k: "f", pic: "🧁", say: "une brioche" }, { t: "gâteau", k: "m", pic: "🎂", say: "un gâteau" }, { t: "glace", k: "f", pic: "🍦", say: "une glace" },
          { t: "gâteaux", k: "pl", pic: "🍰", say: "des gâteaux" }, { t: "timbre", k: "m", pic: "🖼️", say: "un timbre" }, { t: "lettre", k: "f", pic: "✉️", say: "une lettre" },
          { t: "colis (×3)", k: "pl", pic: "📦", say: "des colis" }, { t: "millefeuille", k: "m", pic: "🍰", say: "un millefeuille" }, { t: "enveloppe", k: "f", pic: "✉️", say: "une enveloppe" }
        ]
      }
    },
    {
      id: "g-au",
      title: "Flavours and fillings: [[m:au chocolat]] · [[f:à la fraise]] · [[pl:aux pommes]]",
      body: [
        "To say what a cake or ice cream is <i>made with</i>, French uses <b>à + the article</b>: <i>a tart with the lemon</i>. But <b>à</b> and <b>le</b> can't stand side by side: they melt into one word.",
        "<b>à + le = au</b> · <b>à + les = aux</b> · but <b>à + la</b> and <b>à + l'</b> stay as they are.",
        "Fruit you count (apples, strawberries, apricots) usually goes in the plural: [[une tarte aux pommes]], [[une tarte aux fraises]]. A single big flavour stays singular: [[une tarte au citron]], [[un éclair au café]], [[une glace à la vanille]]."
      ],
      info: { type: "merge", title: "⚗️ The fusion rule", rows: [
        { a: "à", b: "le", g: "m", r: "au", ex: "un éclair au chocolat", en: "a chocolate éclair" },
        { a: "à", b: "la", g: "f", r: "à la", ex: "une glace à la fraise", en: "a strawberry ice cream", no: true },
        { a: "à", b: "l'", g: "x", r: "à l'", ex: "un gâteau à l'orange", en: "an orange cake", no: true },
        { a: "à", b: "les", g: "pl", r: "aux", ex: "une tarte aux abricots", en: "an apricot tart" }
      ], note: "Hear the liaison: [[aux abricots]] sounds like <i>o-z-abricots</i>, because the silent x is pronounced <b>z</b> before a vowel." },
      widget: {
        type: "contract", label: "Bake a tart · choose a flavour (and plural for fruit you count)",
        preps: [{ p: "à", label: "une tarte… (à)", frame: "une tarte" }, { p: "à", label: "une glace… (à)", frame: "une glace" }],
        nouns: [{ t: "citron", g: "m", pic: "🍋" }, { t: "chocolat", g: "m", pic: "🍫" }, { t: "pomme", g: "f", pic: "🍎" }, { t: "fraise", g: "f", pic: "🍓" }, { t: "framboise", g: "f", pic: "🫐" }, { t: "abricot", g: "m", v: true, pic: "🍑" }, { t: "orange", g: "f", v: true, pic: "🍊" }, { t: "vanille", g: "f", pic: "🌼" }, { t: "menthe", g: "f", pic: "🌿" }]
      }
    },
    {
      id: "g-question",
      title: "The simple question: three registers",
      body: [
        "A yes/no question can be made in <b>three</b> ways. They all mean the same; they differ in how formal they sound.",
        "<b>Soutenu</b> (formal, written): turn the verb and subject around and add a hyphen: [[Avez-vous des timbres ?]] · <b>Courant</b> (everyday, always correct): put [[Est-ce que…]] in front: [[Est-ce que vous avez des timbres ?]] · <b>Familier</b> (casual, spoken): keep the sentence and just make your voice <b>go up</b> at the end: [[Vous avez des timbres ?]]",
        "In a shop, the middle one is the safest choice. The casual one is extremely common in speech, so you'll hear it all the time."
      ],
      info: { type: "ladder", title: "🪜 One question, three registers", levels: [
        { name: "Soutenu", en: "formal", color: "#7b4fb5", ex: ["Avez-vous des timbres ?", "Voulez-vous un sac ?"], note: "verb–subject inversion with a hyphen" },
        { name: "Courant", en: "everyday", color: "#2f8a4f", ex: ["Est-ce que vous avez des timbres ?", "Est-ce que vous voulez un sac ?"], note: "Est-ce que + normal order: always safe" },
        { name: "Familier", en: "casual", color: "#b5652b", ex: ["Vous avez des timbres ?", "Vous voulez un sac ?"], note: "normal order + rising voice ↗" }
      ] },
      widget: {
        type: "combo", label: "Build the question · pick a register and a question",
        rows: [{ k: "s", label: "🎩 soutenu" }, { k: "c", label: "👔 courant" }, { k: "f", label: "👕 familier" }],
        cols: [{ k: "timbres", label: "📮 stamps?" }, { k: "envoyer", label: "📦 send it priority?" }, { k: "code", label: "🔢 know the postcode?" }, { k: "poste", label: "🏤 work at the post office?" }, { k: "tarte", label: "🥧 have lemon tarts?" }],
        out: {
          "s|timbres": ["Avez-vous des timbres ?", "Do you have any stamps?", "inversion: vous avez → <b>avez-vous</b>"],
          "c|timbres": ["Est-ce que vous avez des timbres ?", "Do you have any stamps?", "Est-ce que + vous avez"],
          "f|timbres": ["Vous avez des timbres ?", "Do you have any stamps?", "same as a statement, voice rising ↗"],
          "s|envoyer": ["Envoyez-vous ce colis en prioritaire ?", "Are you sending this parcel priority?", "vous envoyez → <b>envoyez-vous</b>"],
          "c|envoyer": ["Est-ce que vous envoyez ce colis en prioritaire ?", "Are you sending this parcel priority?", "Est-ce que + vous envoyez"],
          "f|envoyer": ["Vous envoyez ce colis en prioritaire ?", "Are you sending this parcel priority?", "voice rising ↗"],
          "s|code": ["Connaissez-vous le code postal ?", "Do you know the postcode?", "vous connaissez → <b>connaissez-vous</b>"],
          "c|code": ["Est-ce que vous connaissez le code postal ?", "Do you know the postcode?", "Est-ce que + vous connaissez"],
          "f|code": ["Vous connaissez le code postal ?", "Do you know the postcode?", "voice rising ↗"],
          "s|poste": ["Travaillez-vous à la poste ?", "Do you work at the post office?", "vous travaillez → <b>travaillez-vous</b>"],
          "c|poste": ["Est-ce que vous travaillez à la poste ?", "Do you work at the post office?", "Est-ce que + vous travaillez"],
          "f|poste": ["Vous travaillez à la poste ?", "Do you work at the post office?", "voice rising ↗"],
          "s|tarte": ["Avez-vous des tartes au citron ?", "Do you have lemon tarts?", "inversion + hyphen"],
          "c|tarte": ["Est-ce que vous avez des tartes au citron ?", "Do you have lemon tarts?", "Est-ce que + vous avez"],
          "f|tarte": ["Vous avez des tartes au citron ?", "Do you have lemon tarts?", "voice rising ↗"]
        }
      },
      after: ["<b>Answering:</b> [[Oui, j'ai des timbres.]] / [[Non, je n'ai pas de timbres.]] After a negative, <b>des</b> becomes <b>de</b>; you'll practise this in chapter 2."]
    },
    {
      id: "g-ticket",
      title: "Reading the bill: [[Ça fait combien ?]]",
      body: ["Prices are written with a <b>comma</b> and the € sign after the number: <b>19,40 €</b>. You say the euros, then the cents: [[dix-neuf euros quarante]]. Here is Monsieur Lambert's receipt; tap a line to hear it."],
      info: { type: "card", style: "receipt", title: "Boulangerie Dupain", sub: "12, rue des Lilas · Lyon", rows: [["1 baguette", "1,20 €", "une baguette, un euro vingt"], ["2 croissants au beurre", "2,20 €", "deux croissants, deux euros vingt"], ["1 éclair au café", "2,60 €", "un éclair au café, deux euros soixante"], ["1 tarte au citron (4 pers.)", "13,40 €", "une tarte au citron, treize euros quarante"], ["TOTAL", "19,40 €", "total : dix-neuf euros quarante"]], foot: "Merci de votre visite · Bonne journée !" }
    }
  ],

  expressions: [
    { fn: "Asking for something", fnEn: "the customer", icon: "🛒", items: [
      ["Je voudrais une baguette, s'il vous plaît.", "I'd like a baguette, please.", "poli", true],
      ["Je vais prendre deux croissants.", "I'll take two croissants.", "std", true],
      ["Donnez-moi un carnet de timbres.", "Give me a book of stamps.", "std"],
      ["Un croissant, s'il vous plaît !", "A croissant, please! (very simply)", "std"],
      ["Je voudrais envoyer ce colis au Canada.", "I'd like to send this parcel to Canada.", "poli"]
    ] },
    { fn: "Asking if they have it", fnEn: "do you have…?", icon: "❓", items: [
      ["Est-ce que vous avez des timbres ?", "Do you have stamps?", "std", true],
      ["Vous avez des enveloppes ?", "Do you have envelopes?", "fam"],
      ["Avez-vous des tartes aux fraises ?", "Do you have strawberry tarts?", "sout"]
    ] },
    { fn: "What the shop assistant says", fnEn: "learn to recognise these", icon: "🧑‍🍳", items: [
      ["Madame ? / Monsieur ?", "Yes, madam? (= what would you like?)", "poli", true],
      ["Vous désirez ?", "What would you like?", "poli"],
      ["Je vous écoute.", "How can I help?", "poli"],
      ["Et avec ceci ?", "Anything else?", "std", true],
      ["Il vous faut autre chose ?", "Do you need anything else?", "std"],
      ["Ce sera tout ?", "Will that be all?", "std", true]
    ], reply: ["Oui, c'est tout, merci.", "Non, je voudrais aussi…"] },
    { fn: "Finishing", fnEn: "paying and leaving", icon: "👋", items: [
      ["Ça fait combien ?", "How much is that?", "std", true],
      ["Voilà.", "Here you are.", "std"],
      ["Merci, bonne journée !", "Thanks, have a nice day!", "std", true],
      ["Au revoir, madame.", "Goodbye, madam.", "poli"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · buying something in a French shop", lanes: ["La vendeuse", "Le client"], av: ["f2", "m6"], steps: [
    { s: 0, fr: "Bonjour, monsieur ! … Monsieur ?", en: "Hello! … Yes, sir?", alt: ["Vous désirez ?", "Je vous écoute."] },
    { s: 1, fr: "Bonjour, madame. Je voudrais…, s'il vous plaît.", en: "Hello. I'd like…, please.", alt: ["Je vais prendre…", "Donnez-moi…"] },
    { s: 0, fr: "Voilà. Et avec ceci ?", en: "Here you are. Anything else?", alt: ["Il vous faut autre chose ?"] },
    { s: 1, fr: "Je vais prendre aussi…", en: "I'll also take…" },
    { s: 0, fr: "Ce sera tout ?", en: "Will that be all?" },
    { s: 1, fr: "Oui, merci. Ça fait combien ?", en: "Yes, thanks. How much is it?" },
    { s: 0, fr: "Ça fait 8,50 €.", en: "That's €8.50." },
    { s: 1, fr: "Voilà. Merci, bonne journée !", en: "Here you are. Thanks, have a nice day!" }
  ] },

  sounds: {
    intro: "Shop French is full of <b>nasal vowels</b> and <b>silent final letters</b>. Tap, listen, repeat.",
    letters: [
      { l: "an / en", name: "nasal [ɑ̃]", tip: "Say “ah” and let the air go through your nose. Don't pronounce the n! [[croissant]] = <i>krwa-SAN</i>, nasal.", ex: ["croissant", "envoyer", "en prioritaire", "chausson"] },
      { l: "ain / in", name: "nasal [ɛ̃]", tip: "Like the vowel in English “bank” through the nose, with no real n. [[du pain]], [[un timbre]].", ex: ["du pain", "un timbre", "un pain complet", "cinq"] },
      { l: "on", name: "nasal [ɔ̃]", tip: "Round your lips as for “oh”, then nasalise. [[un bonbon]] has it twice.", ex: ["un bonbon", "non", "le citron", "un chausson"] },
      { l: "-t -s -x", name: "silent endings", tip: "Most final consonants are silent: croissan<s>t</s>, chocola<s>t</s>, gâteau<s>x</s>, timbre<s>s</s>. Exceptions to remember: <b>c, r, f, l</b> are often heard (<i>avec, sur, neuf, sel</i>).", ex: ["un chocolat", "des gâteaux", "des timbres", "un colis"] },
      { l: "eau / au", name: "[o]", tip: "Both spellings sound like a pure “oh”, with no glide. [[un gâteau]], [[au chocolat]].", ex: ["un gâteau", "au chocolat", "aux pommes", "un chausson"] },
      { l: "oi", name: "[wa]", tip: "Always “wa”: [[croissant]], [[voilà]], [[au revoir]].", ex: ["voilà", "un croissant", "au revoir", "moi"] }
    ],
    pairs: [
      { a: ["le croissant", "the croissant"], b: ["les croissants", "the croissants"], note: "le [lə] / les [le]: the article tells you the number" },
      { a: ["deux timbres", "two stamps"], b: ["douze timbres", "twelve stamps"], note: "eu [ø] / ou [u]" },
      { a: ["un dessert", "a dessert"], b: ["un désert", "a desert"], note: "ss [s] / s [z]" },
      { a: ["le vin", "the wine"], b: ["le vent", "the wind"], note: "in [ɛ̃] / en [ɑ̃]" }
    ]
  },
  classify: {
    label: "🧑‍🍳 Vendeur ou client ?", q: "Who says this: the shop assistant or the customer?",
    options: ["la vendeuse / le postier", "le client / la cliente"],
    items: [
      { say: "Madame ?", a: 0 }, { say: "Et avec ceci ?", a: 0 }, { say: "Je voudrais une baguette, s'il vous plaît.", a: 1 },
      { say: "Ce sera tout ?", a: 0 }, { say: "Je vais prendre aussi une tarte.", a: 1 }, { say: "Vous désirez ?", a: 0 },
      { say: "Donnez-moi un carnet de timbres.", a: 1 }, { say: "Il vous faut autre chose ?", a: 0 }, { say: "Ça fait combien ?", a: 1 },
      { say: "Est-ce que vous avez des enveloppes ?", a: 1 }, { say: "Vous devez remplir cette fiche de douane.", a: 0 }, { say: "En tarif normal ou en prioritaire ?", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Le client achète du pain.", ok: true, explain: "He buys une baguette: that's bread." },
    { type: "tf", tag: "Dialogue 1", s: "Le client voudrait une tarte pour six personnes.", ok: false, explain: "Pour quatre personnes." },
    { type: "tf", tag: "Dialogue 1", s: "La boulangère propose trois sortes de tarte.", ok: true, explain: "aux pommes, aux abricots, au citron." },
    { type: "tf", tag: "Dialogue 1", s: "Le client choisit la tarte aux pommes.", ok: false, explain: "Une tarte au citron, c'est parfait." },
    { type: "tf", tag: "Dialogue 2", s: "Aïcha envoie une lettre au Canada.", ok: false, explain: "She sends un colis (a parcel)." },
    { type: "tf", tag: "Dialogue 2", s: "Elle choisit le tarif normal.", ok: true, explain: "En tarif normal, alors. Ce n'est pas urgent." },
    { type: "tf", tag: "Dialogue 2", s: "Elle achète un carnet de timbres.", ok: true, explain: "Donnez-moi un carnet de dix timbres." },
    { type: "fill", tag: "un / une / des", sentence: "Je voudrais ___ baguette, s'il vous plaît.", options: ["un", "une", "des"], answer: 1, en: "I'd like a baguette, please.", explain: "baguette is feminine: [[f:une baguette]]." },
    { type: "fill", tag: "un / une / des", sentence: "Je vais prendre ___ croissant.", options: ["un", "une", "des"], answer: 0, explain: "[[m:un croissant]]" },
    { type: "fill", tag: "un / une / des", sentence: "Vous avez ___ bonbons ?", options: ["un", "une", "des"], answer: 2, explain: "bonbons is plural: [[pl:des bonbons]]." },
    { type: "fill", tag: "un / une / des", sentence: "Donnez-moi ___ brioche au sucre.", options: ["un", "une", "des"], answer: 1, explain: "[[f:une brioche]]: -che is a typical feminine ending." },
    { type: "fill", tag: "un / une / des", sentence: "Je voudrais ___ gâteaux pour la fête.", options: ["un", "une", "des"], answer: 2, explain: "gâteaux (-eaux) is plural." },
    { type: "fill", tag: "un / une / des", sentence: "Je voudrais envoyer ___ lettre en Pologne.", options: ["un", "une", "des"], answer: 1, explain: "[[f:une lettre]]" },
    { type: "fill", tag: "au / à la / aux", sentence: "une tarte ___ pommes", options: ["au", "à la", "aux"], answer: 2, explain: "à + les pommes = [[aux pommes]]" },
    { type: "fill", tag: "au / à la / aux", sentence: "un éclair ___ chocolat", options: ["au", "à la", "aux"], answer: 0, explain: "à + le chocolat = [[au chocolat]]" },
    { type: "fill", tag: "au / à la / aux", sentence: "une glace ___ vanille", options: ["au", "à la", "aux"], answer: 1, explain: "la vanille → [[à la vanille]] (no fusion)" },
    { type: "fill", tag: "au / à la / aux", sentence: "un sorbet ___ citron", options: ["au", "à la", "aux"], answer: 0, explain: "le citron → [[au citron]]" },
    { type: "fill", tag: "au / à la / aux", sentence: "un bonbon ___ menthe", options: ["au", "à la", "aux"], answer: 1, explain: "la menthe → [[à la menthe]]" },
    { type: "mcq", tag: "Questions", q: "Which question is in the formal (soutenu) register?", options: ["Vous avez l'adresse ?", "Est-ce que vous avez l'adresse ?", "Avez-vous l'adresse ?"], answer: 2, explain: "Inversion with a hyphen: [[Avez-vous l'adresse ?]]" },
    { type: "mcq", tag: "Questions", q: "Find a question for this answer: « Oui, je travaille à la poste. »", options: ["Est-ce que vous travaillez à la poste ?", "Est-ce que vous envoyez un colis ?", "Est-ce que vous avez la poste ?"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Questions", q: "Find a question for this answer: « Non, je préfère le tarif normal. »", options: ["Vous connaissez le code postal ?", "Vous envoyez le colis en prioritaire ?", "Vous recevez des lettres ?"], answer: 1, sayAnswer: true },
    { type: "type", tag: "Questions", q: "Make it formal with inversion: « Vous avez des timbres ? »", answers: ["Avez-vous des timbres ?", "Avez-vous des timbres"], explain: "vous avez → avez-vous (don't forget the hyphen)." },
    { type: "type", tag: "Questions", q: "Make it everyday with « Est-ce que »: « Vous connaissez le code postal ? »", answers: ["Est-ce que vous connaissez le code postal ?"] },
    { type: "mcq", tag: "Vocabulaire", q: "Which one can you NOT buy at a boulangerie-pâtisserie?", options: ["un chausson aux pommes", "un éclair au chocolat", "du papier à lettres", "une brioche"], answer: 2, explain: "Writing paper is sold at a papeterie (chapter 3)." },
    { type: "mcq", tag: "Vocabulaire", q: "« Un carnet de timbres », c'est…", options: ["1 timbre", "10 timbres", "100 timbres"], answer: 1 },
    { type: "reply", tag: "Que répondre ?", prompt: "Madame ?", options: ["Bonjour, je voudrais un pain au chocolat, s'il vous plaît.", "Oui, c'est moi.", "Au revoir, madame."], answer: 0, explain: "« Madame ? » here means « Vous désirez ? »: say what you want." },
    { type: "reply", tag: "Que répondre ?", prompt: "Et avec ceci ?", options: ["C'est tout, merci.", "Avec plaisir.", "Ceci est un croissant."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Ce sera tout ?", options: ["Oui, merci. Ça fait combien ?", "Tout le monde, merci.", "Ce sera demain."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "En tarif normal ou en prioritaire ?", options: ["En prioritaire, s'il vous plaît.", "Normalement, oui.", "Un carnet, s'il vous plaît."], answer: 0 },
    { type: "order", tag: "Construisez", en: "I'd like a lemon tart, please.", words: ["Je", "voudrais", "une", "tarte", "au", "citron,", "s'il", "vous", "plaît."] },
    { type: "order", tag: "Construisez", en: "Do you also have envelopes?", words: ["Est-ce", "que", "vous", "avez", "aussi", "des", "enveloppes", "?"] },
    { type: "order", tag: "Remettez dans l'ordre", lines: true, q: "Put the dialogue in order.", words: ["— Bonjour, monsieur, vous désirez ?", "— Je voudrais deux croissants, s'il vous plaît.", "— Voilà. Et avec ceci ?", "— C'est tout, merci."] }
  ],

  roleplays: [
    { title: "🥖 À la boulangerie", brief: "You are at the baker's. Ask for a baguette, two pains au chocolat and a croissant, then pay.", memo: ["1 baguette", "2 pains au chocolat", "1 croissant"], partner: "f2", you: "m1",
      turns: [
        { them: "Bonjour ! Madame ? Monsieur ?", themEn: "Hello! Yes?", hint: "Say hello and ask for a baguette, politely.", you: "Bonjour, madame. Je voudrais une baguette, s'il vous plaît.", youEn: "Hello. I'd like a baguette, please." },
        { them: "Voilà. Et avec ceci ?", themEn: "Here you are. Anything else?", hint: "Use [[Je vais prendre…]] for the two pains au chocolat and the croissant.", you: "Je vais prendre aussi deux pains au chocolat et un croissant.", youEn: "I'll also take two chocolate croissants and a croissant." },
        { them: "Très bien. Ce sera tout ?", themEn: "Very good. Will that be all?", hint: "Say yes, and ask how much it is.", you: "Oui, merci. Ça fait combien ?", youEn: "Yes, thank you. How much is that?" },
        { them: "Quatre euros quatre-vingts, s'il vous plaît.", themEn: "€4.80, please.", hint: "Hand over the money and wish her a nice day.", you: "Voilà. Merci, bonne journée !", youEn: "Here you are. Thanks, have a nice day!" }
      ] },
    { title: "📮 À la poste", brief: "You want to send a parcel to Germany (not urgent) and buy two stamps for Senegal.", memo: ["colis → Allemagne", "tarif normal", "2 timbres → Sénégal"], partner: "m4", you: "f4",
      turns: [
        { them: "Bonjour, madame. Je vous écoute.", themEn: "Hello. How can I help?", hint: "Say you'd like to send this parcel to Germany ([[en Allemagne]]).", you: "Bonjour, monsieur. Je voudrais envoyer ce colis en Allemagne, s'il vous plaît.", youEn: "Hello. I'd like to send this parcel to Germany, please." },
        { them: "En tarif normal ou en prioritaire ?", themEn: "Standard or priority?", hint: "It's not urgent.", you: "En tarif normal, s'il vous plaît. Ce n'est pas urgent.", youEn: "Standard, please. It's not urgent." },
        { them: "Voilà. Il vous faut autre chose ?", themEn: "There you go. Anything else?", hint: "Ask if they have stamps for Senegal ([[pour le Sénégal]]).", you: "Oui, est-ce que vous avez des timbres pour le Sénégal ?", youEn: "Yes, do you have stamps for Senegal?" },
        { them: "Oui, bien sûr. Combien ?", themEn: "Yes, of course. How many?", hint: "Ask for two, with [[Donnez-moi…]].", you: "Donnez-moi deux timbres, s'il vous plaît.", youEn: "Give me two stamps, please." }
      ] }
  ],

  culture: [
    { icon: "🙋", kind: "Remarque culturelle", t: "[[Madame ?]] · [[Monsieur ?]]", d: "Said with a rising voice by a shop assistant, it simply means <i>What would you like?</i> (= [[Vous désirez ?]]). Using <b>madame</b> and <b>monsieur</b> is perfectly normal and polite in French, much more than “madam / sir” in English." },
    { icon: "👋", kind: "Savoir-vivre", t: "Always start with [[Bonjour !]]", d: "In France you say <b>bonjour</b> (after about 6 p.m., <b>bonsoir</b>) when you walk into a small shop, before asking for anything. Asking straight away without it sounds rude. And you say <b>merci, au revoir</b> when you leave." },
    { icon: "🥖", kind: "Culture", t: "The daily baguette", d: "Many French people buy fresh bread every day. A <i>baguette tradition</i> is made by the baker's own hand with only flour, water, salt and yeast. You can ask for it [[bien cuite]] (well done) or [[pas trop cuite]] (lightly baked)." },
    { icon: "🍫", kind: "Langue", t: "Pain au chocolat or chocolatine?", d: "In the south-west of France the same pastry is called a <b>chocolatine</b>. It's a famous friendly debate between regions!" },
    { icon: "📮", kind: "Culture", t: "La Poste", d: "The French postal service is yellow and blue. Besides letters and parcels, <i>La Poste</i> also sells envelopes, packaging and gifts, and it's a bank (<i>La Banque Postale</i>)." },
    { icon: "💶", kind: "Langue", t: "Writing prices", d: "French uses a <b>comma</b> for decimals and puts the € sign <b>after</b> the number: <b>8,50 €</b>, read [[huit euros cinquante]]." }
  ],
  tips: [
    { icon: "🎨", t: "Learn the article with the noun", d: "Make a picture in your head: blue for masculine, pink for feminine. When you learn [[f:une tarte]], imagine a pink tart." },
    { icon: "🙏", t: "[[Je voudrais]], not <s>je veux</s>", d: "<i>Je veux</i> (I want) sounds like a child's demand in a shop. <b>Je voudrais</b> (I would like) is the polite, normal form." },
    { icon: "🔁", t: "Copy the assistant's questions", d: "The same three questions come back in every shop: <i>Vous désirez ? · Et avec ceci ? · Ce sera tout ?</i>. Once you recognise them, half the conversation is easy." }
  ],
  mistakes: [
    ["Je veux une baguette.", "Je voudrais une baguette.", "polite form"],
    ["un tarte aux pommes", "une tarte aux pommes", "tarte is feminine"],
    ["un éclair à le chocolat", "un éclair au chocolat", "à + le = au"],
    ["une tarte à les fraises", "une tarte aux fraises", "à + les = aux"],
    ["des gâteaus", "des gâteaux", "-eau → -eaux"],
    ["Avez vous des timbres ?", "Avez-vous des timbres ?", "inversion needs a hyphen"]
  ]
});
