import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Aperitifs = () => (
  <StaticQuery
    query={graphql`
      query Aperi {
        markdownRemark(frontmatter: { templateKey: { eq: "aperitifs" } }) {
          html
          frontmatter {
            templateKey
            title
            subtitle
            menu {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 80) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              text
              title
            }
          }
        }
      }
    `}
    render={data => (
      <section id={data.markdownRemark.frontmatter.templateKey}>
        <header>
          <h3>{data.markdownRemark.frontmatter.title}</h3>
          <h4>{data.markdownRemark.frontmatter.subtitle}</h4>
        </header>
        <div className="content">
          {data.markdownRemark.frontmatter.menu &&
            data.markdownRemark.frontmatter.menu.map(item => (
              <article key={item.image.id}>
                {item.image.childImageSharp.fluid && (
                  <Img
                    fluid={item.image.childImageSharp.fluid}
                    style={{ maxWidth: '600px' }}
                    alt="flore"
                  />
                )}
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
              </article>
            ))}
        </div>
      </section>
    )}
  />
);

export default Aperitifs;
