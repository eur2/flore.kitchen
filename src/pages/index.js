import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Section from '../components/section';
import Instagram from '../components/instagram';
import Prestations from '../components/prestations';
import References from '../components/references';

const INSTAGRAM_ID = '4536541103';
const THUMBNAIL_WIDTH = 640;
const PHOTO_COUNT = 6;
const Index = ({ data }) => {
  // const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Section posts={posts} id="intro">
        <Instagram
          userId={INSTAGRAM_ID}
          thumbnailWidth={THUMBNAIL_WIDTH}
          photoCount={PHOTO_COUNT}
        />
      </Section>
      <Prestations posts={posts} id="post" />
      <Section posts={posts} id="biographie" />
      <References posts={posts} id="references" />
    </Layout>
  );
};

export default Index;

export const index = graphql`
  query posts {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___slug] }) {
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
            image {
              id
              childImageSharp {
                fluid(maxWidth: 1024, quality: 70) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            logos {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 100, quality: 70) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            menu {
              title
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 600, quality: 70) {
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

// filter: { frontmatter: { templateKey: { eq: "post" } } }

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
