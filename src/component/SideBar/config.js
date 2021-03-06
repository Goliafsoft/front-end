import getIconBySlug from './getIconBySlug';

export default {
  menu: [
    {
      id: 1, label: 'User Manager', iconName: getIconBySlug('user'), href: '/user',
    },
    {
      id: 2, label: 'Calendar', iconName: 'today', href: '/calendar',
    },
    {
      id: 3, label: 'Dashboard', iconName: 'dashboard', href: '/dashboard',
    },
    {
      id: 4, label: 'Login', iconName: 'dashboard', href: '/login',
    },
  ],
};
