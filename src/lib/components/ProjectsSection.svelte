<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
</script>

<section id="projects" class="py-24 bg-gray-950">
  <div class="max-w-5xl mx-auto px-6">
    <div class="mb-16">
      <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
      <p class="text-gray-500">Building tools and systems that matter</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>
