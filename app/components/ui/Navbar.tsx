import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link, NavLink, useNavigate } from 'react-router';
import { Button, Group } from '@mantine/core';
import NavbarDrawer from './NavbarDrawer';
import { useAuthStore } from '~/store/authstore';
import { useLocation } from 'react-router';

import classes from '../../mantine-themes/mantine.module.css';
import { logoutUser } from '~/api/auth';

const Navbar = () => {
  const user = useAuthStore((state) => state.user);
  const setLogout = useAuthStore((state) => state.setLogout);
  const navigate = useNavigate();
  const isHome = useLocation().pathname === '/';

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: isHome ? 250 : 50,
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
        <div className='flex flex-row items-center justify-center space-x-10'>
          <Link
            className='font-outfit text-3xl text-white font-semibold'
            to={'/'}
          >
            Homiq
          </Link>
          {/* Desktop nav */}
          <ul className='hidden md:flex flex-row space-x-6 pt-1'>
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
            {user && (
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
            )}
          </ul>
        </div>

        {/* auth && add property */}
        <Group justify='center'>
          {user && (
            <Button
              component={Link}
              to={'/property/new'}
              visibleFrom='sm'
              classNames={{ root: classes.add_propertyBtn }}
            >
              Add Property
            </Button>
          )}
          {user ? (
            <Button
              size='sm'
              classNames={{
                root: '!hidden md:!block',
              }}
              styles={{
                root: { backgroundColor: 'red' },
              }}
              onClick={() => {
                setLogout();
                logoutUser();
                navigate('/');
              }}
            >
              Log Out
            </Button>
          ) : (
            <Button
              component={Link}
              to='/signup'
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
          )}
        </Group>

        <NavbarDrawer />
      </AppBar>
    </nav>
  );
};
export default Navbar;
