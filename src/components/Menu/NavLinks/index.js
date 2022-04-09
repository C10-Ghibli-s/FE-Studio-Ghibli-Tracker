import React from "react";
import { motion } from 'framer-motion';
import { NavLink } from "./navLink";
import PropTypes from 'prop-types';
import secondary_mark from '../../../pages/LandingPage/images/secondary_mark-logotype.png';
import tracker from '../../../pages/LandingPage/images/tracker.png';

NavLinks.propTypes = {
    links: PropTypes.array.isRequired,
}

const navAnimateFrom = {opacity: 0, x:-20};
const navAnimateTo = {opacity: 1, x: 0};
const linkAnimateFrom = {opacity: 0, y: -40};
const linkAnimateTo = {opacity: 1, y: 0};

function NavLinks({links}) {
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
                <img src={secondary_mark}></img>
                <img src={tracker}></img>
            </motion.li>
            {links.map(link => (
                <motion.li
                initial={linkAnimateFrom}
                animate={linkAnimateTo}
                transition={{delay: 0.10}}
                key={link.page}>
                    <NavLink exact
                    pageRoute={link.pageRoute} 
                    page={link.page}
                    key={link.pageRoute}
                    icon={link.icon}
                    >
                    </NavLink>
                </motion.li>
                )
            )}
        </motion.ul>
    );
}

export { NavLinks };