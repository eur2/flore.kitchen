import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Buffets = () => (
  <StaticQuery
    query={graphql`
      query Buffets {
        markdownRemark(frontmatter: { templateKey: { eq: "buffets" } }) {
          html
          frontmatter {
            templateKey
            title
            subtitle
            menu {
              title
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
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
    `}
    render={data => (
      <section id={data.markdownRemark.frontmatter.templateKey}>
        <header>
          <h3>{data.markdownRemark.frontmatter.title}</h3>
          <h4>{data.markdownRemark.frontmatter.subtitle}</h4>
        </header>
        <div className="content">
          {data.markdownRemark.frontmatter.menu &&
            data.markdownRemark.frontmatter.menu.map((item, index) => (
              <article key={index}>
                {item.image.childImageSharp.fluid && (
                  <Img
                    fluid={item.image.childImageSharp.fluid}
                    style={{ margin: 'auto' }}
                    alt="flore"
                  />
                )}
                <div>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.plats &&
                      item.plats.map((item, index) => (
                        <li key={index}>
                          {/* &sim; */}
                          **
                          <br />
                          {item.plat}
                        </li>
                      ))}
                  </ul>
                </div>
              </article>
            ))}
        </div>
      </section>
    )}
  />
);

export default Buffets;
