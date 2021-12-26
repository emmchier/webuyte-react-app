import styled, { css } from "styled-components";

const weightStyles = (theme, weight) =>
  ({
    regular: css`
      font-weight: ${theme.font.weight.regular};
    `,
    medium: css`
      font-weight: ${theme.font.weight.medium};
    `,
    semiBold: css`
      font-weight: ${theme.font.weight.semiBold};
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

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.medium.size};
  line-height: ${({ theme }) => theme.font.small.lineHeight};
  ${({ theme, weight }) => weightStyles(theme, weight)};
  ${({ cap }) => capStyles(cap)};
  font-style: normal;
  padding: 0;
  margin: 0;
`;
