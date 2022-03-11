import axios from 'axios';

export const getAllWilders = () => {
    return axios
        .get('/api/wilders')
        .then((response) => response.data)
        .catch((err) => err);
};
