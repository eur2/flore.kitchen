import React from 'react';
import Img from 'gatsby-image';

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
export default References;
