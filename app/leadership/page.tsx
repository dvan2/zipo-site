import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import LeaderCard from '@/components/LeaderCard';

const leaders = [
  {
    name: 'En Khan Khai',
    role: 'President',
    image: '/images/leaders/president.png',
  },
  {
    name: 'Mary Za Hnem',
    role: 'Vice President',
    image: '/images/leaders/president.png',
  },
  {
    name: 'Tuan Sung',
    role: 'Youth Leader',
    image: '/images/leaders/president.png',
  },
  {
    name: 'Lian Hmung',
    role: 'Secretary',
    image: '/images/leaders/president.png',
  },
];

export default function LeadershipPage() {
  return (
    <Wrapper>
      <PageHeader title='Leadership & Vision' />

      {/* President’s Message */}
      <section className='mt-12 mb-16'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl font-heading font-semibold text-zomi-red mb-4'>
            Message from Our President
          </h2>
          <p className='italic text-gray-700 mb-4'>
            "Together, we celebrate our heritage, embrace unity, and build a
            legacy for generations to come. Our mission is not just about
            preserving culture — it's about empowering our people to thrive and
            lead with dignity in every step of their journey."
          </p>
          <p className='text-base text-gray-800 font-semibold'>
            — En Khan Khai, President
          </p>
        </div>
      </section>

      {/* Group Photo */}
      <section className='mb-16'>
        <div className='max-w-4xl mx-auto px-4'>
          <img
            src='/images/leaders/group_photo.jpg'
            alt='ZIPO Leadership Group Photo'
            className='rounded-xl shadow-md w-full object-cover mb-4'
          />
          <p className='text-sm text-center text-gray-500'>
            Our 2024 board members with Sia Stephen Mang
          </p>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className='bg-[#fefae0] py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-2xl font-heading font-semibold text-zomi-red mb-10 text-center'>
            Our Organizational Structure
          </h2>

          <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {leaders.map((leader, index) => (
              <LeaderCard key={leader.name} {...leader} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
