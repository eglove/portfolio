import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';
import { PageWrapper } from '../styles/PageStyles';

const CourseList = loadable(() => import('../components/Courses/CourseList'));
const Seo = loadable(() => import('../components/SEO'));

export default function CoursePage({
  data: {
    courseQuery: { courses },
  },
}) {
  return (
    <PageWrapper>
      <Seo
        title="Recommended Courses"
        description="Personally recommended development courses."
      />
      <CourseList courses={courses} />
    </PageWrapper>
  );
}

export const query = graphql`
  query coursesQuery {
    courseQuery: allSanityCourses {
      courses: nodes {
        status
        logo {
          asset {
            fluid(maxWidth: 20) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        length
      }
    }
  }
`;

CoursePage.propTypes = {
  data: PropTypes.object,
};
