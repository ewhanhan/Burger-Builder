import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.js';
import styles from './Burger.module.css';

const Burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
