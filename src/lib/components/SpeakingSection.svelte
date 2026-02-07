<script lang="ts">
  import { topics } from '$lib/data/projects';
</script>

<section id="speaking" class="py-24 bg-gray-950">
  <div class="max-w-5xl mx-auto px-6">
    <div class="mb-16">
      <h2 class="text-4xl font-bold mb-4">Speaking & Writing</h2>
      <p class="text-gray-500">Sharing knowledge about AI infrastructure and durable systems</p>
    </div>

    <div class="bg-gray-900 border border-gray-800 rounded-lg p-10">
      <p class="text-sm text-gray-400 mb-8 leading-relaxed">
        I speak at conferences and meetups about building AI-native systems, durable workflows, and infrastructure that amplifies human capability.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {#each topics as topic}
          <div class="bg-gray-800 p-5 rounded border-l-2 border-blue-600">
            <h4 class="font-semibold mb-2 text-white">{topic.title}</h4>
            <p class="text-xs text-gray-500">{topic.description}</p>
          </div>
        {/each}
      </div>

      <p class="text-xs text-gray-400">
        ✉️ <a href="mailto:hello@lex.dev" class="text-blue-500 hover:text-blue-400">hello@lex.dev</a> for speaking opportunities
      </p>
    </div>
  </div>
</section>
