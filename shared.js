// ── SHARED LAYOUT ─────────────────────────────────────────────────────────
const PAGES = [
  { href:"/",         id:"home",    icon:"◉", en:"Home",          fa:"خانه" },
  { href:"/tools/",   id:"tools",   icon:"◎", en:"Tools",         fa:"ابزارها" },
  { href:"/charts/",  id:"charts",  icon:"▥", en:"Live charts",   fa:"نمودار زنده" },
  { href:"/image/",   id:"image",   icon:"🎨",en:"Image AI",      fa:"تصویر AI" },
  { href:"/caption/", id:"caption", icon:"✎", en:"Caption AI",    fa:"کپشن AI" },
  { href:"/video/",   id:"video",   icon:"▶", en:"Video studio",  fa:"استودیو ویدیو" },
  { href:"/about/",   id:"about",   icon:"✦", en:"About",         fa:"درباره" },
];

function buildSidebar(activePage) {
  const lang = localStorage.getItem("lang") || "en";
  const fa   = lang === "fa";
  const sb   = document.getElementById("appSidebar");
  if (!sb) return;

  const navItem = p => {
    const cls = p.id === activePage ? " class=\"active\"" : "";
    return `<a href="${p.href}"${cls}><span class="nav-ic">${p.icon}</span><span class="nav-tx">${fa ? p.fa : p.en}</span></a>`;
  };

  const explore = PAGES.filter(p => ["home","tools","charts","image"].includes(p.id)).map(navItem).join("");
  const create  = PAGES.filter(p => ["caption","video","about"].includes(p.id)).map(navItem).join("");

  sb.innerHTML = `
    <div class="sidebar-top">
      <a class="brand" href="/" aria-label="AI Radar home">
        <svg class="brand-logo" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:42px;height:42px;border-radius:8px;background:#d8b76a;">
          <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#090805" font-size="15" font-weight="800" font-family="Inter,sans-serif">AR</text>
        </svg>
        <span class="brand-name">AI Radar</span>
      </a>
      <button id="navCollapseBtn" class="nav-collapse" type="button" aria-label="Collapse menu"><span class="nav-collapse-icon">‹</span></button>
    </div>
    <nav class="sidebar-nav" id="sidebarNav">
      <div class="nav-group">
        <p class="nav-group-title">${fa ? "کشف" : "Explore"}</p>
        ${explore}
      </div>
      <div class="nav-group">
        <p class="nav-group-title">${fa ? "ساخت" : "Create"}</p>
        ${create}
      </div>
    </nav>
    <div class="sidebar-footer">
      <a class="button primary sidebar-cta" href="/image/">${fa ? "تولید تصویر AI" : "Create with AI"}</a>
      <div class="sidebar-prefs">
        <div class="seg-toggle" id="themeSeg" role="group" aria-label="Theme">
          <button type="button" class="seg-btn" data-theme="dark"><span class="seg-ic">☾</span><span class="seg-tx">${fa?"تاریک":"Dark"}</span></button>
          <button type="button" class="seg-btn" data-theme="light"><span class="seg-ic">☀</span><span class="seg-tx">${fa?"روشن":"Light"}</span></button>
        </div>
        <div class="seg-toggle" id="langSeg" role="group" aria-label="Language">
          <button type="button" class="seg-btn" data-lang="en">EN</button>
          <button type="button" class="seg-btn" data-lang="fa">فا</button>
        </div>
      </div>
    </div>`;

  initSharedControls();
}

function applyTheme(theme) {
  document.body.classList.toggle("theme-light", theme === "light");
  localStorage.setItem("theme", theme);
  document.querySelectorAll("#themeSeg .seg-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.theme === theme));
}

function applyLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  const dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.body.dir = dir;
  document.querySelectorAll("#langSeg .seg-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));
  if (typeof onLangChange === "function") onLangChange(lang);
}

function initSharedControls() {
  // Theme
  const t = localStorage.getItem("theme") || "dark";
  applyTheme(t);
  document.querySelectorAll("#themeSeg .seg-btn").forEach(b =>
    b.addEventListener("click", () => applyTheme(b.dataset.theme)));

  // Lang
  const l = localStorage.getItem("lang") || "en";
  applyLang(l);
  document.querySelectorAll("#langSeg .seg-btn").forEach(b =>
    b.addEventListener("click", () => {
      applyLang(b.dataset.lang);
      buildSidebar(window.PAGE_ID || "");
    }));

  // Collapse
  const sb = document.getElementById("appSidebar");
  const cb = document.getElementById("navCollapseBtn");
  if (cb && sb) {
    sb.classList.toggle("collapsed", localStorage.getItem("sidebarCollapsed") === "true");
    cb.addEventListener("click", () => {
      const c = sb.classList.toggle("collapsed");
      localStorage.setItem("sidebarCollapsed", c);
    });
  }

  // Mobile drawer
  const openBtn  = document.getElementById("sidebarOpenBtn");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (openBtn && backdrop && sb) {
    openBtn.addEventListener("click", () => { sb.classList.add("open"); backdrop.classList.add("active"); });
    backdrop.addEventListener("click", () => { sb.classList.remove("open"); backdrop.classList.remove("active"); });
  }

  // Scroll to top
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () =>
      scrollBtn.classList.toggle("visible", window.scrollY > 400), { passive: true });
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}
