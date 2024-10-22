import Swal from 'sweetalert2';
export enum BusmeSweetAlertIconType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Question = 'question'
}

export const BusmeSweetAlert = (title: string, text: string, icon: BusmeSweetAlertIconType, onConfirm?: () => void, cancelButton?: boolean) => {
    const cancel = cancelButton || false
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: cancel,
        customClass:{
            title: 'title-text',
            validationMessage: 'subtitle-text',
            confirmButton: 'bg-primary-600 text-white border-primary-600 ml-5 font-poppins lg:font-medium font-semi-bold text-base rounded-lg py-3 px-4 md:py-3 md:px-5 cursor-pointer hover:bg-primary-500 transition duration-300 ease-in-out',
            denyButton: 'font-poppins',
            cancelButton: 'bg-white text-black border-[1px] border-muted-600 font-poppins font-medium text-base rounded-lg py-3 px-5 cursor-pointer hover:bg-muted-800 hover:border-muted-800 hover:text-white transition duration-300 ease-in-out',
        },
        buttonsStyling: false,
        reverseButtons: true,
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
};