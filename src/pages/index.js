import React from 'react';
import loadable from '@loadable/component';
import { ItemContainerStyles } from '../styles/GlobalStyles.css';
import { IconStyles, IndexContainerStyles } from '../styles/IndexStyles.css';

const RandomLogo = loadable(() =>
  import('../components/HomePageLogos/RandomLogo')
);
const Seo = loadable(() => import('../components/SEO'));

export default function HomePage() {
  return (
    <ItemContainerStyles>
      <Seo title="Home" description="Home page for Ethan Glover" />
      <IndexContainerStyles>
        <h1>Hi! I'm Ethan Glover.</h1>
        <h2>I'm a developer.</h2>
        <h3>What kind of developer?</h3>
        <p>Well.. I've worked with these technologies...</p>
        <IconStyles>
          <RandomLogo />
        </IconStyles>
      </IndexContainerStyles>
    </ItemContainerStyles>
  );
}
