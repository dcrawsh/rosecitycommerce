# Rose City Commerce Marketing Site

Production-ready marketing website for Rose City Commerce built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development
1. Install dependencies:
```bash
npm install
```
2. Run dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000`

## Build and Run
1. Build:
```bash
npm run build
```
2. Start production server:
```bash
npm run start
```

## Content Editing
- Site-wide config: `config/site.ts`
- Home page data: `data/home.ts`
- Services content: `data/services.ts`
- FAQs: `data/faqs.ts`
- Testimonials: `data/testimonials.ts`
- Case studies (one file per case): `data/case-studies/*.ts`
  - Add a new case study by creating one file in `data/case-studies/` and exporting it in `data/case-studies/index.ts`.

## SEO
- Metadata in `app/layout.tsx` and page-level metadata files.
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`

## Deployment (Vercel)
1. Push repository to GitHub.
2. Import project into Vercel.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build` (default).
5. Output: `.next` (default).
6. Set production domain and update `config/site.ts` `url` field.

## Notes
- Uses image placeholders in `public/images/` for case studies.
- Includes a sticky mobile `Book a call` CTA and a limited-availability audit offer section.
- See `BRANDING_SPEC.md` and `FUTURE_ENHANCEMENTS.md`.

## Free Audit Email (Gmail)
Set these environment variables for the audit form email route:

- `GOOGLE_EMAIL=rosecitycommerce@gmail.com`
- `GOOGLE_EMAIL_APP_KEY=your_google_app_password`
- `AUDIT_FORM_TO=rosecitycommerce@gmail.com` (optional; defaults to `GOOGLE_EMAIL`)
- `CONTACT_FORM_TO=rosecitycommerce@gmail.com` (optional; defaults to `GOOGLE_EMAIL`)
