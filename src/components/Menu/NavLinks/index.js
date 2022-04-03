import React from "react";
import { motion } from 'framer-motion';
import { NavLink } from "./navLink";
import PropTypes from 'prop-types';

NavLinks.propTypes = {
    links: PropTypes.array.isRequired,
}

const navAnimateFrom = {opacity: 0, x:-20};
const navAnimateTo = {opacity: 1, x: 0};
const linkAnimateFrom = {opacity: 0, y: -40};
const linkAnimateTo = {opacity: 1, y: 0};

function NavLinks(props) {
    return (
        <motion.ul
        data-testid="navBar"
        initial={navAnimateFrom} 
        animate={navAnimateTo} 
        transition={{delay: 0, ease: 'easeIn'}}
        key="navbar"
        >
            <motion.li
                initial={linkAnimateFrom}
                animate={linkAnimateTo}
                transition={{delay: 0.10}}
                key="settings"
            >
                    Settings 
            </motion.li>
            {props.links.map(link => (
                <motion.li
                initial={linkAnimateFrom}
                animate={linkAnimateTo}
                transition={{delay: 0.10}}
                key={link.page}>
                    <NavLink exact
                    pageRoute={link.pageRoute} 
                    page={link.page}
                    key={link.pageRoute}
                    >
                    </NavLink>
                </motion.li>
                )
            )}
        </motion.ul>
    );
}

export { NavLinks };