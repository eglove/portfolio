import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

function GitHubLogo({ ghLink, urlName }) {
  const githubLogo = useStaticQuery(graphql`
    {
      query: file(name: { eq: "github" }) {
        publicURL
        name
      }
    }
  `);
  const { publicURL, name } = githubLogo.query;

  return (
    <a
      href={ghLink}
      name={`${urlName} GitHub`}
      rel="noreferrer"
      target="_blank"
    >
      <img width="50" height="50" src={publicURL} alt={name} />
    </a>
  );
}

export default GitHubLogo;

GitHubLogo.propTypes = {
  ghLink: PropTypes.string,
  urlName: PropTypes.string,
};
