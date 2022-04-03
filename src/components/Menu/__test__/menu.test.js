/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Menu } from '../index';

describe('Menu Component', () => {
    test('Menu must be disabled when page renders', () => {
        render(<Menu/>);
        const menuDisabled = screen.queryByTestId("navBar");
        expect(menuDisabled).toBe(null);
    });
    test('Menu must render when the open Menu Button is clicked', () => {
        render(<Menu/>);
        fireEvent.click(screen.getByRole('button'));
        const menuRendered = screen.getByTestId("navBar");
        expect(menuRendered).toBeInTheDocument();
    })
    test('match snapshots with the links', () => {
        render(<Menu/>);
        fireEvent.click(screen.getByRole('button'));
        const menuRendered = screen.getByTestId("menu-Navbar");
        expect(menuRendered).toMatchSnapshot();
    })
});