#!/usr/bin/env python3
"""Build the course: one self-contained HTML page per chapter and test, plus the course home page.

    python3 build.py              -> docs/  (GitHub Pages site)
    python3 build.py --standalone -> dist/  (pages with no link back to the course home)

Each chapter lives in src/lessons/cNN.js and calls LESSONS.push({...}).
Each rubrique test lives in src/tests/rN-test.js and sets window.TEST = {...}.
"""
import json, sys, html, pathlib, subprocess

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
standalone = "--standalone" in sys.argv
OUT = ROOT / ("dist" if standalone else "docs")
OUT.mkdir(exist_ok=True)

css = (SRC / "style.css").read_text(encoding="utf-8")
art = (SRC / "art.js").read_text(encoding="utf-8")
engine = (SRC / "engine.js").read_text(encoding="utf-8")

RUBRIQUES = {1: ("Faire les courses", "Shopping and ordering"), 2: ("Se renseigner", "Finding things out"), 3: ("Parler des lieux et des objets", "Places and things"),
             4: ("Parler aux autres", "Talking to people"), 5: ("Parler de soi", "Talking about yourself"), 6: ("Parler des autres", "Talking about others")}
COLORS = {1: "#0f7b6c", 2: "#2b59c3", 3: "#b5652b", 4: "#a3407e", 5: "#5b4fb5", 6: "#c0392b"}
# the book's table of contents: (chapter, rubrique, French title, English title, situations, grammar, pages)
TOC = [
    (1, 1, "Demander des articles", "Asking for items", "À la boulangerie-pâtisserie · À la poste", "masculin / féminin / pluriel des noms · interrogation simple", "pp. 8–11"),
    (2, 1, "Parler des quantités", "Talking about quantities", "Au marché · À l'épicerie", "quantité · quantité indéfinie (du, de la, des)", "pp. 12–15"),
    (3, 1, "Demander le prix", "Asking the price", "Dans une papeterie", "l'infinitif", "pp. 16–17"),
    (4, 1, "Passer une commande", "Placing an order", "Chez le poissonnier · Au café", "« pour » · avoir, prendre, aller", "pp. 18–21"),
    (5, 1, "Faire une réservation", "Making a reservation", "À l'hôtel · À la gare", "l'adjectif qualificatif · quel(s), quelle(s)", "pp. 22–25"),
    (6, 1, "Faire des achats", "Buying clothes and shoes", "Boutique de vêtements · Magasin de chaussures", "trop / assez · dans / sur", "pp. 26–29"),
    (7, 1, "Hésiter", "Hesitating", "Chez le fleuriste", "savoir, croire, vouloir", "pp. 30–31"),
    (8, 2, "Prendre rendez-vous", "Making an appointment", "Chez le dentiste · Au cabinet médical", "superlatif · imparfait (avoir, être)", "pp. 32–35"),
    (9, 2, "Demander des renseignements", "Asking for information", "Station de métro · Association sportive · Office du tourisme", "devoir, pouvoir · expressions de temps · interrogation complexe", "pp. 36–41"),
    (10, 2, "Exprimer une obligation", "Expressing obligation", "Dans une administration", "verbes + « à »", "pp. 42–43"),
    (11, 2, "Autoriser et interdire", "Allowing and forbidding", "Dans une station de ski", "« c'est », « il est » + adjectif", "pp. 44–45"),
    (12, 2, "Vérifier", "Checking", "Dans une station balnéaire", "complément de nom", "pp. 46–47"),
    (13, 2, "Protester", "Complaining", "Au camping", "futur proche", "pp. 48–49"),
    (14, 2, "Exprimer des intentions, des projets", "Intentions and plans", "Louer des vélos · À la banque", "pronoms compléments · futur simple", "pp. 50–53"),
    (15, 3, "Localiser", "Saying where things are", "Galeries Lafayette · À la campagne · Un objet perdu", "prépositions de lieu · « qui » · pronoms au passé composé", "pp. 54–59"),
    (16, 3, "S'informer par téléphone", "Enquiring by phone", "Une maison à louer", "« en »", "pp. 60–61"),
    (17, 3, "Comparer", "Comparing", "À propos des vacances", "comparatif", "pp. 62–63"),
    (18, 3, "Caractériser", "Describing things", "Avant une fête d'anniversaire", "pronoms démonstratifs", "pp. 64–65"),
    (19, 3, "Exprimer une condition", "Expressing a condition", "Le temps qu'il fait", "hypothèse réelle, condition", "pp. 66–67"),
    (20, 3, "Parler d'un besoin", "Talking about a need", "Dans un nouveau bureau", "subjonctif des verbes en -er", "pp. 68–69"),
    (21, 4, "Saluer et présenter", "Greeting and introducing", "Dans la rue", "verbes pronominaux", "pp. 70–71"),
    (22, 4, "Excuser et s'excuser", "Apologising", "Monsieur « Catastrophe »", "plus-que-parfait", "pp. 72–73"),
    (23, 4, "Téléphoner", "Telephoning", "Un ami téléphone · Dans une entreprise", "pronoms indirects · doubles pronoms", "pp. 74–77"),
    (24, 4, "Donner des instructions", "Giving instructions", "Au club de gym · Dans un jardin public", "impératif « vous » / « tu »", "pp. 78–81"),
    (25, 4, "Nier", "Denying", "Une mère et son fils", "passé composé négatif", "pp. 82–83"),
    (26, 4, "Inviter, accepter, refuser", "Inviting, accepting, refusing", "Entre voisins · Au travail", "adjectifs possessifs · « on » = nous", "pp. 84–87"),
    (27, 4, "Demander à quelqu'un de faire quelque chose", "Asking someone to do something", "Au bureau", "discours indirect", "pp. 88–89"),
    (28, 4, "Proposer", "Making suggestions", "La préparation d'un pique-nique", "conditionnel présent", "pp. 90–91"),
    (29, 5, "Parler de sa santé", "Talking about your health", "À la pharmacie · Une jambe cassée · Chez le médecin", "pronoms indéfinis · passé composé avec « être » · gérondif", "pp. 92–97"),
    (30, 5, "Parler de ses goûts", "Talking about likes", "Entre amis", "verbes + « de » + infinitif", "pp. 98–99"),
    (31, 5, "Parler de son curriculum vitae", "Talking about your CV", "Une baby-sitter", "savoir / connaître", "pp. 100–101"),
    (32, 5, "Demander et donner son opinion", "Asking for and giving opinions", "Entre collègues", "passé récent", "pp. 102–103"),
    (33, 5, "Exprimer la surprise", "Expressing surprise", "Une fête d'anniversaire", "nominalisation", "pp. 104–105"),
    (34, 6, "Exprimer la certitude ou l'incertitude", "Certainty and uncertainty", "Entre deux mères · Enquête policière", "« ce qui », « ce que » · tournures impersonnelles", "pp. 106–109"),
    (35, 6, "Décrire", "Describing people", "Au commissariat de police", "passé composé / imparfait", "pp. 110–111"),
    (36, 6, "Faire des compliments", "Paying compliments", "Un dîner entre amies", "adverbes", "pp. 112–113"),
    (37, 6, "Féliciter", "Congratulating", "Bonnes nouvelles !", "tout / toute(s) / tous", "pp. 114–115"),
    (38, 6, "Consoler et encourager", "Consoling and encouraging", "Après un match", "voix passive", "pp. 116–117"),
    (39, 6, "Critiquer", "Criticising", "À la sortie d'un match", "la cause", "pp. 118–119"),
    (40, 6, "Exprimer l'admiration", "Expressing admiration", "À la sortie d'un spectacle", "l'opposition", "pp. 120–121"),
]


def page(title, body, lang="en"):
    return f"""<!DOCTYPE html>
<html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title><style>{css}</style></head>
<body>{body}</body></html>
"""


def node_json(js):
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)


def lesson_meta(path):
    js = (f"global.window=global;global.LESSONS=[];{path.read_text(encoding='utf-8')};const l=LESSONS[0];"
          "console.log(JSON.stringify({id:l.id,rubrique:l.rubrique,num:l.num,title:l.title,titleFr:l.titleFr,pages:l.pages,"
          "scene:{scene:l.dialogues[0].scene,people:l.dialogues[0].people,staff:l.dialogues[0].staff,title:l.titleFr},"
          "nv:l.vocab.length,nq:l.practice.length,nd:l.dialogues.length}))")
    return node_json(js)


def test_meta(path):
    js = f"global.window={{}};{path.read_text(encoding='utf-8')};const t=window.TEST;console.log(JSON.stringify({{id:t.id,rubrique:t.rubrique,after:t.after,title:t.title,titleFr:t.titleFr,pages:t.pages,covers:t.covers}}))"
    return node_json(js)


home = "" if standalone else 'window.COURSE_HOME="index.html";'
lessons, lesson_files = {}, {f.stem: f for f in (SRC / "lessons").glob("*.js")}
for f in sorted(lesson_files.values()):
    m = lesson_meta(f); lessons[m["num"]] = m
    scripts = f"<script>window.LESSONS=[];{home}</script><script>{f.read_text(encoding='utf-8')}</script><script>{art}</script><script>{engine}</script>"
    (OUT / f"{m['id']}.html").write_text(page(f"{m['titleFr']} · Communication progressive", scripts), encoding="utf-8")
    print("built", OUT / f"{m['id']}.html")

tests = []
for f in sorted((SRC / "tests").glob("*.js")) if (SRC / "tests").exists() else []:
    t = test_meta(f); tests.append(t)
    covered = "".join(f"<script>{lesson_files[c].read_text(encoding='utf-8')}</script>" for c in t["covers"])
    scripts = f"<script>window.LESSONS=[];{home}</script>{covered}<script>{f.read_text(encoding='utf-8')}</script><script>{art}</script><script>{engine}</script>"
    (OUT / f"{t['id']}.html").write_text(page(f"{t['title']} · Communication progressive", scripts), encoding="utf-8")
    print("built", OUT / f"{t['id']}.html")

if not standalone:
    parts = []
    for r, (rfr, ren) in RUBRIQUES.items():
        cards = []
        for (n, rr, tfr, ten, sit, gram, pages) in [c for c in TOC if c[1] == r]:
            if n in lessons:
                l = lessons[n]
                cards.append(f'<a class="card lesson-link" href="{l["id"]}.html" data-id="{l["id"]}"><span class="thumb" data-scene=\'{html.escape(json.dumps(l["scene"]), quote=True)}\'></span>'
                             f'<span style="flex:1;min-width:0"><span class="muted" style="font-size:12px">Chapitre {n} · {pages}</span><br><span class="frt">{html.escape(tfr)}</span><br>'
                             f'<span style="font-size:14px">{html.escape(ten)}</span><br><span class="muted" style="font-size:12px">{html.escape(sit)}</span><br>'
                             f'<span class="prog muted" style="font-size:12px"></span></span></a>')
            else:
                cards.append(f'<div class="card lesson-link soon"><span class="n">{n}</span><span style="flex:1"><span class="frt">{html.escape(tfr)}</span><br>'
                             f'<span style="font-size:14px">{html.escape(ten)}</span><br><span class="muted" style="font-size:12px">{html.escape(sit)} · {html.escape(gram)} · {pages} · coming soon</span></span></div>')
            for t in [t for t in tests if t["rubrique"] == r and t["after"] == n]:
                cards.append(f'<a class="card lesson-link test-link" href="{t["id"]}.html" data-test="{t["id"]}"><span class="n">📝</span><span style="flex:1"><span class="frt">{html.escape(t["titleFr"])}</span><br>'
                             f'<span style="font-size:14px">{html.escape(t["title"])}</span><br><span class="muted" style="font-size:12px">{html.escape(t["pages"])} · bilan + mastery test</span><br><span class="prog muted" style="font-size:12px"></span></span></a>')
        roman = ["", "I", "II", "III", "IV", "V", "VI"][r]
        parts.append(f'<section class="rubrique"><h2><span class="rnum" style="background:{COLORS[r]}">{roman}</span> {html.escape(rfr)} <span class="muted" style="font-size:16px;font-weight:400">· {html.escape(ren)}</span></h2><div class="chapters">{"".join(cards)}</div></section>')
    built = len(lessons)
    body = f"""<header class="top"><div class="top-inner"><div class="brand"><small>Interactive course</small><b>Communication progressive du français · débutant</b></div></div></header>
<main>
<div class="card home-hero"><div><h1>Communication progressive du français</h1><p class="lead" style="margin-top:8px">An interactive course built on the 40 communication chapters of <i>Communication progressive du français, niveau débutant</i> (CLE International). Each chapter is one <b>acte de parole</b> (asking for something, asking the price, booking, complaining…) practised in real situations.</p>
<p style="font-size:14px">Every chapter has illustrated dialogues with audio, a shadow mode and a role mode, a picture dictionary and flashcards, grammar infographics with builders, the <i>manières de dire</i>, pronunciation, listening and dictation, book-style activities and role-plays. Each rubrique ends with a test.</p>
<p class="muted" style="font-size:13px">{built} of 40 chapters ready · progress is saved in this browser</p></div><div id="hero-scene"></div></div>
{''.join(parts)}</main>
<footer>Situations, grammar points and vocabulary follow the book. Dialogues, explanations, illustrations and activities are original.</footer>
<script>{art}</script>
<script>
document.getElementById("hero-scene").innerHTML=ART.scene({{scene:"marche",people:{{"A":"m2","B":"f3","C":"f6"}},staff:"A"}});
document.querySelectorAll("[data-scene]").forEach(el=>{{try{{el.innerHTML=ART.scene(JSON.parse(el.dataset.scene));}}catch(e){{}}}});
try{{const S=JSON.parse(localStorage.getItem("french-comm-v1")||"{{}}");
document.querySelectorAll("[data-id]").forEach(a=>{{const l=(S.lessons||{{}})[a.dataset.id];if(!l)return;const n=Object.keys(l.done||{{}}).length;
a.querySelector(".prog").textContent=(n>=9?"✓ ":"")+n+"/9 sections"+(l.best&&l.best.practice!=null?" · activités "+l.best.practice+"%":"");}});
document.querySelectorAll("[data-test]").forEach(a=>{{const t=(S.tests||{{}})[a.dataset.test];if(!t||!t.attempts.length)return;const b=m=>{{const x=t.attempts.filter(y=>y.mode===m);return x.length?Math.max(...x.map(y=>y.pct))+"%":"—"}};
a.querySelector(".prog").textContent="bilan "+b("book")+" · mastery "+b("mastery");}});}}catch(e){{}}
</script>"""
    (OUT / "index.html").write_text(page("Communication progressive du français · Interactive course", body), encoding="utf-8")
    print("built", OUT / "index.html")
