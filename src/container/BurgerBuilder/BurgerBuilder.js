import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger.js';
import BurgerControls from '../../component/BurgerControls/BurgerControls.js';

const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.8,
  cheese: 0.5,
  meat: 1.1,
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5.56,
  };

  addIngredientHandler = (type) => {
    const oldIngredientCount = this.state.ingredients[type];
    const updatedCount = oldIngredientCount + 1;
    const updatedIngredientCount = {
      ...this.state.ingredients,
    };
    updatedIngredientCount[type] = updatedCount;
    const addedPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addedPrice;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredientCount,
    });
  };

  removeIngredientHandler = (type) => {
    const oldIngredientCount = this.state.ingredients[type];
    if (oldIngredientCount <= 0) {
      return;
    }
    const updatedCount = oldIngredientCount - 1;
    const updatedIngredientCount = {
      ...this.state.ingredients,
    };
    updatedIngredientCount[type] = updatedCount;
    const removedPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - removedPrice;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredientCount,
    });
  };

  render() {
    const isIngredientDisabled = { ...this.state.ingredients };
    for (let ingredient in isIngredientDisabled) {
      isIngredientDisabled[ingredient] = isIngredientDisabled[ingredient] <= 0;
    }

    return (
      <div>
        Burger Builder component
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredientHandlerFn={this.addIngredientHandler}
          removeIngredientHandlerFn={this.removeIngredientHandler}
          disabledIngredients={isIngredientDisabled}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
