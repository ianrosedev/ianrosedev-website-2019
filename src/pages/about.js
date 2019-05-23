import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import About from '../components/About/About';
import SEO from '../components/SEO/SEO';

const AboutPage = () => (
  <LayoutMain>
    <SEO title='About' />
    <About />
  </LayoutMain>
);

export default AboutPage;
