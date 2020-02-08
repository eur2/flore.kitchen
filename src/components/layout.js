import React from 'react';
//import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import '../styles/layout.css';
import Head from './head';
import Header from './header';
import Nav from './nav';
import Social from './social';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        markdownRemark(frontmatter: { templateKey: { eq: "metadata" } }) {
          html
          frontmatter {
            templateKey
            title
            description
            image {
              publicURL
              id
              childImageSharp {
                fluid(maxWidth: 180, quality: 80) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            instagram
            facebook
            tel
            email
            street
            city
          }
        }
      }
    `}
    render={data => (
      <>
        <Head
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.frontmatter.description}
          image={data.markdownRemark.frontmatter.image.publicURL}
        />
        <Header
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.frontmatter.description}
          image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
          tel={data.markdownRemark.frontmatter.tel}
          email={data.markdownRemark.frontmatter.email}
          street={data.markdownRemark.frontmatter.street}
          city={data.markdownRemark.frontmatter.city}
        />
        <Nav />
        <Social
          instagram={data.markdownRemark.frontmatter.instagram}
          facebook={data.markdownRemark.frontmatter.facebook}
        />
        <main role="main">{children}</main>
      </>
    )}
  />
);

export default Layout;
