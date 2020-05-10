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
        <a
          href="https://bookings.zenchef.com/results?rid=354054&pid=1001"
          className="center"
        >
          Réserver sur ZENCHEF
        </a>
      </nav>
      <main>
        <article>
          <header>
            <h3>Livraison de repas</h3>
            <h3>{data.markdownRemark.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <h4>
              Menus créatifs, sains et gourmands qui changent toutes les
              semaines. Produits bio, issus de circuits courts via Le Zingam ou
              Biocoop. Nous nous adaptons à vos régimes spéciaux ou allergies.
            </h4>
            <p>
              Plats livrés froids à réchauffer vous-même au four/ micro-ondes/
              casserole
            </p>
            <p></p>
            <p>Livraison les jeudis, vendredis et samedis</p>
            <p>Commande avant 12h la veille</p>
            <p> Minimum de commande : 44€</p>
          </header>
          <div className="flex wrap">
            {posts.map(({ node: post }) => {
              return (
                <div key={post.id} className="flex50 p border">
                  <a
                    href="https://bookings.zenchef.com/results?rid=354054&pid=1001"
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
