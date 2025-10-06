import type { Route } from './+types/signup';
import AuthLayout from '~/components/layouts/AuthLayout';
import SignUpForm from '~/components/SignUpForm';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Create an Account' },
    {
      name: 'description',
      content:
        'Join Homiq today to list your properties, reach potential clients, and manage your real estate business with ease.',
    },
  ];
}

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
