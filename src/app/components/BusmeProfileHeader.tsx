import Image from "next/image";
import UTZMGLogo from "@/assets/img/utzmg-logo.png";

const BusmeProfileHeader = ({title, username, rol }: { title: string; username: string; rol: string }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="title-text">{title}</p>
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