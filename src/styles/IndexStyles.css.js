import styled from 'styled-components';

export const IndexContainerStyles = styled.div`
  margin: auto;
  text-align: center;
`;

export const IconStyles = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  svg {
    width: 50px;
    height: 50px;
    color: var(--fontColor);
  }

  svg + svg {
    margin-left: 1rem;
  }
`;
