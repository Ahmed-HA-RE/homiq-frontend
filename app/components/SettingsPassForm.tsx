import { useMutation } from '@tanstack/react-query';
import { Spinner } from './ui/spinner';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { useAuthStore } from '~/store/authstore';
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from 'react-hook-form';
import {
  updateUserPassSchema,
  type UpdateUserPass,
} from '~/schema/authFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { updateUserPassword } from '~/api/auth';
import AlertError from './ui/AlertError';

const SettingsPassForm = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (passwordData: UpdateUserPass) =>
      updateUserPassword(passwordData),
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
      setToken(data.accessToken);
      setTimeout(() => {
        window.location.reload();
      }, 600);
    },

    onError: (error) => {
      form.setError('root', { message: error.message });
    },
  });

  const form = useForm<UpdateUserPass>({
    resolver: zodResolver(updateUserPassSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<UpdateUserPass> = async (data) => {
    console.log(data);
    await mutateAsync(data);
  };

  const onError: SubmitErrorHandler<UpdateUserPass> = (errors) =>
    console.log(errors);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className='bg-white shadow border border-gray-100 rounded-2xl p-6 space-y-6 flex-1/2'
      >
        {form.formState.errors.root && (
          <AlertError message={form.formState.errors.root?.message} />
        )}

        {/* Full Name */}
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input
                  className='focus-visible:ring-blue-500 focus-visible:ring-2'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {/* New Password */}
        <FormField
          control={form.control}
          name='newPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  className='focus-visible:ring-blue-500 focus-visible:ring-2'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {/* Confirm Password */}
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  className='focus-visible:ring-blue-500 focus-visible:ring-2'
                  type='password'
                  {...field}
                />
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

export default SettingsPassForm;
