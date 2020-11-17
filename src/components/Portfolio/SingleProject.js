import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import loadable from '@loadable/component';
import { ItemContainerStyles } from '../../styles/GlobalStyles.css';
import {
  IconStyles,
  ProjectContainerStyles,
} from '../../styles/PortfolioStyles.css';

const PortableText = loadable(() => import('../portableText'));
const GitHubLogo = loadable(() => import('./GitHubLogo'));
const GlobeLogo = loadable(() => import('./GlobeLogo'));

function SingleProject({ project }) {
  const { _rawDescription, ghLink, imageAlt, liveLink, name, slug } = project;
  const image = project.image.asset.fluid;

  return (
    <ItemContainerStyles className="h-entry">
      <ProjectContainerStyles>
        <div>
          <h1 className="p-name">{name}</h1>
          <IconStyles>
            {ghLink ? (
              <GitHubLogo ghLink={ghLink} urlName={`${name} GitHub`} />
            ) : (
              ''
            )}
            {liveLink ? (
              <GlobeLogo liveLink={liveLink} urlName={`${name} Live`} />
            ) : (
              ''
            )}
          </IconStyles>
          <Link className="u-url" to={`/portfolio/${slug.current}`}>
            Permalink
          </Link>
          <PortableText blocks={_rawDescription} className="e-content" />
        </div>
        <div>
          <GatsbyImage fadeIn={false} fluid={image} alt={imageAlt} />
        </div>
      </ProjectContainerStyles>
    </ItemContainerStyles>
  );
}

export default SingleProject;

SingleProject.propTypes = {
  project: PropTypes.object,
};
