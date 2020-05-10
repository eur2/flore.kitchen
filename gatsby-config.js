module.exports = {
  // pathPrefix: `/`,
  // siteMetadata: {
  //   title: ``,
  //   description: ``,
  // },  
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 1,
        },
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              quality: 80,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
              disableBgImage: true,
              wrapperStyle:'margin-top:.5em;margin-bottom:.5em;',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Flore',
        short_name: 'Flore',
        start_url: '/',
        display: 'standalone',
        icon: `static/logo-c.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // 'gatsby-plugin-netlify',
    'gatsby-plugin-preact',
  ],
};
