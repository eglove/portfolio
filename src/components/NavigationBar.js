import React from 'react';
import { Link } from 'gatsby';
import { NavigationContainerStyles } from '../styles/Navigation.css';

function NavigationBar() {
  return (
    <NavigationContainerStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
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
      </ul>
    </NavigationContainerStyles>
  );
}

export default NavigationBar;
