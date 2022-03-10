import axios from 'axios';

export const getAllWilders = () => {
    return axios
        .get('/api/wilders')
        .then((response) => response.data)
        .catch((err) => err);
};

export const addNewWilder = (datas) => {
    axios
        .post('/api/wilders', datas)
        .then(() => {})
        .catch((err) => err);
};
