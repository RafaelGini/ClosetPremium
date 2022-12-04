import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PurchaseDetail.css";

export default function PurchaseDetail(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    const idOrder = useParams().idOrder;
    const {clearCart} = useContext(cartContext);
    clearCart();
    return (
        <div>
            <h1 className="title">¡ Orden Enviada !</h1>
            <h2 className="titleh2">El codigo de su orden unica es el siguiente:</h2>
            <h2 className="orderTitle">{idOrder}</h2>
            <Link to="/"><button className="menuBtn">Volver al Menú</button></Link>
        </div>
    )
}