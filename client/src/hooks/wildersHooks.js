import { useQuery } from 'react-query';
import { getAllWilders } from '../utils/query';

export const useGetWilders = () => {
    return useQuery('wilders', getAllWilders, {
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};
