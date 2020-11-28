import isAuthenticated from '../utils/Auth'
import { Redirect, Route } from 'react-router-dom'
import React from 'react';

const PrivateRoute = ({component, ...rest}: any) => {
  const routeComponent = (props: any) => (
    isAuthenticated()
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/'}}/>
    );
  return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute