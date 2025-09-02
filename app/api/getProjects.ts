import api from '~/lib/axios';
import type { Projects } from '~/types';

// fetch all projects
export async function getProjects(): Promise<Projects[]> {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BACKEND_URL}/projects`
    );
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
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
