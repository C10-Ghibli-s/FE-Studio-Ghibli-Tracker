import React from 'react';
import PropTypes from 'prop-types';

NavLink.propTypes = {
    pageRoute: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
}


function NavLink(props) {
    return <a href={props.pageRoute}>{props.page}</a>;
}

export { NavLink };
