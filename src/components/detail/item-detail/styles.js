import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  width: 50%;
`;

export const ItemCountContainer = styled.div`
  width: 50%;
`;

export const Image = styled.img``;

export const ItemDataContainer = styled.div`
  width: 50%;

  button:nth-child(5) {
    margin-bottom: ${({ theme }) => theme.spacing.space15} !important;
    width: 100%;
  }
`;

export const ItemDataContent = styled.div`
  width: 50%;
`;

export const Name = styled.h3``;

export const Price = styled.h5``;

export const Description = styled.p``;

export const CancelBtnContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.space20};

  button {
    width: 100%;
    background-color: #9368ff21;
    border: #9368ff21;
    color: ${({ theme }) => theme.color.pallete.primary};

    &:hover {
      background-color: #9368ff;
      border: #9368ff;
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export const FinishBtnContainer = styled.div`
  button {
    width: 100%;
  }
`;

export const Actions = styled.div``;

export const StockContainer = styled.p`
  color: ${({ theme }) => theme.color.pallete.primary};
  background-color: ${({ theme }) => theme.color.pallete.hoverButton};
  ${({ theme }) =>
    `padding: ${theme.spacing.space10} ${theme.spacing.space10}`};
  border-radius: ${({ theme }) => theme.border.radius.main};
`;

export const Category = styled(StockContainer)`
  display: inline;
`;
