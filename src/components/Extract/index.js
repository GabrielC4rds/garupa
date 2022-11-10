import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.scss";
import AppContext from "../../AppContext";

export default function Extract() {
  const {items} = useContext(AppContext);
  
  const [storedArray, setStoredArray] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage?.getItem("myValueInLocalStorage"));
    if(items){
      setStoredArray(items);
    }
  }, []);
  let totalValue = items.map(res => res.deal === "Compra" ?parseFloat(res.value.slice(2)): parseFloat(res.value.slice(2)) * -1);
  var soma = 0;
  for(var i = 0; i < totalValue.length; i++) {
    soma += totalValue[i];
  }
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
              <label>{res.deal === "Compra"?"+":"-"}</label>
              <label>{res.name}</label>
            </div>
            <label>R$ {res.value?.slice(2)}</label>
          </div>
        );
      })}
      <div className={styles.ResultDiv}>
        <h2>Total</h2>
        <div>
          <h2>R$ 20</h2>
          <label>[LUCRO]</label>
        </div>
      </div>
    </div>
  );
}
