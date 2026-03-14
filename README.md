# HackCanada 2026

> MapleEstate AI — Multi-agent housing oracle for the Canadian market.

## Architecture

| Service   | Directory  | Description              | Default Port |
|-----------|-----------|--------------------------|-------------|
| **client** | `client/` | Next.js 16 frontend     | 3000        |
| **oracle** | `oracle/` | Express API backend      | 5000        |

The frontend talks to the backend over HTTP using the `NEXT_PUBLIC_API_URL` environment variable (defaults to `http://localhost:5000`).

## Quick Start with Docker Compose

```bash
# 1. Copy the example env file and fill in your API keys
cp .env.example .env

# 2. Build and start both services
docker compose up --build
```

- **Frontend:** <http://localhost:3000>
- **Backend:**  <http://localhost:5000>
- **Health:**   <http://localhost:5000/health>

To use pre-built images from GHCR instead of building locally:

```bash
docker compose pull
docker compose up
```

## Required Environment Variables

Copy `.env.example` to `.env` at the repository root and provide values.

| Variable | Used by | Required | Description |
|---|---|---|---|
| `NEXT_PUBLIC_API_URL` | client (build-time) | No | Backend URL. Default: `http://localhost:5000` |
| `NEXT_PUBLIC_SUPABASE_URL` | client (build-time) | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | client (build-time) | Yes | Supabase anon/public key |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | client (build-time) | Yes | Mapbox GL access token |
| `ELEVENLABS_API_KEY` | client (server-side) | No | ElevenLabs TTS API key |
| `ELEVENLABS_VOICE_ID` | client (server-side) | No | ElevenLabs voice ID |
| `SUPABASE_URL` | oracle | Yes | Supabase project URL |
| `SUPABASE_SERVICE_KEY` | oracle | Yes | Supabase service-role key |
| `BACKBOARD_API_KEY` | oracle | No | Backboard SDK API key |
| `BACKBOARD_ASSISTANT_ID` | oracle | No | Backboard assistant ID |

> **Note:** `NEXT_PUBLIC_*` variables are inlined into the JavaScript bundle at build time.
> Server-side secrets like `ELEVENLABS_API_KEY` are injected at runtime and are never sent to the browser.

## Local Development (without Docker)

```bash
# Backend
cd oracle
npm install
npm run dev   # starts on PORT (default 3000, override with PORT=5000)

# Frontend (separate terminal)
cd client
npm install
npm run dev   # starts on port 3000
```

When running without Docker, create a `.env` file in the repository root or set the variables in your shell.

## Container Images (GHCR)

Images are published automatically on pushes to `main` and version tags:

| Image | Tag examples |
|---|---|
| `ghcr.io/agentic2026/hackcanada` | `client-latest`, `client-<sha>` |
| `ghcr.io/agentic2026/hackcanada` | `oracle-latest`, `oracle-<sha>` |

Semver tags (e.g. `v1.2.3`) also produce `client-1.2.3` / `oracle-1.2.3` variants.

## Known Limitations

The frontend references several backend endpoints (`/api/budget-insights`, `/api/compare-insights`, `/api/market-analysis`, `/api/mortgage-advisor`) that are **not yet implemented** in the oracle service. These endpoints will return 404 until the corresponding backend features are built. This is a product-scope gap, not a packaging issue.