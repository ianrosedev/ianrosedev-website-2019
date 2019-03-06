import React from 'react';
import Footer from '../Footer/Footer';
import styles from './LayoutBody.module.scss';

const LayoutBody = ({ children }) => (
  <div className={styles.layout}>
    {children}
    <Footer />
  </div>
);

export default LayoutBody;
