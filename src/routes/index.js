//routes config
import routesConfig from '~/configs/routes';

//Layout
import { HeaderOnlyLayout } from '~/components/Layouts';

//page
import Home from '~/pages/Home';
import Payment from '~/pages/Payment';
import Login from '~/pages/Login';

// don't need User
const publicRoutes = [
   { path: routesConfig.home, conponent: Home },
   //should add profile page
   { path: routesConfig.payment, conponent: Payment, layout: HeaderOnlyLayout },
   { path: routesConfig.login, conponent: Login, layout: null },
];

// Need User
const privateRoutes = [];

export { publicRoutes, privateRoutes };
