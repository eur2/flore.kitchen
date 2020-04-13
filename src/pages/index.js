import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import Section from '../components/section';
import Instagram from '../components/instagram';
import Prestations from '../components/prestations';
import References from '../components/references';

// import Head from '../components/head';
import Header from '../components/header';
import Nav from '../components/nav';
import Contact from '../components/contact';

const INSTAGRAM_ID = '4536541103';
const THUMBNAIL_WIDTH = 640;
const PHOTO_COUNT = 6;
const Index = ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      description={post.frontmatter.description}
      image={post.frontmatter.logo.publicURL}
    >
      <Header
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image.childImageSharp.fluid}
        logo={post.frontmatter.logo.childImageSharp.fluid}
        tel={post.frontmatter.tel}
        email={post.frontmatter.email}
        instagram={post.frontmatter.instagram}
        facebook={post.frontmatter.facebook}
      />
      <Nav />
      <main>
        <Section posts={posts} id="intro">
          <Instagram
            userId={INSTAGRAM_ID}
            thumbnailWidth={THUMBNAIL_WIDTH}
            photoCount={PHOTO_COUNT}
          />
        </Section>
        <Prestations posts={posts} id="post" />
        <Section posts={posts} id="biographie" />
        <References posts={posts} id="references" />
      </main>
      <Contact
        tel={post.frontmatter.tel}
        email={post.frontmatter.email}
        address={post.frontmatter.address}
      />
    </Layout>
  );
};

export default Index;

export const index = graphql`
  query posts {
    markdownRemark(frontmatter: { templateKey: { eq: "metadata" } }) {
      html
      frontmatter {
        templateKey
        title
        subtitle
        description
        image {
          publicURL
          id
          childImageSharp {
            fluid(maxWidth: 1600, quality: 70) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        logo {
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
        address
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___slug] }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            slug
            image {
              id
              childImageSharp {
                fluid(maxWidth: 1024, quality: 70) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            logos {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 100, quality: 70) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            menu {
              title
              credit
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 600, quality: 70) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              plats {
                plat
              }
            }
          }
        }
      }
    }
  }
`;

// filter: { frontmatter: { templateKey: { eq: "post" } } }

// const INSTAGRAM_ID = '4536541103';
// const THUMBNAIL_WIDTH = 640;
// const PHOTO_COUNT = 6;
// const Index = ({ data }) => {
//   const { markdownRemark: post } = data;
//   const { edges: posts } = data.allMarkdownRemark;
//   return (
//     <Layout>
//       <Section posts={posts} id="intro">
//         <Instagram
//           userId={INSTAGRAM_ID}
//           thumbnailWidth={THUMBNAIL_WIDTH}
//           photoCount={PHOTO_COUNT}
//         />
//       </Section>
//       <Prestations posts={posts} id="post" />
//       <Section posts={posts} id="biographie" />
//       <References posts={posts} id="references" />
//     </Layout>
//   );
// };

// export default Index;

// export const index = graphql`
//   query posts {
//     markdownRemark(frontmatter: { templateKey: { eq: "metadata" } }) {
//       html
//       frontmatter {
//         templateKey
//         title
//         subtitle
//         description
//         image {
//           publicURL
//           id
//           childImageSharp {
//             fluid(maxWidth: 1600, quality: 70) {
//               ...GatsbyImageSharpFluid_noBase64
//             }
//           }
//         }
//         logo {
//           publicURL
//           id
//           childImageSharp {
//             fluid(maxWidth: 180, quality: 80) {
//               ...GatsbyImageSharpFluid_noBase64
//             }
//           }
//         }
//         instagram
//         facebook
//         tel
//         email
//         address
//       }
//     }
//     allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___slug] }) {
//       edges {
//         node {
//           id
//           html
//           fields {
//             slug
//           }
//           frontmatter {
//             templateKey
//             title
//             slug
//             image {
//               id
//               childImageSharp {
//                 fluid(maxWidth: 1024, quality: 70) {
//                   ...GatsbyImageSharpFluid_noBase64
//                 }
//               }
//             }
//             logos {
//               image {
//                 id
//                 childImageSharp {
//                   fluid(maxWidth: 100, quality: 70) {
//                     ...GatsbyImageSharpFluid_noBase64
//                   }
//                 }
//               }
//             }
//             menu {
//               title
//               credit
//               image {
//                 id
//                 childImageSharp {
//                   fluid(maxWidth: 600, quality: 70) {
//                     ...GatsbyImageSharpFluid_noBase64
//                   }
//                 }
//               }
//               plats {
//                 plat
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
