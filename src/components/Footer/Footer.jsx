import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer(props){
    return (
        <div className="footer">
            <Link to="/"><img src="img/ClosetLogo.png" alt="Closet Logo" width="170px"/></Link>
            <p className="footer-text">Gracias por visitarnos!</p>
        </div>
    );
}

export default Footer;