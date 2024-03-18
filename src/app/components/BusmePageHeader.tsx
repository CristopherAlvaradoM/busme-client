"use client";
import Image from "next/image";
import UTZMGLogo from "@/assets/img/utzmg-logo.png";
import {IoArrowBack} from "react-icons/io5";
import React from "react";
import { useRouter } from "next/navigation";

interface BusmePageHeaderProps {
    title: string;
    rol: string;
    username: string;
    showBackIcon?: boolean;
}
const BusmePageHeader : React.FC<BusmePageHeaderProps> = ({ title, rol, username, showBackIcon = false }) => {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                {showBackIcon && <IoArrowBack className="w-[35px] h-[35px] mr-4 cursor-pointer" onClick={() => router.back()}/>}
                <p className="title-text">{title}</p>
            </div>
            <div className="flex items-center">
                <div className="text-right">
                    <p className="caption-text">{rol}</p>
                    <p className="subtitle-text">{username}</p>
                </div>
                <div className="w-14 ml-5">
                    <Image src={UTZMGLogo} alt="UTZMG Logo"/>
                </div>
            </div>
        </div>
    );
}

export default BusmePageHeader;