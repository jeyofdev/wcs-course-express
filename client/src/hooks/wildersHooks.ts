import { useMutation, useQuery } from 'react-query';
import {
    addNewWilder,
    deleteWilder,
    getAllWilders,
    getWilderById,
    updateWilder,
} from '../utils/query';
import { notifySuccess, notifyDanger } from '../utils/notifications';
import { NavigateFunction } from 'react-router-dom';
import { IWilder } from '../interfaces/elements';

export const useGetWilders = () => {
    return useQuery<IWilder[], Error>('wilders', getAllWilders, {
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    });
};

export const useGetWilderById = (id: string | undefined) => {
    return useQuery<IWilder, Error>(['wilders', { id }], getWilderById);
};

export const useAddWilder = (navigate: NavigateFunction) => {
    return useMutation(addNewWilder, {
        onSuccess: (datas) => {
            if (datas.success) {
                notifySuccess(datas.message);
                navigate('/');
            }
        },
    });
};

export const useUpdateWilder = (navigate: NavigateFunction) => {
    return useMutation(updateWilder, {
        onSuccess: (datas) => {
            if (datas.success) {
                notifySuccess(datas.message);
                navigate('/');
            }
        },
    });
};

export const useDeleteWilder = (navigate: NavigateFunction) => {
    return useMutation(deleteWilder, {
        onSuccess: (datas) => {
            if (datas.success) {
                notifyDanger(datas.message);
                navigate('/');
            }
        },
    });
};
