import React, { useState } from "react";
import styles from "./style.scss"
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask"

export default function Form() {
  const [deal, setDeal] = useState("Compra");

  const handleChange = (event) => {
    setDeal(event.target.value);
  };

  const defaultMaskOptions = {
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 7, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask(defaultMaskOptions);

  return (
    <div className={styles.Container}>
      <form style={{ width: "100%" }}>
      <label> Tipo de Transação </label>
        <select className={styles.InputSelect} value={deal} onChange={handleChange}>
          <option value="Compra">Compra</option>
          <option value="Venda">Venda</option>
        </select>
      <label>Nome da mercadoria</label>
      <input className={styles.InputText} type="text" ></input>
      <label>Valor</label>
      <MaskedInput placeholder="R$0,00" mask={currencyMask} data-type="currency" type="currency" ></MaskedInput>
      <input className={styles.SubmitBtn}  type="submit" value="Adicionar transação" />
      </form>
    </div>
  );
}
