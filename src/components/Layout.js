import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { GlobalStyles } from '../styles/GlobalStyles.css';

const NavigationBar = loadable(() => import('./NavigationBar'));

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
