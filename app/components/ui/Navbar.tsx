import { Link, NavLink, useNavigate } from 'react-router';
import { Button, Group } from '@mantine/core';
import NavbarDrawer from './NavbarDrawer';
import { useAuthStore } from '~/store/authstore';

import classes from '../../mantine-themes/mantine.module.css';
import { logoutUser } from '~/api/auth';

const Navbar = () => {
  const user = useAuthStore((state) => state.user);
  const setLogout = useAuthStore((state) => state.setLogout);
  const navigate = useNavigate();
  return (
    <nav className='max-w-7xl mx-auto absolute z-10 w-full p-6 inset-0'>
      <div className='flex justify-between flex-row items-center'>
        <div className='flex flex-row items-center justify-center space-x-10'>
          <Link className='font-outfit text-3xl text-black font-light' to={'/'}>
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
            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-cyan-500 font-outfit font-bold'
                      : 'desktop-nav-items'
                  }
                  to={`/my-properties`}
                >
                  My Properties
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
              visibleFrom='sm'
              classNames={{ root: classes.add_propertyBtn }}
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
              visibleFrom='sm'
              classNames={{ root: classes.add_propertyBtn }}
            >
              Get Started
            </Button>
          )}
        </Group>
        <NavbarDrawer />
      </div>
    </nav>
  );
};
export default Navbar;
