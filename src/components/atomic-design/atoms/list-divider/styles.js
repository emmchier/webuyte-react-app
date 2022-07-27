import styled from "styled-components";

const ListDividerContainer = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.color.grey.dark};
`;

export default ListDividerContainer;
