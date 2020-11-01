import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ProjectList from '../components/Portfolio/ProjectList';
import Seo from '../components/SEO';
import { PageWrapper } from '../styles/PageStyles';

function Portfolio({
  data: {
    projectQuery: { projects },
  },
}) {
  return (
    <PageWrapper>
      <Seo title="Portfolio" description="Projects built by Ethan Glover" />
      <ProjectList projects={projects} />
    </PageWrapper>
  );
}

export default Portfolio;

export const query = graphql`
  query ProjectsQuery {
    projectQuery: allSanityProject(sort: { order: DESC, fields: _updatedAt }) {
      projects: nodes {
        _rawDescription
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
