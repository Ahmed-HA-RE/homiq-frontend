import { Button, Divider, Drawer, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseCircle } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const NavbarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
        size='lg'
        padding='md'
        position='left'
        hiddenFrom='xs'
        zIndex={1000000}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ transition: 'slide-right', duration: 300 }}
        closeButtonProps={{
          icon: <IoCloseCircle size={30} color='#fff' />,
        }}
        styles={{
          content: {
            backgroundColor: '#2E2C2A',
          },
          header: {
            backgroundColor: '#2E2C2A',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
          },
        }}
        classNames={{ close: 'hover:!bg-black/30 ' }}
      >
        <Divider mt='' p={12} />

        <Flex direction={'column'} justify={'start'} align={'start'}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-gray-400 mobile-slider-nav'
            }
            onClick={close}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-gray-400 mobile-slider-nav'
            }
            onClick={close}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-gray-400 mobile-slider-nav'
            }
            onClick={close}
            to='/projects'
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mobile-slider-nav' : 'text-gray-400 mobile-slider-nav'
            }
            onClick={close}
            to='/contact-us'
          >
            Contact
          </NavLink>
        </Flex>

        <Divider my='sm' />

        <Group grow px='md'>
          <Button
            onClick={close}
            component={Link}
            to={'/login'}
            variant='transparent'
            styles={{
              root: {
                border: '1px solid white',
                color: '#fff',
              },
            }}
          >
            Log in
          </Button>
          <Button onClick={close} component={Link} to={'/register'}>
            Sign up
          </Button>
        </Group>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
