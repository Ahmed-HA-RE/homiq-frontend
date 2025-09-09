import ProjectDetails from '~/components/ProjectDetails';
import type { Projects } from '../../types';
import type { Route } from './+types/details';
import api from '~/lib/axios';
import Footer from '~/components/ui/Footer';

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
      <main className='p-4 pt-30 bg-gray-200'>
        <section className='mt-10 max-w-7xl mx-auto'>
          <h1 className='text-center text-4xl md:text-5xl font-medium'>
            Project{' '}
            <span className='underline-offset-4 underline decoration-1 font-extralight'>
              Details
            </span>
          </h1>
          <ProjectDetails project={project} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
