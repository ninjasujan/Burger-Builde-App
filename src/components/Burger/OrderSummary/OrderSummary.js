import React from 'react';
import Aux from '../../../hoc/Auxiliary';
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((itemKey) => {
    return (
      <li key={itemKey}>
        <span style={{ textTransform: 'capitalize' }}>{itemKey}</span>:{' '}
        {props.ingredients[itemKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Orders</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
