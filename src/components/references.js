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
            article {
              text
            }
            logo {
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
                fluid(maxWidth: 1200, quality: 80) {
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
        <div className="content">
          {data.markdownRemark.frontmatter.article &&
            data.markdownRemark.frontmatter.article.map((item, index) =>
              item.text ? (
                <p key={index} className="flex33 center italic">
                  {item.text}
                </p>
              ) : null
            )}
        </div>
        <div className="content flexx wrapp mh255">
          {data.markdownRemark.frontmatter.logo &&
            data.markdownRemark.frontmatter.logo.map((item, index) => (
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
        {/* {data.markdownRemark.frontmatter.image.childImageSharp.fluid && (
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
            style={{ maxWidth: '1200px' }}
            alt="flore"
          />
        )} */}
      </section>
    )}
  />
);

export default References;
