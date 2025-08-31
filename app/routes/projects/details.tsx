// import type { Projects } from '../../types';
// import type { Route } from './+types';
// import api from '~/lib/axios';

// type LoaderReturn = {
//   project: Projects;
// };

// export async function loader({
//   params,
// }: Route.LoaderArgs): Promise<LoaderReturn> {
//   try {
//     const { id } = params;
//     const { data } = await api.get(`projects/${id}`);
//     return { project: data };
//   } catch (error) {
//     throw new Error('Failed to fetch project');
//   }
// }
