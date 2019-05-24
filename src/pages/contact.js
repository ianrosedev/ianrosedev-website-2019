import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';

const ContactPage = () => (
  <LayoutMain>
    <SEO title='Contact' />
    <Contact />
  </LayoutMain>
);

export default ContactPage;
