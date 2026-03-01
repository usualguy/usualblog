# usualguy's Blog

Minimal static blog powered by Quartz and Obsidian, deployed to GitHub Pages.

## Quick Start

### Local Development

```bash
npm install
npx quartz build --serve
```

Open http://localhost:8080 to preview.

### Writing Posts

1. Create `.md` files in `content/`
2. Add frontmatter:
   ```yaml
   ---
   title: Your Title
   created: YYYY-MM-DD
   tags:
     - tag1
     - tag2
   ---
   ```
3. Write in Markdown (Obsidian-compatible)
4. Push to `main` branch → auto-deploys

### Obsidian Setup

Point your Obsidian vault to the `content/` folder, or symlink it.

## Analytics

Plausible is configured. Update `plausibleDomain` in `quartz.config.ts` with your actual domain.

## Customization

- **Design**: Edit `quartz.layout.ts` (components) and `quartz.config.ts` (theme/colors)
- **Content**: Add/edit files in `content/`
- **Deploy**: GitHub Actions handles it automatically

## Plausible Analytics Setup

1. Sign up at [plausible.io](https://plausible.io) (free tier: 10k pageviews/month)
2. Add a new site with domain: `usualblog.github.io`
3. Copy the script URL they provide
4. If needed, update `quartz.config.ts` (though Quartz handles Plausible automatically)

That's it! Plausible will start tracking once the site is live.
