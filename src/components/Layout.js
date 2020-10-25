import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
