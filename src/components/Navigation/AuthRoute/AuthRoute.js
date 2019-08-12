import React, {Suspense} from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({
  component: Component,
  authenticated,
  to = '/',
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Redirect to={to} /> : <Component {...props} />
      }
    />
  );

export default AuthRoute