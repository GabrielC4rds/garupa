import React, { useState, useContext } from "react";
import styles from "./style.module.scss";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import AppContext from "../../AppContext";

export default function Form() {
  const {addToExtract} = useContext(AppContext);
  // const {value} = useContext(AppContext);
  const [dealData, setDealData] = useState({
    name: "",
    value: "R$0",
    deal: "Compra",
  });

  const [resultData, setResultData] = useState([])
  
  const handleChange = (event) => {
    setDealData({ ...dealData, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    resultData.push(dealData);
    // value = resultData;
    addToExtract(dealData);
    localStorage.setItem("myValueInLocalStorage", JSON.stringify(resultData));
  };

  const defaultMaskOptions = {
    prefix: "R$",
    suffix: "",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 7, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask(defaultMaskOptions);

  return (
    <div className={styles.Container}>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <label> Tipo de Transação </label>
        <select
          className={styles.InputSelect}
          name="deal"
          onChange={handleChange}
        >
          <option value="Compra">Compra</option>
          <option value="Venda">Venda</option>
        </select>
        <label>Nome da mercadoria</label>
        <input
          name="name"
          onChange={handleChange}
          className={styles.InputText}
          type="text"
        ></input>
        <label>Valor</label>
        <MaskedInput
          onChange={handleChange}
          name="value"
          placeholder="R$ 0,00"
          mask={currencyMask}
          data-type="currency"
          type="currency"
        ></MaskedInput>
        <input
          className={styles.SubmitBtn}
          type="submit"
          value="Adicionar transação"
        />
      </form>
    </div>
  );
}
