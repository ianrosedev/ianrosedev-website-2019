import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import LayoutBody from '../../layouts/LayoutBody/LayoutBody';
import Footer from '../Footer/Footer';
import styles from './Home.module.scss';

const Home = () => {
  // Images
  const data = useStaticQuery(graphql`
    query {
      ianOnBench: file(relativePath: { eq: "ian-on-bench.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <LayoutBody>
        <Img
          fluid={data.ianOnBench.childImageSharp.fluid}
          alt='Ian on bench'
          className={styles.img}
        />
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
        <div className={styles.emptyRow} aria-hidden='true' />
      </LayoutBody>
      <Footer position='left' />
    </>
  );
};

export default Home;
