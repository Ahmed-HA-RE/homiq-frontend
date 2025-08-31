import api from '~/lib/axios';

export async function getProjects() {
  try {
    const { data } = await api.get('/api/projects');
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
