const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('src/templates/BlogPost/BlogPost.js');

    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allContentfulBlogPost.edges.forEach(edge => {
          createPage({
            path: `/blog/${edge.node.slug}`,
            component: blogPost,
            context: {
              slug: edge.node.slug,
            },
          });
        });
      })
    );
  });
};
