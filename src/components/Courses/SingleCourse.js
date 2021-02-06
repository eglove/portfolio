import React from 'react';
import PropTypes from 'prop-types';
import { CoursesGrid } from '../../styles/CoursesStyles.css';

function SingleCourse({ course }) {
  const { status, logo, title, url, length } = course;
  return (
    <>
      <CoursesGrid>
        <div>{status === 'complete' ? `✅` : `⬜`}</div>
        <div>{logo}</div>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        <div>{length}</div>
      </CoursesGrid>
      <hr />
    </>
  );
}

export default SingleCourse;

SingleCourse.propTypes = {
  course: PropTypes.object,
};
