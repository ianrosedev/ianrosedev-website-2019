import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ position }) => (
  <footer
    className={`${styles.footer} ${
      position === 'right' ? styles.positionRight : styles.positionLeft
    }`}
  >
    &copy; Ian Rose, {new Date().getFullYear()}
  </footer>
);

export default Footer;
