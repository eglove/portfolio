import styled from 'styled-components';

export const ProjectContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  p {
    margin-top: 1rem;
  }
`;

export const IconStyles = styled.div`
  margin-bottom: 1rem;

  a {
    color: var(--headerColor);
  }

  a + a {
    margin-left: 1rem;
  }

  a:visited {
    color: var(--headerColor);
  }
`;
