import React from 'react';

function NavLink(props) {

    return <a href={props.page}>{props.children}</a>;

}

export { NavLink };
