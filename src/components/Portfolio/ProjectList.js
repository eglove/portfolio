import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { ContentVisibility } from '../../styles/GlobalStyles.css';

const SingleProject = loadable(() => import('./SingleProject'));

function ProjectList({ projects }) {
  return (
    <ContentVisibility>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </ContentVisibility>
  );
}

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array,
};
