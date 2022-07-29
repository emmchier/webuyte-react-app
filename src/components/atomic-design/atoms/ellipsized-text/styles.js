import styled from 'styled-components';

export const Content = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    max-width: ${({ width }) => `${width}px`};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
