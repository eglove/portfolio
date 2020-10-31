import styled from 'styled-components';

export const IndexContainerStyles = styled.div`
  margin: auto;
  text-align: center;
`;

export const IconStyles = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 1rem;
  gap: 1rem;

  img + img {
    margin-left: 1rem;
  }
`;
