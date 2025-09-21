import { Flex, Text, Image } from '@mantine/core';
import { FaFileUpload } from 'react-icons/fa';
import { BsFillFileEarmarkXFill } from 'react-icons/bs';
import { MdInsertPhoto } from 'react-icons/md';
import type { FileWithPath } from '@mantine/dropzone';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import type { FieldErrors, Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { CreateProperty } from '~/schema/propertiesSchema';

type DropZoneProps = {
  errors: FieldErrors<CreateProperty>;
  control: Control<CreateProperty>;
  matches: boolean;
  interiorFile: FileWithPath[];
  setInteriorFile: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
  exteriorFile: FileWithPath[];
  setExteriorFile: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
};

export function DropZone({
  errors,
  control,
  matches,
  interiorFile,
  setInteriorFile,
  exteriorFile,
  setExteriorFile,
}: DropZoneProps) {
  const interiorPreview = interiorFile.map((file) => {
    const path = URL.createObjectURL(file);
    return <Image key={file.name} src={path} />;
  });
  const exteriorPreview = exteriorFile.map((file) => {
    const path = URL.createObjectURL(file);
    return <Image key={file.name} src={path} />;
  });

  return (
    <Flex gap={20} direction='column' mt={30}>
      {/* Interior */}
      <h1 className='text-center font-bold text-2xl sm:text-3xl '>
        Interior Design
      </h1>
      {errors.images?.interior && (
        <span className=' text-red-500 inline-block text-lg text-center'>
          {errors.images.interior.message}
        </span>
      )}
      <Controller
        control={control}
        name='images.interior'
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
      <h1 className=' text-center font-bold text-2xl sm:text-3xl '>
        Exterior Design
      </h1>
      {errors.images?.exterior && (
        <span className=' text-red-500 inline-block text-lg text-center'>
          {errors.images.exterior.message}
        </span>
      )}
      <Controller
        control={control}
        name='images.exterior'
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
    </Flex>
  );
}
