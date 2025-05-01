'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
      <h1 className='text-4xl font-heading text-zomi-red mb-4'>
        Page Not Found
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        Sorry, the page you're looking for doesn't exist. It may be under
        construction or has been moved.
      </p>
      <Link
        href='/'
        className='px-6 py-2 bg-zomi-green-less text-white rounded font-semibold hover:bg-zomi-red-less transition'
      >
        Go Back Home
      </Link>
    </div>
  );
}
