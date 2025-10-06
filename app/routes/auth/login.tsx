import type { Route } from './+types/login';

import AuthLayout from '~/components/layouts/AuthLayout';
import LogInForm from '~/components/LogInForm';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Log In' },
    {
      name: 'description',
      content:
        'Access your Homiq account to manage your property listings, connect with buyers and renters, and track your real estate portfolio easily.',
    },
  ];
}

const LogInPage = () => {
  return (
    <AuthLayout>
      <LogInForm />
    </AuthLayout>
  );
};

export default LogInPage;
