import {
  Send,
  Building,
  HomeIcon,
  HousePlus,
  UsersIcon,
  Menu,
} from 'lucide-react';

import UserMenu from '~/components/Navbar/user-menu';
import { Button } from '~/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '~/components/ui/navigation-menu';
import { Popover, PopoverTrigger } from '~/components/ui/popover';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip';
import { Link } from 'react-router';
import { useAuthStore } from '~/store/authstore';
import { useDisclosure } from '@mantine/hooks';
import NavbarDrawer from '../ui/NavbarDrawer';

//
// Navigation links with icons for desktop icon-only navigation
const baseLinks = [
  { href: '/', label: 'Home', icon: HomeIcon, active: true },
  { href: '/properties', label: 'Properties', icon: Building },
  { href: '/about', label: 'About Us', icon: UsersIcon },
];

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const user = useAuthStore((state) => state.user);
  const dynamicLinks = [
    user && { href: '/property/new', label: 'Add Property', icon: HousePlus },
    user && { href: '/contact-us', label: 'Contact Us', icon: Send },
  ].filter(Boolean);
  const navigationLinks = [...baseLinks, ...dynamicLinks];

  return (
    <nav className='px-4 md:px-6 bg-white shadow-black border-b border-b-gray-200  '>
      <div className='flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto'>
        {/* Left side */}
        <div className='flex flex-1 items-center gap-2'>
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className='group size-8 md:hidden transition-all duration-200 cursor-pointer hover:bg-black hover:text-white text-black'
                variant='ghost'
                size='icon'
                onClick={open}
              >
                <Menu />
              </Button>
            </PopoverTrigger>
          </Popover>
          <div className='flex items-center gap-6'>
            {/* Logo */}
            <Link to='/' className='pb-0.5 text-black font-semibold text-xl '>
              Homiq
            </Link>
            {/* Desktop navigation - icon only */}
            <NavigationMenu className='hidden md:flex'>
              <NavigationMenuList className='gap-2'>
                <TooltipProvider>
                  {navigationLinks.map((link) =>
                    link ? (
                      <NavigationMenuItem key={link.label}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              to={link.href}
                              className='flex items-center hover:bg-cyan-500 justify-center p-1.5 rounded transition duration-200'
                            >
                              <link.icon
                                className='text-black'
                                aria-hidden='true'
                                size={18}
                              />
                              <span className='sr-only'>{link.label}</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent
                            side='bottom'
                            className='px-2 py-1 text-xs'
                          >
                            <p>{link.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      </NavigationMenuItem>
                    ) : null
                  )}
                </TooltipProvider>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className='flex items-center gap-2'>
          {/* User menu */}
          {user ? (
            <UserMenu />
          ) : (
            <Button asChild>
              <Link to='/signup'>Get Started</Link>
            </Button>
          )}
        </div>
      </div>
      <NavbarDrawer opened={opened} close={close} />
    </nav>
  );
}
