import { useEffect } from 'react';
import { Drawer } from 'vaul';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { IoHome } from 'react-icons/io5';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { GoProjectSymlink, GoCodeReview } from 'react-icons/go';
import { HashLink } from 'react-router-hash-link';

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
              <li>
                <HashLink
                  className='mobile-slider-nav'
                  to='/'
                  onClick={() => setIsOpen(false)}
                >
                  <IoHome className='inline-block -translate-y-0.5 text-2xl mr-3 ' />{' '}
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  className='mobile-slider-nav'
                  to='#about'
                  onClick={() => setIsOpen(false)}
                >
                  <MdOutlineRoundaboutRight className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  className='mobile-slider-nav'
                  to='#projects'
                  onClick={() => setIsOpen(false)}
                >
                  <GoProjectSymlink className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink
                  className='mobile-slider-nav'
                  to='#testimonials'
                  onClick={() => setIsOpen(false)}
                >
                  <GoCodeReview className='inline-block -translate-y-0.5 text-2xl mr-3' />{' '}
                  Testimonials
                </HashLink>
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
