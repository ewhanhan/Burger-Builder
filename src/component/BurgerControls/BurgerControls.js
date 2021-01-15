import React from 'react';
import styles from './BurgerControls.module.css';
import BuildControl from './BurgerControl/BurgerControl.js';

const INGREDIENT_CONTROLLERS = [
  { ingredientName: 'Salad', type: 'salad' },
  { ingredientName: 'Bacon', type: 'bacon' },
  { ingredientName: 'Cheese', type: 'cheese' },
  { ingredientName: 'Meat', type: 'meat' },
];

const BurgerControls = (props) => {
  return (
    <div className={styles.BurgerControls}>
      {INGREDIENT_CONTROLLERS.map((item, index) => {
        return (
          <BuildControl
            key={item.ingredientName + index}
            ingredientLabel={item.ingredientName}
          />
        );
      })}
    </div>
  );
};

export default BurgerControls;
