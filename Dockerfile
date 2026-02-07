FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun:1
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
EXPOSE 3000
ENV NODE_ENV=production
CMD ["bun", "run", "build/index.js"]
