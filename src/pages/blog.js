import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import Blog from '../components/Blog/Blog';
import SEO from '../components/SEO/SEO';

const BlogPage = () => (
  <LayoutMain>
    <SEO title='Blog' />
    <Blog />
  </LayoutMain>
);

export default BlogPage;
