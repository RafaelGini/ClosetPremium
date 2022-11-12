import React from "react";
import { Link } from "react-router-dom";

function Logo(props){
    return (
        <div>
            <Link to="/"><img src="img/ClosetLogoBlack.png" alt={props.logoAlt} width={props.width}/></Link>
        </div>
    );
}

export default Logo;