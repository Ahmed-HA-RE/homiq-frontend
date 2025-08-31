import api from '~/lib/axios';
import type { Projects } from '~/types';

export async function getProjects(): Promise<Projects[]> {
  try {
    const { data } = await api.get('/projects');
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
