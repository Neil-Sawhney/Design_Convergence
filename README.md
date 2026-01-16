# Simple Static Store (Stripe Payment Links)

This repo is stripped down to a tiny Nuxt site that works on GitHub Pages and
uses Stripe Payment Links for checkout. No backend required.

## Quick Start

1. Create three Stripe products and Payment Links in your Stripe dashboard.
2. Replace the `buyUrl` values in `pages/index.vue`.
3. Run the site locally:

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

GitHub Pages serves from a subpath like `https://username.github.io/<repo>/`.
Set the base URL at build time:

```bash
export NUXT_APP_BASE_URL="/<repo>/"
npm run generate
```

Deploy `.output/public` to GitHub Pages (or use a GitHub Actions workflow).

## Customize

- Update content and pricing in `pages/index.vue`.
- Adjust styles in the `<style scoped>` block.
- Replace the favicon in `public/favicon.svg`.
# Design_Convergence
