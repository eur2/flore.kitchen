import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../../components/layout';

const Acknowledgments = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout title={data.markdownRemark.frontmatter.title} location="about">
      <article>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export default Acknowledgments;

export const acknowledgmentsQuery = graphql`
  query acknowledgments {
    markdownRemark(frontmatter: { title: { eq: "Acknowledgments" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
