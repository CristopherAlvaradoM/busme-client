'use client'

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { IconBaseProps } from 'react-icons';
import { usePathname } from "next/navigation";

interface BusmeButtonProps {
    name: String;
    icon: React.ComponentType<IconBaseProps>;
    iconAlternative: React.ComponentType<IconBaseProps>;
    path: String;
    customClass?: String;
}

const BusmeNavButton: React.FC<BusmeButtonProps> = ({ name, path, icon: Icon, iconAlternative: IconAlternative, customClass }: BusmeButtonProps) => {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState()
    
    useEffect(() => {
        setIsActive(pathname === path || pathname.includes(`${path}/`));
    }, [pathname, path, setIsActive]);

    return (
        <Link href={path}>
            <div
                className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-madium font-poppins cursor-pointer
        transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 md:mt-2
        ${isActive ? 'text-white bg-primary-600' : ''} ${customClass || ''}
    `}>
                {isActive ? <IconAlternative className='w-[20px] h-[20px]' /> : <Icon className='w-[20px] h-[20px]' />}
                <p className='text-sm font-semibold'>{name}</p>
            </div>
        </Link>
    );
};

export default BusmeNavButton;