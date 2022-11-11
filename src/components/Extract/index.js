import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.scss";
import AppContext from "../../AppContext";

export default function Extract() {
  const { items, addToExtract } = useContext(AppContext);
  var totalSum = 0;
  let allValues = items.map((res) =>
    res.deal === "Compra"
      ? parseFloat(res.value.slice(2).replace('.', ''))
      : parseFloat(res.value.slice(2).replace('.', '')) * -1
  );
  for (var i = 0; i < allValues.length; i++) {
    totalSum += allValues[i];
  }
  useEffect(() => {
    const itemStorage = JSON.parse(
      localStorage?.getItem("myValueInLocalStorage")
    );
    if (itemStorage) {
      itemStorage.map((res) => addToExtract(res));
    }
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Extrato de Transações</h1>
      <div className={styles.TitleDiv}>
        <h2>Mercadoria</h2>
        <h2>Valor</h2>
      </div>
      {items.map((res) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={styles.DataDiv}>
            <div>
              <label>{res.deal === "Compra" ? "+" : "-"}</label>
              <label>{res.name}</label>
            </div>
            <label>R$ {res.value?.slice(2)}</label>
          </div>
        );
      })}
      <div className={styles.ResultDiv}>
        <h2>Total</h2>
        <div>
          <h2>R$ {totalSum *-1}</h2>
          <label>{totalSum >= 0?"[LUCRO]":"[PREJUÍZO]" }</label>
        </div>
      </div>
    </div>
  );
}
