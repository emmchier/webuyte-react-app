import React from "react";
import Button from "../button";
import FormField from "./form-field";
import { FormContainer } from "./styles";

const Form = ({ handleSubmit, formValues, handleInputChange }) => {
  const { userName, userEmail, userPhone, userConfirmPhone } = formValues;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField
        labelFor="userName"
        labelName="Nombre"
        inputType="text"
        inputValue={userName}
        onChange={handleInputChange}
        isRequired={true}
      />
      <FormField
        labelFor="userEmail"
        labelName="E-mail"
        inputType="email"
        inputValue={userEmail}
        onChange={handleInputChange}
        isRequired={true}
      />
      <FormField
        labelFor="userPhone"
        labelName="Teléfono"
        inputType="number"
        inputValue={userPhone}
        onChange={handleInputChange}
        isRequired={true}
      />
      <FormField
        labelFor="userConfirmPhone"
        labelName="Confirmar Teléfono"
        inputType="number"
        inputValue={userConfirmPhone}
        onChange={handleInputChange}
        isRequired={true}
      />
      <Button type="submit">Comprar</Button>
    </FormContainer>
  );
};

export default Form;
