import api from '~/lib/axios';
import {
  projectSchema,
  type Project,
  pagenatedProjects,
  type PaginatedProjects,
} from '~/schema/projectsSchema';
import z from 'zod';

const projectsSchema = z.array(projectSchema);

// fetch all projects
export async function getProjects(): Promise<Project[]> {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BACKEND_URL}/projects`
    );

    const parsed = projectsSchema.parse(data);
    console.log(parsed);
    return parsed;
  } catch (error: any) {
    throw new Error('Something went Wrong');
  }
}

export async function getPaginatedProjects(
  limit: number,
  page: number
): Promise<PaginatedProjects> {
  try {
    const { data } = await api.get(
      `/projects/paginate?limit=${limit.toString()}&page=${page.toString()}`
    );
    const parsed = pagenatedProjects.parse(data);
    return parsed;
  } catch (error: any) {
    throw new Error('Something went Wrong');
  }
}

// fetch latest projects
export async function getLatestProjects(): Promise<Project[]> {
  try {
    const { data } = await api.get('/projects/latest');
    return data;
  } catch (error: any) {
    throw new Error('Something went Wrong');
  }
}
