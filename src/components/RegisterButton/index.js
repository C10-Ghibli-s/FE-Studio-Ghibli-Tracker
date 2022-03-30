import React from 'react';
import './registerNow.scss';

function CTA_RegisterButton(props) {
    return <a className='registerNow' href={props.page}>{props.children}</a>;
}

export { CTA_RegisterButton };
