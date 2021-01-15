import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.js';
import styles from './Burger.module.css';

const Burger = (props) => {
  const ingredientsItems = Object.keys(props.ingredients).map((ingredient) => {
    return [...Array(props.ingredients[ingredient])].map((item, index) => {
      return <BurgerIngredients key={ingredient + index} type={ingredient} />;
    });
  });

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {ingredientsItems}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
