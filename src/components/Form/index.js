import React, { useState } from "react";
import { Container, InputSelect, SubmitBtn, InputText } from "./style";

export default function Form() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <Container>
      <form style={{ width: "100%" }}>
      <label> Tipo de Transação </label>
        <InputSelect value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </InputSelect>
      <label>Nome da mercadoria</label>
      <InputText type="text" ></InputText>
      <label>Valor</label>
      <InputText type="number" ></InputText>
      <SubmitBtn type="submit" value="Adicionar transação" />
      </form>
    </Container>
  );
}
