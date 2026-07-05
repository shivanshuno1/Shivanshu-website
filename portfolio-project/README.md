# Shivanshu Rawat — Portfolio

A futuristic, animated portfolio built with **React + Three.js (react-three-fiber)** on the
frontend and a small **Node/Express** API on the backend for the contact form.

## Structure

```
portfolio-project/
├── frontend/   # Vite + React + Tailwind + react-three-fiber
└── backend/    # Express API (contact form endpoint)
```

## Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Build for production:

```bash
npm run build       # outputs to frontend/dist
npm run preview
```

The hero section renders a live 3D scene: a distorted wireframe icosahedron
"core" surrounded by an orbiting node network (a nod to data-science +
full-stack skills), a starfield, and subtle mouse-parallax on the camera —
all via `@react-three/fiber` and `@react-three/drei`. Scroll-triggered
reveals use `framer-motion`. Reduced-motion preferences are respected via CSS.

Copy `.env.example` to `.env` if you need to point the frontend at a deployed
backend URL (`VITE_API_URL`). In local dev it just proxies `/api` to
`http://localhost:4000` (see `vite.config.js`).

## Backend

```bash
cd backend
cp .env.example .env
npm install
npm run start        # http://localhost:4000
```

Endpoints:

- `GET /api/health` — health check
- `POST /api/contact` — accepts `{ name, email, message }`, validates input,
  rate-limits (5 requests / 15 min / IP), stores submissions to
  `backend/data/messages.json`, and optionally emails them via SMTP if
  `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` / `CONTACT_TO_EMAIL` are set in `.env`.
  If SMTP isn't configured, messages are still saved locally so nothing is lost.

## Editing content

All resume-derived content (experience, projects, certifications, skills)
lives in one place: `frontend/src/data/resumeData.js`. Edit that file to
update the site — no need to touch components.

## Deploying

- **Frontend**: any static host (Vercel, Netlify, Render static site) — run
  `npm run build` and deploy the `dist/` folder.
- **Backend**: any Node host (Render, Railway, Fly.io). Set `CLIENT_ORIGIN`
  to your deployed frontend URL, and set `VITE_API_URL` on the frontend to
  your deployed backend URL before building.
