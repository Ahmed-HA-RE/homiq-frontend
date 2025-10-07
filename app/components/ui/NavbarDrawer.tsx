import { Button, Divider, Drawer, Flex, Group } from '@mantine/core';
import { IoCloseCircle } from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router';
import { useAuthStore } from '~/store/authstore';
import { Overlay } from '@mantine/core';

import classes from '../../mantine-themes/mantine.module.css';
import { logoutUser } from '~/api/auth';

type NavbarDrawerProps = {
  opened: boolean;
  close: () => void;
};

const NavbarDrawer = ({ opened, close }: NavbarDrawerProps) => {
  const user = useAuthStore((state) => state.user);
  const setLogout = useAuthStore((state) => state.setLogout);
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size='xl'
        padding='md'
        position='top'
        hiddenFrom='sm'
        zIndex={1000000}
        transitionProps={{ transition: 'fade-down', duration: 300 }}
        closeButtonProps={{
          icon: <IoCloseCircle size={30} color='' />,
        }}
        styles={{
          content: {
            backgroundImage: `url('/drawer-img.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
          header: {
            backgroundColor: 'transparent',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
          },
        }}
        classNames={{ close: classes.closeModal }}
      >
        <div className='z-10'>
          <Flex direction={'column'} justify={'start'} align={'start'}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'mobile-slider-nav' : 'text-white mobile-slider-nav'
              }
              onClick={close}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'mobile-slider-nav' : 'text-white mobile-slider-nav'
              }
              onClick={close}
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'mobile-slider-nav' : 'text-white mobile-slider-nav'
              }
              onClick={close}
              to='/properties'
            >
              Properties
            </NavLink>
            {user && (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'mobile-slider-nav'
                    : 'text-white mobile-slider-nav'
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
          <Flex
            justify='center'
            align={'center'}
            px={5}
            direction='column'
            gap={14}
          >
            {user ? (
              <>
                <Button
                  onClick={close}
                  component={Link}
                  to={'/property/new'}
                  classNames={{ root: classes.add_propertyBtn_drawer }}
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
                to='/signup'
                styles={{
                  root: { backgroundColor: '#20B2AA' },
                }}
              >
                Get Started
              </Button>
            )}
          </Flex>
        </div>
        <Overlay
          gradient='linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)'
          opacity={0.85}
          zIndex={2}
        />
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
