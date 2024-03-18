const BusmeCardHeader = ({subtitle, linkText} : {subtitle: string; linkText: string}) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="subtitle-text">{subtitle}</h1>
            <h1 className="link-text">{linkText}</h1>
        </div>
    );
}

export default BusmeCardHeader;