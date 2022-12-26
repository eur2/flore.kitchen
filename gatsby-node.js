// const path = require(`path`)
// const { createFilePath } = require('gatsby-source-filesystem')
// const webpack = require ('webpack');

// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const menuPost = path.resolve(`./src/templates/post.js`)
// 	const blog = graphql(
// 	  `
// 		{
// 		  allMarkdownRemark(
// 			filter: { frontmatter: { templateKey: { eq: "menu" } } }
// 			sort: { fields: [frontmatter___title], order: ASC }
// 			limit: 1000
// 		  ) {
// 			edges {
// 			  node {
// 				fields {
// 				  slug
// 				}
// 				frontmatter {
// 				  title
// 				  templateKey
// 				}
// 			  }
// 			}
// 		  }
// 		}
// 	  `
// 	).then(result => {
// 	  if (result.errors) {
// 		Promise.reject(result.errors);
// 	}
  
// 	  // Create blog posts pages.
// 	  const posts = result.data.allMarkdownRemark.edges
  
// 	  posts.forEach((post, index) => {
// 		const previous = index === posts.length - 1 ? null : posts[index + 1].node
// 		const next = index === 0 ? null : posts[index - 1].node
  
// 		createPage({
// 		  path: post.node.fields.slug,
// 		  component: menuPost,
// 		  context: {
// 			slug: post.node.fields.slug,
// 			previous,
// 			next,
// 		  },
// 		})
// 	  })
// 	})

// 	return Promise.all([blog]);
//  }

//  exports.onCreateWebpackConfig = ({ stage, actions }) => {
// 	if (![`develop`, `build-javascript`].includes(stage)) {
// 	  return Promise.resolve();
// 	}
// 	actions.setWebpackConfig({
// 	  plugins: [
// 		new webpack.IgnorePlugin({
// 		  resourceRegExp: /^netlify-identity-widget$/,
// 		}),
// 	  ],
// 	});
//   };