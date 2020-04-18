import React from 'react';
import Aux from '../../../hoc/Auxiliary';
const orderSummary = (props) => {
  const ingredientSummary = props.ingredients;
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul></ul>
    </Aux>
  );
};

export default orderSummary;
