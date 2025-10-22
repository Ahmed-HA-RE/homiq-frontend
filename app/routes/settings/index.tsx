import type { Route } from './+types';
import SettingsContactForm from '~/components/SettingsContactForm';
import type { User } from '~/type';
import SettingsAvatarForm from '~/components/SettingsAvatarForm';
import SettingsPassForm from '~/components/SettingsPassForm';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '~/api/auth';
import { redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq' },
    {
      name: 'description',
      content:
        'Manage your Homiq account settings, preferences, and personal information to enhance your experience.',
    },
  ];
}

const SettingsPage = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getMe,
  });

  return (
    <main className='p-6 mt-9 max-w-7xl mx-auto'>
      <h1 className='font-bold font-outfit text-3xl text-center md:text-5xl mb-40 underline'>
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
        {user && <SettingsContactForm userData={user} />}
      </div>

      {/* Avatar Form */}
      <div className='flex flex-col lg:flex-row gap-6 mb-10'>
        <div className='flex-1/5 pt-2'>
          <h3 className='font-outfit text-xl font-semibold mb-4'>Avatar</h3>
          <p className='w-full max-w-sm md:max-w-2xl text-sm text-gray-600 font-outfit'>
            Update your profile photo to personalize your account.
          </p>
        </div>
        <SettingsAvatarForm />
      </div>

      {/* Password Form */}
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-1/5 pt-2'>
          <h3 className='font-outfit text-xl font-semibold mb-4'>Password</h3>
          <p className='w-full max-w-sm md:max-w-2xl text-sm text-gray-600 font-outfit'>
            Enter a new password to update it. Leave blank to keep your current
            password.
          </p>
        </div>
        <SettingsPassForm />
      </div>
    </main>
  );
};

export default SettingsPage;
