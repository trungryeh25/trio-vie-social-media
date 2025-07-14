# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY apps/backend ./apps/backend
COPY packages ./packages
COPY tsconfig.* ./

RUN npm install

# Build NestJS
RUN npm run build --workspace=apps/backend

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/package.json ./package.json
COPY --from=builder /app/packages ./packages

RUN npm install --omit=dev

EXPOSE 3001

CMD ["node", "dist/main"]
