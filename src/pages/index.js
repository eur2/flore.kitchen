import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Section from '../components/section';
import Prestations from '../components/prestations';
import References from '../components/references';
import Nav from '../components/nav';
import Seo from '../components/seo';

// const INSTAGRAM_ID = '4536541103';
// const THUMBNAIL_WIDTH = 640;
// const PHOTO_COUNT = 6;
const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Nav />
      <main>
        <Section posts={posts} id="intro" />
        <Prestations posts={posts} id="post" />
        <Section posts={posts} id="biographie" />
        <References posts={posts} id="references" />
      </main>
    </Layout>
  );
};

export default Index;

export const Head = () => <Seo />;

export const index = graphql`
  query posts {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___slug] }) {
      edges {
        node {
          id
          html
          frontmatter {
            templateKey
            title
            slug
            image {
              childImageSharp {
                gatsbyImageData(width: 1024, layout: CONSTRAINED)
              }
            }
            logos {
              image {
                childImageSharp {
                  gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
              }
            }
            menu {
              title
              credit
              image {
                childImageSharp {
                  gatsbyImageData(width: 600, layout: CONSTRAINED)
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
