'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/' className='flex'>
            <Image
              src='/images/ziporound.png'
              alt='ZIPO logo'
              width={100}
              height={100}
            />
          </Link>

          <div className='hidden md:flex space-x-8 text-base font-light text-gray-700'>
            <Link href='/' className='nav-link'>
              About Us
            </Link>
            <Link href='/mission' className='nav-link'>
              Mission
            </Link>
            <Link href='/activities' className='nav-link'>
              Activities
            </Link>
            <Link href='#about' className='nav-link'>
              History
            </Link>
            <Link href='#contact' className='nav-link'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
