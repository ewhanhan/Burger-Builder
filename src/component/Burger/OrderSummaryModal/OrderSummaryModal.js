import React from 'react';

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
      <p>A decilcious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Checkout?</p>
    </>
  );
};

export default OrderSummaryModal;
