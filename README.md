# Tessera Studio

Premium full-stack agency website built with Next.js App Router, Tailwind CSS, Framer Motion and a backend contact API.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Backend

Project inquiries are submitted to `POST /api/contact`, validated on the server and saved to `data/leads.json` during local development.

The contact flow now sends two transactional emails through Resend:

- An admin notification with the full project structure and submitted brief
- A customer confirmation email with the same branded layout and a copy of their details

Required local environment values:

```bash
RESEND_API_KEY=...
RESEND_FROM_EMAIL="Tessera Studio <contact@tesserastudio.in>"
RESEND_FALLBACK_FROM_EMAIL="Tessera Studio <onboarding@resend.dev>"
ADMIN_NOTIFICATION_EMAIL=contact@tesserastudio.in
```

If you use `contact@tesserastudio.in` as the sender, make sure the `tesserastudio.in` domain is verified inside Resend. Until that domain is verified, the app will automatically retry with `onboarding@resend.dev` so contact emails can still go out.
