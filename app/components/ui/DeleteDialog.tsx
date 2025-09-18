import { Button, Dialog, Group } from '@mantine/core';
import type { Property } from '~/schema/propertiesSchema';
import { deleteProperty } from '~/api/properties';
import { useNavigate } from 'react-router';

type DeleteDialogProp = {
  opened: boolean;
  close: () => void;
  property: Property;
};

const DeleteDialog = ({ opened, close, property }: DeleteDialogProp) => {
  const navigate = useNavigate();

  return (
    <>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size='lg'
        radius='md'
        bg='white'
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
            color={'red'}
            onClick={() => {
              deleteProperty(property._id);
              navigate('/properties');
            }}
          >
            Yes
          </Button>
        </Group>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
