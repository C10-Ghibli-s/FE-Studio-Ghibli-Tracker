import React from 'react';
import { Link } from 'react-router-dom';
import './loginButton.scss';

function LoginButton() {
    return(
        <>
        <Link className='loginButton' to="/login"> Login </Link>
        </>
    );
}

export { LoginButton };
