import { HeaderOnly } from '~/components/Layouts';
import routeConfig from '~/config/routes';

const { Home, Following, Upload, Profile } = require('~/pages');

const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.following, component: Following, layout: null },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
