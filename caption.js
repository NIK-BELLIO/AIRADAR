window.PAGE_ID = "caption";
document.addEventListener("DOMContentLoaded", () => {
  buildSidebar("caption");
  bindCaptionEvents();
});

function onLangChange(lang) {
  const fa = lang === "fa";
  const el = id => document.getElementById(id);
  if(el("captionEyebrow"))   el("captionEyebrow").textContent   = fa?"✦ کپشن AI — توسط Claude":"✦ Caption AI — Powered by Claude";
  if(el("captionTitle"))     el("captionTitle").textContent     = fa?"آپلود مدیا ← کپشن، هوک، هشتگ":"Upload media → caption, hooks, hashtags";
  if(el("captionDesc"))      el("captionDesc").textContent      = fa?"مدیا آپلود کن، پلتفرم بخواه، کپشن حرفه‌ای بگیر — رایگان از طریق Puter.":"Upload media, describe the goal, choose a platform — get polished captions free via Puter.";
  if(el("uploadLblTxt"))     el("uploadLblTxt").textContent     = fa?"آپلود عکس یا ویدیو":"Upload image or video";
  if(el("subjectLblTxt"))    el("subjectLblTxt").innerHTML      = fa?`محتوای عکس/ویدیو <span style="color:var(--rose)">(الزامی)</span>`:`What's in the photo/video? <span style="color:var(--rose)">(required)</span>`;
  if(el("goalLblTxt"))       el("goalLblTxt").textContent       = fa?"هدف (اختیاری)":"Goal (optional)";
  if(el("platformLblTxt"))   el("platformLblTxt").textContent   = fa?"پلتفرم":"Platform";
  if(el("toneLblTxt"))       el("toneLblTxt").textContent       = fa?"لحن":"Tone";
  if(el("genCaptionBtnTxt")) el("genCaptionBtnTxt").textContent = fa?"✦ تولید با Claude AI":"✦ Generate with Claude AI";
  if(el("captionHint"))      el("captionHint").textContent      = fa?"اولین بار یک پنجره Puter باز می‌شود — رایگان است.":"First use opens a free Puter sign-in.";
}

function bindCaptionEvents() {
  const dz  = document.getElementById("mediaDropZone");
  const fi  = document.getElementById("mediaInput");
  const pre = document.getElementById("mediaPreview");
  if (dz) {
    dz.addEventListener("click", () => fi?.click());
    dz.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" ") fi?.click(); });
    dz.addEventListener("dragover", e => { e.preventDefault(); dz.classList.add("drag-over"); });
    dz.addEventListener("dragleave", () => dz.classList.remove("drag-over"));
    dz.addEventListener("drop", e => { e.preventDefault(); dz.classList.remove("drag-over"); handleFile(e.dataTransfer.files[0]); });
  }
  if (fi) fi.addEventListener("change", e => handleFile(e.target.files[0]));

  function handleFile(file) {
    if (!file || !pre) return;
    const ph = document.getElementById("mediaPlaceholder"); if (ph) ph.style.display = "none";
    const url = URL.createObjectURL(file);
    if (file.type.startsWith("video/")) {
      const v = document.createElement("video"); v.src = url; v.controls = true; v.style.maxWidth = "100%"; v.style.maxHeight = "60vh";
      pre.innerHTML = ""; pre.appendChild(v);
    } else {
      const img = document.createElement("img"); img.src = url; img.alt = "Preview";
      pre.innerHTML = ""; pre.appendChild(img);
    }
  }

  const genBtn = document.getElementById("generateCaptionBtn");
  if (genBtn) genBtn.addEventListener("click", generateCaption);

  const capBtn = document.getElementById("copyCaptionBtn");
  if (capBtn) capBtn.addEventListener("click", () => copyText("captionResult", capBtn, "Copy caption"));
  const jsonBtn = document.getElementById("copyJsonBtn");
  if (jsonBtn) jsonBtn.addEventListener("click", () => copyText("jsonResult", jsonBtn, "Copy JSON"));
}

function copyText(elId, btn, origLabel) {
  const el = document.getElementById(elId);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    btn.textContent = "✓ Copied!";
    setTimeout(() => btn.textContent = origLabel, 1600);
  });
}

async function generateCaption() {
  const subject  = document.getElementById("captionSubject")?.value?.trim();
  const goal     = document.getElementById("captionGoal")?.value?.trim();
  const platform = document.getElementById("platformSelect")?.value;
  const tone     = document.getElementById("toneSelect")?.value;
  const fa = localStorage.getItem("lang") === "fa";
  if (!subject) { alert(fa ? "لطفاً محتوای عکس/ویدیو را بنویس." : "Please describe what's in the photo/video."); return; }

  const btn = document.getElementById("generateCaptionBtn");
  const btntxt = document.getElementById("genCaptionBtnTxt");
  if (btn) btn.disabled = true;
  if (btntxt) btntxt.textContent = fa ? "در حال تولید…" : "Generating…";

  const prompt = `You are an expert social media copywriter. Generate a social media post for ${platform} in ${tone} tone.
Media: ${subject}${goal ? "\nGoal: " + goal : ""}
Return ONLY a JSON object, no markdown, no preamble:
{"caption":"main post text (2-4 lines)","hook":"opening one-liner","hashtags":["5","to","10","tags"],"callToAction":"short CTA"}`;

  try {
    const result = await puter.ai.chat(prompt);
    const raw = typeof result === "string" ? result : (result?.message?.content || result?.text || JSON.stringify(result));
    let parsed;
    try { parsed = JSON.parse(raw.replace(/```json|```/g, "").trim()); }
    catch (e) { parsed = { caption: raw, hook: "", hashtags: [], callToAction: "" }; }

    const captionText = [parsed.hook, parsed.caption, (parsed.hashtags||[]).join(" "), parsed.callToAction].filter(Boolean).join("\n\n");
    document.getElementById("captionResult").textContent = captionText;
    document.getElementById("jsonResult").textContent = JSON.stringify(parsed, null, 2);
    document.getElementById("captionOutput").style.display = "";
  } catch (e) {
    alert(fa ? "خطا در اتصال به Puter AI. مطمئن شو وارد حساب شدی." : "Error: Please sign in to Puter first.");
  } finally {
    if (btn) btn.disabled = false;
    if (btntxt) btntxt.textContent = fa ? "✦ تولید با Claude AI" : "✦ Generate with Claude AI";
  }
}
