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
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const Input = styled.input`
  margin: 0;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  border: none;
  background-color: ${({ theme }) => theme.color.pallete.hoverButton};
  border-radius: ${({ theme }) => theme.border.radius.main};
  line-height: ${({ theme }) => theme.font.largeX.lineHeight};
`;
