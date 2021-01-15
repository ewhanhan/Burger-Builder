import React from 'react';
import styles from './BurgerControl.module.css';
const BurgerControl = (props) => {
  console.log(props);
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.ingredientLabel}</div>
      <button className={styles.More} onClick={props.addClickHandler}>
        Add
      </button>
      <button
        className={styles.Less}
        onClick={props.removeClickHandler}
        disabled={props.isDisabledIngredient}
      >
        Remove
      </button>
    </div>
  );
};

export default BurgerControl;
