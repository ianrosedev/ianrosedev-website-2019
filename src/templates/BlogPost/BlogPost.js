import React from 'react';
import { graphql } from 'gatsby';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import SEO from '../../components/SEO/SEO';

const BlogPost = ({ data }) => {
  const { contentfulBlogPost: post } = data;

  return (
    <LayoutMain>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <h2>{post.slug}</h2>
    </LayoutMain>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
    }
  }
`;

export default BlogPost;
