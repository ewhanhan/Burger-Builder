import React, { Component } from 'react';
import Order from './Order/Order.js';
import axiosInstance from '../../axios-orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler.js';

class Orders extends Component {
  state = {
    orders: [],
    isLoading: true,
  };

  componentDidMount() {
    axiosInstance
      .get('/orders.json')
      .then((resp) => {
        const firebaseOrders = [];
        for (let order in resp.data) {
          firebaseOrders.push({ ...resp.data[order], id: order });
        }
        this.setState({ isLoading: false, orders: firebaseOrders });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          console.log(order.customer);
          return <Order ingredients={order.ingredients} key={order.id} price={order.price} />;
        })}
      </div>
    );
  }
}

export default ErrorHandler(Orders, axiosInstance);
