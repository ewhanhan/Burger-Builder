import React from 'react';
import styles from './Order.module.css';

const Order = (props) => {
  let ingredients = [];

  for (const items in props.ingredients) {
    ingredients.push({ ingredient: items, amount: props.ingredients[items] });
  }

  return (
    <div className={styles.Order}>
      <strong>
        <p>Ingredients:</p>
      </strong>
      {ingredients.map((ingredient) => {
        return (
          <span className={styles.OrderIngredient} key={ingredient.ingredient + ingredient.amount}>
            {ingredient.ingredient}: {ingredient.amount}
          </span>
        );
      })}
      <p>
        <strong>Price: </strong>CAD {Number.parseFloat(props.price).toFixed(2)}
      </p>
    </div>
  );
};

export default Order;
