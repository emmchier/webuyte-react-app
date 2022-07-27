import styled from "styled-components";

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(10)};

  h5 {
    font-size: ${({ theme }) => theme.font.largeX.size};
    line-height: ${({ theme }) => theme.font.largeX.lineHeight};
    color: ${({ theme }) => theme.color.text.primary};
    text-align: center;

    span {
      display: block;
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.medium.size};
    line-height: ${({ theme }) => theme.font.medium.lineHeight};
    color: ${({ theme }) => theme.color.text.secondary};
    text-align: center;
    margin: ${({ theme }) => theme.spacing(8)} 0;

    span {
      display: block;
    }
  }

  button {
    ${({ theme }) => `padding: ${theme.spacing(5)} ${theme.spacing(20)}`};
  }

  svg {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
`;
