import React from 'react';
import LayoutBody from '../LayoutBody/LayoutBody';
import styles from './Home.module.scss';

const Home = () => (
  <LayoutBody>
    <div className={styles.backgroundBlockLeft} aria-hidden='true' />
    <div className={styles.backgroundBlockRight} aria-hidden='true' />
    <div className={styles.photo} role='img' aria-label='Ian on bench' />
    <div className={styles.intro}>
      <h1>Hi, My name is Ian.</h1>
      <h2>
        I&apos;m a Web Developer in
        <br />
        Durham, North Carolina.
      </h2>
    </div>
    <div className={styles.skills}>
      <h1>Skills:</h1>
      <ul>
        <li>JavaScript - Modern Practices</li>
        <li>HTML - Accessibility</li>
        <li>CSS - Modern Practices</li>
        <li>React & Related Libraries</li>
        <li>Node & Express</li>
        <li>Ruby on Rails</li>
        <li>MongoDB</li>
      </ul>
    </div>
  </LayoutBody>
);

export default Home;
