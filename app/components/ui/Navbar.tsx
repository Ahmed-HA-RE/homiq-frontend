import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Button, Group } from '@mantine/core';
import { CiLogin } from 'react-icons/ci';
import NavbarDrawer from './NavbarSlider';
import { FaSignOutAlt } from 'react-icons/fa';
import { SiSimplelogin } from 'react-icons/si';

const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  return (
    <>
      <AppBar
        component={'nav'}
        position='fixed'
        sx={{
          p: '20px 20px',
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
        <ul className='hidden md:flex flex-row space-x-6 justify-center items-center '>
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
              to={'/projects'}
            >
              Projects
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

        {/* Login && Sign up */}
        <Group pb={4}>
          <Button
            component={Link}
            to={'/register'}
            size='sm'
            classNames={{
              root: '!hidden md:!block !bg-black/50',
            }}
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            to={'/login'}
            size='sm'
            classNames={{
              root: '!hidden md:!block !bg-black/50',
            }}
          >
            Log In
          </Button>
        </Group>

        <NavbarDrawer />
      </AppBar>
    </>
  );
};
export default Navbar;
