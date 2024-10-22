"use client"

import React from 'react';
import { IoHomeOutline, IoHome, IoPinOutline, IoPin, IoBusOutline, IoBusSharp, IoBarChartOutline, IoBarChart, IoMailUnreadOutline, IoSettingsOutline,
    IoSettings, IoMailUnread, IoLogOutOutline, IoLogOut, IoPersonOutline, IoPerson, IoPersonAddOutline, IoPersonAdd, IoIdCardOutline, IoIdCard, IoPeople, IoPeopleOutline
} from "react-icons/io5";
import BusmeLogo from "@/assets/img/busme-logo.jpeg";
import BusmeNavButton from './BusmeNavbutton';
import Image from 'next/image';
import { IconBaseProps } from 'react-icons';

interface ISidebarItem {
    name: string;
    path: string;
    icon: React.ComponentType<IconBaseProps>;
    alternateicon: React.ComponentType<IconBaseProps>;
    customClass?: string;
}

const itemsQuality: ISidebarItem[] = [
    {
        name: "Inicio",
        icon: IoHomeOutline,
        alternateicon: IoHome,
        path: "/quality",
    }
];

const itemsSuperadmin: ISidebarItem[] = [
    {
        name: "Inicio",
        icon: IoHomeOutline,
        alternateicon: IoHome,
        path: "/superadmin"
    },
    {
        name: "Equipo de trabajo",
        icon: IoPeopleOutline,
        alternateicon: IoPeople,
        path: "/superadmin/work-team"
    },
    {
        name: "Roles",
        icon: IoIdCardOutline,
        alternateicon: IoIdCard,
        path: "/superadmin/roles"
    }
];

const itemsAdmin: ISidebarItem[] = [
    {
        name: "Inicio",
        icon: IoHomeOutline,
        alternateicon: IoHome,
        path: "/admin"
    },

    {
        name: "Rutas",
        icon: IoPinOutline,
        alternateicon: IoPin,
        path: "/admin/routes"
    },

    {
        name: "Vehículos",
        icon: IoBusOutline,
        alternateicon: IoBusSharp,
        path: "/admin/vehicles"
    },


    {
        name: "Estadísticas",
        icon: IoBarChartOutline,
        alternateicon: IoBarChart,
        path: "/admin/statistics"
    },


    {
        name: "Avisos",
        icon: IoMailUnreadOutline,
        alternateicon: IoMailUnread,
        path: "/admin/notices"
    },

];

const itemsConfig: ISidebarItem[] = [
    {
        name: "Configuraciones",
        icon: IoSettingsOutline,
        alternateicon: IoSettings,
        path: "/",
    },
    {
        name: "Cerrar sesión",
        icon: IoLogOutOutline,
        alternateicon: IoLogOut,
        path: "/",
        customClass: "hover:bg-rojo text-danger"
    },
];

const BusmeSidebar = ({ userRole }: { userRole: string }) => {
    let itemsToShow: ISidebarItem[] = [];

    switch (userRole) {
        case 'admin':
            itemsToShow = itemsAdmin;
            break;
        case 'calidad':
            itemsToShow = itemsQuality;
            break;
        case 'superadmin':
            itemsToShow = itemsSuperadmin;
            break;
        default:
            itemsToShow = itemsConfig;
            break;
    }

    return (
        <div className='fixed top-0 left-0 z-50 w-64 h-screen bg-white p-6 flex flex-col justify-between md:static'>
            <div>
                <div className='flex justify-start'>
                    <Image src={BusmeLogo} alt='logo' width={50} height={50} />
                    <div className='px-2 py-0.5'>
                        <p className='text-black text-lg font-medium font-poppins'>BusMe</p>
                        <p className='text-muted-800 text-xs font-normal font-poppins'>Sitio de trabajo</p>
                    </div>
                </div>
                <p className='text-muted-800 text-xs font-semibold font-poppins mt-5'>General</p>
                {itemsToShow.map(item => (
                    <BusmeNavButton
                        key={item.name} // Asegúrate de tener un identificador único para cada elemento
                        name={item.name}
                        path={item.path}
                        icon={item.icon}
                        iconAlternative={item.alternateicon}
                    />
                ))}
            </div>

            <div>
                <p className='text-muted-800 text-xs font-semibold font-poppins mt-5'>Configuraciones</p>
                {itemsConfig.map(item => (
                    <BusmeNavButton
                        key={item.name} // Asegúrate de tener un identificador único para cada elemento
                        name={item.name}
                        path={item.path}
                        icon={item.icon}
                        iconAlternative={item.alternateicon}
                        customClass={item.customClass}
                    />
                ))}
            </div>
        </div>
    );
};

export default BusmeSidebar;