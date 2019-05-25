import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import LayoutBody from '../../layouts/LayoutBody/LayoutBody';
import Footer from '../Footer/Footer';
import styles from './Contact.module.scss';

const Contact = () => {
  // Images
  const data = useStaticQuery(graphql`
    query {
      ianOnTriangle: file(relativePath: { eq: "ian-on-triangle-statue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <LayoutBody>
        <div className={styles.img}>
          <Img
            fluid={data.ianOnTriangle.childImageSharp.fluid}
            alt='Ian on a triangle statue'
          />
        </div>
        <section className={styles.contact}>
          <ul>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faEnvelopeSquare}
                size='4x'
              />
              <a href='mailto:ianrosedev@gmail.com'>ianrosedev@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithubSquare}
                size='4x'
              />
              <a href='https://github.com/ianrosedev'>github.com/ianrosedev</a>
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faLinkedin}
                size='4x'
              />
              <a href='https://www.linkedin.com/in/ianrosedev/'>
                linkedin.com/in/ianrosedev
              </a>
            </li>
          </ul>
        </section>
        <div className={styles.emptyRow} aria-hidden='true' />
      </LayoutBody>
      <Footer position='left' />
    </>
  );
};

export default Contact;
