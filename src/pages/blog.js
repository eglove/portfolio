import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogList from '../components/Blog/BlogList';

export default function BlogPage({
  data: {
    postQuery: { posts },
  },
}) {
  return <BlogList posts={posts} />;
}

export const query = graphql`
  query PostsQuery {
    postQuery: allSanityPost {
      posts: nodes {
        id
        title
        slug {
          current
        }
        author {
          name
        }
        mainImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        mainImageAlt
        publishedAt
        modifiedAt
        body {
          children {
            text
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.object,
};
