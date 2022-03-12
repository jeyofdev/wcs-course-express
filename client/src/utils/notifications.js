import { toast } from 'react-toastify';

const options = {
    theme: 'colored',
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const notifySuccess = (message) => {
    toast.success(message, options);
};

export const notifyDanger = (message) => {
    toast.error(message, options);
};
