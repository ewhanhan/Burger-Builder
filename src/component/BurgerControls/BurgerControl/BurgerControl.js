import React from 'react';
import styles from './BurgerControl.module.css';
const BurgerControl = (props) => {
  console.log(props);
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.ingredientLabel}</div>
      <button className={styles.More} onClick={props.click}>
        Add
      </button>
      <button className={styles.Less}>Remove</button>
    </div>
  );
};

export default BurgerControl;
