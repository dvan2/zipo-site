import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

export default function ZomiSportsDay2025() {
  return (
    <Wrapper>
      <PageHeader title='Zomi Community Sports Day 2025' />
      <div className='text-lg text-gray-700 leading-relaxed space-y-6'>
        <p>
          Join us for our annual <strong>Zomi Community Sports Day</strong> from{' '}
          <strong>July 31 to August 2, 2025</strong> at Parklane Park in
          Portland!
        </p>

        <ul className='list-disc list-inside'>
          <li>
            <strong>July 31 @ 6PM:</strong> Soccer & Volleyball
          </li>
          <li>
            <strong>August 1 @ 6PM:</strong> Soccer & Volleyball
          </li>
          <li>
            <strong>August 2 @ 2PM:</strong> Soccer, Volleyball, and Chinlone
          </li>
        </ul>
        <p>
          📍 <strong>Location:</strong>
          <a
            href='https://www.google.com/maps/search/?api=1&query=Parklane+Park,+SE+155th+Ave+%26+SE+Main+St,+Portland,+OR+97233'
            target='_blank'
            rel='noopener noreferrer'
            className='text-zomi-green hover:underline'
          >
            Parklane Park — SE 155<sup>th</sup> Ave & SE Main St, Portland, OR
            97233
          </a>
        </p>

        <p>
          🍛 <strong>Food will be available for purchase!</strong>
          <br />
          <span className='italic'>
            Tukum a tuam in ann ong ki vak lo ding a, ann ki lei thei ding hi.
            Tha pia kim tek ni!
          </span>
        </p>

        <p>
          🏆 Games a tuamtuan: Winner, first runner-up, second runner-up te leh
          best player pathawi na zong om ding hi!
        </p>

        <img
          src='/images/zomi-sports-day-2025.png'
          alt='Zomi Community Sports Day Poster'
          className='rounded-xl shadow-md w-full max-w-xl mx-auto'
        />
      </div>
    </Wrapper>
  );
}
