import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";

export default function CartForm(props) {
  const [data, setData] = useState({ 
    name: "",
    email: "",
    phone: ""
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = {...data}
    newData[nameInput] = value;
    setData(newData)
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(data);
  }

  const comprarCarritoWidget = (
        <MyButton set="fontItalic buyCartBtn" onTouchButton={() => props.onSubmit(data)}>
            Realizar Compra
        </MyButton>
    );

  return (
      <form onSubmit={onSubmit} >
          {/* Podriamos convertir los inputs en Componentes */}
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label htmlFor="name" style={{  width: "100px",marginRight: 4 }}>Nombre</label>
            <input value={data.name} name="name" type="text" onChange={onInputChange} required/>
          </div>      

          <div style={{ display: "flex", marginBottom: 8 }}>
            <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>Email</label>
            <input value={data.email} name="email" type="email" onChange={onInputChange} required/>
          </div>

          <div style={{ display: "flex", marginBottom: 8 }}>
            <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
            <input value={data.phone} name="phone" type="phone" onChange={onInputChange} />
          </div>
         
          {comprarCarritoWidget}
      </form>
  );
}