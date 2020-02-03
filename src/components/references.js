import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const References = ({ children }) => (
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
        <h3>{data.markdownRemark.frontmatter.title}</h3>
        <h4>{data.markdownRemark.frontmatter.subtitle}</h4>
        {data.markdownRemark.frontmatter.article &&
          data.markdownRemark.frontmatter.article.map(item =>
            item.text ? <p>{item.text}</p> : null
          )}
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        {data.markdownRemark.frontmatter.image.childImageSharp.fluid && (
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
            style={{ maxWidth: '1200px' }}
            alt="flore"
          />
        )}
      </section>
    )}
  />
);

export default References;
