import { useForm, type SubmitHandler } from 'react-hook-form';
import { TextInput, PasswordInput, Button, Divider } from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { signUpSchema, type SignUp } from '~/schema/authFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from '~/api/auth';
import { Link, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks';

const SignUpForm = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:768px)');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SignUp) => signUp(data),
    onSuccess: () => {
      navigate('/');
    },

    onError: (error) => {
      setError('root', { message: error.message });
    },
  });

  const onSubmit: SubmitHandler<SignUp> = async (data) => {
    await mutateAsync(data);
    navigate('/');
  };

  return (
    <div className='space-y-4 p-4 py-6 md:py-8 rounded-md h-full'>
      <h1 className='text-black font-outfit font-medium text-3xl md:text-4xl text-center mt-4'>
        Sign Up
      </h1>
      <h2 className='font-outfit font-semibold text-gray-500 text-center lg:text-xl'>
        Create your account to get started and share your experience.
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* Full Name */}
        <TextInput
          label='Name'
          withAsterisk
          placeholder='Enter your name'
          classNames={{
            input: errors.name ? classes.errorInput : classes.input,
            label: classes.labelInput,
            error: classes.errorMessage,
          }}
          {...register('name')}
          error={errors.name?.message}
        />

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
          {isPending ? 'Signing Up...' : 'Sign Up'}
        </Button>
        {errors.root && (
          <span className='text-red-700 font-bold bg-red-500/40 text-sm text-center inline-block p-4 px-6 rounded-md tracking-wide font-outfit mx-auto w-full'>
            {errors.root.message}
          </span>
        )}
      </form>

      {matches && <Divider color='gray' mt={30} />}

      <h3 className='font-outfit text-black transition duration-300 text-base text-center md:text-left mt-6'>
        Already Have an account ? {'  '}
        <Link
          to={'/auth/login'}
          className='text-cyan-500 hover:underline underline-offset-4 decoration-1 cursor-pointer'
        >
          Log In
        </Link>
      </h3>
    </div>
  );
};

export default SignUpForm;
