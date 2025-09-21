import { Button, Divider, Drawer, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseCircle } from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router';
import { useAuthStore } from '~/store/authstore';

import classes from '../../mantine-themes/mantine.module.css';
import { logoutUser } from '~/api/auth';

const NavbarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const user = useAuthStore((state) => state.user);
  const setLogout = useAuthStore((state) => state.setLogout);
  const navigate = useNavigate();

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
        hiddenFrom='sm'
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
            to='/properties'
          >
            Properties
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'mobile-slider-nav' : 'text-black mobile-slider-nav'
              }
              onClick={close}
              to='/contact-us'
            >
              Contact Us
            </NavLink>
          )}
        </Flex>

        <Divider mb='md' />
        {/* auth && add property */}
        <Flex justify='center' px={5} direction='column' gap={14}>
          {user ? (
            <>
              <Button
                onClick={() => {
                  close();
                  setLogout();
                  logoutUser();
                  navigate('/');
                }}
                size='sm'
                styles={{
                  root: { backgroundColor: 'red' },
                }}
              >
                Log Out
              </Button>
              <Button
                onClick={close}
                component={Link}
                to={'/property/new'}
                classNames={{ root: classes.add_propertyBtn }}
              >
                Add Property
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                close();
              }}
              size='sm'
              component={Link}
              to='/auth/signup'
              styles={{
                root: { backgroundColor: '#20B2AA' },
              }}
            >
              Get Started
            </Button>
          )}
        </Flex>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
