import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  let inputElement = null;

  //Depending on the input type we specify, create the element and spread the props
  switch (props.elementType) {
    case  ('input'):
      inputElement = <input className={styles.InputElement} {...props.elementConfig} {...props.value}/>;
      break;
    case ('textarea'):
      inputElement = <textarea className={styles.InputElement}{...props.elementConfig} {...props.value}/>;
      break;
    case('select'):
      inputElement = <select className={styles.InputElement}{...props.value}>{props.elementConfig.options.map(
        option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}</select>;
      break;
    default:
      inputElement = <input className={styles.InputElement} {...props.elementConfig} {...props.value}/>;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
