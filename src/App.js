import React, { lazy } from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { isFullLoggedIn } from './store/selectors';
import { connect } from 'react-redux'
import AuthRoute from './components/Navigation/AuthRoute/AuthRoute'
import LazeRoute from './components/Navigation/LazeRoute/LazeRoute'
import Loadable from 'react-loadable';
import { IndicatorProvider, ProgressFallback } from './context/indicator';

const Auth = Loadable({
  loader: () => import('./containers/Auth/Auth'),
  loading: ProgressFallback,
});
const NotFound = Loadable({
  loader: () => import('./components/UI/NotFound/NotFound'),
  loading: ProgressFallback,
});
const Profile = Loadable({
  loader: () => import('./containers/Profile/Profile'),
  loading: ProgressFallback,
});
const Orders = Loadable({
  loader: () => import('./containers/Orders/Orders'),
  loading: ProgressFallback,
});
const Logout = Loadable({
  loader: () => import('./containers/Auth/Logout/Logout'),
  loading: ProgressFallback,
});

const CheckOut = Loadable({
  loader: () => import('./containers/CheckOut/CheckOut'),
  loading: ProgressFallback,
});

function App({ isFullLoggedIn }) {
  return (
    <IndicatorProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <AuthRoute
              authenticated={isFullLoggedIn}
              path="/checkout"
              component={CheckOut}
            />
            <AuthRoute
              authenticated={isFullLoggedIn}
              path="/orders"
              component={Orders}
            />
            <AuthRoute
              authenticated={isFullLoggedIn}
              path="/profile"
              component={Profile}
            />
            <LazeRoute path="/login" component={Auth} />
            <LazeRoute path="/signup" component={Auth} />
            <AuthRoute
              authenticated={isFullLoggedIn}
              path="/logout"
              component={Logout}
            />
            <LazeRoute component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </IndicatorProvider>
  );
}

const matStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
})

export default connect(matStateToProps)(App);
