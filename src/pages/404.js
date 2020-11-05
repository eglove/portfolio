import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/SEO';
import { ItemContainerStyles } from '../styles/GlobalStyles.css';
import { PageWrapper } from '../styles/PageStyles';

export default function FourOhFourPage() {
  return (
    <PageWrapper>
      <ItemContainerStyles>
        <Seo title="404" description="Page not found. :(" />
        <h1>404!</h1>
        <p>
          I don't know how you got here. I suggest going back to the{' '}
          <Link to="/">homepage</Link>.
        </p>
      </ItemContainerStyles>
    </PageWrapper>
  );
}
