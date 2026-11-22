# Brian Gibson — Portfolio

A fast, accessible, fully static portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4.
`npm run build` produces a plain static site in `out/` that works on Vercel, Cloudflare Pages or GitHub Pages.

## Edit the content

**Everything you'd want to change lives in one file: `content.ts`.**

- `site`: name, tagline (the big hero headline), intro, page title and description
- `hero`: background image path, its alt text, optional background video, button labels
- `projects`: project cards (title, description, tags, live and repo links, screenshot)
- `services`: website packages. Set `price` (e.g. `"$499"`), or leave it `""` to show "Get a quote".
- `about`: about-section heading, paragraphs and highlights
- `steps`: the "how it works" steps
- `contact`: email, optional phone, location (placeholder), social links. Links set to `"#"` are hidden until you add a real URL. The GitHub link also shows in the top bar.

Tips:
- Set a link to `""` to hide its button, or to `"#"` while it's still a placeholder.
- Project screenshots go in `public/projects/`. The hero image is `public/hero.jpg`.
- For a video hero, add `public/hero.mp4` and set `hero.video: "/hero.mp4"`. It plays muted and on a loop, uses the image as its poster, and is hidden for visitors who prefer reduced motion.
- Colors are CSS variables at the top of `app/globals.css`.

## Develop and build

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to ./out
npx serve out    # preview the built site
```

## Deploy

### Vercel
Import the repo in Vercel. It detects Next.js on its own, so no settings are needed. You can also run `npx vercel` from this folder.

### Cloudflare Pages
Create a Pages project from the repo with:
- Build command: `npm run build`
- Build output directory: `out`
- Environment variable (if needed): `NODE_VERSION=20`

You can also build locally and upload with `npx wrangler pages deploy out`.

### GitHub Pages
- **User site (`USERNAME.github.io`) or a custom domain:** build normally.
- **Project site (`USERNAME.github.io/REPO`):** the site lives under `/REPO`, so build with a base path:
  ```bash
  NEXT_PUBLIC_BASE_PATH=/REPO npm run build
  ```
  `next.config.ts` reads that variable for `basePath`/`assetPrefix`, and `lib.ts` (`asset()`) adds it to image paths.
- `public/.nojekyll` is included so GitHub serves the `_next/` folder.
- This repo includes `.github/workflows/deploy.yml`, which builds and deploys to Pages on every push to `main` (Settings → Pages → Source: **GitHub Actions**). For a project site it would run `npm ci`, then
  `NEXT_PUBLIC_BASE_PATH=/REPO npm run build`, and uploads `out/` with `actions/upload-pages-artifact` + `actions/deploy-pages`.

## Accessibility

Skip link, semantic landmarks (`header`/`nav`/`main`/`footer`), one `h1` with ordered headings, alt text on all images,
labels on icon-only links, visible amber focus rings, WCAG AA contrast, and `prefers-reduced-motion` support
(it turns off the zoom, parallax, rain, text reveal and video). Checked with axe-core: 0 violations.
