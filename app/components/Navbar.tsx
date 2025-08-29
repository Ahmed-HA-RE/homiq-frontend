import { Twirl as Hamburger } from 'hamburger-react';
import NavbarMenuSlider from './NavbarSlider';
import { NavHashLink } from 'react-router-hash-link';

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <header data-aria-hidden='true'>
      <nav className='w-full bg-red-500 p-6'>
        <div className='max-w-5xl mx-auto flex flex-row items-center justify-between md:px-5'>
          <img src='/svgs/logo.svg' alt='logo' />
          <div />
          {/* Desktop nav */}
          <div>
            <ul className='hidden md:flex flex-row space-x-6 items-center'>
              <li className='text-white font-outfit hover:text-gray-400 transition-colors duration-200'>
                <NavHashLink to={'/'}>Home</NavHashLink>
              </li>
              <li className='text-white font-outfit  hover:text-gray-500 transition-colors duration-200'>
                <NavHashLink to={'#about'}>About</NavHashLink>
              </li>
              <li className='text-white font-outfit  hover:text-gray-500 transition-colors duration-200'>
                <NavHashLink to={'#projects'}>Projects</NavHashLink>
              </li>
              <li className='text-white font-outfit  hover:text-gray-500 transition-colors duration-200'>
                <NavHashLink to={'#testimonails'}>Testimonails</NavHashLink>
              </li>
            </ul>
          </div>
          {/* Mobile nav */}
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
            />
          </button>
        </div>
      </nav>
      {isOpen && <NavbarMenuSlider isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Navbar;
