import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "./Itemdetail.css";

function ItemCount( { onAddToCart, stock } ) {
  
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <MyButton onTouchButton={handleSubstract}>
          -
        </MyButton>
        <span className="countSpan">{count}</span>
        <MyButton onTouchButton={handleAdd}>
          +
        </MyButton>
      </div>
      <div className="itemcount_btns">
        {/* 3. agregar un onClick con el evento recibido por Props */}
        <MyButton onTouchButton={() => onAddToCart(count)}>
          Agregar al carrito
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;