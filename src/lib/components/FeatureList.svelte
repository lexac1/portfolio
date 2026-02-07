<script lang="ts">
  import { CheckCircle } from 'lucide-svelte';

  let { features }: { features: string[] } = $props();
</script>

<section>
  <h2 class="text-2xl font-bold mb-6">Key Features</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each features as feature}
      <div class="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
        <div class="mt-0.5 text-green-400 shrink-0">
          <CheckCircle size={18} />
        </div>
        <p class="text-sm text-gray-300 leading-relaxed">{feature}</p>
      </div>
    {/each}
  </div>
</section>
