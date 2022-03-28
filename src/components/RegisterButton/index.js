import React from 'react';
import { Link } from 'react-router-dom';
import './registerNow.scss';

function CTA_RegisterButton() {
    return(
        <>
        <Link className='registerNow' to="/register"> Register Now! </Link>
        </>
    );
}

export { CTA_RegisterButton };
