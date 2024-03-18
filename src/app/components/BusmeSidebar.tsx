import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import BusmeButton from './BusmeNavbutton';


const BusmeSidebar = () => {
    return (
        <div className='h-screen w-1/5 shadow-lg bg-white p-6 flex flex-col justify-between'>
            <div>
                <div className='flex justify-start'>
                    <img className="h-12" src="https://i.pinimg.com/originals/b4/06/dd/b406dd9617bde411b761778c5c99cfc2.jpg" alt="logo" />
                    <div className='px-2 py-0.5'>
                        <p className='text-black text-lg font-medium font-poppins'>BusMe</p>
                        <p className='text-muted-800 text-xs font-normal font-poppins'>Sitio de trabajo</p>
                    </div>
                </div>

                <p className='text-muted-800 text-xs font-semibold font-poppins mt-5'>General</p>
                <BusmeButton
                    text="Inicio"
                    icon={<AiOutlineHome />}
                    linkTo="/admin/avisos"
                />
            </div>

            <div>
                <p className='text-muted-800 text-xs font-semibold font-poppins mt-5'>Configuraciones</p>
            </div>
        </div>
    );
};

export default BusmeSidebar;