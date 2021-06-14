import React from 'react'
import NavBarItem from './NavBarItem';
import CartWidget from './CartWidget';

import './styles/NavBar.css'
import Logo from './presentacionals/Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <header>
            <nav>
                <NavBarItem name="INICIO" url="/"/>
                <NavBarItem name="PRODUCTOS" url="/productos" />
                <li>
                    <Link to = "/">
                        <Logo />
                    </Link>
                </li>
                <NavBarItem name="NOSOTROS" url="/nosotros" />
                <NavBarItem name="CONTACTO" url="/contact" />
                <CartWidget />
            </nav>
        </header>
    )
}


export default NavBar

