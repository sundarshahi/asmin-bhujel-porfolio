require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Asmin Bhujel`,
    description: `Security Analyst at IBM`,
    author: `Sundar Shahi Thakuri <shahithakurisundar@gmail.com>`,
    siteUrl: `https://github.com/sundarshahi`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          Atoms: './components/atoms',
          Molecules: './components/molecules',
          Organisms: './components/organisms',
          Templates: './components/templates',
          Assets: './assets',
          Context: './context',
          Data: './data',
          Helpers: './helpers',
          Hooks: './hooks',
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static', // <- will become ./public/static
          },
        },
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn:
          'https://0029c0e1980d488eb702e79b1303a83e@o383121.ingest.sentry.io/5212982',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#78C8D7`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `efztqedtqorh`,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `gfc7wqc`,
          families: ['brandon-grotesque'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asmin Bhujel Portfolio`,
        short_name: `Asminbhujel.me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e94e1b`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-dev',
      options: {
        username: 'dabit3',
      },
    },
  ],
};
