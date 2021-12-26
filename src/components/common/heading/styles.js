import styled, { css } from "styled-components";

const weightStyles = (theme, weight) =>
  ({
    regular: css`
      font-weight: ${theme.font.weight.regular};
    `,
    medium: css`
      font-weight: ${theme.font.weight.medium};
    `,
    bold: css`
      font-weight: ${theme.font.weight.bold};
    `,
  }[weight]);

const capStyles = (cap) =>
  ({
    default: css`
      text-transform: none;
    `,
    upper: css`
      text-transform: uppercase;
    `,
    lower: css`
      text-transform: lowercase;
    `,
    cap: css`
      text-transform: capitalize;
    `,
  }[cap]);

export const Span = styled.span`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    padding: 0;
    margin: 0;
    ${({ theme, weight }) => weightStyles(theme, weight)};
    ${({ cap }) => capStyles(cap)};
  }
`;

export const Title1 = styled.h1`
  font-size: ${({ theme }) => theme.font.largeXX.size};
  line-height: ${({ theme }) => theme.font.largeXX.lineHeight};
`;

export const Title2 = styled.h2`
  font-size: ${({ theme }) => theme.font.largeX.size};
  line-height: ${({ theme }) => theme.font.largeX.lineHeight};
`;

export const Title3 = styled.h3`
  font-size: ${({ theme }) => theme.font.large.size};
  line-height: ${({ theme }) => theme.font.large.lineHeight};
`;

export const Title4 = styled.h4`
  font-size: ${({ theme }) => theme.font.medium.size};
  line-height: ${({ theme }) => theme.font.medium.lineHeight};
`;

export const Title5 = styled.h5`
  font-size: ${({ theme }) => theme.font.small.size};
  line-height: ${({ theme }) => theme.font.small.lineHeight};
`;

export const Title6 = styled.h6`
  font-size: ${({ theme }) => theme.font.smallX.size};
  line-height: ${({ theme }) => theme.font.smallX.lineHeight};
`;
