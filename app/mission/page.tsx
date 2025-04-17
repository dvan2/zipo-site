import PageHeader from '@/components/PageHeader';

export default function Mission() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-12'>
      <PageHeader title='Our Mission' />
      <p className='body-lg'>
        Our mission is to preserve and celebrate Zomi culture by engaging and
        empowering the younger generation. We strive to ensure that our
        language, traditions, and values are passed down with respect and
        admiration— fostering identity, connection, and unity for both today’s
        youth and generations to come.
      </p>
    </div>

    // <div className='grid md:grid-cols-3 gap-6 mt-10'>
    //   <div className='p-6 bg-white rounded-xl shadow text-center'>
    //     <h3 className='text-xl font-bold mb-2'>Cultural Preservation</h3>
    //     <p className='text-gray-600'>
    //       We organize events to celebrate and pass on our traditions.
    //     </p>
    //   </div>
    //   ...
    // </div>
  );
}
