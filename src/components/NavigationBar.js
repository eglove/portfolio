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
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
      </PageLinkStyles>
      <ExternalLinkStyle>
        <a
          href="https://www.linkedin.com/in/ethan-glover/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/eglove" rel="noreferrer" target="_blank">
          GitHub
        </a>
      </ExternalLinkStyle>
    </HeaderStyles>
  );
}

export default NavigationBar;
