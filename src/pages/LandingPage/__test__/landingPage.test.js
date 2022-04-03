/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import testRenderer from "react-test-renderer";
import { LandingPage } from '../index';

describe('Landing Page', () => {
    test('testing the snapshot of the CTA buttons', () => {
        const landingPage = testRenderer.create(<LandingPage/>).toJSON();
        expect(landingPage).toMatchSnapshot();
    });
    test('landing page renders all its elements', () => {
        render(<LandingPage/>);
        const CTA_buttons = screen.getAllByRole('link');
        const landingImage = screen.getAllByRole('img');
        CTA_buttons.map(button => expect(button).toBeInTheDocument());
        landingImage.map(image => expect(image).toBeInTheDocument());
    })
});