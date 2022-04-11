import React, { useState } from "react";
import openMenuButton from './images/openMenuButton.png';
import homeIcon from './images/homeIcon.png';
import profileIcon from './images/profileIcon.png';
import rateIcon from './images/rateIcon.png';
import watchedIcon from './images/watchedIcon.png';
import './menu.scss';
import { NavLinks } from "./NavLinks";
import { motion } from 'framer-motion';


function Menu({menuOpen,setMenuOpen, toggleFilter, setToggleFilter}) {
    const links = [
        { pageRoute: '/home', page : 'home', icon: homeIcon},
        { pageRoute: '/profile', page: 'profile', icon: profileIcon},
        { pageRoute: '/watched', page: 'watched', icon: watchedIcon},
        { pageRoute: '/scores', page: 'scores', icon: rateIcon},
    ];
    return(
        <React.Fragment>
            <div data-testid="menu-Navbar" className="menuContainer">
                <motion.button 
                    data-testid="menuOpen-button"
                    animate={{opacity : 1}}
                    className="menu__openMenuButton"
                    type="button"
                    onClick={() => {setMenuOpen(!menuOpen);
                        if(toggleFilter) {
                            setToggleFilter(!toggleFilter);
                        };
                    }}>
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
