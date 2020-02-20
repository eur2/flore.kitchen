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
            image {
              id
              childImageSharp {
                fluid(maxWidth: 1024, quality: 70) {
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
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </header>
        {data.markdownRemark.frontmatter.image.childImageSharp.fluid && (
          <div className="">
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
