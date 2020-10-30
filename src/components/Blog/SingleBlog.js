import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PortableText from '../portableText';
import {
  BlogContentStyles,
  BlogMetadataStyles,
} from '../../styles/BlogStyles.css';
import { ItemContainerStyles } from '../../styles/GlobalStyles.css';

function SingleBlog({ post }) {
  console.log(post);
  const {
    _rawBody,
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
        <PortableText blocks={_rawBody} />
      </BlogContentStyles>
    </ItemContainerStyles>
  );
}

export default SingleBlog;

SingleBlog.propTypes = {
  post: PropTypes.object,
};
