import React from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
