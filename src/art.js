/* Illustration library for the Communication progressive course.
   Everything is drawn as inline SVG (no image files): characters, shop/scene backdrops and small
   diagrams used by the grammar infographics. window.ART is used by engine.js. */
(function () {
  "use strict";

  /* ---------- cast: the look of each character kind ---------- */
  // skin, hair colour, hair style, top, bottom, skirt?, extra
  const CAST = {
    m1: { skin: "#f1c7a1", hair: "#3b2a1e", hs: "short", top: "#2f6db5", bottom: "#33414f" },
    m2: { skin: "#c98e62", hair: "#1b1b1b", hs: "short", top: "#1f8a8a", bottom: "#4a3b2e", beard: true },
    m3: { skin: "#8d5a3b", hair: "#141414", hs: "curly", top: "#e0a526", bottom: "#2c3e50" },
    m4: { skin: "#f3d2b4", hair: "#9a9a9a", hs: "bald", top: "#7a4b8c", bottom: "#3a3a3a", glasses: true },
    m5: { skin: "#e9b98f", hair: "#c58a3a", hs: "short", top: "#c0392b", bottom: "#2d4f6b" },
    m6: { skin: "#f0c8a0", hair: "#5a3a22", hs: "short", top: "#3f7a5a", bottom: "#555", glasses: true },
    f1: { skin: "#f1c7a1", hair: "#7a2a1c", hs: "long", top: "#a3407e", bottom: "#33414f", skirt: true },
    f2: { skin: "#c98e62", hair: "#1b1b1b", hs: "bun", top: "#6b4e9b", bottom: "#2c3e50" },
    f3: { skin: "#f3d2b4", hair: "#d9a74a", hs: "bob", top: "#c0392b", bottom: "#2d4f6b", skirt: true },
    f4: { skin: "#8d5a3b", hair: "#141414", hs: "curly", top: "#3f7a5a", bottom: "#4a3b2e", skirt: true },
    f5: { skin: "#e9b98f", hair: "#5a3a22", hs: "long", top: "#d35400", bottom: "#2c3e50" },
    f6: { skin: "#f3d2b4", hair: "#b8b8b8", hs: "bun", top: "#2f6db5", bottom: "#555", skirt: true, glasses: true }
  };
  const SHOES = "#3a2a1e", INK = "#2b2118";

  /* ---------- one standing character; feet at (0,0), about 200 units tall ---------- */
  // o: { outfit: "apron"|"uniform"|"vest"|"suit"|"coat", oc: outfit colour, phone, sit, wave, hold: emoji }
  function person(kind, o = {}) {
    const L = CAST[kind] || CAST.m1, s = L.skin, hc = L.hair;
    const p = [];
    // hair behind the head
    if (L.hs === "long") p.push(`<path d="M-21,-176 Q-24,-200 0,-199 Q24,-200 21,-176 L24,-138 Q0,-130 -24,-138Z" fill="${hc}"/>`);
    if (L.hs === "bob") p.push(`<path d="M-21,-176 Q-24,-200 0,-199 Q24,-200 21,-176 L22,-158 Q0,-152 -22,-158Z" fill="${hc}"/>`);
    // legs / skirt
    if (o.sit) {
      p.push(`<rect x="-24" y="-92" width="48" height="26" rx="8" fill="${L.bottom}"/>`);
    } else if (L.skirt) {
      p.push(`<rect x="-15" y="-60" width="9" height="56" fill="${s}"/><rect x="6" y="-60" width="9" height="56" fill="${s}"/>`);
      p.push(`<path d="M-26,-94 L26,-94 L33,-52 L-33,-52Z" fill="${L.bottom}"/>`);
    } else {
      p.push(`<rect x="-24" y="-94" width="22" height="90" rx="4" fill="${L.bottom}"/><rect x="2" y="-94" width="22" height="90" rx="4" fill="${L.bottom}"/>`);
    }
    if (!o.sit) p.push(`<ellipse cx="-13" cy="-3" rx="13" ry="5" fill="${SHOES}"/><ellipse cx="13" cy="-3" rx="13" ry="5" fill="${SHOES}"/>`);
    // torso
    const top = o.outfit === "vest" || o.outfit === "suit" ? "#ffffff" : L.top;
    p.push(`<path d="M-30,-90 L-30,-140 Q-30,-153 -17,-153 L17,-153 Q30,-153 30,-140 L30,-90Z" fill="${top}"/>`);
    if (o.outfit === "vest") p.push(`<path d="M-30,-90 L-30,-140 Q-30,-153 -17,-153 L-6,-153 L0,-115 L0,-90Z M30,-90 L30,-140 Q30,-153 17,-153 L6,-153 L0,-115 L0,-90Z" fill="${o.oc || "#222"}"/><path d="M-4,-150 L4,-150 L0,-142Z" fill="#222"/>`);
    if (o.outfit === "suit") p.push(`<path d="M-30,-90 L-30,-140 Q-30,-153 -17,-153 L-8,-153 L0,-112 L0,-90Z M30,-90 L30,-140 Q30,-153 17,-153 L8,-153 L0,-112 L0,-90Z" fill="${o.oc || "#2c3e50"}"/><path d="M-3,-152 L3,-152 L5,-120 L0,-114 L-5,-120Z" fill="#c0392b"/>`);
    if (o.outfit === "uniform") p.push(`<path d="M-10,-153 L0,-140 L10,-153" fill="none" stroke="#fff" stroke-width="3"/><rect x="10" y="-138" width="12" height="8" rx="2" fill="#ffcd00"/>`);
    if (o.outfit === "apron") p.push(`<path d="M-21,-140 L21,-140 L26,-60 L-26,-60Z" fill="${o.oc || "#fff"}" stroke="rgba(0,0,0,.12)"/><path d="M-21,-140 L-10,-153 M21,-140 L10,-153" stroke="${o.oc || "#fff"}" stroke-width="3"/><rect x="-11" y="-112" width="22" height="12" rx="2" fill="rgba(0,0,0,.08)"/>`);
    if (o.outfit === "coat") p.push(`<path d="M-31,-62 L-31,-140 Q-31,-153 -17,-153 L-6,-153 L0,-120 L6,-153 L17,-153 Q31,-153 31,-140 L31,-62Z" fill="${o.oc || "#8a6d4b"}"/><circle cx="0" cy="-104" r="2" fill="#333"/><circle cx="0" cy="-88" r="2" fill="#333"/>`);
    // arms + hands
    const arm = o.outfit === "suit" || o.outfit === "vest" ? (o.oc || "#2c3e50") : o.outfit === "coat" ? (o.oc || "#8a6d4b") : L.top;
    if (o.phone) {
      p.push(`<rect x="-40" y="-148" width="12" height="58" rx="6" fill="${arm}"/><circle cx="-34" cy="-86" r="7" fill="${s}"/>`);
      p.push(`<path d="M28,-146 L40,-146 L32,-180 L22,-176Z" fill="${arm}"/><circle cx="25" cy="-180" r="7" fill="${s}"/>`);
    } else if (o.wave) {
      p.push(`<rect x="-40" y="-148" width="12" height="58" rx="6" fill="${arm}"/><circle cx="-34" cy="-86" r="7" fill="${s}"/>`);
      p.push(`<path d="M28,-148 L40,-148 L52,-188 L42,-192Z" fill="${arm}"/><circle cx="48" cy="-196" r="8" fill="${s}"/>`);
    } else {
      p.push(`<rect x="-40" y="-148" width="12" height="58" rx="6" fill="${arm}"/><rect x="28" y="-148" width="12" height="58" rx="6" fill="${arm}"/>`);
      p.push(`<circle cx="-34" cy="-86" r="7" fill="${s}"/><circle cx="34" cy="-86" r="7" fill="${s}"/>`);
    }
    // neck + head
    p.push(`<rect x="-6" y="-161" width="12" height="10" fill="${s}"/><circle cx="-17" cy="-174" r="4" fill="${s}"/><circle cx="17" cy="-174" r="4" fill="${s}"/><circle cx="0" cy="-175" r="17" fill="${s}"/>`);
    // hair on top
    if (L.hs === "short") p.push(`<path d="M-18,-178 Q-19,-198 0,-197 Q19,-198 18,-178 Q14,-189 2,-188 Q-10,-189 -18,-178Z" fill="${hc}"/>`);
    if (L.hs === "long" || L.hs === "bob") p.push(`<path d="M-18,-176 Q-16,-196 0,-195 Q16,-196 18,-176 Q10,-187 -2,-186 Q-11,-185 -18,-176Z" fill="${hc}"/>`);
    if (L.hs === "bun") p.push(`<circle cx="0" cy="-198" r="9" fill="${hc}"/><path d="M-18,-176 Q-18,-195 0,-195 Q18,-195 18,-176 Q9,-186 0,-186 Q-9,-186 -18,-176Z" fill="${hc}"/>`);
    if (L.hs === "curly") p.push([[-14, -186], [-6, -192], [3, -193], [11, -189], [16, -181], [-17, -178]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${hc}"/>`).join(""));
    if (L.hs === "bald") p.push(`<path d="M-18,-170 Q-19,-182 -14,-186 M18,-170 Q19,-182 14,-186" stroke="${hc}" stroke-width="5" fill="none" stroke-linecap="round"/>`);
    if (L.beard) p.push(`<path d="M-15,-172 Q-14,-154 0,-153 Q14,-154 15,-172 Q8,-164 0,-164 Q-8,-164 -15,-172Z" fill="${hc}"/>`);
    // face
    p.push(`<circle cx="-6" cy="-177" r="2" fill="${INK}"/><circle cx="6" cy="-177" r="2" fill="${INK}"/><path d="M-6,-167 Q0,-162 6,-167" stroke="${INK}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`);
    if (kind[0] === "f") p.push(`<circle cx="-10" cy="-170" r="3" fill="#e88" opacity=".35"/><circle cx="10" cy="-170" r="3" fill="#e88" opacity=".35"/>`);
    if (L.glasses) p.push(`<g stroke="${INK}" stroke-width="1.4" fill="none"><circle cx="-6" cy="-177" r="5"/><circle cx="6" cy="-177" r="5"/><path d="M-1,-177 L1,-177"/></g>`);
    if (o.phone) p.push(`<text x="18" y="-170" font-size="16">📱</text>`);
    if (o.hold) p.push(`<text x="22" y="-80" font-size="26">${o.hold}</text>`);
    return p.join("");
  }
  const placed = (kind, x, y, sc, o, who) => `<g class="actor" data-who="${who || ""}" transform="translate(${x},${y}) scale(${sc})"><g class="bob">${person(kind, o)}</g></g>`;

  // head-and-shoulders avatar for speech bubbles and lists
  function avatar(kind, size = 46, o = {}) {
    const L = CAST[kind] || CAST.m1;
    return `<svg class="av" width="${size}" height="${size}" viewBox="-34 -212 68 68" aria-hidden="true"><defs><clipPath id="c${kind}${size}"><circle cx="0" cy="-178" r="33"/></clipPath></defs><circle cx="0" cy="-178" r="33" fill="${L.top}22"/><g clip-path="url(#c${kind}${size})">${person(kind, o)}</g></svg>`;
  }

  /* ---------- scenery helpers ---------- */
  const E = (e, x, y, sz = 28) => `<text x="${x}" y="${y}" font-size="${sz}" text-anchor="middle" dominant-baseline="central">${e}</text>`;
  const row = (arr, x0, x1, y, sz) => arr.map((e, i) => E(e, x0 + (arr.length === 1 ? (x1 - x0) / 2 : i * (x1 - x0) / (arr.length - 1)), y, sz)).join("");
  const shelf = (x, y, w, items, sz = 26, wood = "#a0703c") => `<rect x="${x}" y="${y}" width="${w}" height="6" rx="2" fill="${wood}"/>${row(items, x + 18, x + w - 18, y - sz / 2 - 1, sz)}`;
  const sign = (t, bg, fg, x = 320, w = 300, y = 10) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="34" rx="6" fill="${bg}"/><text x="${x}" y="${y + 23}" font-size="17" font-weight="800" letter-spacing="2" text-anchor="middle" fill="${fg}" font-family="Georgia,serif">${t}</text>`;
  const floor = (c, y = 245) => `<rect x="0" y="${y}" width="640" height="${300 - y}" fill="${c}"/>`;
  const wall = (c) => `<rect x="0" y="0" width="640" height="300" fill="${c}"/>`;
  const counter = (x, w, c, top = [], sz = 24, y = 170) => `<rect x="${x}" y="${y}" width="${w}" height="${262 - y}" rx="4" fill="${c}"/><rect x="${x - 6}" y="${y - 6}" width="${w + 12}" height="10" rx="3" fill="${shade(c, -25)}"/>${row(top, x + 24, x + w - 24, y - 6 - sz / 2, sz)}`;
  const glassCase = (x, w, items, sz = 24) => `<rect x="${x}" y="172" width="${w}" height="90" rx="4" fill="#d9c2a0"/><rect x="${x + 8}" y="178" width="${w - 16}" height="44" rx="3" fill="#e8f4fb" stroke="#b7d5e6"/>${row(items, x + 26, x + w - 26, 202, sz)}<rect x="${x - 6}" y="166" width="${w + 12}" height="8" rx="3" fill="#b99a74"/>`;
  const awning = (x, w, c1, c2, y = 0, h = 40) => { let s = ""; const n = Math.round(w / 32); for (let i = 0; i < n; i++) s += `<path d="M${x + i * w / n},${y} h${w / n} v${h} q-${w / n / 2},12 -${w / n},0Z" fill="${i % 2 ? c2 : c1}"/>`; return s; };
  const win = (x, y, w, h, inside = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#bfe3f5" stroke="#fff" stroke-width="5"/>${inside}<path d="M${x + w / 2},${y} V${y + h}" stroke="#fff" stroke-width="4"/>`;
  function shade(hex, amt) { const n = parseInt(hex.slice(1), 16); const c = v => Math.max(0, Math.min(255, v + amt)); return "#" + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map(v => v.toString(16).padStart(2, "0")).join(""); }

  /* ---------- scenes ---------- */
  // each: back (drawn behind the people), front (drawn in front: counters), outfit for the staff, staff x / client x
  const SCENES = {
    boulangerie: {
      outfit: "apron", oc: "#fff",
      back: () => wall("#f6e3c4") + floor("#c9a27a") + sign("BOULANGERIE · PÂTISSERIE", "#7a3b1d", "#ffe9c2", 320, 380) +
        shelf(40, 98, 260, ["🥖", "🥖", "🥖", "🍞", "🍞"], 30) + shelf(40, 150, 260, ["🥐", "🥐", "🥨", "🥯", "🥐"], 26) +
        win(400, 60, 200, 120, row(["🌳", "🏠", "🌳"], 420, 580, 140, 30)),
      front: () => glassCase(50, 260, ["🥧", "🍰", "🧁", "🍫", "🍮"], 26)
    },
    poste: {
      outfit: "uniform",
      back: () => wall("#fff4c2") + `<rect x="0" y="0" width="640" height="54" fill="#003da5"/>` + floor("#cfd6de") + sign("LA POSTE", "#ffcd00", "#003da5", 320, 200, 10) +
        `<rect x="60" y="70" width="220" height="80" rx="6" fill="#ffffff" stroke="#ccc"/>` + row(["✉️", "📦", "💌", "📬"], 85, 255, 110, 28) +
        `<rect x="470" y="80" width="56" height="90" rx="10" fill="#ffcd00" stroke="#c9a000"/><rect x="482" y="100" width="32" height="6" rx="3" fill="#003da5"/>` + E("📮", 600, 130, 34),
      front: () => counter(50, 270, "#003da5", ["⚖️", "📦", "🖊️", "📄"], 24)
    },
    marche: {
      outfit: "apron", oc: "#3f7a5a",
      back: () => `<rect x="0" y="0" width="640" height="300" fill="#bfe3f5"/>` + E("☀️", 600, 40, 34) + `<rect x="0" y="180" width="640" height="120" fill="#b9b1a5"/>` +
        [...Array(16)].map((_, i) => `<ellipse cx="${20 + i * 40}" cy="${270 + (i % 2) * 14}" rx="18" ry="7" fill="#a39a8c"/>`).join("") +
        awning(30, 300, "#c0392b", "#fff", 30, 36) + `<rect x="36" y="66" width="6" height="110" fill="#7a5230"/><rect x="318" y="66" width="6" height="110" fill="#7a5230"/>` +
        E("🌳", 470, 120, 80) + E("⛪", 560, 150, 50),
      front: () => `<rect x="30" y="178" width="300" height="84" rx="4" fill="#8a5a2b"/>` +
        [0, 1, 2, 3].map(i => `<rect x="${38 + i * 72}" y="160" width="66" height="34" rx="3" fill="#c48a4a" stroke="#8a5a2b"/>`).join("") +
        row(["🍅", "🥒", "🫑", "🍎"], 71, 287, 170, 22) + row(["🍓", "🍋", "🥕", "🌿"], 71, 287, 226, 22) + `<text x="300" y="214" font-size="12" font-weight="700" fill="#fff">2,50 €/kg</text>`
    },
    epicerie: {
      outfit: "apron", oc: "#7a3b1d",
      back: () => wall("#efe6d8") + floor("#b5895a") + sign("ÉPICERIE FINE", "#2d4f6b", "#fff", 320, 280) +
        shelf(30, 90, 270, ["🍝", "🍚", "🫙", "🍯", "🥫"], 26) + shelf(30, 140, 270, ["🍷", "🍾", "💧", "🫒", "🧂"], 26) +
        shelf(360, 90, 250, ["🥫", "🥫", "🍪", "🍪"], 26, "#7a5230") + shelf(360, 140, 250, ["🧃", "🥛", "🥛", "🧈"], 26, "#7a5230") + shelf(360, 190, 250, ["🍬", "☕", "🍫", "🍵"], 24, "#7a5230"),
      front: () => counter(40, 270, "#7a5230", ["🧀", "🥚", "🍖", "🧈"], 26)
    },
    papeterie: {
      outfit: null,
      back: () => wall("#e8eef7") + floor("#c4b49e") + sign("PAPETERIE", "#5b4fb5", "#fff", 320, 220) +
        shelf(30, 92, 270, ["📒", "📓", "📕", "📗", "📘"], 26) + shelf(30, 145, 270, ["✏️", "🖍️", "📏", "✂️", "📎"], 24) +
        shelf(360, 92, 250, ["📁", "📂", "🗂️", "📇"], 26, "#7a5230") + shelf(360, 145, 250, ["✉️", "📜", "🖌️", "🖇️"], 24, "#7a5230"),
      front: () => glassCase(50, 260, ["🖋️", "🖊️", "🖋️", "🖊️", "✒️"], 24) + `<text x="128" y="244" font-size="12" font-weight="700" fill="#5a3a22">32 €</text><text x="232" y="244" font-size="12" font-weight="700" fill="#5a3a22">75 €</text>`
    },
    poissonnerie: {
      outfit: "apron", oc: "#dfeefa",
      back: () => wall("#dbeef7") + [...Array(10)].map((_, i) => `<rect x="${i * 64}" y="54" width="62" height="2" fill="#bcd8e8"/>`).join("") + floor("#9fb7c4") + sign("POISSONNERIE", "#1f5f8b", "#fff", 320, 260) +
        E("⚓", 560, 110, 46) + E("🐟", 470, 100, 30) + E("🦞", 520, 160, 30),
      front: () => `<rect x="30" y="176" width="300" height="86" rx="4" fill="#1f5f8b"/><path d="M24,176 L336,176 L320,150 L40,150Z" fill="#eaf6fb"/>` +
        row(["🐟", "🦐", "🦀", "🦪", "🐠", "🦞"], 60, 300, 160, 22) + `<text x="40" y="200" font-size="12" font-weight="700" fill="#fff">plateau classique 20 € · mélangé 30 €</text>`
    },
    cafe: {
      outfit: "vest", oc: "#222", clientSit: true,
      back: () => wall("#7a3b1d") + `<rect x="0" y="150" width="640" height="95" fill="#5a2a12"/>` + floor("#d9c7a8") + sign("CAFÉ DE LA PAIX", "#1b1b1b", "#f5d68a", 320, 280) +
        `<rect x="222" y="62" width="132" height="92" rx="6" fill="#2c3a2f" stroke="#a0703c" stroke-width="5"/><text x="288" y="84" font-size="13" fill="#fff" text-anchor="middle" font-family="Georgia,serif">MENU à 15 €</text><text x="288" y="104" font-size="10" fill="#ddd" text-anchor="middle">salade de chèvre</text><text x="288" y="120" font-size="10" fill="#ddd" text-anchor="middle">steak-frites</text><text x="288" y="136" font-size="10" fill="#ddd" text-anchor="middle">tarte · glace</text>` +
        win(430, 60, 170, 90, row(["🗼"], 440, 590, 110, 40)) + `<rect x="430" y="168" width="10" height="80" fill="#3a2a1e"/><rect x="520" y="168" width="10" height="80" fill="#3a2a1e"/><rect x="420" y="150" width="120" height="22" rx="4" fill="#3a2a1e"/>`,
      front: () => `<ellipse cx="420" cy="196" rx="70" ry="12" fill="#e9e2d0" stroke="#999"/><rect x="415" y="200" width="10" height="60" fill="#555"/><ellipse cx="420" cy="262" rx="30" ry="6" fill="#555"/>` + E("☕", 395, 184, 20) + E("🍷", 445, 182, 20)
    },
    hotel: {
      outfit: "suit", oc: "#7a1f2b", split: true,
      back: () => wall("#f3ead8") + `<rect x="320" y="0" width="320" height="300" fill="#e2eefb"/>` + floor("#b58d6a") + `<rect x="320" y="245" width="320" height="55" fill="#a9b8c9"/>` +
        sign("HÔTEL DU MOULIN ★★★", "#7a1f2b", "#ffe9c2", 160, 270) +
        `<rect x="40" y="62" width="120" height="70" rx="4" fill="#7a5230"/>` + [0, 1, 2, 3, 4, 5].map(i => E("🔑", 58 + (i % 3) * 40, 82 + Math.floor(i / 3) * 30, 16)).join("") + E("🛎️", 230, 110, 30) +
        `<path d="M320,0 V300" stroke="#fff" stroke-width="6"/>` + win(470, 50, 140, 100, E("🌙", 510, 90, 26)) + E("🛋️", 600, 230, 40) + E("🖼️", 380, 80, 34),
      front: () => counter(40, 250, "#7a1f2b", ["☎️", "📒", "🖊️"], 24)
    },
    gare: {
      outfit: "uniform",
      back: () => wall("#d6dde4") + floor("#9aa6b2") + sign("GUICHET · SNCF", "#2b2b6b", "#fff", 170, 230) +
        `<rect x="506" y="44" width="128" height="104" rx="6" fill="#1b1b1b"/><text x="514" y="64" font-size="12" fill="#ffcd00" font-family="monospace">DÉPARTS</text>` +
        [["07:58", "LILLE", "TGV"], ["08:28", "LILLE", "TGV"], ["09:12", "LYON", "TGV"], ["09:40", "DIJON", "TER"]].map((r, i) => `<text x="514" y="${86 + i * 17}" font-size="11" fill="#fff" font-family="monospace">${r[0]} ${r[1].padEnd(5, " ")} ${r[2]}</text>`).join("") +
        E("🕗", 300, 90, 40) + `<rect x="0" y="200" width="640" height="8" fill="#ffcd00" opacity=".5"/>` + E("🚄", 600, 205, 40),
      front: () => `<rect x="40" y="168" width="260" height="94" rx="4" fill="#4a5a6b"/><rect x="60" y="104" width="220" height="70" fill="#cfe7f3" opacity=".55" stroke="#fff" stroke-width="3"/><rect x="34" y="162" width="272" height="10" rx="3" fill="#2f3b47"/>` + E("🎫", 250, 150, 22)
    },
    vetements: {
      outfit: null,
      back: () => wall("#f7e7ea") + floor("#d7c3b0") + sign("BOUTIQUE · MODE", "#a3407e", "#fff", 320, 250) +
        `<rect x="40" y="80" width="240" height="5" rx="2" fill="#777"/><rect x="40" y="80" width="5" height="165" fill="#777"/><rect x="275" y="80" width="5" height="165" fill="#777"/>` + row(["👗", "👚", "👕", "🧥", "👖", "👔"], 64, 256, 112, 30) +
        `<rect x="470" y="50" width="130" height="195" rx="4" fill="#c0392b"/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${476 + i * 26},52 v190" stroke="#922" stroke-width="2"/>`).join("") + `<text x="535" y="40" font-size="13" text-anchor="middle" font-weight="700" fill="#a3407e">CABINES</text>` +
        `<rect x="330" y="70" width="70" height="140" rx="35" fill="#cfe7f3" stroke="#bbb" stroke-width="4"/>`,
      front: () => ""
    },
    chaussures: {
      outfit: null,
      back: () => wall("#eef0e6") + floor("#c4a98a") + sign("CHAUSSURES", "#3a2a1e", "#f5d68a", 320, 240) +
        shelf(30, 100, 260, ["👠", "👡", "👢", "👠"], 26) + shelf(30, 150, 260, ["👟", "👞", "🥾", "👟"], 26) +
        win(380, 60, 220, 110, `<rect x="390" y="130" width="200" height="8" fill="#a0703c"/>` + row(["👡", "👡", "👠"], 410, 570, 115, 28)) + `<text x="490" y="54" font-size="12" text-anchor="middle" font-weight="700" fill="#3a2a1e">VITRINE</text>` +
        `<rect x="250" y="205" width="110" height="18" rx="4" fill="#7a5230"/>` + E("📦", 300, 236, 22),
      front: () => ""
    },
    fleuriste: {
      outfit: "apron", oc: "#3f7a5a",
      back: () => wall("#eaf5e6") + floor("#b8a58a") + sign("FLEURISTE", "#3f7a5a", "#fff", 320, 220) +
        shelf(30, 110, 270, ["🌷", "🌹", "🌻", "🌼", "🪻"], 30, "#7a5230") + shelf(30, 165, 270, ["🪴", "🌿", "🪴", "🌵"], 30, "#7a5230") +
        [380, 450, 520, 590].map((x, i) => `<rect x="${x - 22}" y="200" width="44" height="45" rx="5" fill="#9aa6b2"/>${E(["💐", "🌹", "🌷", "🌺"][i], x, 186, 40)}`).join(""),
      front: () => counter(40, 270, "#7a5230", ["💐", "✂️", "🎀"], 26)
    },
    // generic fall-backs for later chapters
    rue: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#bfe3f5"/>` + E("☀️", 600, 40, 30) + `<rect x="0" y="60" width="200" height="185" fill="#e8d3b0"/><rect x="440" y="80" width="200" height="165" fill="#d9c2a0"/>` +
        [0, 1, 2].map(i => win(20 + i * 60, 90, 40, 50)).join("") + [0, 1, 2].map(i => win(460 + i * 60, 110, 40, 50)).join("") + floor("#a39a8c") + E("🌳", 320, 160, 80),
      front: () => ""
    },
    maison: {
      outfit: null, noCounter: true,
      back: () => wall("#f3ead8") + floor("#b58d6a") + win(240, 50, 160, 100, E("🌤️", 320, 90, 30)) + E("🛋️", 90, 215, 70) + E("🪴", 590, 210, 50) + E("🖼️", 500, 90, 40),
      front: () => ""
    },
    bureau: {
      outfit: "suit", oc: "#2c3e50", noCounter: true,
      back: () => wall("#e6ecf2") + floor("#9aa6b2") + win(400, 40, 200, 110, E("🏙️", 500, 95, 50)) + E("🗂️", 60, 120, 40) + E("☕", 110, 120, 26),
      front: () => counter(40, 250, "#7a5230", ["💻", "📞", "📄"], 26)
    }
  };

  // dialogue: { scene, people: {name: kind}, staff: name, sit: [names], phone: [names] }
  function scene(d) {
    const S = SCENES[d.scene] || SCENES.rue;
    const names = Object.keys(d.people);
    const staff = d.staff && d.people[d.staff] ? d.staff : null;
    const others = names.filter(n => n !== staff);
    const actors = [];
    const opt = (n) => ({ outfit: n === staff ? S.outfit : null, oc: S.oc, phone: (d.phone || []).includes(n) || (S.split && n !== staff), sit: (d.sit || []).includes(n) || (S.clientSit && n !== staff), wave: (d.wave || []).includes(n), hold: (d.hold || {})[n] });
    if (staff) actors.push(placed(d.people[staff], S.split ? 140 : 170, 256, 0.92, opt(staff), staff));
    const xs = S.split ? [480, 560] : staff ? (others.length > 1 ? [420, 520] : [460]) : others.length > 2 ? [150, 320, 490] : others.length > 1 ? [220, 430] : [320];
    others.forEach((n, i) => {
      const o = opt(n), sx = xs[i] || 300 + i * 80;
      actors.push(placed(d.people[n], o.sit ? 410 : sx, o.sit ? 290 : 262, o.sit ? 0.88 : 0.95, o, n));
    });
    const chair = others.some(n => opt(n).sit) ? `<rect x="385" y="150" width="50" height="90" rx="8" fill="#3a2a1e"/>` : "";
    return `<svg class="scene-svg" viewBox="0 0 640 300" role="img" aria-label="${(d.title || "scene").replace(/"/g, "")}">${S.back()}${chair}${actors.join("")}${S.front ? S.front() : ""}</svg>`;
  }

  /* ---------- small diagrams for grammar infographics ---------- */
  const MINI = {
    dans: `<rect x="20" y="30" width="80" height="60" rx="4" fill="none" stroke="#7a5230" stroke-width="4"/><path d="M20,30 L35,15 L115,15 L100,30" fill="none" stroke="#7a5230" stroke-width="3"/><circle cx="60" cy="72" r="14" fill="#d62839"/>`,
    sur: `<rect x="15" y="62" width="90" height="8" rx="2" fill="#7a5230"/><rect x="22" y="70" width="6" height="30" fill="#7a5230"/><rect x="92" y="70" width="6" height="30" fill="#7a5230"/><circle cx="60" cy="48" r="14" fill="#d62839"/>`,
    sous: `<rect x="15" y="40" width="90" height="8" rx="2" fill="#7a5230"/><rect x="22" y="48" width="6" height="52" fill="#7a5230"/><rect x="92" y="48" width="6" height="52" fill="#7a5230"/><circle cx="60" cy="86" r="14" fill="#d62839"/>`,
    devant: `<rect x="40" y="20" width="60" height="70" rx="4" fill="#cdb79a"/><circle cx="50" cy="80" r="16" fill="#d62839"/>`,
    derriere: `<circle cx="78" cy="40" r="16" fill="#d62839"/><rect x="20" y="30" width="60" height="70" rx="4" fill="#cdb79a"/>`,
    acote: `<rect x="15" y="40" width="50" height="60" rx="4" fill="#cdb79a"/><circle cx="92" cy="84" r="16" fill="#d62839"/>`,
    trop: `<text x="60" y="58" font-size="56" text-anchor="middle" dominant-baseline="central">👖</text><path d="M20,100 H100" stroke="#c2402a" stroke-width="4"/><text x="104" y="40" font-size="26" fill="#c2402a">↓</text>`,
    assez: `<text x="60" y="58" font-size="56" text-anchor="middle" dominant-baseline="central">👖</text><path d="M20,100 H100" stroke="#2f8a4f" stroke-width="4"/><text x="104" y="40" font-size="26" fill="#2f8a4f">✓</text>`,
    phone: `<text x="30" y="58" font-size="44" text-anchor="middle" dominant-baseline="central">☎️</text><path d="M55,58 q10,-14 20,0 t20,0" stroke="#d62839" stroke-width="3" fill="none"/><text x="104" y="58" font-size="40" text-anchor="middle" dominant-baseline="central">📱</text>`
  };
  const mini = (k, sz = 90) => MINI[k] ? `<svg class="mini-svg" width="${sz}" height="${sz}" viewBox="0 0 120 110" aria-hidden="true">${MINI[k]}</svg>` : "";

  // an analogue clock face for times: ART.clock(7, 58)
  function clock(hh, mm, sz = 110) {
    const a = (v, max) => (v / max) * 2 * Math.PI - Math.PI / 2;
    const hx = 50 + 24 * Math.cos(a((hh % 12) + mm / 60, 12)), hy = 50 + 24 * Math.sin(a((hh % 12) + mm / 60, 12));
    const mx = 50 + 36 * Math.cos(a(mm, 60)), my = 50 + 36 * Math.sin(a(mm, 60));
    const ticks = [...Array(12)].map((_, i) => { const t = a(i, 12); return `<path d="M${50 + 40 * Math.cos(t)},${50 + 40 * Math.sin(t)} L${50 + 45 * Math.cos(t)},${50 + 45 * Math.sin(t)}" stroke="#2b2118" stroke-width="${i % 3 ? 1.5 : 3}"/>`; }).join("");
    return `<svg class="clock-svg" width="${sz}" height="${sz}" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="#fff" stroke="#2b2118" stroke-width="3"/>${ticks}<path d="M50,50 L${hx},${hy}" stroke="#2b2118" stroke-width="5" stroke-linecap="round"/><path d="M50,50 L${mx},${my}" stroke="#d62839" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="#2b2118"/></svg>`;
  }

  // a euro coin / note visual for prices
  function money(amount) {
    const e = Math.floor(amount), c = Math.round((amount - e) * 100);
    const notes = [50, 20, 10, 5], coins = [2, 1]; let left = e; const out = [];
    notes.forEach(n => { while (left >= n && out.length < 8) { out.push(`<span class="note n${n}">${n} €</span>`); left -= n; } });
    coins.forEach(n => { while (left >= n && out.length < 10) { out.push(`<span class="coin">${n}€</span>`); left -= n; } });
    if (c) out.push(`<span class="coin small">${c}c</span>`);
    return `<span class="money">${out.join("")}</span>`;
  }

  window.ART = { CAST, person, avatar, scene, mini, clock, money, SCENES };
})();
