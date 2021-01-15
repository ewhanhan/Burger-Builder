import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop.js';

const Modal = (props) => {
  return (
    <>
      <Backdrop
        isShowing={props.isShowing}
        isClicked={props.closeOrderSummaryHandler}
      />
      <div
        className={styles.Modal}
        style={{
          transform: props.isShowing ? 'translateY(0)' : 'translateY(-100vh',
          opacity: props.isShowing ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
