import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const Index2020 = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout title="Notes 2020" location="notes">
      {posts.map(({ node: post }) => {
        return (
          <article key={post.id}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </article>
        );
      })}
    </Layout>
  );
};
export default Index2020;

export const index2020Query = graphql`
  query Index2020 {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "post20" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            date
          }
        }
      }
    }
  }
`;
