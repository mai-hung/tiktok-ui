import * as request from '~/utils/httpRequest';

const search = (q, type = 'less') => {
    return request
        .get(`users/search`, {
            params: {
                q,
                type,
            },
        })
        .catch((err) => {
            throw new Error(err);
        });
};

export default search;
