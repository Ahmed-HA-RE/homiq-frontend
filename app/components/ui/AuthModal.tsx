import { Modal } from '@mantine/core';
import { useModalStore } from '~/store/modalStore';
import { useToggle } from '@mantine/hooks';
import SignUpForm from '../SignUp';
import LogInForm from '../LogIn';
import classes from '../../mantine-themes/mantine.module.css';

const AuthModal = () => {
  const openedModal = useModalStore((state) => state.openedModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const [type, toggle] = useToggle(['signup', 'login']);

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
        title={type === 'signup' ? 'Sign Up' : 'Log In'}
      >
        {type === 'signup' ? <SignUpForm /> : <LogInForm />}
        <h3 className='font-outfit text-white transition duration-300 text-base text-center mt-6'>
          {type === 'signup'
            ? 'Already have an account?'
            : "Don't have an account"}{' '}
          {}
          <span
            className='text-cyan-500 hover:underline underline-offset-4 decoration-1 cursor-pointer'
            onClick={() => toggle()}
          >
            {type === 'signup' ? 'Log In' : 'Sign Up'}
          </span>
        </h3>
      </Modal>
    </>
  );
};

export default AuthModal;
