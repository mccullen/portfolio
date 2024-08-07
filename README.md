[My Website](https://mccullen.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/32940ac7-59f9-4db5-aefb-5e675fdcf3db/deploy-status)](https://app.netlify.com/sites/mccullen/deploys)

## Tech Stack
- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting
- Tailwind v4
- Vercel Speed Insights / Web Analytics
- Geist font

## Template Used
https://portfolio-blog-starter.vercel.app

## Local Development
Run on localhost:3000
```bash
pnpm dev
```

## Build
Build files to `.next` directory. 
```bash
pnpm build
```

These are the files you will want to host on the server.

## Deploy
The GitHub repository is linked to Netlify and deploys on updates to the `main` branch

Build Settings
- **Build Command**: pnpm run build
- **Publish Directory**: .next
- **Base Directory**: /
