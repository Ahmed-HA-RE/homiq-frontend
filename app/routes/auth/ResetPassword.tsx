import ResetPasswordForm from '~/components/ResetPasswordForm';
import AuthLayout from '~/components/layouts/AuthLayout';

const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
