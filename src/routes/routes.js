import { HeaderOnly } from '~/Layouts';
import config from '~/config';
import Live from '~/pages/Live';

const { Home, Following, Upload, Profile } = require('~/pages');

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
