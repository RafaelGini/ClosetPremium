// ... Imports ...

import React, { useContext } from "react";
import { createOrder, uploadData } from "../../Services/fireStore";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemInCart from "./ItemInCart";
import MyButton from "../MyButton/MyButton";
import CartForm from "./CartForm";
import 'react-toastify/dist/ReactToastify.css';
import "./CartView.css";


// ... Main Component ...

export default function CartView(){
    const {cart, clearCart, totalCartPrice} = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0) { 
        return (
            <div>
                <h1 className="noItemsInCartTitle">💍 El carrito está vacío ... </h1>
                <Link to="/"><button className="menuBtn">Ver Productos</button></Link>
            </div>
        );
    }

    async function handleCheckout(data){
        const cartWnDescr = cart.map(item => {
            return {
                ...item,
                description: "",
            }
        });

        const order = {
            buyer: data,
            items: cartWnDescr,
            total: totalCartPrice(),
            date: new Date(),
        };
        const orderId = await createOrder(order);
        navigate(`/purchaseDetail/${orderId}`)

    }

    const productosEnCarrito = (
        <div className="cart-container">
            {cart.map( item => {
                return <ItemInCart itemInCart={item} key={item.id}/>
            })}
        </div>
    );

    const totalPriceCarrito = (
        <div className="totalWidget">
            <h2>Total:</h2>
            <h2>$ {totalCartPrice().toLocaleString('en')}</h2>
        </div>
    );

    const vaciarCarritoWidget = (
        <MyButton set="fontItalic deleteCartBtn" onTouchButton={clearCart}>
            Vaciar Carrito
        </MyButton>
    );

    const comprarCarritoWidget = (
        <MyButton set="fontItalic buyCartBtn" onTouchButton={handleCheckout}>
            Realizar Compra
        </MyButton>
    );

    const carrito = (
        <div className="carritoContainer">
            <h1 className="CarritoTitle">Tus Productos</h1>
            {productosEnCarrito}
            {totalPriceCarrito}
            <div className="cartBtns">
                {vaciarCarritoWidget}
            </div>
            <CartForm onSubmit={handleCheckout}/>
        </div>
    );

    return carrito;
}