import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Buffets = ({ children }) => (
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
        <h3>{data.markdownRemark.frontmatter.title}</h3>
        <h4>{data.markdownRemark.frontmatter.subtitle}</h4>
        {data.markdownRemark.frontmatter.menu &&
          data.markdownRemark.frontmatter.menu.map(item => (
            <div>
              {item.image.childImageSharp.fluid && (
                <Img
                  fluid={item.image.childImageSharp.fluid}
                  style={{ maxWidth: '600px' }}
                  alt="flore"
                />
              )}
              <h5>{item.title}</h5>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
      </section>
    )}
  />
);

export default Buffets;
