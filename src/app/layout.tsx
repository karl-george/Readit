import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Readit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className='min-h-screen pt-12 antialiased bg-slate-50'>
        <Providers>
          {/* @ts-expect-error server component */}
          <Navbar />
          {authModal}
          <div className='container h-full pt-12 mx-auto max-w-7xl'>
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
