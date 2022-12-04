import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Logo(props){
    return (
        <div>
            <Link to="/"><img src="/img/ClosetLogoBlack.png" alt={props.logoAlt} width={props.width} className="LogoNavMenu"/></Link>
        </div>
    );
}

export default Logo;