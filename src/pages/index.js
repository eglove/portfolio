import React from 'react';
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
  SiApollographql,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNextDotJs,
  SiPhp,
  SiSpring,
} from 'react-icons/all';
import { ItemContainerStyles } from '../styles/GlobalStyles.css';
import { IconStyles, IndexContainerStyles } from '../styles/IndexStyles.css';
import Seo from '../components/SEO';
import RandomLogo from '../components/RandomLogo';

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
