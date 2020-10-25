import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ProjectList from '../components/Portfolio/ProjectList';

function Portfolio({
  data: {
    projectQuery: { projects },
  },
}) {
  return <ProjectList projects={projects} />;
}

export default Portfolio;

export const query = graphql`
  query ProjectsQuery {
    projectQuery: allSanityProject {
      projects: nodes {
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
  }
`;

Portfolio.propTypes = {
  data: PropTypes.object,
};
