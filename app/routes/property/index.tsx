import type { Route } from './+types';
import { useQuery } from '@tanstack/react-query';
import Spinner from '~/components/Spinner';
import { useState } from 'react';
import { getPaginatedProperties, getProperties } from '~/api/properties';
import PaginationComponent from '~/components/ui/Pagination';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import PropertyCard from '~/components/ui/PropertyCard';
import PropertyTabs from '~/components/ui/PropertyTabs';
import { formatLocationName } from '~/utils/formatters';
import PropertiesListLayout from '~/components/layouts/PropertiesListLayout';

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
  const [activeTabs, setActiveTabs] = useState('all');

  // query to fetch limit projects
  const { data, isFetching, isError } = useQuery({
    queryKey: ['properties', page, activeTabs],
    queryFn: () => getPaginatedProperties(page, activeTabs),
  });

  return (
    <PropertiesListLayout>
      <section className='mt-20'>
        <div className=' max-w-7xl mx-auto'>
          {/* Intro */}
          <div className='mb-10 font-outfit text-center space-y-4'>
            <h2 className='text-gray-900 font-bold text-2xl md:text-4xl'>
              Explore Our Properties
            </h2>
            <p className='text-gray-600 w-full max-w-lg md:max-w-2xl text-center mx-auto md:text-lg'>
              Browse our exclusive collection of premium apartments and villas
              across Dubai, Abu Dhabi, and Sharjah. Whether you’re searching for
              your dream home or looking to sell, we’re here to make it
              seamless.
            </p>
          </div>

          <PropertyTabs
            activeTabs={activeTabs}
            setActiveTabs={setActiveTabs}
            setPage={setPage}
          />

          {isFetching && <Spinner />}
          {isError && (
            <div className='min-h-screen flex items-start justify-center mt-10'>
              <p className='text-2xl md:text-4xl text-white bg-red-300 py-3 px-4 rounded-lg'>
                No Properties Found Try Again Later 🙂
              </p>
            </div>
          )}

          <AnimatePresence mode='wait'>
            {data?.results?.length === 0 ? (
              <div className='bg-red-400/40 p-4 rounded w-full max-w-lg mx-auto mt-10'>
                <p className='text-red-800 font-outfit text-center '>
                  Oops! No properties match your search in{' '}
                  {formatLocationName(activeTabs)}. Try exploring other
                  locations or relaxing your filters.
                </p>
              </div>
            ) : (
              <motion.div
                key={`${page}-${activeTabs}`}
                className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {data?.results.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {data && data?.total_page > 1 && (
          <PaginationComponent
            page={page}
            setPage={setPage}
            total_page={data?.total_page}
          />
        )}
      </section>
    </PropertiesListLayout>
  );
};

export default PropertiesPage;
