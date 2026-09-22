# Muhammed Amer — Personal Portfolio

A responsive personal portfolio website for **Muhammed Amer**, Junior Front-End Developer.

## 1. Project overview

A single-page portfolio with Home, About, Skills, Projects, Currently Learning, Journey and
Contact sections, dark/light mode with saved preference, a mobile navigation menu, and a
contact form UI ready to be connected to an email service.

All personal content lives in `src/data/` so you can update the site without touching the
components.

## 2. Technologies

- React 19
- TypeScript / JavaScript
- TanStack Router (file-based routing)
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Vite
- lucide-react icons

## 3. Installation

```bash
npm install
```

## 4. Running locally

```bash
npm run dev
```

The site runs at the URL printed in the terminal (usually http://localhost:8080).

## 5. Build

```bash
npm run build
npm run preview   # preview the production build
```

## 6. Deployment

**Vercel**

1. Push the project to GitHub.
2. Import the repository on vercel.com.
3. Build command `npm run build`. Vercel detects the rest automatically.

**Any static/Node host**: run `npm run build` and deploy the generated output folder
following your host's instructions.

## 7. Project structure

```
src/
├── components/     Navbar, Footer, Button, ProjectCard, SkillCard, SectionHeading
├── sections/       Hero, About, Skills, Projects, Learning, Journey, Contact
├── data/           personalInfo.ts, projects.ts, skills.ts
├── hooks/          useTheme.ts, useReveal.ts
├── routes/         __root.tsx (shell + meta), index.tsx (the page)
└── styles.css      design system: colors, fonts, shadows, animations
```

## 8. What to fill in

Open `src/data/personalInfo.ts` and add:

- `github` — your GitHub profile URL
- `linkedin` — your LinkedIn profile URL
- `resume` — a link or a file placed in `public/` (e.g. `/resume/cv.pdf`)

Empty values are hidden automatically, so no broken links appear.

Open `src/data/projects.ts` to add live demo and repository links for each project.

## 9. Connecting the contact form

The form in `src/sections/Contact.tsx` does not send anything yet. Inside `handleSubmit`,
post the values to the email service of your choice (EmailJS, Formspree, Resend, or your
own API) and show a success message.

## 10. Getting the source code

In Lovable use **GitHub → Connect to GitHub** to push this repository to your account, or
use the code download option in the project menu. Once it is on GitHub you can clone it:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

## License

© 2026 Muhammed Amer. All rights reserved.
