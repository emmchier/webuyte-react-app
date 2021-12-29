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

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.pallete.primaryLight};
  margin: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.border.radius.small};
`;

export const Title = styled.p`
  ${({ theme, weight }) => weightStyles(theme, weight)};
  ${({ cap }) => capStyles(cap)};
  font-size: ${({ theme }) => theme.font.smallXX.size};
  line-height: ${({ theme }) => theme.font.smallXX.lineHeight};
  font-style: normal;
  color: ${({ theme }) => theme.color.white} !important;
  padding: 2px ${({ theme }) => theme.spacing(2)};
`;
