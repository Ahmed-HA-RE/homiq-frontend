import api from '~/lib/axios';
import type { Agents } from '~/types';

// fetch all the agents
export async function getAgents() {
  try {
    const { data } = await api.get('/agents');
    return data;
  } catch (error: any) {
    throw Error(error.message);
  }
}
