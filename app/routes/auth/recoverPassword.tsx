import type { Route } from './+types/recoverPassword';
import AuthLayout from '~/components/layouts/AuthLayout';
import RecoverPassowrdForm from '~/components/RecoverPasswordForm';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Recover Password' },
    {
      name: 'description',
      content:
        'Recover access to your Homiq account by requesting a secure password reset link sent directly to your registered email address.',
    },
  ];
}

const RecoverPasswordPage = () => {
  return (
    <AuthLayout>
      <RecoverPassowrdForm />
    </AuthLayout>
  );
};

export default RecoverPasswordPage;
