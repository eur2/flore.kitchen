import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
// import Intro from '../components/intro';
// import Biographie from '../components/biographie';
// import References from '../components/references';
import Instagram from '../components/instagram';
// import Prestations from '../components/prestations';

const Section = ({ posts, id, children }) => (
  <>
    {posts
      .filter(post => post.node.frontmatter.templateKey === `${id}`)
      .map(({ node: post }) => (
        <section key={`k${id}`} id={id}>
          <header>
            <h3>{post.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </header>
          {post.frontmatter.image && (
            <div>
              <Img
                fluid={post.frontmatter.image.childImageSharp.fluid}
                alt="flore"
              />
            </div>
          )}
          {children}
        </section>
      ))}
  </>
);

const References = ({ posts, id }) => (
  <>
    {posts
      .filter(post => post.node.frontmatter.templateKey === `${id}`)
      .map(({ node: post }) => (
        <section key={`k${id}`} id={id}>
          <header>
            <h3>{post.frontmatter.title}</h3>
          </header>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="logos p">
            {post.frontmatter.logos &&
              post.frontmatter.logos.map((item, index) => (
                <div className="logo" key={index}>
                  {item.image.childImageSharp.fluid && (
                    <Img
                      fluid={item.image.childImageSharp.fluid}
                      style={{ margin: 'auto' }}
                      alt="client"
                    />
                  )}
                </div>
              ))}
          </div>
          {post.frontmatter.image.childImageSharp.fluid && (
            <Img
              fluid={post.frontmatter.image.childImageSharp.fluid}
              alt="flore"
            />
          )}
        </section>
      ))}
  </>
);

const Prestations = ({ posts, id, children }) => (
  <div id="prestations">
    <section>
      <header>
        <h3>Prestations</h3>
        {posts
          .filter(post => post.node.frontmatter.templateKey === `${id}`)
          .map(({ node: post }) => (
            <h4 key={post.id}>
              <a href={`#${post.frontmatter.slug}`}>{post.frontmatter.title}</a>
            </h4>
          ))}
      </header>
    </section>
    {posts
      .filter(post => post.node.frontmatter.templateKey === `${id}`)
      .map(({ node: post }) => (
        <article key={post.id} id={post.frontmatter.slug}>
          <header>
            <h3 className="hyphens">{post.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </header>
          <div className="content">
            {post.frontmatter.menu &&
              post.frontmatter.menu.map((item, index) => (
                <div key={index} className="flex600 p">
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
      ))}
  </div>
);

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
