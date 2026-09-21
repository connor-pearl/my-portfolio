# Connor Brennan — Atlas

Personal portfolio for **Connor Brennan**, AI Full Stack Software Engineer in Cali, Colombia. The site is laid out as a cartographic atlas: six plates from cover through dispatch, with a copper-and-signal visual language and no photographs of people.

Live source: [github.com/connor-pearl/my-portfolio](https://github.com/connor-pearl/my-portfolio)

## Plates

| Plate | Section | Contents |
| --- | --- | --- |
| 00 | Cover | Name, role, summary |
| 01 | Signal | Production metrics |
| 02 | Deployments | La Haus, PSL Corp, Evervault |
| 03 | Instrumentation | AI, backend, frontend, and infrastructure stack |
| 04 | Origin | M.Sc. Intelligent Systems (AI), Trinity College Dublin |
| 05 | Dispatch | Email, phone, Cali coordinates |

Copy and metrics live in [`src/content/site.ts`](src/content/site.ts). Edit that file to update the site without restyling.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

Personal site. All rights reserved.
