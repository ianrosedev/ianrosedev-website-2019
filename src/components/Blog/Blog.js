import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
    <ul>
      {allPosts.edges.map(post => (
        <li key={post.node.slug}>
          <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Blog;
