<script lang="ts">
  import type { PageData } from './$types';
  import ProjectDetail from '$lib/components/ProjectDetail.svelte';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.project.name} | Lex Portfolio</title>
  <meta name="description" content={data.project.description} />
</svelte:head>

<ProjectDetail project={data.project} />
