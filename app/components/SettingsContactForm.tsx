import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from 'react-hook-form';
import { type ContactInfo, contactInfoSchema } from '~/schema/authFormSchema';
import { useMutation } from '@tanstack/react-query';
import type { User } from '~/type';
import { Spinner } from './ui/spinner';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { updateUserContact } from '~/api/auth';
import { useAuthStore } from '~/store/authstore';

const roleData = [
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
];

const SettingsContactForm = ({ userData }: { userData: User }) => {
  const setUser = useAuthStore((state) => state.setUser);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (credentials: ContactInfo) => updateUserContact(credentials),
    onSuccess: (data) => {
      toast.success('Updated Successfully.');
      setUser({
        email: data.email,
        name: data.name,
        userType: data.userType,
        id: data.id,
      });
      setTimeout(() => {
        window.location.reload();
      }, 600);
    },

    onError: (error) => {
      form.setError('root', { message: error.message });
    },
  });

  const form = useForm<ContactInfo>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      role: userData.role,
    },
  });

  const onSubmit: SubmitHandler<ContactInfo> = async (data) => {
    console.log(data);
    await mutateAsync(data);
  };

  const onError: SubmitErrorHandler<ContactInfo> = (errors) =>
    console.log(errors);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className='bg-white shadow border border-gray-100 rounded-2xl p-6 space-y-6 flex-1/2'
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className='focus-visible:ring-blue-500 focus-visible:ring-2'
                  placeholder='Name'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className='focus-visible:ring-blue-500 focus-visible:ring-2'
                  placeholder='Email'
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {/* Role */}
        <FormField
          control={form.control}
          name='role'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    className={`w-full cursor-pointer focus-visible:ring-blue-500 focus-visible:ring-2 ${form.formState.errors.role && 'border-red-500'}`}
                  >
                    <SelectValue placeholder='Select your role ' />
                  </SelectTrigger>
                  <SelectContent>
                    {roleData.map((groupRole, index) => (
                      <SelectGroup key={groupRole.group}>
                        <SelectLabel>{groupRole.group}</SelectLabel>
                        {groupRole.items.map((items) => (
                          <SelectItem
                            key={items.value}
                            className='cursor-pointer'
                            value={items.value}
                          >
                            {items.label}
                          </SelectItem>
                        ))}

                        {index !== roleData.length - 1 && <SelectSeparator />}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <Button
          className='cursor-pointer transition duration-200'
          type='submit'
          variant='default'
        >
          {isPending && <Spinner />}
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default SettingsContactForm;
