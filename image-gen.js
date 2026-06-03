window.PAGE_ID = "image";

const STYLES = [
  { id:"none",       en:"Default",        fa:"پیش‌فرض",    suffix:"" },
  { id:"photo",      en:"Photorealistic", fa:"واقع‌گرایانه",suffix:", photorealistic, DSLR, sharp focus, 8K" },
  { id:"cinematic",  en:"Cinematic",      fa:"سینمایی",     suffix:", cinematic lighting, movie still, anamorphic lens, film grain" },
  { id:"anime",      en:"Anime",          fa:"انیمه",       suffix:", anime style, Studio Ghibli, vibrant colors, detailed" },
  { id:"oil",        en:"Oil painting",   fa:"نقاشی رنگ‌روغن",suffix:", oil painting, impasto technique, textured canvas, classical art" },
  { id:"watercolor", en:"Watercolor",     fa:"آبرنگ",       suffix:", watercolor painting, soft edges, flowing colors, artistic" },
  { id:"3d",         en:"3D render",      fa:"سه‌بعدی",     suffix:", 3D render, octane render, volumetric lighting, ultra detailed" },
  { id:"sketch",     en:"Pencil sketch",  fa:"اسکچ",        suffix:", pencil sketch, black and white, detailed line art, graphite" },
  { id:"pixel",      en:"Pixel art",      fa:"پیکسل‌آرت",   suffix:", pixel art, 16-bit, retro game style, crisp pixels" },
  { id:"neon",       en:"Neon / Cyberpunk",fa:"نئون/سایبرپانک",suffix:", neon lights, cyberpunk city, synthwave aesthetic, glowing" },
  { id:"minimalist", en:"Minimalist",     fa:"مینیمالیست",  suffix:", minimalist design, clean lines, simple shapes, flat art" },
  { id:"portrait",   en:"Portrait",       fa:"پرتره",       suffix:", professional portrait photography, studio lighting, shallow depth of field" },
];

const QUICK_PROMPTS = [
  "A majestic dragon flying over a snow-capped mountain at golden hour",
  "Cozy Japanese coffee shop in autumn rain, warm lights, neon signs",
  "Astronaut floating in deep space with colorful nebula in background",
  "Ancient library with floating books and magical light beams",
  "Futuristic cyberpunk city street at night, neon reflections on wet pavement",
  "A tiny cottage in an enchanted forest with glowing mushrooms",
  "Abstract geometric shapes merging into a human face",
  "Persian garden in spring with blooming roses and a fountain",
];

let currentStyle = "none";
let generationHistory = [];
let isGenerating = false;

document.addEventListener("DOMContentLoaded", () => {
  buildSidebar("image");
  buildStyleGrid();
  buildQuickPrompts();
  bindEvents();
  applyLangToPage(localStorage.getItem("lang") || "en");
  checkScrollTopBtn();
});

function onLangChange(lang) { applyLangToPage(lang); }

function applyLangToPage(lang) {
  const fa = lang === "fa";
  const el = id => document.getElementById(id);
  if (el("imgEyebrow")) el("imgEyebrow").textContent = fa ? "تولید تصویر AI رایگان — بدون لاگین" : "Free AI Image Generator — No Login";
  if (el("imgTitle"))   el("imgTitle").textContent   = fa ? "متن به تصویر در چند ثانیه" : "Text to image in seconds";
  if (el("imgDesc"))    el("imgDesc").textContent    = fa ? "توصیف کن چه می‌خواهی — یک تصویر AI فوری دریافت کن. رایگان، بدون حساب." : "Describe what you want to see — get a stunning AI image instantly. Free, no account.";
  if (el("promptLblTxt"))  el("promptLblTxt").textContent  = fa ? "تصویر خود را توصیف کنید" : "Describe your image";
  if (el("styleLblTxt"))   el("styleLblTxt").textContent   = fa ? "سبک" : "Style";
  if (el("aspectLblTxt"))  el("aspectLblTxt").textContent  = fa ? "نسبت تصویر" : "Aspect ratio";
  if (el("negLblTxt"))     el("negLblTxt").textContent     = fa ? "پرامپت منفی (اختیاری)" : "Negative prompt (optional)";
  if (el("nsfwLbl"))       el("nsfwLbl").textContent       = fa ? "حالت ایمن (بدون محتوای نامناسب)" : "Safe mode (no explicit content)";
  if (el("generateBtnTxt"))el("generateBtnTxt").textContent= fa ? "تولید تصویر" : "Generate image";
  if (el("quickLbl"))      el("quickLbl").textContent      = fa ? "پرامپت‌های سریع" : "Quick prompts";
  if (el("placeholderTxt"))el("placeholderTxt").textContent= fa ? "تصویر تولیدشده اینجا ظاهر می‌شود" : "Your generated image appears here";
  if (el("placeholderSub"))el("placeholderSub").textContent= fa ? "رایگان · بدون واترمارک · دانلود فوری" : "Free · No watermark · Instant download";
  if (el("historyLbl"))    el("historyLbl").textContent    = fa ? "تولیدهای اخیر" : "Recent generations";
  if (el("howTitle"))      el("howTitle").textContent      = fa ? "چطور تصویر AI بسازیم" : "How to generate AI images";
  if (el("how1Title"))     el("how1Title").textContent     = fa ? "۱. پرامپت بنویس" : "1. Write a prompt";
  if (el("how2Title"))     el("how2Title").textContent     = fa ? "۲. سبک انتخاب کن" : "2. Pick a style";
  if (el("how3Title"))     el("how3Title").textContent     = fa ? "۳. تولید و دانلود کن" : "3. Generate & download";
  if (el("how1Txt"))       el("how1Txt").textContent       = fa ? "تصویر مورد نظر را با جزئیات توصیف کن — موضوع، سبک، نور، حال‌وهوا." : "Describe your image in detail — subject, style, lighting, mood.";
  if (el("how2Txt"))       el("how2Txt").textContent       = fa ? "از میان واقع‌گرایانه، انیمه، نقاشی و ۷+ پریست دیگر انتخاب کن." : "Choose from photorealistic, anime, oil painting, cinematic and 7+ more presets.";
  if (el("how3Txt"))       el("how3Txt").textContent       = fa ? "روی تولید کلیک کن و تصویرت در چند ثانیه آماده است. رایگان، بدون واترمارک." : "Click generate and your image appears in seconds. Free, no watermark, no account.";
  if (el("modelInfoTxt")) {
    el("modelInfoTxt").innerHTML = fa
      ? 'محصول <a href="https://pollinations.ai" target="_blank" rel="noopener" style="color:var(--gold);">Pollinations.ai</a> — زیرساخت متن‌باز تصویر AI. تصاویر ذخیره نمی‌شوند و استفاده رایگان است.'
      : 'Powered by <a href="https://pollinations.ai" target="_blank" rel="noopener" style="color:var(--gold);">Pollinations.ai</a> — free open AI image infrastructure. Images are not stored. Free to download and use.';
  }
  buildStyleGrid();
  buildQuickPrompts();
}

function buildStyleGrid() {
  const grid = document.getElementById("styleGrid"); if (!grid) return;
  const lang = localStorage.getItem("lang") || "en";
  grid.innerHTML = STYLES.map(s =>
    `<button class="gen-style-btn${s.id===currentStyle?" active":""}" data-style="${s.id}" type="button">${lang==="fa"?s.fa:s.en}</button>`
  ).join("");
  grid.querySelectorAll(".gen-style-btn").forEach(btn =>
    btn.addEventListener("click", () => {
      currentStyle = btn.dataset.style;
      grid.querySelectorAll(".gen-style-btn").forEach(b => b.classList.toggle("active", b===btn));
    })
  );
}

function buildQuickPrompts() {
  const wrap = document.getElementById("quickPrompts"); if (!wrap) return;
  const lang = localStorage.getItem("lang") || "en";
  const fa = lang === "fa";
  wrap.innerHTML = QUICK_PROMPTS.map((p, i) => {
    const short = p.length > 36 ? p.slice(0, 36) + "…" : p;
    return `<button class="tag" style="cursor:pointer;font-size:11px;" data-prompt="${p}" type="button">${short}</button>`;
  }).join("");
  wrap.querySelectorAll("[data-prompt]").forEach(btn =>
    btn.addEventListener("click", () => {
      const ta = document.getElementById("imgPrompt");
      if (ta) { ta.value = btn.dataset.prompt; ta.focus(); }
    })
  );
}

function bindEvents() {
  const genBtn = document.getElementById("generateBtn");
  if (genBtn) genBtn.addEventListener("click", generateImage);

  const ta = document.getElementById("imgPrompt");
  if (ta) ta.addEventListener("keydown", e => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") generateImage(); });

  const varBtn = document.getElementById("variationBtn");
  if (varBtn) varBtn.addEventListener("click", () => {
    const ta = document.getElementById("imgPrompt");
    if (ta && ta.value.trim()) {
      const seed = Math.floor(Math.random() * 999999);
      generateImage(seed);
    }
  });

  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) shareBtn.addEventListener("click", async () => {
    const img = document.getElementById("genImage");
    if (!img || !img.src) return;
    await navigator.clipboard.writeText(img.src);
    shareBtn.textContent = "✓ Copied!";
    setTimeout(() => { shareBtn.textContent = "🔗 Copy link"; }, 2000);
  });

  const newBtn = document.getElementById("newBtn");
  if (newBtn) newBtn.addEventListener("click", resetState);

  const dlBtn = document.getElementById("downloadBtn");
  if (dlBtn) dlBtn.addEventListener("click", () => {
    const img = document.getElementById("genImage");
    if (!img || !img.src) return;
    const a = document.createElement("a"); a.href = img.src; a.download = "ai-radar-image.jpg"; a.click();
  });

  window.addEventListener("scroll", checkScrollTopBtn, { passive: true });
}

function checkScrollTopBtn() {
  const btn = document.getElementById("scrollTopBtn");
  if (btn) btn.classList.toggle("visible", window.scrollY > 400);
}

async function generateImage(customSeed) {
  if (isGenerating) return;
  const prompt = document.getElementById("imgPrompt")?.value?.trim();
  const fa = localStorage.getItem("lang") === "fa";
  if (!prompt) {
    const ta = document.getElementById("imgPrompt");
    if (ta) { ta.style.borderColor = "rgba(255,100,60,0.8)"; setTimeout(() => ta.style.borderColor = "", 1500); }
    alert(fa ? "لطفاً یک توصیف برای تصویر بنویس." : "Please write a description for your image.");
    return;
  }

  isGenerating = true;
  const genBtn = document.getElementById("generateBtn");
  const btnTxt = document.getElementById("generateBtnTxt");
  const overlay = document.getElementById("loadingOverlay");
  const status  = document.getElementById("genStatus");
  const img     = document.getElementById("genImage");
  const actions = document.getElementById("imageActions");
  const ph      = document.getElementById("imagePlaceholder");

  if (genBtn)  genBtn.disabled = true;
  if (btnTxt)  btnTxt.textContent = fa ? "در حال تولید…" : "Generating…";
  if (overlay) overlay.classList.add("visible");
  if (status)  status.textContent = fa ? "ارسال به Pollinations.ai…" : "Sending to Pollinations.ai…";

  // Build final prompt with style suffix
  const style = STYLES.find(s => s.id === currentStyle);
  const suffix = style ? style.suffix : "";
  const neg    = document.getElementById("negPrompt")?.value?.trim() || "";
  const aspect = document.getElementById("aspectSelect")?.value || "1024x1024";
  const [W, H] = aspect.split("x").map(Number);
  const safe   = document.getElementById("nsfwCheck")?.checked !== false;
  const seed   = customSeed || Math.floor(Math.random() * 999999);

  let finalPrompt = prompt + suffix;
  if (neg) finalPrompt += `, NOT: ${neg}`;

  const encodedPrompt = encodeURIComponent(finalPrompt);
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${W}&height=${H}&seed=${seed}&nologo=true&enhance=true${safe?"&safe=true":""}`;

  // Update progress text
  const messages = fa
    ? ["پرامپت پردازش می‌شود…","در حال رندر کردن…","تصویر در راه است…","تقریباً آماده شد…"]
    : ["Processing your prompt…","Rendering the image…","Almost there…","Finishing up…"];
  let msgIdx = 0;
  const progEl = document.getElementById("progressTxt");
  const msgInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % messages.length;
    if (progEl) progEl.textContent = messages[msgIdx];
  }, 2500);

  try {
    // Pre-load the image
    await new Promise((resolve, reject) => {
      const tempImg = new Image();
      tempImg.onload = resolve;
      tempImg.onerror = reject;
      tempImg.src = url;
    });

    clearInterval(msgInterval);
    if (img)  { img.src = url; img.style.display = ""; img.alt = prompt; }
    if (ph)   ph.style.display = "none";
    if (overlay) overlay.classList.remove("visible");
    if (actions) actions.style.display = "flex";
    if (status) status.textContent = fa ? "✓ تصویر آماده شد!" : "✓ Image ready!";

    // Download button
    const dlBtn = document.getElementById("downloadBtn");
    if (dlBtn) { dlBtn.href = url; dlBtn.download = `ai-radar-${seed}.jpg`; }

    // Add to history
    generationHistory.unshift({ url, prompt, seed });
    if (generationHistory.length > 8) generationHistory.pop();
    renderHistory();

  } catch (e) {
    clearInterval(msgInterval);
    if (overlay) overlay.classList.remove("visible");
    if (status) status.textContent = fa ? "❌ خطا در تولید. دوباره امتحان کن." : "❌ Generation failed. Please try again.";
  } finally {
    isGenerating = false;
    if (genBtn) genBtn.disabled = false;
    if (btnTxt) btnTxt.textContent = fa ? "تولید تصویر" : "Generate image";
  }
}

function renderHistory() {
  const section = document.getElementById("historySection");
  const grid    = document.getElementById("genHistory");
  if (!section || !grid) return;
  if (!generationHistory.length) { section.style.display = "none"; return; }
  section.style.display = "";
  grid.innerHTML = generationHistory.map(item =>
    `<div class="gen-thumb" title="${item.prompt}" onclick="loadFromHistory('${item.url}','${item.prompt.replace(/'/g,"\\'")}')">
      <img src="${item.url}" alt="${item.prompt}" loading="lazy"/>
    </div>`
  ).join("");
}

function loadFromHistory(url, prompt) {
  const img = document.getElementById("genImage");
  const ph  = document.getElementById("imagePlaceholder");
  const actions = document.getElementById("imageActions");
  const dlBtn = document.getElementById("downloadBtn");
  if (img)  { img.src = url; img.style.display = ""; }
  if (ph)   ph.style.display = "none";
  if (actions) actions.style.display = "flex";
  if (dlBtn) { dlBtn.href = url; }
  const ta = document.getElementById("imgPrompt");
  if (ta) ta.value = prompt;
}

function resetState() {
  const img     = document.getElementById("genImage");
  const ph      = document.getElementById("imagePlaceholder");
  const actions = document.getElementById("imageActions");
  const ta      = document.getElementById("imgPrompt");
  const status  = document.getElementById("genStatus");
  if (img)    { img.src = ""; img.style.display = "none"; }
  if (ph)     ph.style.display = "";
  if (actions) actions.style.display = "none";
  if (ta)     { ta.value = ""; ta.focus(); }
  if (status) status.textContent = "";
}
