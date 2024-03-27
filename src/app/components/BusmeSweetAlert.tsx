import Swal from 'sweetalert2';
export enum BusmeSweetAlertIconType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Question = 'question'
}

export const BusmeSweetAlert = (title: string, text: string, icon: BusmeSweetAlertIconType) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
};