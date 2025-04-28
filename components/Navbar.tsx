'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Events', href: '/events' },
  { label: 'Activities', href: '/activities' },
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

          <div className='hidden md:flex space-x-8 text-base font-light text-gray-700'>
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link relative ${
                  pathname === href
                    ? 'text-zomi-green-less font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle Menu'>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-2'>
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block nav-link ${
                pathname === href ? 'text-zomi-green-less font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
