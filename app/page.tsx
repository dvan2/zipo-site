'use client';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div className='bg-background text-foreground font-sans'>
      <section
        className='relative w-screen bg-cover bg-fixed bg-[50%_55%] text-white py-64 px-4 text-center'
        style={{ backgroundImage: "url('/images/group_star.jpg')" }}
      >
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10'>
          <Parallax speed={-10}>
            <h2 className='text-5xl md:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-16'>
              Welcome to{' '}
              <span className='text-accent'>Zomi Innkuan Portland Oregon</span>
            </h2>
          </Parallax>
          <Parallax speed={-10}>
            <p className='text-lg text-gray-100 max-w-xl mx-auto mb-16'>
              Making an impact by preserving our cultural heritage and uniting
              Zomi families in Portland.
            </p>
          </Parallax>
          <Parallax speed={-10}>
            <a
              href='#events'
              className='bg-zomi-red-less text-white px-6 py-2 rounded font-semibold hover:bg-zomi-green-less transition'
            >
              Join the Celebration
            </a>
          </Parallax>
        </div>
      </section>
      <section id='about' className='max-w-4xl mx-auto py-16 px-6 text-center'>
        <h3 className='text-2xl font-bold mb-4'>About Us</h3>
        <p className='text-lg text-gray-700'>
          Zomi Innkuan Portland is a vibrant community fostering unity among
          Zomi families through cultural celebrations, support, and leadership.
        </p>
      </section>

      <section id='events' className='bg-gray-800 py-16 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-2xl font-bold mb-4'>Upcoming Event</h3>
          <div className='bg-white dark:bg-gray-900 p-6 rounded shadow'>
            <h4 className='text-xl font-semibold text-zomi-red'>
              Zomi Nam Ni - KUM 76 CIN
            </h4>
            <p className='text-gray-600 dark:text-gray-300 mb-2'>
              Feb 17, 2024 | 1:00 PM - 5:00 PM
            </p>
            <p className='text-gray-700 dark:text-gray-200 mb-4'>
              3300 Bryant Irvin Rd, Fort Worth, TX
            </p>
            <a
              href='#'
              className='text-zomi-green font-semibold hover:underline'
            >
              See All Events
            </a>
          </div>
        </div>
      </section>

      {/* 
      <section id='gallery' className='max-w-6xl mx-auto py-16 px-6'>
        <h3 className='text-2xl font-bold text-center mb-8'>Gallery</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <img
            src='/images/photo1.jpg'
            alt='Event 1'
            className='rounded shadow'
          />
          <img
            src='/images/photo2.jpg'
            alt='Event 2'
            className='rounded shadow'
          />
          <img
            src='/images/photo3.jpg'
            alt='Event 3'
            className='rounded shadow'
          />
        </div>
       </section>  */}

      {/* Footer */}
      <footer
        id='contact'
        className='bg-zomi-red text-white border-t-30 border-b-30 border-zomi-green-less py-10 text-center'
      >
        <div className='max-w-4xl mx-auto'>
          <p className='mb-2 font-semibold'>Zomi Innkuan Portland Oregon</p>
          <p>Email: info@zomiportland.org</p>
          <p>Facebook: @ZomiInnkuanPortland</p>
        </div>
      </footer>
    </div>
  );
}
