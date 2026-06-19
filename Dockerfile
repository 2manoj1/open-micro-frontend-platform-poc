# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS app

ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable

WORKDIR /workspace

COPY . .

ARG APP_FILTER
ENV APP_FILTER=${APP_FILTER}

RUN pnpm install --frozen-lockfile
RUN pnpm --filter @micro-frontend/platform-sdk build
RUN pnpm --filter "${APP_FILTER}" build

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV APP_KIND=remote

CMD if [ "$APP_KIND" = "shell" ]; then \
      pnpm --filter "$APP_FILTER" start -H 0.0.0.0 -p "$PORT"; \
    else \
      pnpm --filter "$APP_FILTER" preview --host 0.0.0.0 --port "$PORT"; \
    fi
