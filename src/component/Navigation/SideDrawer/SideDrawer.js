import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop.js';

const SideDrawer = (props) => {
  const attachedClasses = props.isSideDrawerShowing
    ? [styles.SideDrawer, styles.Open]
    : [styles.SideDrawer, styles.Close];

  return (
    <>
      <Backdrop
        isShowing={props.isSideDrawerShowing}
        isClicked={props.closeSideDrawerClickFn}
      />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};
export default SideDrawer;
