import React from 'react';
import PropTypes from 'prop-types';
import SingleBlog from './SingleBlog';

function BlogList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <SingleBlog key={post.id} post={post} />
      ))}
    </>
  );
}

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.array,
};
