'use client';
import { useStaggerAnimation } from './useStaggerAnimation';

type LeaderProps = {
  name: string;
  role: string;
  image: string;
  index: number;
};

export default function LeaderCard({ name, role, image, index }: LeaderProps) {
  const { ref, isVisible, delayClass } = useStaggerAnimation((index + 1) * 200);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
      className={`fade-slide-hidden ${isVisible && 'fade-slide-show'}`}
    >
      <div className='w-full h-[250px] mx-auto max-w-xs p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-103 transition-transform duration-300 ease-in-out text-center'>
        <img
          src={image}
          alt={name}
          className='w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-zomi-green-less'
        />
        <h4 className='font-semibold text-gray-800 break-words text-center max-w-[200px] mx-auto'>
          {name}
        </h4>
        <p className='text-sm text-gray-600'>{role}</p>
      </div>
    </div>
  );
}
