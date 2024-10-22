import React, { ReactNode } from 'react';

interface BusmeCardProps {
    children: ReactNode;
}

const BusmeCard: React.FC<BusmeCardProps> = ({ children }) => {
    return (
        <div className="w-full md:w-auto bg-white rounded-[10px] mt-8 p-4 md:p-5">
            {children}
        </div>
    );
};

export default BusmeCard;
