# Navneet Bhardwaj Portfolio

Premium Cloud and DevOps portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Vercel Analytics, and Vercel Speed Insights.

## Overview

The site is designed for Cloud Engineer, DevOps Engineer, Platform Engineer, Kubernetes Engineer, AWS Engineer, and SRE hiring screens. It emphasizes production infrastructure, CI/CD, cloud operations, monitoring, security, and verifiable project work.

## Folder Structure

```text
app/                 Next.js App Router pages, metadata, sitemap, robots
components/          Reusable UI and section components
data/                Portfolio content model
lib/                 Utilities and GitHub API helpers
public/resume/       Static resume asset
.github/workflows/   GitHub Actions CI
```

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

`NEXT_PUBLIC_FORMSPREE_ENDPOINT` is optional. Without it, the contact form falls back to email.

## GitHub Actions

CI runs on pushes, pull requests, and manual dispatch:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

## Deployment on Vercel

Import the GitHub repository into Vercel, set the optional environment variables, and deploy. The project uses standard Next.js defaults and does not need a custom server.

## Customization Guide

Update `data/portfolio.ts` with verified resume, certification, project, and PRISM details. Replace the resume file in `public/resume/` when a newer CV is available.

## Future Improvements

- Replace the PRISM slot with verified architecture diagrams and screenshots.
- Add certificate cards with issuer logos and credential URLs.
- Add richer GitHub language statistics through a scheduled data snapshot.
- Wire the contact form to Formspree or Resend.
