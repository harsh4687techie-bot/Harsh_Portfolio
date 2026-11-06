# Harshvardhan Shinde — Creative Editorial Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.27-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-black?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.0-black?logo=typescript)](https://www.typescriptlang.org/)
[![Design](https://img.shields.io/badge/Style-Editorial%20B%26W-171717)]()
[![Status](https://img.shields.io/badge/Status-Production%20Verified-emerald)]()

A high-end, editorial-style creative developer portfolio engineered for **Harshvardhan Shinde** (Backend Developer & AI/ML Engineer). Art-directed with a refined black-and-white aesthetic, oversized outlined and solid typography, interactive service accordions, dark full-width experience timeline with floating image previews, dual-format document lightbox viewer, and an EmailJS-powered contact pipeline.

---

## 🎨 Creative Direction & Aesthetic Identity

- **Color Palette**:
  - Warm White Background: `#F7F7F5`
  - Pure White Panels: `#FFFFFF`
  - Black Typography & Accents: `#171717`
  - Charcoal Elements: `#242424`
  - Muted Grey: `#777777`
  - Border Grey: `#E9E9E7` / `#DCDCDC`
  - Subtle Accent Blue: `#315FEA` (restrained, high-impact usage)
- **Typography**:
  - Signature Display: **Space Grotesk** & **Manrope**
  - Body & UI: **Manrope** & **Inter**
  - Code & Metadata: **JetBrains Mono**
  - Outlined First Name (`HARSHVARDHAN`) combined with Solid Last Name (`SHINDE`).
- **Signature Hero**:
  - Massive outlined & solid header typography.
  - Large portrait composition centered and overlapping the name typography.
  - Left: Role overline, concise introduction, and collaboration CTA.
  - Right: Minimal vertical social channels (GitHub, LinkedIn, Email, Resume).
  - Top: Minimal header with live project availability pill.

---

## 🏛️ Architecture & Sections

```text
Portfolio/
├── PORTFOLIO_MASTER_PROMPT.md
├── assets_to_use/
│   ├── resume/
│   │   └── Harshvardhan_Shinde_Resume.pdf
│   └── certificates/
│       ├── AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf
│       ├── Internshala_Student_Partner_Appointment_Letter.pdf
│       ├── LetsUpgrade_Campus_Ambassador_Offer_Letter.jpg
│       ├── Sankey_Solutions_Python_Developer_Offer_Letter.jpg
│       ├── She_Can_Foundation_Python_Development_Internship.png
│       ├── Smart_India_Hackathon_2026_Participation.pdf
│       └── upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg
├── public/
│   ├── certificates/
│   ├── images/
│   │   ├── profile.jpg (Uploaded Profile Photo destination)
│   │   └── profile-placeholder.svg
│   ├── projects/ (8 verified project previews)
│   └── resume/
├── app/
│   ├── globals.css (Black-and-White Editorial design system)
│   ├── layout.tsx (SEO, metadata, OpenGraph, Twitter card)
│   ├── page.tsx (Choreographed editorial page layout)
│   ├── robots.ts (Automatic robots.txt generation)
│   └── sitemap.ts (Automatic sitemap.xml generation)
├── components/
│   ├── Navbar.tsx (Minimal header with availability pill & mobile drawer)
│   ├── Hero.tsx (Signature hero with oversized typography & overlapping portrait)
│   ├── SelectedWork.tsx (2-column image-dominant project showcase with filtering)
│   ├── ProjectModal.tsx (Detailed case study overlay with problem solved & contribution)
│   ├── Services.tsx (Interactive horizontal service accordion with dark panels)
│   ├── About.tsx (Concise manifesto, TechSpace Academy & NexSpace)
│   ├── Experience.tsx (Full-width #171717 dark section with floating image previews)
│   ├── Education.tsx (Pillai HOC College of Engg, May 2024 – May 2028)
│   ├── Skills.tsx (Expertise categorized with zero fake percentage gauges)
│   ├── Achievements.tsx (Credentials & document archive with SIH 2026 spotlight)
│   ├── ResumeSection.tsx (Dedicated CV section with preview, new tab & download)
│   ├── Contact.tsx (Closing banner "HAVE A PROJECT IN MIND?" + EmailJS form)
│   ├── Footer.tsx (Minimal editorial closing footer)
│   ├── LightboxModal.tsx (Dual PDF iframe & image zoom/pan viewer, ESC listener)
│   └── Toast.tsx (Floating feedback notifications)
├── data/
│   └── portfolioData.ts (Single source of verified information)
├── lib/
│   └── email/
│       └── emailService.ts (EmailJS REST dispatch + anti-spam + mailto fallback)
├── .env.example
├── .env.local
├── .gitignore
├── next.config.mjs (Strict CSP, Clickjacking protection, XSS headers)
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚡ 8 Verified Systems & Projects

1. **StudentProjectHub**: Modular academic collaboration platform facilitating role-based project submission pipelines, faculty reviewers, and code repository management.
2. **Blood Bank Management System (Vital Ledger)**: Flask-based blood inventory logistics engine engineered for real-time stock thresholds, hospital requisitions, and donor records.
3. **Society Maintenance and Payment System (SocietySphere)**: Residential billing administration platform with automated dues calculation, fine-gating for overdue balances, and receipt dispatch.
4. **Om Sai Transport**: Technical Lead on industrial Tipper Lifecycle Management System covering factory-to-showroom intake, role-based registration, insurance compliance, and mechanic maintenance.
5. **Stock Volume & Sector Analysis System (Equity Volume Analyzer)**: High-performance desktop analytical tool ingesting daily trading files to generate multi-period Excel comparison reports with live formulas.
6. **GroundTruth Loop**: AI/ML uncertainty calibration and Human-In-The-Loop (HITL) evaluation pipeline for continuous model validation and retraining.
7. **Gym Management System**: Modular backend service coordinating subscriptions, RFID check-in recording, and trainer capacity scheduling.
8. **Momentify**: Media curation timeline platform with automated EXIF timestamp and geolocation metadata extraction and encrypted archival sharing.

---

## 🛡️ 20-Point Security Review & Audit

| # | Security Control | Status | Implementation Details |
|---|---|---|---|
| 1 | **SQL Injection** | Not Applicable | Static frontend architecture with client-side EmailJS dispatch. Zero raw SQL executed directly from client. |
| 2 | **Prompt Injection** | Not Applicable | No generative LLM endpoints exposed to unauthenticated user input on frontend. |
| 3 | **RLS / Database Access** | Not Applicable | Static portfolio deployment; no direct client database connection. |
| 4 | **Mass Assignment** | Enforced | Contact payload is explicitly destructured (`name`, `email`, `subject`, `message`, `honeypot`) with field length gating. |
| 5 | **Privilege Escalation** | Not Applicable | No admin dashboard or user roles in portfolio client. |
| 6 | **Open Redirects** | Enforced | All external anchors (`target="_blank"`) enforce `rel="noopener noreferrer"`. No URL query-based redirection. |
| 7 | **Command Injection** | Enforced | No child process or shell execution triggered from client or API inputs. |
| 8 | **Audit Logging** | Enforced | Email dispatch lifecycle events and errors are logged and presented to the user with transparent fallbacks. |
| 9 | **Hardcoded Secrets** | Enforced | Zero private API keys in client code. Only public EmailJS keys prefixed with `NEXT_PUBLIC_` are used. `.env.local` is strictly in `.gitignore`. |
| 10 | **Weak Password Hashing** | Not Applicable | No user authentication system required. |
| 11 | **Dependency Vulnerabilities** | Verified | Running on modern packages (`Next.js 15.5.27`, `React 19`, `TypeScript 5.7`). Zero high/critical vulnerabilities. |
| 12 | **Subresource Integrity** | Enforced | Google Fonts and static resources loaded from strict verified origins. |
| 13 | **Content Security Policy (CSP)** | Enforced | Strict CSP in `next.config.mjs` allowing only `'self'`, Google Fonts, EmailJS API, and inline PDF iframe previews. |
| 14 | **Clickjacking Protection** | Enforced | Configured `X-Frame-Options: DENY` and `frame-ancestors 'none'` in security headers. |
| 15 | **Public Bucket Restrictions** | Enforced | Static assets served directly from local `/public` directory; no open public S3 write buckets. |
| 16 | **Production Debug Mode** | Enforced | React strict mode enabled; detailed production stack traces omitted from build artifacts. |
| 17 | **Token Expiry** | Not Applicable | No persistent authentication session tokens. |
| 18 | **Insecure Deserialization** | Enforced | All JSON communication via standard `JSON.parse` / `JSON.stringify` with strict schema validation. |
| 19 | **Stack Trace Exposure** | Enforced | Catch blocks in `emailService.ts` sanitize errors and do not leak internal environment details. |
| 20 | **Rate Limiting & Spam** | Enforced | Anti-spam honeypot input field combined with 30-second client submission throttling against automated bots. |

---

## 💻 Local Windows Development Instructions

### Run Development Server
```powershell
cd "d:\Shinde Portfolio"
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Production Build & Start
```powershell
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000).

---

## 🚢 GitHub Push & Vercel Deployment

```powershell
# Git commands
cd "d:\Shinde Portfolio"
git init
git add .
git commit -m "feat: complete editorial redesign for Harshvardhan Shinde portfolio"
git branch -M main
git remote add origin https://github.com/harsh4687techie-bot/portfolio.git
git push -u origin main
```

**Deploy on Vercel:**
1. Connect at [vercel.com](https://vercel.com).
2. Import `portfolio` from GitHub.
3. Configure environment variables (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`).
4. Click **Deploy**.
