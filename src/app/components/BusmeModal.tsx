import React, { FC, ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const BusmeModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
                <div className={`relative w-auto max-w-md p-6 my-8 mx-auto bg-white rounded-lg shadow-lg transition-opacity ${isOpen ? 'ease-out duration-300' : 'ease-in duration-200'}`}>
                    <button className="absolute top-0 right-0 m-3" onClick={onClose}>
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="mt-4">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusmeModal;
