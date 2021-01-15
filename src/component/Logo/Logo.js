import React from 'react';
import BurgerBuilderLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={BurgerBuilderLogo} alt="Bob's Burger Builder Logo" />
    </div>
  );
};

export default Logo;
