import React, { lazy } from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { isFullLoggedIn } from './store/selectors';
import { connect } from 'react-redux'
import AuthRoute from './components/Navigation/AuthRoute/AuthRoute'
import LazeRoute from './components/Navigation/LazeRoute/LazeRoute'

const Orders = lazy(() => import('./containers/Orders/Orders'));
const Logout = lazy(() => import('./containers/Auth/Logout/Logout'));
const Auth = lazy(() => import('./containers/Auth/Auth'));
const NotFound = lazy(() => import('./components/UI/NotFound/NotFound'));
const Profile =  lazy(() => import('./containers/Profile/Profile'));

function App({ isFullLoggedIn }) {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <AuthRoute
            lazy
            authenticated={isFullLoggedIn}
            path="/checkout"
            component={CheckOut}
          />
          <AuthRoute
            lazy
            authenticated={isFullLoggedIn}
            path="/orders"
            component={Orders}
          />
          <AuthRoute
            lazy
            authenticated={isFullLoggedIn}
            path="/profile"
            component={Profile}
          />
          <LazeRoute path="/login" component={Auth} />
          <LazeRoute path="/signup" component={Auth} />
          <AuthRoute
            lazy
            authenticated={isFullLoggedIn}
            path="/logout"
            component={Logout}
          />
          <LazeRoute component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

const matStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
})

export default connect(matStateToProps)(App);
