import ReactLazilyComponent from 'react-lazily-component';

// Page routing configuration
export default [
  {
    pathname: '/index',
    name: 'Index',
    title: 'Home',
    component: ReactLazilyComponent(() => import('@/pages/index')),
    meta: {
      navigation: 'Home'
    }
  },
  {
    pathname: '/404',
    name: '404 NOT FOUND',
    title: '404',
    component: ReactLazilyComponent(() => import('@/pages/error/404')),
    meta: {
      navigation: '404 NOT FOUND'
    }
  }
];