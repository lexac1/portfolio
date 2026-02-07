<script lang="ts">
  import type { Screenshot } from '$lib/data/projects';
  import { ChevronLeft, ChevronRight, X, Image } from 'lucide-svelte';

  let { screenshots, projectId, projectName }: {
    screenshots: Screenshot[];
    projectId: string;
    projectName: string;
  } = $props();

  let currentIndex = $state(0);
  let lightboxOpen = $state(false);
  let imageErrors = $state<Record<string, boolean>>({});

  function next() {
    currentIndex = (currentIndex + 1) % screenshots.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  }

  function openLightbox(index: number) {
    currentIndex = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function handleImageError(id: string) {
    imageErrors = { ...imageErrors, [id]: true };
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }

  const placeholderColors = [
    'from-blue-900/40 to-purple-900/40',
    'from-purple-900/40 to-pink-900/40',
    'from-teal-900/40 to-blue-900/40',
    'from-indigo-900/40 to-violet-900/40',
    'from-cyan-900/40 to-blue-900/40',
    'from-violet-900/40 to-purple-900/40',
    'from-blue-900/40 to-indigo-900/40',
    'from-pink-900/40 to-rose-900/40'
  ];

  function getImagePath(screenshot: Screenshot): string {
    return `/screenshots/${projectId}/${screenshot.filename}`;
  }

  function showPlaceholder(screenshot: Screenshot): boolean {
    return imageErrors[screenshot.id] === true;
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section>
  <h2 class="text-2xl font-bold mb-6">Screenshots</h2>

  {#if screenshots.length === 0}
    <p class="text-dark-subtle text-sm">No screenshots available yet.</p>
  {:else}
    <!-- Thumbnail Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {#each screenshots as screenshot, i}
        <button
          onclick={() => openLightbox(i)}
          class="group relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-blue-600 transition-colors cursor-pointer"
        >
          {#if showPlaceholder(screenshot)}
            <div class="absolute inset-0 bg-gradient-to-br {placeholderColors[i % placeholderColors.length]} flex items-center justify-center">
              <div class="text-center">
                <Image size={32} class="mx-auto mb-2 text-gray-500" />
                <span class="text-xs text-gray-500">{screenshot.title}</span>
              </div>
            </div>
          {:else}
            <img
              src={getImagePath(screenshot)}
              alt={screenshot.title}
              loading="lazy"
              class="w-full h-full object-cover"
              onerror={() => handleImageError(screenshot.id)}
            />
          {/if}
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
            <div class="p-3 w-full opacity-0 group-hover:opacity-100 transition-opacity">
              <p class="text-xs font-medium text-white">{screenshot.title}</p>
            </div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Lightbox Overlay -->
    {#if lightboxOpen}
      <div
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label="Screenshot viewer"
      >
        <!-- Close Button -->
        <button
          onclick={closeLightbox}
          class="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <!-- Previous Button -->
        <button
          onclick={prev}
          class="absolute left-6 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
          aria-label="Previous screenshot"
        >
          <ChevronLeft size={32} />
        </button>

        <!-- Main Image -->
        <div class="max-w-4xl w-full mx-16 text-center">
          {#if showPlaceholder(screenshots[currentIndex])}
            <div class="aspect-video rounded-lg bg-gradient-to-br {placeholderColors[currentIndex % placeholderColors.length]} flex items-center justify-center border border-gray-700">
              <div class="text-center">
                <Image size={64} class="mx-auto mb-4 text-gray-500" />
                <p class="text-gray-400 text-lg">{screenshots[currentIndex].title}</p>
                <p class="text-gray-600 text-sm mt-2">Screenshot coming soon</p>
              </div>
            </div>
          {:else}
            <img
              src={getImagePath(screenshots[currentIndex])}
              alt={screenshots[currentIndex].title}
              class="w-full rounded-lg"
              onerror={() => handleImageError(screenshots[currentIndex].id)}
            />
          {/if}
          <div class="mt-4">
            <h3 class="text-lg font-semibold">{screenshots[currentIndex].title}</h3>
            <p class="text-sm text-gray-400 mt-1">{screenshots[currentIndex].description}</p>
            <p class="text-xs text-gray-600 mt-3">{currentIndex + 1} / {screenshots.length}</p>
          </div>
        </div>

        <!-- Next Button -->
        <button
          onclick={next}
          class="absolute right-6 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
          aria-label="Next screenshot"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    {/if}
  {/if}
</section>
