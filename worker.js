const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
};

const json = (value, status = 200) => new Response(JSON.stringify(value), {
  status, headers: { ...CORS, "Content-Type": "application/json" }
});

async function pollinations(path, env, body) {
  return fetch("https://gen.pollinations.ai" + path, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + env.POLLINATIONS_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    const url = new URL(request.url);
    if (url.pathname === "/health") return json({ ok: true, service: "airadar-api", voiceover: false });
    if (request.method !== "POST") return json({ error: "Not found" }, 404);

    let body = {};
    try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }

    if (url.pathname === "/chat") {
      const upstream = await pollinations("/v1/chat/completions", env, {
        model: body.model || "openai-fast",
        messages: body.messages || [{ role: "user", content: String(body.prompt || "") }],
        temperature: body.temperature == null ? 0.25 : body.temperature,
        seed: body.seed
      });
      return new Response(upstream.body, { status: upstream.status, headers: { ...CORS, "Content-Type": upstream.headers.get("content-type") || "application/json" } });
    }

    if (url.pathname === "/speech") return json({ error: "Voiceover has been removed" }, 410);

    if (url.pathname === "/music") {
      const models = [body.model, "acestep", "stable-audio-3-medium", "stable-audio-3-large", "elevenmusic"]
        .filter((m, i, a) => m && a.indexOf(m) === i);
      const failures = [];
      for (const model of models) {
        const upstream = await pollinations("/v1/audio/speech", env, {
          model,
          input: String(body.input || "cinematic instrumental news underscore"),
          style: body.style || "cinematic instrumental, no vocals",
          duration: Math.max(8, Math.min(90, Number(body.duration) || 35)),
          instrumental: true,
          response_format: "mp3"
        });
        const type = upstream.headers.get("content-type") || "";
        if (upstream.ok && !/json|text/i.test(type)) {
          return new Response(upstream.body, { status: 200, headers: { ...CORS, "Content-Type": type || "audio/mpeg", "X-Music-Model": model } });
        }
        failures.push({ model, status: upstream.status });
      }
      return json({ error: "No Pollinations music model succeeded", failures }, 502);
    }
    return json({ error: "Not found" }, 404);
  }
};
