import Link from "next/link";

const BusmeCardHeader = ({subtitle, linkText, to} : {subtitle: string; linkText: string, to: string}) => {
    return (
        <div className="flex md:flex-row justify-between items-center">
            <h1 className="subtitle-text mb-2 md:mb-0 md:mr-4">{subtitle}</h1>
            <Link href={to}>
                <h1 className="link-text">{linkText}</h1>
            </Link>
        </div>
    );
}

export default BusmeCardHeader;