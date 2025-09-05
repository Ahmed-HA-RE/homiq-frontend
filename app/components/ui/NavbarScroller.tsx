import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Twirl as Hamburger } from 'hamburger-react';

import NavbarMenuSlider from './NavbarSlider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <>
      <AppBar
        component={'nav'}
        position='fixed'
        sx={{
          p: '20px',
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
        <ul className='hidden md:flex flex-row space-x-6 items-center'>
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
              to={'/contact'}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile nav hamburger */}
        <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>
          <Hamburger
            duration={0.35}
            color='#fff'
            easing='ease-in-out'
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          />
        </button>
        {/* Mobile nav drawer */}
        {isOpen && <NavbarMenuSlider isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AppBar>
    </>
  );
};
export default Navbar;
