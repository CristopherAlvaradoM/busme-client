import React, { ReactNode } from 'react';

interface BusmeCardProps {
    children: ReactNode;
}

const BusmeCard: React.FC<BusmeCardProps> = ({ children }) => {
    return (
        <div className="w-full bg-white rounded-[10px] mt-8">
            {children}
        </div>
    );
};

export default BusmeCard;
