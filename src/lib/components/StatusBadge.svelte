<script lang="ts">
  export let status: 'production' | 'development' | 'planning';

  const statusConfig = {
    production: {
      label: 'Production',
      class: 'bg-green-600/20 text-green-400 border-green-600/50'
    },
    development: {
      label: 'In Progress',
      class: 'bg-blue-600/20 text-blue-400 border-blue-600/50'
    },
    planning: {
      label: 'Planning',
      class: 'bg-gray-600/20 text-gray-400 border-gray-600/50'
    }
  };

  const config = statusConfig[status];
</script>

<span class="text-xs font-semibold px-3 py-1 rounded border uppercase tracking-wider {config.class}">
  {config.label}
</span>
