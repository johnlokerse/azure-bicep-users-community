---
name: refresh-linkedin-engagement
description: "Refresh reactions, comments, and reposts for LinkedIn URLs in the Azure Bicep Users Community posts.ts file using Computer Use in Microsoft Edge, then open a pull request when requested. Use for refreshing BicepTip, BicepDidYouKnow, or community post engagement."
---

# Refresh LinkedIn Engagement

Update the community site's stored engagement counts from the actual LinkedIn post pages. Default repository: the repository root containing this skill (`.agents/skills/refresh-linkedin-engagement`); default data file: `src/data/posts.ts`, resolved from that root. Respect a different repository, subset, browser, or delivery scope specified by the user.

## Inspect the data

Read repository instructions, Git status, and the current data file before editing. Each post may have `linkedinUrl` and `engagement: { reactions: number; comments: number; reposts: number }`.

For a whole-file refresh, include every post with a LinkedIn URL, including categories other than BicepTip and BicepDidYouKnow. If the user limits categories or dates, honor that subset. Count linked posts dynamically; never reuse counts or a post inventory from a previous run. Leave posts without URLs unchanged and report how many were skipped. Finding missing URLs is a separate task unless requested.

## Collect counts in Microsoft Edge

Use the Computer Use `cua_repl` tool and Microsoft Edge by default. Visit each exact `linkedinUrl`, including `urn:li:groupPost` URLs; do not convert group-post URLs to activity URLs. Follow the tool's current initialization and browser documentation, and reuse one research tab for navigation.

After navigating, read fresh accessibility or DOM state and verify the intended post has loaded. Collect the post's aggregate reactions, comments, and reposts from its engagement summary above the Like/Comment/Repost actions. Do not count individual comment reactions, poll votes, impressions, or sidebar analytics.

LinkedIn can omit a comment or repost count when it is zero. Record zero only after the complete post summary and action row have loaded and the relevant counter is absent. A loading page, login screen, unavailable post, or failed observation is unknown, never zero. Preserve existing data for unresolved posts and report the URLs and reason.

Keep an evidence ledger keyed by the complete URL, with observed counts and collection date. Persist progress in a temporary file after small batches so a browser timeout does not lose the collection. Keep browser batches short enough to avoid tool timeouts; checkpoint each batch before starting the next. Do not use HTTP scraping, hidden page state, or shell-driven browser automation as a substitute for the requested Computer Use visits.

If sign-in or a challenge requires the user's participation, retain the browser tab for handoff and ask for the specific needed action. Continue independent work where possible; never invent engagement to fill gaps.

## Update and verify

Add or replace only the engagement object of each successfully verified post, preserving titles, dates, authors, categories, sources, URLs, order, and unrelated user edits. Use nonnegative integer counts. Keep the existing file style.

Record the actual collection date in a concise source comment or the PR description. If collection is partial, do not label all existing engagement as freshly checked. Review every changed record against the evidence ledger.

Run the repository's existing build command (currently `npm run build`) and `git diff --check`. Verify that every successfully observed URL has its matching counts, unresolved or URL-less posts remain unchanged, and no other post fields changed. This data-only task does not require a dev server or new tests. If a server is needed, follow AGENTS.md, including background mode.

## Deliver the pull request

When the user requests a PR, commit the verified update on an appropriate branch, using the repository's branch convention (currently `johnlokerse/`), push it, and open a PR against the verified default branch. Do not merge it. Include the number of updated posts, collection date, skipped or unresolved posts, zero-count interpretation, and validation results in the description.

Use available GitHub tools or CLI. If a GitHub connector cannot create the PR but the branch was pushed, use the signed-in GitHub UI in Edge. Before retrying creation after an ambiguous result, check whether the PR already exists. Avoid changing authentication configuration merely to work around an unavailable method.

Verify the PR exists and call `mcp__codex_app__attach_artifact` with its URL. If created through the browser, retain the PR tab as a deliverable and save a screenshot for the final response as required by Computer Use. Report the PR link, updated and skipped counts, and checks. If a blocker remains, preserve the verified local changes and report the exact unfinished step.
