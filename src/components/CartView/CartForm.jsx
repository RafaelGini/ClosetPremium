import React, { useState } from "react";
import "./CartView.css"

export default function CartForm(props) {
  const [data, setData] = useState({ 
    name: "",
    email: "",
    phone: ""
  });

  function onInputChange(evt) {
    const nameInput = evt.target.name;
    const value = evt.target.value;
    const newData = {...data}
    newData[nameInput] = value;
    setData(newData)
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(data);
  }

  const comprarCarritoWidget = (
        <button 
        className="buyBtn" 
        type="submit"
        disabled = {(data.name === "" || data.email === "")}
        > Realizar Orden </button>
    );

  return (
      <div className="formContainer">
        <h2 className="CarritoTitle CarritoTitleh2">{props.title}</h2>
        <h3 className="CarritoTitle CarritoTitleh3">~ No pagarás nada ni enviaremos Emails ~</h3>
        <form onSubmit={onSubmit} className="mainForm">

            {/* ... El componente InputForm hacía conflicto para escribir ... */}
            <div className="formInput">
              <label htmlFor="name">Nombre <span className="requiredInput">*</span></label>
              <input value={data.name} name="name" type="text" onChange={onInputChange} required/>
            </div>      
            <div className="formInput">
              <label htmlFor="email" >Email <span className="requiredInput">*</span></label>
              <input value={data.email} name="email" type="email" onChange={onInputChange} required/>
            </div>
            <div className="formInput">
              <label htmlFor="phone" >Teléfono</label>
              <input value={data.phone} name="phone" type="phone" onChange={onInputChange}/>
            </div>
            
            {comprarCarritoWidget}
        </form>
      </div>
  );
}