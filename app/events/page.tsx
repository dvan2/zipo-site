import { events } from '@/data/events';
import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

export default function EventsPage() {
  const now = new Date();

  const upcomingEvents = events.filter((event) => new Date(event.date) > now);
  const pastEvents = events.filter((event) => new Date(event.date) <= now);

  return (
    <Wrapper>
      <PageHeader title='All Events' />

      {/* Upcoming Events */}
      <section className='mb-16'>
        <h2 className='text-2xl font-bold text-zomi-green-less mb-8 text-center'>
          Upcoming Events
        </h2>
        {upcomingEvents.length > 0 ? (
          <div className='grid gap-8'>
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-500'>No upcoming events.</p>
        )}
      </section>

      {/* Past Events */}
      <section>
        <h2 className='text-2xl font-bold text-zomi-red mb-8 text-center'>
          Past Events
        </h2>
        {pastEvents.length > 0 ? (
          <div className='grid gap-8'>
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-500'>No past events yet.</p>
        )}
      </section>
    </Wrapper>
  );
}

/* 👇 helper components inside same file */
function EventCard({
  title,
  date,
  location,
  link,
}: {
  title: string;
  date: string;
  location: string;
  link: string;
}) {
  return (
    <div className='bg-[#dfeee1] border border-gray-200 rounded-2xl shadow-md p-8 text-center'>
      <h4 className='text-2xl font-semibold text-zomi-red mb-2'>{title}</h4>
      <p className='text-gray-700 mb-1'>
        <strong>Date:</strong> {formatDate(date)}
      </p>
      <p className='text-gray-700 mb-4'>
        <strong>Location:</strong> {location}
      </p>
      <a
        href={link}
        className='inline-block mt-4 text-zomi-green font-semibold hover:underline'
      >
        View Details
      </a>
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
  };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}
