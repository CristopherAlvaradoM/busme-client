import Swal from 'sweetalert2';
export enum BusmeSweetAlertIconType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Question = 'question'
}

// Definir la función showSweetAlert con el enum como el tipo del tercer parámetro
export const BusmeSweetAlert = (title: string, text: string, icon: BusmeSweetAlertIconType) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
};