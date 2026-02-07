<script lang="ts">
  import type { Project } from '$lib/data/projects';
  import StatusBadge from './StatusBadge.svelte';
  import TechBadge from './TechBadge.svelte';

  export let project: Project;
</script>

<div class="bg-gray-900 border border-gray-800 rounded-lg p-7 hover:border-blue-600 hover:bg-black transition-all h-full flex flex-col">
  <div class="flex justify-between items-start gap-4 mb-4">
    <div>
      <h3 class="text-xl font-semibold mb-1">{project.name}</h3>
      <p class="text-xs text-gray-600">{project.tagline}</p>
    </div>
    <StatusBadge status={project.status} />
  </div>

  <p class="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>
  <p class="text-xs text-gray-700 mb-4 pb-4 border-b border-gray-800">{project.metrics}</p>

  <div class="flex flex-wrap gap-2 mb-5">
    {#each project.tech as tech}
      <TechBadge {tech} />
    {/each}
  </div>

  <div class="flex gap-3 mt-auto">
    {#if project.links.demo}
      <a href={project.links.demo} class="text-blue-500 text-xs font-medium hover:text-blue-400 transition-colors">
        View Demo →
      </a>
    {/if}
    {#if project.links.github}
      <a href={project.links.github} class="text-gray-500 text-xs font-medium hover:text-gray-400 transition-colors">
        GitHub →
      </a>
    {/if}
  </div>
</div>
