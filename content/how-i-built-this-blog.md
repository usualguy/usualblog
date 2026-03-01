---
title: How I Built This Blog (in an Afternoon with an AI)
subtitle: Static site generation, Obsidian, and 180 animated plant emojis
date: 2026-03-01
tags: [blog, quartz, obsidian, web-dev]
---

## The Setup

I wanted a blog. A place to write markdown files and publish them to the internet. I write in Obsidian, so the blog needed to understand my existing notes without conversion.

The constraint: finish today. No weekend research sessions. No Docker containers. No maintenance overhead.

## The Stack

**Quartz 4** - A static site generator built in TypeScript that understands Obsidian's wikilinks (`[[like this]]`). Builds in milliseconds. Deploys to GitHub Pages with zero configuration.

**Obsidian** - Plain markdown files in a folder. No export step. No format conversion.

**GitHub Actions** - Free CI/CD that rebuilds on every push. The deployment pipeline is a 40-line YAML file included with Quartz.

## Choosing Quartz

I evaluated Hugo and Jekyll. Hugo builds fast (167ms for 170 pages). Jekyll has maturity and plugins. Both require theme selection, layout configuration, and learning templating languages (Liquid for Jekyll, Go templates for Hugo).

Quartz makes one choice: clean, minimal theme by default. Write markdown. Get HTML.

The deciding factor: **native Obsidian support**. Quartz processes `[[wikilinks]]`, backlinks, and Obsidian frontmatter directly. My notes become blog posts without modification.

## The Build Process

The workflow:

1. Write `content/my-post.md` in Obsidian
2. `git add . && git commit && git push`
3. GitHub Actions runs `npx quartz build`
4. Site deploys to GitHub Pages

The build command:

```bash
npx quartz build
# Done processing 2 files in 78ms
```

Seventy-eight milliseconds from markdown to deployed site.

## The Custom Touch

The default theme felt sterile. I wanted personality without a full redesign.

I added 180 plant emojis (🌱🌿🍃🌲🌳🌵) that animate in an ellipse around the site title. They fade and respawn continuously, like a digital garden.

The implementation: 80 lines of TypeScript that:
- Create emoji elements dynamically
- Position them using parametric ellipse equations
- Respawn 3-4 random emojis every 800ms
- Use inline styles with `z-index: -1` to layer behind text

Quartz bundles this as a component automatically. No CSS framework. No React. No separate build step.

## Decisions I Made

**Static over dynamic** - Zero backend. Zero attack surface. GitHub serves files from their CDN.

**Opinionated tools** - Quartz chooses defaults. I write content instead of configuring themes.

**Git as CMS** - Version control, rollback, and branching come free.

**Minimal code** - The entire emoji effect is ~100 lines. The blog works without it.

I'd make the same choices again. The "finish today" constraint eliminated analysis paralysis.

## Costs

- **Money**: $0 (GitHub Pages free tier)
- **Time**: 3 hours (including the emoji animation)
- **Maintenance**: 0 minutes (GitHub handles security, updates, CDN)

## Write

Pick a tool. Ship it. Write.

Hugo, Jekyll, Astro, SvelteKit, Quartz—they all work. The tool matters less than publishing consistently.

---

*Source code: [github.com/usualguy/usualblog](https://github.com/usualguy/usualblog). The emoji animation lives in `quartz/components/scripts/title-emoji.inline.ts`.*
