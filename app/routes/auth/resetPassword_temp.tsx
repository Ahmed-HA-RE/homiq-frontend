import type { Route } from './+types/resetPassword';
import ResetPasswordForm from '~/components/ResetPasswordForm';
import AuthLayout from '~/components/layouts/AuthLayout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Reset Password' },
    {
      name: 'description',
      content:
        'Forgot your password? Reset your Homiq account credentials securely and regain access to your property listings in minutes.',
    },
  ];
}

const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
