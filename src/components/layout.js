import React from 'react';
//import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import '../styles/layout.css';
import Head from './head';
import Header from './header';
import Nav from './nav';

const Layout = ({ children, title, description, location, image }) => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        markdownRemark(frontmatter: { templateKey: { eq: "sitemeta" } }) {
          html
          frontmatter {
            templateKey
            title
            description
            image {
              publicURL
            }
            instagram
            facebook
            mail
          }
        }
      }
    `}
    render={data => (
      <>
        <Head
          title={
            title
              ? `${title} - ${data.markdownRemark.frontmatter.title}`
              : `${data.markdownRemark.frontmatter.title}`
          }
          description={
            description
              ? `${description}`
              : `${data.markdownRemark.frontmatter.description}`
          }
          image={
            image
              ? `${image}`
              : `${data.markdownRemark.frontmatter.image.publicURL}`
          }
        />
        <Header
          title={data.markdownRemark.frontmatter.title}
          instagram={data.markdownRemark.frontmatter.instagram}
          animation={
            location === 'shop' ? 'fast' : location === 'notes' ? null : 'slow'
          }
        />
        {location === 'about' ? (
          <Nav
            instagram={data.markdownRemark.frontmatter.instagram}
            facebook={data.markdownRemark.frontmatter.facebook}
            mail={data.markdownRemark.frontmatter.mail}
          />
        ) : null}
        <main role="main">{children}</main>
      </>
    )}
  />
);

/*Layout.propTypes = {
  children: PropTypes.node.isRequired
};*/

export default Layout;

// <StaticQuery
//   query={graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//           description
//         }
//       }
//     }
//   `}
