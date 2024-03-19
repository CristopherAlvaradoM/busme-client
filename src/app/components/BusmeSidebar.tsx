'use client'

import React from 'react';
import { 
    IoHomeOutline, IoHome, IoPinOutline, IoPin, IoBusOutline, IoBusSharp, IoBarChartOutline, IoBarChart, 
    IoMailUnreadOutline, IoSettingsOutline, IoSettings, IoMailUnread, IoLogOutOutline, IoLogOut, IoPersonOutline, IoPerson,
    IoPersonAddOutline, IoPersonAdd, IoIdCardOutline, IoIdCard
} from "react-icons/io5";
import BusmeButton from './BusmeNavbutton';
import Image from 'next/image';
import BusmeLogo from "@/assets/img/busme-logo.jpeg";

type UserRole = 'superadmin' | 'admin' | 'calidad';

interface BusmeSidebarProps {
    userRole: UserRole;
}

const BusmeSidebar: React.FC<BusmeSidebarProps> = ({ userRole }) => {
    return (
        <div className='h-screen w-1/5 bg-white p-6 flex flex-col justify-between'>
            <div>
                <div className='flex justify-start'>
                    <Image src={BusmeLogo} alt='logo' width={50} height={50} />
                    <div className='px-2 py-0.5'>
                        <p className='text-black text-lg font-medium font-poppins'>BusMe</p>
                        <p className='text-muted-800 text-xs font-normal font-poppins'>Sitio de trabajo</p>
                    </div>
                </div>

                <p className='text-muted-800 text-xs font-semibold font-poppins mt-5'>General</p>

                {userRole === 'calidad' && (
                    <>
                        <BusmeButton
                            text="Inicio"
                            icon={IoHomeOutline}
                            alternateicon={IoHome}
                            linkTo="/calidad"
                        />

                        <BusmeButton
                            text="Equipo de trabajo"
                            icon={IoPersonOutline}
                            alternateicon={IoPerson}
                            linkTo="/"
                        />

                        <BusmeButton
                            text="Roles"
                            icon={IoPersonAddOutline}
                            alternateicon={IoPersonAdd}
                            linkTo="/"
                        />
                    </>
                )}
                
                {userRole === 'superadmin' && (
                    <>
                        <BusmeButton
                            text="Inicio"
                            icon={IoHomeOutline}
                            alternateicon={IoHome}
                            linkTo="/superadmin"
                        />

                        <BusmeButton
                            text="Equipo de trabajo"
                            icon={IoPersonOutline}
                            alternateicon={IoPerson}
                            linkTo="/superadmin/workteam"
                        />

                        <BusmeButton
                            text="Roles"
                            icon={IoIdCardOutline}
                            alternateicon={IoIdCard}
                            linkTo="/superadmin/rols"
                        />
                    </>
                )}

                {userRole === 'admin' && (
                    <>
                        <BusmeButton
                            text="Inicio"
                            icon={IoHomeOutline}
                            alternateicon={IoHome}
                            linkTo="/admin"
                        />

                        <BusmeButton
                            text="Rutas"
                            icon={IoPinOutline}
                            alternateicon={IoPin}
                            linkTo="/admin/rutas"
                        />

                        <BusmeButton
                            text="Vehículos"
                            icon={IoBusOutline}
                            alternateicon={IoBusSharp}
                            linkTo="/admin/vehiculos"
                        />

                        <BusmeButton
                            text="Estadísticas"
                            icon={IoBarChartOutline}
                            alternateicon={IoBarChart}
                            linkTo="/admin/estadisticas"
                        />

                        <BusmeButton
                            text="Avisos"
                            icon={IoMailUnreadOutline}
                            alternateicon={IoMailUnread}
                            linkTo="/admin/avisos"
                        />
                    </>
                )}
            </div>

            <div>
                <p className='text-muted-800 text-xs font-semibold font-poppins mt-5'>Configuraciones</p>
                <BusmeButton
                    text="Configuraciones"
                    icon={IoSettingsOutline}
                    alternateicon={IoSettings}
                    linkTo="/"
                />
                <BusmeButton
                    text="Cerrar sesión"
                    icon={IoLogOutOutline}
                    alternateicon={IoLogOut}
                    linkTo="/"
                    customClass="hover:bg-danger text-danger"
                />
            </div>
        </div>
    );
};

export default BusmeSidebar;