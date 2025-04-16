import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import ParallaxClientWrapper from '@/components/ParallaxClientWrapper';
import Footer from '@/components/Footer';

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
      <body className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
        <Navbar />
        <main className='flex-grow'>
          <ParallaxClientWrapper>{children}</ParallaxClientWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
