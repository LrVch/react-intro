import React, { lazy } from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import { loggedIn } from './store/selectors';
import { connect } from 'react-redux'
import AuthRoute from './components/Navigation/AuthRoute/AuthRoute'

const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Logout = React.lazy(() => import('./containers/Auth/Logout/Logout'));

function App({ loggedIn }) {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <AuthRoute
            authenticated={loggedIn}
            path="/checkout"
            component={CheckOut}
          />
          <AuthRoute
            lazy
            authenticated={loggedIn}
            path="/orders"
            component={Orders}
          />
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
          <AuthRoute
            lazy
            authenticated={loggedIn}
            path="/logout"
            component={Logout}
          />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

const matStateToProps = state => ({
  loggedIn: loggedIn(state)
})

export default connect(matStateToProps)(App);
