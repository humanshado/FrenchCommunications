// Chapitre 5 · Faire une réservation (book pp. 22–25)
// Situations: 1. À l'hôtel · 2. À la gare
// Grammar: l'adjectif qualificatif · l'adjectif interrogatif « quel »
// Dialogues and activities are original, built on the book's situations, grammar and vocabulary.
LESSONS.push({
  id: "c05", rubrique: 1, num: 5,
  title: "Making a reservation",
  titleFr: "Faire une réservation",
  pages: "Book pp. 22–25",
  goals: [
    "Book a hotel room by phone: [[Est-ce que vous avez une chambre libre ?]]",
    "Ask what's included: [[Le petit-déjeuner est compris ?]]",
    "Book a train ticket: [[un aller-retour Paris–Lyon]], [[en seconde classe]]",
    "Make adjectives agree: [[m:un grand lit]], [[f:une grande chambre]], [[f:une belle chambre]]",
    "Ask questions with [[quel]], [[quelle]], [[quels]], [[quelles]]",
    "Understand train times on the 24-hour clock: [[dix-huit heures quatre]]"
  ],
  glance: [
    ["🗣️", "Acte de parole", "Reserving a hotel room and a train ticket"],
    ["🧩", "Grammaire", "adjective agreement and position · quel / quelle / quels / quelles"],
    ["🗂️", "Vocabulaire", "the hotel room · the station, tickets, timetables"],
    ["⭐", "The phrase to learn first", "[[Je voudrais réserver…]] I'd like to book…"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "At the hotel (by phone)", titleFr: "À l'hôtel",
      note: "Madame Diallo phones a seaside hotel to book a room for the weekend. Spot the adjectives: <i>une chambre <b>libre</b>, un <b>grand</b> lit, deux <b>petits</b> lits, une <b>belle</b> chambre</i>.",
      scene: "hotel", staff: "Le réceptionniste", people: { "Le réceptionniste": "m4", "Madame Diallo": "f4" },
      lines: [
        ["Le réceptionniste", "Hôtel du Moulin, bonjour !", "Hôtel du Moulin, good morning!"],
        ["Madame Diallo", "Bonjour, monsieur. Est-ce que vous avez une chambre libre pour vendredi et samedi soir ? Une chambre pour deux personnes.", "Hello. Do you have a free room for Friday and Saturday night? A room for two people."],
        ["Le réceptionniste", "Vous préférez une chambre avec un grand lit ou avec deux petits lits ?", "Would you prefer a room with a double bed or with two single beds?"],
        ["Madame Diallo", "Avec un grand lit, s'il vous plaît. Et si possible avec vue sur la mer.", "With a double bed, please. And with a sea view if possible."],
        ["Le réceptionniste", "Alors, j'ai une belle chambre au troisième étage, avec salle de bains et vue sur la mer, à quatre-vingt-cinq euros la nuit.", "Then I have a lovely room on the third floor, with a bathroom and a sea view, at 85 euros a night."],
        ["Madame Diallo", "Le petit-déjeuner est compris ?", "Is breakfast included?"],
        ["Le réceptionniste", "Non, madame. Le petit-déjeuner est à douze euros par personne.", "No, madam. Breakfast is 12 euros per person."],
        ["Madame Diallo", "D'accord. Je prends la chambre pour deux nuits.", "All right. I'll take the room for two nights."],
        ["Le réceptionniste", "C'est à quel nom ?", "What name is it under?"],
        ["Madame Diallo", "Au nom de Diallo. D-I-A, deux L, O.", "Under Diallo. D-I-A, double L, O."],
        ["Le réceptionniste", "Merci. Vous pouvez m'envoyer un courriel de confirmation, s'il vous plaît ?", "Thank you. Could you send me a confirmation email, please?"],
        ["Madame Diallo", "Bien sûr, je le fais tout de suite.", "Of course, I'll do it right away."]
      ],
      glossary: [["une chambre libre", "a free room"], ["un grand lit", "a double bed"], ["compris", "included"], ["un courriel", "an email (Québec / official word)"]]
    },
    {
      id: "d2", n: 2, title: "At the station", titleFr: "À la gare",
      note: "Thomas books a return ticket to Lyon. Listen for [[quel]] in the questions and for the 24-hour times.",
      scene: "gare", staff: "L'employé", people: { "L'employé": "m5", "Thomas": "m3" },
      lines: [
        ["Thomas", "Bonjour, je voudrais réserver un billet de train, s'il vous plaît.", "Hello, I'd like to book a train ticket, please."],
        ["L'employé", "Oui, monsieur. Pour quelle destination ?", "Yes, sir. To which destination?"],
        ["Thomas", "Il me faudrait un aller-retour Paris–Lyon : départ jeudi matin, retour dimanche soir.", "I'd need a return Paris–Lyon: leaving Thursday morning, back Sunday evening."],
        ["L'employé", "Jeudi, vous avez un TGV toutes les heures à partir de six heures.", "On Thursday there's a TGV every hour from six o'clock."],
        ["Thomas", "Quels sont les horaires vers huit heures ?", "What are the times around eight?"],
        ["L'employé", "Il y a un train à sept heures cinquante-six et un autre à huit heures cinquante-six.", "There's a train at 7.56 and another at 8.56."],
        ["Thomas", "Sept heures cinquante-six, c'est parfait. Il arrive à quelle heure ?", "7.56 is perfect. What time does it arrive?"],
        ["L'employé", "Arrivée à Lyon à neuf heures quarante-huit. Et pour le retour ?", "Arrival in Lyon at 9.48. And for the return?"],
        ["Thomas", "Dimanche, vers dix-huit heures.", "Sunday, around 6 p.m."],
        ["L'employé", "J'ai un TGV à dix-huit heures quatre, arrivée à Paris à vingt heures. Première ou seconde classe ?", "I have a TGV at 18.04, arriving in Paris at 20.00. First or second class?"],
        ["Thomas", "Seconde, côté fenêtre si possible.", "Second, window side if possible."],
        ["L'employé", "Vous avez une carte de réduction ?", "Do you have a discount card?"],
        ["Thomas", "Oui, une carte jeune.", "Yes, a young person's card."],
        ["L'employé", "Alors, avec la réduction, ça fait quatre-vingt-quatre euros.", "Then with the discount, that's 84 euros."]
      ],
      glossary: [["un aller-retour", "a return ticket"], ["Il me faudrait…", "I'd need… (polite)"], ["les horaires", "the timetable"], ["côté fenêtre", "window side"], ["une réduction", "a discount"]]
    }
  ],

  vocab: [
    { t: "un hôtel trois étoiles", en: "a three-star hotel", pic: "🏨", cat: "L'hôtel", g: "m" },
    { t: "la réception", en: "the reception desk", pic: "🛎️", cat: "L'hôtel", g: "f" },
    { t: "une chambre simple", en: "a single room", pic: "🛏️", cat: "L'hôtel", g: "f" },
    { t: "une chambre double", en: "a double room", pic: "🛏️", cat: "L'hôtel", g: "f" },
    { t: "un grand lit", en: "a double bed", pic: "🛏️", cat: "L'hôtel", g: "m" },
    { t: "deux petits lits", en: "two single beds", pic: "🛏️", cat: "L'hôtel", g: "pl" },
    { t: "une salle de bains", en: "a bathroom", pic: "🛁", cat: "L'hôtel", g: "f" },
    { t: "une douche", en: "a shower", pic: "🚿", cat: "L'hôtel", g: "f" },
    { t: "des W.-C. séparés", en: "a separate toilet", pic: "🚽", cat: "L'hôtel", g: "pl", pr: "day doobl-vay-SAY" },
    { t: "avec vue sur la mer", en: "with a sea view", pic: "🌊", cat: "L'hôtel" },
    { t: "avec vue sur la montagne", en: "with a mountain view", pic: "🏔️", cat: "L'hôtel" },
    { t: "un étage", en: "a floor, a storey", pic: "🏢", cat: "L'hôtel", g: "m" },
    { t: "une nuit", en: "a night", pic: "🌙", cat: "L'hôtel", g: "f" },
    { t: "la clé", en: "the key", pic: "🔑", cat: "L'hôtel", g: "f" },
    { t: "le petit-déjeuner", en: "breakfast", pic: "🥐", cat: "L'hôtel", g: "m" },
    { t: "compris", en: "included", pic: "✅", cat: "L'hôtel" },
    { t: "libre", en: "free, available", pic: "🟢", cat: "L'hôtel" },
    { t: "complet", en: "full, fully booked", pic: "🔴", cat: "L'hôtel", note: "[[L'hôtel est complet.]]" },
    { t: "réserver", en: "to book, to reserve", pic: "📅", cat: "L'hôtel" },
    { t: "une réservation", en: "a booking", pic: "📅", cat: "L'hôtel", g: "f" },
    { t: "un courriel de confirmation", en: "a confirmation email", pic: "📧", cat: "L'hôtel", g: "m" },
    { t: "la gare", en: "the train station", pic: "🚉", cat: "La gare", g: "f" },
    { t: "le TGV", en: "the high-speed train (train à grande vitesse)", pic: "🚄", cat: "La gare", g: "m", pr: "tay-zhay-VAY" },
    { t: "le guichet", en: "the ticket office", pic: "🎫", cat: "La gare", g: "m", pr: "gee-SHAY" },
    { t: "un billet", en: "a ticket", pic: "🎫", cat: "La gare", g: "m" },
    { t: "un aller simple", en: "a one-way ticket", pic: "➡️", cat: "La gare", g: "m" },
    { t: "un aller-retour", en: "a return ticket", pic: "🔁", cat: "La gare", g: "m" },
    { t: "le départ", en: "the departure", pic: "🛫", cat: "La gare", g: "m" },
    { t: "l'arrivée", en: "the arrival", pic: "🛬", cat: "La gare", g: "f" },
    { t: "les horaires", en: "the timetable, the times", pic: "🕗", cat: "La gare", g: "pl" },
    { t: "le quai", en: "the platform", pic: "🛤️", cat: "La gare", g: "m", pr: "KAY" },
    { t: "la voie", en: "the track (voie 5 = platform 5)", pic: "🛤️", cat: "La gare", g: "f" },
    { t: "en première classe", en: "in first class", pic: "1️⃣", cat: "La gare" },
    { t: "en seconde classe", en: "in second class", pic: "2️⃣", cat: "La gare", pr: "suh-GOND (c = g)" },
    { t: "une réduction", en: "a discount", pic: "➖", cat: "La gare", g: "f" },
    { t: "côté fenêtre", en: "window seat", pic: "🪟", cat: "La gare" },
    { t: "côté couloir", en: "aisle seat", pic: "🚶", cat: "La gare" },
    { t: "composter le billet", en: "to validate the ticket (in a machine)", pic: "🎟️", cat: "La gare" },
    { t: "grand, grande", en: "big, tall", pic: "🐘", cat: "Les adjectifs" },
    { t: "petit, petite", en: "small", pic: "🐭", cat: "Les adjectifs" },
    { t: "beau, belle", en: "beautiful, lovely", pic: "🌸", cat: "Les adjectifs" },
    { t: "nouveau, nouvelle", en: "new", pic: "✨", cat: "Les adjectifs" },
    { t: "bon, bonne", en: "good", pic: "👍", cat: "Les adjectifs" },
    { t: "quel, quelle", en: "which, what", pic: "❓", cat: "Les adjectifs" }
  ],

  grammar: [
    {
      id: "g-adj",
      title: "Adjectives agree: [[m:un grand lit]] · [[f:une grande chambre]]",
      body: [
        "A French adjective takes the <b>gender and number</b> of its noun: add <b>-e</b> for feminine, <b>-s</b> for plural, <b>-es</b> for feminine plural. [[m:un petit lit]] → [[pl:deux petits lits]]; [[f:une grande chambre]] → [[pl:deux grandes chambres]].",
        "Adjectives already ending in <b>-e</b> don't change for feminine: [[une chambre libre]]. Some are irregular: <b>beau → belle</b>, <b>nouveau → nouvelle</b>, <b>bon → bonne</b>, <b>complet → complète</b>. Before a masculine vowel: [[un bel hôtel]], [[un nouvel ami]].",
        "<b>Position:</b> most adjectives come <b>after</b> the noun ([[une chambre libre]], [[des W.-C. séparés]]). A few short, common ones come <b>before</b>: <b>beau, joli, bon, grand, petit, nouveau, vieux, jeune</b>. And when an adjective comes before a plural noun, <b>des</b> becomes <b>de</b>: [[de beaux vases]], [[de belles voitures]]."
      ],
      info: [
        { type: "gender", title: "🎨 One adjective, four forms", cols: [
          { g: "m", badge: "m · sg", head: "un grand lit", items: ["un petit lit", "un bon hôtel", "un beau vase", "un nouveau gouvernement"] },
          { g: "f", badge: "f · sg", head: "une grande chambre", items: ["une petite chambre", "une bonne idée", "une belle voiture", "une nouvelle idée"] },
          { g: "pl", badge: "pl", head: "deux grands lits", items: ["deux petits lits", "deux grandes chambres", "de beaux vases", "de belles voitures"], note: "adjective before a plural noun → <b>de</b>, not des" }
        ] },
        { type: "compare", title: "📍 Before or after the noun?", cols: [
          { head: "AVANT · before", en: "short everyday adjectives: beauty, age, goodness, size", color: "var(--bleu)", pic: "⬅️", lines: [["une belle chambre", "a lovely room"], ["un grand lit", "a double bed"], ["un nouveau train", "a new train"], ["une bonne idée", "a good idea"]] },
          { head: "APRÈS · after", en: "almost all the others: colour, shape, nationality…", color: "var(--rouge)", pic: "➡️", lines: [["une chambre libre", "a free room"], ["des W.-C. séparés", "a separate toilet"], ["un hôtel complet", "a full hotel"], ["un billet électronique", "an e-ticket"]] }
        ] }
      ],
      widget: {
        type: "agree", label: "Agreement builder · pick an adjective, a noun, singular or plural",
        words: [
          { f: { ms: "grand", fs: "grande", mp: "grands", fp: "grandes" }, pos: "before", en: "big" },
          { f: { ms: "petit", fs: "petite", mp: "petits", fp: "petites" }, pos: "before", en: "small" },
          { f: { ms: "beau", msv: "bel", fs: "belle", mp: "beaux", fp: "belles" }, pos: "before", en: "beautiful" },
          { f: { ms: "nouveau", msv: "nouvel", fs: "nouvelle", mp: "nouveaux", fp: "nouvelles" }, pos: "before", en: "new" },
          { f: { ms: "bon", fs: "bonne", mp: "bons", fp: "bonnes" }, pos: "before", en: "good" },
          { f: { ms: "libre", fs: "libre", mp: "libres", fp: "libres" }, pos: "after", en: "free" },
          { f: { ms: "séparé", fs: "séparée", mp: "séparés", fp: "séparées" }, pos: "after", en: "separate" },
          { f: { ms: "complet", fs: "complète", mp: "complets", fp: "complètes" }, pos: "after", en: "full" }
        ],
        nouns: [{ t: "lit", g: "m", pic: "🛏️" }, { t: "chambre", g: "f", pic: "🚪" }, { t: "hôtel", g: "m", v: true, pic: "🏨" }, { t: "voiture", g: "f", pic: "🚗" }, { t: "idée", g: "f", v: true, pic: "💡" }, { t: "vase", g: "m", pic: "🏺" }, { t: "train", g: "m", pic: "🚄" }]
      }
    },
    {
      id: "g-quel",
      title: "Which? [[quel]] · [[quelle]] · [[quels]] · [[quelles]]",
      body: [
        "<b>quel</b> means <i>which</i> or <i>what</i> before a noun, and it agrees like an adjective. The four forms <b>sound exactly the same</b> [kɛl]: only the spelling changes.",
        "[[Quel jour ?]] (masculine) · [[Pour quelle destination ?]] (feminine) · [[Dans quels trains ?]] (masculine plural) · [[Avec quelles personnes ?]] (feminine plural).",
        "With <b>être</b>, quel can be separated from its noun: [[Quels sont les horaires ?]] · [[Quel est le prix ?]] · [[Quelle est la différence ?]]"
      ],
      info: { type: "gender", title: "❓ quel agrees with the noun", cols: [
        { g: "m", badge: "quel", head: "masculin singulier", items: ["Quel jour ?", "Quel train ?", "À quel nom ?"] },
        { g: "f", badge: "quelle", head: "féminin singulier", items: ["Quelle heure ?", "Pour quelle destination ?", "Quelle est la différence ?"] },
        { g: "pl", badge: "quels · quelles", head: "pluriel", items: ["Quels sont les horaires ?", "Dans quels trains ?", "Avec quelles amies ?"] }
      ] },
      widget: {
        type: "agree", label: "Ask the ticket clerk · pick a noun, singular or plural",
        words: [{ f: { ms: "Quel", fs: "Quelle", mp: "Quels", fp: "Quelles" }, pos: "det", en: "which?" }],
        nouns: [{ t: "jour", g: "m", pic: "📅" }, { t: "train", g: "m", pic: "🚄" }, { t: "billet", g: "m", pic: "🎫" }, { t: "heure", g: "f", v: true, pic: "🕗" }, { t: "destination", g: "f", v: true, pic: "📍" }, { t: "classe", g: "f", pic: "💺" }, { t: "gare", g: "f", pic: "🚉" }]
      }
    },
    {
      id: "g-heure",
      title: "Train times: the 24-hour clock",
      body: [
        "Stations, timetables and the radio use the <b>24-hour clock</b>. Say the hours, the word <b>heure(s)</b>, then the minutes: <b>18 h 04</b> = [[dix-huit heures quatre]]. Written French uses <b>h</b>, not a colon: <i>7 h 56</i>.",
        "Remember the feminine: [[une heure]], [[vingt et une heures]]."
      ],
      info: { type: "card", style: "board", title: "DÉPARTS · PARIS-GARE-DE-LYON", rows: [["07 h 56  LYON", "TGV 6603 · voie 11", "sept heures cinquante-six, Lyon, voie onze"], ["08 h 56  LYON", "TGV 6607 · voie 9", "huit heures cinquante-six, Lyon, voie neuf"], ["09 h 12  DIJON", "TER · voie 3", "neuf heures douze, Dijon, voie trois"], ["12 h 30  MARSEILLE", "TGV 6111 · voie 15", "douze heures trente, Marseille, voie quinze"], ["18 h 04  LILLE", "TGV 7041 · voie 2", "dix-huit heures quatre, Lille, voie deux"]], foot: "Tap a line to hear the announcement" },
      widget: { type: "clock", label: "Thomas's journey · tap ▶, then try the listening game", times: [[7, 56, "départ de Paris"], [9, 48, "arrivée à Lyon"], [18, 4, "départ de Lyon"], [20, 0, "arrivée à Paris"], [6, 0, "premier TGV"], [12, 30, "midi et demi"], [21, 15, "le soir"]] }
    },
    {
      id: "g-docs",
      title: "Your booking, on paper",
      body: ["Two documents from this chapter. Tap the lines to hear them read."],
      info: [
        { type: "card", style: "form", title: "Hôtel du Moulin ★★★ · Réservation", rows: [["Nom", "DIALLO", "au nom de Diallo"], ["Arrivée", "vendredi 14", "arrivée vendredi quatorze"], ["Départ", "dimanche 16", "départ dimanche seize"], ["Nuits", "2", "deux nuits"], ["Chambre", "double · grand lit · vue mer", "une chambre double avec un grand lit et vue sur la mer"], ["Prix", "85 € / nuit", "quatre-vingt-cinq euros la nuit"], ["Petit-déjeuner", "12 € / pers. (non compris)", "petit-déjeuner non compris"]], foot: "Merci d'envoyer un courriel de confirmation." },
        { type: "card", style: "ticket", title: "🚄 BILLET · ALLER-RETOUR", sub: "2de classe · 1 voyageur · carte jeune (–30 %)", rows: [["ALLER jeu.", "PARIS 07 h 56 → LYON 09 h 48", "aller jeudi, Paris sept heures cinquante-six, Lyon neuf heures quarante-huit"], ["RETOUR dim.", "LYON 18 h 04 → PARIS 20 h 00", "retour dimanche, Lyon dix-huit heures quatre, Paris vingt heures"], ["Place", "côté fenêtre", "côté fenêtre"], ["Prix", "84,00 €", "quatre-vingt-quatre euros"]] }
      ]
    }
  ],

  expressions: [
    { fn: "Booking", fnEn: "", icon: "📅", items: [
      ["Je voudrais réserver une chambre.", "I'd like to book a room.", "poli", true],
      ["Est-ce que vous avez une chambre libre ?", "Do you have a room available?", "std", true],
      ["Il me faudrait un aller-retour.", "I'd need a return ticket.", "poli"],
      ["Je vais prendre la chambre.", "I'll take the room.", "std"],
      ["Au nom de…", "Under the name…", "std"]
    ] },
    { fn: "Asking for details", fnEn: "", icon: "🔎", items: [
      ["Le petit-déjeuner est compris ?", "Is breakfast included?", "std", true],
      ["Quels sont les horaires ?", "What are the times?", "std", true],
      ["Il arrive à quelle heure ?", "What time does it arrive?", "std"],
      ["Je ne connais pas les horaires.", "I don't know the times.", "std"],
      ["Quelle est la différence ?", "What's the difference?", "std"]
    ] },
    { fn: "Possible answers", fnEn: "from the hotel or station", icon: "🛎️", items: [
      ["Non, je suis désolé, l'hôtel est complet.", "No, I'm sorry, the hotel is full.", "poli", true],
      ["C'est à quel nom ?", "What name is it under?", "std"],
      ["Première ou seconde ?", "First or second class?", "std"],
      ["Vous avez une réduction ?", "Do you have a discount?", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · booking a hotel room by phone", lanes: ["Le réceptionniste", "La cliente"], av: ["m4", "f4"], steps: [
    { s: 0, fr: "Hôtel du Moulin, bonjour !", en: "Hôtel du Moulin, hello!" },
    { s: 1, fr: "Bonjour. Est-ce que vous avez une chambre libre pour samedi ?", en: "Hello. Do you have a room free for Saturday?" },
    { s: 0, fr: "Pour combien de personnes ?", en: "For how many people?", alt: ["Non, je suis désolé, l'hôtel est complet."] },
    { s: 1, fr: "Pour deux personnes, avec un grand lit.", en: "For two, with a double bed." },
    { s: 0, fr: "J'ai une chambre à 85 € la nuit.", en: "I have a room at €85 a night." },
    { s: 1, fr: "Le petit-déjeuner est compris ?", en: "Is breakfast included?" },
    { s: 1, fr: "D'accord, je prends la chambre.", en: "OK, I'll take the room." },
    { s: 0, fr: "C'est à quel nom ?", en: "What name is it under?" }
  ] },

  sounds: {
    intro: "Adjectives you can <b>hear</b>: the masculine often ends in a silent consonant, and the feminine <b>-e</b> makes that consonant sound.",
    letters: [
      { l: "-t / -te", name: "silent vs heard", tip: "[[petit]] = <i>p'tee</i> (t silent) but [[petite]] = <i>p'teet</i>. Same for [[grand]] / [[grande]], [[complet]] / [[complète]]: the feminine adds a consonant sound.", ex: ["petit", "petite", "grand", "grande"] },
      { l: "on / onne", name: "nasal vs not", tip: "[[bon]] is nasal (no n). [[bonne]] loses the nasal and the n is heard: <i>bonn</i>.", ex: ["bon", "bonne", "un bon hôtel", "une bonne idée"] },
      { l: "‿", name: "liaison", tip: "Before a vowel, the silent consonant links: [[un petit hôtel]] (t), [[un grand hôtel]] (t!), [[deux heures]] (z), [[un bel hôtel]].", ex: ["un petit hôtel", "un grand hôtel", "deux heures", "les horaires"] },
      { l: "é / ée / és", name: "all the same", tip: "[[séparé]], [[séparée]], [[séparés]] sound identical: the agreement is only written.", ex: ["séparé", "séparée", "séparés"] },
      { l: "qu", name: "[k]", tip: "qu = k: [[quel]], [[quai]], [[quatre]], [[guichet]] (g + u = hard g).", ex: ["quel", "le quai", "le guichet", "quatre"] }
    ],
    pairs: [
      { a: ["petit", "small (m)"], b: ["petite", "small (f)"], note: "t silent / t heard" },
      { a: ["grand", "big (m)"], b: ["grande", "big (f)"], note: "d silent / d heard" },
      { a: ["bon", "good (m)"], b: ["bonne", "good (f)"], note: "nasal / n heard" },
      { a: ["complet", "full (m)"], b: ["complète", "full (f)"], note: "[ɛ] / [ɛt]" },
      { a: ["un aller", "a single"], b: ["un hôtel", "a hotel"], note: "different words, same liaison" }
    ]
  },
  classify: {
    label: "🏨 Hôtel ou gare ?", q: "Where would you hear this: at a hotel or at a station?",
    options: ["à l'hôtel 🏨", "à la gare 🚉"],
    items: [
      { say: "Le petit-déjeuner est compris ?", a: 0 }, { say: "Première ou seconde ?", a: 1 }, { say: "Vous préférez un grand lit ou deux petits lits ?", a: 0 },
      { say: "Il arrive à quelle heure ?", a: 1 }, { say: "Je regrette, nous sommes complets.", a: 0 }, { say: "Un aller simple pour Lille, s'il vous plaît.", a: 1 },
      { say: "Voici votre clé, chambre douze.", a: 0 }, { say: "Le train part de la voie cinq.", a: 1 }, { say: "Avec vue sur la mer, si possible.", a: 0 }, { say: "Côté fenêtre ou côté couloir ?", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "La cliente voudrait une chambre pour deux nuits.", ok: true, explain: "vendredi et samedi soir." },
    { type: "tf", tag: "Dialogue 1", s: "Elle voudrait une chambre avec deux petits lits.", ok: false, explain: "Avec un grand lit." },
    { type: "tf", tag: "Dialogue 1", s: "Le petit-déjeuner n'est pas inclus dans le prix.", ok: true, explain: "12 € par personne en plus." },
    { type: "tf", tag: "Dialogue 1", s: "Elle doit confirmer la réservation par écrit.", ok: true, explain: "un courriel de confirmation." },
    { type: "tf", tag: "Dialogue 2", s: "Thomas va à Lyon pour une journée.", ok: false, explain: "jeudi → dimanche." },
    { type: "tf", tag: "Dialogue 2", s: "Il n'y a pas de train le matin.", ok: false, explain: "un TGV toutes les heures à partir de six heures." },
    { type: "tf", tag: "Dialogue 2", s: "Thomas ne voyage pas en première.", ok: true, explain: "Seconde, côté fenêtre." },
    { type: "fill", tag: "Adjectifs", sentence: "un ___ hôtel", options: ["grand", "grande", "grands"], answer: 0 },
    { type: "fill", tag: "Adjectifs", sentence: "une ___ femme", options: ["joli", "jolie", "jolis"], answer: 1, explain: "femme is feminine, and joli goes <b>before</b> the noun: [[une jolie femme]]." },
    { type: "fill", tag: "Adjectifs", sentence: "des lits ___", options: ["séparé", "séparés", "séparées"], answer: 1 },
    { type: "fill", tag: "Adjectifs", sentence: "de ___ restaurants", options: ["bon", "bons", "bonnes"], answer: 1 },
    { type: "fill", tag: "Adjectifs", sentence: "une ___ chambre", options: ["beau", "bel", "belle"], answer: 2 },
    { type: "fill", tag: "Adjectifs", sentence: "des personnes ___ (new)", options: ["nouveaux", "nouvelles", "nouvelle"], answer: 1, explain: "personne is feminine: [[de nouvelles personnes]] (before the noun → de)." },
    { type: "fill", tag: "Adjectifs", sentence: "un ___ hôtel", options: ["beau", "bel", "belle"], answer: 1, explain: "masculine before a vowel: [[un bel hôtel]]." },
    { type: "fill", tag: "quel", sentence: "Je prends le train. — ___ train ?", options: ["Quel", "Quelle", "Quels"], answer: 0 },
    { type: "fill", tag: "quel", sentence: "Je pars avec des amies. — Avec ___ amies ?", options: ["quel", "quels", "quelles"], answer: 2 },
    { type: "fill", tag: "quel", sentence: "Nous allons à la gare. — À ___ gare ?", options: ["quel", "quelle", "quels"], answer: 1 },
    { type: "fill", tag: "quel", sentence: "Tu prends les billets ? — ___ billets ?", options: ["Quel", "Quels", "Quelles"], answer: 1 },
    { type: "fill", tag: "Vocabulaire", sentence: "Le train part à 14 h 02. Le ___ est à 14 h 02.", options: ["départ", "arrivée", "quai"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "On attend le train sur le ___.", options: ["quai", "guichet", "billet"], answer: 0 },
    { type: "fill", tag: "Vocabulaire", sentence: "Non, je suis désolé, l'hôtel est ___.", options: ["libre", "complet", "compris"], answer: 1 },
    { type: "mcq", tag: "Vocabulaire", q: "Paris → Lille → Paris: you need…", options: ["un aller simple", "un aller-retour", "une réduction"], answer: 1 },
    { type: "listen", tag: "L'heure", say: "dix-huit heures quatre", options: ["18 h 04", "18 h 40", "8 h 14", "14 h 08"], answer: 0 },
    { type: "listen", tag: "L'heure", say: "sept heures cinquante-six", options: ["7 h 56", "17 h 56", "7 h 46", "6 h 57"], answer: 0 },
    { type: "type", tag: "Écrivez", q: "Ask if they have a free room (with « Est-ce que »).", answers: ["Est-ce que vous avez une chambre libre ?", "Est-ce que vous avez une chambre libre, s'il vous plaît ?"] },
    { type: "reply", tag: "Que répondre ?", prompt: "C'est une chambre double ?", options: ["Non, c'est une chambre simple.", "Non, c'est une chambre libre.", "Oui, c'est un grand hôtel."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Il y a de la place dans l'hôtel ?", options: ["Non, l'hôtel est complet.", "Oui, l'hôtel est compris.", "Non, c'est trois étoiles."], answer: 0 },
    { type: "order", tag: "Construisez", en: "I'd like to book a single room for three nights.", words: ["Je", "voudrais", "réserver", "une", "chambre", "simple", "pour", "trois", "nuits."] }
  ],

  roleplays: [
    { title: "🏨 Booking a hotel room", brief: "Phone the hotel: one room for 2 people, bathroom and toilet, 3 nights. Ask the price and about breakfast, then confirm.", memo: ["1 chambre · 2 pers.", "salle de bains + W.-C.", "3 nuits", "prix ?", "petit-déjeuner ?", "confirmation"], partner: "m4", you: "f4",
      turns: [
        { them: "Hôtel du Lac, bonjour !", hint: "Ask if they have a room for two people for three nights.", you: "Bonjour, est-ce que vous avez une chambre libre pour deux personnes, pour trois nuits ?" },
        { them: "Oui. Avec un grand lit ou deux petits lits ?", hint: "Choose, and ask for a bathroom and toilet.", you: "Avec un grand lit, s'il vous plaît, et avec salle de bains et W.-C." },
        { them: "J'ai une chambre à soixante-dix euros la nuit.", hint: "Ask if breakfast is included.", you: "Le petit-déjeuner est compris ?" },
        { them: "Oui, il est compris.", hint: "Say you'll take the room.", you: "Très bien, je prends la chambre." },
        { them: "C'est à quel nom ?", hint: "Give and spell your name.", you: "Au nom de Martin. M-A-R-T-I-N." },
        { them: "Vous pouvez envoyer un courriel de confirmation ?", hint: "Agree.", you: "Bien sûr, je le fais tout de suite." }
      ] },
    { title: "🚄 Two returns to Dijon", brief: "Book two return tickets Lyon–Dijon, leaving around 7 a.m., returning the next day around 9 p.m., second class.", memo: ["2 allers-retours", "Lyon–Dijon", "départ vers 7 h", "retour J+1 vers 21 h", "2de classe"], partner: "m5", you: "m3",
      turns: [
        { them: "Bonjour, monsieur. Je vous écoute.", hint: "Ask for two return tickets Lyon–Dijon.", you: "Bonjour, je voudrais deux allers-retours Lyon–Dijon, s'il vous plaît." },
        { them: "Pour quel jour ?", hint: "For tomorrow morning, around 7.", you: "Pour demain matin, vers sept heures." },
        { them: "J'ai un train à six heures cinquante-deux. Et le retour ?", hint: "The day after, around 9 p.m.", you: "Le retour, après-demain vers vingt et une heures." },
        { them: "Vingt et une heures dix. Première ou seconde ?", hint: "Second class.", you: "En seconde, s'il vous plaît." },
        { them: "Alors, cela fait cent douze euros.", hint: "Ask which platform the train leaves from ([[De quel quai… ?]]).", you: "Merci. De quel quai part le train ?" }
      ] }
  ],

  culture: [
    { icon: "🛏️", kind: "Langue", t: "[[un grand lit]] = a double bed", d: "Hotels ask: <i>un grand lit ou deux petits lits ?</i> (double or twin). <i>Une chambre double</i> can be either, so be specific." },
    { icon: "🥐", kind: "Culture", t: "[[compris]] or not?", d: "In French hotels breakfast is often <b>not</b> included in the room price. Always ask: <i>Le petit-déjeuner est compris ?</i>" },
    { icon: "🚭", kind: "Mise à jour", t: "Smokers' carriages are gone", d: "The book's dialogue asks <i>Fumeurs ou non-fumeurs ?</i>. Since 2007 all French trains are completely non-smoking, so today the clerk asks <i>côté fenêtre ou côté couloir ?</i> instead." },
    { icon: "🎟️", kind: "Mise à jour", t: "Composter le billet", d: "With paper tickets you once had to stamp (<i>composter</i>) your ticket in a yellow machine before boarding. Most tickets are now electronic, so you just show the QR code, but you'll still see the word on old regional lines." },
    { icon: "🚄", kind: "Culture", t: "Le TGV", d: "France's high-speed train links Paris to Lyon in about 2 hours. Booking early is much cheaper; young people and seniors buy discount cards (<i>carte Avantage</i>)." },
    { icon: "📧", kind: "Langue", t: "[[un courriel]]", d: "The official French word for an email, created in Québec. In everyday speech French people mostly say <i>un mail</i> or <i>un e-mail</i>." }
  ],
  tips: [
    { icon: "👂", t: "Hear the feminine", d: "If you hear a consonant at the end (<i>petite, grande, complète</i>), it's feminine. A silent ending (<i>petit, grand, complet</i>) is masculine." },
    { icon: "🎯", t: "BAGS for position", d: "Adjectives of <b>B</b>eauty, <b>A</b>ge, <b>G</b>oodness and <b>S</b>ize go before the noun: <i>beau, nouveau, bon, grand</i>. The rest go after." },
    { icon: "🕐", t: "Repeat the time back", d: "Confirm times by repeating them: <i>Sept heures cinquante-six, c'est parfait.</i> It avoids mistakes and it's what French people do." }
  ],
  mistakes: [
    ["une chambre grand", "une grande chambre", "agreement + position"],
    ["un beau hôtel", "un bel hôtel", "bel before a vowel"],
    ["des beaux vases", "de beaux vases", "adjective before plural → de"],
    ["Quel heure ?", "Quelle heure ?", "heure is feminine"],
    ["Quel sont les horaires ?", "Quels sont les horaires ?", "plural"],
    ["Je voudrais un retour.", "Je voudrais un aller-retour.", "return ticket"]
  ]
});
