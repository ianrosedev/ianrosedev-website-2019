import React from 'react';
import LayoutMain from '../components/LayoutMain/LayoutMain';
import Home from '../components/Home/Home';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
  <LayoutMain>
    <SEO title='Web Developer' />
    <Home />
  </LayoutMain>
);

export default IndexPage;
