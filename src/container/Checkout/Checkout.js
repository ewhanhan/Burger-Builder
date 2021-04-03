import React, { Component } from 'react';
import CheckoutSummary from '../../component/Burger/CheckoutSummary/CheckoutSummary.js';
import ContactData from './ContactData/ContactData.js';
import styles from './Checkout.module.css';
import { Route } from 'react-router-dom';

export class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    price: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    if (query === '') {
      return;
    }
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: price,
    });
  }

  checkoutCancelHandler = () => {
    this.props.history.push('/');
  };
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div className={styles.Checkout}>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelHandler={this.checkoutCancelHandler}
          checkoutContinueHandler={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => <ContactData order={this.state.ingredients} price={this.state.totalPrice} {...props} />}
        />
      </div>
    );
  }
}

export default Checkout;
