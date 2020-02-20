import React from 'react';
import Img from 'gatsby-image';

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
export default Section;
