import React from 'react';
import './registerNow.scss';
import { Link } from "react-router-dom";

function CTA_RegisterButton(props) {
    return <Link className='registerNow' to={props.page}>{props.children}</Link>;
}

export { CTA_RegisterButton };
