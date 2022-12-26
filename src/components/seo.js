import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ children }) {
  const data = useStaticQuery(graphql`
    query Seo {
      markdownRemark(frontmatter: { templateKey: { eq: "metadata" } }) {
        frontmatter {
          templateKey
          title
          subtitle
          description
          logo {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <>
      <title>{`${data.markdownRemark.frontmatter.title} — ${data.markdownRemark.frontmatter.subtitle}`}</title>
      <meta
        name="description"
        content={data.markdownRemark.frontmatter.description}
      />
      <meta
        property="og:title"
        content={`${data.markdownRemark.frontmatter.title} — ${data.markdownRemark.frontmatter.subtitle}`}
      />
      <meta
        property="og:description"
        content={data.markdownRemark.frontmatter.description}
      />
      <meta property="og:type" content="website" />
      <meta
        name="og:image"
        content={data.markdownRemark.frontmatter.logo.publicURL}
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={`${data.markdownRemark.frontmatter.title} — ${data.markdownRemark.frontmatter.subtitle}`}
      />
      <meta
        name="twitter:description"
        content={data.markdownRemark.frontmatter.description}
      />
      <meta
        name="twitter:image"
        content={data.markdownRemark.frontmatter.logo.publicURL}
      />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="all" />
      {children}
    </>
  );
}

export default Seo;
