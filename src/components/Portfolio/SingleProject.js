import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { FaGithub, FaGlobeAmericas } from 'react-icons/all';
import { ItemContainerStyles } from '../../styles/GlobalStyles.css';
import {
  IconStyles,
  ProjectContainerStyles,
} from '../../styles/PortfolioStyles.css';
import PortableText from '../portableText';

function SingleProject({ project }) {
  const { _rawDescription, ghLink, imageAlt, liveLink, name, slug } = project;
  const image = project.image.asset.fluid;
  return (
    <ItemContainerStyles>
      <ProjectContainerStyles>
        <div>
          <h1>{name}</h1>
          <IconStyles>
            {ghLink ? (
              <a
                href={ghLink}
                name={`${name} GitHub`}
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            ) : (
              ''
            )}
            {liveLink ? (
              <a
                href={liveLink}
                name={`${name} Live`}
                rel="noreferrer"
                target="_blank"
              >
                <FaGlobeAmericas />
              </a>
            ) : (
              ''
            )}
          </IconStyles>
          <Link to={`/portfolio/${slug.current}`}>Permalink</Link>
          <PortableText blocks={_rawDescription} />
        </div>
        <div>
          <GatsbyImage fluid={image} alt={imageAlt} />
        </div>
      </ProjectContainerStyles>
    </ItemContainerStyles>
  );
}

export default SingleProject;

SingleProject.propTypes = {
  project: PropTypes.object,
};
