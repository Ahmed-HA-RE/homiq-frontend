import { Textarea } from '@mantine/core';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { sendContactForm } from '~/api/contactUs';
import { toast } from 'sonner';

import { IoShieldCheckmarkSharp, IoWarningOutline } from 'react-icons/io5';

type FormInputs = {
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
    onError: (err) => {
      toast.error(err.message, {
        icon: <IoWarningOutline size={20} />,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: 'red',
          borderColor: 'red',
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
        {/* Message */}
        <Textarea
          size='md'
          radius='md'
          label='Message'
          withAsterisk
          styles={{
            label: { color: 'black', margin: '0 0 4px', fontSize: '15px' },
            input: {
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
              color: 'black',
              borderColor: 'black',
              height: '200px',
            },
            error: { marginLeft: '5px' },
          }}
          {...register('message', {
            required:
              'Please share what’s on your mind or any questions you have!',
            minLength: { value: 4, message: 'Characters must be at least 4' },
            maxLength: {
              value: 400,
              message: 'Message cannot exceed 400 characters',
            },
          })}
          error={errors.message?.message}
        />
      </div>
      <button
        className='w-full bg-white border text-black font-outfit py-3 rounded-md cursor-pointer hover:bg-black hover:text-white !font-bold transition duration-200'
        type='submit'
        disabled={isPending}
      >
        {isPending ? 'Submiting....' : 'Get In Touch'}
      </button>
    </form>
  );
};

export default ContactForm;
