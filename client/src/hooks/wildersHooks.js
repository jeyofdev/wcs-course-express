import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addNewWilder, getAllWilders } from '../utils/query';

export const useGetWilders = () => {
    return useQuery('wilders', getAllWilders, {
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};

export const useAddWilder = () => {
    return useMutation(addNewWilder);
};
