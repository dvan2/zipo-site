export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className='max-w-5xl mx-auto px-6 pb-12'>{children}</div>;
}
