import styles from './Layout.module.css';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer.js';
import React, { Component } from 'react';

export class Layout extends Component {
  state = {
    isSideDrawerShowing: false,
  };

  closeSideDrawerHandler = () => {
    this.setState({ isSideDrawerShowing: false });
  };

  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return { isSideDrawerShowing: !prevState.isSideDrawerShowing };
    });
  };

  render() {
    return (
      <>
        <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer
          isSideDrawerShowing={this.state.isSideDrawerShowing}
          closeSideDrawerClickFn={this.closeSideDrawerHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    );
  }
}
export default Layout;
