'use client';
import { CalendarX2 } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';
import { events } from '@/data/events';
import { isFuture } from 'date-fns'; // We can use tiny library, or JS Date
import Link from 'next/link';

export default function Home() {
  const upcomingEvents = events.filter(
    (event) => new Date(event.endDate) > new Date()
  );

  const galleryImages = [
    { src: '/images/khuado_lam.jpg', alt: 'Khuado Lam' },
    { src: '/images/new_year_park.jpg', alt: 'Zomi event 3' },
    { src: '/images/youth_khuado.jpg', alt: 'Khuado Youth' },
  ];

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
              className='bg-zomi-red text-white px-6 py-2 rounded font-semibold hover:bg-zomi-green transition'
            >
              Join the Celebration
            </a>
          </Parallax>
        </div>
      </section>

      <section id='events' className='pt-20 pb-8 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-3xl font-bold text-gray-900 font-heading mb-10'>
            Upcoming Event
          </h3>

          {upcomingEvents.length > 0 ? (
            <div className='grid gap-8'>
              {upcomingEvents.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  className='bg-[#dfeee1] border border-gray-200 rounded-2xl shadow-md p-8 text-center'
                >
                  <h4 className='text-2xl font-semibold text-zomi-red mb-4'>
                    {event.title}
                  </h4>
                  <p className='text-gray-700 mb-2'>
                    📅 <strong>Date:</strong> {formatDate(event.startDate)} –{' '}
                    {formatDate(event.endDate)}
                  </p>

                  <p className='text-gray-700 mb-4'>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <a
                    href={event.link}
                    className='inline-block mt-4 text-zomi-green font-semibold hover:underline'
                  >
                    View Details
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className='bg-[#dfeee1] border border-gray-200 rounded-2xl shadow-md p-8 text-center flex flex-col items-center'>
              <CalendarX2 className='w-16 h-16 text-zomi-red mb-4' />
              <h4 className='text-2xl font-semibold text-zomi-red mb-2'>
                No events scheduled at the moment.
              </h4>
              <p className='text-gray-700 mb-4 max-w-md'>
                Please check back soon or follow us on{' '}
                <a
                  href='https://www.facebook.com/ZomiInnkuanPortlandOregon'
                  target='_blank'
                  className='text-zomi-green font-semibold hover:underline'
                >
                  Facebook
                </a>{' '}
                for the latest updates!
              </p>
            </div>
          )}

          {/* <Link
            href='/events'
            className='inline-block mt-10 text-zomi-green font-semibold hover:underline'
          >
            See All Events
          </Link> */}
        </div>
      </section>

      {/* Gallery section */}
      <section id='gallery' className='py-16 px-6 mb-16'>
        <h3 className='text-2xl font-heading font-semibold text-center mb-8'>
          From Our Celebrations
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className='card-style h-65 object-cover'
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function formatDate(dateStr: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return new Date(dateStr).toLocaleDateString('en-US', options);
}
