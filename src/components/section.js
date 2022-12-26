import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Section = ({ posts, id, children }) => (
  <>
    {posts
      .filter((post) => post.node.frontmatter.templateKey === `${id}`)
      .map(({ node: post }) => (
        <section key={`k${id}`} id={id}>
          <header>
            <h3>{post.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </header>
          {post.frontmatter.image && (
            <div>
              <GatsbyImage
                image={post.frontmatter.image.childImageSharp.gatsbyImageData}
                alt="flore kitchen"
              />
            </div>
          )}
          {children}
        </section>
      ))}
  </>
);
export default Section;
