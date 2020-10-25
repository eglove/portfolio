import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import {
  BlogContentStyles,
  BlogMetadataStyles,
} from '../../styles/BlogStyles.css';
import { ItemContainerStyles } from '../../styles/GlobalStyles.css';

function SingleBlog({ post }) {
  const {
    author,
    body,
    mainImageAlt,
    modifiedAt,
    publishedAt,
    slug,
    title,
  } = post;
  const published = new Date(publishedAt).toDateString();
  const modified = new Date(modifiedAt).toDateString();
  // const body = post.body[0].children[0].text;
  const mainImage = post.mainImage.asset.fluid;

  return (
    <ItemContainerStyles>
      <h1>{title}</h1>
      <BlogMetadataStyles>
        <div>{author.name}</div>
        <div>
          {published} {modified !== published ? `Modified: ${modified}` : ''}
        </div>
        <div>
          <Link to={`/blog/${slug.current}`}>Permalink</Link>
        </div>
      </BlogMetadataStyles>
      <BlogContentStyles>
        <GatsbyImage fluid={mainImage} alt={mainImageAlt} />
        {body.map((paragraph, index) => (
          <p key={index}>{paragraph.children[0].text}</p>
        ))}
      </BlogContentStyles>
    </ItemContainerStyles>
  );
}

export default SingleBlog;

SingleBlog.propTypes = {
  post: PropTypes.object,
};