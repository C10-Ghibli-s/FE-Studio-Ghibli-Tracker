import React from "react";
import { Link } from 'react-router-dom';

function NavLinks() {
    return ( 
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>    
                    <Link to="/">Profile</Link>
                </li>

                <li>
                    <Link to="/">Scores</Link>
                </li>

                <li>
                    <Link to="/">Watched</Link>
                </li>
            </ul>
    );
}

export { NavLinks };
