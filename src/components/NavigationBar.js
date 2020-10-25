import React from 'react';
import { Link } from 'gatsby';
import { NavigationContainerStyles } from '../styles/Navigation.css';

function NavigationBar() {
  return (
    <NavigationContainerStyles>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <li>
        <a
          href="https://www.linkedin.com/in/ethan-glover/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://github.com/eglove" rel="noreferrer" target="_blank">
          GitHub
        </a>
      </li>
    </NavigationContainerStyles>
  );
}

export default NavigationBar;
