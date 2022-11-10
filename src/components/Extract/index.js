import React, { useState } from "react";
import styles from './style.scss'

export default function Extract() {
  return (
    <div className={styles.Container}>
      <h1>Extrato de Transações</h1>
      <div className={styles.TitleDiv}>
        <h2>Mercadoria</h2>
        <h2>Valor</h2>
      </div>
      <div className={styles.DataDiv}>
        <div>
          <label>+</label>
          <label>Lorem ipsum dolor sit amet consectetur</label>
        </div>
        <label>R$ 12.999,99</label>
      </div>
      <div className={styles.DataDiv}>
        <div>
          <label>-</label>
          <label>Quis nostrud exercitation</label>
        </div>
        <label>R$ 99,99</label>
      </div>
      <div className={styles.ResultDiv}>
        <h2>Total</h2>
        <div>
          <h2>R$ 12.909,99</h2>
          <label>[LUCRO]</label>
        </div>
      </div>
    </div>
  );
}
