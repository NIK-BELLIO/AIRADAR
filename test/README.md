# Regression checks

`regression.js` is a set of assertions to paste into the browser console on any
page of the site. It returns a JSON report: `{ page, passed, failed, failures }`.

Every check in it corresponds to something that actually broke at least once,
so this is a record of real failures rather than a generic checklist:

| Check | The failure it catches |
|---|---|
| title / single `h1` / `h1` belongs to this page | Video Studio rendered the home page's hero and headline |
| no duplicate ids | two elements shared `id="tool-gamma"` after Gamma was listed twice |
| no element carries two `id` attributes | a skip link wrote a second `id` onto `<main id="top">`, so `main#top` stopped matching and the rule hiding the home markup died |
| `:focus-visible` rule present | there was no focus ring anywhere, plus four bare `outline: none` |
| `prefers-reduced-motion` rule present | motion was honoured in three of seven files |
| skip link + its target resolves | no page had one, and the first attempt pointed at an id that did not exist |
| `theme-color` meta, `color-scheme: dark` | browser chrome did not match the page |
| no `transition: all` | 23 declarations made the browser watch every property |
| no broken images | the frame picker painted `[object Blob]` into `img.src` |
| no horizontal scroll at the current width | — |

## Running it

Serve the site and open a page:

```bash
python -m http.server 4173 --directory .
```

Then paste the contents of `regression.js` into the console on each of `/`,
`/studio/`, `/creator/`, `/reverse-engineer/` and `/prompt-lab/`.

The horizontal-scroll assertion is skipped when `clientWidth` is 0, which
happens if the page has not been laid out yet — an unlaid-out page would
otherwise report a false failure.
