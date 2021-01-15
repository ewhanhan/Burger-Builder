import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo//Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
