import React from "react";
import { useState } from 'react';
import openMenuButton from './images/openMenuButton.png';
import './menu.scss';
import { NavLinks } from "./NavLinks";
import { motion } from 'framer-motion';

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    //nav-menu links - USED IN THE TEST / EVERY CHANGE IN HERE, MUST BE IN THE TEST FILE
    const links = [
        { pageRoute: '/home', page : 'home'}, 
        { pageRoute: '/profile', page: 'profile'},
        { pageRoute: '/scores', page: 'scores'}
        ];
    return(
        <React.Fragment>
            <div data-testid="menu-Navbar" className="menuContainer">
                <motion.button 
                    data-testid="menuOpen-button"
                    animate={{opacity : 1}}
                    className="menu__openMenuButton"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={openMenuButton}></img>
                </motion.button>
                <nav>
                    {menuOpen && <NavLinks links={links}/>}
                </nav>
            </div>
        </React.Fragment>
    );
}

export { Menu };
