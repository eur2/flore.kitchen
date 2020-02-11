import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const References = () => (
  <StaticQuery
    query={graphql`
      query Ref {
        markdownRemark(frontmatter: { templateKey: { eq: "references" } }) {
          html
          frontmatter {
            templateKey
            title
            subtitle
            logos {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 100, quality: 80) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            image {
              id
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_noBase64
                }
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
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="content flexx wrapp mh255">
          {data.markdownRemark.frontmatter.logos &&
            data.markdownRemark.frontmatter.logos.map((item, index) => (
              <div className="logo" key={index}>
                {item.image.childImageSharp.fluid && (
                  <Img
                    fluid={item.image.childImageSharp.fluid}
                    style={{ margin: 'auto' }}
                    alt="client"
                  />
                )}
              </div>
            ))}
        </div>
        {data.markdownRemark.frontmatter.image.childImageSharp.fluid && (
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
            alt="flore"
          />
        )}
      </section>
    )}
  />
);

export default References;
