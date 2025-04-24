import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faInstagramSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import SocialButton from './SocialButton'; // Adjust path as needed

export default function Footer() {
  return (
    <footer className='py-8 border-zomi-green-less'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* <div className='flex flex-col md:flex-row justify-center gap-12 text-center md:text-left mb-10'>
          <div>
            <p className='font-semibold'>Address:</p>
            <p>123 Main St</p>
            <p>Portland, OR 97234</p>
          </div>
          <div>
            <p className='font-semibold'>Services:</p>
            <p>Youth Service: Saturday 7:30 pm</p>
            <p>Regular Service: Sunday 4:00 pm</p>
          </div>
        </div> */}

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
            hoverColor='hover:bg-zomi-green-less hover:text-white'
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
