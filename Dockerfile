# Stage 1: build
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./

# Install deps (ignore optional Cloudflare/Lovable-only packages)
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Stage 2: runtime (only the output)
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

EXPOSE 3000

ENV PORT=3000

CMD ["node", "dist/server/server.js"]
