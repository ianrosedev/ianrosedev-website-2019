import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import LayoutBodyTile from '../../layouts/LayoutBodyTile/LayoutBodyTile';
import Footer from '../Footer/Footer';
import styles from './Blog.module.scss';

const Blog = () => {
  const { allContentfulBlogPost: allPosts } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            description {
              description
            }
            heroImage {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <LayoutBodyTile>
        {allPosts.edges.map(post => (
          <Link
            to={`/blog/${post.node.slug}`}
            key={post.node.slug}
            className={styles.card}
          >
            <Img
              fluid={post.node.heroImage.fluid}
              alt={post.node.heroImage.title}
              className={styles.img}
            />
            <div className={styles.text}>
              <h2 className={styles.title}>{post.node.title}</h2>
              <p>{post.node.description.description}</p>
            </div>
          </Link>
        ))}
      </LayoutBodyTile>
      <Footer position='left' />
    </>
  );
};

export default Blog;
