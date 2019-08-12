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
          <Component {...props} />
        }
      />
    );
  

export default LazeRoute