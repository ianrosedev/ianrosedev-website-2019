import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.notFound}>
    <iframe
      title='WHAM - Everything She Wants'
      src='https://www.youtube.com/embed/Yf_Lwe6p-Cg?controls=0'
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    />
  </div>
);

export default NotFound;
