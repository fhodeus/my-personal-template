import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import isAuthenticated from '../utils/Auth';

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated() ? React.createElement(component, props) : <Redirect to={{ pathname: '/' }} />;
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
