import axios from 'axios';

const req = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (path, para) => {
    const res = await req.get(path, para);
    return res.data;
};

export { get };
