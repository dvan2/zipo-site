'use client';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div className='bg-background text-foreground font-sans'>
      <section
        className='relative w-full bg-cover bg-fixed bg-[50%_55%] text-white py-64 px-4 text-center'
        style={{ backgroundImage: "url('/images/group_star.jpg')" }}
      >
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10'>
          <Parallax speed={-10}>
            <h2 className='text-5xl md:text-6xl font-bold font-heading leading-tight mb-16 fade-in'>
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

      <section id='events' className='bg-[#fefae0] py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-3xl font-bold text-gray-900 font-heading mb-10'>
            Upcoming Event
          </h3>
          <div className='bg-[#dfeee1] border border-gray-200 rounded-2xl shadow-md p-8 text-center'>
            <h4 className='text-2xl font-semibold text-zomi-red mb-2'>
              Zomi Nam Ni - KUM 76 CIN
            </h4>

            <p className='text-gray-700 mb-1'>
              <strong>Date:</strong> Feb 17, 2024 | 1:00 PM - 5:00 PM
            </p>

            <p className='text-gray-700 mb-4'>
              <strong>Location:</strong> 12003 NE Shaver St, Portland, OR 97220{' '}
              <br /> Parkrose High School
            </p>

            <a
              href='#'
              className='inline-block mt-4 text-zomi-green font-semibold hover:underline'
            >
              See All Events
            </a>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section id='gallery' className='bg-py-16 px-6 mb-16'>
        <h3 className='text-2xl font-heading font-semibold text-center mb-8'>
          From Our Celebrations
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto'>
          <img
            src='/images/group_star.jpg'
            alt='Zomi event 1'
            className='rounded shadow'
          />
          <img
            src='/images/khuado_lam.jpg'
            alt='Zomi event 2'
            className='rounded shadow'
          />
          <img
            src='/images/khuado_lam.jpg'
            alt='Zomi event 3'
            className='rounded shadow'
          />
        </div>
      </section>
    </div>
  );
}
