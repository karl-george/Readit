import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { User } from 'next-auth';

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default UserAccountNav;
