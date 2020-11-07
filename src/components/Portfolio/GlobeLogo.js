import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { TapTarget } from '../../styles/GlobalStyles.css';

function GitHubLogo({ liveLink, urlName }) {
  const globeLogo = useStaticQuery(graphql`
    {
      query: file(name: { eq: "globe" }) {
        publicURL
        name
      }
    }
  `);
  const { publicURL, name } = globeLogo.query;

  return (
    <TapTarget
      href={liveLink}
      name={`${urlName} GitHub`}
      rel="noreferrer"
      target="_blank"
    >
      <img width="50" height="50" src={publicURL} alt={name} />
    </TapTarget>
  );
}

export default GitHubLogo;

GitHubLogo.propTypes = {
  liveLink: PropTypes.string,
  urlName: PropTypes.string,
};
