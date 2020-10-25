import styled from 'styled-components';

export const BlogContainerStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;

export const BlogMetadataStyles = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const BlogContentStyles = styled.div`
  p {
    margin-top: 1rem;
  }

  .gatsby-image-wrapper {
    width: 50%;
    margin: 1rem;
    float: right;
  }
`;
