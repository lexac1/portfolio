export interface Screenshot {
  id: string;
  title: string;
  description: string;
  filename: string;
}

export interface TechItem {
  name: string;
  reason: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
}

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
    docs?: string;
  };
  longDescription: string;
  features: string[];
  screenshots: Screenshot[];
  detailedTechStack: TechCategory[];
  detailedMetrics: ProjectMetric[];
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
    links: { demo: 'http://wlos.home', github: 'https://github.com/lexac1/wlos' },
    longDescription: `WLOS Web is a comprehensive life operating system built to centralize every aspect of personal management into a single, self-hosted platform. Rather than juggling dozens of SaaS tools, WLOS provides 12 tightly integrated modules covering tasks, habits, goals, health metrics, finances, journaling, projects, and more.

The system is designed around a personal-first philosophy: all data stays on your own infrastructure, synced across devices via Tailscale. The architecture prioritizes speed and reliability, with PostgreSQL handling structured life data and a reactive SvelteKit frontend delivering instant UI updates.

WLOS serves as the central hub of a larger ecosystem, with companion apps (iOS native client, vector search, MCP server) extending its capabilities. Every module is production-tested through daily personal use, making it a battle-hardened tool rather than a prototype.`,
    features: [
      'Task management with smart filters, recurring tasks, and priority sorting',
      'Habit tracking with streak counters and completion history',
      'Goal setting with milestone tracking and progress visualization',
      'Journal entries with rich text editing and mood tracking',
      'Health metrics dashboard for weight, sleep, and exercise',
      'Finance tracker with budgeting categories and trend analysis',
      'Project management with kanban boards and timeline views',
      'Calendar integration with unified event and task views'
    ],
    screenshots: [
      { id: 'dashboard', title: 'Dashboard Overview', description: 'Main dashboard showing key life metrics at a glance', filename: '01-dashboard.jpg' },
      { id: 'tasks', title: 'Task Management', description: 'Tasks module with filters, tags, and multiple view options', filename: '02-tasks.jpg' },
      { id: 'habits', title: 'Habit Tracker', description: 'Daily habit tracking with streak visualization', filename: '03-habits.jpg' },
      { id: 'journal', title: 'Journal', description: 'Rich text journal with mood tracking and search', filename: '04-journal.jpg' },
      { id: 'goals', title: 'Goals & Milestones', description: 'Goal tracking with milestone progress bars', filename: '05-goals.jpg' },
      { id: 'health', title: 'Health Dashboard', description: 'Health metrics with trend charts', filename: '06-health.jpg' },
      { id: 'projects', title: 'Project Orchestration', description: 'Real-time project dashboard with health, velocity, and shipping pipeline', filename: '07-projects.jpg' },
      { id: 'finance', title: 'Money Dashboard', description: 'Net worth tracking, budget planning, and financial overview', filename: '08-finance.jpg' }
    ],
    detailedTechStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'SvelteKit 2.0', reason: 'Full-stack framework with excellent DX and built-in routing, SSR, and API endpoints' },
          { name: 'Svelte 5', reason: 'Reactive components with Runes for fine-grained state management' },
          { name: 'Tailwind CSS', reason: 'Utility-first styling for rapid UI development with consistent design system' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { name: 'PostgreSQL 16', reason: 'Reliable relational database ideal for structured life data with complex queries' },
          { name: 'Bun', reason: 'Fast TypeScript runtime and package manager, replacing Node.js for better performance' }
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Docker', reason: 'Containerized deployment for reproducible builds and easy updates on homeserver' },
          { name: 'Tailscale', reason: 'Zero-config VPN for secure access to self-hosted services from anywhere' },
          { name: 'Caddy', reason: 'Automatic HTTPS reverse proxy with zero-config TLS certificate management' }
        ]
      }
    ],
    detailedMetrics: [
      { label: 'Modules', value: '12', icon: '[]' },
      { label: 'Status', value: 'Production', icon: 'check' },
      { label: 'Users', value: '1', icon: 'user' },
      { label: 'Uptime', value: '99.9%', icon: 'clock' }
    ]
  },
  {
    id: 'wlos-ios',
    name: 'WLOS iOS',
    tagline: 'Native Life OS Companion',
    description: 'Native Swift iOS app providing mobile-first access to your life operating system. Real-time sync, offline support, and optimized Touch ID integration.',
    status: 'development',
    tech: ['Swift', 'SwiftData', 'SwiftUI', 'Tailscale'],
    metrics: '47% complete • 196/411 stories',
    links: { github: 'https://github.com/lexac1/wlos-ios' },
    longDescription: `WLOS iOS is a native Swift companion app that brings the full power of the Whole Life Operating System to iPhone and iPad. Built from the ground up with SwiftUI and SwiftData, it provides a mobile-first experience that feels native to Apple's ecosystem while maintaining full data parity with the web platform.

The app implements offline-first architecture using SwiftData for local persistence, syncing with the WLOS backend over Tailscale when connectivity is available. This means you can capture tasks, log habits, and write journal entries anywhere, with changes merging seamlessly when you're back online.

Development follows a story-driven approach with 411 user stories organized across all WLOS modules. At 47% completion (196 stories done), the core task management, habit tracking, and journal modules are fully functional, with remaining work focused on health metrics, finance, and advanced features.`,
    features: [
      'Native SwiftUI interface optimized for iOS design patterns',
      'Offline-first architecture with SwiftData local persistence',
      'Real-time sync with WLOS backend via Tailscale VPN',
      'Touch ID and Face ID authentication for secure access',
      'Widget support for quick habit tracking and task views',
      'Deep linking between modules for fluid navigation',
      'Push notifications for task reminders and habit prompts'
    ],
    screenshots: [
      { id: 'home', title: 'Home Screen', description: 'iOS home view with quick access to all modules', filename: '01-home.jpg' },
      { id: 'tasks', title: 'Tasks', description: 'Native task list with swipe actions and filters', filename: '02-tasks.jpg' },
      { id: 'habits', title: 'Habits', description: 'Habit tracking with native iOS interactions', filename: '03-habits.jpg' },
      { id: 'journal', title: 'Journal', description: 'Journal entry with native text editing', filename: '04-journal.jpg' }
    ],
    detailedTechStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'SwiftUI', reason: 'Declarative UI framework for building native iOS interfaces with minimal boilerplate' },
          { name: 'Swift 6', reason: 'Modern language with strict concurrency checking for safe async operations' }
        ]
      },
      {
        category: 'Data Layer',
        items: [
          { name: 'SwiftData', reason: 'Apple\'s persistence framework for offline-first local storage with iCloud sync support' },
          { name: 'URLSession', reason: 'Native networking for API communication with WLOS backend' }
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Tailscale', reason: 'Secure VPN tunnel enabling direct connection to homeserver WLOS instance' },
          { name: 'Xcode Cloud', reason: 'CI/CD pipeline for automated testing and TestFlight distribution' }
        ]
      }
    ],
    detailedMetrics: [
      { label: 'Progress', value: '47%', icon: 'trending-up' },
      { label: 'Stories Done', value: '196', icon: 'check-circle' },
      { label: 'Total Stories', value: '411', icon: 'list' },
      { label: 'Modules', value: '12', icon: '[]' }
    ]
  },
  {
    id: 'vector-search',
    name: 'WLOS Vector Search',
    tagline: 'Semantic Search Over Life Data',
    description: 'Semantic search engine using embeddings to find related tasks, journals, and life data by meaning rather than keywords. Powered by Claude embeddings and pgvector.',
    status: 'production',
    tech: ['Python', 'PostgreSQL', 'pgvector', 'Claude API'],
    metrics: '26K+ embeddings • Semantic search',
    links: { github: 'https://github.com/lexac1/wlos' },
    longDescription: `WLOS Vector Search transforms the way you find information across your life data. Instead of relying on exact keyword matches, it uses semantic embeddings to understand the meaning behind your queries and surface related content across tasks, journal entries, goals, and notes.

The system processes all WLOS data through Claude's embedding API, converting text into high-dimensional vectors stored in PostgreSQL via the pgvector extension. When you search for "feeling overwhelmed with work deadlines," it finds related journal entries about stress, tasks with approaching due dates, and goals that might need reprioritization -- even if none of those records contain the word "overwhelmed."

With over 26,000 embeddings in production, the search engine covers years of life data and continues to grow as new content is created. The embedding pipeline runs incrementally, processing only new or updated records to keep the vector index fresh without full reprocessing.`,
    features: [
      'Semantic search across all WLOS modules using meaning, not keywords',
      'Claude embedding API for high-quality text vector representations',
      'pgvector integration for efficient nearest-neighbor vector queries',
      'Incremental embedding pipeline that processes only changed records',
      'Cross-module search connecting tasks, journals, goals, and notes',
      'Relevance scoring with configurable similarity thresholds'
    ],
    screenshots: [
      { id: 'search', title: 'Semantic Search', description: 'Search interface showing meaning-based results', filename: '01-search.jpg' },
      { id: 'results', title: 'Search Results', description: 'Cross-module results ranked by semantic similarity', filename: '02-results.jpg' },
      { id: 'embeddings', title: 'Embedding Stats', description: 'Dashboard showing embedding coverage and freshness', filename: '03-embeddings.jpg' }
    ],
    detailedTechStack: [
      {
        category: 'AI / ML',
        items: [
          { name: 'Claude Embeddings API', reason: 'High-quality text embeddings that capture nuanced semantic meaning' },
          { name: 'pgvector', reason: 'PostgreSQL extension for efficient vector similarity search with HNSW indexing' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { name: 'Python', reason: 'Batch processing pipeline for embedding generation and index management' },
          { name: 'PostgreSQL 16', reason: 'Unified database for both relational WLOS data and vector embeddings' }
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Docker', reason: 'Containerized deployment alongside WLOS services on homeserver' }
        ]
      }
    ],
    detailedMetrics: [
      { label: 'Embeddings', value: '26K+', icon: 'database' },
      { label: 'Modules Indexed', value: '8', icon: 'search' },
      { label: 'Query Speed', value: '<100ms', icon: 'zap' },
      { label: 'Status', value: 'Production', icon: 'check' }
    ]
  },
  {
    id: 'wlos-mcp',
    name: 'WLOS MCP Server',
    tagline: 'Claude Integration for WLOS',
    description: 'Model Context Protocol server exposing WLOS data to Claude, enabling AI-powered analysis, insights, and suggestions across your life operating system.',
    status: 'production',
    tech: ['TypeScript', 'Bun', 'MCP', 'Claude API'],
    metrics: 'Full WLOS API bridge • Real-time sync',
    links: { github: 'https://github.com/lexac1/wlos-mcp-server' },
    longDescription: `The WLOS MCP Server bridges the gap between your life data and AI intelligence by implementing Anthropic's Model Context Protocol. This allows Claude to directly query, analyze, and interact with your WLOS data during conversations, turning abstract life management questions into data-driven insights.

When you ask Claude "What did I accomplish this week?" or "Which habits am I falling behind on?", the MCP server fetches real data from WLOS, formats it for Claude's context window, and enables responses grounded in your actual life data rather than generic advice.

The server exposes the full WLOS API surface as MCP tools, including task CRUD operations, habit logging, journal queries, and metric retrieval. Built with Bun and TypeScript for maximum performance, it handles real-time data fetching with minimal latency between Claude's requests and WLOS responses.`,
    features: [
      'Full WLOS API exposure as MCP tools for Claude integration',
      'Real-time data fetching from tasks, habits, journals, and goals',
      'Structured tool definitions with Zod schema validation',
      'Task creation and updates directly from Claude conversations',
      'Habit logging and streak queries through natural language',
      'Journal search and analysis with semantic context'
    ],
    screenshots: [
      { id: 'tools', title: 'MCP Tools', description: 'Available MCP tools exposed to Claude', filename: '01-tools.jpg' },
      { id: 'query', title: 'Data Query', description: 'Claude querying WLOS data through MCP', filename: '02-query.jpg' },
      { id: 'response', title: 'AI Response', description: 'Claude providing insights from real WLOS data', filename: '03-response.jpg' }
    ],
    detailedTechStack: [
      {
        category: 'Runtime',
        items: [
          { name: 'Bun', reason: 'Fast TypeScript runtime with built-in tooling, replacing Node.js for better startup and throughput' },
          { name: 'TypeScript', reason: 'Type-safe implementation ensuring correct MCP tool definitions and API contracts' }
        ]
      },
      {
        category: 'Protocol',
        items: [
          { name: 'MCP (Model Context Protocol)', reason: 'Anthropic\'s standard protocol for connecting AI models to external data sources' },
          { name: 'Zod', reason: 'Runtime schema validation for MCP tool inputs ensuring data integrity' }
        ]
      },
      {
        category: 'Integration',
        items: [
          { name: 'WLOS REST API', reason: 'Direct HTTP integration with WLOS backend for real-time data access' },
          { name: 'Claude API', reason: 'Anthropic\'s API for AI-powered analysis of life data' }
        ]
      }
    ],
    detailedMetrics: [
      { label: 'MCP Tools', value: '15+', icon: 'wrench' },
      { label: 'API Coverage', value: '100%', icon: 'check-circle' },
      { label: 'Latency', value: '<50ms', icon: 'zap' },
      { label: 'Status', value: 'Production', icon: 'check' }
    ]
  },
  {
    id: 'claude-remote',
    name: 'Claude Remote',
    tagline: 'Browser Interface for Claude CLI',
    description: 'Web-based terminal interface for Claude CLI with real-time streaming output, syntax highlighting, and command history. Minimal dependencies, pure HTML/CSS/JS.',
    status: 'production',
    tech: ['Node.js', 'WebSockets', 'HTML5', 'CSS3'],
    metrics: 'Lightweight • Cross-platform',
    links: { github: 'https://github.com/lexac1/claude-remote' },
    longDescription: `Claude Remote provides a browser-based terminal interface for interacting with Claude CLI from any device on your network. Instead of SSH-ing into your development machine to run Claude commands, you open a web browser and get a full terminal experience with real-time streaming output.

The architecture is intentionally minimal: a Node.js server spawns Claude CLI processes and streams their output over WebSockets to a pure HTML/CSS/JS frontend. No frameworks, no build tools, no bundlers. This simplicity makes it easy to deploy, debug, and maintain on a homeserver.

Key features include ANSI color code support for Claude's formatted output, command history with up/down arrow navigation, and automatic reconnection if the WebSocket connection drops. The interface adapts to any screen size, making it usable from a phone, tablet, or desktop browser.`,
    features: [
      'Real-time streaming output from Claude CLI via WebSockets',
      'ANSI color code rendering for formatted terminal output',
      'Command history with keyboard navigation',
      'Automatic WebSocket reconnection on connection loss',
      'Responsive design for phone, tablet, and desktop',
      'Zero-framework frontend: pure HTML, CSS, and JavaScript',
      'Lightweight Node.js backend with minimal dependencies'
    ],
    screenshots: [
      { id: 'terminal', title: 'Terminal Interface', description: 'Browser-based terminal with Claude CLI output', filename: '01-terminal.jpg' },
      { id: 'streaming', title: 'Streaming Output', description: 'Real-time streaming with syntax highlighting', filename: '02-streaming.jpg' },
      { id: 'mobile', title: 'Mobile View', description: 'Responsive terminal on mobile device', filename: '03-mobile.jpg' }
    ],
    detailedTechStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'HTML5 / CSS3', reason: 'Zero-dependency frontend for maximum simplicity and portability' },
          { name: 'Vanilla JavaScript', reason: 'No framework overhead, direct DOM manipulation for terminal rendering' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { name: 'Node.js', reason: 'Lightweight server for process spawning and WebSocket management' },
          { name: 'WebSockets', reason: 'Full-duplex communication for real-time terminal streaming' }
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Docker', reason: 'Containerized for easy deployment on homeserver alongside other services' }
        ]
      }
    ],
    detailedMetrics: [
      { label: 'Dependencies', value: '3', icon: 'package' },
      { label: 'Bundle Size', value: '<10KB', icon: 'file' },
      { label: 'Latency', value: '<5ms', icon: 'zap' },
      { label: 'Status', value: 'Production', icon: 'check' }
    ]
  },
  {
    id: 'youtube-filter',
    name: 'YouTube Filter',
    tagline: 'AI-Curated Video Discovery',
    description: 'Self-hosted YouTube client with AI-powered content filtering, watch history analysis, and recommendation control. Replace the YouTube algorithm with intelligence.',
    status: 'planning',
    tech: ['SvelteKit', 'YouTube API', 'Claude API', 'PostgreSQL'],
    metrics: 'Design phase',
    links: { github: 'https://github.com/lexac1/youtube-filter' },
    longDescription: `YouTube Filter is a planned self-hosted YouTube client that replaces the platform's engagement-optimized algorithm with AI-powered content curation aligned to your actual interests and goals. Instead of being served content designed to maximize watch time, you define your learning goals and the system surfaces videos that advance them.

The core idea is simple: Claude analyzes video metadata, transcripts, and your watch history to score content on relevance to your stated interests rather than engagement metrics. You maintain control over your recommendation criteria, creating a feed that serves your growth rather than an ad platform's revenue targets.

The planned architecture uses SvelteKit for the frontend (matching the WLOS ecosystem), the YouTube Data API for content discovery, Claude for intelligent filtering, and PostgreSQL for storing preferences and watch history. The entire system runs on your homeserver, keeping your viewing data private.`,
    features: [
      'AI-powered content scoring based on your learning goals, not engagement',
      'Custom recommendation criteria that you define and control',
      'Watch history analysis to identify viewing patterns and preferences',
      'Transcript-based filtering for content quality assessment',
      'Channel reputation scoring based on historical content quality',
      'Self-hosted architecture keeping viewing data fully private',
      'Integration with WLOS for goal-aligned content suggestions'
    ],
    screenshots: [
      { id: 'feed', title: 'Curated Feed', description: 'AI-filtered video feed aligned to your interests', filename: '01-feed.jpg' },
      { id: 'filters', title: 'Filter Settings', description: 'Custom recommendation criteria configuration', filename: '02-filters.jpg' },
      { id: 'analysis', title: 'Content Analysis', description: 'AI scoring breakdown for individual videos', filename: '03-analysis.jpg' }
    ],
    detailedTechStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'SvelteKit', reason: 'Consistent with WLOS ecosystem for shared component patterns and styling' },
          { name: 'Tailwind CSS', reason: 'Rapid UI development matching existing design system' }
        ]
      },
      {
        category: 'AI / ML',
        items: [
          { name: 'Claude API', reason: 'Content analysis, transcript summarization, and relevance scoring' },
          { name: 'YouTube Data API', reason: 'Video metadata, channel info, and content discovery' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { name: 'PostgreSQL', reason: 'Watch history, preferences, and content scoring persistence' },
          { name: 'Bun', reason: 'Fast TypeScript runtime for API integration and background processing' }
        ]
      }
    ],
    detailedMetrics: [
      { label: 'Phase', value: 'Design', icon: 'pen-tool' },
      { label: 'Architecture', value: 'Planned', icon: 'layout' },
      { label: 'Target', value: 'Q2 2026', icon: 'calendar' },
      { label: 'Priority', value: 'Medium', icon: 'flag' }
    ]
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
