# AstraLend Landing

High-conversion furniture company landing page (lead generation).

## Tech stack
- Next.js (App Router), TypeScript
- TailwindCSS
- Framer Motion
- react-hook-form + zod

## Getting started
1. Install dependencies:
   - `npm install`
2. Create `.env.local`:
   - `copy .env.example .env.local` (Windows)
   - fill envs for Telegram and/or SMTP
3. Add media assets:
   - `public/video/hero.mp4`
   - `public/images/hero-poster.jpg`
   - `public/images/portfolio-01.jpg` ... `portfolio-04.jpg`
4. Run dev server:
   - `npm run dev`

## Environment variables
Telegram (optional):
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Public lead endpoint (optional):
- `NEXT_PUBLIC_LEAD_ENDPOINT` (defaults to `https://formsubmit.co/ajax/mebel@a-stra.ru`)

This project is static-first and sends form submissions from the browser. By default, leads are posted to FormSubmit and delivered to `mebel@a-stra.ru`.

## Deployment
1. Build: `npm run build`
2. Start: `npm run start`

Any platform that supports Next.js App Router will work (Vercel, Railway, etc.).
