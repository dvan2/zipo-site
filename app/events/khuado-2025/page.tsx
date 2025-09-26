import Wrapper from '@/components/Wrapper';
import PageHeader from '@/components/PageHeader';

export default function Khuado2025() {
  return (
    <Wrapper>
      <PageHeader title='Khuado Pawi 2025' />
      <div className='text-lg text-gray-700 leading-relaxed space-y-6'>
        <p>
          Join us for the annual <strong>Khuado Pawi</strong> celebration hosted
          by Zomi Innkuan Portland Oregon — a beautiful tradition of honoring
          harvest, heritage, and unity!
        </p>
        <p>
          📅 <strong>Date:</strong> October 11, 2025 – 4:00 PM to 9:00 PM
        </p>
        <p>
          📍 <strong>Location:</strong>{' '}
          <a
            href='https://www.google.com/maps/search/?api=1&query=MHCC+Theatre,+26000+SE+Stark+St,+Gresham,+OR+97030'
            target='_blank'
            rel='noopener noreferrer'
            className='text-zomi-green hover:underline'
          >
            MHCC Theatre, 26000 SE Stark St, Gresham, OR 97030
          </a>
        </p>
        <img
          src='/images/khuado_25.jpg'
          alt='Khuado Pawi 2025 Poster'
          className='rounded-xl shadow-md w-full max-w-xl mx-auto'
        />
      </div>
    </Wrapper>
  );
}
