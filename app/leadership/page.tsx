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
      <section className='mt-16'>
        <h2 className='text-2xl font-heading font-semibold text-zomi-red mb-8 text-center'>
          Our Leadership Team
        </h2>

        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} {...leader} index={index} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
