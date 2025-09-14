import { useForm, type SubmitHandler } from 'react-hook-form';
import { TextInput, PasswordInput, Group, Button } from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { logInSchema, type LogIn } from '~/schema/authFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LogIn>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit: SubmitHandler<LogIn> = (data) => {};

  return (
    <div className='mt-10 space-y-5'>
      <h2 className='font-outfit font-semibold text-white'>
        Create your account to get started and share your experience.
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* Full Name */}
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

        <Button
          type='submit'
          size='md'
          fullWidth
          classNames={{ root: classes.modalBtnCta }}
        >
          LogIn
        </Button>
      </form>
    </div>
  );
};

export default LogInForm;
