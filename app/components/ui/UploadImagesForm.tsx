import { Modal, Button, Group } from '@mantine/core';
import useImageModalStore from '~/store/imageModalStore';
import { useNavigate } from 'react-router';
import classes from '../../mantine-themes/mantine.module.css';
import type { FileWithPath } from '@mantine/dropzone';
import { DropZone } from '../PropertyFormDropzone';
import { useMediaQuery } from '@mantine/hooks';
import {
  uploadImagesSchema,
  type UploadImages,
} from '~/schema/propertiesSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { uploadPropertyImages } from '~/api/properties';

const UploadImagesForm = ({
  subtitle,
  id,
}: {
  subtitle: string;
  id: string;
}) => {
  const opened = useImageModalStore((state) => state.opened);
  const close = useImageModalStore((state) => state.close);
  const interiorFiles = useImageModalStore((state) => state.interiorFiles);
  const exteriorFiles = useImageModalStore((state) => state.exteriorFiles);
  const matches = useMediaQuery('(min-width:768px)');
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({
      id,
      uploadImagesData,
    }: {
      id: string;
      uploadImagesData: FormData;
    }) => uploadPropertyImages({ id, uploadImagesData }),
    onSuccess: () => {
      close();
      navigate('/properties');
      reset();
    },
    onError: (error) => {
      setError('root', { message: error.message });
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm<UploadImages>({
    resolver: zodResolver(uploadImagesSchema),
  });

  const onSubmit: SubmitHandler<UploadImages> = async (data) => {
    const formData = new FormData();

    // Loop to extract each file
    interiorFiles.forEach((file) => formData.append('interior', file));
    exteriorFiles.forEach((file) => formData.append('exterior', file));

    await mutateAsync({ id, uploadImagesData: formData });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          close();
          navigate('/properties');
        }}
        fullScreen
        padding={matches ? 'xl' : 'sm'}
        transitionProps={{ transition: 'fade', duration: 200 }}
        classNames={{
          content: classes.contentModal,
          header: classes.modal_header,
          close: classes.closeModal,
        }}
      >
        <div className='my-10'>
          <h1 className='leading-8 tracking-wide font-outfit font-bold text-2xl md:text-3xl md:leading-10 max-w-4xl text-green-500'>
            Submitted Successfully!
          </h1>
          <p className='mt-2 text-green-100 font-outfit text-sm md:text-base '>
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Dropzone */}
          <DropZone control={control} errors={errors} matches={matches} />

          {errors.root && (
            <div className='bg-red-400/40 p-4 rounded-xl mt-10 max-w-md mx-auto'>
              <p className='text-red-500 font-bold font-outfit text-center text-lg'>
                {errors.root.message}
              </p>
            </div>
          )}

          <Group justify='flex-end' pt={50} gap={10}>
            <button
              type='button'
              className='text-white py-2 px-3 bg-red-600 rounded cursor-pointer hover:bg-red-700 transition-colors duration-300'
              onClick={() => {
                close();
                reset();
                navigate('/properties');
              }}
            >
              No, Maybe Later
            </button>
            <button
              className='text-white py-2 px-3 bg-green-500 rounded cursor-pointer hover:bg-green-600 transition-colors duration-300'
              disabled={isPending}
            >
              {isPending ? 'Uploading...' : 'Yes, Add Images'}
            </button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default UploadImagesForm;
