import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { User } from 'next-auth';
import UserAvatar from './UserAvatar';

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className='w-8 h-8'
          user={{ name: user.name || null, image: user.image || null }}
        />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default UserAccountNav;
