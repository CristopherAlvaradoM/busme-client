import React from 'react';
import Link from 'next/link';

const BusmeButton = ({ text, icon, linkTo }: { text: string; icon: JSX.Element; linkTo: String; }) => {
  return (
    <Link href={linkTo}>
      <div className='flex items-center justify-center'>
        {icon}
        <span className='ml-2'>{text}</span>
      </div>
    </Link>
  );
};

export default BusmeButton;