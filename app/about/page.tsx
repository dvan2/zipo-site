import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

export default function About() {
  return (
    <Wrapper>
      <PageHeader title='About Us' />

      <h2 className='text-xl font-heading font-semibold text-zomi-red mb-4 mt-4'>
        Who We Are
      </h2>
      <p className='text-lg text-gray-700 leading-relaxed mb-10'>
        Zomi Innkuan Portland Oregon is a welcoming community united by
        heritage, culture, and mutual support. We bring Zomi families together
        through vibrant cultural events and shared values.
      </p>

      {/* Mission Block */}
      <div className='border-l-4 border-zomi-green-less p-6 rounded-lg shadow-sm fade-in mb-10'>
        <h3 className='text-xl font-heading font-semibold text-zomi-red mb-2'>
          Our Mission
        </h3>
        <p className='text-base text-gray-800 leading-relaxed'>
          Our mission is to preserve and celebrate Zomi culture by engaging and
          unifying Zomi people in Portland. We strive to ensure that our
          language, traditions, and values are passed down with respect —
          fostering identity, connection, and unity for both today’s youth and
          generations to come.
        </p>
      </div>

      {/* Our Story Block*/}
      <div className='max-w-3xl mx-auto text-left'>
        <h3 className='text-xl font-heading font-semibold text-zomi-red mb-4'>
          Our Story
        </h3>

        <p className='text-base text-gray-800 leading-relaxed mb-6'>
          <strong>Zomi Innkuan Portland Oregon (ZIPO)</strong> was founded in
          2004 by the first Zomi families to settle in the area. In 2022, ZIPO
          became a 501(c)(3) nonprofit organization, officially establishing its
          role as a cultural and support hub for Zomi people in Oregon.
        </p>

        <p className='text-base text-gray-800 leading-relaxed mb-6'>
          The Zomi community traces its roots to northwest Myanmar and India,
          where our people lived in close-knit villages rooted in land
          stewardship and cultural tradition. Due to political and religious
          persecution, many Zomi were forced to flee their homeland and resettle
          as refugees across the world — including here in Portland.
        </p>

        {/* Community Photo */}
        <img
          src='/images/zomi_khuado_papi.jpg'
          alt='Zomi Khuado Papi Celebration'
          className='rounded-xl shadow-md mx-auto max-w-3xl w-full object-cover mb-4'
        />
        <p className='text-sm text-center text-gray-500 mb-8'>
          Celebrating Khuado Pawi — showcasing unity, community, culture, and
          heritage.
        </p>

        <p className='text-base text-gray-800 leading-relaxed mb-8'>
          Today, ZIPO provides a safe and welcoming space for Zomi families to
          stay connected to their heritage. Through cultural events, community
          programs, and youth engagement, we work to ensure that Zomi identity,
          language, and traditions are preserved for current and future
          generations.
        </p>
      </div>
    </Wrapper>
  );
}
