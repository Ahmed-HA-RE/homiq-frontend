import { Box, TextInput } from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';
import { Divider, Flex, NumberInput, Select } from '@mantine/core';
import { FaMapLocationDot } from 'react-icons/fa6';
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { Property } from '~/schema/propertiesSchema';

const selectEmiratesData = [
  { value: 'abu_dhabi', label: 'Abu Dhabi' },
  { value: 'dubai', label: 'Dubai' },
  { value: 'sharjah', label: 'Sharjah' },
  { value: 'ajman', label: 'Ajman' },
  { value: 'umm_al_quwain', label: 'Umm Al Quwain' },
  { value: 'ras_al_khaimah', label: 'Ras Al Khaimah' },
  { value: 'fujairah', label: 'Fujairah' },
];

type PropertyFormDetailsProps = {
  matches: boolean;
  register: UseFormRegister<Property>;
  errors: FieldErrors<Property>;
  control: Control<Property>;
};

const PropertyFormDetails = ({
  matches,
  register,
  errors,
  control,
}: PropertyFormDetailsProps) => {
  return (
    <Box className='bg-gradient-create-project rounded-md p-4 pt-5 space-y-4 mt-5'>
      <h3 className='font-outfit text-2xl md:text-3xl font-semibold  text-gray-50'>
        Property Details
      </h3>
      <Divider my={10} color='#fff' />
      <Flex justify='center' gap={'md'} direction={matches ? 'row' : 'column'}>
        {/* Price */}
        <Controller
          control={control}
          name='price'
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Price'
              withAsterisk
              placeholder='Enter Price'
              flex={1}
              allowNegative={false}
              allowDecimal={false}
              thousandSeparator=','
              leftSectionWidth={35}
              leftSection={<img src='/uae-icon.jpg' />}
              classNames={{
                label: classes.labelInput_projects,
                input: !errors.price
                  ? classes.input_AddProject
                  : classes.errorInput_AddProject,
                section: classes.inputSection,
              }}
              error={errors.price?.message}
            />
          )}
        />
        {/* Area */}
        <Controller
          control={control}
          name='area'
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Sqft'
              withAsterisk
              placeholder='3500 sqft'
              flex={1}
              allowNegative={false}
              allowDecimal={true}
              thousandSeparator=','
              stepHoldDelay={500}
              stepHoldInterval={100}
              decimalScale={4}
              classNames={{
                label: classes.labelInput_projects,
                input: !errors.floors
                  ? classes.input_AddProject
                  : classes.errorInput_AddProject,
              }}
              error={errors.area?.message}
            />
          )}
        />
      </Flex>
      <Flex justify='center' align='center' columnGap='md'>
        {/* Floor */}
        <Controller
          control={control}
          name='floors'
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Floors'
              withAsterisk
              defaultValue={1}
              flex={1}
              allowNegative={false}
              allowDecimal={false}
              stepHoldDelay={500}
              stepHoldInterval={100}
              classNames={{
                label: classes.labelInput_projects,
                input: !errors.floors
                  ? classes.input_AddProject
                  : classes.errorInput_AddProject,
              }}
              error={errors.floors?.message}
            />
          )}
        />
        {/* Bathrooms */}
        <Controller
          control={control}
          name='Bathrooms'
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Bathrooms'
              withAsterisk
              defaultValue={1}
              flex={1}
              allowNegative={false}
              allowDecimal={false}
              stepHoldDelay={500}
              stepHoldInterval={100}
              classNames={{
                label: classes.labelInput_projects,
                input: !errors.Bathrooms
                  ? classes.input_AddProject
                  : classes.errorInput_AddProject,
              }}
              error={errors.Bathrooms?.message}
            />
          )}
        />
      </Flex>
      <Flex justify='center' align='center' columnGap='md'>
        {/* Beds */}
        <Controller
          control={control}
          name='beds'
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Beds'
              withAsterisk
              defaultValue={1}
              flex={1}
              allowNegative={false}
              allowDecimal={false}
              stepHoldDelay={500}
              stepHoldInterval={100}
              classNames={{
                label: classes.labelInput_projects,
                input: !errors.beds
                  ? classes.input_AddProject
                  : classes.errorInput_AddProject,
              }}
              error={errors.beds?.message}
            />
          )}
        />
        {/* Garage */}
        <Controller
          control={control}
          name='parking'
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Garage'
              withAsterisk
              defaultValue={1}
              min={1}
              max={6}
              flex={1}
              allowNegative={false}
              allowDecimal={false}
              stepHoldDelay={500}
              stepHoldInterval={100}
              classNames={{
                label: classes.labelInput_projects,
                input: !errors.parking
                  ? classes.input_AddProject
                  : classes.errorInput_AddProject,
              }}
              error={errors.parking?.message}
            />
          )}
        />
      </Flex>

      {/* Location */}
      <Controller
        control={control}
        name='location'
        render={({ field }) => (
          <Select
            {...field}
            label='Location'
            withAsterisk
            flex={1}
            data={selectEmiratesData}
            allowDeselect={false}
            checkIconPosition='right'
            comboboxProps={{
              position: 'bottom-start',
              width: 230,
              transitionProps: { transition: 'scale', duration: 300 },
            }}
            rightSection={
              <FaMapLocationDot
                size={24}
                color={!errors.location ? 'black' : 'red'}
              />
            }
            classNames={{
              label: classes.labelInput_projects,
              input: !errors.location
                ? classes.input_AddProject
                : classes.errorInput_AddProject,
              section: classes.inputSection,
            }}
            error={errors.location?.message}
          />
        )}
      />
    </Box>
  );
};

export default PropertyFormDetails;
