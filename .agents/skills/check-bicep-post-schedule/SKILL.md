---
name: check-bicep-post-schedule
description: "Check the Bicep content Schedule.md against the Azure Bicep Users Community posts.ts catalogue for newly published posts indicated by [Link](LinkedIn URL) in the link column. Automatically add new published posts and fill missing LinkedIn URLs in posts.ts when invoked, unless the user requests a read-only check."
---

# Check Bicep Post Schedule

Compare the current site catalogue with the current schedule and update `posts.ts` with newly published content by default when this skill is invoked. Add missing published posts and fill publication URLs on matching existing posts. If the user explicitly requests a read-only check, preview, or report only, do not edit files. Creating or updating the skill itself does not run synchronization. PR creation, merging, deployment, and recurring checks require their own user request.

## Sources

Resolve source paths from the repository root containing this skill (`.agents/skills/check-bicep-post-schedule`), regardless of the current working directory or checkout location. Default sources:

- Schedule: `../bicep-content/Schedule.md`, when the content repository is checked out alongside this repository.
- Site catalogue: `src/data/posts.ts` in this repository.

Honor user-supplied paths or repositories instead of these defaults. Resolve user-supplied relative paths from the user's working directory and absolute paths as given. If the sibling content checkout is unavailable, use a content repository already identified in the session or ask for its location; do not assume a username, home directory, or repositories folder. Read applicable repository instructions and the actual files at each invocation; do not rely on previous counts, cached content, or product documentation as the catalogue. The schedule is in a separate content repository, and its actual filename is `Schedule.md`, although the user may call it `schedule.md`. If a source is missing, search the identified repository case-insensitively before asking for its location. Do not substitute an unrelated schedule.

Use the local working-tree contents unless the user requests the latest remote version. When remote freshness is requested, inspect local changes and retrieve the upstream schedule without overwriting them. State the source path/ref and any freshness limitation in the result. Read all schedule tables, including tables within year `<details>` sections.

## Publication signal and parsing

A row is eligible when its link column contains `[Link](https://www.linkedin.com/...)` with an actual LinkedIn post URL. This is the publication signal even if the row already existed as a planned post. `[Post](relative/path/post.md)`, blank cells, `Not available`, and literal `LINKEDIN URL HERE` placeholders are not publication signals. A past date or a scheduled checkmark alone does not indicate publication.

The existing 2024 archive uses `[LinkedIn](URL)` under `Link to post`; treat that legacy equivalent as published too. Identify columns from table headers rather than fixed column positions: older tables have an additional `Scheduled?` column. Extract the Markdown destination, tolerate a stray closing bracket after a complete link, and do not include that bracket in the URL. Missing trailing table pipes should not discard a valid row.

Read Date, Post by, Type, Subject, and the link destination. Convert dates to ISO `YYYY-MM-DD`, using the section year when older dates omit it; handle ordinal day suffixes. Retain the original row text or line number as evidence. Unknown dates or ambiguous rows must be reported, not guessed.

## Compare with current posts

Compare every eligible row against the actual `posts` array. Use this order:

1. Match the LinkedIn post identity first. Ignore sharing/tracking parameters, URL fragments, and a trailing slash when comparing equivalent URLs. Preserve activity/group-post URNs; do not assume different URNs identify the same post.
2. If no URL matches, find an existing entry by date, author, category, and subject. Normalize harmless whitespace, hashtag prefixes, and case for matching; do not match on title alone. Titles such as `Latest module` recur. Use source content to resolve discrepancies when necessary.
3. Classify the row as already represented, an existing post needing its LinkedIn URL, a new post absent from the catalogue, or an unresolved conflict. If an otherwise matching entry has a different LinkedIn post identity, report the conflict rather than replacing the URL automatically.

Map known types to the catalogue's existing category values. The legacy `#CommunityAppreciation` corresponds to `CommunitySpotlight` in this catalogue. Report unfamiliar categories or contradictory author/date information for resolution. Do not silently rewrite existing metadata during matching.

Deduplicate repeated schedule rows and duplicate URLs in the report. Check all eligible dates rather than only dates newer than the latest catalogue entry; an older planned row can acquire a publication link later. Rows absent from the schedule do not authorize removing existing posts.

## Report

After synchronization, give a concise summary with counts and a table of applied changes: date, subject, author/category, LinkedIn URL, and whether a post was added or an existing URL was filled. For an explicitly read-only check, report the proposed changes instead. Report conflicts separately with enough source evidence to resolve them. If there are no changes, say so explicitly. Distinguish newly published existing posts from entirely new catalogue entries.

For example, a catalogue entry dated 2026-09-29 without `linkedinUrl` and a matching schedule row with `[Link](actual LinkedIn URL)` is an existing entry needing its publication URL, not a second post. Repeating the check after synchronizing should produce no actionable difference for that row.

## Synchronize by default

Unless the user explicitly requests a read-only check, fill verified missing URLs and add verified new published entries while preserving existing engagement and unrelated fields. Complete these unambiguous local updates without asking for another confirmation. A published row's link column may no longer contain its original Markdown source path. For new entries, locate the corresponding content file in the content repository and retain its repository-relative path; do not invent a `source`. Report unresolved entries while completing unambiguous authorized changes.

Preserve the file's year grouping and ordering. If a new year falls outside its TypeScript year union or `yearGroups`, update the necessary year definitions when synchronizing. Do not import unlinked planned rows unless requested. Never fabricate engagement counts; leave engagement unset unless observed. Use the sibling repo skill `../refresh-linkedin-engagement/SKILL.md` only if engagement collection is requested, following its Computer Use workflow.

Before editing, inspect Git status and protect unrelated user changes. Consult AGENTS.md and the relevant Astro documentation for content changes. Run the existing build command (currently `npm run build`) and `git diff --check`; verify that each added or updated entry maps to a published schedule row and no duplicates were introduced. Re-run the comparison after editing: successfully synchronized rows must now be represented, leaving only unresolved conflicts. If nothing needs updating, leave the file untouched and avoid an empty commit or PR.

Create a branch and pull request only when requested, following the repository's branch prefix (currently `johnlokerse/`). Describe additions, publication URL updates, unresolved items, source date/ref, and validation. Verify the PR exists and attach its URL with `mcp__codex_app__attach_artifact`. Do not merge or deploy it without a separate request.
