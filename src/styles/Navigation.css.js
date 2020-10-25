import styled from 'styled-components';

export const HeaderStyles = styled.nav`
  background: var(--headerColor);
  box-shadow: var(--boxShadow);

  a,
  a:visited {
    padding: 1rem;
    border: 1px solid var(--headerColor);
    color: var(--headerFontColor);
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: var(--headerFontColor);
    color: var(--headerColor);
  }

  a[aria-current='page'] {
    background-color: var(--headerFontColor);
    color: var(--headerColor);
  }
`;

export const PageLinkStyles = styled.span`
  display: inline-flex;
`;

export const ExternalLinkStyle = styled(PageLinkStyles)`
  float: right;

  @media (max-width: 768px) {
    float: none;
  }
`;
