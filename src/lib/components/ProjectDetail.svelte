<script lang="ts">
  import type { Project } from '$lib/data/projects';
  import StatusBadge from './StatusBadge.svelte';
  import TechBadge from './TechBadge.svelte';
  import ScreenshotGallery from './ScreenshotGallery.svelte';
  import FeatureList from './FeatureList.svelte';
  import TechDetails from './TechDetails.svelte';
  import MetricsBar from './MetricsBar.svelte';
  import { ArrowLeft } from 'lucide-svelte';

  let { project }: { project: Project } = $props();
</script>

<div class="min-h-screen bg-dark-bg text-dark-text">
  <!-- Navigation -->
  <nav class="border-b border-dark-border bg-dark-bg/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 text-dark-subtle hover:text-white transition-colors text-sm font-medium">
        <ArrowLeft size={16} />
        Back to Portfolio
      </a>
      <div class="text-lg font-bold">lex</div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-16 pb-12 border-b border-dark-border">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <h1 class="text-4xl sm:text-5xl font-bold">{project.name}</h1>
        <StatusBadge status={project.status} />
      </div>
      <p class="text-xl text-dark-subtle mb-6">{project.tagline}</p>
      <div class="flex flex-wrap gap-2 mb-8">
        {#each project.tech as tech}
          <TechBadge {tech} />
        {/each}
      </div>
      <div class="flex gap-4">
        {#if project.links.demo}
          <a href={project.links.demo} class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded transition-colors">
            View Demo
          </a>
        {/if}
        {#if project.links.github}
          <a href={project.links.github} class="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded border border-gray-700 transition-colors">
            GitHub
          </a>
        {/if}
        {#if project.links.docs}
          <a href={project.links.docs} class="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded border border-gray-700 transition-colors">
            Documentation
          </a>
        {/if}
      </div>
    </div>
  </section>

  <!-- Metrics Bar -->
  <MetricsBar metrics={project.detailedMetrics} />

  <!-- Main Content -->
  <div class="max-w-5xl mx-auto px-6 py-16 space-y-20">
    <!-- Overview -->
    <section>
      <h2 class="text-2xl font-bold mb-6">Overview</h2>
      <div class="prose prose-invert max-w-none">
        {#each project.longDescription.split('\n\n') as paragraph}
          <p class="text-gray-400 leading-relaxed mb-4">{paragraph}</p>
        {/each}
      </div>
    </section>

    <!-- Features -->
    <FeatureList features={project.features} />

    <!-- Screenshot Gallery -->
    <ScreenshotGallery screenshots={project.screenshots} projectId={project.id} projectName={project.name} />

    <!-- Tech Stack -->
    <TechDetails techStack={project.detailedTechStack} />
  </div>

  <!-- Footer -->
  <footer class="border-t border-dark-border py-8">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <a href="/" class="text-dark-subtle hover:text-white transition-colors text-sm">
        Back to all projects
      </a>
    </div>
  </footer>
</div>
