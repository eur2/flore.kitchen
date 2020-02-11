import React from 'react';
import Img from 'gatsby-image';

const Prestation = ({ post }) => (
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
export default Prestation;
