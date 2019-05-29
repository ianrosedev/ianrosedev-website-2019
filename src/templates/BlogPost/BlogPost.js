// Need dangerouslySetInnerHTML for blog body
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import LayoutMain from '../../layouts/LayoutMain/LayoutMain';
import LayoutBody from '../../layouts/LayoutBody/LayoutBody';
import SEO from '../../components/SEO/SEO';
import styles from './BlogPost.module.scss';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      publishDate(formatString: "MMMM DD, YYYY")
      heroImage {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`;

const BlogPost = ({ data }) => {
  const { contentfulBlogPost: post } = data;

  return (
    <LayoutMain>
      <LayoutBody>
        <SEO title={post.title} />
        <div className={styles.post}>
          <div className={styles.header}>
            <Img
              fluid={post.heroImage.fluid}
              alt={post.heroImage.description || 'No description'}
              className={styles.heroImage}
            />
            <h1>{post.title}</h1>
            <p className={styles.publishDate}>{post.publishDate}</p>
          </div>
          <div className={styles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className={styles.tags}>
            <h4>Tags</h4>
            {post.tags.map(tag => (
              <span key={tag}>{tag} </span>
            ))}
          </div>
        </div>
        <div className={styles.emptyRow} aria-hidden='true' />
      </LayoutBody>
    </LayoutMain>
  );
};

export default BlogPost;
