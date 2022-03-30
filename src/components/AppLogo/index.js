import React from "react";
import secondaryMarkLogotype from '../../pages/LandingPage/images/secondary_mark-logotype.png';
import trackerLogotype from '../../pages/LandingPage/images/tracker.png';
import './AppLogo.scss';

function AppLogo() {
    return(
        <div className='appLogo'>
            <picture className="secondaryMarkLogotype">
                <img src={secondaryMarkLogotype} alt='Studio Ghibli Logotype'></img>
            </picture>
            <picture className="trackerLogotype">
                <img src={trackerLogotype}></img>
            </picture>
        </div>
    );
}

export { AppLogo };
