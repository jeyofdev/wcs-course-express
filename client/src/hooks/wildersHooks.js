import { useMutation, useQuery } from 'react-query';
import { addNewWilder, deleteWilder, getAllWilders } from '../utils/query';

export const useGetWilders = () => {
    return useQuery('wilders', getAllWilders);
};

export const useAddWilder = () => {
    return useMutation(addNewWilder);
};

export const useDeleteWilder = () => {
    return useMutation(deleteWilder);
};
