# Stella Joy D. Gregorio, RN

<img src="public/headshot.jpg" alt="Portrait of Stella Joy Gregorio" width="140" />

**Staff Nurse — General Ward** (Internal Medicine & Surgical)  
Rosario Maclang Bautista General Hospital · Quezon City, Metro Manila

I like the ward. I start the IV, stay close after surgery, and tell you what's happening in normal words.

Bachelor of Science in Nursing, Our Lady of Fatima University — Lagro, 2021–2025. Active registered nurse, open to clinical opportunities. Cross-trained on OB-GYN and Pediatrics. BLS and ACLS.

[stellajoygregorio.rn@gmail.com](mailto:stellajoygregorio.rn@gmail.com) · [Download CV](public/resume.pdf)

![Next.js](https://img.shields.io/badge/Next.js-16-111111?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)

Personal site for the resume above. One page: clinical experience, skills, student rotations, certifications, and contact. Light and dark theme. Portrait and CV ship with the app.

## On the page

| Section | What's there |
| --- | --- |
| Experience | Staff nurse, general ward, Rosario Maclang Bautista General Hospital (March 2026 — present) |
| Skills | Vascular access, bedside and perioperative care, FDAR charting, infection control |
| Rotations | OR & PACU, delivery room, pediatrics, ICU, psychiatric ward |
| Credentials | BSN, BLS, ACLS, IV therapy, ECG & pharmacology, first aid |
| Contact | Email, phone, and Quezon City |

All of that copy lives in [`data/resume.ts`](data/resume.ts). Change it there and the page follows.

## Run locally

[pnpm](https://pnpm.io) 11.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build
pnpm start
```

## Stack

[Next.js](https://nextjs.org) 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · [Motion](https://motion.dev) · GSAP

`app/` is the page. `components/` is the layout and sections. `public/headshot.jpg` and `public/resume.pdf` are the portrait and CV.
