import React from 'react';
import Helmet from 'react-helmet';

const Head = ({ title, description, image }) => (
  <Helmet>
    <html lang="fr" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="og:image" content={image} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);
export default Head;
