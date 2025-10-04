import { Flex, Text, Image } from '@mantine/core';
import { FaFileUpload } from 'react-icons/fa';
import { BsFillFileEarmarkXFill } from 'react-icons/bs';
import { MdInsertPhoto } from 'react-icons/md';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import type { FieldErrors, Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { UploadImages } from '~/schema/propertiesSchema';
import useImageModalStore from '~/store/imageModalStore';

type DropZoneProps = {
  errors: FieldErrors<UploadImages>;
  control: Control<UploadImages>;
  matches: boolean;
};

export function DropZone({ errors, control, matches }: DropZoneProps) {
  const interiorFile = useImageModalStore((state) => state.interiorFiles);
  const exteriorFile = useImageModalStore((state) => state.exteriorFiles);
  const setInteriorFile = useImageModalStore((state) => state.setInteriorFile);
  const setExteriorFile = useImageModalStore((state) => state.setExteriorFile);

  const interiorPreview = interiorFile.map((files, index) => {
    const imageURL = URL.createObjectURL(files);
    return <img src={imageURL} key={index} />;
  });

  const exteriorPreview = exteriorFile.map((files, index) => {
    const imageURL = URL.createObjectURL(files);
    return <img src={imageURL} key={index} />;
  });

  return (
    <>
      {/* Interior */}
      <div className='text-center mb-4 mt-10'>
        <h1 className='text-center font-bold text-2xl sm:text-3xl'>
          Interior Design
        </h1>
        {errors?.interior && (
          <span className=' text-red-500 inline-block'>
            {errors.interior.message}
          </span>
        )}
      </div>
      <Controller
        control={control}
        name='interior'
        render={({ field }) => (
          <Dropzone
            {...field}
            onDrop={(droppedFiles) => {
              setInteriorFile(droppedFiles);
              field.onChange(
                droppedFiles.map((droppedFile) => droppedFile.name)
              );
            }}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            className='bg-gradient-create-project rounded-md cursor-pointer hover:opacity-85 transition duration-200'
          >
            <Flex
              justify='center'
              align='center'
              direction={matches ? 'row' : 'column'}
              gap={20}
              mih={220}
            >
              <Dropzone.Accept>
                <FaFileUpload size={52} color='var(--mantine-color-blue-6)' />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <BsFillFileEarmarkXFill
                  size={52}
                  color='var(--mantine-color-red-6)'
                />
              </Dropzone.Reject>
              {interiorFile.length === 0 && (
                <Dropzone.Idle>
                  <MdInsertPhoto
                    size={52}
                    color='var(--mantine-color-dimmed)'
                  />
                </Dropzone.Idle>
              )}

              {interiorFile.length > 0 ? (
                <div className='gap-4 py-2 w-full max-w-sm flex flex-col md:flex-row items-center justify-center'>
                  {interiorPreview}
                </div>
              ) : (
                <div className='px-4'>
                  <Text size='xl' inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size='sm' c='dimmed' inline mt={7}>
                    Attach as many files as you like, each file should not
                    exceed 5mb
                  </Text>
                </div>
              )}
            </Flex>
          </Dropzone>
        )}
      />

      {/* Exterior */}
      <div className='text-center mb-4 mt-10'>
        <h1 className=' text-center font-bold text-2xl sm:text-3xl '>
          Exterior Design
        </h1>
        {errors?.exterior && (
          <span className=' text-red-500 text-center'>
            {errors.exterior.message}
          </span>
        )}
      </div>
      <Controller
        control={control}
        name='exterior'
        render={({ field }) => (
          <Dropzone
            {...field}
            onDrop={(droppedFiles) => {
              setExteriorFile(droppedFiles);
              field.onChange(
                droppedFiles.map((droppedFile) => droppedFile.name)
              );
            }}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            className='bg-gradient-create-project rounded-md cursor-pointer hover:opacity-85 transition duration-200'
          >
            <Flex
              justify='center'
              align='center'
              direction={matches ? 'row' : 'column'}
              gap={20}
              mih={220}
            >
              <Dropzone.Accept>
                <FaFileUpload size={52} color='var(--mantine-color-blue-6)' />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <BsFillFileEarmarkXFill
                  size={52}
                  color='var(--mantine-color-red-6)'
                />
              </Dropzone.Reject>
              {exteriorFile.length === 0 && (
                <Dropzone.Idle>
                  <MdInsertPhoto
                    size={52}
                    color='var(--mantine-color-dimmed)'
                  />
                </Dropzone.Idle>
              )}

              {exteriorFile.length > 0 ? (
                <div className='gap-4 py-2 w-full max-w-sm flex flex-col md:flex-row items-center justify-center'>
                  {exteriorPreview}
                </div>
              ) : (
                <div className='px-4'>
                  <Text size='xl' inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size='sm' c='dimmed' inline mt={7}>
                    Attach as many files as you like, each file should not
                    exceed 5mb
                  </Text>
                </div>
              )}
            </Flex>
          </Dropzone>
        )}
      />
    </>
  );
}
