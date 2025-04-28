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
      className={`group flex items-center rounded-full h-[50px] w-[50px] hover:w-[150px] transition-all duration-300 text-zomi-red shadow overflow-hidden px-3 ${hoverColor}`}
    >
      {icon}
      <span className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap'>
        {label}
      </span>
    </a>
  );
}
