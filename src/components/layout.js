import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/layout.css';
import Header from './header';
import Contact from './contact';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMeta {
      markdownRemark(frontmatter: { templateKey: { eq: "metadata" } }) {
        html
        frontmatter {
          templateKey
          tel
          email
          address
          cgv
        }
      }
    }
  `);
  return (
    <>
      <Header />

      {children}
      <Contact
        tel={data.markdownRemark.frontmatter.tel}
        email={data.markdownRemark.frontmatter.email}
        address={data.markdownRemark.frontmatter.address}
        cgv={data.markdownRemark.frontmatter.cgv}
      />
    </>
  );
};
export default Layout;

// image {
//   childImageSharp {
//     gatsbyImageData(width: 1600, layout: CONSTRAINED)
//   }
// }
// logo {
//   childImageSharp {
//     gatsbyImageData(width: 180, layout: CONSTRAINED)
//   }
// }
