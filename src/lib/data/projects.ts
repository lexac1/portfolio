export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'production' | 'development' | 'planning';
  tech: string[];
  metrics: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'wlos-web',
    name: 'WLOS Web',
    tagline: 'Whole Life Operating System',
    description: 'Comprehensive life management with 12 integrated modules. Track tasks, habits, goals, health, and more in one unified platform.',
    status: 'production',
    tech: ['SvelteKit', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    metrics: '12 modules • Production since 2025',
    links: { demo: 'http://wlos.home', github: 'https://github.com/lexac1/wlos' }
  },
  {
    id: 'wlos-ios',
    name: 'WLOS iOS',
    tagline: 'Native Life OS Companion',
    description: 'Native Swift iOS app providing mobile-first access to your life operating system. Real-time sync, offline support, and optimized Touch ID integration.',
    status: 'development',
    tech: ['Swift', 'SwiftData', 'SwiftUI', 'Tailscale'],
    metrics: '47% complete • 196/411 stories',
    links: { github: 'https://github.com/lexac1/wlos-ios' }
  },
  {
    id: 'vector-search',
    name: 'WLOS Vector Search',
    tagline: 'Semantic Search Over Life Data',
    description: 'Semantic search engine using embeddings to find related tasks, journals, and life data by meaning rather than keywords. Powered by Claude embeddings and pgvector.',
    status: 'production',
    tech: ['Python', 'PostgreSQL', 'pgvector', 'Claude API'],
    metrics: '26K+ embeddings • Semantic search',
    links: { github: 'https://github.com/lexac1/wlos' }
  },
  {
    id: 'wlos-mcp',
    name: 'WLOS MCP Server',
    tagline: 'Claude Integration for WLOS',
    description: 'Model Context Protocol server exposing WLOS data to Claude, enabling AI-powered analysis, insights, and suggestions across your life operating system.',
    status: 'production',
    tech: ['TypeScript', 'Bun', 'MCP', 'Claude API'],
    metrics: 'Full WLOS API bridge • Real-time sync',
    links: { github: 'https://github.com/lexac1/wlos-mcp-server' }
  },
  {
    id: 'claude-remote',
    name: 'Claude Remote',
    tagline: 'Browser Interface for Claude CLI',
    description: 'Web-based terminal interface for Claude CLI with real-time streaming output, syntax highlighting, and command history. Minimal dependencies, pure HTML/CSS/JS.',
    status: 'production',
    tech: ['Node.js', 'WebSockets', 'HTML5', 'CSS3'],
    metrics: 'Lightweight • Cross-platform',
    links: { github: 'https://github.com/lexac1/claude-remote' }
  },
  {
    id: 'youtube-filter',
    name: 'YouTube Filter',
    tagline: 'AI-Curated Video Discovery',
    description: 'Self-hosted YouTube client with AI-powered content filtering, watch history analysis, and recommendation control. Replace the YouTube algorithm with intelligence.',
    status: 'planning',
    tech: ['SvelteKit', 'YouTube API', 'Claude API', 'PostgreSQL'],
    metrics: 'Design phase',
    links: { github: 'https://github.com/lexac1/youtube-filter' }
  }
];

export const topics = [
  {
    title: 'AI Agent Orchestration',
    description: 'Multi-agent systems, coordination patterns, and scaling intelligent workflows'
  },
  {
    title: 'Durable AI Workflows',
    description: 'Reliability patterns, fallback strategies, and building trustworthy systems'
  },
  {
    title: 'Personal Infrastructure',
    description: 'Building AI-native systems that put users in control of their data'
  },
  {
    title: 'Semantic Knowledge',
    description: 'RAG systems, embeddings, and retrieval-augmented generation patterns'
  }
];
