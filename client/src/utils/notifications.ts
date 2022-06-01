import { toast, ToastContent, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
    theme: 'colored',
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const notifySuccess = (message: string) => {
    return toast.success(message, options);
};

export const notifyError = (error: ToastContent | string) => {
    toast.error(error, options);
};
