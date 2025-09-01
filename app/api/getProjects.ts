import api from '~/lib/axios';
import type { Projects } from '~/types';

// fetch all projects
export async function getProjects(date?: string): Promise<Projects[]> {
  const endpoint = date ? `/projects/${date}` : '/projects';
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// fetch limit projects
type getPaginatedProjectsReturn = {
  limit: number;
  page: number;
  pages: number;
  total: 6;
  projects: Projects[];
};

export async function getPaginatedProjects(
  limit: number,
  page: number
): Promise<getPaginatedProjectsReturn> {
  try {
    const { data } = await api.get(
      `/projects/paginate?limit=${limit.toString()}&page=${page.toString()}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// fetch latest projects
export async function getLatestProjects(): Promise<Projects[]> {
  try {
    const { data } = await api.get('/projects/latest');
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
