/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `EthanG`,
    siteUrl: `https://ethang.dev/`,
    description: `Ethan Glover's developer portfolio.`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-netlify-headers',
      options: {
        allPageHeaders: ['Keep-Alive: timeout=5, max=1000'],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        debug: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ethang.dev/',
        sitemap: 'https://ethang.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mok7xtvg',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
        analyzerMode: 'server',
        analyzerPort: '3001',
        defaultSizes: 'gzip',
      },
    },
  ],
};
