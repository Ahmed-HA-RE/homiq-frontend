import { TextInput, Textarea, Select } from '@mantine/core';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { toast } from 'sonner';
import { createTestimonial } from '~/api/getTestimonials';
import { IoShieldCheckmarkSharp, IoWarningOutline } from 'react-icons/io5';

type FormInputs = {
  feedback: string;
};

const AddReview = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormInputs) => createTestimonial(data),
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
      toast.success(err.message, {
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
        {/* Text */}
        <Textarea
          size='md'
          radius='md'
          label='Feedback'
          withAsterisk
          styles={{
            label: { color: '#fff', margin: '0 0 4px', fontSize: '15px' },
            input: {
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
              color: '#fff',
              height: '200px',
            },
            error: { marginLeft: '5px' },
          }}
          {...register('feedback', {
            required: 'Please provide your feedback before submitting!',
            maxLength: {
              value: 400,
              message: 'Cannot exceed 400 characters',
            },
          })}
          error={errors.feedback?.message}
        />
      </div>

      <button
        className='w-full bg-blue-500 text-white font-outfit py-3 rounded-md cursor-pointer hover:bg-blue-700 !font-bold transition duration-200'
        type='submit'
        disabled={isPending}
      >
        {isPending ? 'Submiting....' : 'Send Review'}
      </button>
    </form>
  );
};

export default AddReview;
