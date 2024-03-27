import Swal from 'sweetalert2';

export const BusmeSweetAlert = (title: string, text: string, icon: undefined) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
};
