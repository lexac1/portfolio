# Portfolio Deployment Guide

## Prerequisites
- Portfolio code in `/Users/lexhomeserver/Projects/apps/portfolio` on Mac Mini
- Caddy running in homeserver docker-compose stack
- mkcert certificates for `.home` domain

## Deployment Steps

### 1. Build and Start Container (on Mac Mini)

```bash
cd /Users/lexhomeserver/Projects/apps/portfolio
/usr/local/bin/docker build -t portfolio .
/usr/local/bin/docker stop portfolio 2>/dev/null || true
/usr/local/bin/docker rm portfolio 2>/dev/null || true
/usr/local/bin/docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 3002:3000 \
  --network homeserver \
  portfolio
```

### 2. Add Caddy Route

Add this to `/Users/lexhomeserver/Projects/homeserver/Caddyfile`:

```
portfolio.home {
    reverse_proxy localhost:3002
    tls /certs/portfolio.home.pem /certs/portfolio.home-key.pem
}
```

### 3. Generate mkcert Certificate

```bash
cd /Users/lexhomeserver/Projects/homeserver/certs
mkcert portfolio.home
```

### 4. Restart Caddy

```bash
/usr/local/bin/docker restart caddy
```

### 5. Test

```bash
curl -I https://portfolio.home
# Or open in browser: https://portfolio.home
```

## Alternative: Add to docker-compose.yml

Add this service to `/Users/lexhomeserver/Projects/homeserver/docker-compose.yml`:

```yaml
  portfolio:
    build: /Users/lexhomeserver/Projects/apps/portfolio
    container_name: portfolio
    restart: unless-stopped
    ports:
      - "3002:3000"
    environment:
      - NODE_ENV=production
    networks:
      - homeserver
```

Then run:

```bash
cd /Users/lexhomeserver/Projects/homeserver
/usr/local/bin/docker compose build portfolio
/usr/local/bin/docker compose up -d portfolio
```

## Troubleshooting

**Check if container is running:**
```bash
/usr/local/bin/docker ps | grep portfolio
```

**View logs:**
```bash
/usr/local/bin/docker logs -f portfolio
```

**Test port locally:**
```bash
curl http://localhost:3002
```

**Check Caddy config:**
```bash
/usr/local/bin/docker exec caddy caddy validate --config /etc/caddy/Caddyfile
```
