import React from 'react';
import PropTypes from 'prop-types';
import SingleProject from './SingleProject';

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <>
      {projects.map((project) => (
        <SingleProject project={project} />
      ))}
    </>
  );
}

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array,
};
