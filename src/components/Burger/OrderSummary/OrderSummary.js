import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary.js] will update');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (itemKey) => {
        return (
          <li key={itemKey}>
            <span style={{ textTransform: 'capitalize' }}>{itemKey}</span>:{' '}
            {this.props.ingredients[itemKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Orders</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          ORDER
        </Button>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
