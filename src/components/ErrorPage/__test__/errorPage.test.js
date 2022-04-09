/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorSearch } from '../index';

describe("Error Page", ()=> {
    test("Given the main error message and a error 'option', must be shown in screen", ()=> {
        render(<ErrorSearch errorMessage={"no results found for"} errorOption={"mi vecino tot"}></ErrorSearch>)
        const errImg = screen.getByRole('img');
        const errMsg = screen.getByText('no results found for');
        const errFeedback = screen.getByTestId('errorFeedBack');
        expect(errImg).toBeInTheDocument();
        expect(errMsg).toBeInTheDocument();
        expect(errFeedback).toBeInTheDocument();
    })
})

