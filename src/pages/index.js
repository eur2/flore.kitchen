import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Biographie from '../components/biographie';
import References from '../components/references';
import Instagram from '../components/instagram';
import Prestations from '../components/prestations';

const INSTAGRAM_ID = '4536541103';
const THUMBNAIL_WIDTH = 640;
const PHOTO_COUNT = 6;

const Index = ({ data }) => {
  // const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Intro>
        <Instagram
          userId={INSTAGRAM_ID}
          thumbnailWidth={THUMBNAIL_WIDTH}
          photoCount={PHOTO_COUNT}
        />
      </Intro>
      <Prestations posts={posts} />
      <Biographie />
      <References />
    </Layout>
  );
};

export default Index;

export const index = graphql`
  query posts {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "post" } } }
      sort: { order: ASC, fields: [frontmatter___slug] }
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
            slug
            menu {
              title
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              plats {
                plat
              }
            }
          }
        }
      }
    }
  }
`;

{
  /* {posts.map(({ node: post }) => {
          return (
            <Prestation post=
            <article key={post.id} id={post.frontmatter.slug}>
              <header>
                <h3>{post.frontmatter.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </header>
              <div className="content">
                {post.frontmatter.menu &&
                  post.frontmatter.menu.map((item, index) => (
                    <div key={index}>
                      {item.image.childImageSharp.fluid && (
                        <Img
                          fluid={item.image.childImageSharp.fluid}
                          style={{ margin: 'auto' }}
                          alt="flore"
                        />
                      )}
                      <div>
                        <h4>{item.title}</h4>
                        <ul>
                          {item.plats &&
                            item.plats.map((item, index) => (
                              <li key={index}>
                                **
                                <br />
                                {item.plat}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </article>
          );
        })} */
}

{
  /* <section id="prestations">
        <header>
          <h3>Prestations</h3>
          {posts.map(({ node: post }) => {
            return (
              <h4 key={post.id}>
                <a href={`#${post.frontmatter.slug}`}>
                  {post.frontmatter.title}
                </a>
              </h4>
            );
          })}
        </header>

        {posts.map(({ node: post }) => {
          return <Prestation post={post} />;
        })}
      </section> */
}
