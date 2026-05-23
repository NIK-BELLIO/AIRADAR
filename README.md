# AI Radar

AI Radar is a free static MVP for discovering real AI tools, comparing pricing links, planning AI career directions, and creating a simple animated video template from static image uploads.

## What is included

- English and Persian language switcher
- Curated real AI tool database with official links
- Public-source search shortcuts for Product Hunt, Futurepedia, There's An AI For That, GitHub, and official pricing searches
- Tool filters by category, budget, and match score
- Comparison table
- AI career helper
- Free browser-only video template studio with image upload, slide duration, simple motion, preview, and JSON export

## Static limitation

This version runs on GitHub Pages without a paid backend. It cannot crawl the whole internet directly from the browser because public websites block cross-origin scraping and GitHub Pages does not run server jobs.

The next free/low-cost upgrade path is:

- Use GitHub Actions on a schedule to collect public tool metadata.
- Save results into a generated `tools.json` file.
- Keep the frontend static and fetch that JSON file.
- Add official APIs where providers allow it.

## Run locally

Open `index.html` directly, or run a simple local server:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173`.
