import { TextInput, Textarea, Select } from '@mantine/core';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { toast } from 'sonner';
import { createTestimonial } from '~/api/getTestimonials';
import { IoShieldCheckmarkSharp, IoWarningOutline } from 'react-icons/io5';

type FormInputs = {
  role: string;
  feedback: string;
};

const AddReview = () => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      role: '',
    },
  });

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
        {/* role */}
        <Controller
          name='role'
          control={control}
          rules={{
            required: { value: true, message: 'Role is Required' },
          }}
          render={({ field }) => (
            <Select
              {...field}
              error={errors.role?.message}
              checkIconPosition='right'
              label='Role'
              placeholder='Choose your role'
              className='sm:w-full'
              styles={{
                label: { color: '#fff', margin: '0 0 4px', fontSize: '15px' },
                input: {
                  backgroundColor: 'transparent',
                  fontFamily: 'inherit',
                  color: '#fff',
                },
                dropdown: {
                  backgroundColor: '#134074',
                  color: '#fff',
                  border: '1px solid #8DA9C4',
                },
                groupLabel: {
                  color: '#8DA9C4',
                },
                option: {
                  backgroundColor: 'transparent',
                },

                error: { marginLeft: '5px' },
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
                  color={`${errors.role?.message ? 'red' : '#fff'}`}
                  size={20}
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
          )}
        />

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
