import Detail from './views/detail';
import Home from './views/home';

export const paths = {
    home: '/',
    detail: '/work/:id',
};

export const routes = [
    {
        path: paths.home,
        component: Home,
    },
    {
        path: paths.detail,
        component: Detail,
    },
];
