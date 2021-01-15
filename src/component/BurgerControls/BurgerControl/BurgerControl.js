import React from 'react';
import styles from './BurgerControl.module.css';
const BurgerControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.ingredientLabel}</div>
      <button className={styles.Less}>Add</button>
      <button className={styles.More}>Remove</button>
    </div>
  );
};

export default BurgerControl;
