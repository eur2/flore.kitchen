import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import Contact from '../components/contact';

const Livraison = ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout
      title="Flore"
      subtitle="Livraison de repas, Cheffe à domicile, traiteur sur mesure"
      description="Livraison de repas, Cheffe à domicile, traiteur sur mesure"
    >
      <Header
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        logo={post.frontmatter.logo.childImageSharp.fluid}
        tel={post.frontmatter.tel}
        email={post.frontmatter.email}
        instagram={post.frontmatter.instagram}
        facebook={post.frontmatter.facebook}
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
            <h4>
              Menus créatifs, sains et gourmands qui changent toutes les
              semaines.
            </h4>
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
          <header>
            <h4>
              Produits bio, issus de circuits courts via Le Zingam ou Biocoop.
              Nous nous adaptons à vos régimes spéciaux ou allergies.
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
        </article>
      </main>
      <Contact
        tel={post.frontmatter.tel}
        email={post.frontmatter.email}
        address={post.frontmatter.address}
      />
    </Layout>
  );
};
export default Livraison;

export const livraisonQuery = graphql`
  query Livraison {
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
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "livraison" } } }
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
