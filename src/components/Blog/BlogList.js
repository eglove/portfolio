import React from 'react';
import PropTypes from 'prop-types';
import SingleBlog from './SingleBlog';
import { ContentVisibility } from '../../styles/GlobalStyles.css';

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
