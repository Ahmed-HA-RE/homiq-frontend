import Hero from '~/components/Hero';
import Navbar from '~/components/Navbar';
import { ImagePath } from '~/enums';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from '~/components/ProjectsCard';
import Spinner from '~/components/Spinner';
import { useState } from 'react';
import { getPaginatedProjects } from '~/api/getProjects';
import BasicPagination from '~/components/Pagination';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

const ProjectsPage = () => {
  const [page, setPage] = useState(1);
  const [filterProjects, setFilterProjects] = useState('');
  const [limit, setLimit] = useState(3);

  // query to fetch limit projects
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => getPaginatedProjects(limit, page),
  });

  const filteredProjects = [
    ...(data?.projects ?? []).filter((project) => {
      const title = project.title.toLowerCase();
      const city = project.location.toLowerCase();

      if (!title || !city) return;

      return title.includes(filterProjects) || city.includes(filterProjects);
    }),
  ];

  return (
    <>
      <header>
        <Navbar />
        <Hero
          image={ImagePath.HEADER_projects}
          ctaProjects={{ label: 'About Us', route: '/about' }}
          heading='Browse properties that fulfill your vision'
        />
      </header>

      <main className='p-6 bg-gray-200'>
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

            {/* Search Field */}
            <div className='w-full max-w-2xl mb-10 mx-auto'>
              <input
                type='text'
                placeholder='Search properties or filter by city'
                className='w-full rounded-full p-4 bg-white border border-black outline-0 font-outfit'
                value={filterProjects}
                onChange={(e) => {
                  const input = e.target;
                  setFilterProjects(input.value.toLowerCase());
                }}
              />
            </div>

            <AnimatePresence mode='wait'>
              <motion.div
                key={page}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6 items-center justify-center'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {isLoading && <Spinner />}
          {isError && (
            <div className='min-h-screen -mt-44 flex items-center justify-center'>
              <p className='text-2xl md:text-4xl text-white bg-red-300 py-3 px-4 rounded-lg'>
                No Projects Found Try Again Later 🙂
              </p>
            </div>
          )}

          {/* Pagination */}
          {data?.page && data?.pages > 0 && (
            <BasicPagination
              page={page}
              setPage={setPage}
              total={data?.pages as number}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
