import { useMutation } from '@tanstack/react-query';
import type { User } from '~/type';
import { Spinner } from './ui/spinner';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { useState, type FormEvent } from 'react';
import ImageFileUpload from './ui/ImageFileUpload';
import { updateUserAvatar } from '~/api/auth';

const SettingsAvatarForm = () => {
  const [avatar, setAvatar] = useState<File | null>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (avatar: FormData) => updateUserAvatar(avatar),
    onSuccess: () => {
      toast.success('Updated Successfully.');
      setTimeout(() => {
        window.location.reload();
        window.scrollTo(0, 0);
      }, 600);
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    console.log(avatar);
    if (avatar) {
      form.append('avatar', avatar);
      await mutateAsync(form);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className='bg-white shadow border border-gray-100 rounded-2xl p-6 space-y-6 flex-1/2'
    >
      <ImageFileUpload setAvatar={setAvatar} />

      <Button
        className='cursor-pointer transition duration-200'
        type='submit'
        variant='default'
      >
        {isPending && <Spinner />}
        Save Changes
      </Button>
    </form>
  );
};

export default SettingsAvatarForm;
