import type { Route } from './+types';
import SettingsContactForm from '~/components/SettingsContactForm';
import type { User } from '~/type';
import api from '~/lib/axios';

export const loader = async ({ request }: Route.LoaderArgs): Promise<User> => {
  const cookie = request.headers.get('cookie')?.split('=')[1];

  const { data } = await api.get(`/auth/me`, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  return data;
};

const SettingsPage = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData;
  return (
    <main className='p-6 mt-9 max-w-7xl mx-auto'>
      <div className=''>
        <h1 className='font-bold font-outfit text-2xl md:text-3xl mb-40'>
          Account Information
        </h1>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex-1/5'>
            <h3 className='font-outfit text-xl font-semibold mb-4'>
              Contact Information
            </h3>
            <p className='w-full max-w-sm md:max-w-2xl text-sm text-gray-600 font-outfit'>
              Manage your contact details. This information will be visible on
              your listings and used for inquiries.
            </p>
          </div>
          {/* Contact Info Form */}
          <SettingsContactForm userData={user} />
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
