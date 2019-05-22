import React from 'react';
import styles from './LayoutBody.module.scss';

const LayoutBody = ({ children }) => (
  <main className={styles.layout}>{children}</main>
);

export default LayoutBody;
