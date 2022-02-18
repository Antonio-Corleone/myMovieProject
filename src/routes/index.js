// libraries
import { lazy } from "react";
// modules
import HomeModule from '../views/HomeModule';

const routesHome = [
  //home page
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../views/HomeModule/HomePage")),
  },
];

const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeModule
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRoutesHome };