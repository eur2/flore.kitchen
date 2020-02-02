import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';

const About = () => {
  //const { markdownRemark: post } = data;
  return <Layout title="About" location="about"></Layout>;
};

export default About;

export const aboutQuery = graphql`
  query about {
    markdownRemark(frontmatter: { title: { eq: "Manifesto" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
