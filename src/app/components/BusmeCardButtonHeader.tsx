import Link from "next/link";
import {IconBaseProps} from "react-icons"; // Importa IconBaseProps para definir el tipo del ícono

interface BusmeCardButtonHeaderProps {
    subtitle: string;
    to: string;
    buttonText: string;
    icon: React.ComponentType<IconBaseProps>; // Define el tipo del ícono
}

const BusmeCardButtonHeader: React.FC<BusmeCardButtonHeaderProps> = ({subtitle, to, buttonText, icon: Icon}) => {
    return (
        <div className="p-5 flex justify-between items-center">
            <h1 className="subtitle-text">{subtitle}</h1>
            <Link href={to}>
                <div className="flex items-center justify-center button-secondary button-secondary-hover">
                    <Icon className="mr-3 w-[20px] h-[20px]"/>
                    <p>{buttonText}</p>
                </div>
            </Link>
        </div>
    );
}

export default BusmeCardButtonHeader;
