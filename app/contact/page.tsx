import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <Wrapper>
      <PageHeader title='Contact Us' />

      <div className='max-w-3xl mx-auto text-center mb-12'>
        <p className='text-lg text-gray-700 leading-relaxed'>
          We’d love to hear from you. Whether you have a question, want to get
          involved, or need support — reach out anytime.
        </p>
      </div>

      <div className='bg-[#fefae0] rounded-xl shadow-md p-8 max-w-2xl mx-auto mb-12'>
        <div className='flex items-center mb-4'>
          <MapPin className='text-zomi-red mr-3' />
          <p className='text-gray-800'>2181 SE 171ST Ave, Portland, OR 97233</p>
        </div>
        <div className='flex items-center mb-4'>
          <Phone className='text-zomi-red mr-3' />
          <p className='text-gray-800'>(503) 875-4790</p>
        </div>
        <div className='flex items-center'>
          <Mail className='text-zomi-red mr-3' />
          <p className='text-gray-800'>zomiinnkuanportlandoregon@gmail.com</p>
        </div>
      </div>
      {/* Future: Add contact form here */}
    </Wrapper>
  );
}
