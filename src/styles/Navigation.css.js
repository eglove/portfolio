import styled from 'styled-components';

export const NavigationContainerStyles = styled.nav`
  background-color: var(--headerColor);

  ul {
    display: flex;
  }

  li {
    border: 1px solid var(--headerColor);
  }

  li,
  a {
    padding: 1rem;
    color: var(--headerFontColor);
    text-decoration: none;
  }

  li:hover,
  a:hover,
  li:focus,
  a:focus {
    background-color: var(--headerFontColor);
    color: var(--headerColor);
  }
`;
