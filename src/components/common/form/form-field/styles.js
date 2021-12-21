import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0;

  label,
  input {
    display: block;
    width: 100%;
  }
`;

export const Label = styled.label`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  border: none;
  background-color: ${({ theme }) => theme.color.pallete.hoverButton};
  border-radius: 5px;
  line-height: 40px;
`;
