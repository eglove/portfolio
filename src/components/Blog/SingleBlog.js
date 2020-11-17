import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import loadable from '@loadable/component';
import {
  BlogContentStyles,
  BlogMetadataStyles,
} from '../../styles/BlogStyles.css';
import { ItemContainerStyles } from '../../styles/GlobalStyles.css';

const PortableText = loadable(() => import('../portableText'));

function SingleBlog({ post }) {
  const { _rawBody, author, modifiedAt, publishedAt, slug, title } = post;
  const published = new Date(publishedAt).toDateString();
  const modified = new Date(modifiedAt).toDateString();

  return (
    <ItemContainerStyles className="h-entry">
      <h1 className="p-name">{title}</h1>
      <BlogMetadataStyles>
        <div>
          <a className="p-author h-card" href="https://ethang.dev">
            {author.name}
          </a>
        </div>
        <div>
          <time className="dt-published">{published}</time>
          {modified !== published
            ? `<time className="dt-updated"> Modified: ${modified}</time>`
            : ''}
        </div>
        <div>
          <Link className="u-url" to={`/blog/${slug.current}`}>
            Permalink
          </Link>
        </div>
      </BlogMetadataStyles>
      <BlogContentStyles>
        <PortableText blocks={_rawBody} className="e-content" />
      </BlogContentStyles>
    </ItemContainerStyles>
  );
}

export default SingleBlog;

SingleBlog.propTypes = {
  post: PropTypes.object,
};
