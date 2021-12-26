import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
`;

export const ItemCountContainer = styled.div``;

export const Image = styled.img`
  width: 90%;
`;

export const ItemDataContainer = styled.div`
  button:nth-child(5) {
    margin-bottom: ${({ theme }) => theme.spacing(5)} !important;
    width: 100%;
  }
`;

export const ItemDataContent = styled.div`
  overflow: hidden;
`;

export const ItemBuyContent = styled.div``;

export const Name = styled.h3``;

export const Price = styled.h5``;

export const Description = styled.p``;

export const CancelBtnContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.color.background.light};
    border: ${({ theme }) => theme.color.background.light};
    color: ${({ theme }) => theme.color.pallete.primary};

    &:hover {
      background-color: ${({ theme }) => theme.color.pallete.primaryLight};
      border: ${({ theme }) => theme.color.pallete.primaryLight};
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
  color: ${({ theme }) => theme.color.text.primary};
  ${({ theme }) => `padding: ${theme.spacing(5)} ${theme.spacing(5)}`};
  border-radius: ${({ theme }) => theme.border.radius.main};
`;

export const Category = styled(StockContainer)`
  display: inline;
`;

export const List = styled.ul`
  margin: 0 !important;
`;

export const Adjust = styled.div`
  padding: 0 !important;
`;
