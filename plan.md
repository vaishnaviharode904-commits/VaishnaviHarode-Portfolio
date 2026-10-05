# Vaishnavi Harode Portfolio — Implementation Plan

## Product scope
A responsive, single-page portfolio for Vaishnavi Harode, built from the supplied resume as the source of truth. It presents the professional profile, resume-backed projects, education, skills, certifications and workshops; provides a local resume download; and includes only verified contact/profile links present in the resume. The app is static-only: no server, database, Vite endpoint, API key, or `index.ts` file.

## Design direction
- **Design Movement:** Editorial brutalism softened with warm Swiss typography — high-contrast type, confident rules, and asymmetry that feels intentional rather than decorative.
- **Core Principles:** (1) Make the candidate’s name and strongest proof immediately legible. (2) Use structure and whitespace instead of generic card grids. (3) Keep every claim resume-backed. (4) Make contact and resume actions obvious without feeling salesy.
- **Color Philosophy:** A warm paper background gives the portfolio a human, printed-resume quality. Near-black ink provides authority and readability. A saturated chartreuse accent acts as Vaishnavi’s ownable signature color: energetic, technical, and memorable against the restrained base.
- **Layout Paradigm:** A left-aligned editorial rail with a large hero lockup, numbered sections, and staggered project rows. Content is organized as an index rather than a centered marketing page.
- **Signature Elements:** Oversized serif display name, chartreuse “signal” bars, and section numbers / thin rules that echo a technical notebook.
- **Interaction Philosophy:** Links feel like direct invitations; hover states reveal motion through underlines and slight translation, while focus states remain high-contrast and accessible.
- **Animation:** Use restrained entrance fades and vertical lifts for hero/meta blocks, with no looping motion. Project rows respond with a small translate and accent-line expansion.
- **Typography System:** `DM Sans` for body/UI hierarchy and `DM Serif Display` for the hero name and section display moments, loaded from Google Fonts with a system fallback stack.
- **Brand Essence:** A practical early-career software developer who turns Python and Java fundamentals into useful desktop tools and clear, maintainable interfaces. Personality: **curious, grounded, methodical**.
- **Brand Voice:** Direct, warm, and evidence-led. Example lines: “Software that starts with solid fundamentals.” and “A few things I’ve built while learning by doing.”
- **Wordmark & Logo:** A compact `VH` monogram in a ruled square, paired with the full name as a text wordmark.
- **Signature Brand Color:** `#D9F45B` chartreuse.

## Implementation
- **Frontend:** Vite + React with JavaScript/JSX; deliberately no `index.ts`.
- **Entry points:** `index.html` and `src/main.jsx`; styling lives in `src/styles.css`; build settings live in `vite.config.js`.
- **Data:** Resume-derived arrays in the client source for projects, skills, education, certifications and links.
- **Assets:** The supplied PDF is copied to `public/assets/Vaishnavi_Harode_Resume.pdf` and referenced with a relative URL for download. No external image is required because no personal image was supplied.
- **Deployment:** `vercel.json` uses the exact user-provided Vite commands, `NODE_ENV=production`, and `dist/public`. The Vite build is configured to output there.
- **Routing metadata:** `public/manus-routes.json` declares the single `/` route.
- **Infrastructure:** Static frontend only; no server or database capability is needed.

## Project structure
- `index.html` — document shell and metadata.
- `src/main.jsx` — React app, sections, resume-derived content and interactions.
- `src/styles.css` — responsive editorial visual system and motion.
- `public/assets/Vaishnavi_Harode_Resume.pdf` — downloadable local resume.
- `public/manus-routes.json` — route manifest for the Webdev preview/runtime.
- `vite.config.js` — Vite + React plugin and `dist/public` output.
- `vercel.json` — exact Vercel deployment declaration requested by the user.
