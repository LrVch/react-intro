import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const LazeRoute = ({
  component: Component,
  fallback = null,
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) =>
        <Suspense fallback={fallback}><Component {...props} /> </Suspense>
      }
    />
  );

export default LazeRoute