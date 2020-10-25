import React from 'react';
import PropTypes from 'prop-types';
import SingleProject from './SingleProject';
import { ContentVisibility } from '../../styles/GlobalStyles.css';

function ProjectList({ projects }) {
  return (
    <ContentVisibility>
      {projects.map((project) => (
        <SingleProject project={project} />
      ))}
    </ContentVisibility>
  );
}

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array,
};
