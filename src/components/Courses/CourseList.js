import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { ContentVisibility } from '../../styles/GlobalStyles.css';

const SingleCourse = loadable(() => import('./SingleCourse'));

function CourseList({ courses, otherCourses }) {
  return (
    <ContentVisibility>
      {courses.map((course) => (
        <SingleCourse key={course.id} course={course} />
      ))}
      <h2>Courses I'm Looking At</h2>
      {otherCourses.map((course) => (
        <SingleCourse key={course.id} course={course} />
      ))}
    </ContentVisibility>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array,
  otherCourses: PropTypes.array,
};

export default CourseList;
