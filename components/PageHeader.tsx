export default function PageHeader({ title }: { title: string }) {
  return (
    <div className='text-center py-10 border-b border-gray-300 mb-10'>
      <h1 className='text-4xl font-bold font-[var(--font-heading)] text-gray-800'>
        {title}
      </h1>
    </div>
  );
}
