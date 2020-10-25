import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SingleProject from '../components/Portfolio/SingleProject';

// Currently the /portfolio page shows all information on projects
// if that is changed to summary or something else, use this file to show the full
// project on it's own URL
export default function Project({ data: { project } }) {
  console.clear();
  console.log(project);
  return <SingleProject project={project} />;
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      description {
        children {
          text
        }
      }
      ghLink
      id
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageAlt
      liveLink
      name
      slug {
        current
      }
    }
  }
`;

Project.propTypes = {
  data: PropTypes.object,
};
