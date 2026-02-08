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
