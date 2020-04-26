import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './hoc/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Checkout />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
