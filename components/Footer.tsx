import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialButton from './SocialButton'; // Adjust path as needed
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full bg-zomi-red-less text-white py-12 border-t-4 border-zomi-green mx-auto'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:gap-8 gap-12'>
        {/* Left info */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <Image
            src='/images/ziporound.png' // Make sure you have this logo
            alt='ZIPO Logo'
            width={60}
            height={60}
            className='mb-4'
          />
          <p className='text-lg font-bold mb-2'>Zomi Innkuan Portland Oregon</p>
          <p className='text-sm'>2181 SE 171ST Ave, Portland, OR 97233</p>
          <p className='text-sm'>Phone: +1 (503) 875-4790</p>
          <p className='text-sm'>Email: zomiinnkuanportlandoregon@gmail.com</p>
        </div>

        {/* Middle Section */}
        <div className='flex flex-col items-center text-center md:text-left gap-2'>
          <h4 className='font-semibold text-lg mb-2 mt-6 md:mt-0'>
            Quick Links
          </h4>
          <a
            href='/about'
            className='nav-link text-white hover:text-zomi-yellow'
          >
            About Us
          </a>
          <a
            href='/activities'
            className='nav-link text-white hover:text-zomi-yellow'
          >
            Activities
          </a>
          <a
            href='/leadership'
            className='nav-link text-white hover:text-zomi-yellow'
          >
            Leadership
          </a>
          <a
            href='/contact'
            className='nav-link text-white hover:text-zomi-yellow'
          >
            Contact Us
          </a>
        </div>

        <div className='flex flex-col justify-center items-center gap-3 md:text-right min-w-[160px]'>
          <h4 className='font-semibold text-lg mb-2'>Follow Us</h4>
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
      <div className='mt-10 border-t border-white/20 pt-6 text-center text-xs text-gray-300'>
        &copy; {new Date().getFullYear()} Zomi Innkuan Portland Oregon. All
        rights reserved.
      </div>
    </footer>
  );
}
