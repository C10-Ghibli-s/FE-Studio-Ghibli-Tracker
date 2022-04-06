import React from 'react';
import backButton from './images/backButton.png';
function GoBackButton() {
    return <a className='backButton' href={localStorage.getItem("currMainPage")}> <img src={backButton}></img> </a>;
}

export { GoBackButton };
