import React from "react";
import "./Container.css"

function Anuncio({anuncio}){
    return (
        <div className="Container">
            <p className="parr">{anuncio}</p>
        </div>
    );
}

export default Anuncio;