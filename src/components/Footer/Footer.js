import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ position, color }) => (
  <footer
    className={position === 'right' ? styles.footerRight : styles.footerLeft}
  >
    <span className={styles.notice} style={{ color: color || 'white' }}>
      &copy; Ian Rose, {new Date().getFullYear()}
    </span>
  </footer>
);

export default Footer;
