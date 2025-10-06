import type { Route } from './+types/userProperties';
import PropertiesListLayout from '~/components/layouts/PropertiesListLayout';
import api from '~/lib/axios';
import { useAuthStore } from '~/store/authstore';
import type { Property } from '~/type';
import PropertyCard from '~/components/ui/PropertyCard';
import { Link } from 'react-router';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<Property[]> {
  const cookie = request.headers.get('cookie')?.split('=')[1];
  const { data } = await api.get('/properties/me', {
    withCredentials: true,
    headers: { Authorization: `Bearer ${cookie}` },
  });
  return data;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Your Property Listings ' },
    {
      name: 'description',
      content:
        'View your listed properties, manage details, and showcase your real estate portfolio effortlessly on Homiq.',
    },
  ];
}

const UserPropertiesPage = ({ loaderData }: Route.ComponentProps) => {
  const user = useAuthStore((state) => state.user);
  const properties = loaderData;
  return (
    <PropertiesListLayout>
      <section>
        <div className='max-w-7xl mx-auto'>
          <h1 className='tracking-wide font-outfit font-bold text-2xl sm:text-4xl text-left'>
            Welcome Back, {user?.name}
          </h1>

          <div className='mt-10 sm:mt-20'>
            <h2 className='tracking-wider font-outfit font-light text-xl sm:text-2xl uppercase italic text-left mb-4'>
              Current Listing:
            </h2>
            {properties.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            ) : (
              <div
                role='alert'
                className='alert alert-error alert-outline border border-red-500 max-w-2xl mx-auto mt-20'
              >
                <span className='font-bold font-outfit text-base md:text-lg text-red-500'>
                  Hey {user?.name} you haven’t added any properties yet. Ready
                  to post your first listing? {'  '}
                  <Link
                    className='text-black hover:underline'
                    to={'/property/new'}
                  >
                    Take me there!
                  </Link>
                </span>
              </div>
            )}
            {/* Properties */}
          </div>
        </div>
      </section>
    </PropertiesListLayout>
  );
};

export default UserPropertiesPage;
