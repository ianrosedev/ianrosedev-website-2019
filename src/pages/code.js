import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import Code from '../components/Code/Code';
import SEO from '../components/SEO/SEO';

const CodePage = () => (
  <LayoutMain>
    <SEO title='Code' />
    <Code />
  </LayoutMain>
);

export default CodePage;
