import axios from 'axios';
import {
    IAddWilderParams,
    IGetOneWilderParams,
    IUpdateWilderParams,
} from '../interfaces/utils/query';
import { GetWildersType, GetWilderType } from '../types';

export const getAllWilders: GetWildersType = () => {
    return axios
        .get('/api/wilders')
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const getWilderById: GetWilderType = async ({
    queryKey,
}: IGetOneWilderParams) => {
    const { id } = queryKey[1];

    return await axios
        .get(`/api/wilders/${id}`)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const addNewWilder = async ({ ...datas }: IAddWilderParams) => {
    return await axios
        .post('/api/wilders', datas)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const updateWilder = ({ id, ...datas }: IUpdateWilderParams) => {
    return axios
        .put(`/api/wilders/${id}`, datas)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const deleteWilder = async (id: string) => {
    return await axios
        .delete(`/api/wilders/${id}`)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};
