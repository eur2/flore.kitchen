import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Post20 = ({ data, pageContext }) => {
  // const { data, pageContext } = props;
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout title={post.frontmatter.title} location="notes">
      <article>
        <header className="flex jc-sb mb">
          {previous ? (
            <Link className="b0" to={previous.fields.slug} rel="prev">
              {/*&#9664;*/}
              {'<'}
            </Link>
          ) : (
            <span className="hidden">{'<'}</span>
          )}
          <h1 className="w100 indent3">{post.frontmatter.title}</h1>
          {next ? (
            <Link className="b0" to={next.fields.slug} rel="next">
              {/*&#9654;*/}
              {'>'}
            </Link>
          ) : (
            <span className="hidden">{'>'}</span>
          )}
        </header>
        <div
          className="indent"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  );
};

export default Post20;

export const post20Query = graphql`
  query Post20BySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        templateKey
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
