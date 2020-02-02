import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
// import Modal from '../components/modal';
import Price from '../components/price';

const PostShop = ({ data }) => {
  const post = data.markdownRemark;
  // const { data, pageContext } = props;
  // const { previous, next } = pageContext;
  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={post.frontmatter.thumbnail.publicURL}
      location="shop"
    >
      <article>
        <header>
          <div className="flex wrap jc-sb mb1">
            <h1>{post.frontmatter.title}</h1>
          </div>
          {post.frontmatter.thumbnail && (
            <Img
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
              style={{ maxWidth: '50%' }}
              alt={post.frontmatter.title}
              className="mb1"
            />
          )}
        </header>
        <Price
          price={post.frontmatter.price}
          shippingEuPrice={post.frontmatter.shippingEu.price}
          shippingEuPaypal={post.frontmatter.shippingEu.paypal}
          shippingWorldPrice={post.frontmatter.shippingWorld.price}
          shippingWorldPaypal={post.frontmatter.shippingWorld.paypal}
        />
        <p className="mb1">{post.frontmatter.description}</p>
        {post.frontmatter.images &&
          post.frontmatter.images.map(item =>
            item.image ? (
              <Img
                key={item.image.uid}
                fluid={item.image.childImageSharp.fluid}
                alt={post.frontmatter.title}
                className="mb1"
              />
            ) : null
          )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export default PostShop;

export const postShopQuery = graphql`
  query PostShopBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
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
          publicURL
          id
          childImageSharp {
            fluid(maxWidth: 400, quality: 80) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        description
        images {
          image {
            uid
            childImageSharp {
              fluid(maxWidth: 800, quality: 80) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
