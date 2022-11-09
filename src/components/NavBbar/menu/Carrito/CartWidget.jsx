import React from "react";
import "./Carrito.css";

function Carrito(props){
    return (
        <div className="Carrito">
            <img src="img/cart2.png" alt={props.alt} width={props.width}/>
        </div>
    );
}

export default Carrito;