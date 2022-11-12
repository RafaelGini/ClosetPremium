import React from "react";
import Logo from "./Logo";
import MenuList from "./menu/MenuList";
import Carrito from "./menu/Carrito/CartWidget";
import "./Navbar.css";

function Navbar(){
    return (
        <div className='Navbar'>
            <Logo alt="Closet Logo" width="170px"></Logo>
            <MenuList/>
            <Carrito alt="Carrito" width="30px"/>
        </div>
    );
}

export default Navbar;