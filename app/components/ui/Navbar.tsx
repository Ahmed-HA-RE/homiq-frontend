import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link, NavLink } from 'react-router';
import { Button, Group } from '@mantine/core';
import NavbarDrawer from './NavbarDrawer';
import { useModalStore } from '~/store/modalStore';
import classes from '../../mantine-themes/mantine.module.css';

const Navbar = () => {
  const openModal = useModalStore((state) => state.openModal);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  return (
    <nav className='max-w-7xl mx-auto'>
      <AppBar
        component={'div'}
        position='fixed'
        sx={{
          p: '20px 25px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: trigger ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
          boxShadow: 'none',
          transition: 'all ease-in-out 0.25s',
          zIndex: 10,
        }}
      >
        <div>
          <Link
            className='font-outfit text-3xl text-white font-semibold'
            to={'/'}
          >
            Homiq
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className='hidden md:flex flex-row space-x-6  pt-1'>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-500 font-outfit font-bold'
                  : 'desktop-nav-items'
              }
              to={'/'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-500 font-outfit font-bold'
                  : 'desktop-nav-items'
              }
              to={'/properties'}
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-500 font-outfit font-bold'
                  : 'desktop-nav-items'
              }
              to={'/about'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-500 font-outfit font-bold'
                  : 'desktop-nav-items'
              }
              to={'/contact-us'}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* auth && add property */}
        <Group justify='center'>
          <Button
            component={Link}
            to={'/property/new'}
            visibleFrom='sm'
            classNames={{ root: classes.add_propertyBtn }}
          >
            Add Property
          </Button>
          <Button
            onClick={openModal}
            size='sm'
            classNames={{
              root: '!hidden md:!block',
            }}
            styles={{
              root: { backgroundColor: '#20B2AA' },
            }}
          >
            Get Started
          </Button>
        </Group>

        <NavbarDrawer />
      </AppBar>
    </nav>
  );
};
export default Navbar;
