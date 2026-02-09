# Omer Cohen Portfolio (React + GitHub Pages CI/CD)

Bilingual portfolio site (Hebrew + English) built with React, Vite, Material UI, and react-i18next.

Sections included:

- Hero
- About
- Services
- Skills
- Experience examples
- Contact

## Local development

1. Install dependencies:
   - `npm install`
2. Run development server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Preview production build:
   - `npm run preview`

## CI/CD deployment (GitHub Pages)

The workflow at `.github/workflows/deploy-pages.yml` deploys automatically on push to `main`.

GitHub repository settings required:

1. Open `Settings` -> `Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`
3. Push to `main`
4. After workflow succeeds, site URL will be:
   - `https://<your-username>.github.io/<repo-name>/`

### EmailJS environment variables

The contact form uses `@emailjs/browser` and reads values from env vars only:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Local setup:

1. Copy `.env.example` to `.env.local`
2. Fill real values

GitHub Actions setup:

1. Open repository `Settings -> Secrets and variables -> Actions`
2. Add repository secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## Secret guard hooks

This repo includes hook scripts:

- `.husky/pre-commit` (scans staged files)
- `.husky/pre-push` (scans all tracked files)
- `scripts/guard-secrets.mjs`

Enable hooks locally once:

- `git config core.hooksPath .husky`

Manual scan command:

- `npm run check:secrets`

## Content customization

- Translation files:
  - `src/locales/he/translation.json`
  - `src/locales/en/translation.json`
- i18n setup:
  - `src/i18n.js`
- UI layout:
  - `src/App.jsx`
- Styles:
  - `src/styles.css`
- Contact links placeholders (replace with real values):
  - `src/App.jsx`
