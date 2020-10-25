import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ProjectList from '../components/Portfolio/ProjectList';
import Seo from '../components/SEO';

function Portfolio({
  data: {
    projectQuery: { projects },
  },
}) {
  return (
    <>
      <Seo title="Portfolio" description="Projects built by Ethan Glover" />
      <ProjectList projects={projects} />
    </>
  );
}

export default Portfolio;

export const query = graphql`
  query ProjectsQuery {
    projectQuery: allSanityProject(sort: { order: ASC, fields: _updatedAt }) {
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
