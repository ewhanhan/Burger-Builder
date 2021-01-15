import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger.js';

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <div>
        Burger Builder component
        <Burger ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default BurgerBuilder;
