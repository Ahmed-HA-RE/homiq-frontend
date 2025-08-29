import { useEffect } from 'react';
import { Drawer } from 'vaul';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { IoHome } from 'react-icons/io5';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { GoProjectSymlink, GoCodeReview } from 'react-icons/go';
import { NavHashLink } from 'react-router-hash-link';

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
      direction='left'
      open={isOpen}
      onOpenChange={setIsOpen}
      modal={true}
    >
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='left-0 top-0 bottom-0 fixed z-10 outline-none w-[300px]'>
          <div className='bg-zinc-50 h-full w-full grow px-2 py-16 rounded'>
            <ul className='flex flex-col space-y-3'>
              <li
                onClick={() => setIsOpen(false)}
                className='font-medium cursor-pointer rounded-full p-4 hover:bg-blue-200/40'
              >
                <NavHashLink className='text-sm' to='/'>
                  <IoHome className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Home
                </NavHashLink>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className='font-medium cursor-pointer p-4 rounded-full hover:bg-blue-200/40 '
              >
                <NavHashLink className='text-sm' to='#about'>
                  <MdOutlineRoundaboutRight className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  About
                </NavHashLink>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className='font-medium cursor-pointer p-4 rounded-full hover:bg-blue-200/40'
              >
                <NavHashLink className='text-sm' to='#projects'>
                  <GoProjectSymlink className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Projects
                </NavHashLink>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className='font-medium cursor-pointer p-4 rounded-full hover:bg-blue-200/40'
              >
                <NavHashLink className='text-sm' to='#testimonials'>
                  <GoCodeReview className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Testimonials
                </NavHashLink>
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
