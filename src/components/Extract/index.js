import React, { useState } from "react";
import { Container, TitleDiv, DataDiv, ResultDiv } from "./style";

export default function Extract() {
  return (
    <Container>
      <h1>Extrato de Transações</h1>
      <TitleDiv>
        <h2>Mercadoria</h2>
        <h2>Valor</h2>
      </TitleDiv>
      <DataDiv>
        <div>
          <label>+</label>
          <label>Lorem ipsum dolor sit amet consectetur</label>
        </div>
        <label>R$ 12.999,99</label>
      </DataDiv>
      <DataDiv>
        <div>
          <label>-</label>
          <label>Quis nostrud exercitation</label>
        </div>
        <label>R$ 99,99</label>
      </DataDiv>
      <ResultDiv>
        <h2>Total</h2>
        <div>
          <h2>R$ 12.909,99</h2>
          <label>[LUCRO]</label>
        </div>
      </ResultDiv>
    </Container>
  );
}
