import React from "react";

interface BusmeMessageProps {
    username: string;
    title: string;
    description: string;
    date: string;
    hour: string;
    isRead: boolean;
    isSelected: boolean;
    onClick?: () => void;
}

const BusmeMessage: React.FC<BusmeMessageProps> = ({
                                                       username,
                                                       title,
                                                       description,
                                                       date,
                                                       hour,
                                                       isRead = false,
                                                       isSelected = false,
                                                       onClick
                                                   }) => {
    return (
        <>
            <div
                className={`p-5 w-full cursor-pointer transition ease-in-out duration-300 ${isSelected ? 'bg-primary-500' : ''}`}
                onClick={onClick}>
                <div className="flex justify-between items-center py-2">
                    <p className={`bold-body-text ${isSelected ? 'text-white' : ''}`}>{username}</p>
                    {!isRead ? (
                        <div className="size-2.5 bg-primary-500 rounded-full"/>
                    ) : null}
                </div>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className={`bold-body-text ${isSelected ? 'text-white' : ''}`}>{title}</p>
                        <div className="max-w-md">
                            <p className={`body-text overflow-hidden whitespace-nowrap overflow-ellipsis ${isSelected ? 'text-white' : ''}`}>{description}</p>
                        </div>
                    </div>
                    <div>
                        <p className={`body-text ${isSelected ? 'text-white' : ''}`}>{date}</p>
                        <p className={`body-text text-right ${isSelected ? 'text-white' : ''}`}>{hour}</p>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-muted-300 w-full"/>
        </>
    )
}

export default BusmeMessage;