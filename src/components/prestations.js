import React from 'react';
import Img from 'gatsby-image';

const Prestations = ({ posts, children }) => (
  <div id="prestations">
    <section>
      <header>
        <h3>Prestations</h3>
        {posts.map(({ node: post }) => {
          return (
            <h4 key={post.id}>
              <a href={`#${post.frontmatter.slug}`}>{post.frontmatter.title}</a>
            </h4>
          );
        })}
      </header>
    </section>
    {posts.map(({ node: post }) => {
      return (
        <article key={post.id} id={post.frontmatter.slug}>
          <header>
            <h3>{post.frontmatter.title}</h3>
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
      );
    })}
  </div>
);
export default Prestations;
