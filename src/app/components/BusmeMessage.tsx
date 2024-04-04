import React from "react";

interface BusmeMessageProps {
    username: string;
    title: string;
    description: string;
    date: string;
    hour: string;
    isRead: boolean;
}

const BusmeMessage: React.FC<BusmeMessageProps> = ({username, title, description, date, hour, isRead=false}) => {
    return (
        <>
            <div className={`p-5 w-full cursor-pointer transition ease-in-out duration-300 ${isRead ? 'hover:bg-primary-50' : 'bg-primary-50'}`}>
                <p className="bold-body-text">{username}</p>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="bold-body-text">{title}</p>
                        <div className="max-w-md">
                            <p className="body-text overflow-hidden whitespace-nowrap overflow-ellipsis">{description}</p>
                        </div>
                    </div>
                    <div>
                        <p className="body-text">{date}</p>
                        <p className="body-text text-right">{hour}</p>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-muted-300 w-full"/>
        </>
    )
}

export default BusmeMessage;