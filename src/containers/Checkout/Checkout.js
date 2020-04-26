import React, { Component } from 'react';
import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      slaad: 1,
      cheese: 1,
      meat: 1,
      bacon: 1,
    },
    totalPrice: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutContinued={this.checkoutContinueHandler}
          checkoutCancelled={this.checkoutCancelHandler}
          ingredients={this.state.ingredients}
        />
        {console.log('Match', this.props.match)}
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
