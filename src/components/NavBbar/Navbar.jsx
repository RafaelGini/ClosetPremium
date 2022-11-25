import React from "react";
import Logo from "./Logo";
import MenuList from "../menu/MenuList.jsx";
import Carrito from "../Carrito/CartWidget.jsx";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className='Navbar'>
            <Logo alt="Closet Logo" width="170px"></Logo>
            <MenuList/>
            <Link className="cartLink"><Carrito alt="Carrito" width="30px"/></Link>
        </div>
    );
}

export default Navbar;