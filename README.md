# Regional Combined Male Choir Practice

Informational website for the New Apostolic Church, Lusaka Region Music Department: Regional Combined Male Choir Practice and the 800 Male Choir Christmas Concert (December 2026).

Built by CrispinIT Labs with React and Vite, hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Post an update

All page content is in `src/data/content.js`. To post an update, add an entry at the top of the `updates` list:

```js
{
  date: '2026-10-24',
  label: '24 Oct 2026',
  title: 'Next practice',
  text: 'Details go here.',
},
```

Newest first. The first entry is marked "Latest". Commit and push to `main` and the site redeploys.

## Practice plan page

The plan page is at `/#/practice-plan`. Its schedule, team leaders and members are in the `practicePlan` list in `src/data/content.js`. The PDFs people can download are in `public/downloads/`. To replace one, save the new file there with the same name.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, go to Settings, then Pages, and set Source to **GitHub Actions**.
3. Each push to `main` builds and publishes the site (`.github/workflows/deploy.yml`).

Asset paths are relative (`base: './'` in `vite.config.js`), so no repository name needs to be configured.

## Site address

The live site is at https://crispinit187.github.io/LRMCW/. If you move to a custom domain, update the address in `index.html` (canonical, `og:url`, `og:image`, `twitter:image`), `public/robots.txt` and `public/sitemap.xml`.
