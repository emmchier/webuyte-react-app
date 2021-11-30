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
  }
`;

export const Name = styled.h3``;

export const Price = styled.h5``;

export const Description = styled.p``;
