import React from 'react';
import Header from '../../components/Header/Header';
import styles from './LayoutMain.module.scss';

const LayoutMain = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
);

export default LayoutMain;
