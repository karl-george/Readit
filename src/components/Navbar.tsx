import Link from 'next/link';
import { Icons } from './Icons';
import { buttonVariants } from './ui/Button';
import { getAuthSession } from '@/lib/auth';
import User from '@/lib/usermock';
import UserAccountNav from './UserAccountNav';

const Navbar = async () => {
  // const session = await getAuthSession();
  // const user = User;
  const user = null;

  return (
    <div className='fixed inset-x-0 top-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <Icons.logo className='w-8 h-8 sm:h-6 sm:w-6' />
          <p className='hidden text-sm font-medium text-zinc-700 md:block'>
            Readit
          </p>
        </Link>

        {/* Searchbar */}

        {/* Auth */}
        {user?.username ? (
          <UserAccountNav user={user} />
        ) : (
          <Link href='/sign-up' className={buttonVariants()}>
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
