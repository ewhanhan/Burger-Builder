import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo//Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import SideDrawerMenuButton from './SideDrawerMenuButton//SideDrawerMenuButton.js';

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <SideDrawerMenuButton isClicked={props.toggleSideDrawer} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
