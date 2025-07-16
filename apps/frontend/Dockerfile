# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY apps/frontend ./apps/frontend
COPY packages ./packages
COPY tsconfig.* ./

# Install deps (hoặc yarn install)
RUN npm install

# Build Next.js
RUN npm run build --workspace=apps/frontend

# Stage 2: Run
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/apps/frontend/.next ./.next
COPY --from=builder /app/apps/frontend/public ./public
COPY --from=builder /app/apps/frontend/package.json ./package.json
COPY --from=builder /app/packages ./packages

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
