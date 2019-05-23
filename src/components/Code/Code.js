import React, { useState, useLayoutEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import LayoutBody from '../../layouts/LayoutBody/LayoutBody';
import Footer from '../Footer/Footer';
import styles from './Code.module.scss';

const Code = () => {
  // Images
  const data = useStaticQuery(graphql`
    query {
      snes: file(relativePath: { eq: "super-nintendo-game-info.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pupHub: file(relativePath: { eq: "puphub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      colorTest: file(relativePath: { eq: "recipe-share-color-test.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      recipeShare: file(relativePath: { eq: "recipe-share-wip.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const [exampleHeight, setExampleHeight] = useState(null);

  // Get div height of `examples` so image can use for resizing
  // Only runs once
  useLayoutEffect(() => {
    const handleResize = () =>
      setExampleHeight(
        document.querySelector('[class*="examples"]').offsetHeight + 5
      );

    // Set initial height on load
    // `offsetHeight` returns an integer
    // Add 5 to make sure image fills height completely
    setExampleHeight(
      document.querySelector('[class*="examples"]').offsetHeight + 5
    );

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <LayoutBody>
        <article
          aria-labelledby='snes'
          className={`${styles.examples} ${styles.example1}`}
        >
          <div className={styles.text}>
            <h1 id='snes'>Super Nintendo Game Info</h1>
            <a
              href='https://github.com/ianrosedev/Super-Nintendo-Game-Info'
              aria-label='Go to the Super Nintendo Game Info GitHub page'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithubSquare}
                size='4x'
              />
            </a>
            <a
              href='https://supernintendogameinfo.ianrosedev.com'
              aria-label='Go to the Super Nintendo Game Info website'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faLaptop}
                size='4x'
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div style={{ width: exampleHeight }} className={styles.img}>
            <Img
              fluid={data.snes.childImageSharp.fluid}
              alt='Super Nintendo Game Info'
            />
          </div>
        </article>
        <article className={`${styles.examples} ${styles.example2}`}>
          <div className={styles.text}>
            <h1>PupHub</h1>
            <a
              href='https://github.com/ianrosedev/PupHub'
              aria-label='Go to the PupHub GitHub page'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithubSquare}
                size='4x'
              />
            </a>
            <a
              href='https://puphub.ianrosedev.com'
              aria-label='Go to the PupHub website'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faLaptop}
                size='4x'
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div style={{ width: exampleHeight }} className={styles.img}>
            <Img fluid={data.pupHub.childImageSharp.fluid} alt='PupHub' />
          </div>
        </article>
        <article className={`${styles.examples} ${styles.example3}`}>
          <div className={styles.text}>
            <h1>Color Test</h1>
            <a
              href='https://github.com/ianrosedev/recipe-share-color-test'
              aria-label='Go to the Color Test GitHub page'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithubSquare}
                size='4x'
              />
            </a>
            <a
              href='https://colortest.ianrosedev.com'
              aria-label='Go to the Color Test website'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faLaptop}
                size='4x'
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div style={{ width: exampleHeight }} className={styles.img}>
            <Img
              fluid={data.colorTest.childImageSharp.fluid}
              alt='Color Picker'
            />
          </div>
        </article>
        <article className={`${styles.examples} ${styles.example4}`}>
          <div className={styles.text}>
            <h1>Recipe Share [WIP]</h1>
            <a
              href='https://github.com/ianrosedev/recipe-share'
              aria-label='Go to the Recipe Share GitHub page'
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithubSquare}
                size='4x'
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div style={{ width: exampleHeight }} className={styles.img}>
            <Img
              fluid={data.recipeShare.childImageSharp.fluid}
              alt='Recipe Share, work in progress'
            />
          </div>
        </article>
        <div className={styles.emptyRow} aria-hidden='true' />
      </LayoutBody>
      <Footer position='right' />
    </>
  );
};

export default Code;
