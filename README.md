# IndexQo Website

This repository contains the source code for **indexqo.com**, the public-facing site for IndexQo.

IndexQo is a brand and operating division of QoLogic LLC.

QoLogic is the holding and operating framework behind the Qo ecosystem. It exists to enforce coherence across infrastructure, communication, and leadership systems—ensuring that tools, decisions, and execution align under real operational conditions. QoLogic does not sell services directly; it provides the standards, architecture, and governance that allow SignalQo, IndexQo, and InfraQo to operate with discipline, consistency, and intent.

IndexQo exists to bring structure, coherence, and continuity to how organizations present themselves and communicate—across web, messaging, and supporting systems. The site reflects IndexQo’s core premise: most operational confusion is a signal problem long before it is a marketing one.

This is not a creative studio or a growth agency.
It is signal architecture.

---

## Tech Stack
* Framework: Vite + React (TypeScript)
* Styling: Tailwind CSS
* Hosting: Cloudflare Pages
* DNS / Edge: Cloudflare
* Analytics: Google Analytics (gtag)
* Schema: JSON-LD (Organization)

---

## Project Structure
* index.html: Core document head (meta tags, analytics, schema).
* /src/: Application source.
* /src/components/: Reusable UI and section components.
* /src/pages/: Page-level assemblies (Home, Services, Solutions, Contact).
* /src/styles/: Global styles and Tailwind configuration.
* /public/: Static assets (images, icons, verification files).

---

## Local Development
1. Install dependencies:
   npm install

2. Run development server:
   npm run dev

---

## Deployment
Deployment is handled automatically via Cloudflare Pages.
* Commits to the configured branch trigger builds.
* DNS is managed in Cloudflare.
* The apex domain uses Cloudflare’s proxied A-record setup for Pages.
No manual deployment steps are required.

---

## Notes on Intent
* Clarity over Persuasion: The site prioritizes consistency and structural signal over marketing fluff.
* Precision: Language is deliberately precise and stripped of hype.
* Alignment: The goal is comprehension, not traffic for its own sake.
* Identity: SEO is used to aid discovery, not to define the brand identity.

If something feels decorative or generic, it does not belong.

---

## Status
* Initial public launch: January 2026
* Actively iterating copy, structure, and supporting content.
* No backwards-compatibility guarantees at this stage.

---

## Contact
support@indexqo.com

---

Protecting reality, from Erosion.

(c) 2026 QoLogic LLC. All Rights Reserved.
