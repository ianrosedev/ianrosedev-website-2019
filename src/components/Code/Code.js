import React, { useState, useLayoutEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import LayoutBody from '../LayoutBody/LayoutBody';
import styles from './Code.module.scss';

const Code = () => {
  const [projectsHeight, setProjectsHeight] = useState(null);

  const data = useStaticQuery(graphql`
    query {
      snes: file(relativePath: { eq: "super-nintendo-game-info.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      puphub: file(relativePath: { eq: "puphub.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // Get div height of `projects` so image can use for resizing
  // Only runs once
  useLayoutEffect(() => {
    const handleResize = () =>
      setProjectsHeight(
        document.querySelector('[class*="projects"]').offsetHeight
      );

    // Set initial height on load
    setProjectsHeight(
      document.querySelector('[class*="projects"]').offsetHeight
    );

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LayoutBody>
      <div className={styles.backgroundBlockLeft} aria-hidden='true' />
      <div className={styles.backgroundBlockRight} aria-hidden='true' />
      <div className={`${styles.projects} ${styles.p1}`}>
        <div className={styles.text}>
          <h2>Super Nintendo Game Info</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </div>
        <div style={{ width: projectsHeight + 5 }} className={styles.img}>
          <Img fluid={data.snes.childImageSharp.fluid} />
        </div>
      </div>
      <div className={`${styles.projects} ${styles.p2}`}>
        <div className={styles.text}>
          <h2>Super Nintendo Game Info</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </div>
        <div style={{ width: projectsHeight + 5 }} className={styles.img}>
          <Img fluid={data.snes.childImageSharp.fluid} />
        </div>
      </div>
      <div className={`${styles.projects} ${styles.p3}`}>
        <div className={styles.text}>
          <h2>Super Nintendo Game Info</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </div>
        <div style={{ width: projectsHeight + 5 }} className={styles.img}>
          <Img fluid={data.snes.childImageSharp.fluid} />
        </div>
      </div>
      <div className={`${styles.projects} ${styles.p4}`}>
        <div className={styles.text}>
          <h2>Super Nintendo Game Info</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </div>
        <div style={{ width: projectsHeight + 5 }} className={styles.img}>
          <Img fluid={data.snes.childImageSharp.fluid} />
        </div>
      </div>
      <div className={styles.emptyRow} aria-hidden='true' />
    </LayoutBody>
  );
};

export default Code;
