#!/usr/bin/env node
// The Persian pages: /fa/, /fa/studio/ and /fa/spark/.
//
// Persian used to exist only as a switch inside app.js, on the English URLs,
// so Google never saw a Persian word of the site. These pages are built from
// the English ones: the same markup, with every data-i18n text taken from
// app.js's fa dictionary, a Persian head, rtl, and links that stay in /fa/.
// app.js reads the language from the URL, so the page then runs in Persian.
//
// Never edit fa/ by hand - edit the English page or the dictionary, then:
//   node tools/build-fa.cjs           rebuild
//   node tools/build-fa.cjs --check   fail if fa/ is stale (the pre-push gate)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");
const SITE = "https://airadar.me";

const PAGES = [
  { en: "index.html", fa: "fa/index.html", url: "/",
    title: "ادیتور ویدیوی رایگان با هوش مصنوعی | AI Radar",
    desc: "ویدیوی خامت را بده و ریلز آماده بگیر: حذف خودکار مکث‌ها، زیرنویس متحرک فارسی، موزیک، بی‌رول و موشن‌گرافیک. رایگان و داخل مرورگر، بدون نصب.",
    app: null },
  { en: "studio/index.html", fa: "fa/studio/index.html", url: "/studio/",
    title: "ادیت ویدیو با هوش مصنوعی، رایگان و آنلاین - زیرنویس خودکار | AI Radar",
    desc: "ویدیو را آپلود کن و ریلز حرفه‌ای تحویل بگیر: حذف مکث‌ها، زیرنویس متحرک فارسی و انگلیسی، موزیک، بی‌رول و موشن‌گرافیک. یا از یک لینک یا مقاله ویدیو بساز. رایگان، بدون نصب.",
    app: { name: "AI Radar Video Studio", features: ["حذف خودکار مکث‌ها و برش", "زیرنویس متحرک کلمه به کلمه، فارسی و انگلیسی", "موزیک بدون کپی‌رایت هماهنگ با ریتم", "بی‌رول متناسب با حرف‌ها", "ویدیوی موشن‌گرافیک", "تامبنیل از ویدیوی خودت", "خروجی 9:16، 1:1 و 16:9"] } },
  { en: "spark/index.html", fa: "fa/spark/index.html", url: "/spark/",
    title: "ابزارهای رایگان هوش مصنوعی برای تولید محتوا: هوک، پست، کاروسل و تامبنیل | AI Radar",
    desc: "نوزده ابزار رایگان برای تولیدکننده‌های محتوا: ساخت هوک، نوشتن پست، کاروسل، تامبنیل، لوگو و نقل‌قول. یکی را انتخاب کن و در چند ثانیه آماده است.",
    app: { name: "AI Radar Spark", features: ["ساخت هوک", "نوشتن پست", "ساخت کاروسل", "ساخت تامبنیل", "ساخت لوگو", "طرح نقل‌قول"] } },
];
const faUrl = (u) => "/fa" + u;
const LANDING = [["/free-ai-video-editor/", "/fa/ai-video-editor/"], ["/auto-captions/", "/fa/auto-subtitle/"], ["/youtube-thumbnail-maker/", "/fa/thumbnail-maker/"],
  ["/motion-graphics-video/", "/fa/motion-graphics/"], ["/remove-silence-from-video/", "/fa/remove-silence/"], ["/instagram-reels-maker/", "/fa/reels-maker/"]];

// the dictionary, read out of app.js rather than copied
const appJs = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
const start = appJs.indexOf("const i18n = {");
const end = appJs.indexOf("\n};", start);
if (start < 0 || end < 0) throw new Error("i18n dictionary not found in app.js");
const i18n = vm.runInNewContext("(" + appJs.slice(start + "const i18n = ".length, end + 2) + ")");
const FA = i18n.fa;

const escText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => escText(s).replace(/"/g, "&quot;");

function alternates(u) {
  return [
    `<link rel="alternate" hreflang="en" href="${SITE}${u}" />`,
    `<link rel="alternate" hreflang="fa" href="${SITE}${faUrl(u)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE}${u}" />`,
  ];
}

// Both sides carry the same hreflang set, right after the canonical.
function withAlternates(s, u) {
  s = s.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\r?\n/g, "");
  return s.replace(/([ \t]*)(<link rel="canonical"[^>]*>\r?\n)/, (m, ind, tag) => ind + tag + alternates(u).map((x) => ind + x + "\n").join(""));
}

// A link to the other language in the home page's footer bar.
function withLangLink(s, href, label, lang) {
  s = s.replace(/[ \t]*<a class="ar-lang"[^>]*>[^<]*<\/a>\r?\n/g, "");
  return s.replace(/(<span class="ar-foot-links">\r?\n)/, `$1            <a class="ar-lang" href="${href}" hreflang="${lang}" lang="${lang}">${label}</a>\n`);
}

function buildFa(p, en) {
  let s = en;
  let missing = [];
  s = s.replace(/<html lang="en"( dir="ltr")?>/, '<html lang="fa" dir="rtl">');
  // text the dictionary owns
  s = s.replace(/(<[a-zA-Z0-9]+\b[^>]*?\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(?=<)/g, (m, open, key, text) => {
    if (FA[key] == null) { missing.push(key); return m; }
    return open + escText(FA[key]);
  });
  s = s.replace(/(<([a-zA-Z0-9]+)\b[^>]*?\sdata-i18n-html="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
    if (FA[key] == null) { missing.push(key); return m; }
    return open + FA[key] + close;
  });
  // head
  s = s.replace(/<title>[^<]*<\/title>/, `<title>${escText(p.title)}</title>`);
  const meta = (attr, name, val) => { s = s.replace(new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`), `$1${escAttr(val)}$2`); };
  meta("name", "description", p.desc);
  meta("property", "og:title", p.title);
  meta("property", "og:description", p.desc);
  meta("property", "og:url", SITE + faUrl(p.url));
  meta("name", "twitter:title", p.title);
  meta("name", "twitter:description", p.desc);
  s = s.replace(/[ \t]*<meta property="og:locale"[^>]*>\r?\n/g, "");
  s = s.replace(/([ \t]*)(<meta property="og:type"[^>]*>\r?\n)/, '$1$2$1<meta property="og:locale" content="fa_IR" />\n');
  s = s.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${SITE}${faUrl(p.url)}$2`);
  s = withAlternates(s, p.url);
  if (p.app) {
    const ld = { "@context": "https://schema.org", "@graph": [{ "@type": "WebApplication", name: p.app.name, url: SITE + faUrl(p.url), inLanguage: "fa", description: p.desc,
      applicationCategory: "MultimediaApplication", operatingSystem: "Any (web browser)", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: p.app.features, publisher: { "@id": SITE + "/#org" } }] };
    s = s.replace(/<script type="application\/ld\+json" id="ar-ld">[\s\S]*?<\/script>/, '<script type="application/ld+json" id="ar-ld">' + JSON.stringify(ld) + "</script>");
  } else {
    s = s.replace(/<script type="application\/ld\+json" id="ar-ld">[\s\S]*?<\/script>/, (m) => m.replace(/"name": "AI Radar", "url": "https:\/\/airadar\.me\/", "publisher"/, '"name": "AI Radar", "url": "https://airadar.me/fa/", "inLanguage": "fa", "publisher"'));
  }
  // one level deeper than the English page, so nothing may stay relative
  s = s.replace(/(\s(?:href|src)=")(?![a-z]+:|\/|#|')([^"]+")/g, "$1/$2");
  // links that have a Persian page stay in Persian
  for (const q of PAGES) s = s.split(`href="${q.url}"`).join(`href="${faUrl(q.url)}"`);
  // the search landing pages have Persian twins of their own (tools/build-landing.py)
  for (const [en, fa] of LANDING) s = s.split(`href="${en}"`).join(`href="${fa}"`);
  s = withLangLink(s, p.url, "English", "en");
  const banner = "<!-- Built by tools/build-fa.cjs from " + p.en + " - do not edit by hand. -->\n";
  s = s.replace(/^(<!doctype html>\r?\n)/i, "$1" + banner);
  return { html: s, missing: [...new Set(missing)] };
}

let stale = [];
for (const p of PAGES) {
  const enPath = path.join(ROOT, p.en);
  let en = fs.readFileSync(enPath, "utf8");
  let enNew = withAlternates(en, p.url);
  if (p.url === "/") enNew = withLangLink(enNew, faUrl(p.url), "فارسی", "fa");
  const { html, missing } = buildFa(p, enNew);
  if (missing.length) console.log("  note  " + p.fa + ": no Persian for " + missing.join(", "));
  const faPath = path.join(ROOT, p.fa);
  const cur = fs.existsSync(faPath) ? fs.readFileSync(faPath, "utf8") : null;
  if (CHECK) {
    if (enNew !== en) stale.push(p.en);
    if (cur !== html) stale.push(p.fa);
    continue;
  }
  if (enNew !== en) fs.writeFileSync(enPath, enNew);
  if (cur !== html) { fs.mkdirSync(path.dirname(faPath), { recursive: true }); fs.writeFileSync(faPath, html); console.log("  wrote " + p.fa); }
}
if (CHECK) {
  if (stale.length) { console.log("  FAIL  the Persian pages are stale (" + stale.join(", ") + ") - run: node repo/tools/build-fa.cjs"); process.exit(1); }
  console.log("  ok    " + PAGES.length + " Persian pages match their English pages");
}
