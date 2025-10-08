import type { Route } from './+types';
import SettingsContactForm from '~/components/SettingsContactForm';
import type { User } from '~/type';
import api from '~/lib/axios';
import SettingsAvatarForm from '~/components/SettingsAvatarForm';

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
      <h1 className='font-bold font-outfit text-2xl md:text-3xl mb-40'>
        Account Information
      </h1>

      {/* Contact Info Form */}
      <div className='flex flex-col lg:flex-row gap-6 mb-10'>
        <div className='flex-1/5 pt-2'>
          <h3 className='font-outfit text-xl font-semibold mb-4'>
            Contact Information
          </h3>
          <p className='w-full max-w-sm md:max-w-2xl text-sm text-gray-600 font-outfit'>
            Manage your contact details. This information will be visible on
            your listings and used for inquiries.
          </p>
        </div>
        <SettingsContactForm userData={user} />
      </div>

      {/* Avatar Form */}
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-1/5 pt-2'>
          <h3 className='font-outfit text-xl font-semibold mb-4'>Avatar</h3>
          <p className='w-full max-w-sm md:max-w-2xl text-sm text-gray-600 font-outfit'>
            Update your profile photo to personalize your account.
          </p>
        </div>
        {/* Contact Info Form */}
        <SettingsAvatarForm userData={user} />
      </div>
    </main>
  );
};

export default SettingsPage;
