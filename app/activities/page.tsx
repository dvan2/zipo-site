import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-12'>
      <PageHeader title='Activities' />
      <p className='text-lg text-gray-700 leading-relaxed'>
        At Zomi Innkuan Portland, we regularly host cultural celebrations,
        community meetings, fundraising events, and youth programs to strengthen
        unity and preserve our Zomi heritage. Our activities aim to uplift,
        connect, and support Zomi families across generations.
      </p>
    </div>
  );
}
