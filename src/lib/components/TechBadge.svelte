<script lang="ts">
  export let tech: string;

  // Color mapping for common tech stacks
  const techColors: Record<string, string> = {
    'SvelteKit': 'bg-orange-600/20 text-orange-400 border-orange-600/30',
    'Swift': 'bg-red-600/20 text-red-400 border-red-600/30',
    'SwiftUI': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    'SwiftData': 'bg-purple-600/20 text-purple-400 border-purple-600/30',
    'PostgreSQL': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'TypeScript': 'bg-blue-700/20 text-blue-400 border-blue-700/30',
    'Python': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
    'Docker': 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
    'Bun': 'bg-pink-600/20 text-pink-400 border-pink-600/30',
    'Node.js': 'bg-green-600/20 text-green-400 border-green-600/30',
    'Tailwind CSS': 'bg-teal-600/20 text-teal-400 border-teal-600/30',
    'Claude API': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'pgvector': 'bg-indigo-600/20 text-indigo-400 border-indigo-600/30',
    'MCP': 'bg-violet-600/20 text-violet-400 border-violet-600/30',
    'WebSockets': 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    'HTML5': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'CSS3': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'YouTube API': 'bg-red-700/20 text-red-400 border-red-700/30',
    'Tailscale': 'bg-gray-600/20 text-gray-400 border-gray-600/30'
  };

  const colorClass = techColors[tech] || 'bg-gray-700/20 text-gray-400 border-gray-700/30';
</script>

<span class="text-xs font-medium px-2.5 py-1 rounded border {colorClass}">
  {tech}
</span>
