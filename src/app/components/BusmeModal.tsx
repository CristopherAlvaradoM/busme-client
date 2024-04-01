import React, { FC, ReactNode, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { IconBaseProps } from "react-icons";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    showIcon?: boolean;
    icon?: React.ComponentType<IconBaseProps>;
    children: ReactNode;
}

const BusmeModal: FC<ModalProps> = ({ isOpen, onClose, showIcon = false, icon: Icon, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setModalOpen(true);
            }, 50); // Ajusta el tiempo de espera según la duración de tu transición CSS
        } else {
            setModalOpen(false);
        }
    }, [isOpen]);

    const handleBackgroundClick = () => {
        onClose();
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${modalOpen ? '' : 'hidden'}`} onClick={handleBackgroundClick}>
            <div className={`fixed inset-0 bg-black opacity-50 transition-opacity ${isOpen ? 'ease-out duration-300' : 'ease-in duration-200'}`}></div>
            {modalOpen && (
                <div
                    className={`relative w-auto max-w-md p-6 my-8 mx-auto bg-white rounded-lg shadow-lg transition-opacity ${isOpen ? 'ease-out duration-300' : 'ease-in duration-200'}`}>
                    <div className="flex justify-between">
                        {showIcon && Icon && <Icon className="size-6 text-primary-600"/>}
                        <div className="flex flex-1 justify-end">
                            <IoClose
                                className="size-6 hover:cursor-pointer hover:text-danger transition ease-in-out duration-300"
                                onClick={onClose}/>
                        </div>
                    </div>
                    <div className="mt-5">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusmeModal;
