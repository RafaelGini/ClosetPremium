import "./CartView.css";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export default function ItemInCart({ itemInCart }){
    
    const { removeItem } = useContext(cartContext);
    const {id, title, price, count, imgurl} = itemInCart;
    const dinamicUrl = `/detail/${id}`;
    
    const productHmtl = (
        <div className="productDiv">
            <Link to={dinamicUrl}><img src={imgurl} alt="Item Img"/></Link>
            <div className="titutloCantidad">
                <h2>{title}</h2>
                <h4>Unidades: {count} {count === itemInCart.stock && `MAX.`}</h4>
            </div>
            <h4>$ {price.toLocaleString('en')} c/u</h4>
            <button className="deleteBtn" onClick={() => removeItem(id)}>x eliminar</button>
        </div>
    );

    return productHmtl;
}