window.PAGE_ID = "charts";
let chartInstance = null, activeTab = "stars";
const REFRESH_MS = 5 * 60 * 1000;

document.addEventListener("DOMContentLoaded", () => {
  buildSidebar("charts");
  bindEvents();
  fetchAll();
  setInterval(fetchAll, REFRESH_MS);
});

function onLangChange(lang) {
  const fa = lang === "fa";
  const el = id => document.getElementById(id);
  if(el("chartsTitle")) el("chartsTitle").textContent = fa?"ترند زنده ابزارهای AI":"Live AI tools trend";
  if(el("chartsDesc"))  el("chartsDesc").textContent  = fa?"محبوبیت واقعی گیت‌هاب هر ۵ دقیقه به‌روز می‌شود.":"Real GitHub popularity, refreshed every 5 minutes.";
  if(el("liveLabel"))   el("liveLabel").textContent   = fa?"↻ زنده":"↻ Live";
  if(el("tabStars"))    el("tabStars").textContent    = fa?"⭐ ستاره‌های گیت‌هاب":"⭐ GitHub Stars";
  if(el("tabForks"))    el("tabForks").textContent    = fa?"🔀 فورک‌ها":"🔀 Forks";
  if(el("tabActivity")) el("tabActivity").textContent = fa?"⚡ فعالیت توسعه":"⚡ Dev Activity";
  renderChart();
}

function bindEvents() {
  document.querySelectorAll(".chart-tab").forEach(btn =>
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      document.querySelectorAll(".chart-tab").forEach(b => b.classList.toggle("active", b === btn));
      renderChart();
    }));
  const rb = document.getElementById("refreshChartBtn");
  if (rb) rb.addEventListener("click", fetchAll);
}

async function fetchAll() {
  const live = document.getElementById("liveLabel");
  const err  = document.getElementById("chartError");
  if (live) live.textContent = "⟳ …";
  let rateLimited = false;

  const batch = tools.filter(t => t.repo).slice(0, 30);
  await Promise.allSettled(batch.map(async tool => {
    try {
      const r = await fetch(`https://api.github.com/repos/${tool.repo}`, { headers: { "Accept": "application/vnd.github.v3+json" } });
      if (!r.ok) { if (r.status === 403) rateLimited = true; return; }
      const d = await r.json();
      tool.stars = d.stargazers_count;
      tool.forks = d.forks_count;
      tool.pushedAt = d.pushed_at;
      if (d.pushed_at) tool.activityDays = Math.floor((Date.now() - new Date(d.pushed_at)) / 86400000);
    } catch (e) {}
  }));

  if (err) err.style.display = rateLimited ? "" : "none";
  if (live) live.textContent = "↻ Live";
  renderChart();
}

function renderChart() {
  const canvas = document.getElementById("performanceChart");
  if (!canvas || typeof Chart === "undefined") return;

  const compare = JSON.parse(localStorage.getItem("compareTools") || "[]");
  const fa = localStorage.getItem("lang") === "fa";

  let data = tools.filter(t => {
    if (activeTab === "stars")    return t.stars != null;
    if (activeTab === "forks")    return t.forks != null;
    return t.activityDays != null;
  });

  if (!data.length) { canvas.style.minHeight = "80px"; return; }

  if (activeTab === "activity") data.sort((a, b) => a.activityDays - b.activityDays);
  else if (activeTab === "forks") data.sort((a, b) => b.forks - a.forks);
  else data.sort((a, b) => b.stars - a.stars);

  const top = data.slice(0, 25);
  const values = top.map(t => activeTab === "stars" ? t.stars : activeTab === "forks" ? t.forks : t.activityDays);
  const colors = top.map(t => compare.includes(t.name) ? "#fff0b8" : "rgba(216,183,106,0.65)");
  const borders = top.map(t => compare.includes(t.name) ? "#d8b76a" : "rgba(216,183,106,0.35)");

  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

  const labelMap = {
    stars:    fa ? "ستاره‌های گیت‌هاب" : "GitHub Stars",
    forks:    fa ? "فورک‌ها"            : "Forks",
    activity: fa ? "روز از آخرین فعالیت" : "Days since last push"
  };

  canvas.style.minHeight = Math.max(400, top.length * 38) + "px";

  chartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels: top.map(t => t.name),
      datasets: [{
        label: labelMap[activeTab],
        data: values,
        backgroundColor: colors,
        borderColor: borders,
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.raw;
              if (activeTab === "activity") return ` ${v} days ago`;
              return ` ${v >= 1000 ? (v / 1000).toFixed(1) + "k" : v}`;
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: "#a8b4c8", font: { size: 11 } }, grid: { color: "rgba(255,255,255,0.06)" } },
        y: { ticks: { color: "#f8fbff", font: { size: 12 }, maxRotation: 0 }, grid: { display: false } }
      }
    }
  });
}
