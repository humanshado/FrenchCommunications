// Rubrique I · Bilan « Faire les courses » (chapters 1–7, book pp. 8–31)
// Original test: one point per item, answers explained. Covers c01 … c07.
window.TEST = {
  id: "r1-test",
  rubrique: 1,
  after: 7,
  title: "Rubrique I test · Shopping and ordering",
  titleFr: "Bilan · Faire les courses",
  covers: ["c01", "c02", "c03", "c04", "c05", "c06", "c07"],
  pages: "Chapters 1–7 · book pp. 8–31",
  intro: "Do the whole test without looking anything up, then check each section. Your results list the chapters to revise before you start Rubrique II.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "You walk into a bakery and want a baguette.", o: ["Je veux une baguette.", "Bonjour, je voudrais une baguette, s'il vous plaît.", "Une baguette est à combien ?"], a: 1, why: "Bonjour first, then je voudrais.", lesson: "c01" },
        { s: "The assistant offers help but you're browsing.", o: ["Non merci, je regarde.", "Je vais réfléchir.", "Ce sera tout."], a: 0, lesson: "c06" },
        { s: "You want to know the total.", o: ["Il fait combien ?", "Ça fait combien ?", "Quel est le prix de… ?"], a: 1, why: "Ça fait combien ? = the total.", lesson: "c03" },
        { s: "You need half a kilo of cherries.", o: ["un demi des cerises", "une livre de cerises", "un livre de cerises"], a: 1, why: "une livre = 500 g; un livre = a book.", lesson: "c02" },
        { s: "You want the bill in a café.", o: ["L'addition, s'il vous plaît.", "La carte, s'il vous plaît.", "Le menu, s'il vous plaît."], a: 0, lesson: "c04" },
        { s: "You ask if breakfast is included.", o: ["Le petit-déjeuner est complet ?", "Le petit-déjeuner est compris ?", "Le petit-déjeuner est libre ?"], a: 1, lesson: "c05" },
        { s: "You can't decide and want the florist's advice.", o: ["Vous croyez ?", "Qu'est-ce que vous me conseillez ?", "Je sais."], a: 1, lesson: "c07" },
        { s: "The shoes are fine but you don't want to buy them.", o: ["Je vais réfléchir.", "Je vais prendre.", "Ça suffit !"], a: 0, why: "the polite way to leave without buying.", lesson: "c06" }
      ]
    },
    {
      id: "s2", type: "type", marks: 12,
      instr: "Complétez avec un article ou « de ».",
      instrEn: "Type the missing word: un, une, des, du, de la, de l', de, d', au, à la, aux…",
      items: [
        { p: "Je voudrais ___ baguette.", a: "une", lesson: "c01" },
        { p: "une tarte ___ pommes", a: "aux", lesson: "c01" },
        { p: "un éclair ___ chocolat", a: "au", lesson: "c01" },
        { p: "une glace ___ vanille", a: "à la", lesson: "c01" },
        { p: "Il me faut ___ jambon.", a: "du", lesson: "c02" },
        { p: "Je vais prendre ___ confiture.", a: "de la", lesson: "c02" },
        { p: "Vous avez ___ eau minérale ?", a: "de l'", lesson: "c02" },
        { p: "un kilo ___ tomates", a: "de", why: "quantity + de", lesson: "c02" },
        { p: "une bouteille ___ huile", a: "d'", lesson: "c02" },
        { p: "J'ai trop ___ travail.", a: "de", why: "trop de + noun", lesson: "c06" },
        { p: "Je n'ai plus ___ eau gazeuse.", a: "d'", why: "negative → de / d'", lesson: "c02" },
        { p: "Les chaussures sont ___ la vitrine.", a: "dans", lesson: "c06" }
      ],
      explain: "Quantity, negative, trop / assez → de. Otherwise du / de la / de l' / des for “some”."
    },
    {
      id: "s3", type: "type", marks: 10,
      instr: "Conjuguez au présent ou accordez.",
      instrEn: "Type the correct form of the word in brackets.",
      items: [
        { p: "Nous ___ un dessert. (prendre)", a: "prenons", lesson: "c04" },
        { p: "Ils ___ le menu. (prendre)", a: "prennent", lesson: "c04" },
        { p: "Qu'est-ce que vous ___ comme glaces ? (avoir)", a: "avez", lesson: "c04" },
        { p: "Je ___ prendre la chambre. (aller)", a: "vais", lesson: "c04" },
        { p: "Vous ___ que c'est joli ? (croire)", a: "croyez", lesson: "c07" },
        { p: "Ils ne ___ pas quoi choisir. (savoir)", a: "savent", lesson: "c07" },
        { p: "Elles ___ un bouquet. (vouloir)", a: "veulent", lesson: "c07" },
        { p: "une ___ chambre (beau)", a: "belle", lesson: "c05" },
        { p: "un ___ hôtel (beau)", a: "bel", lesson: "c05" },
        { p: "___ heure part le train ? (quel)", a: "À quelle|à quelle", why: "heure is feminine: À quelle heure… ?", lesson: "c05" }
      ]
    },
    {
      id: "s4", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the missing line.",
      items: [
        { lines: [["La boulangère", "Et avec ceci ?"], ["La cliente", "___"]], o: ["Avec plaisir.", "Ce sera tout, merci.", "Ça dépend."], a: 1, lesson: "c01" },
        { lines: [["Le poissonnier", "___"], ["Mme Perrin", "Pour huit personnes."]], o: ["Pour quand ?", "C'est pour combien de personnes ?", "C'est à quel nom ?"], a: 1, lesson: "c04" },
        { lines: [["Le serveur", "Votre steak, vous le voulez comment ?"], ["Le client", "___"]], o: ["À point, s'il vous plaît.", "Avec des frites.", "Comme boisson."], a: 0, lesson: "c04" },
        { lines: [["La vendeuse", "Quelle pointure faites-vous ?"], ["Hugo", "___"]], o: ["Je fais du 43.", "Je suis 43.", "Je fais du sport."], a: 0, lesson: "c06" },
        { lines: [["Le client", "___"], ["La vendeuse", "Soixante-quinze euros."]], o: ["Vous voulez mettre combien ?", "Il fait combien, ce stylo ?", "C'est pour offrir ?"], a: 1, lesson: "c03" },
        { lines: [["Le réceptionniste", "Non, je suis désolé, ___"], ["La cliente", "Ah, dommage ! Merci, au revoir."]], o: ["l'hôtel est complet.", "le petit-déjeuner est compris.", "c'est à quel nom ?"], a: 0, lesson: "c05" }
      ]
    },
    {
      id: "s5", type: "tf", marks: 8,
      instr: "Vrai ou faux ?",
      instrEn: "Is each sentence correct French (and correct information)?",
      items: [
        { s: "Un kilo des tomates, s'il vous plaît.", ok: false, why: "un kilo de tomates.", lesson: "c02" },
        { s: "Quatre-vingts euros, c'est 80 €.", ok: true, lesson: "c03" },
        { s: "Soixante-dix euros, c'est 60 €.", ok: false, why: "soixante-dix = 70.", lesson: "c03" },
        { s: "Avez-vous des timbres ?", ok: true, why: "formal question with inversion.", lesson: "c01" },
        { s: "Une carafe d'eau, c'est de l'eau gazeuse.", ok: false, why: "a carafe is tap water.", lesson: "c04" },
        { s: "Quels sont les horaires ?", ok: true, lesson: "c05" },
        { s: "Je voudrais vois les stylos.", ok: false, why: "Je voudrais voir.", lesson: "c03" },
        { s: "Elle aime les chaussures qui sont sur la photo.", ok: true, lesson: "c06" }
      ]
    },
    {
      id: "s6", type: "match", marks: 6,
      instr: "Associez la question et la réponse.",
      instrEn: "Match each question with its answer.",
      items: [
        { a: "C'est à quel nom ?", b: "Au nom de Diallo.", lesson: "c04" },
        { a: "Pour quel jour ?", b: "Pour samedi soir.", lesson: "c04" },
        { a: "Vous voulez mettre combien ?", b: "Entre vingt et trente euros.", lesson: "c03" },
        { a: "Première ou seconde ?", b: "Seconde, côté fenêtre.", lesson: "c05" },
        { a: "Alors, ça va ?", b: "Non, c'est trop court.", lesson: "c06" },
        { a: "Vous croyez ?", b: "Oui, elle va être très contente !", lesson: "c07" }
      ]
    }
  ],
  selfCheck: [
    ["Je peux demander des articles dans un magasin.", "I can ask for items in a shop."],
    ["Je peux dire une quantité : un kilo de…, une bouteille de…", "I can say a quantity."],
    ["Je peux demander et comprendre un prix jusqu'à 100 €.", "I can ask and understand a price up to €100."],
    ["Je peux commander au café et chez un commerçant.", "I can order in a café and in a shop."],
    ["Je peux réserver une chambre d'hôtel et un billet de train.", "I can book a hotel room and a train ticket."],
    ["Je peux essayer des vêtements et dire ce qui ne va pas.", "I can try on clothes and say what's wrong."],
    ["Je peux hésiter et demander un conseil.", "I can hesitate and ask for advice."]
  ]
};
