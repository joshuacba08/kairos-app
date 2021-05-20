import React from 'react'
import NavBarItem from './NavBarItem';
import CartWidget from './CartWidget';

import './styles/NavBar.css'
import Logo from './presentacionals/Logo';

const NavBar = () => {

    return (
        <header>
            <nav>
                <NavBarItem name="INICIO" url="/"/>
                <NavBarItem name="PRODUCTOS" url="/" />
                <li>
                    <a href="/">
                        <Logo />
                    </a>
                </li>
                <NavBarItem name="NOSOTROS" url="/" />
                <NavBarItem name="CONTACTO" url="/" />
                <CartWidget />
            </nav>
        </header>
    )
}


export default NavBar
