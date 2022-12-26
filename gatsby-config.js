module.exports = {
  plugins: [
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
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              quality: 80,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
              disableBgImage: true,
              wrapperStyle:'margin-top:.5em;margin-bottom:.5em;'
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Flore Kitchen',
        short_name: 'Flore Kitchen',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icon: `static/assets/logo-c.png`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
  ],
};
