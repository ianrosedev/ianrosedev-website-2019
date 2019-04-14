import React from 'react';
import { graphql } from 'gatsby';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import SEO from '../../components/SEO/SEO';
import styles from './BlogPost.module.scss';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
    }
  }
`;

const BlogPost = ({ data }) => {
  const { contentfulBlogPost: post } = data;

  return (
    <LayoutMain>
      <SEO title={post.title} />
      <div className={styles.foo}>
        <h1>{post.title}</h1>
        <h2>{post.slug}</h2>
      </div>
    </LayoutMain>
  );
};

export default BlogPost;
