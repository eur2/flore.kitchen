import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Intro = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Intro {
        markdownRemark(frontmatter: { templateKey: { eq: "intro" } }) {
          html
          frontmatter {
            templateKey
            title
            subtitle
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
        {children}
      </section>
    )}
  />
);

export default Intro;
