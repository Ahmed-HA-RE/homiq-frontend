import CarouselSwiper from './ui/Carousel';
import { useQuery } from '@tanstack/react-query';
import { getLatestProjects } from '~/api/getProjects';
import type { Projects } from '~/types';

const CarouselProjects = ({ projects }: { projects: Projects[] }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: getLatestProjects,
  });

  return (
    <section
      id='projects'
      className='h-screen p-4 py-40 mb-4 max-w-5xl mx-auto relative z-0'
    >
      {/*project section - project completed */}
      <div className='text-center mb-8'>
        <h3 className='font-bold inline-block text-2xl md:text-4xl'>
          Latest Projects
        </h3>
        <span className='inline-block underline-offset-4 decoration-1 underline ml-1.5 text-2xl  md:text-4xl font-light'>
          Completed
        </span>
        <p className='mt-3 text-gray-600 text-sm md:max-w-3xl mx-auto'>
          Explore our curated portfolio of real estate projects. Each listing
          showcases our dedication to design, quality, and client satisfaction.
        </p>
      </div>
      <CarouselSwiper projects={projects} />
    </section>
  );
};

export default CarouselProjects;
