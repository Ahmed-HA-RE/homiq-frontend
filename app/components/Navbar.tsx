import { Twirl as Hamburger } from 'hamburger-react';
import NavbarMenuSlider from './NavbarSlider';
import { HashLink } from 'react-router-hash-link';

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <header>
      <nav className='w-full p-6'>
        <div className='max-w-5xl mx-auto flex flex-row items-center justify-between md:px-5'>
          <img src='/svgs/logo.svg' alt='logo' />
          <div />
          {/* Desktop nav */}
          <div>
            <ul className='hidden md:flex flex-row space-x-6 items-center'>
              <li>
                <HashLink className='desktop-nav-items' to={'/'}>
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink className='desktop-nav-items' to={'#about'}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink className='desktop-nav-items' to={'#projects'}>
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink className='desktop-nav-items' to={'#testimonails'}>
                  Testimonails
                </HashLink>
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
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            />
          </button>
        </div>
      </nav>
      {/* Mobile nav drawer */}
      {isOpen && <NavbarMenuSlider isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Navbar;
