import { Button, Divider, Drawer, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseCircle } from 'react-icons/io5';

import { NavLink } from 'react-router';
import { useModalStore } from '~/store/modalStore';

const NavbarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
      <Button
        variant='transparent'
        color='#fff'
        onClick={open}
        classNames={{ root: '!block md:!hidden' }}
        styles={{
          root: {
            padding: '0',
          },
        }}
      >
        <RxHamburgerMenu size={34} />
      </Button>

      <Drawer
        opened={opened}
        onClose={close}
        size='xs'
        padding='md'
        position='right'
        hiddenFrom='xs'
        zIndex={1000000}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ transition: 'slide-left', duration: 300 }}
        closeButtonProps={{
          icon: <IoCloseCircle size={30} color='' />,
        }}
        styles={{
          content: {
            backgroundColor: '#fff',
          },
          header: {
            backgroundColor: '#fff',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
          },
        }}
        classNames={{ close: 'hover:!bg-black/10 ' }}
      >
        <Flex direction={'column'} justify={'start'} align={'start'}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-black mobile-slider-nav'
            }
            onClick={close}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-black mobile-slider-nav'
            }
            onClick={close}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-black mobile-slider-nav'
            }
            onClick={close}
            to='/projects'
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-black mobile-slider-nav'
            }
            onClick={close}
            to='/contact-us'
          >
            Contact
          </NavLink>
        </Flex>

        <Divider mb='md' />
        <Group justify='center' grow px={10}>
          <Button
            styles={{
              root: {
                fontSize: '15px',
              },
            }}
            onClick={() => {
              close();
              openModal();
            }}
          >
            Get Started
          </Button>
        </Group>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
