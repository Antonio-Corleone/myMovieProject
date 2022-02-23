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
    // component: HomePage,
  },
  // list-movie-page
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("../views/HomeModule/ListMoviePage")),
  },
  // detail-movie-package
  {
    exact: false,
    path: "/detail-movie/:id",
    component: lazy(() => import("../views/HomeModule/DetailMoviePage")),
  },
  // booking page
  // {
  //   exact: false,
  //   path: "/booking/:showid",
  //   component: lazy(() => import("../views/HomeModule/BookingPage")),
  // },
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