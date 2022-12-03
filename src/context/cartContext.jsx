import { createContext, useState } from "react";

//1. Inicializar contexto
export const cartContext = createContext();

//2. Context Provider
export default function CartContextProvider( {children} ){

    const [cart, setCart] = useState([]);
 
    function addToCart(product, count){
        const newCart = [...cart];
        let porductoExistente = false;
        newCart.forEach(item => {
            if (item.id === product.id){
                porductoExistente = true;
                item.count = count;
            }
        });
        if (!porductoExistente) {
            product.count = count;
            newCart.push(product);
        }
        setCart(newCart);
    }

    function clearCart(){
        setCart([]);
    }

    function removeItem(itemIdR){
        setCart(cart.filter(i => i.id !== itemIdR));
    }

    function itemsInCart(){
        let total = 0;
        cart.forEach(i => total += i.count);
        return total;
    }

    function totalCartPrice(){
        let total = 0;
        cart.forEach(i => {total += (i.count * i.price)});
        return total;
    }

    const value = {
        cart,
        addToCart,
        clearCart,
        removeItem,
        itemsInCart,
        totalCartPrice
    }

    return (
        <cartContext.Provider value={value}> 
            {children}
        </cartContext.Provider>
    );
}