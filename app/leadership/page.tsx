import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

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
          {[
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
          ].map((leader) => (
            <div
              key={leader.name}
              className='text-center p-6 rounded-xl shadow hover:shadow-lg transition'
            >
              <img
                src={leader.image}
                alt={leader.name}
                className='w-28 h-28 object-cover rounded-full mx-auto mb-4 border-2 border-zomi-green-less'
              />
              <h4 className='font-semibold text-gray-800'>{leader.name}</h4>
              <p className='text-sm text-gray-600'>{leader.role}</p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
