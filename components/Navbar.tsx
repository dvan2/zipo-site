'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Add this!

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Activities', href: '/activities' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/' className='flex'>
            <Image
              src='/images/ziporound.png'
              alt='ZIPO logo'
              width={48}
              height={48}
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 text-base font-light text-gray-700'>
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link relative ${
                  pathname === href
                    ? 'text-blue-600 font-semibold after:w-full'
                    : 'text-gray-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Toggle Menu'
              className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200 transition'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-background/95 flex flex-col items-center justify-center space-y-8 z-40'
          >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-6 right-6 p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition'
              aria-label='Close Menu'
            >
              <X size={28} />
            </button>

            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold ${
                  pathname === href ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
