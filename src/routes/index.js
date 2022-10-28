import Home from '~/pages/Home';
import Payment from '~/pages/Payment';
import Login from '~/pages/Login';

// don't need User
const publicRoutes = [
   { path: '/', conponent: Home },
   { path: '/payment', conponent: Payment },
   { path: '/login', conponent: Login, layout: null },
];

// Need User
const privateRoutes = [];

export { publicRoutes, privateRoutes };
