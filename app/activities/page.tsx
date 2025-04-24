import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

export default function ActivitiesPage() {
  return (
    <>
      <Wrapper>
        <PageHeader title='Activities' />
        {/* Community Sports Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-heading text-zomi-green-less mb-4'>
            Zomi Sports Day
          </h2>
          <p className='text-base text-gray-700 mb-6 leading-relaxed'>
            Every summer, ZIPO hosts Zomi Sports Day—a joyful event bringing
            families together to bond over friendly competition. Community
            members gather at a local park to enjoy traditional games like
            volleyball, soccer, and sepak takraw (chinlone). Families relax with
            picnic blankets and food, while youth connect through teamwork and
            laughter.
          </p>
          <p className='text-base reading-relaxed text-gray-700 mb-4'>
            At the end of the day, we award trophies to top performers. This day
            is often the only outdoor activity of the year for some families, so
            we cherish the chance to be together in nature.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
            <img
              src='/images/trophy.jpg'
              alt='ZIPO FC Soccer Team'
              className='rounded-lg shadow-md'
            />
            <img
              src='/images/playing.jpg'
              alt='Chinlone Game in Action'
              className='rounded-lg shadow-md'
            />
          </div>
        </section>

        {/* Cultural Celebrations */}
        <section className='mb-16'>
          <h2 className='text-2xl font-heading text-zomi-green-less mb-4'>
            Cultural Celebrations
          </h2>

          {/* Khuado Festival */}
          <div className='mb-10'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Khuado Festival
            </h3>
            <p className='text-base text-gray-700 leading-relaxed'>
              Khuado is our traditional harvest festival and the Zomi New Year.
              We honor our ancestors by visiting their graves and making food
              offerings, then gather for singing, dancing, and storytelling. It
              is a time of cultural pride and unity—passed down from generation
              to generation.
            </p>
          </div>

          {/* Zomi National Day */}
          <div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Zomi National Day
            </h3>
            <p className='text-base text-gray-700 leading-relaxed'>
              Zomi National Day celebrates our shared identity and the spirit of
              unity. It features cultural dances, traditional fashion,
              exhibitions, and speeches from community leaders. ZIPO hosts this
              event to celebrate the resilience and rich heritage of the Zomi
              people.
            </p>
          </div>
        </section>

        {/* National Fellowship */}
        <section className='mb-8'>
          <h2 className='text-2xl font-heading text-zomi-red-less mb-4'>
            National Fellowship – ZIUSA Tulsa
          </h2>
          <p className='text-base text-gray-700 leading-relaxed mb-4'>
            Each year, ZIPO youth and leaders travel to Tulsa, Oklahoma to
            attend the ZIUSA Fellowship Gathering. This is a key national event
            connecting Zomi communities across the U.S. Portland’s own ZIPO FC
            represents our youth in symbolic soccer matches while attendees
            enjoy cultural performances and workshops.
          </p>
          <p className='text-base text-gray-700 leading-relaxed'>
            It is a time for the next generation to build friendships, learn
            leadership, and strengthen bonds with Zomi communities beyond
            Portland.
          </p>
        </section>
      </Wrapper>
    </>
  );
}
