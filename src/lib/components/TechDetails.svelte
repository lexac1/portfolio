<script lang="ts">
  import type { TechCategory } from '$lib/data/projects';

  let { techStack }: { techStack: TechCategory[] } = $props();

  const categoryColors: Record<string, string> = {
    'Frontend': 'border-blue-600/30 bg-blue-600/5',
    'Backend': 'border-green-600/30 bg-green-600/5',
    'AI / ML': 'border-purple-600/30 bg-purple-600/5',
    'Infrastructure': 'border-cyan-600/30 bg-cyan-600/5',
    'Data Layer': 'border-amber-600/30 bg-amber-600/5',
    'Runtime': 'border-pink-600/30 bg-pink-600/5',
    'Protocol': 'border-violet-600/30 bg-violet-600/5',
    'Integration': 'border-teal-600/30 bg-teal-600/5'
  };

  const categoryHeaderColors: Record<string, string> = {
    'Frontend': 'text-blue-400',
    'Backend': 'text-green-400',
    'AI / ML': 'text-purple-400',
    'Infrastructure': 'text-cyan-400',
    'Data Layer': 'text-amber-400',
    'Runtime': 'text-pink-400',
    'Protocol': 'text-violet-400',
    'Integration': 'text-teal-400'
  };

  function getCategoryColor(category: string): string {
    return categoryColors[category] || 'border-gray-700/30 bg-gray-700/5';
  }

  function getHeaderColor(category: string): string {
    return categoryHeaderColors[category] || 'text-gray-400';
  }
</script>

<section>
  <h2 class="text-2xl font-bold mb-6">Technology Stack</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each techStack as category}
      <div class="rounded-lg border p-6 {getCategoryColor(category.category)}">
        <h3 class="text-sm font-semibold uppercase tracking-wider mb-4 {getHeaderColor(category.category)}">
          {category.category}
        </h3>
        <div class="space-y-4">
          {#each category.items as item}
            <div>
              <div class="text-sm font-medium text-gray-200 mb-1">{item.name}</div>
              <p class="text-xs text-gray-500 leading-relaxed">{item.reason}</p>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
