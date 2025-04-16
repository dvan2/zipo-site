import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

export default function About() {
  return (
    <Wrapper>
      <PageHeader title='About Us' />
      <p className='text-lg text-gray-700 leading-relaxed'>
        Zomi Innkuan Portland is a vibrant community fostering unity among Zomi
        families through cultural celebrations, support, and leadership.
      </p>
    </Wrapper>
  );
}
