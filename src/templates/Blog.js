import React from 'react';
import { graphql } from 'gatsby';
import SingleBlog from '../components/Blog/SingleBlog';

// Currently the /blog page shows full blogs, if that is changed to summary or something else,
// use this file to show th full blog on it's own URL
export default function singleBlogPage({ data: { post } }) {
  return <SingleBlog post={post} />;
}

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
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
`;
