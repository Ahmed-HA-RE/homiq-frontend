import { useForm, type SubmitHandler } from 'react-hook-form';
import { type FileWithPath } from '@mantine/dropzone';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMediaQuery } from '@mantine/hooks';
import PropertyFormBasics from './PropertyFormBasics';
import PropertyFormDetails from './PropertyFormDetails';
import { DropZone } from './PropertyFormDropzone';
import { Button, Group, Stepper } from '@mantine/core';
import {
  type CreateProperty,
  createPropertySchema,
} from '~/schema/propertiesSchema';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createProperty } from '~/api/properties';
import { toast } from 'sonner';
import { MdInfo, MdOutlineError } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import {
  IoImagesSharp,
  IoShieldCheckmarkSharp,
  IoWarningOutline,
} from 'react-icons/io5';

import classes from '../mantine-themes/mantine.module.css';
import { useNavigate } from 'react-router';
const NewPropertyForm = () => {
  const matches = useMediaQuery('(min-width:768px)');
  const [interiorFile, setInteriorFile] = useState<FileWithPath[]>([]);
  const [exteriorFile, setExteriorFile] = useState<FileWithPath[]>([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateProperty>({
    resolver: zodResolver(createPropertySchema),
    defaultValues: {
      type: 'villa',
      floors: 1,
      Bathrooms: 1,
      beds: 1,
      parking: 1,
      location: 'sharjah',
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (formData: FormData) => createProperty(formData),
    onSuccess: () => {
      reset();
      toast.success('Form Submitted Thanks!', {
        icon: <IoShieldCheckmarkSharp size={20} />,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#06923E',
          borderColor: '#06923E',
          color: '#fff',
        },
      });
      navigate('/properties');
    },
    onError: () => {
      toast.error('Something Went Wrong', {
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

  const onSubmit: SubmitHandler<CreateProperty> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('type', data.type);
    formData.append('description', data.description);
    formData.append('price', data.price.toString());
    formData.append('area', data.area.toString());
    formData.append('floors', data.floors.toString());
    formData.append('Bathrooms', data.Bathrooms.toString());
    formData.append('beds', data.beds.toString());
    formData.append('parking', data.parking.toString());
    formData.append('location', data.location);

    interiorFile.forEach((file) => formData.append('interior', file));
    exteriorFile.forEach((file) => formData.append('exterior', file));

    await mutateAsync(formData);
  };
  const onError = (errors: unknown, event: unknown) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className='space-y-8'>
      <Stepper
        active={active}
        onStepClick={setActive}
        color={isValid ? 'blue' : 'red'}
      >
        <Stepper.Step
          icon={<MdInfo size={20} />}
          color={errors.name || errors.description ? 'red' : 'blue'}
          label='Property Basics'
        >
          {/* Type && Property Name */}
          <PropertyFormBasics
            register={register}
            errors={errors}
            matches={matches}
            control={control}
          />
        </Stepper.Step>
        <Stepper.Step
          icon={<FaClipboardList size={20} />}
          label='Property Details'
          color={
            errors.Bathrooms ||
            errors.area ||
            errors.beds ||
            errors.floors ||
            errors.location ||
            errors.price ||
            errors.parking
              ? 'red'
              : 'blue'
          }
        >
          {/* Price && Area && Floors */}
          <PropertyFormDetails
            errors={errors}
            matches={matches}
            control={control}
          />
        </Stepper.Step>
        <Stepper.Step
          icon={<IoImagesSharp size={20} />}
          label='Property Gallery'
          color={errors.images ? 'red' : 'blue'}
        >
          {/* DropZone */}
          <DropZone
            control={control}
            errors={errors}
            matches={matches}
            interiorFile={interiorFile}
            setInteriorFile={setInteriorFile}
            exteriorFile={exteriorFile}
            setExteriorFile={setExteriorFile}
          />
        </Stepper.Step>
        <Stepper.Completed>
          <p
            className={`my-10 text-center text-white p-4 max-w-md mx-auto font-outfit font-medium rounded ${isValid ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {isValid
              ? 'All information looks good! Please hit Submit to finish.'
              : 'Please review your information carefully, and then hit the Submit button to finish.'}
          </p>
        </Stepper.Completed>
      </Stepper>
      <Group justify='flex-end'>
        <Button
          onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : prev))}
          classNames={{ root: classes.prevBtn }}
          size='sm'
          fz={'h4'}
          disabled={active === 0}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            if (active < 3) {
              setActive((prev) => prev + 1);
            } else {
              setActive(3);
              handleSubmit(onSubmit)();
            }
          }}
          classNames={{ root: classes.nextBtn }}
          size='sm'
          fz={'h4'}
        >
          {active === 3 ? (isPending ? 'Submiting...' : 'Submit') : 'Next'}
        </Button>
      </Group>
    </form>
  );
};

export default NewPropertyForm;
