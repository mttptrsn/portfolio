# Personal Portfolio Website
- The portfolio website is a minimalist design meant to:
-- Showcase projects or recent work
-- Provide background experience
-- Provide contact information

## Design Notes
- built using nextjs and hosted using vercel

## Contact form configuration

Copy `.env.example` to `.env.local` for local development and configure the same variables in Vercel. The contact endpoint fails closed when its signing secret or email credentials are unavailable.

- `CONTACT_FORM_SECRET` must be a unique random value and must not be exposed to the browser.
- Spam protection is self-contained: a hidden honeypot, signed submission timing, server-side field validation, garbage detection, and a best-effort in-memory IP throttle. The throttle is intentionally not durable across Vercel serverless instances.
