import React from "react";
import { useState } from 'react';
import openMenuButton from './images/openMenuButton.png';
import './menu.scss';
import { NavLinks } from "./NavLinks";


function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <React.Fragment>
            <div className="menuContainer">
                <button                             
                    className="menu__openMenuButton"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img src={openMenuButton}></img>
                </button>
                <nav>
                    {menuOpen && <NavLinks/>}
                </nav>
            </div>
        </React.Fragment>
    );
}

export { Menu };
