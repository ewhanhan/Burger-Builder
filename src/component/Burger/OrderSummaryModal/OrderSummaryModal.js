import React from 'react';
import Button from '../../UI/Button/Button.js';

const OrderSummaryModal = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (element, index) => {
      return (
        <li key={element + index}>
          <span style={{ textTransform: 'capitalize' }}>{element}</span>:{' '}
          {props.ingredients[element]}
        </li>
      );
    }
  );

  return (
    <>
      <h3>Your Order!</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Checkout? Your order is: <strong>${props.price.toFixed(2)}</strong>
      </p>
      <Button
        buttonType="Success"
        isClicked={props.orderSummaryContinueHandler}
      >
        ORDER
      </Button>
      <Button buttonType="Danger" isClicked={props.orderSummaryCancelHandler}>
        CANCEL
      </Button>
    </>
  );
};

export default OrderSummaryModal;
