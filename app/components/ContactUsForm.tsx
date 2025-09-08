import { TextInput, Textarea } from '@mantine/core';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { sendContactForm } from '~/api/contactUs';
import { toast } from 'sonner';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

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
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormInputs) => sendContactForm(data),
    onSuccess: (data) => {
      reset();
      toast.success(data.message, {
        icon: <IoShieldCheckmarkSharp size={20} />,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#06923E',
          borderColor: '#06923E',
          color: '#fff',
        },
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message, {
        icon: <BiSolidErrorAlt size={20} />,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#E62727',
          borderColor: '#E62727',
          color: '#fff',
        },
      });
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    await mutateAsync(data);
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
        className='w-full bg-blue-500 text-white font-outfit py-3 rounded-md cursor-pointer hover:bg-blue-700 !font-bold transition duration-200'
        type='submit'
        disabled={isPending}
      >
        {isPending ? 'Submiting....' : 'Get In Touch'}
      </button>
    </form>
  );
};

export default ContactForm;
