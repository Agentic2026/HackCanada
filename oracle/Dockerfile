# ── Stage 1: Install production dependencies ──────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev

# ── Stage 2: Production runtime ───────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

RUN addgroup --system --gid 1001 oracle && \
    adduser  --system --uid 1001 oracle

COPY --from=deps /app/node_modules ./node_modules
COPY --chown=oracle:oracle . .

USER oracle
EXPOSE 5000

HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:5000/health || exit 1

CMD ["node", "server.js"]
