import React from 'react';
import PropTypes from 'prop-types';

NavLink.propTypes = {
    pageRoute: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
}


function NavLink({pageRoute, page, icon}) {
    return <a href={pageRoute}><img src={icon}></img>{page}</a>;
}

export { NavLink };
