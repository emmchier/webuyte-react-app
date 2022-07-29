import styled, { css } from 'styled-components';

const gapStyles = (gap) =>
  ({
    0: css`
      --bs-gutter-x: 0;
      --bs-gutter-y: 0;
    `,
    1: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(1)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(1)};
    `,
    2: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(2)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(2)};
    `,
    3: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(3)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(3)};
    `,
    4: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(4)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(4)};
    `,
    5: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(5)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(5)};
    `,
    6: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(6)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(6)};
    `,
    7: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(7)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(7)};
    `,
    8: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(8)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(8)};
    `,
    9: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(9)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(9)};
    `,
    10: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(10)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(10)};
    `,
    11: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(11)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(11)};
    `,
    12: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(12)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(12)};
    `,
    13: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(13)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(13)};
    `,
    14: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(14)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(14)};
    `,
    15: css`
      --bs-gutter-x: ${({ theme }) => theme.spacing(15)};
      --bs-gutter-y: ${({ theme }) => theme.spacing(15)};
    `,
  }[gap]);

export const GridList = styled.ul`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
  ${({ gap }) => gapStyles(gap)};

  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }
`;
