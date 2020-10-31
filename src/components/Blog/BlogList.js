import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { ContentVisibility } from '../../styles/GlobalStyles.css';

const SingleBlog = loadable(() => import('./SingleBlog'));

function BlogList({ posts }) {
  return (
    <ContentVisibility>
      {posts.map((post) => (
        <SingleBlog key={post.id} post={post} />
      ))}
    </ContentVisibility>
  );
}

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.array,
};
