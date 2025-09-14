import api from '~/lib/axios';
import z from 'zod';
import { agentSchema, type AgentData } from '~/schema/agentsSchema';

const agentsSchema = z.array(agentSchema);

// fetch all the agents
export async function getAgents(): Promise<AgentData[]> {
  try {
    const { data } = await api.get('/agents');
    const parsed = agentsSchema.parse(data);
    return parsed;
  } catch (error: any) {
    throw Error(error.message);
  }
}
