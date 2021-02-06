import React from 'react';
import PropTypes from 'prop-types';
import { CoursesGrid } from '../../styles/CoursesStyles.css';

function SingleCourse({ course }) {
  const { _id, status, logo, title, length } = course;
  return (
    <CoursesGrid>
      <div>Status</div>
      <div>Logo</div>
      <div>Name</div>
      <div>Length</div>
    </CoursesGrid>
  );
}

export default SingleCourse;

SingleCourse.propTypes = {
  course: PropTypes.object,
};
