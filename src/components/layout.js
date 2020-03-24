import React from 'react';
//import PropTypes from 'prop-types';
//import { graphql, StaticQuery } from 'gatsby';
import '../styles/layout.css';
// import '../styles/print.css';

//import Head from './head';
//import Header from './header';
//import Nav from './nav';
// import Social from './social';
//import Footer from './footer';

const Layout = ({ children }) => <>{children}</>;

export default Layout;

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteMeta {
//         markdownRemark(frontmatter: { templateKey: { eq: "metadata" } }) {
//           html
//           frontmatter {
//             templateKey
//             title
//             subtitle
//             description
//             image {
//               publicURL
//               id
//               childImageSharp {
//                 fluid(maxWidth: 1600, quality: 70) {
//                   ...GatsbyImageSharpFluid_noBase64
//                 }
//               }
//             }
//             logo {
//               publicURL
//               id
//               childImageSharp {
//                 fluid(maxWidth: 180, quality: 80) {
//                   ...GatsbyImageSharpFluid_noBase64
//                 }
//               }
//             }
//             instagram
//             facebook
//             tel
//             email
//             address
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Head
//           title={data.markdownRemark.frontmatter.title}
//           subtitle={data.markdownRemark.frontmatter.subtitle}
//           description={data.markdownRemark.frontmatter.description}
//           image={data.markdownRemark.frontmatter.logo.publicURL}
//         />
//         <Header
//           title={data.markdownRemark.frontmatter.title}
//           subtitle={data.markdownRemark.frontmatter.subtitle}
//           image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
//           logo={data.markdownRemark.frontmatter.logo.childImageSharp.fluid}
//           tel={data.markdownRemark.frontmatter.tel}
//           email={data.markdownRemark.frontmatter.email}
//           instagram={data.markdownRemark.frontmatter.instagram}
//           facebook={data.markdownRemark.frontmatter.facebook}
//         />
//         <Nav />
//         <main role="main">{children}</main>
//         <Footer address={data.markdownRemark.frontmatter.address} />
//       </>
//     )}
//   />
// );

// export default Layout;
