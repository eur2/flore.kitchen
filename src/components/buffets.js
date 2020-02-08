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
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
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
              <div key={item.image.id}>
                {item.image.childImageSharp.fluid && (
                  <Img
                    fluid={item.image.childImageSharp.fluid}
                    style={{ margin: 'auto' }}
                    alt="flore"
                  />
                )}
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
        </div>
      </section>
    )}
  />
);

export default Buffets;
