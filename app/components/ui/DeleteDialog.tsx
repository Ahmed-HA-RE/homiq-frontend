import { Button, Dialog, Group } from '@mantine/core';
import type { Property } from '~/schema/propertiesSchema';
import { deleteProperty } from '~/api/properties';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { IoWarningOutline } from 'react-icons/io5';

type DeleteDialogProp = {
  opened: boolean;
  close: () => void;
  property: Property;
};

const DeleteDialog = ({ opened, close, property }: DeleteDialogProp) => {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: string) => deleteProperty(id),
    onSuccess: () => {
      navigate('/properties');
    },
    onError: (error) => {
      toast.error(error.message, {
        icon: <IoWarningOutline size={20} />,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: 'red',
          borderColor: 'red',
          color: '#fff',
        },
      });
      navigate('/auth/login');
    },
  });

  return (
    <>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size='lg'
        radius='md'
        bg='white'
        position={{ bottom: 20, left: 20 }}
      >
        <h2 className='mb-4 font-bold font-outfit'>
          Are you sure you want to delete this property? Once deleted, you won’t
          be able to recover it.
        </h2>

        <Group grow align='center'>
          <Button color='green' onClick={close}>
            No
          </Button>
          <Button
            disabled={isPending}
            color={'red'}
            onClick={() => mutateAsync(property._id)}
          >
            Yes
          </Button>
        </Group>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
