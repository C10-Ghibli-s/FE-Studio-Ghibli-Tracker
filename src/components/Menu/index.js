import React from "react";
import { useState } from 'react';
import openMenuButton from './images/openMenuButton.png';
import './menu.scss';
import { NavLinks } from "./NavLinks";

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    //nav-menu links - USED IN THE TEST / EVERY CHANGE IN HERE, MUST BE IN THE TEST
    const links = [{ route: '',page : 'Settings'}, 
    { route: '/home', page : 'home'}, 
    { route: '/profile', page: 'profile'},
    { route: '/scores', page: 'scores'}
    ];

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
                    {menuOpen && <NavLinks links={links}/>}
                </nav>
            </div>
        </React.Fragment>
    );
}

export { Menu };
