import React from 'react';
import styles from './LayoutBodyTile.module.scss';

const LayoutBodyTile = ({ children }) => (
  <main className={styles.layout}>{children}</main>
);

export default LayoutBodyTile;
