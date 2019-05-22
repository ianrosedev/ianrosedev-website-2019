import React from 'react';
import LayoutBody from '../../layout/LayoutBody/LayoutBody';
import Footer from '../Footer/Footer';
import styles from './Home.module.scss';

const Home = () => (
  <LayoutBody>
    <div className={styles.photo} role='img' aria-label='Ian on bench' />
    <section className={styles.intro}>
      <h1>Hi, My name is Ian.</h1>
      <p>
        I&apos;m a Web Developer in
        <br />
        Durham, North Carolina.
      </p>
    </section>
    <section className={styles.skills}>
      <h2>Skills:</h2>
      <ul>
        <li>JavaScript - Modern Practices</li>
        <li>HTML - Accessibility</li>
        <li>CSS - Modern Practices</li>
        <li>React & Related Libraries</li>
        <li>Node & Express</li>
        <li>Ruby on Rails</li>
        <li>MongoDB</li>
      </ul>
    </section>
    <Footer positionClass={styles.footer} />
    <div className={styles.emptyRow} aria-hidden='true' />
  </LayoutBody>
);

export default Home;
