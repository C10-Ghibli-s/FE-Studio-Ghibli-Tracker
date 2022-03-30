import React from 'react';
import './loginButton.scss';

function LoginButton(props) {

    return <a className='loginButton' href={props.page}>{props.children}</a>;

}

export { LoginButton };
