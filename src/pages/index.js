import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Buffets from '../components/buffets';
import Aperitifs from '../components/aperitifs';
import Biographie from '../components/biographie';
import References from '../components/references';
import Instagram from '../components/instagram';
const INSTAGRAM_ID = '4536541103';
const THUMBNAIL_WIDTH = 640;
const PHOTO_COUNT = 12;
const Index = () => {
  // const { markdownRemark: post } = data;
  // const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Instagram
        userId={INSTAGRAM_ID}
        thumbnailWidth={THUMBNAIL_WIDTH}
        photoCount={PHOTO_COUNT}
      />
      <section id="prestations">
        <Aperitifs />
        <Buffets />
      </section>
      <Biographie />
      <References />
    </Layout>
  );
};

export default Index;

// export const index = graphql`
//   query index {
//     markdownRemark(frontmatter: { templateKey: { eq: "sitemeta" } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//     allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "post" } } }
//       sort: { order: DESC, fields: [frontmatter___title] }
//     ) {
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
//             en
//             url
//           }
//         }
//       }
//     }
//   }
// `;
