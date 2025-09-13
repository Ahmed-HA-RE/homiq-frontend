import { Modal } from '@mantine/core';
import { useModalStore } from '~/store/modalStore';
import { useToggle } from '@mantine/hooks';
import SignUp from '../SignUp';
import classes from '../../mantine-themes/mantine.module.css';

const AuthModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const [type, toggle] = useToggle(['register', 'login']);

  return (
    <>
      <Modal
        opened={openedModal}
        onClose={closeModal}
        centered
        size={'lg'}
        classNames={{
          close: classes.closeModal,
          content: classes.contentModal,
          header: classes.headerModal,
          title: classes.modalTitle,
        }}
        title={type === 'register' ? 'Sign Up' : 'Sign In'}
      >
        {type === 'register' ? <SignUp /> : <SignIn />}
      </Modal>
    </>
  );
};

export default AuthModal;
