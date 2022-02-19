// libraries
import { lazy } from "react";
// modules
import HomeModule from '../views/HomeModule';
// import HomePage from '../views/HomeModule/HomePage'

const routesHome = [
  //home page
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../views/HomeModule/HomePage")),
    // component: HomePage,
  },
  // list-movie-page
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("../views/HomeModule/ListMoviePage")),
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