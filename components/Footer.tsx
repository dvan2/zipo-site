import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faInstagramSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import SocialButton from './SocialButton'; // Adjust path as needed
import { Mail } from 'lucide-react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <footer className='py-8 mx-auto'>
      <div className='max-w-5xl px-6'>
        <div className='flex flex-col md:flex-row justify-start gap-12 text-center md:text-left mb-10'>
          <div>
            <p className='font-semibold'>Address:</p>
            <p>123 Main St</p>
            <p>Portland, OR 97234</p>
          </div>
          <div>
            <p className='font-semibold'>Phone:</p>
            <p>En Khai: +1 503-456-789</p>
            <p>En Khai: +1 503-456-789</p>
          </div>
        </div>

        <div className='flex justify-center gap-6 flex-wrap'>
          <SocialButton
            href='https://www.facebook.com/ZomiInnkuanPortlandOregon'
            icon={
              <FontAwesomeIcon
                icon={faFacebookF}
                className='text-lg min-w-[24px]'
              />
            }
            label='Facebook'
            hoverColor='hover:bg-zomi-green hover:text-white'
          />
          <SocialButton
            href='https://www.instagram.com/zomiinnkuanportland/'
            icon={
              <FontAwesomeIcon
                icon={faInstagram}
                className='text-lg min-w-[24px]'
              />
            }
            label='Instagram'
            hoverColor='hover:bg-red-600 hover:text-white'
          />
        </div>
      </div>
    </footer>
  );
}
