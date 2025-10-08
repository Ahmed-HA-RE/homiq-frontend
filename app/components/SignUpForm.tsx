import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Button,
  Divider,
  Select,
} from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';
import { MdAlternateEmail, MdOutlineWork } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { signUpSchema, type SignUp } from '~/schema/authFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpUser } from '~/api/auth';
import { Link, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks';
import { useAuthStore } from '~/store/authstore';

const SignUpForm = () => {
  const matches = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SignUp) => signUpUser(data),
    onSuccess: (data) => {
      setUser({
        name: data.user.name,
        email: data.user.email,
        id: data.user._id,
        userType: data.userType,
      });
      setToken(data.accessToken);
      navigate('/');
    },

    onError: (error) => {
      setError('root', { message: error.message });
    },
  });

  const onSubmit: SubmitHandler<SignUp> = async (data) => {
    await mutateAsync(data);
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

        {/* role */}
        <Controller
          name='role'
          control={control}
          rules={{
            required: { value: true, message: 'Role is Required' },
          }}
          render={({ field }) => {
            return (
              <Select
                {...field}
                error={errors.role?.message}
                value={field.value}
                onChange={(value) => field.onChange(value)}
                checkIconPosition='right'
                label='Role'
                placeholder='Choose your role'
                classNames={{
                  input: errors.name ? classes.errorInput : classes.input,
                  label: classes.labelInput,
                  error: classes.errorMessage,
                }}
                size='md'
                radius='md'
                withAsterisk
                comboboxProps={{
                  width: 250,
                  position: 'bottom-start',
                  transitionProps: {
                    transition: 'scale-y',
                    duration: 300,
                  },
                }}
                rightSection={
                  <MdOutlineWork
                    color={`${errors.role?.message ? 'red' : 'black'}`}
                    size={16}
                  />
                }
                clearable
                data={[
                  {
                    group: 'Designers',
                    items: [
                      { value: 'ui_designer', label: 'UI Designer' },
                      { value: 'ux_designer', label: 'UX Designer' },
                      { value: 'graphic_designer', label: 'Graphic Designer' },
                    ],
                  },
                  {
                    group: 'Web Developers',
                    items: [
                      { value: 'frontend_dev', label: 'Frontend Developer' },
                      { value: 'backend_dev', label: 'Backend Developer' },
                      { value: 'fullstack_dev', label: 'Fullstack Developer' },
                    ],
                  },
                  {
                    group: 'Business',
                    items: [
                      { value: 'manager', label: 'Manager' },
                      { value: 'marketing', label: 'Marketing Specialist' },
                      { value: 'sales', label: 'Sales Executive' },
                    ],
                  },
                  {
                    group: 'Software Engineers',
                    items: [
                      { value: 'mobile_eng', label: 'Mobile Engineer' },
                      { value: 'ai_eng', label: 'AI Engineer' },
                      { value: 'cloud_eng', label: 'Cloud Engineer' },
                    ],
                  },
                  {
                    group: 'Hardware Engineers',
                    items: [
                      {
                        value: 'embedded_eng',
                        label: 'Embedded Systems Engineer',
                      },
                      {
                        value: 'network_eng',
                        label: 'Network Hardware Engineer',
                      },
                      { value: 'chip_eng', label: 'Chip Design Engineer' },
                    ],
                  },
                ]}
              />
            );
          }}
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
          disabled={isPending}
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

      <h3 className='font-outfit text-black transition duration-300 text-base mt-6'>
        Already Have an account ? {'  '}
        <Link
          to={'/login'}
          className='text-cyan-500 hover:underline underline-offset-4 decoration-1 cursor-pointer'
        >
          Log In
        </Link>
      </h3>
    </div>
  );
};

export default SignUpForm;
