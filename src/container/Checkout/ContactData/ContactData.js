import React, {Component} from 'react';
import Button from '../../../component/UI/Button/Button.js';
import styles from './ContactData.module.css';
import axiosInstance from '../../../axios-orders';
import LoadingSpinner
  from '../../../component/UI/LoadingSpinner/LoadingSpinner.js';
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
        validation: {
          required: true,
          valid: false,
        },
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'street',
        },
        value: '',
        validation: {
          required: true,
          valid: false,
        },
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
        },
        value: '',
        validation: {
          required: true,
          valid: false,
        },
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
        validation: {
          required: true,
          valid: false,
        },
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ],
        },
        value: 'fastest',
        validation: {
          required: false,
          valid: true,
        },
      },
    },
    isLoading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({isLoading: true});
    const formData = {};
    for (let params in this.state.orderForm) {
      formData[params] = this.state.orderForm[params].value;
    }
    const order = {
      ingredients: this.props.order,
      price: this.props.price,
      orderData: formData,
    };
    axiosInstance.post('/orders.json', order).then((resp) => {
      console.log('Status: ', resp.status);
      this.setState({isLoading: false});
    }).catch((err) => console.log(err));
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    return isValid;
  }

  inputHandler = (event, inputIdentifier) => {
    const formData = JSON.parse(JSON.stringify(this.state.orderForm));
    formData[inputIdentifier].value = event.target.value;
    formData[inputIdentifier].validation.valid = this.checkValidity(
        formData[inputIdentifier].value,
        formData[inputIdentifier].validation);
    this.setState({orderForm: formData});
  };

  render() {
    const formElementArray = [];
    //create an array of Input configurations
    for (let orderFormParameter in this.state.orderForm) {
      formElementArray.push({
        id: orderFormParameter,
        config: this.state.orderForm[orderFormParameter],
      });
    }
    let form = (
        <form className={styles.ContactInput}>
          {formElementArray.map(element => {
            return <Input key={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                inputHandler={(event) => this.inputHandler(event, element.id)}
                validation={element.config.validation}
            />;
          })}
          <Button buttonType="Success" isClicked={this.orderHandler}>
            SUBMIT!
          </Button>
        </form>
    );
    if (this.state.isLoading) {
      form = <LoadingSpinner />;
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
