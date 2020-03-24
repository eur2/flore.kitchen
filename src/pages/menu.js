import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Menu = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      {posts.map(({ node: post }) => {
        return (
          <article key={post.id}>
                  <Link to={post.fields.slug}><h2>{post.frontmatter.title}</h2></Link>
          </article>
        );
      })}
    </Layout>
  );
};
export default Menu;

export const menuQuery = graphql`
  query Menu2019 {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "menu" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
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
          }
        }
      }
    }
  }
`;
