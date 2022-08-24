import { HeaderOnly } from '~/components/Layouts';

const { Home, Following, Upload } = require('~/pages');

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
