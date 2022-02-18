import React from 'react';
import { Route } from 'react-router-dom';

import Header from './_components/Header';
export default function HomeModule(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Header/>
      <Route
        exact={exact}
        path={path}
        component={component}
      />
    </>
  )
}
