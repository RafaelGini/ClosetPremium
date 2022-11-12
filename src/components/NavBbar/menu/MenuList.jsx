import React from "react";
import Section from "./section/Section";
import "./MenuList.css";

function MenuList(){
    return (
        <div>
            <ul className="Navbar">
                <Section name="Productos" to="/"/>
                <Section name="Gama Media" to="/category/gamaMedia"/>
                <Section name="Gama Alta" to="/category/gamaAlta"/>
                <Section name="Contacto" to="/contacto/" />
            </ul>
        </div>
    );
}

export default MenuList;