import React from 'react';
import styles from './CheckoutSummary.module.css';
import Burger from '../Burger.js';
import Button from '../../UI/Button/Button.js';

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>Checking out...</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button buttonType="Success" isClicked={props.checkoutContinueHandler}>
        ORDER
      </Button>
      <Button buttonType="Danger" isClicked={props.checkoutCancelHandler}>
        CANCEL
      </Button>
    </div>
  );
};

export default CheckoutSummary;
