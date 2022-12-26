// import React from 'react';
// import { Link, graphql } from 'gatsby';
// import Layout from '../components/layout';
// import '../styles/print.css';

// const menuPost = ({ data, pageContext }) => {
//   // const { data, pageContext } = props;
//   const post = data.markdownRemark;
//   // const { previous, next } = pageContext;
//   return (
//     <Layout title={post.frontmatter.title} location="notes">
//       <aside>
//       <button onClick={()=>{print()}}>PRINT</button>
//       <Link className="fixed t0 r0" to={"/menu"}><h2>×</h2></Link>
//       </aside>
//       <article>
//           {/* <h1>{post.frontmatter.title}</h1> */}
//         <div
//           dangerouslySetInnerHTML={{ __html: post.html }}
//         />
//       </article>
//     </Layout>
//   );
// };

// export default menuPost;

// export const postQuery = graphql`
//   query PostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         templateKey
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
