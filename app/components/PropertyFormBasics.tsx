import { Box, Divider, Flex, Select, Textarea, TextInput } from '@mantine/core';
import { MdHomeWork } from 'react-icons/md';
import { Controller } from 'react-hook-form';
import classes from '../mantine-themes/mantine.module.css';
import type { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
import type { Property } from '~/schema/propertiesSchema';

const selectTypeData = [
  { value: 'villa', label: 'Villa' },
  { value: 'Apartments', label: 'Apartments' },
  { value: 'townhouses', label: 'Townhouses' },
  { value: 'penthouses', label: 'Penthouses' },
  { value: 'duplexes', label: 'Duplexes' },
];

type PropertyFormBasicsProps = {
  matches: boolean;
  register: UseFormRegister<Property>;
  errors: FieldErrors<Property>;
  control: Control<Property>;
};

const PropertyFormBasics = ({
  matches,
  register,
  errors,
  control,
}: PropertyFormBasicsProps) => {
  return (
    <Box className='bg-gradient-create-project rounded-md p-6 mt-5'>
      <h3 className='font-outfit text-2xl md:text-3xl font-semibold text-gray-50'>
        Project Basics
      </h3>
      <Divider my={10} color='#fff' />
      <Flex justify='center' gap={'md'} direction={matches ? 'row' : 'column'}>
        {/* Property Name */}
        <TextInput
          label='Property Name'
          withAsterisk
          flex={1}
          radius={'sm'}
          placeholder='Ex: Al Reef Villa'
          classNames={{
            label: classes.labelInput_projects,
            input: !errors.name
              ? classes.input_AddProject
              : classes.errorInput_AddProject,
          }}
          {...register('name')}
          error={errors.name?.message}
        />

        {/* Type */}
        <Controller
          name='type'
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                label='Type'
                withAsterisk
                flex={1}
                radius={'sm'}
                data={selectTypeData}
                allowDeselect={false}
                checkIconPosition='right'
                comboboxProps={{
                  position: 'bottom-start',
                  width: 230,
                  transitionProps: { transition: 'scale', duration: 300 },
                }}
                rightSection={
                  <MdHomeWork
                    size={24}
                    color={!errors.type ? 'black' : 'red'}
                  />
                }
                classNames={{
                  label: classes.labelInput_projects,
                  input: !errors.type
                    ? classes.input_AddProject
                    : classes.errorInput_AddProject,
                  section: classes.inputSection,
                }}
                error={errors.type?.message}
              />
            );
          }}
        />
      </Flex>
      {/* Description */}
      <Textarea
        label='Description'
        mt={13}
        withAsterisk
        h={'100%'}
        placeholder="Write a short description that highlights your property's best features"
        classNames={{
          label: classes.labelInput_projects,
          input: !errors.description
            ? classes.input_AddProject
            : classes.errorInput_AddProject,
        }}
        {...register('description')}
        error={errors.description?.message}
      />
    </Box>
  );
};

export default PropertyFormBasics;
