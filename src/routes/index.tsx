import { FC } from 'react';
import routes from './routesConfig';
import { Route, Routes, Navigate } from 'react-router-dom';

const RouterComponent: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/index" />} />
    <Route path="*" element={<Navigate to="/404" />} />
    {routes.map(route => (
      <Route
        key={route.pathname}
        path={route.pathname}
        element={<route.component />}
      />
    ))}
  </Routes>
);

export default RouterComponent;
