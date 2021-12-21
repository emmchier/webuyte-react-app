import React from "react";
import Button from "../button";

const Form = ({ handleSubmit, formValues, handleInputChange }) => {
  const { userName, userEmail, userPhone } = formValues;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">Nombre</label>
      <input
        id="userName"
        type="text"
        value={userName}
        name="userName"
        onChange={handleInputChange}
        required
      />
      <label htmlFor="userEmail">E-mail</label>
      <input
        id="userEmail"
        type="email"
        value={userEmail}
        name="userEmail"
        onChange={handleInputChange}
        required
      />
      <label htmlFor="userPhone">Teléfono</label>
      <input
        id="userPhone"
        type="number"
        value={userPhone}
        name="userPhone"
        onChange={handleInputChange}
        required
      />
      <Button type="submit">Comprar</Button>
    </form>
  );
};

export default Form;
