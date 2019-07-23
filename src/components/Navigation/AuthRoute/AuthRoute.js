import React, {Suspense} from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({
  component: Component,
  authenticated,
  to = '/',
  lazy = false,
  fallback = null,
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Redirect to={to} /> : 
        lazy ? <Suspense fallback={fallback}><Component {...props} /> </Suspense> :
        <Component {...props} />
      }
    />
  );

export default AuthRoute