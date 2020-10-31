import React from 'react';
import PropTypes from 'prop-types';

function SingleLogo({ image }) {
  return (
    <img alt={image.name} src={`${image.publicURL}`} width="100" height="100" />
  );
}

export default SingleLogo;

SingleLogo.propTypes = {
  image: PropTypes.object,
};
