import React from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { Route, Switch } from 'react-router-dom'
import { isFullLoggedIn } from './store/selectors';
import { connect } from 'react-redux'
import AuthRoute from './components/Navigation/AuthRoute/AuthRoute'
import LazeRoute from './components/Navigation/LazeRoute/LazeRoute'
import Loadable from 'react-loadable';
import { IndicatorProvider, ProgressFallback } from './context/indicator';

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "auth" */ './containers/Auth/Auth'),
  loading: ProgressFallback,
  modules: ['auth'],
});
const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notFound" */ './components/UI/NotFound/NotFound'),
  loading: ProgressFallback,
  modules: ['notFound'],
});
const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './containers/Profile/Profile'),
  loading: ProgressFallback,
  modules: ['profile'],
});
const Orders = Loadable({
  loader: () => import(/* webpackChunkName: "orders" */ './containers/Orders/Orders'),
  loading: ProgressFallback,
  modules: ['orders'],
});
const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ './containers/Auth/Logout/Logout'),
  loading: ProgressFallback,
  modules: ['logout'],
});

const CheckOut = Loadable({
  loader: () => import(/* webpackChunkName: "checkOut" */ './containers/CheckOut/CheckOut'),
  loading: ProgressFallback,
  modules: ['checkOut'],
});

function App({ isFullLoggedIn }) {
  return (
    <IndicatorProvider>
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
    </IndicatorProvider>
  );
}

const matStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
})

export default connect(matStateToProps)(App);
