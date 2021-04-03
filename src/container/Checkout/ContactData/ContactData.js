import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button.js';
import styles from './ContactData.module.css';
import axiosInstance from '../../../axios-orders';
import LoadingSpinner from '../../../component/UI/LoadingSpinner/LoadingSpinner.js';
import Input from '../../../component/UI/Input/Input.js';

export class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    isLoading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.props.order,
      price: this.props.price,
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

  render() {
    let form = (
      <form className={styles.ContactInput}>
        <Input inputtype='input' type="text" name="name" placeholder="Your name"/>
        <Input inputtype='input' type="text" name="email" placeholder="Your email"/>
        <Input inputtype='input' type="text" name="address" placeholder="Address"/>
        <Input inputtype='input' type="text" name="postalcode" placeholder="Postal Code"/>
        <Button buttonType="Success" isClicked={this.orderHandler}>
          SUBMIT
        </Button>
      </form>
    );
    if (this.state.isLoading) {
      form = <LoadingSpinner/>;
    }
    return (
      <div className={styles.ContactDataContainer}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
