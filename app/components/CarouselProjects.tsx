import CourseSwiper from './Carousel';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '~/api/getProjects';
import Spinner from './Spinner';

const CarouselProjects = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return (
    <section
      id='projects'
      className='h-screen p-4 mt-40 max-w-5xl mx-auto relative'
    >
      {/*project section - project completed */}
      <div className='text-center mb-8'>
        <h3 className='font-bold inline-block text-2xl md:text-4xl'>
          Projects
        </h3>
        <span className='inline-block underline-offset-4 decoration-1 underline ml-1.5 text-2xl  md:text-4xl font-light'>
          Completed
        </span>
        <p className='mt-3 text-gray-600 text-sm md:max-w-3xl mx-auto'>
          Explore our curated portfolio of real estate projects. Each listing
          showcases our dedication to design, quality, and client satisfaction.
        </p>
      </div>
      {isLoading && <Spinner />}
      {isError && (
        <div className='min-h-screen -mt-44 flex items-center justify-center'>
          <p className='text-2xl md:text-4xl text-white bg-red-300 py-3 px-4 rounded-lg'>
            No Projects Found Try Again Later 🙂
          </p>
        </div>
      )}
      {data && <CourseSwiper projects={data} />}
    </section>
  );
};

export default CarouselProjects;
