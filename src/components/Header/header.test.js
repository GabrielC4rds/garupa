import { render, screen } from "@testing-library/react";
import Header from '.';
import '@testing-library/jest-dom';
import React from 'react';

describe('Header Component', (() => {
    test("should start with title Financial Control", () => {
        render(<Header/>);

        const headerTitle = screen.getByText("Controle Financeiro");

        expect(headerTitle).toBeInTheDocument();
    });
   
}));