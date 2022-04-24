import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; 

NavLink.propTypes = {
    pageRoute: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
}


function NavLink({pageRoute, page, icon}) {
    return <Link to={pageRoute}><img src={icon}></img>{page}</Link>;
}

export { NavLink };
