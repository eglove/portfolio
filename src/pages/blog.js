import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogList from '../components/Blog/BlogList';
import Seo from '../components/SEO';
import { PageWrapper } from '../styles/PageStyles';

export default function BlogPage({
  data: {
    postQuery: { posts },
  },
}) {
  return (
    <PageWrapper>
      <Seo title="Blog" description="Ethan Glover blog." />
      <BlogList posts={posts} />
    </PageWrapper>
  );
}

export const query = graphql`
  query PostsQuery {
    postQuery: allSanityPost(sort: { order: DESC, fields: _updatedAt }) {
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
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.object,
};
