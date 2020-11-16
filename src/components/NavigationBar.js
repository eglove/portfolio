import React from 'react';
import { Link } from 'gatsby';
import {
  ExternalLinkStyle,
  HeaderStyles,
  PageLinkStyles,
} from '../styles/Navigation.css';

function NavigationBar() {
  return (
    <HeaderStyles>
      <PageLinkStyles>
        <Link to="/" rel="me">
          Home
        </Link>
        <Link to="/portfolio" rel="me">
          Portfolio
        </Link>
        <Link to="/blog" rel="me">
          Blog
        </Link>
      </PageLinkStyles>
      <ExternalLinkStyle>
        <a href="https://www.linkedin.com/in/ethan-glover/" rel="me">
          LinkedIn
        </a>
        <a href="https://github.com/eglove" rel="me">
          GitHub
        </a>
      </ExternalLinkStyle>
    </HeaderStyles>
  );
}

export default NavigationBar;
