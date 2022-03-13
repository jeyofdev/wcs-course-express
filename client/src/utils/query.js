import axios from 'axios';

export const getAllWilders = () => {
    return axios
        .get('/api/wilders')
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const getWilderById = async ({ queryKey }) => {
    const { id } = queryKey[1];

    return await axios
        .get(`/api/wilders/${id}`)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const addNewWilder = async ({ ...datas }) => {
    return await axios
        .post('/api/wilders', datas)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const updateWilder = ({ id, ...datas }) => {
    return axios
        .put(`/api/wilders/${id}`, datas)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};

export const deleteWilder = async (id) => {
    return await axios
        .delete(`/api/wilders/${id}`)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error(err);
        });
};
