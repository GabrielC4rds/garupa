import { render, screen, fireEvent } from "@testing-library/react";
import Form from '.';
import '@testing-library/jest-dom';
import React from 'react';
import { ExtractProvider } from "../../AppContext";

describe('Form Component', (() => {
    test("must start with 3 form titles", () => {
        render(<ExtractProvider><Form/></ExtractProvider>);

        const formTitle1 = screen.getByText("Tipo de transação");
        const formTitle2 = screen.getByText("Nome da mercadoria");
        const formTitle3 = screen.getByText("Valor");

        expect(formTitle1).toBeInTheDocument();
        expect(formTitle2).toBeInTheDocument();
        expect(formTitle3).toBeInTheDocument();
    });
    test("the transaction type value must start as a buy and with a put option", () => {
        render(<ExtractProvider><Form/></ExtractProvider>);

        const formTransactionValue1 = screen.getByText("Compra");
        const formTransactionValue2 = screen.getByText("Venda");
        expect(formTransactionValue1).toBeInTheDocument();
        fireEvent.click(screen.getByText("Compra"));
        fireEvent.click(screen.getByText("Venda"));
        expect(formTransactionValue2).toBeInTheDocument();
    });
    test("category name value must start as input", () => {
        render(<ExtractProvider><Form/></ExtractProvider>);

        const formCategoryValue = screen.queryByPlaceholderText("Input");
        

        expect(formCategoryValue).toBeInTheDocument();
    });
    test("the price value must start at zero ", () => {
        render(<ExtractProvider><Form/></ExtractProvider>);

        const formPriceValue = screen.queryByPlaceholderText("R$ 0,00");

        expect(formPriceValue).toBeInTheDocument();
    });
   
}));