'use client'

import React from 'react';
import Link from 'next/link';
import { IconBaseProps } from 'react-icons';
import { usePathname } from 'next/navigation';

interface BusmeButtonProps {
  text: string;
  icon: React.ComponentType<IconBaseProps>;
  alternateicon: React.ComponentType<IconBaseProps>;
  linkTo: string;
  customClass?: string; 
}

const BusmeButton: React.FC<BusmeButtonProps> = ({ text, linkTo, icon: Icon, alternateicon: AlternateIcon, customClass }) => {
  const pathname = usePathname()
  return (
    <Link href={linkTo}>
      <div 
      className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-madium font-poppins 
      hover:bg-primary-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 md:mt-2
      
      ${pathname === linkTo ? 'bg-primary-600 text-white' : ''} ${customClass ? customClass : ''}
      `} >
        {pathname === linkTo ? <AlternateIcon className="w-[20px] h-[20px]" /> : <Icon className="w-[20px] h-[20px]" />}
        <p className='ml-2'>{text}</p>
      </div>
    </Link>
  );
};

export default BusmeButton;