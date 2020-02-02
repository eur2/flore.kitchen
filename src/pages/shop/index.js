import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Img from 'gatsby-image';
// import Modal from '../../components/modal';
import Price from '../../components/price';

const IndexShop = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout title="Shop" location="shop">
      {posts.map(({ node: post }) => {
        return (
          <article key={post.id} className="mb">
            <header className="flex wrap jc-sb mb1">
              <h1>{post.frontmatter.title}</h1>
            </header>
            {post.frontmatter.thumbnail && (
              <Link to={post.fields.slug}>
                <Img
                  fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                  style={{ maxWidth: '50%' }}
                  alt={post.frontmatter.title}
                  className="mb1"
                />
              </Link>
            )}
            <Price
              price={post.frontmatter.price}
              shippingEuPrice={post.frontmatter.shippingEu.price}
              shippingEuPaypal={post.frontmatter.shippingEu.paypal}
              shippingWorldPrice={post.frontmatter.shippingWorld.price}
              shippingWorldPaypal={post.frontmatter.shippingWorld.paypal}
            />
            <Link to={post.fields.slug}>See more</Link>
          </article>
        );
      })}
    </Layout>
  );
};
export default IndexShop;

export const indexShopQuery = graphql`
  query IndexShop {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "postshop" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
            date(formatString: "MMMM DD, YYYY")
            price
            shippingEu {
              price
              paypal
            }
            shippingWorld {
              price
              paypal
            }
            thumbnail {
              id
              childImageSharp {
                fluid(maxWidth: 400, quality: 80) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
