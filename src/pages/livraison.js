import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const Livraison = ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout location="livraison">
      <Head
        title="Flore"
        subtitle="Livraison de repas, Cheffe à domicile, traiteur sur mesure"
        description="Livraison de repas, Cheffe à domicile, traiteur sur mesure"
      />
      <nav className="fixed w100 b0 l0 r0 flex jc-center wrap p">
        <a href={data.markdownRemark.frontmatter.url} className="center">
          Réserver sur ZENCHEF
        </a>
      </nav>
      <main>
        <article>
          <header>
            <h3>{data.markdownRemark.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </header>
          <div className="flex wrap">
            {posts.map(({ node: post }) => {
              return (
                <div key={post.id} className="flex50 p border">
                  <a
                    href={data.markdownRemark.frontmatter.url}
                    className="center"
                  >
                    <div>
                      <h2>{post.frontmatter.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </article>
      </main>
    </Layout>
  );
};
export default Livraison;

export const livraisonQuery = graphql`
  query Livraison {
    markdownRemark(frontmatter: { templateKey: { eq: "livraison" } }) {
      html
      frontmatter {
        templateKey
        title
        url
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "livraisonmenu" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
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
            date
            title
          }
        }
      }
    }
  }
`;
