import { TextInput, Textarea } from '@mantine/core';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { useForm, type SubmitHandler } from 'react-hook-form';

type FormInputs = {
  email: string;
  fullName: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='font-outfit space-y-3'>
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          {/* Email */}
          <TextInput
            label='Email'
            placeholder='example@gmail.com'
            className='sm:w-full'
            styles={{
              label: { color: '#fff', margin: '0 0 4px', fontSize: '15px' },
              input: {
                backgroundColor: 'transparent',
                fontFamily: 'inherit',
                color: '#ccc',
              },
              error: { marginLeft: '5px' },
            }}
            size='md'
            radius={'md'}
            withAsterisk
            rightSectionPointerEvents='none'
            rightSection={<FaEnvelope size={20} />}
            {...register('email', {
              required: 'Email is Required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Enter a valid email',
              },
              maxLength: { value: 100, message: 'Email is too long' },
            })}
            error={errors.email?.message}
          />
          {/* Full Name */}
          <TextInput
            label='Full Name'
            placeholder='Enter Your Name'
            className='sm:w-full'
            styles={{
              label: { color: '#fff', margin: '0 0 4px', fontSize: '15px' },
              input: {
                backgroundColor: 'transparent',
                fontFamily: 'inherit',
                color: '#ccc',
              },
              error: { marginLeft: '5px' },
            }}
            size='md'
            radius='md'
            withAsterisk
            rightSectionPointerEvents='none'
            rightSection={<FaUser size={20} />}
            {...register('fullName', {
              required: 'Full Name is Required',
              maxLength: {
                value: 50,
                message: 'Name cannot exceed 50 characters',
              },
              pattern: { value: /^[a-z ,.'-]+$/i, message: 'Name is Invalid' },
              validate: (value) => {
                if (typeof value !== 'string' || value === '') {
                  return 'Please Enter Your Name';
                }
                return true;
              },
            })}
            error={errors.fullName?.message}
          />
        </div>
        {/* Message */}
        <Textarea
          size='md'
          radius='md'
          label='Message'
          withAsterisk
          styles={{
            label: { color: '#fff', margin: '0 0 4px', fontSize: '15px' },
            input: {
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
              color: '#ccc',
              height: '200px',
            },
            error: { marginLeft: '5px' },
          }}
          {...register('message', {
            required:
              'Please share what’s on your mind or any questions you have!',
            maxLength: {
              value: 400,
              message: 'Message cannot exceed 400 characters',
            },
          })}
          error={errors.message?.message}
        />
      </div>
      <button
        className='w-full bg-blue-500 text-white font-outfit py-3 rounded-md cursor-pointer hover:bg-blue-700 transition duration-200'
        type='submit'
      >
        Get In Touch
      </button>
    </form>
  );
};

export default ContactForm;
