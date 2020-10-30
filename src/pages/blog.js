import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogList from '../components/Blog/BlogList';
import Seo from '../components/SEO';

export default function BlogPage({
  data: {
    postQuery: { posts },
  },
}) {
  return (
    <>
      <Seo title="Blog" description="Ethan Glover blog." />
      <BlogList posts={posts} />
    </>
  );
}

export const query = graphql`
  query PostsQuery {
    postQuery: allSanityPost(sort: { order: ASC, fields: modifiedAt }) {
      posts: nodes {
        _rawBody
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
