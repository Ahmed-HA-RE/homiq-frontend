import { BoltIcon, LogOutIcon, MapPinHouse } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/Avatar';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { useQuery } from '@tanstack/react-query';
import { getMe, logoutUser } from '~/api/auth';

import { Skeleton } from '../ui/skeleton';
import { useAuthStore } from '~/store/authstore';
import { useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router';

export default function UserMenu() {
  const user = useAuthStore((state) => state.user);
  const setLogout = useAuthStore((state) => state.setLogout);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getMe,
    enabled: !!user,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-auto p-0 hover:bg-transparent'>
          {isLoading ? (
            <Skeleton className='h-8 w-8 rounded-full bg-gray-300' />
          ) : (
            <Avatar className='cursor-pointer'>
              <AvatarImage src={data?.avatar} alt='Profile image' />
              <AvatarFallback className='text-lg'>
                {data?.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='max-w-64' align='end'>
        <DropdownMenuLabel className='flex min-w-0 flex-col'>
          <span className='text-foreground truncate text-sm font-medium font-outfit'>
            {data?.name}
          </span>
          <span className='text-muted-foreground truncate text-xs font-normal'>
            {data?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={'/settings/account'} className='cursor-pointer'>
              <BoltIcon size={16} className='opacity-60' aria-hidden='true' />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={'/my-properties'} className='cursor-pointer'>
              <MapPinHouse
                size={16}
                className='opacity-60'
                aria-hidden='true'
              />
              <span>My Properties</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onClick={async () => {
            await logoutUser();
            setLogout();
            navigate('/');
            queryClient.removeQueries({ queryKey: ['user'] });
          }}
        >
          <LogOutIcon size={16} className='opacity-60' aria-hidden='true' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
