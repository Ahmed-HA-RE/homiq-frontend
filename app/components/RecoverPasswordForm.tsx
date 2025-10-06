import { zodResolver } from '@hookform/resolvers/zod';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {
  type RecoverPassword,
  recoverPassSchema,
} from '~/schema/authFormSchema';
import classes from '../mantine-themes/mantine.module.css';
import { Link, useNavigate } from 'react-router';
import { recoverPassword } from '~/api/auth';
import { MdAlternateEmail } from 'react-icons/md';

const RecoverPassowrdForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<RecoverPassword>({
    resolver: zodResolver(recoverPassSchema),
  });

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: recoverPassword,
    onSuccess: (data) => {
      reset();
      setTimeout(() => navigate('/'), 2000);
    },
    onError: (error) => {
      setError('root', { message: error.message });
    },
  });

  const onSubmit: SubmitHandler<RecoverPassword> = async (data) => {
    await mutateAsync(data.email);
  };
  return (
    <div className='space-y-4 p-4 py-6 md:py-8 rounded-md h-full'>
      <h1 className='text-black font-outfit font-medium text-3xl md:text-4xl text-center mt-4'>
        Password Recovery
      </h1>
      <h2 className='font-outfit font-semibold text-gray-500 text-center lg:text-xl'>
        Forgot your password? Enter your email below, and we’ll send you a link
        to securely reset it.
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
            <span>Recovery email sent successfully</span>
          </div>
        )}
        {/* Email */}
        <TextInput
          label='Email'
          withAsterisk
          placeholder='Your email'
          leftSection={
            <MdAlternateEmail
              color={errors.email ? '#fa5252' : 'black'}
              size={20}
            />
          }
          classNames={{
            input: errors.email ? classes.errorInput : classes.input,
            label: classes.labelInput,
            error: classes.errorMessage,
          }}
          error={errors.email?.message}
          {...register('email')}
        />

        <Button
          type='submit'
          size='md'
          fullWidth
          radius={'xl'}
          classNames={{ root: classes.modalBtnCta }}
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Recover'}
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
            <p className='font-outfit font-bold text-red-900'>
              {errors.root.message}
            </p>
          </div>
        )}
      </form>
      <Link
        className='inline-block text-end w-full pr-3 mt-2 font-outfit text-blue-500 hover:underline underline-offset-2'
        to={'/login'}
      >
        Login
      </Link>
    </div>
  );
};

export default RecoverPassowrdForm;
