import { Twirl as Hamburger } from 'hamburger-react';
import NavbarMenuSlider from './NavbarSlider';
import { Link, NavLink } from 'react-router';
import { useState } from 'react';

const Navbar = ({ bgColor }: { bgColor: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={`w-full p-6 absolute top-0 left-0 z-40 ${bgColor}`}>
        <div className='max-w-6xl mx-auto flex flex-row items-center justify-between md:px-5'>
          <Link
            className='font-outfit text-3xl text-white font-semibold'
            to={'/'}
          >
            Homiq
          </Link>
          <div />

          {/* Desktop nav */}
          <ul className='hidden md:flex flex-row space-x-6 items-center'>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-gray-400' : 'desktop-nav-items'
                }
                to={'/'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-gray-400' : 'desktop-nav-items'
                }
                to={'/projects'}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-gray-400' : 'desktop-nav-items'
                }
                to={'/about'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-gray-400' : 'desktop-nav-items'
                }
                to={'/contact'}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Mobile nav hamburger */}
          <button
            className='block md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
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
        </div>
      </nav>

      {/* Mobile nav drawer */}
      {isOpen && <NavbarMenuSlider isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
