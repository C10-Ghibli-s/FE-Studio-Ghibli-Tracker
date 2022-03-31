import React from "react";
import { motion } from 'framer-motion';
import { NavLink } from './navLink';

function NavLinks(props) {
    //nav transition
    const navAnimateFrom = {opacity: 0, x:-20};
    const navAnimateTo = {opacity: 1, x: 0};
    //navlinks transition
    const linkAnimateFrom = {opacity: 0, y: -40};
    const linkAnimateTo = {opacity: 1, y: 0};
    return (
        <motion.ul
            initial={navAnimateFrom}
            animate={navAnimateTo}
            transition={{delay: 0, ease: 'easeInOut'}}
        >
            {props.links.map(link=> (
                        <motion.li 
                            initial={linkAnimateFrom}
                            animate={linkAnimateTo}
                            transition={{delay: 0.10}}
                            key={link.route}
                        >
                            <NavLink data-testid='navLink' page={link.route}> {link.page} </NavLink>
                        </motion.li>
                    )
                )
            }
        </motion.ul>
    );
}

export { NavLinks };

// REGISTER
// LANDING PAGE
// LOGIN
// FILM
// FILM WATCHED


// HOME
// ACCOUNT / Profile
// SETTINGS (va en account)
// SCORES
// WATCHED
// THEMES