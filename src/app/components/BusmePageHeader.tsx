"use client";
import Image from "next/image";
import UTZMGLogo from "@/assets/img/utzmg-logo.png";
import {IoArrowBack} from "react-icons/io5";
import React from "react";
import {useRouter} from "next/navigation";

interface BusmePageHeaderProps {
    title: string;
    rol: string;
    username: string;
    showBackIcon?: boolean;
}

const BusmePageHeader: React.FC<BusmePageHeaderProps> = ({title, rol, username, showBackIcon = false}) => {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                {/* Icono de flecha hacia atrás */}
                {showBackIcon && (
                    <IoArrowBack
                        className="w-7 h-7 md:w-8 md:h-8 mr-2 md:mr-4 cursor-pointer" // Tamaño del ícono
                        onClick={() => router.back()} // Acción al hacer clic
                    />
                )}
                <p className="title-text">{title}</p>
            </div>

            <div className="flex items-center"> {/* Este contenedor se mostrará en todos los tamaños de pantalla */}
                <div className="text-right mr-2"> {/* Ajuste de margen derecho */}
                    <p className="caption-text">{rol}</p>
                    <p className="subtitle-text">{username}</p>
                </div>
                <div className="w-12 ml-2"> {/* Ajuste de margen izquierdo */}
                    <Image src={UTZMGLogo} alt="UTZMG Logo" width={40} height={40}/> {/* Tamaño de la imagen */}
                </div>
            </div>
        </div>

    );
}

export default BusmePageHeader;