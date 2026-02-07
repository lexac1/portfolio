<script lang="ts">
  import { projects } from '$lib/data/projects';
  import ProjectCard from './ProjectCard.svelte';

  type FilterType = 'all' | 'production' | 'development' | 'planning';
  let activeFilter: FilterType = 'all';

  $: filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.status === activeFilter);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'production', label: 'Production' },
    { key: 'development', label: 'In Progress' },
    { key: 'planning', label: 'Planning' }
  ];
</script>

<section id="projects" class="py-24 bg-gray-950">
  <div class="max-w-6xl mx-auto px-6">
    <div class="mb-16">
      <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
      <p class="text-gray-500">Building tools and systems that matter</p>
    </div>

    <!-- Filter Tabs -->
    <div class="flex gap-2 mb-10 flex-wrap">
      {#each filters as filter}
        <button
          on:click={() => activeFilter = filter.key}
          class="px-4 py-2 text-sm font-medium rounded transition-colors {activeFilter === filter.key
            ? 'bg-blue-600 text-white'
            : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-300 border border-gray-800'}"
        >
          {filter.label}
        </button>
      {/each}
    </div>

    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredProjects as project (project.id)}
        <ProjectCard {project} />
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div class="text-center py-16 text-gray-500">
        No projects found for this filter.
      </div>
    {/if}
  </div>
</section>
