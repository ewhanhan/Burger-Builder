import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  let inputElement = null;

  //Depending on the input type we specify, create the element and spread the props
  switch (props.elementType) {
    case  ('input'):
      inputElement = <input
          className={styles.InputElement} {...props.elementConfig}
          value={props.value}
          onChange={props.inputHandler}
      />;
      break;
    case ('textarea'):
      inputElement = <textarea
          className={styles.InputElement}{...props.elementConfig}
          value={props.value}
          onChange={props.inputHandler}
      />;
      break;
    case('select'):
      inputElement = <select className={styles.InputElement} value={props.value}
          onChange={props.inputHandler}
      >{props.elementConfig.options.map(
          option => <option key={option.value}
              value={option.value}
          >{option.displayValue}</option>)}</select>;
      break;
    default:
      inputElement = <input
          className={styles.InputElement} {...props.elementConfig}
          value={props.value}
          onChange={props.inputHandler}
      />;
  }

  return (
      <div className={styles.Input}>
        <label className={styles.Label}>{props.label}</label>
        {inputElement}
      </div>
  );
};

export default Input;
