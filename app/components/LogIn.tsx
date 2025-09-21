import { useForm, type SubmitHandler } from 'react-hook-form';
import { TextInput, PasswordInput, Button, Divider } from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { logInSchema, type LogIn } from '~/schema/authFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '~/api/auth';
import { Link, useNavigate } from 'react-router';
import { useAuthStore } from '~/store/authstore';
import { useMutation } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks';

const LogInForm = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:768px)');
  const setUser = useAuthStore((set) => set.setUser);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LogIn>({
    resolver: zodResolver(logInSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: LogIn) => loginUser(data),
    onSuccess: (data) => {
      setUser(
        {
          name: data.user.name,
          email: data.user.email,
          id: data.user._id,
        },
        data.accessToken
      );
      navigate('/');
    },

    onError: (error) => {
      setError('root', { message: error.message });
    },
  });

  const onSubmit: SubmitHandler<LogIn> = async (data) => {
    await mutateAsync(data);
  };

  return (
    <div className='space-y-4 p-4 py-6 md:py-8 rounded-md h-full'>
      <h1 className='text-black font-outfit font-medium text-3xl md:text-4xl text-center mt-4'>
        Log In
      </h1>
      <h2 className='font-outfit font-semibold text-gray-500 text-center lg:text-xl'>
        Welcome back — please log in to proceed.
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
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
        <Button
          type='submit'
          size='md'
          fullWidth
          radius={'xl'}
          classNames={{ root: classes.modalBtnCta }}
        >
          {isPending ? 'Logging In...' : 'Log In'}
        </Button>

        {errors.root && (
          <span className='text-red-700 font-bold bg-red-500/40 text-sm text-center inline-block p-4 px-6 rounded-md tracking-wide font-outfit mx-auto w-full'>
            {errors.root.message}
          </span>
        )}
      </form>

      {matches && <Divider color='gray' mt={30} />}

      <h3 className='font-outfit text-black transition duration-300 text-base text-center md:text-left mt-6'>
        Don't Have an account ? {'  '}
        <Link
          to={'/auth/signup'}
          className='text-cyan-500 hover:underline underline-offset-4 decoration-1 cursor-pointer'
        >
          Sign Up
        </Link>
      </h3>
    </div>
  );
};

export default LogInForm;
