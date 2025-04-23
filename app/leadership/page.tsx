import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

export default function LeadershipPage() {
  return (
    <Wrapper>
      <PageHeader title='Leadership & Vision' />

      {/* President’s Message */}
      <section className='mb-16'>
        <h2 className='text-xl font-heading font-semibold text-zomi-red mb-4'>
          Message from Our President
        </h2>
        <p className='italic text-gray-700 mb-6'>
          "Together, we celebrate our heritage, embrace unity, and build a
          legacy for generations to come. Our mission is not just about
          preserving culture — it's about empowering our people to thrive and
          lead with dignity in every step of their journey."
        </p>
        <p className='text-base text-gray-800 font-semibold mb-2'>
          — En Khan Khai, President
        </p>
      </section>

      {/* Organizational Structure */}
      <section>
        <h2 className='text-xl font-heading font-semibold text-zomi-red mb-4'>
          Our Organizational Structure
        </h2>

        {/* Option A: Org Chart Image */}
        <img
          src='/images/board_members.jpg'
          alt='ZIPO Organizational Chart'
          className='rounded-xl shadow-md mx-auto max-w-3xl w-full object-cover mb-6'
        />

        {/* Option B: Leadership List (optional to add under image) */}
        <ul className='text-base text-gray-800 space-y-2 max-w-2xl mx-auto'>
          <li>
            <strong>President:</strong> En Khan Khai
          </li>
          <li>
            <strong>Vice President:</strong> [Name]
          </li>
          <li>
            <strong>General Secretary:</strong> [Name]
          </li>
          <li>
            <strong>Youth Leader:</strong> [Name]
          </li>
          <li>
            <strong>Finance Chair:</strong> [Name]
          </li>
        </ul>
      </section>
    </Wrapper>
  );
}
