import { useMutation, useQuery } from 'react-query';
import {
    addNewWilder,
    deleteWilder,
    getAllWilders,
    getWilderById,
    updateWilder,
} from '../utils/query';
import { notifySuccess, notifyDanger } from '../utils/notifications';

export const useGetWilders = () => {
    return useQuery('wilders', getAllWilders);
};

export const useGetWilderById = (id) => {
    return useQuery(['wilders', { id }], getWilderById);
};

export const useAddWilder = (navigate) => {
    return useMutation(addNewWilder, {
        onSuccess: (datas) => {
            if (datas.success) {
                notifySuccess(datas.message);
                navigate('/');
            }
        },
    });
};

export const useUpdateWilder = (navigate) => {
    return useMutation(updateWilder, {
        onSuccess: (datas) => {
            console.log(datas);
            if (datas.success) {
                notifySuccess(datas.message);
                navigate('/');
            }
        },
    });
};

export const useDeleteWilder = (navigate) => {
    return useMutation(deleteWilder, {
        onSuccess: (datas) => {
            console.log(datas);
            if (datas.success) {
                notifyDanger(datas.message);
                navigate('/');
            }
        },
    });
};
