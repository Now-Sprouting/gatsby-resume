import React, { memo } from 'react'
import Helmet from 'react-helmet';
import {
  defaultTitle,
} from 'data/config';

export const SEO = ({ title = defaultTitle}) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <title>{title}</title>
      <html lang="en" dir="ltr"/>
    </Helmet>
  );
};

