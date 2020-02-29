import React from 'react';
import Img from 'gatsby-image';

const Prestations = ({ posts, id }) => (
  <div id="prestations">
    <section>
      <header>
        <h3>Prestations</h3>
        {posts
          .filter(post => post.node.frontmatter.templateKey === `${id}`)
          .map(({ node: post }) => (
            <h4 key={post.id}>
              <a href={`#${post.frontmatter.slug.slice(2, 25)}`}>
                {post.frontmatter.title}
              </a>
            </h4>
          ))}
      </header>
    </section>
    {posts
      .filter(post => post.node.frontmatter.templateKey === `${id}`)
      .map(({ node: post }) => (
        <article key={post.id} id={post.frontmatter.slug.slice(2, 25)}>
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
                  {item.credit && <p className="credit">{item.credit}</p>}
                  <div>
                    <h4>{item.title}</h4>
                    <ul>
                      {item.plats &&
                        item.plats.map((item, index) => (
                          <li key={index}>
                            **
                            <br />
                            {item.plat}
                            <br />
                            <br />
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
export default Prestations;
