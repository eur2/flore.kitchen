import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const References = ({ posts, id }) => (
  <>
    {posts
      .filter((post) => post.node.frontmatter.templateKey === `${id}`)
      .map(({ node: post }) => (
        <section key={`k${id}`} id={id}>
          <header>
            <h3>{post.frontmatter.title}</h3>
          </header>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="flex ai-center jc-center wrap p">
            {post.frontmatter.logos &&
              post.frontmatter.logos.map((item, index) => (
                <div className="logo flex100" key={index}>
                  {item.image && (
                    <GatsbyImage
                      image={item.image.childImageSharp.gatsbyImageData}
                      alt="flore kitchen client"
                      style={{ margin: 'auto' }}
                    />
                  )}
                </div>
              ))}
          </div>
          {post.frontmatter.image && (
            <GatsbyImage
              image={post.frontmatter.image.childImageSharp.gatsbyImageData}
              alt="flore kitchen"
            />
          )}
        </section>
      ))}
  </>
);
export default References;
