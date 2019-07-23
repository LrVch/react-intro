import React from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout'
import { loggedIn } from './store/selectors';
import { connect } from 'react-redux'
import AuthRoute from './components/Navigation/AuthRoute/AuthRoute'

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
            authenticated={loggedIn}
            path="/orders"
            component={Orders}
          />
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
          <AuthRoute
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
