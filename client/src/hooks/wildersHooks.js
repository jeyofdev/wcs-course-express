import { useMutation, useQuery } from 'react-query';
import {
    addNewWilder,
    deleteWilder,
    getAllWilders,
    getWilderById,
    updateWilder,
} from '../utils/query';

export const useGetWilders = () => {
    return useQuery('wilders', getAllWilders);
};

export const useGetWilderById = (id) => {
    return useQuery(['wilders', { id }], getWilderById);
};

export const useAddWilder = () => {
    return useMutation(addNewWilder);
};

export const useUpdateWilder = () => {
    return useMutation(updateWilder);
};

export const useDeleteWilder = () => {
    return useMutation(deleteWilder);
};
