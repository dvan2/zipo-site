import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import ParallaxClientWrapper from '@/components/ParallaxClientWrapper';

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
        <ParallaxClientWrapper>{children}</ParallaxClientWrapper>
      </body>
    </html>
  );
}
