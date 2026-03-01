---
title: How I Built This Blog (in an Afternoon with an AI)
subtitle: Static site generation, Obsidian, and 180 animated plant emojis
date: 2026-03-01
tags: [blog, quartz, obsidian, web-dev]
---

## The Setup

I wanted a blog. Not a platform, not a CMS, not a "solution." Just a place to write markdown files and have them appear on the internet. Bonus points if I could write them in Obsidian, since that's where all my notes live anyway.

The constraint: I wanted it done today. No weekend research rabbit holes about blogging platforms. No Docker containers to maintain. No security updates to worry about.

## The Stack

**Quartz 4** - A static site generator that natively understands Obsidian's wikilinks (`[[like this]]`). It's written in TypeScript, builds in milliseconds, and deploys to GitHub Pages with zero config.

**Obsidian** - Plain markdown files in a folder. That's it. No export step, no conversion, no sync issues.

**GitHub Actions** - Free CI/CD that rebuilds the site on every push. The entire deployment pipeline is a 40-line YAML file that came with Quartz.

## Why Not Hugo? Why Not Jekyll?

I looked at both. Hugo is fast (167ms for 170 pages) and Jekyll is mature. But both require me to think about themes, layouts, and templating languages (Liquid for Jekyll, Go templates for Hugo).

Quartz's pitch: it's opinionated. You get a clean, minimal theme out of the box. You write markdown. It makes HTML. The end.

The killer feature: **Obsidian compatibility**. Quartz understands `[[wikilinks]]`, backlinks, and Obsidian's frontmatter. My notes work as blog posts without modification.

## The Build Process

Here's the entire workflow:

1. Write `content/my-post.md` in Obsidian
2. `git add . && git commit && git push`
3. GitHub Actions runs `npx quartz build`
4. Deploy to GitHub Pages

That's it. No build scripts, no deployment configuration, no server management.

The build itself is trivial:

```bash
npx quartz build
# Done processing 2 files in 78ms
```

Seventy-eight milliseconds. My coffee hasn't cooled down before the site is ready.

## The Custom Touch

The default theme is clean. Maybe too clean. I wanted something that felt like *mine* without redesigning everything.

So I added 180 plant emojis (🌱🌿🍃🌲🌳🌵) that animate in an ellipse around the site title. They fade in and out continuously, like a digital garden should.

The implementation is about 80 lines of TypeScript that:
- Creates emoji elements dynamically
- Positions them in an ellipse using parametric equations
- Runs a lifecycle where 3-4 random emojis respawn every 800ms
- Uses inline styles and `z-index: -1` to stay behind the text

No custom CSS framework. No React. No build step. Just a small component that Quartz bundles automatically.

## What I'd Do Differently

Honestly? Not much. The constraint of "done today" forced good decisions:

- **Static over dynamic** - No database, no backend, no attack surface
- **Opinionated tools** - Quartz makes choices so I don't have to
- **Git as CMS** - Version control, rollback, branching. All free.
- **Minimal customization** - The emoji effect is ~100 lines total

The only thing I'd change: I should have done this years ago. I spent too long researching "the perfect setup" instead of just shipping.

## The Point

This isn't a tutorial. It's a reminder: the best blog is the one you actually write on.

My setup costs:
- **Money**: $0 (GitHub Pages free tier)
- **Time**: 3 hours (including emoji animation)
- **Maintenance**: 0 minutes (GitHub handles security, updates, CDN)

Your setup might be different. Hugo, Jekyll, Astro, SvelteKit - all valid. The tool doesn't matter. Writing does.

So pick something boring. Ship it. Write.

---

*The source for this blog is at [github.com/usualguy/usualblog](https://github.com/usualguy/usualblog). The emoji animation code is in `quartz/components/scripts/title-emoji.inline.ts` if you want to steal it.*
