import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((itemKey) => {
      return [...Array(props.ingredients[itemKey])].map((_, i) => {
        return <BurgerIngredient key={itemKey + i} type={itemKey} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

// export default withRouter(burger);
export default burger;
