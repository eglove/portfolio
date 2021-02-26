import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';
import { PageWrapper } from '../styles/PageStyles';
import {
  courses,
  otherCourses,
} from '../components/Courses/recommendedCourses';

const CourseList = loadable(() => import('../components/Courses/CourseList'));
const Seo = loadable(() => import('../components/SEO'));

export default function CoursePage() {
  return (
    <PageWrapper>
      <Seo
        title="Recommended Courses"
        description="Personally recommended development courses."
      />
      <h1>Recommended Courses</h1>
      <p>Last Update: Feb. 25, 2021</p>
      <CourseList courses={courses} otherCourses={otherCourses} />
    </PageWrapper>
  );
}

CoursePage.propTypes = {};
