import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Livraison = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout
      title="Flore"
      subtitle="Livraison de repas, Cheffe à domicile, traiteur sur mesure"
      description="Livraison de repas, Cheffe à domicile, traiteur sur mesure"
    >
      <a href="https://bookings.zenchef.com/results?rid=354054&pid=1001">
        zenchef
      </a>
      {posts.map(({ node: post }) => {
        return (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
          </article>
        );
      })}
    </Layout>
  );
};
export default Livraison;

export const livraisonQuery = graphql`
  query Livraison {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "livraison" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
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
          }
        }
      }
    }
  }
`;
