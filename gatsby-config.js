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
    title: `EGlove`,
    siteUrl: `https://www.example.com`,
    description: `Portfolio for Full Stack Developer Ethan Glover`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mok7xtvg',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
