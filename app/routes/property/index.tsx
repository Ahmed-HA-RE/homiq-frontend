import type { Route } from '../../+types/root';
import { useQuery } from '@tanstack/react-query';
import Spinner from '~/components/Spinner';
import { useState } from 'react';
import { getPaginatedProperties } from '~/api/getProperties';
import PaginationComponent from '~/components/ui/Pagination';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import Footer from '~/components/ui/Footer';
import PropertyCard from '~/components/ui/PropertyCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Properties' },
    {
      name: 'description',
      content:
        'Discover your dream home with Dream Homes Real Estate. Browse listings, explore properties, and find your perfect home today.',
    },
  ];
}

const PropertiesPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  // query to fetch limit projects
  const { data, isLoading, isError } = useQuery({
    queryKey: ['properties', page],
    queryFn: () => getPaginatedProperties(limit, page),
  });

  return (
    <>
      <main className='p-6 pt-40 bg-gray-200'>
        <section className='mt-20'>
          <div className='max-w-7xl mx-auto'>
            {/* Intro */}
            <div className='mb-10 font-outfit text-center space-y-4'>
              <h2 className='text-gray-900 font-bold text-2xl md:text-4xl'>
                Explore Our Properties
              </h2>
              <p className='text-gray-600 w-full max-w-lg md:max-w-2xl text-center mx-auto md:text-lg'>
                Browse our exclusive collection of premium apartments and villas
                across Dubai, Abu Dhabi, and Sharjah. Whether you’re searching
                for your dream home or looking to sell, we’re here to make it
                seamless.
              </p>
            </div>

            {isLoading && <Spinner />}
            {isError && (
              <div className='min-h-screen flex items-start justify-center mt-10'>
                <p className='text-2xl md:text-4xl text-white bg-red-300 py-3 px-4 rounded-lg'>
                  No Properties Found Try Again Later 🙂
                </p>
              </div>
            )}

            <AnimatePresence mode='wait'>
              <motion.div
                key={page}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {data?.properties?.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {data?.page && data?.pages > 0 && (
            <PaginationComponent
              page={page}
              setPage={setPage}
              total={data?.pages as number}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PropertiesPage;
