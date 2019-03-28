import React from 'react';
import styles from './Footer.module.scss';

// Use positionClass to position on grid
const Footer = ({ positionClass }) => (
  <footer className={`${styles.footer} ${positionClass}`}>
    &copy; Ian Rose, {new Date().getFullYear()}
  </footer>
);

export default Footer;
