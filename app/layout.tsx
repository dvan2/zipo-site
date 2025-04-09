import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Zomi Inkuan Portland Oregon',
  description: 'Showcasing Portland Zomi community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 text-gray-800'>
        <Navbar />
        <main className='max-w-5xl mx-auto p-6'>{children}</main>
      </body>
    </html>
  );
}
