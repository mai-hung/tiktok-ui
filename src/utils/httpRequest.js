import axios from 'axios';

const httpReq = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, para) => {
    const res = await httpReq.get(path, para);
    return res.data;
};

export { get };
