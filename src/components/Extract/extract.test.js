import { render, screen } from "@testing-library/react";
import Extract from '.';
import '@testing-library/jest-dom';
import React from 'react';
import { ExtractProvider } from "../../AppContext";

describe('Extract Component', (() => {
    test("should start with title Transaction Statement", () => {
        render(<ExtractProvider><Extract/></ExtractProvider>);

        const extractTitle = screen.getByText("Extrato de Transações");

        expect(extractTitle).toBeInTheDocument();
    });
    test("should start with titleDesc", () => {
        render(<ExtractProvider><Extract/></ExtractProvider>);

        const titleDesc1 = screen.getByText("Mercadoria");
        const titleDesc2 = screen.getByText("Valor");
        const titleDesc3 = screen.getByText("Total");

        expect(titleDesc1).toBeInTheDocument();
        expect(titleDesc2).toBeInTheDocument();
        expect(titleDesc3).toBeInTheDocument();
    });
   
}));