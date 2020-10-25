import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import { GlobalStyles } from '../styles/GlobalStyles.css';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <NavigationBar />
      {children}
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
