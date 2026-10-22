# Builds repo/developers/index.html - the API reference - from the live tool
# list (GET /api/v1/tools, saved as JSON), so every field, type, default and
# allowed value on the page is the one the API actually checks.
#
#   python repo/tools/build-developers.py tools.json
import html, io, json, sys, os

ROOT = os.path.join(os.path.dirname(__file__), "..")
tools = {t["name"]: t for t in json.load(io.open(sys.argv[1], encoding="utf-8"))["data"]["tools"]}
esc = html.escape

# The Video Studio part of the API, in the order a reader needs it
ENDPOINTS = [
  ("create", "POST", "/api/v1/videos", "create_video", "Make a video from a script",
   "Send a script (intro, 2 to 10 scenes, outro) and AI Radar builds a vertical video around it: footage, captions, motion and music. GET /api/v1/video-guide returns the exact script shape and the rules for writing it."),
  ("edit", "POST", "/api/v1/edits", "edit_my_video", "Edit a talking video",
   "Send a link to a video someone filmed (or 2 to 6 clips, joined in order). AI Radar cuts the pauses and the um/uh, adds a hook, word-by-word captions in one of 33 looks, music, sound effects and camera moves - or turns it into a fully graphic video in their voice."),
  ("photos", "POST", "/api/v1/photo-videos", "create_photo_video", "Make a video from photos and a text",
   "Send 1 to 12 photos and a text (or a link to an article). AI Radar writes a short voice-over from the text, reads it with an AI voice and cuts the photos to it, with captions and music."),
  ("swap", "POST", "/api/v1/swaps", "swap_text_or_footage", "Change the text or footage of a finished video",
   "Send a finished video and the texts or shots to change. The design, timing and music stay; only what you name changes."),
  ("thumb", "POST", "/api/v1/thumbnails/from-video", "create_thumbnail_from_video", "Thumbnail from a video",
   "Send a video: AI Radar picks the best frames, takes the video's own text off them, cuts the person out and sets your title on it."),
  ("cover", "POST", "/api/v1/thumbnails", "create_thumbnail", "Thumbnail from a title",
   "A cover image from a title, optionally on your own picture."),
]
RENDER = [
  ("POST", "/api/v1/videos/{id}/render", "Start the render. Answers at once; the video is made on AI Radar's servers."),
  ("GET", "/api/v1/videos/{id}/render", "Where it has got to: data.state is not_started, queued, rendering, done or failed. When done, data.file_url is the MP4 (thumbnails: data.images)."),
  ("GET", "/api/v1/videos/{id}/file", "The finished MP4, with your key. Byte ranges are supported."),
]

def type_of(p):
    t = p.get("type", "")
    if t == "array":
        it = (p.get("items") or {}).get("type")
        return "array of " + (it + "s" if it else "objects")
    return t or "any"

def field_rows(tool):
    sch = tool.get("input") or {}
    props = sch.get("properties") or {}
    req = set(sch.get("required") or [])
    rows = []
    for k, p in props.items():
        allowed = p.get("enum")
        desc = esc(p.get("description", ""))
        if allowed:
            desc += '<div class="enum">' + " ".join("<code>" + esc(str(v)) + "</code>" for v in allowed) + "</div>"
        rows.append("<tr><td><code>%s</code>%s</td><td>%s</td><td>%s</td></tr>" % (
            esc(k), ' <span class="req">required</span>' if k in req else "", esc(type_of(p)), desc))
    return "\n".join(rows)

EX = {
  "create_video": '''{
  "script": {
    "title": "Why rents keep rising",
    "language": "en",
    "intro": { "main": "Rents are up again", "narration": "Rents rose for the ninth month running." },
    "sections": [
      { "type": "text", "headline": "Supply is the problem", "narration": "Cities are building half the homes they need." }
    ],
    "outro": { "main": "Follow for more", "narration": "Follow for the next one." }
  },
  "aspect": "9:16"
}''',
  "edit_my_video": '''{
  "video_url": "https://example.com/talk.mp4",
  "style": "pro-lime",
  "sound_effects": true,
  "name": "Sara Ahmadi",
  "role": "Founder"
}''',
  "create_photo_video": '''{
  "photo_urls": ["https://example.com/1.jpg", "https://example.com/2.jpg", "https://example.com/3.jpg"],
  "text": "Our new studio opens on Friday with free classes all weekend.",
  "style": "pro-listing"
}''',
  "swap_text_or_footage": '''{
  "video_url": "https://example.com/finished.mp4",
  "texts": [ { "find": "SUMMER SALE", "replace": "WINTER SALE" } ]
}''',
  "create_thumbnail_from_video": '''{
  "video_url": "https://example.com/talk.mp4",
  "text": "How I doubled my sales",
  "sizes": ["1280x720"]
}''',
  "create_thumbnail": '''{
  "text": "How I doubled my sales",
  "template": "bold"
}''',
}

def curl(method, path, body=None):
    s = 'curl -X %s https://airadar.me%s \\\n  -H "Authorization: Bearer $AIRADAR_KEY"' % (method, path)
    if body:
        s += ' \\\n  -H "Content-Type: application/json" \\\n  -d \'' + body.replace("'", "'\\''") + "'"
    return s

def block(code, lang=""):
    return '<div class="code"><button type="button" class="copy" aria-label="Copy code">Copy</button><pre><code>%s</code></pre></div>' % esc(code)

sections = []
nav = []
for sid, method, path, tname, title, intro in ENDPOINTS:
    t = tools.get(tname)
    if not t:
        raise SystemExit("tool missing from the list: " + tname)
    nav.append('<a href="#%s"><span class="m m-%s">%s</span>%s</a>' % (sid, method.lower(), method, esc(title)))
    sections.append('''<section id="%s" class="ep">
  <h2>%s</h2>
  <p class="path"><span class="m m-%s">%s</span><code>%s</code></p>
  <p>%s</p>
  <h3>Body</h3>
  <div class="tbl"><table><thead><tr><th>Field</th><th>Type</th><th>What it does</th></tr></thead><tbody>
%s
  </tbody></table></div>
  <h3>Example</h3>
  %s
</section>''' % (sid, esc(title), method.lower(), method, esc(path), esc(intro), field_rows(t), block(curl(method, path, EX.get(tname)))))

render_rows = "\n".join('<tr><td><span class="m m-%s">%s</span></td><td><code>%s</code></td><td>%s</td></tr>' % (m.lower(), m, esc(p), esc(d)) for m, p, d in RENDER)
looks = (tools["edit_my_video"]["input"]["properties"].get("style") or {}).get("enum") or []

page = '''<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="theme-color" content="#08090c" />
<title>AI Radar API - Video Studio for your own system</title>
<meta name="description" content="The AI Radar REST API: make, edit and render short videos from your own system. Script to video, talking-video edits with captions and music, photo videos, thumbnails, and MP4 output." />
<link rel="canonical" href="https://airadar.me/developers/" />
<meta property="og:site_name" content="AI Radar" />
<meta property="og:type" content="website" />
<meta property="og:title" content="AI Radar API - Video Studio for your own system" />
<meta property="og:description" content="Make, edit and render short videos from your own system with one key." />
<meta property="og:url" content="https://airadar.me/developers/" />
<meta property="og:image" content="https://airadar.me/og.png" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
:root { --bg:#08090c; --surface:#0e1014; --surface-2:#14171d; --line:rgba(255,255,255,.08); --line-2:rgba(255,255,255,.14); --text:#f4f5f7; --muted:#8a919c; --accent:#2563ff; --cyan:#12d6f5; --ok:#5fe0b0; --err:#f87171; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; scroll-padding-top:24px; }
body { margin:0; background:var(--bg); color:var(--text); font:400 15.5px/1.65 Manrope, system-ui, sans-serif; }
a { color:var(--cyan); }
.skip { position:absolute; left:-9999px; } .skip:focus { left:16px; top:16px; background:var(--accent); color:#fff; padding:8px 12px; z-index:9; }
.top { display:flex; align-items:center; gap:14px; padding:14px clamp(16px,4vw,40px); border-bottom:1px solid var(--line); position:sticky; top:0; background:rgba(8,9,12,.92); backdrop-filter:blur(10px); z-index:5; }
.top img { height:26px; display:block; }
.top .tag { font:600 11px/1 "JetBrains Mono", monospace; letter-spacing:.08em; color:var(--muted); border:1px solid var(--line-2); border-radius:4px; padding:5px 7px; }
.top .sp { flex:1; }
.top a.btn { font:600 13px/1 Manrope, sans-serif; color:#fff; background:var(--accent); text-decoration:none; padding:10px 14px; border-radius:6px; }
.wrap { display:grid; grid-template-columns:250px minmax(0,1fr); gap:clamp(20px,4vw,56px); max-width:1240px; margin:0 auto; padding:0 clamp(16px,4vw,40px); }
nav.side { position:sticky; top:70px; align-self:start; max-height:calc(100vh - 80px); overflow:auto; padding:28px 0; }
nav.side h4 { margin:18px 0 8px; font:600 11px/1 "JetBrains Mono", monospace; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); }
nav.side a { display:flex; align-items:center; gap:8px; color:var(--text); text-decoration:none; padding:6px 8px; border-radius:6px; font-size:14px; }
nav.side a:hover { background:var(--surface-2); }
main { padding:36px 0 120px; min-width:0; }
h1 { font:700 clamp(32px,5vw,52px)/1.05 "Space Grotesk", sans-serif; letter-spacing:-.02em; margin:0 0 14px; }
h2 { font:600 clamp(22px,2.6vw,28px)/1.2 "Space Grotesk", sans-serif; margin:0 0 10px; }
h3 { font:600 12px/1 "JetBrains Mono", monospace; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); margin:26px 0 10px; }
.lede { font-size:18px; color:#c9ccd3; max-width:62ch; margin:0 0 26px; }
section { padding:34px 0; border-top:1px solid var(--line); }
code { font:500 .88em/1.5 "JetBrains Mono", monospace; background:var(--surface-2); border:1px solid var(--line); border-radius:4px; padding:1px 5px; word-break:break-word; }
.code { position:relative; margin:12px 0; }
.code pre { margin:0; background:var(--surface); border:1px solid var(--line); border-radius:8px; padding:16px 18px; overflow:auto; }
.code pre code { background:none; border:0; padding:0; font-size:13px; line-height:1.6; color:#dfe3ea; white-space:pre; }
.copy { position:absolute; top:8px; right:8px; font:600 11px/1 "JetBrains Mono", monospace; color:var(--muted); background:var(--surface-2); border:1px solid var(--line-2); border-radius:5px; padding:6px 8px; cursor:pointer; }
.copy:hover, .copy:focus-visible { color:var(--text); outline:none; border-color:var(--cyan); }
.path { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin:0 0 12px; }
.path code { font-size:15px; }
.m { display:inline-block; min-width:44px; text-align:center; font:700 10.5px/1 "JetBrains Mono", monospace; letter-spacing:.06em; padding:5px 6px; border-radius:4px; }
.m-post { background:rgba(37,99,255,.18); color:#8fb0ff; } .m-get { background:rgba(95,224,176,.14); color:var(--ok); }
.tbl { overflow:auto; border:1px solid var(--line); border-radius:8px; }
table { width:100%; border-collapse:collapse; font-size:14px; }
th { text-align:left; font:600 11px/1 "JetBrains Mono", monospace; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); padding:12px 14px; background:var(--surface); border-bottom:1px solid var(--line); }
td { padding:12px 14px; border-bottom:1px solid var(--line); vertical-align:top; }
tr:last-child td { border-bottom:0; }
td:first-child { white-space:nowrap; }
.req { font:600 10px/1 "JetBrains Mono", monospace; color:var(--err); margin-left:4px; }
.enum { margin-top:6px; display:flex; flex-wrap:wrap; gap:4px; } .enum code { font-size:11.5px; }
.steps { counter-reset:s; list-style:none; padding:0; margin:0; }
.steps li { counter-increment:s; position:relative; padding:0 0 18px 44px; }
.steps li::before { content:counter(s); position:absolute; left:0; top:0; width:28px; height:28px; display:grid; place-items:center; border-radius:6px; background:var(--accent); color:#fff; font:700 13px/1 "JetBrains Mono", monospace; }
.note { border-left:3px solid var(--accent); background:var(--surface); padding:12px 16px; border-radius:0 8px 8px 0; color:#c9ccd3; }
@media (max-width:900px) { .wrap { grid-template-columns:1fr; } nav.side { display:none; } }
@media (prefers-reduced-motion:reduce) { html { scroll-behavior:auto; } }
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top">
  <a href="/" aria-label="AI Radar home"><img src="/logo-lockup.svg" alt="AI Radar" /></a>
  <span class="tag">API v1</span>
  <span class="sp"></span>
  <a class="btn" href="/dashboard#connect-ai">Get an API key</a>
</header>
<div class="wrap">
<nav class="side" aria-label="API reference">
  <h4>Start</h4>
  <a href="#start">Quick start</a>
  <a href="#auth">Keys and answers</a>
  <a href="#render">Getting the MP4</a>
  <h4>Video Studio</h4>
  ''' + "\n  ".join(nav) + '''
  <h4>Reference</h4>
  <a href="#help">Guide and templates</a>
  <a href="#errors">Errors and limits</a>
  <a href="#agents">For AI agents</a>
</nav>
<main id="main">
<h1>AI Radar API</h1>
<p class="lede">Make, edit and render short videos from your own system: a script into a video, a talking video into an edited reel with captions and music, photos into a narrated video, and thumbnails - delivered as MP4 and image files.</p>
<p class="note">Base URL <code>https://airadar.me/api/v1</code> &middot; JSON in, JSON out &middot; one key per account.</p>

<section id="start">
<h2>Quick start</h2>
<ol class="steps">
<li>Sign in to AI Radar, open <a href="/dashboard#connect-ai">Dashboard &rarr; Connect your AI</a> and create a key. It starts with <code>arx_</code> and is shown once.</li>
<li>Check it:''' + block(curl("GET", "/api/v1/me")) + '''</li>
<li>Edit a video, then render it and download the MP4:''' + block(curl("POST", "/api/v1/edits", '{ "video_url": "https://example.com/talk.mp4", "style": "pro-viral" }') + "\n\n# data.id in the answer is the video id\n" + curl("POST", "/api/v1/videos/{id}/render") + "\n\n# poll until data.state is done (usually one to four minutes)\n" + curl("GET", "/api/v1/videos/{id}/render") + "\n\n" + 'curl -L -o video.mp4 https://airadar.me/api/v1/videos/{id}/file \\\n  -H "Authorization: Bearer $AIRADAR_KEY"') + '''</li>
</ol>
</section>

<section id="auth">
<h2>Keys and answers</h2>
<p>Send the key on every request as <code>Authorization: Bearer arx_...</code>. Keys are made and revoked in the Dashboard; an account can hold five.</p>
<p>Every answer is JSON. A success is <code>{ "ok": true, "message": "...", "data": { ... } }</code>; anything else is <code>{ "ok": false, "error": "..." }</code> with the HTTP status below. Requests are checked before anything runs: an unknown field, a wrong type or a value outside the allowed list is a <code>400</code> that names the field.</p>
''' + block('''{
  "ok": true,
  "message": "The edit is ready to open: https://airadar.me/studio/?deck=deck_0902...",
  "data": { "id": "deck_0902...", "video_id": "deck_0902...", "url": "https://airadar.me/studio/?deck=deck_0902...", "started": true, "clips": 1 }
}''') + '''
</section>

<section id="render">
<h2>Getting the MP4</h2>
<p>Every create call answers at once with an id and a studio link (the same video, editable in the browser). To get the file without a browser, render it on AI Radar's servers:</p>
<div class="tbl"><table><thead><tr><th></th><th>Endpoint</th><th>What it does</th></tr></thead><tbody>
''' + render_rows + '''
</tbody></table></div>
<p>A render takes about as long as the video plus the build: roughly one minute for a 20-second script video, up to four for an edit of a 40-second talk. Poll every 10 to 20 seconds. Thumbnails come back as a list of image links in <code>data.images</code>.</p>
</section>

''' + "\n\n".join(sections) + '''

<section id="help">
<h2>Guide and templates</h2>
<p><code>GET /api/v1/video-guide</code> returns the script shape for <code>/videos</code> and how to write each scene. <code>GET /api/v1/templates</code> lists the template ids and fonts. The 33 caption looks for <code>/edits</code> and <code>/photo-videos</code> are the values of <code>style</code>:</p>
<p>''' + " ".join("<code>%s</code>" % esc(x) for x in looks) + '''</p>
</section>

<section id="errors">
<h2>Errors and limits</h2>
<div class="tbl"><table><thead><tr><th>Status</th><th>Meaning</th></tr></thead><tbody>
<tr><td><code>400</code></td><td>The request is wrong: a missing or unknown field, a wrong type, a value not in the list, or a link that could not be fetched. <code>error</code> says which.</td></tr>
<tr><td><code>401</code></td><td>No key, or a key that was revoked.</td></tr>
<tr><td><code>404</code></td><td>No such endpoint, or no video with that id on this account.</td></tr>
<tr><td><code>409</code></td><td>The video is not rendered yet.</td></tr>
<tr><td><code>503</code></td><td>Server rendering is not available right now; try again later.</td></tr>
<tr><td><code>500</code></td><td>Something failed on AI Radar's side.</td></tr>
</tbody></table></div>
<h3>Limits</h3>
<ul>
<li>40 videos per account per day (all create endpoints together).</li>
<li>Videos up to 24 MB each, up to 12 minutes; images up to 12 MB (JPEG, PNG, WebP, GIF). Links must be public <code>https</code> addresses; Google Drive and Dropbox share links work.</li>
<li>Uploaded files are kept for two days; rendered thumbnails for a week; rendered MP4s stay in the account's library.</li>
</ul>
</section>

<section id="agents">
<h2>For AI agents</h2>
<p>The same tools are available to Claude, ChatGPT and other agents over MCP at <code>https://airadar.me/mcp</code>, with the same keys.</p>
</section>
</main>
</div>
<script>
document.querySelectorAll(".copy").forEach(function (b) {
  b.addEventListener("click", function () {
    var t = b.parentNode.querySelector("code").innerText;
    var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1400); };
    try { navigator.clipboard.writeText(t).then(done, function () {}); } catch (e) {}
  });
});
</script>
</body>
</html>
'''
out = os.path.join(ROOT, "developers", "index.html")
os.makedirs(os.path.dirname(out), exist_ok=True)
io.open(out, "w", encoding="utf-8", newline="\n").write(page)
print("wrote", out, len(page))
