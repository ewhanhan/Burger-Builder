import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger.js';
import BurgerControls from '../../component/Burger/BurgerControls/BurgerControls.js';
import Modal from '../../component/UI/Modal/Modal.js';
import OrderSummaryModal from '../../component/Burger/OrderSummaryModal/OrderSummaryModal.js';
import LoadingSpinner from '../../component/UI/LoadingSpinner/LoadingSpinner.js';
import axiosInstance from '../../axios-orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler.js';

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
    isPurchasable: false,
    isOrderSummaryViewable: false,
    isLoading: false,
  };

  isOrderSummaryHandler = () => {
    this.setState({ isOrderSummaryViewable: true });
  };

  cancelOrderHandler = () => {
    this.setState({ isOrderSummaryViewable: false });
  };

  purchaseOrderHandler = () => {
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        payload: 'test',
      },
    };
    axiosInstance
      .post('/orders.json', order)
      .then((resp) => {
        console.log('Status: ', resp.status);
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));
  };

  updateIsPurchasable(ingredients) {
    const sumOfIngredients = Object.keys(ingredients)
      .map((ingredient) => {
        return ingredients[ingredient];
      })
      .reduce((sum, element) => {
        return (sum += element);
      }, 0);

    this.setState({ isPurchasable: sumOfIngredients > 0 });
  }

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
    this.updateIsPurchasable(updatedIngredientCount);
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
    this.updateIsPurchasable(updatedIngredientCount);
  };

  render() {
    const isIngredientDisabled = { ...this.state.ingredients };
    for (let ingredient in isIngredientDisabled) {
      isIngredientDisabled[ingredient] = isIngredientDisabled[ingredient] <= 0;
    }

    let orderSummary = this.state.isLoading ? (
      <LoadingSpinner />
    ) : (
      <OrderSummaryModal
        ingredients={this.state.ingredients}
        orderSummaryContinueHandler={this.purchaseOrderHandler}
        orderSummaryCancelHandler={this.cancelOrderHandler}
        price={this.state.totalPrice}
      />
    );

    return (
      <div>
        <Modal isShowing={this.state.isOrderSummaryViewable} closeOrderSummaryHandler={this.cancelOrderHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredientHandlerFn={this.addIngredientHandler}
          removeIngredientHandlerFn={this.removeIngredientHandler}
          disabledIngredients={isIngredientDisabled}
          price={this.state.totalPrice}
          isPurchasable={this.state.isPurchasable}
          isOrdering={this.isOrderSummaryHandler}
        />
      </div>
    );
  }
}

export default ErrorHandler(BurgerBuilder, axiosInstance);
