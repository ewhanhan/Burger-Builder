import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button.js';
import styles from './ContactData.module.css';
import axiosInstance from '../../../axios-orders';
import LoadingSpinner from '../../../component/UI/LoadingSpinner/LoadingSpinner.js';
import Input from '../../../component/UI/Input/Input.js';

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
      },
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
    const formElementArray = [];
    //create an array of Input configurations
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form className={styles.ContactInput}>
        {formElementArray.map(element => {
          return <Input key={element.id} elementType={element.config.elementType}
                 elementConfig={element.config.elementConfig} value={element.config.value}/>;
        })}
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
