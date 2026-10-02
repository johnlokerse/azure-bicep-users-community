# DESIGN.md — Azure Bicep Users Community

## World
The archive drawn as an **Azure architecture diagram**. Each year is a dashed resource-group boundary with a label tab. Each post is a white resource node. A single committed Bicep-blue header field sits above a dotted diagram canvas. Light theme, Read mode.

## Color (sampled from the Bicep logo)
| Token | Hex | Use |
|---|---|---|
| `--bicep` | #1e75b2 | Group boundaries, year tabs, Tip category |
| `--bicep-deep` | #1b578e | Hero field, links, focus ring |
| `--bicep-wash` | #e8f1f9 | Hover fills, node hover offset |
| `--ink` | #0f2a44 | Body text, footer field |
| `--ink-muted` | #4a6077 | Secondary text (AA on white and canvas) |
| `--canvas` / dots | #f4f7fb / #d3dde9 | Diagram canvas |
| `--line` | #d3deea | Node borders |

Category colors are AA on white: Tip #1e75b2, Did You Know #0e7a86, Poll #6b4fbb, Experimental #a5520a, Community #1b578e. Each category also has its own **hex glyph** (solid, ring+dot, bars, dashed, solid+ring) so meaning never depends on color alone.

## Type
- Sans: Segoe UI Variable → system-ui stack. Headings are 600–650 weight with tight tracking on h1.
- Mono: Cascadia Code → ui-monospace, **only for data** (dates, years, counts).

## Components
- **Top bar:** sticky, white, hex logo + name, year jump links.
- **Hero:** solid `--bicep-deep`, h1, lede, hosts, facts line (mono, hex separators), white primary button, clipped logo hex.
- **Legend:** white strip mapping glyph → category → count.
- **Group:** 1.5px dashed `--bicep` border, radius 10px, label tab with the year (h2) and counts.
- **Node:** `<article>`, 1px `--line`, radius 6px. Published: stretched link on the h3 and a hard offset shadow on hover. Scheduled/pending: dashed border. Footer row: author | "LinkedIn ↗" (when published), then reactions/comments/reposts counters right-aligned in a `<dl>` (mono numbers, "–" when unknown).

## Motion
One authored moment: the hero hex settles in (900ms ease-out). Nodes lift 2px on hover. `prefers-reduced-motion` removes both.

## Accessibility
Skip link, landmark nav, a single h1 → h2 (years) → h3 (posts) outline, visible 2-ring focus, "opens in a new tab" text, `forced-colors` borders, and 44px button targets.

## Bans
No eyebrows, stat-card heroes, gradient text, glow backgrounds, glass, colored side-stripes, or decorative mono.
