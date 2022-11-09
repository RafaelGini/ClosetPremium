import React from "react";
import Section from "./section/Section";
import "./MenuList.css";

function MenuList(){
    return (
        <div>
            <ul className="Navbar">
                <Section name="Categorias"/>
                <Section name="Ofertas"/>
                <Section name="Acerca"/>
                <Section name="Contacto"/>
            </ul>
        </div>
    );
}

export default MenuList;