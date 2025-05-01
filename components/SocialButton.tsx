import { ReactNode } from 'react';

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  hoverColor: string;
}

export default function SocialButton({
  href,
  icon,
  label,
  hoverColor,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`group flex items-center rounded-full h-[50px] w-auto md:w-[50px] md:hover:w-[150px] transition-all duration-300 text-zomi-white shadow overflow-hidden px-3 ${hoverColor}`}
    >
      {icon}
      <span className='ml-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap'>
        {label}
      </span>
    </a>
  );
}
