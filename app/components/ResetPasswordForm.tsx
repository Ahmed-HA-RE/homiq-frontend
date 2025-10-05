import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Flex, PasswordInput } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router';
import { type ResetPassword, resetPassSchema } from '~/schema/authFormSchema';
import { useAuthStore } from '~/store/authstore';
import classes from '../mantine-themes/mantine.module.css';
import { IoMdLock } from 'react-icons/io';
import { resetPassword } from '~/api/auth';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const { resetToken } = useParams();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ResetPassword>({
    resolver: zodResolver(resetPassSchema),
  });

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: (data: ResetPassword) =>
      resetPassword({ credentials: data, resetToken: resetToken! }),
    onSuccess: (data) => {
      setUser(
        {
          name: data.name,
          email: data.email,
          id: data.id,
          userType: data.userType,
        },
        data.accessToken
      );
      reset();
      setTimeout(() => navigate('/properties'), 2000);
    },
    onError: (error) => {
      setError('root', { message: error.message });
    },
  });

  const onSubmit: SubmitHandler<ResetPassword> = async (data) => {
    await mutateAsync(data);
  };
  return (
    <div className='space-y-4 p-4 py-6 md:py-8 rounded-md h-full'>
      <h1 className='text-black font-outfit font-medium text-3xl md:text-4xl text-center mt-4'>
        Reset Password
      </h1>
      <h2 className='font-outfit font-semibold text-gray-500 text-center lg:text-xl'>
        Enter your new password below to reset your account access.
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {isSuccess && (
          <div role='alert' className='alert alert-success'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>Password reseted successfully.</span>
          </div>
        )}
        {/* Password */}
        <PasswordInput
          label='Password'
          withAsterisk
          placeholder='Password'
          leftSection={
            <IoMdLock color={errors.password ? '#fa5252' : 'black'} size={20} />
          }
          classNames={{
            input: errors.password ? classes.errorInput : classes.input,
            label: classes.labelInput,
            error: classes.errorMessage,
            visibilityToggle: errors.password
              ? classes.visibilityToggleError
              : classes.visibilityToggle,
            innerInput: classes.input,
          }}
          error={errors.password?.message}
          {...register('password')}
        />
        {/* Confrim Password */}
        <PasswordInput
          label='Confirm Password'
          withAsterisk
          placeholder='Password'
          leftSection={
            <IoMdLock
              color={errors.confirmPassword ? '#fa5252' : 'black'}
              size={20}
            />
          }
          classNames={{
            input: errors.confirmPassword ? classes.errorInput : classes.input,
            label: classes.labelInput,
            error: classes.errorMessage,
            visibilityToggle: errors.password
              ? classes.visibilityToggleError
              : classes.visibilityToggle,
            innerInput: classes.input,
          }}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
        <Button
          type='submit'
          size='md'
          fullWidth
          radius={'xl'}
          classNames={{ root: classes.modalBtnCta }}
          disabled={isPending}
        >
          {isPending ? 'Submiting...' : 'Submit'}
        </Button>

        {errors.root && (
          <div role='alert' className='alert alert-error gap-2 bg-red-700/40'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
              color='#7A0606'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <Link
              className='font-outfit font-bold text-red-900 underline underline-offset-4'
              to={'/recover-password'}
            >
              {errors.root.message}
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordForm;
