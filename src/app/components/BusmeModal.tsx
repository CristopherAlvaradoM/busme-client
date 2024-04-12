import React, { FC, ReactNode, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { IconBaseProps } from "react-icons";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    showIcon?: boolean;
    icon?: React.ComponentType<IconBaseProps>;
    children: ReactNode;
    successButtonTitle: string;
    buttonFunction?: () => void;
    disabled?: boolean;
}

const BusmeModal: FC<ModalProps> = ({ isOpen, onClose, showIcon = false, icon: Icon, children, buttonFunction, successButtonTitle, disabled }) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setModalOpen(true);
            }, 50);
        } else {
            setModalOpen(false);
        }
    }, [isOpen]);



    return (
        <div
            className={`mx-5 fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${modalOpen ? '' : 'hidden'}`}>
            <div
                className={`fixed inset-0 bg-black opacity-50 transition-opacity ${modalOpen ? 'ease-out duration-300' : 'ease-in duration-200'}`}></div>
            {modalOpen && (
                <div
                    className={`relative w-full max-w-md p-6 my-8 mx-auto bg-white rounded-lg shadow-lg sm:max-w-lg md:max-w-xl transition-opacity ${modalOpen ? 'ease-out duration-300' : 'ease-in duration-200'}`}>
                    <div className="flex justify-between items-center">
                        {showIcon && Icon && <Icon className="size-6 text-primary-600"/>}
                        <IoClose
                            className="size-6 hover:cursor-pointer hover:text-danger transition ease-in-out duration-300"
                            onClick={onClose}/>
                    </div>
                    <div className="mt-5">
                        {children}
                    </div>
                    <div className="flex flex-col mt-5 sm:flex-row sm:justify-between">
                        <button type="submit" onClick={onClose}
                                className="outline-button-secondary outline-button-secondary-hover w-full sm:w-auto mt-6 sm:mt-0 sm:mr-3">
                            Cancelar
                        </button>
                        <button type="submit" onClick={buttonFunction} disabled={disabled}
                                className="button-secondary button-secondary-hover w-full sm:w-auto mt-4 sm:mt-0">
                            {successButtonTitle}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusmeModal;
