import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] === 0) return;
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const updtdPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: updtdPrice,
    });
    this.updatePurchaseState(updatedIngredient);
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((accumulator, current) => {
        return (accumulator += current);
      }, 0);

    this.setState({
      purchaseable: sum > 0,
    });
  };

  closeModal = () => {
    this.setState({ purchasing: false });
  };

  openModal = () => {
    alert('You continue.!');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.closeModal}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.closeModal}
            purchaseContinued={this.openModal}
          />{' '}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
