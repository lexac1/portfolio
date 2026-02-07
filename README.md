# Portfolio

Personal portfolio website showcasing the WLOS ecosystem and speaking topics.

![Portfolio](https://img.shields.io/badge/Status-Production-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4)

## Overview

A production-ready portfolio website built with **SvelteKit** and **Tailwind CSS** showcasing 6 WLOS ecosystem projects:

- **WLOS Web** - Whole Life Operating System (Production)
- **WLOS iOS** - Native mobile companion (Development)
- **WLOS Vector Search** - Semantic knowledge retrieval (Production)
- **WLOS MCP Server** - Claude integration (Production)
- **Claude Remote** - Browser terminal interface (Production)
- **YouTube Filter** - AI-curated video discovery (Planning)

Features include project filtering, responsive design, speaking section, and professional dark theme with blue/purple accents.

## Features

✨ **Project Showcase**
- All 6 WLOS ecosystem projects with detailed cards
- Status badges (Production/Development/Planning)
- Tech stack display with color-coded badges
- Direct links to GitHub repositories and live demos

🎯 **Filtering System**
- Filter projects by status (All/Production/In Progress/Planning)
- Smooth transitions and active state indicators
- Real-time filtering with no page reload

📱 **Responsive Design**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: Single column with optimized spacing
- Touch-friendly buttons and navigation

🌙 **Dark Theme**
- Professional dark aesthetic (gray-900, gray-950 backgrounds)
- Blue/purple accent colors for visual hierarchy
- High contrast text for readability
- Smooth color transitions

🎤 **Speaking Section**
- Conference topics and areas of expertise
- Contact CTA for speaking engagements
- Professional narrative

📖 **About & Contact**
- Professional bio (3 paragraphs)
- Tech stack summary
- Contact links (Email, GitHub, LinkedIn, Twitter)

## Quick Start

### Development

```bash
cd ~/Projects/apps/portfolio
bun install
bun run dev
```

Open http://localhost:5173 in your browser.

### Production Build

```bash
bun run build
bun run preview
```

### Docker Deployment

```bash
# Build image
docker build -t portfolio .

# Run locally
docker run -p 3000:3000 portfolio

# Deploy to Mac Mini
ssh mac-mini-server "cd ~/Projects/apps/portfolio && \
  /usr/local/bin/docker build -t portfolio . && \
  /usr/local/bin/docker run -d --name portfolio \
  --restart unless-stopped -p 3002:3000 \
  --network homeserver_default portfolio"
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Header.svelte          # Fixed navigation
│   │   ├── Hero.svelte            # Hero section
│   │   ├── ProjectCard.svelte     # Individual project card
│   │   ├── ProjectGrid.svelte     # Grid with filtering
│   │   ├── StatusBadge.svelte     # Status indicator
│   │   ├── TechBadge.svelte       # Tech stack badge
│   │   ├── SpeakingSection.svelte # Speaking topics
│   │   ├── AboutSection.svelte    # Bio section
│   │   └── Footer.svelte          # Footer
│   └── data/
│       └── projects.ts            # Project data (6 projects)
├── routes/
│   ├── +page.svelte               # Main portfolio page
│   └── +layout.svelte             # Root layout
└── app.css                        # Tailwind directives
```

## Tech Stack

**Frontend:**
- **SvelteKit 2.0** - Full-stack framework
- **Svelte 5** - Reactive components with runes
- **Tailwind CSS 4.0** - Utility-first styling
- **TypeScript 5** - Type safety

**Build & Deploy:**
- **Vite 7** - Lightning-fast build tool
- **Bun** - Package manager and runtime
- **Docker** - Multi-stage containerization
- **OrbStack** - Docker desktop on Mac Mini

**Infrastructure:**
- **Caddy** - HTTPS reverse proxy
- **mkcert** - Local HTTPS certificates
- **Tailscale** - Secure mesh network

## Configuration

### Environment

No environment variables required. All configuration is in source code:

- **projects.ts** - Project data and metadata
- **tailwind.config.js** - Theme colors and spacing
- **svelte.config.js** - SvelteKit adapter configuration

### Customization

**Add a new project:**

1. Edit `src/lib/data/projects.ts`
2. Add object to the `projects` array:

```typescript
{
  id: 'project-slug',
  name: 'Project Name',
  tagline: 'Brief description',
  description: 'Detailed description (2-3 sentences)',
  status: 'production' | 'development' | 'planning',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  metrics: 'Key metrics/progress',
  links: {
    demo?: 'https://...',
    github?: 'https://...'
  }
}
```

**Modify colors:**

Edit `tailwind.config.js`:
```javascript
theme: {
  colors: {
    blue: { 600: '#...' },     // Primary
    purple: { 600: '#...' },   // Accent
    // ... status colors (green, blue, gray)
  }
}
```

**Change hero content:**

Edit `src/lib/components/Hero.svelte` and `AboutSection.svelte`.

## Deployment

### Live Deployment

Portfolio is deployed to Mac Mini homeserver and accessible via:

```
https://portfolio.home
```

Tailscale network required for access.

### Deployment Steps

1. **Build Docker image** (on Mac Mini):
   ```bash
   cd ~/Projects/apps/portfolio
   /usr/local/bin/docker build -t portfolio .
   ```

2. **Start container**:
   ```bash
   /usr/local/bin/docker stop portfolio 2>/dev/null || true
   /usr/local/bin/docker rm portfolio 2>/dev/null || true
   /usr/local/bin/docker run -d \
     --name portfolio \
     --restart unless-stopped \
     -p 3002:3000 \
     --network homeserver_default \
     portfolio
   ```

3. **Configure Caddy** (in `/Users/lexhomeserver/Projects/homeserver/Caddyfile`):
   ```
   portfolio.home {
       tls /certs/portfolio.home.pem /certs/portfolio.home-key.pem
       reverse_proxy portfolio:3000
   }
   ```

4. **Generate certificate**:
   ```bash
   cd ~/Projects/homeserver/certs
   mkcert portfolio.home
   ```

5. **Restart Caddy**:
   ```bash
   /usr/local/bin/docker restart caddy
   ```

6. **Verify**:
   ```bash
   curl -I https://portfolio.home
   ```

See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

## Development

### Commands

```bash
# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type check
bun run check

# Lint
bun run lint

# Format
bun run format
```

### File Size Constraints

Following AI-CODING-GUIDE best practices:
- **Components:** Max 150 lines per `.svelte` file
- **Data files:** Max 200 lines for `projects.ts`
- **API routes:** Keep simple, delegate complexity
- **Stores:** Use Svelte stores for client-side state only

### Component Pattern

Each component follows this structure:

```svelte
<script lang="ts">
  // Props with type definitions
  export let project: Project;
  // Reactive declarations
  let isHovered = false;
  // Lifecycle
  // Reactivity
</script>

<div>
  <!-- Template -->
</div>

<style>
  /* Scoped styles (optional, use Tailwind instead) */
</style>
```

## Design System

**Color Palette:**
- **Background:** `bg-gray-950`, `bg-gray-900`
- **Primary:** `text-blue-600`, `bg-blue-500/20`
- **Accent:** `text-purple-600`, `bg-purple-500/20`
- **Status:** Green (production), Blue (development), Gray (planning)
- **Text:** `text-white` (headings), `text-gray-400` (body)

**Typography:**
- **Heading 1:** `text-6xl font-bold tracking-tight`
- **Heading 2:** `text-4xl font-bold`
- **Heading 3:** `text-xl font-semibold`
- **Body:** `text-sm text-gray-400`
- **Caption:** `text-xs text-gray-600`

**Spacing:**
- **Sections:** `py-24` (96px)
- **Cards:** `p-7` (28px internal)
- **Gap:** `gap-6` (24px)

## Performance

**Network:**
- Production: ~17 requests, ~115 KB total
- Load time: <1 second (avg 66ms per request)
- No external CDNs (all self-hosted)

**Bundle Size:**
- Client: ~40 KB gzip
- Server: ~80 KB

**Optimizations:**
- Static HTML generation (SvelteKit adapter-node)
- CSS minification (Tailwind purge)
- Font subsetting (system fonts only)
- No JavaScript frameworks loaded on client (minimal hydration)

## Browser Support

- **Modern browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** iOS 15+, Android 8+
- **No IE support**

## Monitoring

### Health Checks

```bash
# Check if container is running
docker ps | grep portfolio

# View logs
docker logs -f portfolio

# Check port
curl http://localhost:3002

# HTTPS test
curl -I https://portfolio.home
```

### Metrics

- Uptime: monitored via Uptime Kuma
- Error tracking: Browser console (no external service)
- Performance: Caddy access logs

## Roadmap

### Phase 2: Enhanced Project Showcase (Planned)

- [ ] Project detail pages at `/projects/[id]`
- [ ] Screenshot galleries with lightbox
- [ ] Expanded tech stack descriptions
- [ ] Project feature lists
- [ ] Feature comparison matrix
- [ ] Video demos (GIFs or embeds)
- [ ] Public domain hosting option

### Phase 3: Interactive Features

- [ ] Blog section (technical articles)
- [ ] Speaking engagements calendar
- [ ] Testimonials/case studies
- [ ] Newsletter signup
- [ ] Dark/light theme toggle
- [ ] Search functionality

### Phase 4: Analytics

- [ ] Page view tracking
- [ ] Project click tracking
- [ ] Search analytics
- [ ] Geographic distribution
- [ ] Referrer tracking

## Contributing

This is a personal portfolio, but feel free to submit issues or suggest improvements via GitHub.

## License

MIT - See LICENSE file for details

## Author

Built by Lex (@lexac1)

- **Email:** hello@lex.dev
- **GitHub:** https://github.com/lexac1
- **Twitter:** @lexac1
- **LinkedIn:** linkedin.com/in/lex

## Acknowledgments

- SvelteKit for the excellent framework
- Tailwind CSS for styling utilities
- Vercel Labs for reference architecture patterns
- My WLOS ecosystem projects for the content

---

**Status:** Production Live at https://portfolio.home

For deployment questions or updates, see [DEPLOY.md](./DEPLOY.md) and [PHASE1-COMPLETE.md](./PHASE1-COMPLETE.md).
