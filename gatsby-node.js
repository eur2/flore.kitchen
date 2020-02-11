// const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require ('webpack');
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	fmImagesToRelative(node) // convert image paths for gatsby images
  
	if (node.internal.type === `MarkdownRemark`) {
	  const value = createFilePath({ node, getNode })
	  createNodeField({
		name: `slug`,
		node,
		value,
	  })
	}
  }

//     exports.onCreateWebpackConfig = ({ stage, actions }) => {
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

// const path = require(`path`)
// const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const post20 = path.resolve(`./src/templates/post20.js`)
// 	const postShop = path.resolve(`./src/templates/postshop.js`)
// 	const blog = graphql(
// 	  `
// 		{
// 		  allMarkdownRemark(
// 			filter: { frontmatter: { templateKey: { eq: "post20" } } }
// 			sort: { fields: [fields___slug], order: ASC }
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
// 		  component: post20,
// 		  context: {
// 			slug: post.node.fields.slug,
// 			previous,
// 			next,
// 		  },
// 		})
// 	  })
// 	})


// 	  const shop= graphql(
// 		`
// 		  {
// 			allMarkdownRemark(
// 			  filter: { frontmatter: { templateKey: { eq: "postshop" } } }
// 			  sort: { fields: [fields___slug], order: ASC }
// 			  limit: 1000
// 			) {
// 			  edges {
// 				node {
// 				  fields {
// 					slug
// 				  }
// 				  frontmatter {
// 					title
// 				  }
// 				}
// 			  }
// 			}
// 		  }
// 		`
// 	  ).then(result => {
// 		if (result.errors) {
// 		  Promise.reject(result.errors);
// 	  }
	
// 		// Create blog posts pages.
// 		const posts = result.data.allMarkdownRemark.edges
	
// 		posts.forEach((post, index) => {
// 		  const previous = index === posts.length - 1 ? null : posts[index + 1].node
// 		  const next = index === 0 ? null : posts[index - 1].node
		   
	
// 		  createPage({
// 			path: post.node.fields.slug,
// 			component: postShop,
// 			context: {
// 			  slug: post.node.fields.slug,
// 			  previous,
// 			  next,
// 			},
// 		  })
// 		})
// 	})

	
	

// 		return Promise.all([blog, shop]);
// }





/*const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							templateKey
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()));
			return Promise.reject(result.errors);
		}

		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach(edge => {
			const id = edge.node.id;
			createPage({
				path: edge.node.fields.slug,
				component: path.resolve(
					`src/templates/${String(
						edge.node.frontmatter.templateKey
					)}.js`
				),
				// additional data can be passed via context
				context: {
					id
				}
			});
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};*/