# Communication progressive du français: interactive course

Interactive lessons for **Communication progressive du français, niveau débutant** (CLE International): 40 chapters, each built around one *acte de parole* (asking for something, asking the price, booking, complaining…) practised in real situations.

The book's situations, grammar points and vocabulary are followed chapter by chapter. The dialogues, explanations, illustrations and activities are original, so the book's text and answer key are not reproduced.

## What's in each chapter

| Tab | What you do |
|---|---|
| 🏠 Aperçu | Goals, an at-a-glance card and your progress through the chapter |
| 💬 Dialogues | Illustrated scenes (the speaker animates as each line plays), with audio and translations. **▶ Play** · **🔁 Shadow** (pauses so you can repeat) · **🎭 Be…** (take one role: the course plays the other part and waits for you) · **🙈 Hide text** (listening test) |
| 🗂️ Vocabulaire | A colour-coded **picture dictionary** (blue masculine, pink feminine, purple plural), a list with say-it hints, and flashcards in both directions with spaced repetition |
| 🧩 Grammaire | Rules with **infographics** (gender columns, à/de + article "fusion" equations, conjugation grids with quiz-me, quantity and certainty scales, before/after comparisons, sentence-pattern builders, receipts, menus, departure boards, tickets and booking forms) and **interactive builders** (contraction builder, adjective-agreement builder, sorting games, price trainer, 24-hour clock trainer) |
| 🗨️ Manières de dire | The chapter's key phrases grouped by function, with register badges (poli / courant / familier / soutenu), plus a two-lane **conversation map** of the whole exchange |
| 🗣️ Prononciation | Sound cards, minimal pairs, a "which did you hear?" game and a recorder |
| 🎧 Écoute | Listening quizzes on words and dialogue lines, *masculin ou féminin ?* from the article, a chapter-specific ear game, and dictation |
| ✍️ Activités | Book-style activities: vrai ou faux, complétez, choisissez, trouvez la question, remettez dans l'ordre, associez, typed answers (with é è ê à ç… buttons; missing accents are accepted but flagged) |
| 🎭 Jeu de rôle | The book's *imaginez et jouez le dialogue* tasks as guided role-plays with memo notes and model answers |
| 🇫🇷 Culture & astuces | The book's cultural and language notes, with explanations, memory tips and a *ne dites pas… dites* list of common mistakes |
| 🔁 Révision | Progress, and the words due for review |

The chips at the top of every page show or hide the English and the say-it hints, switch the gender colours on and off, and change the audio speed. Audio comes from the browser's French text-to-speech voice. Progress is saved in your browser's localStorage.

Each rubrique ends with a test page: a **📘 Bilan** (fixed test, one point per item, with explanations), a **🎯 Mastery test** (about 30 new randomised questions each time) and **📈 Résultats** (history, best scores, chapters to revise).

## Use it

Enable **GitHub Pages**: Settings → Pages → Deploy from a branch → `main`, folder `/docs`.
Then open `https://humanshado.github.io/FrenchCommunications/`. You can also open `docs/index.html` locally.

## Structure

```
src/engine.js          lesson engine (all tabs, quizzes, widgets, infographics, tests)
src/art.js             SVG illustration library: characters, 15 scene backdrops, mini-diagrams, clock, money
src/style.css          shared styles
src/lessons/c01.js     chapter content (one file per chapter)
src/tests/r1-test.js   Rubrique I test
tools/check.js         content checker (answer indexes, missing fields, duplicates…)
build.py               builds docs/ (site + course home) or dist/ (--standalone pages)
docs/                  built site served by GitHub Pages
```

## Add a chapter

1. Copy `src/lessons/c07.js` to `src/lessons/c08.js` and replace the content: `dialogues` (each with a `scene` from `art.js`, `people` and an optional `staff`), `vocab` (with `g: "m" | "f" | "pl"` for nouns), `grammar` (`body`, `info` infographics, `widget` builders), `expressions`, `flow`, `sounds`, `classify`, `practice`, `roleplays`, `culture`, `tips`, `mistakes`.
2. Run `node tools/check.js`, then `python3 build.py`. The chapter replaces its "coming soon" card on the course home.

Scenes available in `art.js`: boulangerie, poste, marche, epicerie, papeterie, poissonnerie, cafe, hotel, gare, vetements, chaussures, fleuriste, rue, maison, bureau. Add a new one in `SCENES` for later chapters (dentiste, métro, camping…).

## Progress

- [x] Rubrique I · Faire les courses: chapters 1–7 (book pp. 8–31), 14 dialogues, 321 words, 191 activities
- [x] Rubrique I test
- [ ] Rubrique II · Se renseigner (chapters 8–14)
- [ ] Rubrique III · Parler des lieux et des objets (chapters 15–20)
- [ ] Rubrique IV · Parler aux autres (chapters 21–28)
- [ ] Rubrique V · Parler de soi (chapters 29–33)
- [ ] Rubrique VI · Parler des autres (chapters 34–40)

## Notes on the book

The book dates from 2004. Where things have changed, the lesson says so: trains no longer have smoking carriages, and paper tickets rarely need *compostage*. The dialogues use today's equivalents.
