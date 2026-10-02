# Product

<!-- impeccable:product-schema 1 -->

> Inferred during an unattended `/impeccable` run (user unavailable for the init interview). Every fact below is derived from the user's brief and the repository; confirm or correct when reviewing.

## Platform

web

## Users
Azure engineers, platform teams, and Bicep practitioners who follow the Azure Bicep Users Community on LinkedIn and want to find a past Tip, Did You Know, poll, or spotlight without scrolling a feed. Secondary: the two community leads (John Lokerse and Dan Rios, Microsoft MVPs) using the page as a public showcase of the series. *(inferred)*

## Product Purpose
A single overview of every post in the community's weekly series, grouped by year (2026, 2025, 2024, newest first), with each published post linking to its LinkedIn original. Success: a visitor can scan the archive, recognise a topic by name, and reach the post in one click. *(inferred)*

## Positioning
The only curated index of the Azure Bicep Users Community series, maintained by its two hosts; it turns a scattered LinkedIn feed into a browsable, dated catalogue. *(inferred)*

## Operating Context
Posts are authored as markdown in a private `bicep-content` repository, published weekly on LinkedIn, then listed here. 2026 posts are scheduled ahead of publication and have no LinkedIn URL until they go live.

## Capabilities and Constraints
- Static site built with Astro; must deploy to Azure Static Web Apps (deployment configuration deferred).
- Content lives in `src/data/posts.ts`: title, category, date, author (John | Dan), optional LinkedIn URL.
- Categories: Bicep Tip, Bicep Did You Know, Bicep Poll, Experimental Spotlight, Community Spotlight.
- No search, filtering, or post bodies yet. *(open decision)*

## Brand Commitments
- Name: "Azure Bicep Users Community". Hosts: John Lokerse and Dan Rios.
- Visual: the Azure Bicep colour scheme (blue hexagon logo with white glyph), explicitly requested by the user.

## Evidence on Hand
- 48 posts in `src/data/posts.ts` (2024: 18, 2025: 16, 2026: 14 scheduled).
- Bicep logo supplied by the user as a reference image (`public/bicep-logo.png`).
- No member counts, testimonials, or engagement metrics are available; do not fabricate them.

## Product Principles
1. The archive is the product: every pixel should help someone find a post.
2. Honest status: show clearly what is published and what is still scheduled.
3. Credit the hosts: each post shows who wrote it.
4. Stay light and static; nothing should complicate hosting on Azure Static Web Apps.

## Accessibility & Inclusion
Target WCAG 2.2 AA: keyboard-reachable tiles, visible focus, sufficient contrast, reduced-motion support. *(inferred default)*
