# Azure Bicep Users Community

The community overview site for the **Azure Bicep Users Community**, hosted by
[John Lokerse](https://www.linkedin.com/in/johnlokerse/) and [Dan Rios](https://www.linkedin.com/in/riosengineer/),
both Microsoft MVPs.

It aggregates every `#BicepTip`, `#BicepDidYouKnow`, poll and community spotlight the group has
published on LinkedIn, grouped by year (2026, 2025, 2024) and ordered newest first. Each tile links
straight to the original LinkedIn post.

## Tech stack

- [Astro](https://astro.build) — static output, zero client JavaScript
- Plain CSS design system in `src/styles/global.css`
- Deploys to **GitHub Pages** via `.github/workflows/deploy-pages.yml` on every push to `main`
- Also ready for **Azure Static Web Apps** (`staticwebapp.config.json`)

## Getting started

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev      # http://localhost:4321/azure-bicep-users-community/
```

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the local dev server at `localhost:4321/azure-bicep-users-community/` |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Project structure

```text
/
├── public/                  # favicon and logo assets
├── src/
│   ├── components/
│   │   └── HexIcon.astro    # per-category hexagon glyphs
│   ├── data/
│   │   └── posts.ts         # the post catalogue, grouped by year
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── staticwebapp.config.json # Azure Static Web Apps routing
├── PRODUCT.md               # product context
└── DESIGN.md                # design system record
```

## Deployment

The site is built for GitHub Pages at `https://johnlokerse.github.io/azure-bicep-users-community/`.
In the repository settings, set **Pages → Source** to **GitHub Actions**.

For a custom domain or Azure Static Web Apps, build with a root base path:

```sh
SITE_URL=https://example.com SITE_BASE=/ npm run build
```

## Adding a post

Add an entry to `src/data/posts.ts`:

```ts
{
  year: 2026,
  date: '2026-09-15',
  author: 'John',
  category: 'BicepTip',
  title: 'Bicep MCP Server',
  source: 'Bicep Tips and Tricks/bicep-mcp-server/post.md',
  linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:...',
  engagement: { reactions: 0, comments: 0, reposts: 0 },
}
```

`linkedinUrl` and `engagement` are optional. Posts without a `linkedinUrl` render without the
LinkedIn indicator, and missing engagement figures show as `–`.

## License

Content belongs to the Azure Bicep Users Community. For the community, by
[@riosengineer](https://github.com/riosengineer) and [@johnlokerse](https://github.com/johnlokerse).
