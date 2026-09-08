// Regression assertions for one AI Radar page. Returns a JSON report.
// Every check here corresponds to something that actually broke at least once
// during this session, so the suite is a record of real failures rather than a
// generic checklist.
(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  await wait(1800);

  const path = location.pathname.replace(/\/$/, "") || "/";
  const fail = [];
  const ok = [];
  const t = (name, cond, detail) => (cond ? ok : fail).push(detail ? name + " — " + detail : name);

  // — identity: each page must render its OWN content ————————————
  // The Studio page once showed the home hero because a duplicate id killed
  // the rule that hides the embedded home markup.
  const EXPECT = {
    "/":                  { title: /AI Radar/i,        h1: /sees ahead/i },
    "/studio":            { title: /Video Studio/i,    h1: /Video Studio/i },
    "/creator":           { title: /Spark/i,           h1: /stops the scroll/i },
    "/reverse-engineer":  { title: /Reverse Engineer/i,h1: /Build from a reference/i },
    "/prompt-lab":        { title: /PROMPT LAB/i,      h1: /PROMPT LAB/i },
  };
  const want = EXPECT[path];
  const h1s = [...document.querySelectorAll("h1")];
  if (want) {
    t("title matches page", want.title.test(document.title), document.title);
    t("exactly one h1", h1s.length === 1, h1s.length + " found: " + h1s.map((h) => h.textContent.trim()).join(" | "));
    t("h1 is this page's own", h1s.length === 1 && want.h1.test(h1s[0].textContent), h1s[0] && h1s[0].textContent.trim());
  }

  // — no duplicate ids (a duplicate is what broke Studio) ——————————
  const ids = {};
  document.querySelectorAll("[id]").forEach((e) => { ids[e.id] = (ids[e.id] || 0) + 1; });
  const dupes = Object.entries(ids).filter(([, n]) => n > 1);
  t("no duplicate ids", dupes.length === 0, JSON.stringify(dupes));

  // — no duplicate id ATTRIBUTES on one element (invisible to the above) —
  const dupAttr = [...document.querySelectorAll("*")].filter((e) => {
    const m = (e.outerHTML.slice(0, 300).match(/\sid=/g) || []).length;
    return m > 1;
  });
  t("no element carries two id attributes", dupAttr.length === 0,
    dupAttr.map((e) => e.tagName + "#" + e.id).join(", "));

  // — the accessibility layer actually shipped ————————————————
  let fv = false, rm = false;
  for (const sh of document.styleSheets) {
    try {
      for (const r of sh.cssRules) {
        if (r.selectorText && r.selectorText.includes("focus-visible")) fv = true;
        if (r.media && r.media.mediaText.includes("reduced-motion")) rm = true;
      }
    } catch (e) { /* cross-origin sheet */ }
  }
  t("focus-visible rule present", fv);
  t("reduced-motion rule present", rm);

  const skip = document.querySelector(".ar-skip");
  t("skip link present", !!skip);
  if (skip) {
    const href = skip.getAttribute("href") || "";
    t("skip link target exists", !!document.querySelector(href), href);
  }

  // — guideline fixes ————————————————————————————————————
  t("theme-color meta set", !!document.querySelector('meta[name="theme-color"]'));
  t("color-scheme is dark", getComputedStyle(document.documentElement).colorScheme.includes("dark"));

  const probe = document.querySelector("button, a.arh-link");
  if (probe) {
    t("no transition: all", !getComputedStyle(probe).transitionProperty.includes("all"),
      getComputedStyle(probe).transitionProperty.slice(0, 60));
  }

  // — layout —————————————————————————————————————————————
  const de = document.documentElement;
  t("no horizontal scroll", de.scrollWidth <= de.clientWidth + 1,
    de.scrollWidth + " > " + de.clientWidth);

  const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0);
  t("no broken images", broken.length === 0, broken.map((i) => i.getAttribute("src")).join(", ").slice(0, 120));

  return JSON.stringify({ page: path, passed: ok.length, failed: fail.length, failures: fail }, null, 1);
})()
