import axios from 'axios';

export const getAllWilders = () => {
    return axios
        .get('/api/wilders')
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
