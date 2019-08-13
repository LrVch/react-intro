import React from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { Route, Switch } from 'react-router-dom'
import { isFullLoggedIn } from './store/selectors';
import { connect } from 'react-redux'
import AuthRoute from './components/Navigation/AuthRoute/AuthRoute'
import Loadable from 'react-loadable';
import { IndicatorProvider, ProgressFallback } from './context/indicator';

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "auth" */ './containers/Auth/Auth'),
  loading: ProgressFallback,
  modules: ['auth'],
  webpack: () => [require.resolveWeak('./containers/Auth/Auth')]
});
const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notFound" */ './components/UI/NotFound/NotFound'),
  loading: ProgressFallback,
  modules: ['notFound'],
  webpack: () => [require.resolveWeak('./components/UI/NotFound/NotFound')]
});
const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './containers/Profile/Profile'),
  loading: ProgressFallback,
  modules: ['profile'],
  webpack: () => [require.resolveWeak('./containers/Profile/Profile')]
});
const Orders = Loadable({
  loader: () => import(/* webpackChunkName: "orders" */ './containers/Orders/Orders'),
  loading: ProgressFallback,
  modules: ['orders'],
  webpack: () => [require.resolveWeak('./containers/Orders/Orders')]
});
const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ './containers/Auth/Logout/Logout'),
  loading: ProgressFallback,
  modules: ['logout'],
  webpack: () => [require.resolveWeak('./containers/Auth/Logout/Logout')]
});

const CheckOut = Loadable({
  loader: () => import(/* webpackChunkName: "checkOut" */ './containers/CheckOut/CheckOut'),
  loading: ProgressFallback,
  modules: ['checkOut'],
  webpack: () => [require.resolveWeak('./containers/CheckOut/CheckOut')]
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
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
          <AuthRoute
            authenticated={isFullLoggedIn}
            path="/logout"
            component={Logout}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </IndicatorProvider>
  );
}

const matStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
})

export default connect(matStateToProps)(App);
