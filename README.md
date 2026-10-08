# Vansh Mirani Portfolio

A personal portfolio built with React, JavaScript/JSX, and Vite. The graphite and ice-blue design brings together selected work, a project collection, skills, education, and contact details in a responsive layout.

The opening project deck lets visitors swipe or drag through the collection, use its arrows or project selectors, and open a project for more details. It uses lightweight CSS animation and respects reduced-motion preferences.

Existing portfolio address: [vansh-mirani-portfolio.vercel.app](https://vansh-mirani-portfolio.vercel.app/). Local changes are not published automatically just by running this project.

## Run on a new device

Install a current Node.js LTS release, then open this cloned repository in a terminal.

```bash
npm ci
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`. The portfolio does not require an application database or private API keys.

## Build and preview

```bash
npm run build
npm run preview
```

The build is written to `dist/`. The preview command serves that build locally; it does not deploy the website.

## JavaScript structure

```text
public/
  resume.pdf             Downloadable resume
src/
  assets/                Profile imagery and other source assets
  components/            Reusable interface components
  data/portfolio.js      Profile, projects, skills, and background
  App.jsx                Application interface
  main.jsx               React entry point
  index.css              Styling and responsive layouts
index.html               Document title and metadata
vite.config.js           Vite configuration
```

Application components use `.jsx` and content uses `.js`; TypeScript is not required to maintain this version.

## Update the content

Edit `src/data/portfolio.js` to change the profile, projects, skills, certifications, training, or education. Replace `public/resume.pdf` to update the downloadable resume.

All projects share one list, so adding work does not require creating a separate page. Copy an existing project object and update these fields:

| Field | Purpose |
| --- | --- |
| `id` | A unique, stable identifier, such as `my-project` |
| `title` / `type` | The project name and a short description of its kind |
| `category` | `Full-stack`, `Hackathon`, or `Java` |
| `featured` | `true` for selected work; keep the featured selection small |
| `summary` | A concise line for browsing the collection |
| `description` | A fuller explanation of the project |
| `contributions` | Short, factual descriptions of the work |
| `tags` | The technologies used |
| `github` | The repository URL |
| `live` | A verified demo URL, or `null` when unavailable |

The featured selection is SmartTransit, Event Flow, and Expense Tracker. AssetFlow, CoreInventory, and Quiz Application remain available in the full collection. Keep claims and technology lists aligned with the actual projects, and confirm demo links before adding them.

## Vercel

Use the existing Vercel project connected to this repository. Its frontend build uses `npm run build` and the output directory `dist`. Review changes locally and on a preview deployment before promoting the redesign to the live portfolio address.

## Contact

- [GitHub](https://github.com/VanshMirani)
- [LinkedIn](https://www.linkedin.com/in/vansh-mirani/)
- [Email](mailto:miranivansh05@gmail.com)
