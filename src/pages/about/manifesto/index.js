import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../../components/layout';

const Manifesto = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout title={data.markdownRemark.frontmatter.title} location="about">
      <article>
        <div
          className="body-mb"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  );
};

export default Manifesto;

export const manifestoQuery = graphql`
  query manifesto {
    markdownRemark(frontmatter: { title: { eq: "Manifesto" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
