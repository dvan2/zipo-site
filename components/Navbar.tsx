// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='bg-gray-800 text-white p-4 shadow'>
      <div className='max-w-5xl mx-auto flex gap-6'>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:underline ${
              pathname === item.href ? 'font-bold underline' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
