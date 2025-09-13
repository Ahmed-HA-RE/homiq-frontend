import { useForm, type SubmitHandler } from 'react-hook-form';
import { TextInput, PasswordInput, Group, Button } from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { signUpSchema, type SignUp } from '~/schema/authFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUp> = (data) => {};

  return (
    <div className='mt-10 space-y-5'>
      <h2 className='font-outfit font-semibold text-white'>
        Create your account to get started and share your experience.
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* Full Name */}
        <Group justify='center' grow gap={'sm'}>
          <TextInput
            label='First name'
            withAsterisk
            placeholder='Your first name'
            classNames={{
              input: errors.firstName ? classes.errorInput : classes.input,
              label: classes.labelInput,
              error: classes.errorMessage,
            }}
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <TextInput
            label='Last name'
            withAsterisk
            placeholder='Your last name'
            classNames={{
              input: errors.lastName ? classes.errorInput : classes.input,
              label: classes.labelInput,
              error: classes.errorMessage,
            }}
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </Group>
        {/* Email */}
        <TextInput
          label='Email'
          withAsterisk
          placeholder='Your Email'
          leftSection={
            <MdAlternateEmail
              color={errors.email ? '#fa5252' : '#fff'}
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
            <IoMdLock color={errors.password ? '#fa5252' : '#fff'} size={20} />
          }
          classNames={{
            input: errors.password ? classes.errorInput : classes.input,
            label: classes.labelInput,
            error: classes.errorMessage,
            visibilityToggle: errors.password
              ? classes.visibilityToggleError
              : classes.visibilityToggle,
            innerInput: classes.inputPass,
          }}
          error={errors.password?.message}
          {...register('password')}
        />
        <Group justify='space-between' mt={40}>
          <h3 className='font-outfit text-white transition duration-300 text-sm '>
            Already have an account?{' '}
            <span className='text-cyan-500 hover:underline underline-offset-4 decoration-1 cursor-pointer'>
              Log In
            </span>
          </h3>
          <Button
            type='submit'
            size='compact-lg'
            classNames={{ root: classes.modalBtnCta }}
          >
            Register
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default SignUp;
