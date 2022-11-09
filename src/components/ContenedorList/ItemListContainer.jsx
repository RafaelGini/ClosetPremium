import React from "react";
import "./Container.css";

function Item(props){
    return (
        <p className="parr">{props.greetings}</p>
    );
}

function ItemListContainer({greetings}){
    return (
        <div className="Container">
            <Item greetings={greetings}></Item>
        </div>
    );
}

export default ItemListContainer;