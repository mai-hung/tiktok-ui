import { HeaderOnly } from '~/components/Layouts';

const { Home, Following, Upload, Profile } = require('~/pages');

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/@:slug', component: Profile },
    { path: '/following', component: Following, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
