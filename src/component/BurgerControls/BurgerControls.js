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
            addClickHandler={() => props.addIngredientHandlerFn(item.type)}
            removeClickHandler={() =>
              props.removeIngredientHandlerFn(item.type)
            }
            isDisabledIngredient={props.disabledIngredients[item.type]}
          />
        );
      })}
    </div>
  );
};

export default BurgerControls;
