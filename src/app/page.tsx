import { buttonVariants } from '@/components/ui/Button';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold md:text-4xl'>Your Feed</h1>
      <div className='grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4'>
        {/* Feed */}
        {/* Subreddit Info */}
        <div className='order-first overflow-hidden border border-gray-200 rounded-lg h-fit md:order-last'>
          <div className='px-6 py-4 bg-emerald-100'>
            <p className='font-semibold py-3 flex items-center gap-1.5'>
              <HomeIcon className='w-4 h-4' />
              Home
            </p>
          </div>

          <div className='px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100'>
            <div className='flex justify-between py-3 gap-x-4'>
              <p className='text-zinc-500'>
                Your personal Readit home page. Come here to check in with your
                favourite communities.
              </p>
            </div>
            <Link
              href='/r/create'
              className={buttonVariants({ className: 'w-full mt-4 mb-6' })}
            >
              Create Community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
