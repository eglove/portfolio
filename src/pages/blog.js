import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
import { PageWrapper } from '../styles/PageStyles';

const BlogList = loadable(() => import('../components/Blog/BlogList'));
const Seo = loadable(() => import('../components/SEO'));

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
