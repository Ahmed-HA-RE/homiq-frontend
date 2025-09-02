import { useEffect } from 'react';
import { Drawer } from 'vaul';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { IoHome } from 'react-icons/io5';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';
import { GrContact } from 'react-icons/gr';
import { NavLink } from 'react-router';

type NavbarMenuSliderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavbarMenuSlider({
  isOpen,
  setIsOpen,
}: NavbarMenuSliderProps) {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    // Initial check
    if (mediaQuery.matches) {
      setIsOpen(false);
    }
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [setIsOpen]);

  return (
    <Drawer.Root
      direction='right'
      open={isOpen}
      onOpenChange={setIsOpen}
      modal={true}
    >
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40 ' />
        <Drawer.Content className='right-0 top-0 bottom-0 fixed z-50 outline-none w-[300px]'>
          <div className='bg-zinc-50 h-full w-full grow py-16'>
            <div className='mb-10'>
              <img
                className='w-6 h-6 absolute right-4 top-8 cursor-pointer'
                src='/svgs/cross_icon.svg'
                alt='close-btn'
                onClick={() => setIsOpen(false)}
              />
            </div>

            <ul className='flex flex-col text-center  divide-y-2 divide-black'>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'mobile-slider-nav bg-blue-200/40'
                      : 'mobile-slider-nav'
                  }
                  to='/'
                  onClick={() => setIsOpen(false)}
                >
                  <IoHome className='inline-block -translate-y-0.5 text-2xl mr-3 ' />{' '}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'mobile-slider-nav bg-blue-200/40'
                      : 'mobile-slider-nav'
                  }
                  to='/projects'
                  onClick={() => setIsOpen(false)}
                >
                  <GoProjectSymlink className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'mobile-slider-nav bg-blue-200/40'
                      : 'mobile-slider-nav'
                  }
                  to='/about'
                  onClick={() => setIsOpen(false)}
                >
                  <MdOutlineRoundaboutRight className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'mobile-slider-nav bg-blue-200/40'
                      : 'mobile-slider-nav'
                  }
                  to='/contact'
                  onClick={() => setIsOpen(false)}
                >
                  <GrContact className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </Drawer.Content>
        <VisuallyHidden>
          <Drawer.Title>Navigation Menu</Drawer.Title>
          <Drawer.Description>
            This drawer contains the main navigation links: Home, Projects,
            About, and Testimonials. Use the escape key or click outside to
            close it.
          </Drawer.Description>
        </VisuallyHidden>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
