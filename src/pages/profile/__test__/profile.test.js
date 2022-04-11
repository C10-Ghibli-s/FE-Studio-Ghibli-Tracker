/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Profile } from '../index.js';


describe("Profile page", ()=>{
    test("rendering all elements in the component but not the settings-subMenu", ()=> {
        render(<Profile/>);
        const userPhoto = screen.getByTestId("user--photo");
        const userName = screen.getByText("justin");
        const profileMenu = screen.getByTestId("options");
        const settingsOptions = screen.getAllByTestId("configOptions");
        expect(userPhoto).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
        expect(profileMenu).toBeInTheDocument();
        expect(settingsOptions).not.toBeInTheDocument();
    });
    test("Given the event 'click' in the settings button, must render a list of config options", ()=> {
        render(<Profile/>);
        const settingsButton = screen.getByText("Settings");
        fireEvent.click(settingsButton);
        const settingsOptions = screen.getAllByTestId("configOptions");
        expect(settingsOptions).toBeInTheDocument();
    })
    test("given the moviesWatched by the user, must show in a label the amount over the total", ()=> {
        render(<Profile/>);
        const moviesWatchedLabel = screen.getByTestId('moviesWatched');
        expect(moviesWatchedLabel).toBe("23/24")
    })
});

// TestUser the component is taking the id and info
// {
//     "id": 2,
//     "nickname": "justin",
//     "password": "dhdss",
//     "profilePicture": "ejero",
//     "movieWatched": 23,
//     "facebook": "juanpepito"
// }