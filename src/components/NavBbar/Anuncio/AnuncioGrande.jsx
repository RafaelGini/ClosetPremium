import React from "react";
import "./Container.css"

function Anunciogrande(props){
    return(
        <div className="AnuncioGrandeContainer">
            <h1 className="AnuncioGrande">{props.title}</h1>
        </div>
    );
}

export default Anunciogrande;