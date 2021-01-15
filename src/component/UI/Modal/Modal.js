import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div
      className={styles.Modal}
      style={{
        transform: props.isShowing ? 'translateY(0)' : 'translateY(-100vh',
        opacity: props.isShowing ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
