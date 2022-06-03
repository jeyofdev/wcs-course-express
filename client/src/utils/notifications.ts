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

/**
 * Notification with success message
 */
export const notifySuccess = (message: string) => {
    return toast.success(message, options);
};

/**
 *  * Notification with error message

 */
export const notifyError = (error: ToastContent | string) => {
    toast.error(error, options);
};
