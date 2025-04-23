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
      className={` p-6 rounded-xl shadow-md text-center transform transition-all duration-700 ease-out
        ${isVisible ? `fade-slide-show ${delayClass}` : 'fade-slide-hidden'}`}
    >
      <img
        src={image}
        alt={name}
        className='w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-zomi-green-less'
      />
      <h4 className='font-semibold text-gray-800'>{name}</h4>
      <p className='text-sm text-gray-600'>{role}</p>
    </div>
  );
}
