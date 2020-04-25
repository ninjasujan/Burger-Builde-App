import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './hoc/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={BurgerBuilder} />
            <Checkout />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
