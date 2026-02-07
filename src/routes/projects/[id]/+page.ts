import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    throw error(404, `Project "${params.id}" not found`);
  }

  return { project };
};
