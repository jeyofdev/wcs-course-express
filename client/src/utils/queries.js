import axios from 'axios';

export const getAllWilders = () => {
    return axios
        .get('/api/wilders')
        .then((response) => response.data)
        .catch((err) => err);
};

export const getWilderById = (id) => {
    return axios
        .get(`/api/wilders/${id}`)
        .then((response) => response.data)
        .catch((err) => err);
};

export const addNewWilder = (datas) => {
    return axios
        .post('/api/wilders', datas)
        .then((response) => response.data)
        .catch((err) => err);
};

export const updateWilder = (id, body) => {
    axios
        .put(`/api/wilders/${id}`, body)
        .then((response) => response)
        .catch((err) => err);
};

export const deleteWilder = (id) => {
    axios
        .delete(`/api/wilders/${id}`)
        .then((response) => response)
        .catch((err) => err);
};
