import { FC, useEffect } from 'react';
import routes from './routesConfig';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { IRoute } from '@/types/router';
// import { isLogin } from '@/utils/userLogin';

const RouteDecorator = (props: { route: IRoute }) => {
  const { route } = props;
  // const navigate = useNavigate();

  useEffect(() => {
    // if (route.meta?.requireAuth) {
    //   if (!isLogin()) {
    //     navigate('/login', { state: { redirect: route.pathname } });
    //   }
    // }

    route.beforeCreate && route.beforeCreate(route);
    return () => route.beforeDestroy && route.beforeDestroy(route);
  }, [route]);

  return <route.component />;
};

const RouterComponent: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/index" />} />
    <Route path="*" element={<Navigate to="/404" />} />
    {routes.map(route => (
      <Route
        key={route.pathname}
        path={route.pathname}
        element={<RouteDecorator route={route} />}
      />
    ))}
  </Routes>
);

export default RouterComponent;
