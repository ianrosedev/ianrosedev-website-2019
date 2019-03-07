import React from 'react';
import LayoutMain from '../components/LayoutMain/LayoutMain';
import Homepage from '../components/Homepage/Homepage';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
  <LayoutMain>
    <SEO title='Web Developer' />
    <Homepage />
  </LayoutMain>
);

export default IndexPage;
