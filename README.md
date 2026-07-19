# Edward Cadiz — Portfolio

The source and deployment pipeline for [userfame.github.io/my-profile](https://userfame.github.io/my-profile/).

## Project structure

- `site/` — readable source for the current static portfolio.
- `tools/portfolio-build/` — isolated, lockfile-pinned production builder.
- `dist/` — generated production output; intentionally untracked.
- `app/`, `components/`, and the root Next.js package — the previous implementation, retained for rollback history but not used by GitHub Pages.

## Production build

```bash
npm ci --prefix tools/portfolio-build
npm run build --prefix tools/portfolio-build
npm test --prefix tools/portfolio-build
```

The builder minifies HTML, CSS, and JavaScript, then converts the portrait master into 900px AVIF, WebP, and progressive JPEG variants. The original PNG remains in `site/assets/` as the build master and is excluded from `dist/`.

## Deployment

Pushing `main` runs `.github/workflows/deploy.yml`. The workflow installs only the isolated builder, produces and verifies `dist/`, then publishes that directory to GitHub Pages.
