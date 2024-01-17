import { Home, Register, Login } from '../pages';

export const PAGES = {
  Home: {
    path: '/',
    label: 'Home',
    authenticated: false,
    component: Home,
  },
  Register: {
    path: '/register',
    label: 'Register',
    authenticated: false,
    component: Register,
  },
  Login: {
    path: '/login',
    label: 'Login',
    authenticated: false,
    component: Login,
  },
};

export const PAGES_ARRAY = Object.entries(PAGES).map(([key, value]) => ({ name: key, ...value }));
