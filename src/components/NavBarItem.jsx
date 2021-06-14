import React from 'react'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBarItem = ({name, url}) => {
    return (
        <li>
            <Link to={url}>{name}</Link>    
        </li>
    )
}

NavBarItem.propTypes = {
    name: PropTypes.string.isRequired,
}

export default NavBarItem
