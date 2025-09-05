import ProjectDetails from '~/components/ProjectDetails';
import type { Projects } from '../../types';
import type { Route } from './+types/details';
import Navbar from '~/components/Navbar';
import api from '~/lib/axios';
import { Link } from 'react-router';

type LoaderReturn = {
  project: Projects;
};

export async function loader({
  params,
}: Route.LoaderArgs): Promise<LoaderReturn> {
  try {
    const { id } = params;
    const { data } = await api.get(`projects/${id}`);
    return { project: data };
  } catch (error) {
    throw new Error('Failed to fetch project');
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Project Details ' },
    {
      name: 'description',
      content:
        'Discover your dream home with Dream Homes Real Estate. Browse listings, explore properties, and find your perfect home today.',
    },
  ];
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <main className='p-4 pt-30 min-h-screen'>
        <section className='mt-10 max-w-7xl mx-auto'>
          <div className='flex flex-row justify-between items-center px-4'>
            <h1 className='text-center text-4xl md:text-5xl font-medium'>
              Project{' '}
              <span className='underline-offset-4 underline decoration-1 font-extralight'>
                Details
              </span>
            </h1>
            <Link
              className='flex justify-self-end bg-link text-white py-3 px-6 rounded hover:bg-secondary-link transition duration-200'
              to={'/projects'}
            >
              Back To Projects
            </Link>
          </div>
          <ProjectDetails project={project} />
        </section>
      </main>
    </>
  );
};

export default ProjectDetailsPage;
