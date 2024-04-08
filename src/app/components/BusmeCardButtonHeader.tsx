import Link from "next/link";
import {IconBaseProps} from "react-icons"; // Importa IconBaseProps para definir el tipo del ícono

interface BusmeCardButtonHeaderProps {
    subtitle?: string;
    to: string;
    buttonText: string;
    icon: React.ComponentType<IconBaseProps>; // Define el tipo del ícono
}

const BusmeCardButtonHeader: React.FC<BusmeCardButtonHeaderProps> = ({subtitle, to, buttonText, icon: Icon}) => {
    return (
        <div className="flex justify-between items-center">
            {/* Título */}
            <h1 className="subtitle-text">{subtitle}</h1>

            {/* Botón */}
            <Link href={to}>
                <div
                    className="button-secondary button-secondary-hover flex items-center justify-center">
                    <Icon className="mr-2 w-5 h-5"/>
                    <p>{buttonText}</p>
                </div>
            </Link>
        </div>
    );
}

export default BusmeCardButtonHeader;
