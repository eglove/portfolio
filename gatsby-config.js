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
    siteUrl: `https://www.example.com`,
    description: `Ethan Glover's developer portfolio.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EthanG`,
        short_name: `EthanG`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#066FC3`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`,
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
  ],
};
