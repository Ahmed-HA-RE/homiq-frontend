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
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
