import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Picasso test job',
  description: 'Tets work for picasso',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru' className={roboto.className}>
      <body>
        <main className='flex min-h-screen flex-col items-center justify-between'>{children}</main>
      </body>
    </html>
  );
}
