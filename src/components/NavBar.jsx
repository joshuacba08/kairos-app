import React from 'react'
import logo from '../assets/images/Kairos_logo_portada.png';
import NavBarItem from './NavBarItem';
import CartWidget from './CartWidget';

import './styles/NavBar.css'

const NavBar = () => {

    return (
        <header>
            <nav>
                <NavBarItem name="INICIO" url="google.com"/>
                <NavBarItem name="PRODUCTOS" url="google.com" />
                <li>
                    <a href="">
                        <div className="logo-container">
                            <img src={logo} alt="logo de Kairos" />
                        </div>
                    </a>
                </li>
                <NavBarItem name="NOSOTROS" url="google.com" />
                <NavBarItem name="CONTACTO" url="google.com" />
                <CartWidget />
            </nav>
        </header>
    )
}


export default NavBar
