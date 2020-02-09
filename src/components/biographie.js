import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Biographie = () => (
  <StaticQuery
    query={graphql`
      query Bio {
        markdownRemark(frontmatter: { templateKey: { eq: "biographie" } }) {
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
        <div className="content">
          {data.markdownRemark.frontmatter.article &&
            data.markdownRemark.frontmatter.article.map(item =>
              item.text ? <p>{item.text}</p> : null
            )}
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        </div>
        {data.markdownRemark.frontmatter.image.childImageSharp.fluid && (
          <div className="mw">
            <Img
              fluid={
                data.markdownRemark.frontmatter.image.childImageSharp.fluid
              }
              alt="flore"
            />
          </div>
        )}
      </section>
    )}
  />
);

export default Biographie;