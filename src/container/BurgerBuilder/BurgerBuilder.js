import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger.js';
import BurgerControls from '../../component/BurgerControls/BurgerControls.js';

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <div>
        Burger Builder component
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls />
      </div>
    );
  }
}

export default BurgerBuilder;
