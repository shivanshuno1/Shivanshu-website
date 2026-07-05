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

### Vercel (frontend)

1. Push the project to GitHub.
2. In Vercel, import the `frontend/` folder as a project.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Add an environment variable:
   - `VITE_API_URL=https://your-render-backend-url.onrender.com`
6. Deploy.

### Render (backend)

1. Create a new Web Service on Render and connect the repository.
2. Set the root directory to `backend`.
3. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables:
   - `NODE_ENV=production`
   - `CLIENT_ORIGIN=https://your-vercel-app.vercel.app`
   - `SMTP_HOST=...` (optional)
   - `SMTP_PORT=587` (optional)
   - `SMTP_USER=...` (optional)
   - `SMTP_PASS=...` (optional)
   - `CONTACT_TO_EMAIL=your-email@example.com` (optional)
5. Deploy.

### Notes

- The frontend uses `VITE_API_URL` for the deployed API URL.
- The backend accepts requests from the Vercel domain via `CLIENT_ORIGIN`.
- If SMTP is not configured, the contact form will still save submissions locally.
