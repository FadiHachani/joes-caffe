// Joe's Caffè — Direction A, vanilla render of the interactive phone menu.
// Categories are organized into a few top-level GROUPS so the nav stays short.
(function () {
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  const price = (p) => `${esc(p)}<span> DT</span>`;
  const catById = Object.fromEntries(CATS.map((c) => [c.id, c]));

  const rowHTML = (it) =>
    it.pop
      ? `<div class="af-poprow">
           <img src="${esc(it.img)}" alt="${esc(it.n)}" loading="lazy" />
           <div style="flex:1;min-width:0">
             <div class="af-rname">${esc(it.n)}</div>
             <span class="af-popbadge">★ Populaire</span>
           </div>
           <div class="af-price">${price(it.p)}</div>
         </div>`
      : `<div class="af-row">
           <div style="min-width:0">
             <div class="af-rname">${esc(it.n)}</div>
             ${it.d ? `<div class="af-rdesc">${esc(it.d)}</div>` : ""}
           </div>
           <span class="af-lead"></span>
           <div class="af-price">${price(it.p)}</div>
         </div>`;

  const signaturesHTML = `
    <div class="af-seclabel">CHEZ JOE'S, ON RECOMMANDE</div>
    <h2 class="af-sectitle">Nos Signatures</h2>
    ${SIGNATURES.map(
      (s) => `
      <article class="af-feat">
        <div class="ph"><img src="${esc(s.img)}" alt="${esc(s.name)}" loading="lazy" /><span class="badge">${esc(s.tag)}</span></div>
        <div class="body">
          <div><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></div>
          ${s.price ? `<div class="fprice">${price(s.price)}</div>` : ""}
        </div>
      </article>`
    ).join("")}`;

  const catHTML = (cat) => `
    <section id="${esc(cat.id)}" class="af-sec af-cat">
      <div class="af-cathead">
        <span class="glyph">${esc(cat.glyph)}</span>
        <h2>${esc(cat.label)}</h2>
        <span class="rule"></span>
      </div>
      ${
        cat.banner
          ? `<div class="af-banner">
               <img src="${esc(cat.banner.img)}" alt="${esc(cat.banner.name)}" loading="lazy" />
               <div class="bov"></div>
               <div class="bb">
                 <div class="bn">${esc(cat.banner.name)}</div>
                 <div class="bd">${esc(cat.banner.desc)}</div>
               </div>
             </div>`
          : ""
      }
      ${
        cat.items && cat.items.length
          ? `<div class="af-list">${cat.items.map(rowHTML).join("")}</div>`
          : ""
      }
    </section>`;

  const gamesHTML = `
    <div class="af-games">
      <img src="${esc(GAMES.img)}" alt="${esc(GAMES.title)}" loading="lazy" />
      <div class="gov"></div>
      <div class="gbody">
        <div class="gk">🎲 ENTRE AMIS</div>
        <h2>${esc(GAMES.title)}</h2>
        <p>${esc(GAMES.desc)}</p>
      </div>
    </div>`;

  // Render each group: an anchor (the scroll target for its tab) + a group
  // header for multi-section groups, then its sections.
  const groupsHTML = GROUPS.map((g) => {
    const inner = g.sections
      .map((sid) => {
        if (sid === "signatures") return signaturesHTML;
        if (sid === "jeux") return gamesHTML;
        return catById[sid] ? catHTML(catById[sid]) : "";
      })
      .join("");
    const showHeader = g.sections.length > 1;
    return `
      <section id="${esc(g.id)}" class="af-group">
        ${showHeader ? `<div class="af-grouphead">${esc(g.label)}</div>` : ""}
        ${inner}
      </section>`;
  }).join("");

  const chipsHTML = GROUPS.map(
    (g) => `<button data-chip="${esc(g.id)}" class="af-chip">${esc(g.label)}</button>`
  ).join("");

  document.getElementById("root").innerHTML = `
    <div class="af-page">
      <div class="af-col">
        <header class="af-hero" id="top">
          <img src="img/iced-coffee-neon.png" alt="" />
          <div class="ov"></div>
          <div class="htxt">
            <div class="kick">EST. 2025 · TUNIS</div>
            <h1 class="mark">Joe's</h1>
            <div class="sub">CAFFÈ</div>
            <div class="tag">Indulge your sweet tooth</div>
            <div class="pill">● OUVERT TOUS LES JOURS</div>
          </div>
          <button class="scrollhint" id="scrollhint" aria-label="Voir le menu">⌄</button>
        </header>
        <nav class="af-nav" id="afnav">
          <div class="af-navmark" id="navmark">Joe's</div>
          <div class="af-chips" id="afchips">${chipsHTML}</div>
        </nav>
        <main>${groupsHTML}</main>
        <footer class="af-foot">
          <div class="m">Joe's</div>
          <div class="fsub">CAFFÈ · INDULGE YOUR SWEET TOOTH</div>
          <div class="fline">SCAN · COMMANDEZ · SAVOUREZ</div>
        </footer>
      </div>
      <button class="af-totop" id="totop" aria-label="Haut de page">↑</button>
    </div>`;

  // ---- Interactivity ----
  const nav = document.getElementById("afnav");
  const chipsWrap = document.getElementById("afchips");
  const totop = document.getElementById("totop");
  const chips = Array.from(chipsWrap.querySelectorAll(".af-chip"));
  const ids = GROUPS.map((g) => g.id);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  };
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // When a chip is tapped we scroll smoothly to its section. During that scroll
  // the scroll-spy must not override the choice (otherwise tapping a short
  // trailing section like "Chicha" snaps to the next one). We lock the active
  // tab until scrolling settles.
  let lockId = null;
  let lockTimer = null;
  const lockTo = (id) => {
    lockId = id;
    setActive(id);
    clearTimeout(lockTimer);
    lockTimer = setTimeout(() => { lockId = null; }, 700);
  };

  chips.forEach((chip) =>
    chip.addEventListener("click", () => { lockTo(chip.dataset.chip); go(chip.dataset.chip); })
  );
  document.getElementById("navmark").addEventListener("click", toTop);
  document.getElementById("scrollhint").addEventListener("click", () => { lockTo(GROUPS[0].id); go(GROUPS[0].id); });
  totop.addEventListener("click", toTop);

  let activeId = null;
  const setActive = (id) => {
    if (id === activeId) return;
    activeId = id;
    chips.forEach((c) => c.classList.toggle("on", c.dataset.chip === id));
    const chip = chipsWrap.querySelector(`[data-chip="${id}"]`);
    if (chip) {
      // Desired scroll position so the chip sits ~16px in from the container's
      // left edge. offsetLeft is relative to the chips container itself, so the
      // first chip resolves to ~0 (never scrolls behind the logo).
      const target = Math.max(0, chip.offsetLeft - 16);
      chipsWrap.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  const onScroll = () => {
    const y = window.scrollY;
    totop.classList.toggle("show", y > 640);
    nav.classList.toggle("stuck", y > 300);
    // While a tab tap is settling, don't let scroll-spy override the choice.
    if (lockId !== null) return;
    const probe = y + 120;
    let cur = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + y;
      if (top <= probe) cur = id; else break;
    }
    // Near the very bottom, several short trailing sections (e.g. Chicha then
    // Jeux) can share the last viewport. Don't force the last tab — instead
    // pick the topmost trailing section whose start is already on screen, so a
    // tap on Chicha stays on Chicha.
    const atBottom =
      window.innerHeight + y >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
      const viewTop = y + 60;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + y;
        if (top >= viewTop) { cur = id; break; }
      }
    }
    setActive(cur);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
})();
