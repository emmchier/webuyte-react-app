import React from "react";
import { Content, Input, Label } from "./styles";

const FormField = ({
  labelFor,
  labelName,
  inputType,
  inputValue,
  onChange,
  isRequired,
}) => {
  return (
    <Content>
      <Label htmlFor={labelFor}>{labelName}</Label>
      <Input
        id={labelFor}
        type={inputType}
        value={inputValue}
        name={labelFor}
        onChange={onChange}
        required={isRequired}
      />
    </Content>
  );
};

export default FormField;
