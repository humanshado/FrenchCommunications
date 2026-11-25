// Chapitre 7 · Hésiter (book pp. 30–31)
// Situation: Chez le fleuriste (+ a short bonus scene between friends)
// Grammar: savoir, croire, vouloir au présent
// Dialogues and activities are original, built on the book's situation, grammar and vocabulary.
LESSONS.push({
  id: "c07", rubrique: 1, num: 7,
  title: "Hesitating",
  titleFr: "Hésiter",
  pages: "Book pp. 30–31",
  goals: [
    "Say you're not sure: [[Je ne sais pas trop…]], [[J'hésite un peu…]], [[Je ne suis pas sûr.]]",
    "Ask for advice: [[Qu'est-ce que vous me conseillez ?]]",
    "React with doubt: [[Vous croyez ?]], [[Peut-être…]]",
    "Conjugate [[savoir]], [[croire]] and [[vouloir]] in the present",
    "Buy flowers for the right occasion, and avoid the wrong ones!",
    "Name common flowers and plants"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Hesitating, asking for advice, accepting a suggestion"],
    ["🧩", "Grammaire", "savoir · croire · vouloir (present)"],
    ["🗂️", "Vocabulaire", "flowers, bouquets, plants and occasions"],
    ["⭐", "The phrase to learn first", "[[Qu'est-ce que vous me conseillez ?]] What do you recommend?"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "At the florist's", titleFr: "Chez le fleuriste",
      note: "Karim wants flowers for his grandmother's 80th birthday but can't decide. Count the ways he hesitates, and the forms of [[savoir]], [[croire]] and [[vouloir]].",
      scene: "fleuriste", staff: "La fleuriste", people: { "La fleuriste": "f6", "Karim": "m2" },
      lines: [
        ["La fleuriste", "Bonjour, monsieur. Je peux vous aider ?", "Hello, sir. Can I help you?"],
        ["Karim", "Oui, je voudrais un bouquet, mais je ne sais pas trop quoi choisir…", "Yes, I'd like a bouquet, but I don't really know what to choose…"],
        ["La fleuriste", "C'est pour offrir ?", "Is it a gift?"],
        ["Karim", "Oui, c'est pour l'anniversaire de ma grand-mère. Elle a quatre-vingts ans !", "Yes, it's for my grandmother's birthday. She's eighty!"],
        ["La fleuriste", "Oh, c'est un bel anniversaire ! Vous voulez mettre combien, à peu près ?", "Oh, what a lovely birthday! Roughly how much do you want to spend?"],
        ["Karim", "Je ne sais pas… Peut-être vingt, vingt-cinq euros.", "I don't know… Maybe twenty, twenty-five euros."],
        ["La fleuriste", "Regardez : on peut faire un bouquet rose et blanc, avec des roses et des lis. Ou alors, un bouquet de tulipes de toutes les couleurs.", "Look: we can do a pink and white bouquet with roses and lilies. Or else a bouquet of tulips in every colour."],
        ["Karim", "J'hésite un peu… Qu'est-ce que vous me conseillez ?", "I'm a bit undecided… What do you recommend?"],
        ["La fleuriste", "Ça dépend de la personne. Qu'est-ce qu'elle aime, votre grand-mère ?", "It depends on the person. What does your grandmother like?"],
        ["Karim", "Je crois qu'elle aime beaucoup les roses. Mais je ne suis pas sûr.", "I think she really likes roses. But I'm not sure."],
        ["La fleuriste", "Alors, je vous conseille le bouquet rose et blanc. Il est très élégant.", "Then I recommend the pink and white bouquet. It's very elegant."],
        ["Karim", "Vous croyez ?", "Do you think so?"],
        ["La fleuriste", "Oui, vous allez voir, votre grand-mère va être très contente !", "Yes, you'll see, your grandmother will be very happy!"],
        ["Karim", "D'accord, je le prends. Vous avez aussi une petite carte ?", "All right, I'll take it. Do you have a little card too?"],
        ["La fleuriste", "Bien sûr. Voilà, vous pouvez écrire un petit mot.", "Of course. Here, you can write a little message."]
      ],
      glossary: [["je ne sais pas trop", "I don't really know"], ["à peu près", "roughly"], ["J'hésite.", "I can't decide"], ["Vous croyez ?", "do you think so?"]]
    },
    {
      id: "d2", n: "+", title: "Bonus: which present?", titleFr: "Quel cadeau ?",
      note: "A short extra scene (not in the book) between two friends who use <b>tu</b>: listen for [[tu sais]], [[tu crois]], [[tu veux]].",
      scene: "rue", people: { "Léa": "f3", "Nico": "m5" },
      lines: [
        ["Léa", "Tu sais quoi offrir à Marc pour son anniversaire ?", "Do you know what to give Marc for his birthday?"],
        ["Nico", "Non, je ne sais pas trop. Un livre, peut-être ?", "No, I don't really know. A book, maybe?"],
        ["Léa", "Je ne crois pas. Il ne lit pas beaucoup.", "I don't think so. He doesn't read much."],
        ["Nico", "Tu veux acheter des fleurs ?", "Do you want to buy flowers?"],
        ["Léa", "Des fleurs pour un homme ? Tu crois ?", "Flowers for a man? Do you think so?"],
        ["Nico", "Pourquoi pas ! Ou alors une plante verte pour son nouveau bureau.", "Why not! Or else a green plant for his new office."],
        ["Léa", "Bonne idée ! Mais je ne sais pas s'il a le temps d'arroser une plante…", "Good idea! But I don't know if he has time to water a plant…"],
        ["Nico", "Alors, un cactus ! Pas besoin d'arrosoir.", "A cactus, then! No watering can needed."],
        ["Léa", "Parfait, on fait ça !", "Perfect, let's do that!"]
      ]
    }
  ],

  vocab: [
    { t: "le fleuriste, la fleuriste", en: "the florist", pic: "💐", cat: "Chez le fleuriste" },
    { t: "aller chez le fleuriste", en: "to go to the florist's", pic: "🚶", cat: "Chez le fleuriste" },
    { t: "un bouquet de fleurs", en: "a bunch of flowers", pic: "💐", cat: "Chez le fleuriste", g: "m" },
    { t: "faire un bouquet", en: "to make up a bouquet", pic: "✂️", cat: "Chez le fleuriste" },
    { t: "un bouquet pour un mariage", en: "a wedding bouquet", pic: "💍", cat: "Chez le fleuriste", g: "m" },
    { t: "une gerbe", en: "a funeral wreath / spray (for a death)", pic: "🕊️", cat: "Chez le fleuriste", g: "f", note: "pour un décès = la mort de quelqu'un" },
    { t: "une petite carte", en: "a gift card, a little note", pic: "💌", cat: "Chez le fleuriste", g: "f" },
    { t: "une fleur", en: "a flower", pic: "🌸", cat: "Les fleurs", g: "f" },
    { t: "une rose", en: "a rose", pic: "🌹", cat: "Les fleurs", g: "f" },
    { t: "une tulipe", en: "a tulip", pic: "🌷", cat: "Les fleurs", g: "f" },
    { t: "un lis", en: "a lily", pic: "🪷", cat: "Les fleurs", g: "m", pr: "LEES (s heard!)", alt: ["un lys"] },
    { t: "une marguerite", en: "a daisy", pic: "🌼", cat: "Les fleurs", g: "f" },
    { t: "une orchidée", en: "an orchid", pic: "🌺", cat: "Les fleurs", g: "f", pr: "or-kee-DAY" },
    { t: "un iris", en: "an iris", pic: "🪻", cat: "Les fleurs", g: "m", pr: "ee-REES" },
    { t: "un tournesol", en: "a sunflower", pic: "🌻", cat: "Les fleurs", g: "m" },
    { t: "le muguet", en: "lily of the valley", pic: "🔔", cat: "Les fleurs", g: "m" },
    { t: "une plante à fleurs", en: "a flowering plant", pic: "🪴", cat: "Les plantes", g: "f" },
    { t: "un géranium", en: "a geranium", pic: "🌺", cat: "Les plantes", g: "m", pr: "zhay-ra-NYOM" },
    { t: "un camélia", en: "a camellia", pic: "🌸", cat: "Les plantes", g: "m" },
    { t: "une plante verte", en: "a houseplant (green plant)", pic: "🪴", cat: "Les plantes", g: "f" },
    { t: "un cactus", en: "a cactus", pic: "🌵", cat: "Les plantes", g: "m" },
    { t: "arroser les plantes", en: "to water the plants", pic: "💧", cat: "Les plantes" },
    { t: "un arrosoir", en: "a watering can", pic: "🚿", cat: "Les plantes", g: "m" },
    { t: "Je ne sais pas trop.", en: "I don't really know.", pic: "🤷", cat: "Hésiter" },
    { t: "Je ne suis pas sûr.", en: "I'm not sure. (sûre for a woman)", pic: "😕", cat: "Hésiter", alt: ["Je ne suis pas sûre."] },
    { t: "Peut-être…", en: "Maybe…", pic: "🤔", cat: "Hésiter" },
    { t: "J'hésite un peu.", en: "I'm a bit undecided.", pic: "⚖️", cat: "Hésiter" },
    { t: "Vous croyez ?", en: "Do you think so?", pic: "🧐", cat: "Hésiter" },
    { t: "conseiller", en: "to advise, to recommend", pic: "💡", cat: "Hésiter" },
    { t: "à peu près", en: "roughly, about", pic: "≈", cat: "Hésiter" },
    { t: "savoir", en: "to know (a fact); to know how to", pic: "🧠", cat: "Les verbes" },
    { t: "croire", en: "to believe, to think", pic: "💭", cat: "Les verbes" },
    { t: "vouloir", en: "to want", pic: "🙋", cat: "Les verbes" },
    { t: "content, contente", en: "happy, pleased", pic: "😊", cat: "Les verbes" }
  ],

  grammar: [
    {
      id: "g-verbes",
      title: "[[savoir]] · [[croire]] · [[vouloir]]: the verbs of hesitation",
      body: [
        "Three irregular verbs to talk about what you know, think and want. Their singular forms (<i>je, tu, il</i>) all <b>sound the same</b>; the differences are in <i>nous, vous, ils</i>.",
        "<b>savoir</b> + infinitive or question word: [[Je ne sais pas quoi choisir.]] · [[Tu sais quoi offrir ?]] · <b>croire</b> + que: [[Je crois qu'elle aime les roses.]] · as a reaction: [[Vous croyez ?]] · <b>vouloir</b> + noun or infinitive: [[Je veux un bouquet.]] · [[Vous voulez mettre combien ?]]",
        "Don't mix up <b>savoir</b> (to know a fact) with <b>connaître</b> (to know a person or place). That's for chapter 31; for now: [[Je sais.]] = I know."
      ],
      info: { type: "conj", title: "🧩 Present tense · the red part changes", verbs: [
        { inf: "savoir", en: "to know", forms: ["je sai|s", "tu sai|s", "il sai|t", "nous sav|ons", "vous sav|ez", "ils sav|ent"] },
        { inf: "croire", en: "to believe, think", forms: ["je croi|s", "tu croi|s", "il croi|t", "nous croy|ons", "vous croy|ez", "ils croi|ent"] },
        { inf: "vouloir", en: "to want", forms: ["je v|eux", "tu v|eux", "il v|eut", "nous voul|ons", "vous voul|ez", "ils veul|ent"] }
      ], note: "<b>croire</b>: i becomes <b>y</b> in nous / vous (<i>croyons, croyez</i>), but <i>ils croient</i> keeps the i and sounds exactly like <i>il croit</i>." },
      widget: {
        type: "combo", label: "Build a sentence · pick a person and a verb",
        rows: [{ k: "je", label: "je" }, { k: "tu", label: "tu" }, { k: "elle", label: "elle" }, { k: "nous", label: "nous" }, { k: "vous", label: "vous" }, { k: "ils", label: "ils" }],
        cols: [{ k: "s", label: "🧠 savoir" }, { k: "c", label: "💭 croire" }, { k: "v", label: "🙋 vouloir" }],
        out: {
          "je|s": ["Je ne sais pas quoi choisir.", "I don't know what to choose.", "je sais"], "je|c": ["Je crois que c'est joli.", "I think it's pretty.", "je crois"], "je|v": ["Je veux un bouquet de roses.", "I want a bouquet of roses.", "je veux (je voudrais is more polite)"],
          "tu|s": ["Tu sais quoi offrir ?", "Do you know what to give?", "tu sais"], "tu|c": ["Tu crois ?", "Do you think so?", "tu crois"], "tu|v": ["Tu veux acheter des fleurs ?", "Do you want to buy flowers?", "tu veux"],
          "elle|s": ["Elle sait faire les bouquets.", "She knows how to make bouquets.", "savoir + infinitive = know how to"], "elle|c": ["Elle croit que sa grand-mère aime les roses.", "She thinks her grandmother likes roses.", "elle croit que…"], "elle|v": ["Elle ne veut pas aller chez le fleuriste.", "She doesn't want to go to the florist's.", "elle veut"],
          "nous|s": ["Nous savons où est la boutique.", "We know where the shop is.", "nous savons"], "nous|c": ["Nous croyons que c'est une bonne idée.", "We think it's a good idea.", "nous croyons (y!)"], "nous|v": ["Nous voulons une plante verte.", "We want a houseplant.", "nous voulons"],
          "vous|s": ["Vous savez faire les bouquets ?", "Do you know how to make bouquets?", "vous savez"], "vous|c": ["Vous croyez que je peux mélanger les roses et les tulipes ?", "Do you think I can mix roses and tulips?", "vous croyez (y!)"], "vous|v": ["Vous voulez mettre combien ?", "How much do you want to spend?", "vous voulez"],
          "ils|s": ["Ils ne savent pas combien mettre.", "They don't know how much to spend.", "ils savent"], "ils|c": ["Ils croient que c'est trop cher.", "They think it's too expensive.", "ils croient (sounds like il croit)"], "ils|v": ["Ils veulent offrir un cactus.", "They want to give a cactus.", "ils veulent"]
        }
      }
    },
    {
      id: "g-doute",
      title: "From sure to unsure: the hesitation scale",
      body: [
        "The <i>manières de dire</i> of this chapter go from total certainty to total doubt. Use the scale to choose the right one, and to read how sure someone else is.",
        "Note the agreement: a woman says [[Je ne suis pas sûre.]] (same pronunciation)."
      ],
      info: [
        { type: "scale", title: "🎚️ How sure are you?", colors: ["#c2402a", "#e0a526", "#2f8a4f"], ends: ["no idea", "certain"], items: [
          { v: 8, fr: "Je ne sais pas.", en: "I don't know.", pic: "🤷" },
          { v: 22, fr: "J'hésite un peu…", en: "I'm undecided…", pic: "⚖️" },
          { v: 40, fr: "Je ne suis pas sûr.", en: "I'm not sure.", pic: "😕" },
          { v: 58, fr: "Peut-être…", en: "Maybe…", pic: "🤔" },
          { v: 76, fr: "Je crois que oui.", en: "I think so.", pic: "💭" },
          { v: 90, fr: "Je sais ! Bien sûr !", en: "I know! Of course!", pic: "💯" }
        ] },
        { type: "compare", title: "🔁 Hesitating ↔ helping", cols: [
          { head: "Le client hésite", en: "showing doubt", color: "#b5652b", pic: "🤔", lines: [["Je ne sais pas trop quoi choisir.", "I don't really know what to choose."], ["J'hésite un peu…", "I'm a bit undecided…"], ["Vous croyez ?", "Do you think so?"], ["Qu'est-ce que vous me conseillez ?", "What do you recommend?"]] },
          { head: "La fleuriste aide", en: "suggesting and reassuring", color: "#3f7a5a", pic: "💐", lines: [["On peut faire un bouquet rouge et blanc.", "We can do a red and white bouquet."], ["Ou alors…", "Or else…"], ["Je vous conseille les roses.", "I recommend the roses."], ["Vous allez voir, elle va être contente !", "You'll see, she'll be happy!"]] }
        ] }
      ]
    },
    {
      id: "g-fleurs",
      title: "The right flowers for the right occasion",
      body: ["In France, flowers carry messages. Before you buy, check the occasion: some flowers are for celebrations, others only for funerals."],
      info: [
        { type: "pics", title: "🌷 Chez le fleuriste", from: ["Les fleurs", "Les plantes"] },
        { type: "card", style: "label", title: "💐 Nos bouquets", sub: "Fleuriste « Les Quatre Saisons »", rows: [["Bouquet tout rouge (roses)", "35 €", "un bouquet tout rouge, trente-cinq euros"], ["Bouquet rose et blanc", "25 €", "un bouquet rose et blanc, vingt-cinq euros"], ["Tulipes de toutes les couleurs", "18 €", "un bouquet de tulipes, dix-huit euros"], ["Plante verte", "15 €", "une plante verte, quinze euros"], ["Brin de muguet (1er mai)", "3 €", "un brin de muguet, trois euros"]] }
      ],
      widget: {
        type: "sort", label: "Which occasion? Sort the flowers (French traditions)",
        cols: [{ k: "amour", label: "❤️ love", color: "#c2185b" }, { k: "fete", label: "🎉 birthday / thanks", color: "#0f7b6c" }, { k: "deuil", label: "🕊️ funeral, grave", color: "#555" }],
        items: [{ t: "des roses rouges", k: "amour", pic: "🌹" }, { t: "des tulipes", k: "fete", pic: "🌷" }, { t: "une gerbe", k: "deuil", pic: "🕊️" }, { t: "des chrysanthèmes", k: "deuil", pic: "🌼" }, { t: "des tournesols", k: "fete", pic: "🌻" }, { t: "une orchidée", k: "fete", pic: "🌺" }, { t: "un cœur de roses", k: "amour", pic: "💗" }, { t: "des marguerites", k: "fete", pic: "🌼" }]
      }
    }
  ],

  expressions: [
    { fn: "Hesitating", fnEn: "", icon: "🤔", items: [
      ["Je ne sais pas…", "I don't know…", "std", true],
      ["Je ne sais pas trop quoi choisir.", "I don't really know what to choose.", "std", true],
      ["Je ne suis pas sûr(e).", "I'm not sure.", "std"],
      ["Peut-être…", "Maybe…", "std"],
      ["J'hésite un peu…", "I'm a bit undecided…", "std", true],
      ["Euh… je ne sais pas trop.", "Er… I'm not really sure.", "fam"]
    ] },
    { fn: "Asking for advice", fnEn: "", icon: "💡", items: [
      ["Qu'est-ce que vous me conseillez ?", "What do you recommend?", "poli", true],
      ["Vous croyez ?", "Do you think so?", "std", true],
      ["Qu'est-ce que tu en penses ?", "What do you think (of it)?", "fam"]
    ] },
    { fn: "Advising", fnEn: "the florist", icon: "💐", items: [
      ["Je vous conseille un bouquet de roses.", "I recommend a bouquet of roses.", "poli", true],
      ["On peut faire un bouquet rouge et blanc.", "We can make a red and white bouquet.", "std"],
      ["Ou alors, vous pouvez choisir…", "Or else, you can choose…", "std"],
      ["Ça dépend de la personne.", "It depends on the person.", "std"],
      ["Vous allez voir, elle va être contente !", "You'll see, she'll be happy!", "std"]
    ] },
    { fn: "Deciding", fnEn: "", icon: "✅", items: [
      ["D'accord, je le prends.", "OK, I'll take it.", "std", true],
      ["Bon, allez, je prends les tulipes !", "Right, go on, I'll take the tulips!", "fam"],
      ["Je vous laisse choisir.", "I'll let you choose.", "poli"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · hesitating at the florist's", lanes: ["La fleuriste", "Le client"], av: ["f6", "m2"], steps: [
    { s: 0, fr: "Bonjour. Je peux vous aider ?", en: "Hello. Can I help you?" },
    { s: 1, fr: "Je voudrais un bouquet, mais je ne sais pas trop quoi choisir.", en: "I'd like a bouquet, but I don't really know what to choose." },
    { s: 0, fr: "C'est pour offrir ? Vous voulez mettre combien ?", en: "Is it a gift? How much do you want to spend?" },
    { s: 1, fr: "Peut-être vingt euros…", en: "Maybe twenty euros…" },
    { s: 0, fr: "On peut faire un bouquet de tulipes. Ou alors, des roses.", en: "We can do tulips. Or else roses." },
    { s: 1, fr: "J'hésite… Qu'est-ce que vous me conseillez ?", en: "I can't decide… What do you recommend?" },
    { s: 0, fr: "Je vous conseille les roses.", en: "I recommend the roses." },
    { s: 1, fr: "Vous croyez ? … D'accord, je les prends.", en: "Do you think so? … OK, I'll take them." }
  ] },

  sounds: {
    intro: "This chapter's verbs hide their endings: <b>sais, sait, sais</b> sound the same, and <b>croit / croient</b> too. Listen for what you <i>can</i> hear.",
    letters: [
      { l: "sais · sait", name: "[sɛ]", tip: "[[je sais]], [[tu sais]], [[il sait]]: three spellings, one sound. Same for [[je crois]] / [[il croit]] / [[ils croient]].", ex: ["je sais", "il sait", "je crois", "ils croient"] },
      { l: "oi / oy", name: "[wa] / [waj]", tip: "[[croire]] = <i>krwar</i>. Before a vowel, y adds a “y” glide: [[nous croyons]] = <i>krwa-YON</i>.", ex: ["croire", "nous croyons", "vous croyez", "voir"] },
      { l: "eu / eul", name: "[ø] / [œl]", tip: "[[je veux]] has a closed [ø]; [[ils veulent]] opens to [œ] because the l is heard.", ex: ["je veux", "il veut", "ils veulent"] },
      { l: "-s heard", name: "lis, iris, cactus", tip: "Usually a final s is silent, but in some nouns it's heard: [[un lis]], [[un iris]], [[un cactus]], [[un bus]].", ex: ["un lis", "un iris", "un cactus"] },
      { l: "h", name: "hésiter", tip: "The h is silent and the vowel links: [[j'hésite]], [[vous hésitez]] (z).", ex: ["j'hésite", "vous hésitez", "il hésite"] }
    ],
    pairs: [
      { a: ["il veut", "he wants"], b: ["ils veulent", "they want"], note: "[ø] / [œl]" },
      { a: ["il sait", "he knows"], b: ["ils savent", "they know"], note: "the plural has a v" },
      { a: ["je veux", "I want"], b: ["je vais", "I go / I'm going to"], note: "eu / ai" },
      { a: ["un lis", "a lily"], b: ["un lit", "a bed"], note: "s heard / t silent" }
    ]
  },
  classify: {
    label: "🎚️ Sûr ou pas sûr ?", q: "Is the speaker certain or hesitating?",
    options: ["certain 💯", "hésitant 🤔"],
    items: [
      { say: "Je ne sais pas trop.", a: 1 }, { say: "Bien sûr !", a: 0 }, { say: "Peut-être…", a: 1 }, { say: "J'hésite un peu.", a: 1 }, { say: "Je sais exactement ce que je veux.", a: 0 },
      { say: "Vous croyez ?", a: 1 }, { say: "C'est sûr, elle va adorer.", a: 0 }, { say: "Je ne suis pas sûre.", a: 1 }, { say: "D'accord, je le prends.", a: 0 }, { say: "Euh… je ne sais pas quoi choisir.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue", s: "Karim ne sait pas exactement combien il veut dépenser.", ok: true, explain: "Peut-être vingt, vingt-cinq euros." },
    { type: "tf", tag: "Dialogue", s: "La fleuriste propose un seul bouquet.", ok: false, explain: "Two: rose et blanc, or tulipes de toutes les couleurs." },
    { type: "tf", tag: "Dialogue", s: "Karim veut donner les fleurs en cadeau.", ok: true, explain: "pour l'anniversaire de sa grand-mère." },
    { type: "tf", tag: "Dialogue", s: "Il achète des tulipes.", ok: false, explain: "le bouquet rose et blanc (roses et lis)." },
    { type: "fill", tag: "Présent", sentence: "Je ne ___ pas quoi choisir.", options: ["sais", "sait", "savez"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Bénédicte va adorer ce bouquet. — Tu ___ ?", options: ["crois", "croit", "croyez"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Tu ___ acheter des fleurs pour tes amis ?", options: ["veux", "veut", "voulez"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Vous ___ faire les bouquets ? — Non, je ne sais pas.", options: ["savez", "sais", "savons"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Vous ___ que je peux mélanger les roses et les tulipes ?", options: ["croyez", "croiez", "croient"], answer: 0, explain: "croire: vous [[croyez]] (y!)" },
    { type: "fill", tag: "Présent", sentence: "Elle ne ___ pas aller chez le fleuriste aujourd'hui.", options: ["veut", "veux", "veulent"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Il ne ___ pas combien il veut mettre.", options: ["sait", "sais", "savent"], answer: 0 },
    { type: "fill", tag: "Présent", sentence: "Ils ___ offrir une plante verte.", options: ["veulent", "voulent", "veut"], answer: 0 },
    { type: "type", tag: "Mots croisés", q: "Crossword clue: « C'est un ensemble de fleurs. »", answers: ["un bouquet", "bouquet"] },
    { type: "type", tag: "Mots croisés", q: "« C'est la fleur la plus romantique, surtout quand elle est rouge. »", answers: ["la rose", "une rose", "rose"] },
    { type: "type", tag: "Mots croisés", q: "« C'est la fleur la plus courante aux Pays-Bas. »", answers: ["la tulipe", "une tulipe", "tulipe"] },
    { type: "type", tag: "Mots croisés", q: "« C'est un bouquet que l'on offre au moment de la mort de quelqu'un. »", answers: ["une gerbe", "la gerbe", "gerbe"] },
    { type: "type", tag: "Mots croisés", q: "« C'est une plante à fleurs très fréquente sur les balcons en France. »", answers: ["le géranium", "un géranium", "géranium"] },
    { type: "mcq", tag: "Manières de dire", q: "You can't decide. What do you say to the florist?", options: ["J'hésite un peu… Qu'est-ce que vous me conseillez ?", "Je sais exactement !", "Vous voulez mettre combien ?"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Manières de dire", q: "The florist suggests roses. You're doubtful. You say…", options: ["Vous croyez ?", "Je crois.", "Bien sûr !"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Culture", q: "Which flowers should you NOT take to a dinner party in France?", options: ["des tulipes", "des chrysanthèmes", "des tournesols"], answer: 1, explain: "Chrysanthemums are for graves (Toussaint, 1 November)." },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous voulez mettre combien, à peu près ?", options: ["Je ne sais pas… peut-être quinze euros.", "Je veux mettre le bouquet sur la table.", "À peu près, oui."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Je vous conseille les roses rouges.", options: ["Vous croyez ?", "Je crois les roses.", "Je ne veux pas savoir."], answer: 0 },
    { type: "order", tag: "Construisez", en: "I don't really know what to choose.", words: ["Je", "ne", "sais", "pas", "trop", "quoi", "choisir."] },
    { type: "order", tag: "Construisez", en: "I think she likes roses.", words: ["Je", "crois", "qu'elle", "aime", "les", "roses."] }
  ],

  roleplays: [
    { title: "🎂 A bouquet for a friend's birthday", brief: "You want a bouquet for a friend's birthday. You hesitate. The florist suggests some bouquets. You ask for advice. In the end, the florist chooses and you accept (book activity).", memo: ["anniversaire d'un(e) ami(e)", "vous hésitez", "conseil ?", "le fleuriste choisit"], partner: "f6", you: "m1",
      turns: [
        { them: "Bonjour ! Je peux vous aider ?", hint: "Say you'd like a bouquet but don't really know what to choose.", you: "Bonjour, je voudrais un bouquet, mais je ne sais pas trop quoi choisir." },
        { them: "C'est pour offrir ?", hint: "Yes, for a friend's birthday.", you: "Oui, c'est pour l'anniversaire d'une amie." },
        { them: "Vous voulez mettre combien ?", hint: "You're not sure: maybe 20 euros.", you: "Je ne sais pas… Peut-être vingt euros." },
        { them: "Je peux faire un bouquet de tulipes, ou un petit bouquet de roses.", hint: "Hesitate and ask for advice.", you: "J'hésite un peu… Qu'est-ce que vous me conseillez ?" },
        { them: "Pour une amie, je vous conseille les tulipes. C'est gai et très joli.", hint: "Show doubt with [[Vous croyez ?]]", you: "Vous croyez ?" },
        { them: "Oui, vous allez voir, elle va être contente !", hint: "Accept her choice.", you: "D'accord, je vous fais confiance. Je prends les tulipes !" }
      ] }
  ],

  culture: [
    { icon: "🌼", kind: "Culture", t: "Les chrysanthèmes", d: "In France chrysanthemums are the flowers of the dead: families put them on graves for <i>la Toussaint</i> (All Saints' Day, 1 November). Never take them to a dinner party!" },
    { icon: "🔔", kind: "Culture", t: "Le muguet du 1er mai", d: "On 1 May (Labour Day) French people give each other a sprig of lily of the valley for good luck. That day anyone may sell it in the street." },
    { icon: "🌹", kind: "Culture", t: "Red roses = love", d: "A bouquet <i>tout rouge</i> of roses is a declaration of love. For a grandmother, a colleague or a friend, choose mixed colours." },
    { icon: "🕊️", kind: "Langue", t: "[[une gerbe]]", d: "A <i>gerbe</i> is a large spray of flowers sent for a funeral (<i>pour un décès</i>), often with a ribbon. Don't ask for <i>une gerbe</i> for a birthday!" },
    { icon: "🍷", kind: "Savoir-vivre", t: "Invited to dinner?", d: "Flowers are a classic gift for your hosts, but many people prefer to have them delivered beforehand, so the host doesn't have to find a vase while cooking." }
  ],
  tips: [
    { icon: "🗣️", t: "Hesitation buys you time", d: "<i>Euh… je ne sais pas trop…</i> is natural French. Use these fillers while you look for the right word instead of going silent." },
    { icon: "👂", t: "Listen to the plural", d: "Only <i>ils veulent, ils savent</i> sound different from the singular. With <i>croire</i> you need the context: <i>il croit / ils croient</i> sound the same." },
    { icon: "♀️", t: "sûr / sûre", d: "A woman writes <i>Je ne suis pas sûre</i> with an extra -e, but it sounds the same." }
  ],
  mistakes: [
    ["Vous croiez ?", "Vous croyez ?", "y in nous / vous"],
    ["Ils voulent un bouquet.", "Ils veulent un bouquet.", "eu in the plural"],
    ["Je ne sais pas quoi je choisis.", "Je ne sais pas quoi choisir.", "savoir + quoi + infinitive"],
    ["Je suis pas sûr.", "Je ne suis pas sûr.", "keep ne in careful speech"],
    ["Je connais pas quoi choisir.", "Je ne sais pas quoi choisir.", "savoir, not connaître"],
    ["Je veux un bouquet.", "Je voudrais un bouquet.", "more polite in a shop"]
  ]
});
