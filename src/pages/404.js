import React from 'react';
import LayoutMain from '../components/LayoutMain/LayoutMain';
import NotFound from '../components/NotFound/NotFound';
import SEO from '../components/SEO/SEO';

const NotFoundPage = () => (
  <LayoutMain>
    <SEO title='Page Not Found' />
    <NotFound />
  </LayoutMain>
);

export default NotFoundPage;
