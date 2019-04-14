import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styles from './Blog.module.scss';
import LayoutBodyTile from '../LayoutBodyTile/LayoutBodyTile';

const Blog = () => {
  const { allContentfulBlogPost: allPosts } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <LayoutBodyTile>
      {allPosts.edges.map(post => (
        <div key={post.node.slug} className={styles.card}>
          <h1>{post.node.title}</h1>
          <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
        </div>
      ))}
    </LayoutBodyTile>
  );
};

export default Blog;
