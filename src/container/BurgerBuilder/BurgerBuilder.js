import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger.js';

export class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        Burger Builder component
        <Burger />
      </div>
    );
  }
}

export default BurgerBuilder;
