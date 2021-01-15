import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  return props.isShowing ? (
    <div className={styles.Backdrop} onClick={props.isClicked}></div>
  ) : null;
};

export default Backdrop;
