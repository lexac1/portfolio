<script lang="ts">
  import type { ProjectMetric } from '$lib/data/projects';
  import { Package, CheckCircle, User, Clock, TrendingUp, List, Database, Search, Zap, Check, Wrench, FileText, PenTool, Layout, Calendar, Flag } from 'lucide-svelte';

  let { metrics }: { metrics: ProjectMetric[] } = $props();

  const iconMap: Record<string, typeof Package> = {
    'package': Package,
    'check-circle': CheckCircle,
    'check': Check,
    'user': User,
    'clock': Clock,
    'trending-up': TrendingUp,
    'list': List,
    'database': Database,
    'search': Search,
    'zap': Zap,
    'wrench': Wrench,
    'file': FileText,
    'pen-tool': PenTool,
    'layout': Layout,
    'calendar': Calendar,
    'flag': Flag
  };

  function getIcon(iconName: string | undefined) {
    if (iconName && iconMap[iconName]) return iconMap[iconName];
    if (iconName === '[]') return Package;
    return CheckCircle;
  }
</script>

<section class="border-b border-dark-border bg-gray-950/50">
  <div class="max-w-5xl mx-auto px-6 py-8">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {#each metrics as metric}
        {@const IconComponent = getIcon(metric.icon)}
        <div class="text-center">
          <div class="flex items-center justify-center mb-2 text-dark-accent">
            <IconComponent size={20} />
          </div>
          <div class="text-2xl font-bold mb-1">{metric.value}</div>
          <div class="text-xs text-dark-subtle uppercase tracking-wider">{metric.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
