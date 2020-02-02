import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';

const Index2019 = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout title="Notes 2019" location="notes">
      {posts.map(({ node: post }) => {
        return (
          <article key={post.id}>
            <div>
              {post.frontmatter.url ? (
                <div>
                  <h2>{post.frontmatter.title}</h2>
                  <p className="mb">
                    {post.frontmatter.en}
                    <span>
                      {' '}
                      See{' '}
                      <a
                        href={post.frontmatter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      .
                    </span>
                  </p>
                </div>
              ) : (
                <div>
                  <h2>{post.frontmatter.title}</h2>
                  <p className="mb">{post.frontmatter.en}</p>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </Layout>
  );
};
export default Index2019;

export const index2019Query = graphql`
  query Index2019 {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "post" } } }
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
            en
            url
          }
        }
      }
    }
  }
`;
