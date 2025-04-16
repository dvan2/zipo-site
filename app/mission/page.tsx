import PageHeader from '@/components/PageHeader';

export default function Mission() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-12'>
      <PageHeader title='Our Mission' />
      <p className='body-lg'>
        The mission of Zomi Innkuan is to preserve our cultural identity, uplift
        our community, and foster unity through social engagement, support
        programs, and cultural events. We strive to be a beacon for Zomi
        individuals and families living in Portland by celebrating our heritage
        and empowering the next generation.
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
