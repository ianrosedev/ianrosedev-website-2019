import React, { useState, useLayoutEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import LayoutBody from '../LayoutBody/LayoutBody';
import styles from './Code.module.scss';

const Code = () => {
  const data = useStaticQuery(graphql`
    query {
      snes: file(relativePath: { eq: "super-nintendo-game-info.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      puphub: file(relativePath: { eq: "puphub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
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
    <LayoutBody>
      {/* Layout */}
      <div className={styles.backgroundBlockRight} aria-hidden='true' />
      <div className={styles.backgroundBlockLeft} aria-hidden='true' />
      {/* Examples */}
      <section className={`${styles.examples} ${styles.example1}`}>
        <div className={styles.text}>
          <h1>Super Nintendo Game Info</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <a href='https://github.com/ianrosedev/Super-Nintendo-Game-Info'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithubSquare}
              size='4x'
            />
          </a>
          <a href='https://supernintendogameinfo.ianrosedev.com'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faLaptop}
              size='4x'
            />
          </a>
        </div>
        <div style={{ width: exampleHeight }} className={styles.img}>
          <Img
            fluid={data.snes.childImageSharp.fluid}
            alt='Super Nintendo Game Info'
          />
        </div>
      </section>
      <section className={`${styles.examples} ${styles.example2}`}>
        <div className={styles.text}>
          <h1>PupHub</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <a href='https://github.com/ianrosedev/PupHub'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithubSquare}
              size='4x'
            />
          </a>
          <a href='https://puphub.ianrosedev.com'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faLaptop}
              size='4x'
            />
          </a>
        </div>
        <div style={{ width: exampleHeight }} className={styles.img}>
          <Img fluid={data.puphub.childImageSharp.fluid} alt='PupHub' />
        </div>
      </section>
      <section className={`${styles.examples} ${styles.example3}`}>
        <div className={styles.text}>
          <h1>Color Test</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <a href='https://github.com/ianrosedev/recipe-share-color-test'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithubSquare}
              size='4x'
            />
          </a>
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.iconDisabled}`}
            icon={faLaptop}
            size='4x'
          />
        </div>
        <div style={{ width: exampleHeight }} className={styles.img}>
          <Img fluid={data.snes.childImageSharp.fluid} alt='Color Picker' />
        </div>
      </section>
      <section className={`${styles.examples} ${styles.example4}`}>
        <div className={styles.text}>
          <h1>Recipe Share [WIP]</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <a href='https://github.com/ianrosedev/recipe-share'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithubSquare}
              size='4x'
            />
          </a>
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.iconDisabled}`}
            icon={faLaptop}
            size='4x'
          />
        </div>
        <div style={{ width: exampleHeight }} className={styles.img}>
          <Img
            fluid={data.snes.childImageSharp.fluid}
            alt='Recipe Share, work in progress'
          />
        </div>
      </section>
      <div className={styles.emptyRow} aria-hidden='true' />
    </LayoutBody>
  );
};

export default Code;
