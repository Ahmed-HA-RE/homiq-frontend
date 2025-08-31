import Hero from '~/components/Hero';
import Navbar from '~/components/Navbar';
import { ImagePath } from '~/enums';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '~/api/getProjects';
import ProjectCard from '~/components/ProjectsCard';
import Spinner from '~/components/Spinner';

const ProjectsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects', { type: 'All' }],
    queryFn: getProjects,
  });

  return (
    <>
      <header>
        <Navbar />
        <Hero
          image={ImagePath.HEADER_projects}
          ctaProjects={{ label: 'About Us', route: '/about' }}
          heading='Browse homes that fulfill your vision'
        />
      </header>

      <main className='p-6 bg-gray-200'>
        {isLoading && <Spinner />}
        {isError && (
          <div className='min-h-screen -mt-44 flex items-center justify-center'>
            <p className='text-2xl md:text-4xl text-white bg-red-300 py-3 px-4 rounded-lg'>
              No Projects Found Try Again Later 🙂
            </p>
          </div>
        )}
        <section className='mt-20'>
          <div className='max-w-7xl mx-auto'>
            {/* Intro */}
            <div className='mb-10 font-outfit text-center space-y-4'>
              <h2 className='text-gray-900 font-bold text-2xl md:text-4xl'>
                Explore Our Properties
              </h2>
              <p className='text-gray-600 w-full max-w-sm md:max-w-md text-center mx-auto md:text-lg'>
                Browse our collection of premium apartments and villas across
                Dubai, Abu Dhabi, and Sharjah. Find your dream home today.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6 items-center justify-center'>
              {data?.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
