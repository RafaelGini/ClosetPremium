import React from "react";
import MyButton from "../MyButton/MyButton.jsx";
import { Link } from "react-router-dom";
import "./Item.css";


function Item({ title, imgurl, price, id }){
  const dinamicUrl = `/detail/${id}`;
    return (
        <Link to={dinamicUrl} className="card">
          <div>
            <div className="card-img">
              <img src={imgurl} alt={title} />
            </div>
            <div className="card-detail">
              <h3>{title}</h3>
              <p>${price}</p>
            </div>
              <MyButton>Ver más</MyButton>
          </div>
        </Link>
      );
}

export default Item;