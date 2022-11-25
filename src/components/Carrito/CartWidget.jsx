import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./Carrito.css";

function Carrito(props){
    const miContext = useContext(cartContext);
    return (
        <div className="Carrito">
            <img src="/img/cart2.png" alt={props.alt} width={props.width}/>
            <span className="cSpan">{miContext.itemsInCart()}</span> 
        </div>
    );
}

export default Carrito;