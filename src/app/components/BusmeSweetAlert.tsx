import Swal from 'sweetalert2';
export enum BusmeSweetAlertIconType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Question = 'question'
}

export const BusmeSweetAlert = (title: string, text: string, icon: BusmeSweetAlertIconType, onConfirm?: () => void) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        customClass:{
            title: 'title-text',
            validationMessage: 'subtitle-text',
            confirmButton: 'font-poppins',
            denyButton: 'font-poppins',
            cancelButton: 'font-poppins',
        }
    })
    .then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
};