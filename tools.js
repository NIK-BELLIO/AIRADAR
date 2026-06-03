window.PAGE_ID = "tools";
const state = {
  lang: localStorage.getItem("lang")||"en",
  query:"", category:"all", budget:"all", sort:"score",
  modelType:"all", minScore:0,
  viewMode: localStorage.getItem("toolViewMode")||"grid",
  compare: JSON.parse(localStorage.getItem("compareTools")||"[]")
};
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const txt = v => typeof v==="string"?v:(v[state.lang]||v.en);
const el  = id => document.getElementById(id);

document.addEventListener("DOMContentLoaded",()=>{
  buildSidebar("tools");
  renderControls(); renderTools(); renderCompare();
  bindEvents(); fetchGitHub();
});

function onLangChange(lang){
  state.lang=lang;
  renderControls(); renderTools(); renderCompare();
  const fa=lang==="fa";
  if(el("toolsTitle")) el("toolsTitle").textContent=fa?"ابزارهای واقعی انتخاب‌شده":"Curated real AI tools";
  if(el("toolsDesc"))  el("toolsDesc").textContent=fa?"بیش از ۴۵ ابزار با داده زنده و قیمت.":"45+ hand-picked tools with live data and pricing.";
  if(el("compareTitle")) el("compareTitle").textContent=fa?"مقایسه ابزارهای انتخاب‌شده":"Compare selected tools";
}

function renderControls(){
  const fa=state.lang==="fa";
  const jt=el("jumpToTool");
  if(jt){ const sorted=[...tools].sort((a,b)=>a.name.localeCompare(b.name));
    jt.innerHTML=`<option value="">${fa?"— انتخاب ابزار —":"— Select a tool —"}</option>`+sorted.map(t=>`<option value="${t.name}">${t.name}</option>`).join(""); }
  const cf=el("categoryFilter");
  if(cf){ const cats=[...new Map(tools.map(t=>[txt(t.category),t.category.en])).entries()];
    cf.innerHTML=`<option value="all">${fa?"همه دسته‌ها":"All categories"}</option>`+cats.map(([l,v])=>`<option value="${v}">${l}</option>`).join("");
    cf.value=state.category; }
  const bf=el("budgetFilter");
  if(bf){ bf.innerHTML=[["all",fa?"همه بودجه‌ها":"All budgets"],["free",fa?"رایگان یا فریمیوم":"Free / Freemium"],["under20","< $20 / mo"],["pro",fa?"حرفه‌ای +":"Pro +"]].map(([v,l])=>`<option value="${v}">${l}</option>`).join(""); bf.value=state.budget; }
  const sf=el("sortFilter");
  if(sf){ sf.innerHTML=[["score",fa?"بهترین":"Best match"],["price",fa?"ارزان‌تر":"Cheapest first"],["name",fa?"نام":"Name A–Z"]].map(([v,l])=>`<option value="${v}">${l}</option>`).join(""); sf.value=state.sort; }
  const mf=el("modelTypeFilter");
  if(mf){ mf.innerHTML=[["all",fa?"همه مدل‌ها":"All types"],["text","Text / LLM"],["multimodal","Multimodal"],["image",fa?"تصویر":"Image"],["video","Video"],["audio",fa?"صدا":"Audio"],["coding",fa?"کدنویسی":"Coding"],["assistant",fa?"دستیار":"Assistant"]].map(([v,l])=>`<option value="${v}">${l}</option>`).join(""); mf.value=state.modelType; }
  const msv=el("minScoreValue"); if(msv) msv.textContent=state.minScore;
  const msf=el("minScoreFilter"); if(msf) msf.value=state.minScore;
}

function bindEvents(){
  const si=el("searchInput");
  if(si) si.addEventListener("input",e=>{state.query=e.target.value; renderTools();});
  const jt=el("jumpToTool");
  if(jt) jt.addEventListener("change",e=>{ if(e.target.value) jumpToTool(e.target.value); });
  ["categoryFilter","budgetFilter","sortFilter","modelTypeFilter"].forEach(id=>{
    const f=el(id); if(f) f.addEventListener("change",e=>{ state[id.replace("Filter","").replace("category","category").replace("budget","budget").replace("sort","sort").replace("modelType","modelType")]=e.target.value; renderTools(); });
  });
  if(el("categoryFilter")) el("categoryFilter").addEventListener("change",e=>{state.category=e.target.value;renderTools();});
  if(el("budgetFilter"))   el("budgetFilter").addEventListener("change",e=>{state.budget=e.target.value;renderTools();});
  if(el("sortFilter"))     el("sortFilter").addEventListener("change",e=>{state.sort=e.target.value;renderTools();});
  if(el("modelTypeFilter"))el("modelTypeFilter").addEventListener("change",e=>{state.modelType=e.target.value;renderTools();});
  const msf=el("minScoreFilter");
  if(msf) msf.addEventListener("input",e=>{state.minScore=+e.target.value; const v=el("minScoreValue"); if(v)v.textContent=e.target.value; renderTools();});
  const vg=el("viewGrid"),vl=el("viewList");
  if(vg) vg.addEventListener("click",()=>setView("grid"));
  if(vl) vl.addEventListener("click",()=>setView("list"));
  const rb=el("resetFilters");
  if(rb) rb.addEventListener("click",()=>{ state.query=""; state.category="all"; state.budget="all"; state.sort="score"; state.modelType="all"; state.minScore=0; const s=el("searchInput"); if(s)s.value=""; renderControls(); renderTools(); });
  const cc=el("clearCompareBtn");
  if(cc) cc.addEventListener("click",()=>{ state.compare=[]; localStorage.setItem("compareTools","[]"); renderTools(); renderCompare(); });
  document.addEventListener("click",e=>{
    const btn=e.target.closest("[data-compare]"); if(!btn) return;
    const name=btn.dataset.compare, idx=state.compare.indexOf(name);
    if(idx>-1) state.compare.splice(idx,1); else if(state.compare.length<5) state.compare.push(name);
    localStorage.setItem("compareTools",JSON.stringify(state.compare));
    renderTools(); renderCompare();
  });
  if(location.hash&&location.hash.startsWith("#tool-")){
    const slug=location.hash.slice(7);
    const tool=tools.find(t=>t.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")===slug);
    if(tool) setTimeout(()=>jumpToTool(tool.name),300);
  }
}

function setView(mode){ state.viewMode=mode; localStorage.setItem("toolViewMode",mode); const g=el("viewGrid"),l=el("viewList"); if(g)g.classList.toggle("active",mode==="grid"); if(l)l.classList.toggle("active",mode==="list"); renderTools(); }

function jumpToTool(name){ state.query=""; state.category="all"; state.budget="all"; state.modelType="all"; state.minScore=0; const s=el("searchInput"); if(s)s.value=""; renderControls(); renderTools();
  requestAnimationFrame(()=>{ const card=document.querySelector(`[data-tool-card="${CSS.escape(name)}"]`); if(!card)return; const grp=card.closest("details.tool-group"); if(grp)grp.open=true; card.scrollIntoView({behavior:"smooth",block:"center"}); card.classList.add("tool-card-flash"); setTimeout(()=>card.classList.remove("tool-card-flash"),1600); }); }

function passesBudget(t){ if(state.budget==="all")return true; if(state.budget==="free")return t.plan==="free"||t.plan==="freemium"; if(state.budget==="under20")return t.price<20; return t.price>=20; }

function filteredTools(){ const q=state.query.trim().toLowerCase();
  return tools.filter(t=>{ const s=[t.name,txt(t.category),txt(t.useCase),txt(t.pricing),t.tags.join(" "),t.jobs.join(" ")].join(" ").toLowerCase();
    return(!q||s.includes(q))&&(state.category==="all"||t.category.en===state.category)&&(state.modelType==="all"||t.modelType===state.modelType)&&t.score>=state.minScore&&passesBudget(t);
  }).sort((a,b)=>{ if(state.sort==="price")return a.price-b.price; if(state.sort==="name")return a.name.localeCompare(b.name); return b.score-a.score; }); }

function renderToolCard(tool){ const fa=state.lang==="fa", isCmp=state.compare.includes(tool.name);
  const slug=tool.name.toLowerCase().replace(/[^a-z0-9]+/g,"-");
  const logo=tool.logoUrl?`<img src="${tool.logoUrl}" alt="${tool.name}" loading="lazy"/>`:esc(tool.logo||tool.name.slice(0,2).toUpperCase());
  const price=tool.price===0?(fa?"رایگان":"Free"):"$"+tool.price;
  const pc=tool.price===0?"price-free":"price-paid";
  const cmpTxt=isCmp?(fa?"حذف":"Remove"):(fa?"مقایسه":"Compare");
  const hasAff = ["Cursor","ElevenLabs","Runway","Notion AI","Canva AI","HeyGen","Midjourney"].includes(tool.name);
  const affBadge = hasAff?`<span class="affiliate-tag">affiliate</span>`:"";
  if(state.viewMode==="list") return `<article class="tool-row" data-tool-card="${tool.name}" id="tool-${slug}"><span class="logo">${logo}</span><div class="tool-row-main"><h3>${esc(tool.name)}${affBadge}</h3><span class="tag">${esc(txt(tool.category))}</span></div><span class="price ${pc}">${price}</span><div class="tool-row-actions"><button class="button ghost" type="button" data-compare="${esc(tool.name)}" style="font-size:12px;min-height:34px;padding:0 12px;">${cmpTxt}</button><a class="mini-link" href="${tool.url}" target="_blank" rel="noopener">${fa?"لینک":"Link"}</a></div></article>`;
  return `<article class="tool-card" data-tool-card="${tool.name}" id="tool-${slug}">
    <div class="tool-top"><div style="display:flex;align-items:center;gap:10px;"><span class="logo">${logo}</span><div><h3 style="margin:0;font-size:15px;">${esc(tool.name)}${affBadge}</h3><span class="tag">${esc(txt(tool.category))}</span></div></div><span class="price ${pc}">${price}</span></div>
    <p style="font-size:13px;">${esc(txt(tool.useCase))}</p>
    <div class="tags">${tool.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
    <p style="font-size:12px;"><small>${fa?"قیمت":"Pricing"}: ${esc(txt(tool.pricing))}</small></p>
    <div class="tool-actions"><button class="button ghost" type="button" data-compare="${esc(tool.name)}" style="font-size:12px;min-height:34px;padding:0 12px;">${cmpTxt}</button><a class="mini-link" href="${tool.url}" target="_blank" rel="noopener" style="font-size:13px;">${fa?"لینک رسمی":"Official link"}</a></div>
  </article>`; }

function renderTools(){ const grid=el("toolGrid"); if(!grid) return;
  const items=filteredTools(), fa=state.lang==="fa";
  const cnt=el("toolCount"); if(cnt)cnt.textContent=fa?`${items.length} از ${tools.length} ابزار`:`${items.length} of ${tools.length} tools`;
  if(!items.length){ grid.className="tool-grid"; grid.innerHTML=`<p class="empty">${fa?"ابزاری پیدا نشد":"No tools found — try a broader search"}</p>`; return; }
  const groups={},order=[];
  items.forEach(t=>{ const cat=txt(t.category)||"Other"; if(!groups[cat]){groups[cat]=[];order.push(cat);} groups[cat].push(t); });
  const active=state.query||state.category!=="all"||state.budget!=="all"||state.modelType!=="all"||state.minScore>0;
  grid.className="tool-groups";
  grid.innerHTML=order.map((cat,i)=>`<details class="tool-group"${(active||i===0)?" open":""}><summary class="tool-group-head"><span class="tool-group-name">${esc(cat)}</span><span class="tool-group-count">${groups[cat].length}</span></summary><div class="${state.viewMode==="list"?"tool-grid is-list":"tool-grid"}">${groups[cat].map(renderToolCard).join("")}</div></details>`).join(""); }

function renderCompare(){ const ct=el("compareTable"); if(!ct) return;
  const sel=tools.filter(t=>state.compare.includes(t.name)), fa=state.lang==="fa";
  if(!sel.length){ ct.innerHTML=`<p class="empty">${fa?"از کارت‌ها ابزار انتخاب کن (حداکثر ۵)":"Click Compare on any tool card — up to 5 tools."}</p>`; return; }
  const fs=v=>v==null?"—":v>=1000?`${(v/1000).toFixed(1)}k`:String(v);
  ct.innerHTML=`<table><thead><tr><th>${fa?"ابزار":"Tool"}</th><th>${fa?"دسته":"Category"}</th><th>⭐ Stars</th><th>🔀 Forks</th><th>${fa?"قیمت":"Price"}</th><th>Score</th><th>${fa?"لینک":"Link"}</th></tr></thead><tbody>${sel.map(t=>`<tr><td><strong>${esc(t.name)}</strong></td><td>${esc(txt(t.category))}</td><td>${fs(t.stars)}</td><td>${fs(t.forks)}</td><td>${t.price===0?(fa?"رایگان":"Free"):"$"+t.price}</td><td>${t.score}</td><td><a href="${t.url}" target="_blank" rel="noopener" class="mini-link">${fa?"باز کردن":"Open ↗"}</a></td></tr>`).join("")}</tbody></table>`; }

async function fetchGitHub(){ const batch=tools.filter(t=>t.repo).slice(0,20);
  await Promise.allSettled(batch.map(async tool=>{
    try{ const r=await fetch(`https://api.github.com/repos/${tool.repo}`,{headers:{"Accept":"application/vnd.github.v3+json"}}); if(!r.ok)return; const d=await r.json(); tool.stars=d.stargazers_count; tool.forks=d.forks_count; }
    catch(e){} })); }
